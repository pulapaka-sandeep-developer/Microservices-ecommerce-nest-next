import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schema/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) { }

  async create(data: Partial<Product>) {
    return await this.productModel.create(data);
  }

  async findAll() {
    return await this.productModel.find().exec();
  }

  async findById(id: string) {
    console.log(id);
    
    const product = await this.productModel.findById(id);
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  async update(id: string, data: Partial<Product>) {
    const updated = await this.productModel.findByIdAndUpdate(
      id,
      data,
      { new: true },
    );
    if (!updated) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return updated;
  }

  async delete(id: string) {
    const deleted = await this.productModel.findByIdAndDelete(id);
    if (!deleted) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'Product deleted successfully' };
  }
}
