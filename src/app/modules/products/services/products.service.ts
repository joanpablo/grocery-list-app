import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  loadProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(environment.apiUrl);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(environment.apiUrl, product);
  }

  deleteProduct(product: Product): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/${product.id}`);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `${environment.apiUrl}/${product.id}`,
      product
    );
  }
}
