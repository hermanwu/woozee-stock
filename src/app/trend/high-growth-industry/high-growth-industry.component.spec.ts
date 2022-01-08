import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighGrowthIndustryComponent } from './high-growth-industry.component';

describe('HighGrowthIndustryComponent', () => {
  let component: HighGrowthIndustryComponent;
  let fixture: ComponentFixture<HighGrowthIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighGrowthIndustryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighGrowthIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
