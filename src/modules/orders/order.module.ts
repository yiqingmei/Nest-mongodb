import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './controller/order.controller'; 
import { OrderService } from './service/order.service'; 
import { Order, OrderSchema } from './model/order.model';
@Module({
  imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}