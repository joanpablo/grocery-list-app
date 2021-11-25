import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { concatMapTo, interval, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  loadProducts(): Observable<Array<Product>> {
    const products = [];
    for (let i = 1; i <= 5; i++) {
      products.push({ name: `Product ${i}`, id: i });
    }

    return interval(3000).pipe(concatMapTo(of(products)));
  }

  saveProduct(product: Product): Observable<Product> {
    return of(product);
  }

  deleteProduct(product: Product): Observable<Product> {
    return of(product);
  }

  updateProduct(product: Product): Observable<Product> {
    return of(product);
  }
}
