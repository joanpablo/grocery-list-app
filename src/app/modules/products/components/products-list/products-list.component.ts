import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'gl-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  @Input() products: Array<Product> = [];

  @Output() onDeleteProduct = new EventEmitter<Product>();

  deleteProduct(product: Product) {
    this.onDeleteProduct.next(product);
  }
}
