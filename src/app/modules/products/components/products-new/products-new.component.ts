import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from '../../models/Product';

@Component({
  selector: 'gl-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.scss'],
})
export class ProductsNewComponent {
  productName = new FormControl('');

  /**
   * Event that is emitted when a new Product is about to be added.
   */
  @Output() onNewProduct = new EventEmitter<Product>();

  /**
   * Notifies that a new Product is about to be added.
   * @param name the name of the product to add
   */
  addProduct(name: string | undefined): boolean {
    if (name && name.trim() !== '') {
      const product = ProductsNewComponent.createProduct(name);
      this.onNewProduct.next(product);
      this.productName.reset();
    }

    return false;
  }

  private static createProduct(name: string) {
    return {
      name: name,
    };
  }
}
