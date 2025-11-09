import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Validation {
  @Prop({ required: false })
  required?: string;

  @Prop({ required: false })
  alphabreatOnly?: string;
}
export const ValidationSchema = SchemaFactory.createForClass(Validation);
