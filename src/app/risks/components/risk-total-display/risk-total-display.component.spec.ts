import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskTotalDisplayComponent } from './risk-total-display.component';

describe('RiskTotalDisplayComponent', () => {
  let component: RiskTotalDisplayComponent;
  let fixture: ComponentFixture<RiskTotalDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskTotalDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskTotalDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
