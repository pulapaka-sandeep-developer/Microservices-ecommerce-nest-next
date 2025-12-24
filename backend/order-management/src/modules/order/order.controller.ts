// import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
// import { CreateOrderDto } from "./dto/create-order.dto";
// import { OrderService } from "./order.service";
// import { Public } from "src/common/decorators/public.decorator";

// @Controller('orders')
// export class OrderController {
//   constructor(private readonly orderService: OrderService) { }

//   //needs authModules
//   // @Roles(Role.ADMIN)
//   // @UseGuards(RolesGuard)
//   @Public()
//   @Post()
//   create(@Body() dto: CreateOrderDto) {
//     return this.orderService.createOrder(dto);
//   }

//   @Public()
//   @Get()
//   findAll() {
//     return this.orderService.findAll();
//   }
// }

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Order } from './schema/order.schema';
import { OrdersService } from './order.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Post()
  async create(@Body() body: Partial<Order>) {
    try {
      return await this.ordersService.create(body);
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to create order',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  async findAll(
    @Query('productId') productId?: string,
  ) {
    try {
      console.log('here', productId);

      return await this.ordersService.findAll(productId);
    } catch (error) {
      throw new HttpException(
        'Failed to fetch orders here',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      return await this.ordersService.findById(id);
    } catch {
      throw new HttpException(
        'Order not found',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: Partial<Order>,
  ) {
    try {
      return await this.ordersService.update(id, body);
    } catch {
      throw new HttpException(
        'Failed to update order',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      return await this.ordersService.delete(id);
    } catch {
      throw new HttpException(
        'Failed to delete order',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

