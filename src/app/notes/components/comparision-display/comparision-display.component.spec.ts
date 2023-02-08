import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisionDisplayComponent } from './comparision-display.component';

describe('ComparisionDisplayComponent', () => {
  let component: ComparisionDisplayComponent;
  let fixture: ComponentFixture<ComparisionDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparisionDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
