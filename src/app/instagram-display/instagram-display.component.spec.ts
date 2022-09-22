import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramDisplayComponent } from './instagram-display.component';

describe('InstagramDisplayComponent', () => {
  let component: InstagramDisplayComponent;
  let fixture: ComponentFixture<InstagramDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagramDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
