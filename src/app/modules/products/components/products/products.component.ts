import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'gl-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Array<Product> = [];

  constructor(private productsService: ProductsService) {
    this.loadProducts();
  }

  private loadProducts() {
    this.productsService.loadProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
