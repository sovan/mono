import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Block {
  @Prop({ required: true })
  type?: string;

  @Prop({ required: false })
  listHeader?: Array<string>;

  @Prop({ required: false })
  operations?: Array<string>;

  @Prop({ required: false })
  buttonText?: string;
}

export const BlockShema = SchemaFactory.createForClass(Block);
