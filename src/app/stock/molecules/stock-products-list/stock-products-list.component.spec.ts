import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockProductsListComponent } from './stock-products-list.component';

describe('StockProductsListComponent', () => {
  let component: StockProductsListComponent;
  let fixture: ComponentFixture<StockProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockProductsListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
