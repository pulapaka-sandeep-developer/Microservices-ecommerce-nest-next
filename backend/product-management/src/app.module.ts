import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthMiddleware } from './common/middleware/auth.middleware';
import { ProductModule } from './modules/product/product.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    MongooseModule.forRoot(`mongodb+srv://sandeepp6300_db_user:Pdl0xQ6YWdnrQwy2@cluster0.o6crrsp.mongodb.net/products?appName=Cluster0`),
    ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(AuthMiddleware)
  //     .forRoutes("*");
  // }
}
