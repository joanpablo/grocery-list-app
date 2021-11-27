import { Component, Input } from '@angular/core';

/**
 * This component represents a loading indicator when loading the grocery list.
 */
@Component({
  selector: 'gl-products-list-loading',
  templateUrl: './products-list-loading.component.html',
  styleUrls: ['./products-list-loading.component.scss'],
})
export class ProductsListLoadingComponent {

  /**
   * Sets the text to be shown in the loading indicator.
   */
  @Input() label?: string;
}
