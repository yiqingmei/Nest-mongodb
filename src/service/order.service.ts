import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from '../model/order.model';

@Injectable()
export class OrderService {
    
  delete(id: string) {
      throw new Error('Method not implemented.');
  }
  update(id: string, order: Order) {
      throw new Error('Method not implemented.');
  }
  create(order: Order) {
      throw new Error('Method not implemented.');
  }
  findOne(id: string) {
      throw new Error('Method not implemented.');
  }
  findAll() {
      throw new Error('Method not implemented.');
  }
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  // 提供增删改查的方法
}