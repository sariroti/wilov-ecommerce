import { Controller, Get, Query } from '@nestjs/common';
import { CheckoutDTO } from './dto/checkout.dto';
import { Product } from './product-entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  get(): Promise<Product[]> {
    return this.productService.get();
  }

  @Get('checkout')
  async checkout(@Query('skus') skus: string[]): Promise<CheckoutDTO> {
    const products = await this.productService.get(skus);

    const checkoutDTO = new CheckoutDTO();

    let counter = 1;
    let counterDiscount = 1;
    skus.forEach((sku) => {
      const [currentProduct] = products.filter((x) => x.sku === sku);
      const { promotions } = currentProduct;

      const [currentPromotion] = promotions;

      if (currentPromotion?.freeItemSKU) {
        checkoutDTO.discount.push(currentPromotion.freeItemProduct.price);

        checkoutDTO.freeItemProduct.push(currentPromotion.freeItemProduct);
      }

      if (
        currentPromotion?.discountItem &&
        counter <= currentPromotion?.discountItem
      ) {
        checkoutDTO.discount.push(currentProduct.price);
        counter++;
      }

      if (currentPromotion?.discount) {
        const [discountConditionsOperator, discountConditonsApplied] =
          currentPromotion.discountCondition.split(';');
        const [operatorText, operatorValue] =
          discountConditionsOperator.split('=');

        if (operatorText === 'gte') {
          const isConditionSatisfied =
            skus.filter((x) => x === sku).length >= Number(operatorValue);

          if (isConditionSatisfied) {
            if (
              discountConditonsApplied == 'onlyfirst' &&
              counterDiscount === 1
            ) {
              checkoutDTO.discount.push(
                Number((currentProduct.price * 10) / 100),
              );
              counterDiscount++;
            }
          }
        }
      }

      checkoutDTO.product.push(currentProduct);
    });

    return checkoutDTO;
  }
}
