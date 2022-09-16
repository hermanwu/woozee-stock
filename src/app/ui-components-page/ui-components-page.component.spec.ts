import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiComponentsPageComponent } from './ui-components-page.component';

describe('UiComponentsPageComponent', () => {
  let component: UiComponentsPageComponent;
  let fixture: ComponentFixture<UiComponentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponentsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
