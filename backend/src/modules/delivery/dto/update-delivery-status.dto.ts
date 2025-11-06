import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';

export class UpdateDeliveryStatusDto {
  @ApiProperty({ enum: ['assigned', 'accepted', 'out-for-delivery', 'delivered'] })
  @IsEnum(['assigned', 'accepted', 'out-for-delivery', 'delivered'])
  status: 'assigned' | 'accepted' | 'out-for-delivery' | 'delivered';
}
