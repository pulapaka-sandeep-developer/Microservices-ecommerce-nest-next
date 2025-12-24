import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schema/order.schema';
import { AuthMiddleware } from 'src/common/middleware/auth.middleware';
import { HttpModule } from '@nestjs/axios';
import { OrdersController } from './order.controller';
import { OrdersService } from './order.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature(
      [
        { name: Order.name, schema: OrderSchema }
      ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrderModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'orders', method: RequestMethod.ALL },
      );
  }
}
