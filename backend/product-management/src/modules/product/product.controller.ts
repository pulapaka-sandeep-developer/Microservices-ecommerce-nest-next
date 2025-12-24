import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpStatus,
  HttpException,
  Query,
} from '@nestjs/common';
import { Product } from './schema/product.schema';
import { ProductsService } from './product.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  async create(@Body() body: Partial<Product>) {
    try {
      return await this.productsService.create(body);
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to create product',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.productsService.findAll();
    } catch (error) {
      throw new HttpException(
        'Failed to fetch products',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }


  @Get()
  async findById(@Param('id') id: string) {
    try {
      return await this.productsService.findById(id);
    } catch (error) {
      throw new HttpException(
        'Product not found',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: Partial<Product>,
  ) {
    try {
      return await this.productsService.update(id, body);
    } catch (error) {
      throw new HttpException(
        'Failed to update product',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      return await this.productsService.delete(id);
    } catch (error) {
      throw new HttpException(
        'Failed to delete product',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
