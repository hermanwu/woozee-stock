import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiImagesDisplayComponent } from './ui-images-display.component';

describe('UiImagesDisplayComponent', () => {
  let component: UiImagesDisplayComponent;
  let fixture: ComponentFixture<UiImagesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiImagesDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiImagesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
