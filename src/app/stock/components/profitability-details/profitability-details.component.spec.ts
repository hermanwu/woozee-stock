import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitabilityDetailsComponent } from './profitability-details.component';

describe('ProfitabilityDetailsComponent', () => {
  let component: ProfitabilityDetailsComponent;
  let fixture: ComponentFixture<ProfitabilityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitabilityDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitabilityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
