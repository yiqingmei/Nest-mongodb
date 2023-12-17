import { Controller } from '@nestjs/common';
import { MerchantService } from '../service/merchant.service';

@Controller('merchants')
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}

  // 处理HTTP请求并调用服务
}