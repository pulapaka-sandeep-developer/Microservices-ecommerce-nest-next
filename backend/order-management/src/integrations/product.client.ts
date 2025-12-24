import axios from 'axios';

export class ProductClient {
  private PRODUCT_SERVICE_URL = 'http://localhost:3001/products';

  async getProduct(productId: string) {
    const response = await axios.get(
      `${this.PRODUCT_SERVICE_URL}/${productId}`,
    );
    return response.data;
  }
}
