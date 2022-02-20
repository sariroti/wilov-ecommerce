import { Product } from 'src/product/product-entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class ProductPromotion {
  @PrimaryColumn({ name: 'sku', type: 'varchar' })
  sku: string;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'free_item_sku', type: 'varchar', nullable: true })
  freeItemSKU: string;

  @Column({ name: 'discount_item', type: 'int', nullable: true })
  discountItem: number;

  @Column({ name: 'discount', type: 'int', nullable: true })
  discount: number;

  @Column({ name: 'discount_condition', type: 'varchar', nullable: true })
  discountCondition: string;

  @ManyToOne((type) => Product, (p) => p.promotions, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn({ name: 'sku' })
  product: Product;

  @ManyToOne((type) => Product, (p) => p.freeItemPromotion, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn({ name: 'free_item_sku' })
  freeItemProduct: Product;
}
