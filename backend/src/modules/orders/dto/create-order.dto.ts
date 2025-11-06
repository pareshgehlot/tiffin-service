import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString
} from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  @IsString()
  customerId: string;

  @ApiProperty()
  @IsString()
  planId: string;

  @ApiProperty()
  @IsString()
  menuItemId: string;

  @ApiProperty({ enum: ['delivery', 'pickup'], required: false })
  @IsOptional()
  @IsEnum(['delivery', 'pickup'])
  fulfillmentType?: 'delivery' | 'pickup';

  @ApiProperty()
  @IsDateString()
  scheduleDate: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  instructions?: string;
}
