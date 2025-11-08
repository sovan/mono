import { IsArray, IsNotEmpty, IsString } from 'class-validator';

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

  @IsArray()
  contains?: Array<string>;

  @IsString()
  text?: string;

  @IsString()
  size?: string;
}
