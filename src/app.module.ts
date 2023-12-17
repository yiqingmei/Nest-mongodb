import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from './modules/orders/order.module';
// import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/takeout'),
    OrderModule,
    // UsersModule,
    // AuthModule,
  ],
})
export class AppModule {}
