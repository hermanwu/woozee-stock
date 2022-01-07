import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskListPageComponent } from './risk-list-page.component';

describe('RiskListPageComponent', () => {
  let component: RiskListPageComponent;
  let fixture: ComponentFixture<RiskListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
