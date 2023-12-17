import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Merchant extends Document {
  @Prop()
  name: string;

  @Prop()
  domain: string;

  @Prop()
  address: string;

  @Prop()
  phone: string;
}

export const MerchantSchema = SchemaFactory.createForClass(Merchant);
