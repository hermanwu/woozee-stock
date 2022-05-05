import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskCatalystDialogComponent } from './risk-catalyst-dialog.component';

describe('RiskCatalystDialogComponent', () => {
  let component: RiskCatalystDialogComponent;
  let fixture: ComponentFixture<RiskCatalystDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskCatalystDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskCatalystDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
