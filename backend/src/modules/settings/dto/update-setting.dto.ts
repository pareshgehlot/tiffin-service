import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateSettingDto {
  @ApiProperty({ required: false })
  @IsOptional()
  value?: any;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  category?: string;
}
