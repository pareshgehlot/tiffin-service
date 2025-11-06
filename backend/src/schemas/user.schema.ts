import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Address, AddressSchema } from './address.schema';

export type UserRole = 'admin' | 'customer' | 'delivery';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ enum: ['admin', 'customer', 'delivery'], default: 'customer' })
  role: UserRole;

  @Prop({ type: [AddressSchema], default: [] })
  addresses: Address[];

  @Prop({ type: [Types.ObjectId], ref: 'Order', default: [] })
  orders: Types.ObjectId[];

  @Prop({ default: false })
  isActive: boolean;

  @Prop()
  phoneNumber?: string;

  @Prop({ default: [] })
  preferences?: string[];
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
