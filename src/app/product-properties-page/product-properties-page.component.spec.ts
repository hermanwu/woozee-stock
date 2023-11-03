import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPropertiesPageComponent } from './product-properties-page.component';

describe('ProductPropertiesPageComponent', () => {
  let component: ProductPropertiesPageComponent;
  let fixture: ComponentFixture<ProductPropertiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPropertiesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPropertiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
