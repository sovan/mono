import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBlockDto {
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsString()
  @IsOptional()
  displayname?: string;
}
