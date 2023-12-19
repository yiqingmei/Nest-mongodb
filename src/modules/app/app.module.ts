import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from 'src/modules/orders/order.module';
import { MerchantModule } from 'src/modules/merchants/merchant.module';
// import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/takeout'),
    OrderModule,
    MerchantModule,
    // UsersModule,
    // AuthModule,
  ],
})
export class AppModule {}
