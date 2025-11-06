import { Injectable } from '@nestjs/common';
import { UpdateDeliveryStatusDto } from './dto/update-delivery-status.dto';

@Injectable()
export class DeliveryService {
  private assignments: any[] = [];

  assign(orderId: string, driverId: string) {
    const assignment = {
      id: `delivery-${Date.now()}`,
      orderId,
      driverId,
      status: 'assigned'
    };
    this.assignments.push(assignment);
    return assignment;
  }

  listForDriver(driverId: string) {
    return this.assignments.filter((assignment) => assignment.driverId === driverId);
  }

  updateStatus(id: string, payload: UpdateDeliveryStatusDto) {
    const assignment = this.assignments.find((item) => item.id === id);
    if (!assignment) return undefined;
    assignment.status = payload.status;
    return assignment;
  }
}
