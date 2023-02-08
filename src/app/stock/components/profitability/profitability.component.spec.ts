import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitabilityComponent } from './profitability.component';

describe('ProfitabilityComponent', () => {
  let component: ProfitabilityComponent;
  let fixture: ComponentFixture<ProfitabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
