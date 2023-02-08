import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthDetailsComponent } from './growth-details.component';

describe('GrowthDetailsComponent', () => {
  let component: GrowthDetailsComponent;
  let fixture: ComponentFixture<GrowthDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowthDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
