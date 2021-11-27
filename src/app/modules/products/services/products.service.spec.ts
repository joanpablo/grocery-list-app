import {TestBed} from '@angular/core/testing';

import {ProductsService} from './products.service';
import {SharedModule} from '../../shared/shared.module';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/Product";
import {defer} from "rxjs";

describe('ProductsService', () => {
  let productsService: ProductsService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [
        {provide: HttpClient, useValue: httpClientSpy}
      ]
    });
    productsService = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(productsService).toBeTruthy();
  });

  it('should return expected products', (done: DoneFn) => {
    // given: a list of products that the http client returns
    const expectedProducts: Product[] = [
      {id: 1, name: 'Bananas'},
      {id: 2, name: 'Milk'}
    ];

    httpClientSpy.get.and.returnValue(asyncData(expectedProducts));

    // when: load call loadProducts from the service
    productsService.loadProducts().subscribe({
        next: products => {
          // then: the service returns the expected collection of products
          expect(products).withContext('expected products').toEqual(expectedProducts);
          done();
        },
        error: done.fail
      }
    );

    // then: the service makes the right http request
    expect(httpClientSpy.get.calls.count()).withContext('received one call').toBe(1);
  });
});

/**
 * This is a helper utility function.
 * Create async observable that emits-once and completes
 * after a JS engine turn
 */
export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
