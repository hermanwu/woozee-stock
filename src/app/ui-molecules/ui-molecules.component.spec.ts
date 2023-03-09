import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMoleculesComponent } from './ui-molecules.component';

describe('UiMoleculesComponent', () => {
  let component: UiMoleculesComponent;
  let fixture: ComponentFixture<UiMoleculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiMoleculesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMoleculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
