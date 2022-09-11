import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMetricDisplayComponent } from './stock-metric-display.component';

describe('StockMetricDisplayComponent', () => {
  let component: StockMetricDisplayComponent;
  let fixture: ComponentFixture<StockMetricDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockMetricDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMetricDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
