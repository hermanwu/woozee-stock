import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalystTotalDisplayComponent } from './catalyst-total-display.component';

describe('CatalystTotalDisplayComponent', () => {
  let component: CatalystTotalDisplayComponent;
  let fixture: ComponentFixture<CatalystTotalDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalystTotalDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalystTotalDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
