// main.ts (或应用程序的入口文件)
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import * as mongoose from 'mongoose';
import { ConnectOptions } from 'mongoose';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 忽略类型检查
  // @ts-ignore
  await mongoose.connect('mongodb://localhost:27017/takeout', {
    useNewUrlParser: true,
  } as ConnectOptions);

  await app.listen(3000);
}

bootstrap();
