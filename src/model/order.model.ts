import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Order extends Document {
  @Prop()
  merchantId: string;

  @Prop()
  createdAt: Date;

  @Prop()
  isPaid: boolean;

  @Prop()
  isConfirmed: boolean;
}

export const OrderSchema = SchemaFactory.createForClass(Order);