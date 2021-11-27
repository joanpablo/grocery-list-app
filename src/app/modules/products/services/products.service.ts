import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

/**
 * Service that make http requests for create, update, list, and delete products.
 */
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  /**
   * Constructs a new instance of the class.
   * @param http the http client for making requests to the server.
   */
  constructor(private http: HttpClient) {}

  /**
   * Returns the list of all products of the grocery list.
   * @return an Observable with the collection of products.
   */
  loadProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(environment.apiUrl);
  }

  /**
   * Creates a new Product.
   * @param product the product to be created.
   * @return an Observable with the new created product.
   */
  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(environment.apiUrl, product);
  }

  /**
   * Deletes a product given its id.
   * @param productId the id of the product that needs to be deleted.
   * @return an Observable with the deleted product.
   */
  deleteProduct(productId: number): Observable<Product> {
    return this.http.delete<Product>(`${environment.apiUrl}/${productId}`);
  }

  /**
   * Updates a product.
   * @param product the product that needs to be updated.
   * @return an Observable with the updated product.
   */
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `${environment.apiUrl}/${product.id}`,
      product
    );
  }
}
