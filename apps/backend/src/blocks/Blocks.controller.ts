import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  HttpException,
  Patch,
  Delete,
} from '@nestjs/common';
import { BlocksService } from './Blocks.servies';
import { CreateBlockDto } from './CreateBlock.dto';
import mongoose from 'mongoose';
import { UpdateBlockDto } from './UpdateBlock.dto';

@Controller('Blocks')
export class BlocksController {
  constructor(private readonly BlockService: BlocksService) {}

  @Post()
  async createBlock(@Body() createBlockDto: CreateBlockDto) {
    if (!createBlockDto.type) throw new HttpException('Type required', 404);

    const allowedType = ['container', 'list', 'button', 'link'];
    if (!allowedType.includes(createBlockDto.type))
      throw new HttpException('Allowed types: ' + allowedType, 404);

    const dbObject: CreateBlockDto = { type: createBlockDto.type };
    switch (createBlockDto.type) {
      case 'list': {
        if (!createBlockDto.listHeader)
          throw new HttpException('All header of list required', 404);

        if (!Array.isArray(createBlockDto.listHeader))
          throw new HttpException('All header should be an array', 404);
        dbObject.listHeader = createBlockDto.listHeader;

        if (!createBlockDto.operations)
          throw new HttpException('Operation required', 404);

        if (!Array.isArray(createBlockDto.operations))
          throw new HttpException('Operation should be an array', 404);

        dbObject.operations = createBlockDto.operations;
        break;
      }

      case 'container': {
        if (!createBlockDto.contains)
          throw new HttpException('Contains required', 404);

        if (!Array.isArray(createBlockDto.contains))
          throw new HttpException('Contains should be an array', 404);

        dbObject.contains = createBlockDto.contains;
        break;
      }
      case 'button': {
        if (!createBlockDto.buttonText)
          throw new HttpException('Button text required', 404);
        dbObject.buttonText = createBlockDto.buttonText;
        break;
      }
      default:
        throw new HttpException(
          'No switch defined for ' + createBlockDto.type,
          404
        );
    }
    try {
      await this.BlockService.createBlock(dbObject);
    } catch (e) {
      return e;
    }
    return true;
  }

  @Get()
  async getBlocks() {
    const dbRec = await this.BlockService.getBlocks();
    return dbRec;
  }

  async getBlockRecurring(id: string) {
    console.log(id + 'sovan');
    const findBlock: any = await this.BlockService.getBlockByID(id);
    if (!findBlock) throw new HttpException('Block not found', 404);
    const returnData: any = { type: findBlock.type };
    switch (findBlock.type) {
      case 'list': {
        returnData.listHeader = findBlock.listHeader;
        returnData.operations = {};
        returnData.operations.contains = [];
        returnData.listRecord = [
          ['Sovan', '25', 'Male'],
          ['Luna', '31', 'Female'],
        ];
        for (const ID of findBlock.operations) {
          const innerBlock = await this.getBlockRecurring(ID);
          returnData.operations.contains.push(innerBlock);
        }
        break;
      }
      case 'button': {
        returnData.buttonText = findBlock.buttonText;
        break;
      }
      case 'container': {
        returnData.contains = [];
        for (const ID of findBlock.contains) {
          const innerBlock = await this.getBlockRecurring(ID);
          returnData.contains.push(innerBlock);
        }
        break;
      }
      default:
        throw new HttpException('No switch defined for ' + findBlock.type, 404);
    }
    return returnData;
  }

  @Get(':id')
  async getBlockByID(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Block not found', 404);
    const returnData = this.getBlockRecurring(id);
    return returnData;
  }

  @Patch(':id')
  async updateBlock(
    @Param('id') id: string,
    @Body() updateBlockDto: UpdateBlockDto
  ) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 404);
    const updateBlock = await this.BlockService.updateBlock(id, updateBlockDto);
    if (!updateBlock) throw new HttpException('Block not found', 404);
    return updateBlock;
  }

  @Delete(':id')
  async deleteBlock(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 404);
    const deleteBlock = await this.BlockService.deleteBlock(id);
    if (!deleteBlock) throw new HttpException('Block not found', 404);
    return deleteBlock;
  }
}
