import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Style {
  @Prop({ required: false })
  marginTop?: string;

  @Prop({ required: false })
  marginBotton?: string;

  @Prop({ required: false })
  fontSize?: string;
}
export const StyleSchema = SchemaFactory.createForClass(Style);
