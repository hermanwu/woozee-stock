import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementDisplayComponent } from './movement-display.component';

describe('MovementDisplayComponent', () => {
  let component: MovementDisplayComponent;
  let fixture: ComponentFixture<MovementDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
