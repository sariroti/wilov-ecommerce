import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ProductPromotionModule } from './product-promotion/product-promotion.module';
import { Product } from './product/product-entity';
import { ProductPromotion } from './product-promotion/product-promotion.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Bynes@160285',
      database: 'wilov_ecommerce',
      entities: [Product, ProductPromotion],
      synchronize: true,
      logging: true,
    }),
    ProductModule,
    ProductPromotionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
