import { Product } from '../product-entity';

export class CheckoutDTO {
  constructor() {
    this.freeItemProduct = new Array<Product>();
    this.discount = new Array<number>();
    this.product = new Array<Product>();
  }
  subTotal: number;
  freeItemProduct: Product[];
  discountItem: string;
  discount: number[];
  product: Product[];
}
