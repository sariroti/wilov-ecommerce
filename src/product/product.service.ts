import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, In, Repository } from 'typeorm';
import { Product } from './product-entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  get(skus?: string[]): Promise<Product[]> {
    const options: FindManyOptions<Product> = {
      where: {
        sku: In(skus),
      },
      relations: ['promotions', 'promotions.freeItemProduct'],
    };

    if (!skus) {
      delete options.where['sku'];
    }

    return this.productRepository.find(options);
  }
}
