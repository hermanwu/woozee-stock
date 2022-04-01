import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactTypeDisplayComponent } from './fact-type-display.component';

describe('FactTypeDisplayComponent', () => {
  let component: FactTypeDisplayComponent;
  let fixture: ComponentFixture<FactTypeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactTypeDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactTypeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
