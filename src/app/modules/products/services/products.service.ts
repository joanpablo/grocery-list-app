import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  loadProducts(): Observable<Array<Product>> {
    const products = [];
    for (let i = 1; i <= 100; i++) {
      products.push({ name: `Product ${i}`, description: '', quantity: 1 });
    }

    return of(products);
  }
}
