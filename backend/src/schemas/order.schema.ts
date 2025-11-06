import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Order {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  customer: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Plan', required: true })
  plan: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'MenuItem', required: true })
  menuItem: Types.ObjectId;

  @Prop({ default: 'pending' })
  status: 'pending' | 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered' | 'cancelled';

  @Prop({ default: 'delivery' })
  fulfillmentType: 'delivery' | 'pickup';

  @Prop({ required: true })
  scheduleDate: Date;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  deliveryPartner?: Types.ObjectId;

  @Prop({ default: [] })
  instructions?: string;

  @Prop({ default: [] })
  history: Record<string, any>[];
}

export type OrderDocument = Order & Document;
export const OrderSchema = SchemaFactory.createForClass(Order);
OrderSchema.index({ customer: 1, scheduleDate: -1 });
