import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskLevelDisplayComponent } from './risk-level-display.component';

describe('RiskLevelDisplayComponent', () => {
  let component: RiskLevelDisplayComponent;
  let fixture: ComponentFixture<RiskLevelDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskLevelDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskLevelDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
