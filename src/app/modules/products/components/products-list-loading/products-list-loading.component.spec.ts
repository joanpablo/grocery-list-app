import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListLoadingComponent } from './products-list-loading.component';

describe('ProductsListLoadingComponent', () => {
  let component: ProductsListLoadingComponent;
  let fixture: ComponentFixture<ProductsListLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
