export class OrderResponseDto {
  orderId: string;
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  totalAmount: number;
  status: string;
  createdAt: Date;
}
