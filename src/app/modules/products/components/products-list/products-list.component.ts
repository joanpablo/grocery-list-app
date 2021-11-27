import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product';

/**
 * Component that visualize a list of products.
 */
@Component({
  selector: 'gl-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  /**
   * The collection of products to visualize.
   */
  @Input() products: Array<Product> = [];

  /**
   * Event that is emitted when the user selects a product to delete.
   */
  @Output() onDeleteProduct = new EventEmitter<Product>();

  /**
   * Event that is emitted when the user selects to edit a product.
   */
  @Output() onEditProduct = new EventEmitter<Product>();

  /**
   * Emits the `onDeleteProduct` event.
   * @param product the product that is about to be deleted.
   */
  notifyOnDeleteProduct(product: Product): void {
    this.onDeleteProduct.next(product);
  }

  /**
   * Emits the event `onEditProduct`.
   * @param product the product that is needed to be edited.
   */
  notifyOnEditProduct(product: Product): void {
    this.onEditProduct.next(product);
  }
}
