import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorDisplayComponent } from './investor-display.component';

describe('InvestorDisplayComponent', () => {
  let component: InvestorDisplayComponent;
  let fixture: ComponentFixture<InvestorDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
