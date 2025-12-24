import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './schema/order.schema';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OrdersService {
  private PRODUCT_SERVICE_URL = 'http://localhost:3001/products';
  constructor(
    @InjectModel(Order.name)
    private readonly orderModel: Model<Order>,
    private readonly httpService: HttpService,
  ) { }

  async create(data: Partial<Order>) {
    data.totalAmount = (data.price || 0) * (data.quantity || 0);
    return await this.orderModel.create(data);
  }

  async findAll(productId?: string) {
    try {
      let products: any;

      // Only call product service if productId is present
      if (productId) {
        const url = `${this.PRODUCT_SERVICE_URL}/${productId}`;

        const response = await firstValueFrom(
          this.httpService.get(url),
        );

        products = response.data;
        console.log('productId here', response.data);
      }

      const filter: any = {};

      // If productId found from product service, filter orders by productId
      if (products.sku) {
        filter.productId = products.sku;
      }

      let orders = await this.orderModel.find(filter).exec();
      return {
        data: {
          products,
          orders
        }
      }

    } catch (error) {
      throw error; // re-throw or return friendly message
    }
  }

  async findAllWithOutProductsId(productId?: string) {
    return await this.orderModel.find().exec();
  }

  async findById(id: string) {
    const order = await this.orderModel.findById(id);
    if (!order) {
      throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
    }
    return order;
  }

  async update(id: string, data: Partial<Order>) {
    if (data.price && data.quantity) {
      data.totalAmount = data.price * data.quantity;
    }

    const updated = await this.orderModel.findByIdAndUpdate(
      id,
      data,
      { new: true },
    );

    if (!updated) {
      throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
    }

    return updated;
  }

  async delete(id: string) {
    const deleted = await this.orderModel.findByIdAndDelete(id);
    if (!deleted) {
      throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'Order deleted successfully' };
  }
}
