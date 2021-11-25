import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListEmptyComponent } from './products-list-empty.component';

describe('ProductsListEmptyComponent', () => {
  let component: ProductsListEmptyComponent;
  let fixture: ComponentFixture<ProductsListEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
