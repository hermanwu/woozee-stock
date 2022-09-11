import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyMediumReportDisplayDialogComponent } from './daily-medium-report-display-dialog.component';

describe('DailyMediumReportDisplayDialogComponent', () => {
  let component: DailyMediumReportDisplayDialogComponent;
  let fixture: ComponentFixture<DailyMediumReportDisplayDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyMediumReportDisplayDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyMediumReportDisplayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
