import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true })
  productId: string;

  @Prop()
  productName: string;

  @Prop()
  price: number;

  @Prop({ required: true })
  quantity: number;

  @Prop()
  totalAmount: number;

  @Prop({ default: 'CREATED' })
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
