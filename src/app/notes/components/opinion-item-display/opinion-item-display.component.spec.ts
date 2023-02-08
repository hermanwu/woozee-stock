import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionItemDisplayComponent } from './opinion-item-display.component';

describe('OpinionItemDisplayComponent', () => {
  let component: OpinionItemDisplayComponent;
  let fixture: ComponentFixture<OpinionItemDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinionItemDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionItemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
