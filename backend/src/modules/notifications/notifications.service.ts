import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Injectable()
export class NotificationsService {
  async send(payload: CreateNotificationDto) {
    // Integrations would go here. For now we just echo the payload.
    return { delivered: true, payload };
  }
}
