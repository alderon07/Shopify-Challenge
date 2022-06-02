import { Module } from '@nestjs/common';
import { InventoryModule } from './inventory/inventory.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [InventoryModule, PrismaModule, ProductModule, LocationModule,],
})
export class AppModule {}
