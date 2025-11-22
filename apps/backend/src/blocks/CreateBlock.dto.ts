import { IsArray, IsNotEmpty, IsObject, IsString } from 'class-validator';
import { Validation } from './Validation.schema';

export class CreateBlockDto {
  @IsNotEmpty()
  @IsString()
  type?: string;

  @IsArray()
  listHeader?: Array<string>;

  @IsArray()
  operations?: Array<string>;

  @IsString()
  buttonText?: string;

  @IsString()
  buttonType?: string;

  @IsArray()
  contains?: Array<string>;

  @IsString()
  text?: string;

  @IsString()
  size?: string;

  @IsString()
  inputType?: string;

  @IsString()
  name?: string;

  @IsString()
  label?: string;

  @IsString()
  value?: string;

  @IsObject()
  validation?: Validation;
}
