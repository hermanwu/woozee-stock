import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockImageDisplayComponent } from './stock-image-display.component';

describe('StockImageDisplayComponent', () => {
  let component: StockImageDisplayComponent;
  let fixture: ComponentFixture<StockImageDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockImageDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockImageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
