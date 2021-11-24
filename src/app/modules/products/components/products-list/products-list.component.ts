import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'gl-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  @Input() products: Array<Product> = [];
}
