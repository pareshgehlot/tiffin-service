import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class AuditLog {
  @Prop({ required: true })
  actor: string;

  @Prop({ required: true })
  action: string;

  @Prop({ type: Object })
  metadata?: Record<string, any>;
}

export type AuditLogDocument = AuditLog & Document;
export const AuditLogSchema = SchemaFactory.createForClass(AuditLog);
