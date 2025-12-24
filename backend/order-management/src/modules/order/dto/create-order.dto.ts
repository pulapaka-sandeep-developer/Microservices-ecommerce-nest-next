import { IsMongoId, IsNumber, Min } from 'class-validator';

export class CreateOrderDto {
  @IsMongoId()
  productId: string;

  @IsNumber()
  @Min(1)
  quantity: number;
}
