import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPropertiesPageComponent } from './stock-properties-page.component';

describe('StockPropertiesPageComponent', () => {
  let component: StockPropertiesPageComponent;
  let fixture: ComponentFixture<StockPropertiesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockPropertiesPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPropertiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
