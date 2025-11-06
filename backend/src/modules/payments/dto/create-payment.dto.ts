import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty()
  @IsString()
  orderId: string;

  @ApiProperty({ enum: ['stripe', 'interac', 'cod'] })
  @IsEnum(['stripe', 'interac', 'cod'])
  provider: 'stripe' | 'interac' | 'cod';

  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty({ required: false })
  @IsOptional()
  metadata?: Record<string, any>;
}
