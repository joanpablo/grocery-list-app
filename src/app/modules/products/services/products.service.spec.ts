import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { SharedModule } from '../../shared/shared.module';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
