import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { UpdateDeliveryStatusDto } from './dto/update-delivery-status.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('delivery')
@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Post(':orderId/assign/:driverId')
  assign(@Param('orderId') orderId: string, @Param('driverId') driverId: string) {
    return this.deliveryService.assign(orderId, driverId);
  }

  @Get('driver/:driverId')
  listForDriver(@Param('driverId') driverId: string) {
    return this.deliveryService.listForDriver(driverId);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() payload: UpdateDeliveryStatusDto) {
    return this.deliveryService.updateStatus(id, payload);
  }
}
