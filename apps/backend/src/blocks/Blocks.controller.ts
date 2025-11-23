import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  HttpException,
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

    const allowedType = [
      'container',
      'list',
      'button',
      'link',
      'text',
      'col',
      'row',
      'input',
      'form',
      'select',
      'accordion',
      'radio',
      'tick',
      'check',
    ];
    if (!allowedType.includes(createBlockDto.type))
      throw new HttpException('Allowed types: ' + allowedType, 404);

    const dbObject: CreateBlockDto = { type: createBlockDto.type };
    switch (createBlockDto.type) {
      case 'select': {
        if (!createBlockDto.name)
          throw new HttpException('Select box name required', 404);
        dbObject.name = createBlockDto.name;

        if (!createBlockDto.label)
          throw new HttpException('Select box label required', 404);
        dbObject.label = createBlockDto.label;

        if (
          createBlockDto.validation &&
          typeof createBlockDto.validation !== 'object'
        )
          throw new HttpException('Validation should be an object only', 404);
        dbObject.validation = createBlockDto.validation;
        break;
      }
      case 'check':
      case 'radio': {
        if (!createBlockDto.name) throw new HttpException('Name required', 404);
        dbObject.name = createBlockDto.name;

        if (!createBlockDto.label)
          throw new HttpException('Label required', 404);
        dbObject.label = createBlockDto.label;

        if (
          createBlockDto.validation &&
          typeof createBlockDto.validation !== 'object'
        )
          throw new HttpException('Validation should be an object only', 404);
        dbObject.validation = createBlockDto.validation;

        if (!createBlockDto.contains)
          throw new HttpException('Contains required', 404);

        if (!Array.isArray(createBlockDto.contains))
          throw new HttpException('Contains should be an array', 404);
        dbObject.contains = createBlockDto.contains;
        break;
      }

      case 'input': {
        const allowedInputType = ['text', 'password', 'textarea'];
        if (!createBlockDto.inputType)
          throw new HttpException('Input Type required', 404);
        if (!allowedInputType.includes(createBlockDto.inputType))
          throw new HttpException(
            'Allowed Input types: ' + allowedInputType,
            404
          );
        dbObject.inputType = createBlockDto.inputType;

        if (!createBlockDto.name)
          throw new HttpException('Name of inputbox is required', 404);
        dbObject.name = createBlockDto.name;

        if (!createBlockDto.label)
          throw new HttpException('Input Label is required', 404);
        dbObject.label = createBlockDto.label;

        if (
          createBlockDto.validation &&
          typeof createBlockDto.validation !== 'object'
        )
          throw new HttpException('Validation should be an object only', 404);
        dbObject.validation = createBlockDto.validation;

        break;
      }

      case 'text': {
        if (!createBlockDto.text) throw new HttpException('Text required', 404);
        dbObject.text = createBlockDto.text;
        break;
      }

      case 'tick': {
        if (!createBlockDto.label)
          throw new HttpException('Label required', 404);
        dbObject.label = createBlockDto.label;
        if (!createBlockDto.value)
          throw new HttpException('Value required', 404);
        dbObject.value = createBlockDto.value;
        break;
      }

      case 'col': {
        if (!createBlockDto.size) throw new HttpException('Size required', 404);
        if (
          Number.parseInt(createBlockDto.size) < 1 ||
          Number.parseInt(createBlockDto.size) > 12
        )
          throw new HttpException('Column size should be within 1 to 12', 404);
        dbObject.size = createBlockDto.size;

        if (!createBlockDto.contains)
          throw new HttpException('Contains required', 404);

        if (!Array.isArray(createBlockDto.contains))
          throw new HttpException('Contains should be an array', 404);
        dbObject.contains = createBlockDto.contains;

        break;
      }

      case 'accordion':
      case 'row':
      case 'form':
      case 'container': {
        if (!createBlockDto.contains)
          throw new HttpException('Contains required', 404);

        if (!Array.isArray(createBlockDto.contains))
          throw new HttpException('Contains should be an array', 404);
        dbObject.contains = createBlockDto.contains;
        break;
      }

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

      case 'button': {
        if (!createBlockDto.buttonText)
          throw new HttpException('Button text required', 404);
        dbObject.buttonText = createBlockDto.buttonText;

        const allowedButtonType = ['submit'];
        if (
          createBlockDto.buttonType &&
          !allowedButtonType.includes(createBlockDto.buttonType)
        )
          throw new HttpException(
            'Allowed button types: ' + allowedButtonType,
            404
          );
        dbObject.buttonType = createBlockDto.buttonType;
        break;
      }

      default:
        throw new HttpException(
          'No switch defined for ' + createBlockDto.type,
          404
        );
    }

    try {
      const newBlock = await this.BlockService.createBlock(dbObject);
      return newBlock;
    } catch (e) {
      return e;
    }
  }

  @Get()
  async getBlocks() {
    const dbRec = await this.BlockService.getBlocks();
    return dbRec;
  }

  async getBlockRecurring(id: string) {
    const findBlock: any = await this.BlockService.getBlockByID(id);
    if (!findBlock) throw new HttpException('Block not found', 404);
    const returnData: any = { _id: findBlock.id, type: findBlock.type };
    switch (findBlock.type) {
      case 'text': {
        returnData.text = findBlock.text;
        returnData.style = findBlock.style;
        break;
      }

      case 'col': {
        returnData.size = findBlock.size;
        returnData.contains = [];
        for (const ID of findBlock.contains) {
          const innerBlock = await this.getBlockRecurring(ID);
          returnData.contains.push(innerBlock);
        }
        break;
      }

      case 'input': {
        returnData.inputType = findBlock.inputType;
        returnData.name = findBlock.name;
        returnData.label = findBlock.label;
        returnData.validation = findBlock.validation;
        break;
      }

      case 'select': {
        returnData.name = findBlock.name;
        returnData.label = findBlock.label;
        returnData.validation = findBlock.validation;
        break;
      }

      case 'list': {
        returnData.listHeader = findBlock.listHeader;
        returnData.listHeader.push('Operation');
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
        returnData.buttonType = findBlock.buttonType;
        break;
      }
      case 'check':
      case 'radio': {
        returnData.name = findBlock.name;
        returnData.label = findBlock.label;
        returnData.validation = findBlock.validation;
        returnData.contains = [];
        for (const ID of findBlock.contains) {
          const innerBlock = await this.getBlockRecurring(ID);
          returnData.contains.push(innerBlock);
        }
        break;
      }
      case 'row':
      case 'form':
      case 'container':
      case 'accordion': {
        returnData.contains = [];
        for (const ID of findBlock.contains) {
          const innerBlock = await this.getBlockRecurring(ID);
          returnData.contains.push(innerBlock);
        }
        break;
      }

      case 'tick': {
        console.log(JSON.stringify(findBlock));
        returnData.label = findBlock.label;
        returnData.value = findBlock.value;
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

  @Get('actual-json/:id')
  async getBlockActualData(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Block not found', 404);
    const findBlock: any = await this.BlockService.getBlockByID(id);
    return findBlock;
  }

  @Post(':id')
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
