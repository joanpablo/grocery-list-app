import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './routes/products-routing.module';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [CommonModule, SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}
