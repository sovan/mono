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
  createBlock(@Body() createBlockDto: CreateBlockDto) {
    return this.BlockService.createBlock(createBlockDto);
  }

  @Get()
  getBlocks() {
    return this.BlockService.getBlocks();
  }

  @Get(':id')
  async getBlockByID(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Block not found', 404);
    const findBlock = await this.BlockService.getBlockByID(id);
    if (!findBlock) throw new HttpException('Block not found', 404);
    return findBlock;
  }

  @Patch(':id')
  async updateBlock(
    @Param('id') id: string,
    @Body() updateBlockDto: UpdateBlockDto,
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
