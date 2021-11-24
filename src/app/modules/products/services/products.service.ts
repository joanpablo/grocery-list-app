import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  loadProducts(): Observable<Array<Product>> {
    const products = [];
    for (let i = 1; i <= 5; i++) {
      products.push({ name: `Product ${i}`, id: i });
    }

    return of(products);
  }

  saveProduct(product: Product): Observable<Product> {
    return of(product);
  }

  deleteProduct(product: Product): Observable<Product> {
    return of(product);
  }
}
