import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionDisplayComponent } from './predication-display.component';

describe('PredictionDisplayComponent', () => {
  let component: PredictionDisplayComponent;
  let fixture: ComponentFixture<PredictionDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredictionDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PredictionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
