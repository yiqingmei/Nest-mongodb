import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MerchantController } from 'src/modules/merchants/controller/merchant.controller';
import { MerchantService } from 'src/modules/merchants/service/merchant.service';
import { Merchant, MerchantSchema } from 'src/modules/merchants/model/merchant.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Merchant.name, schema: MerchantSchema }])],
  controllers: [MerchantController],
  providers: [MerchantService],
})
export class MerchantModule {}