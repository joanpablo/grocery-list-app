import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './routes/products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductsNewComponent } from './components/products-new/products-new.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsItemComponent } from './components/products-item/products-item.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsNewComponent,
    ProductsListComponent,
    ProductsItemComponent,
  ],
  imports: [CommonModule, SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}
