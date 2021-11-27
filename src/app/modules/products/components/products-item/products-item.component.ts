import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product';

/**
 * Represents an item of the product list.
 */
@Component({
  selector: 'gl-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss'],
})
export class ProductsItemComponent {
  /**
   * Sets the product bound to this item.
   */
  @Input() product!: Product;

  /**
   * Event that is emitted when the user select to delete the product.
   */
  @Output() onDelete = new EventEmitter<Product>();

  /**
   * Notifies that the user wants to delete the product.
   * @param $event the event emitted by the mouse when the user selects to delete the product.
   */
  notifyOnDelete($event: MouseEvent) {
    $event.stopPropagation();
    this.onDelete.next(this.product);
  }
}
