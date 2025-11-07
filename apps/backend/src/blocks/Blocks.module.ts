import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Block, BlockShema } from './Block.schema';
import { BlocksService } from './Blocks.servies';
import { BlocksController } from './Blocks.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Block.name,
        schema: BlockShema,
      },
    ]),
  ],
  providers: [BlocksService],
  controllers: [BlocksController],
})
export class BlocksModule {}
