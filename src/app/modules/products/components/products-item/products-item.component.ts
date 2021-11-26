import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'gl-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss'],
})
export class ProductsItemComponent {
  @Input() product!: Product;

  @Output() onDelete = new EventEmitter<Product>();

  delete($event: MouseEvent, product: Product) {
    $event.stopPropagation();
    this.onDelete.next(product);
  }
}
