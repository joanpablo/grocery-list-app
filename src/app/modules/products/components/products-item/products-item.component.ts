import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'gl-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss'],
})
export class ProductsItemComponent {
  @Input() product!: Product;
}
