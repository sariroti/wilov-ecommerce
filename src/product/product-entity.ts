import { ProductPromotion } from 'src/product-promotion/product-promotion.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryColumn({ name: 'sku', type: 'varchar' })
  sku: string;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'price', type: 'decimal', precision: 18, scale: 2 })
  price: number;

  @Column({ name: 'inventory_qty', type: 'int' })
  inventoryQty: number;

  @OneToMany((type) => ProductPromotion, (pp) => pp.product, {
    createForeignKeyConstraints: false,
  })
  promotions: ProductPromotion[];

  @OneToMany((type) => ProductPromotion, (pp) => pp.freeItemProduct, {
    createForeignKeyConstraints: false,
  })
  freeItemPromotion: ProductPromotion[];
}
