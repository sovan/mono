import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Block {
  @Prop({ unique: true, required: true })
  name?: string;

  @Prop({ required: false })
  displayname?: string;
}

export const BlockShema = SchemaFactory.createForClass(Block);
