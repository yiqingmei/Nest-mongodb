import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Merchant } from '../model/merchant.model';

@Injectable()
export class MerchantService {
  constructor(@InjectModel(Merchant.name) private merchantModel: Model<Merchant>) {}
    // 提供增删改查的方法
}