import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from '../model/order.model';


@Injectable()
export class OrderService {

    constructor(@InjectModel(Order.name) private orderModel: Model<Order>) { }

    async findAll() {
        return this.orderModel.find().exec();
    }

    async findOne(id: string) {
        return this.orderModel.findById(id).exec();
    }

    async create(order: Order) {
        const newOrder = new this.orderModel(order);
        return newOrder.save();
    }

    async update(id: string, order: Order) {
        return this.orderModel.findByIdAndUpdate(id, order, { new: true }).exec();
    }

    async delete(id: string) {
        return this.orderModel.deleteOne({ _id: id }).exec();
    }
}
