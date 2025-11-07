import { Injectable } from '@nestjs/common';
import { Block } from './Block.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBlockDto } from './CreateBlock.dto';
import { UpdateBlockDto } from './UpdateBlock.dto';

@Injectable()
export class BlocksService {
  constructor(
    @InjectModel(Block.name) private readonly BlockModel: Model<Block>,
  ) {}

  createBlock(createBlockDto: CreateBlockDto) {
    const newBlock = new this.BlockModel(createBlockDto);
    return newBlock.save();
  }

  getBlocks() {
    return this.BlockModel.find();
  }

  getBlockByID(id: string) {
    return this.BlockModel.findById(id);
  }

  updateBlock(id: string, updateBlockDto: UpdateBlockDto) {
    return this.BlockModel.findByIdAndUpdate(id, updateBlockDto, { new: true });
  }

  deleteBlock(id: string) {
    return this.BlockModel.findByIdAndDelete(id);
  }
}
