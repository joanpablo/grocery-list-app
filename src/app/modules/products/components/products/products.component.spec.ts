import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductsComponent} from './products.component';
import {SharedModule} from '../../../shared/shared.module';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../models/Product";
import {asyncData} from "../../services/products.service.spec";
import {ProductsListLoadingComponent} from "../products-list-loading/products-list-loading.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ProductsListComponent} from "../products-list/products-list.component";
import {ProductsItemComponent} from "../products-item/products-item.component";

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(async () => {

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    const expectedProducts: Product[] = [
      {id: 1, name: 'Bananas'},
      {id: 2, name: 'Milk'}
    ];

    httpClientSpy.get.and.returnValue(asyncData(expectedProducts));

    await TestBed.configureTestingModule({
      declarations: [ProductsComponent, ProductsListLoadingComponent, ProductsListComponent, ProductsItemComponent],
      imports: [SharedModule, ReactiveFormsModule],
      providers: [
        {provide: HttpClient, useValue: httpClientSpy},
      ]
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render properly the product items with the right titles', () => {
    // given: the component request the items from the server
    fixture.detectChanges();

    // when: query the HTML DOM
    const items = fixture.nativeElement.querySelectorAll('gl-products-list > gl-products-item');

    // then: the items are rendered
    expect(items.length).withContext("show the right amount of items").toEqual(2);

    // when: check the names of each item in the HTML DOM
    const expectedNames: string[] = ['Bananas', 'Milk'];
    const names: NodeList = fixture.nativeElement.querySelectorAll('gl-products-list .gl-products-item-title')

    const currentNames: string[] = [];
    names.forEach(node => currentNames.push(node.textContent ? node.textContent.trim() : ''))

    // then: each item has the right title
    expect(currentNames).withContext("show expected names").toEqual(expectedNames);
  })
});
