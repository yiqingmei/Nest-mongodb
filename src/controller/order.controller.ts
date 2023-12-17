import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { OrderService } from '../service/order.service';
import { Order } from '../model/order.model';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getAllOrders() {
    return this.orderService.findAll();
  }

  @Get(':id')
  getOrder(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Post()
  createOrder(@Body() order: Order) {
    return this.orderService.create(order);
  }

  @Put(':id')
  updateOrder(@Param('id') id: string, @Body() order: Order) {
    return this.orderService.update(id, order);
  }

  @Delete(':id')
  deleteOrder(@Param('id') id: string) {
    return this.orderService.delete(id);
  }
}