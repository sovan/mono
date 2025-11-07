import { IsOptional, IsString } from 'class-validator';

export class UpdateBlockDto {
  @IsString()
  @IsOptional()
  displayname?: string;
}
