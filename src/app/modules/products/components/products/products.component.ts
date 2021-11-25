import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductsService } from '../../services/products.service';
import { ProductsEditComponent } from '../products-edit/products-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'gl-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Array<Product> = [];

  constructor(
    private productsService: ProductsService,
    private dialog: MatDialog
  ) {
    this.loadProducts();
  }

  private loadProducts() {
    this.productsService.loadProducts().subscribe((products) => {
      this.products = products;
    });
  }

  saveProduct(product: Product) {
    this.productsService.saveProduct(product).subscribe((savedProduct) => {
      this.products.splice(0, 0, savedProduct);
    });
  }

  deleteProduct(product: Product) {
    this.productsService.deleteProduct(product).subscribe((product) => {
      const productIndex = this.products.findIndex((p) => p.id === product.id);
      if (productIndex >= 0) {
        this.products.splice(productIndex, 1);
      }
    });
  }

  editProduct(product: Product) {
    const dialogRef = this.dialog.open(ProductsEditComponent, {
      data: product,
    });

    dialogRef.afterClosed().subscribe((product) => {
      console.log(product);
    });
  }
}
