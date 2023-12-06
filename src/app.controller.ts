import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Ctx, MessagePattern, Payload, RedisContext } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('fx')
  getHello(@Payload() data: any, @Ctx() context: RedisContext): void {
    console.log(context.getArgs());
    console.log(context.getChannel());
    console.log(data);
  }
}
