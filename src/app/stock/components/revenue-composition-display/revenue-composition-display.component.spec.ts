import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueCompositionDisplayComponent } from './revenue-composition-display.component';

describe('RevenueCompositionDisplayComponent', () => {
  let component: RevenueCompositionDisplayComponent;
  let fixture: ComponentFixture<RevenueCompositionDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueCompositionDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueCompositionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
