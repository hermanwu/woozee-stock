import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtsDisplayComponent } from './thoughts-display.component';

describe('ThoughtsDisplayComponent', () => {
  let component: ThoughtsDisplayComponent;
  let fixture: ComponentFixture<ThoughtsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThoughtsDisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoughtsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
