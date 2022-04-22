import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketDisplayComponent } from './market-display.component';

describe('MarketDisplayComponent', () => {
  let component: MarketDisplayComponent;
  let fixture: ComponentFixture<MarketDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
