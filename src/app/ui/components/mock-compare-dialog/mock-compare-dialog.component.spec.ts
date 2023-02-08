import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockCompareDialogComponent } from './mock-compare-dialog.component';

describe('MockCompareDialogComponent', () => {
  let component: MockCompareDialogComponent;
  let fixture: ComponentFixture<MockCompareDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockCompareDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockCompareDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
