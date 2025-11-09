import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Validation, ValidationSchema } from './Validation.schema';

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

  @Prop({ required: false })
  buttonType?: string;

  @Prop({ required: false })
  contains?: Array<string>;

  @Prop({ required: false })
  text?: string;

  @Prop({ required: false })
  size?: string;

  @Prop({ required: false })
  inputType?: string;

  @Prop({ required: false })
  name?: string;

  @Prop({ required: false })
  label?: string;

  @Prop({ type: ValidationSchema })
  validation?: Validation;
}

export const BlockShema = SchemaFactory.createForClass(Block);
