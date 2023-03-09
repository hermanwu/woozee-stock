import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiComparisonComponent } from './ui-comparison.component';

describe('UiComparisonComponent', () => {
  let component: UiComparisonComponent;
  let fixture: ComponentFixture<UiComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
