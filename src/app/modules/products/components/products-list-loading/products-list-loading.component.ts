import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-products-list-loading',
  templateUrl: './products-list-loading.component.html',
  styleUrls: ['./products-list-loading.component.scss'],
})
export class ProductsListLoadingComponent {
  @Input() label?: string;
}
