import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentsService {
  private payments: any[] = [];

  create(payload: CreatePaymentDto) {
    const payment = { id: `payment-${Date.now()}`, status: 'pending', ...payload };
    this.payments.push(payment);
    return payment;
  }

  findAll() {
    return this.payments;
  }

  findOne(id: string) {
    return this.payments.find((payment) => payment.id === id);
  }

  update(id: string, payload: UpdatePaymentDto) {
    const payment = this.findOne(id);
    if (!payment) return undefined;
    Object.assign(payment, payload);
    return payment;
  }

  remove(id: string) {
    this.payments = this.payments.filter((payment) => payment.id !== id);
    return { deleted: true };
  }
}
