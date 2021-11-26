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
  isLoading = true;

  constructor(
    private productsService: ProductsService,
    private dialog: MatDialog
  ) {
    this.loadProducts();
  }

  get isEmptyList(): boolean {
    return !this.isLoading && this.products.length === 0;
  }

  get isNotEmptyList(): boolean {
    return !this.isLoading && this.products.length > 0;
  }

  private loadProducts() {
    this.isLoading = true;
    this.productsService.loadProducts().subscribe((products) => {
      this.products = products;
      this.isLoading = false;
    });
  }

  saveProduct(product: Product) {
    this.productsService.saveProduct(product).subscribe((savedProduct) => {
      this.products.splice(0, 0, savedProduct);
    });
  }

  deleteProduct(product: Product) {
    this.productsService.deleteProduct(product).subscribe(() => {
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
      if (product) {
        this.productsService
          .updateProduct(product)
          .subscribe((updatedProduct) => this.onProductUpdated(updatedProduct));
      }
    });
  }

  private onProductUpdated(product: Product) {
    const index = this.products.findIndex((p) => p.id === product.id);
    if (index >= 0) {
      this.products.splice(index, 1, product);
    }
  }
}
