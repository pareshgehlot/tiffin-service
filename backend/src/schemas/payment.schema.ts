import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Payment {
  @Prop({ type: Types.ObjectId, ref: 'Order', required: true })
  order: Types.ObjectId;

  @Prop({ required: true })
  provider: 'stripe' | 'interac' | 'cod';

  @Prop({ required: true })
  amount: number;

  @Prop({ default: 'pending' })
  status: 'pending' | 'completed' | 'failed' | 'refunded';

  @Prop({ type: Object })
  metadata?: Record<string, any>;
}

export type PaymentDocument = Payment & Document;
export const PaymentSchema = SchemaFactory.createForClass(Payment);
