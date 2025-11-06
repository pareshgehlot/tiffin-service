import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  private orders: any[] = [];

  create(payload: CreateOrderDto) {
    const order = {
      id: `order-${Date.now()}`,
      status: 'pending',
      ...payload
    };
    this.orders.push(order);
    return order;
  }

  findAll() {
    return this.orders;
  }

  findOne(id: string) {
    return this.orders.find((order) => order.id === id);
  }

  update(id: string, payload: UpdateOrderDto) {
    const order = this.findOne(id);
    if (!order) return undefined;
    Object.assign(order, payload);
    return order;
  }

  remove(id: string) {
    this.orders = this.orders.filter((order) => order.id !== id);
    return { deleted: true };
  }
}
