import { IsOptional, IsNumber, IsString, Min } from 'class-validator';

export class UpdateOrderDto {
  @IsOptional()
  @IsNumber()
  @Min(1)
  quantity?: number;

  @IsOptional()
  @IsString()
  status?: 'CREATED' | 'CONFIRMED' | 'CANCELLED' | 'DELIVERED';
}
