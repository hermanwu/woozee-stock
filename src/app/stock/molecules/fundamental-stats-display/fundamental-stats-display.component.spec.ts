import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentalStatsDisplayComponent } from './fundamental-stats-display.component';

describe('FundamentalStatsDisplayComponent', () => {
  let component: FundamentalStatsDisplayComponent;
  let fixture: ComponentFixture<FundamentalStatsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FundamentalStatsDisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundamentalStatsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
