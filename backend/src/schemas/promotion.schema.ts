import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Promotion {
  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  discountPercentage: number;

  @Prop({ default: true })
  isActive: boolean;

  @Prop()
  startDate?: Date;

  @Prop()
  endDate?: Date;
}

export type PromotionDocument = Promotion & Document;
export const PromotionSchema = SchemaFactory.createForClass(Promotion);
