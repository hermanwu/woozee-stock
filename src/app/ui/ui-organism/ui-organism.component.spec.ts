import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiOrganismComponent } from './ui-organism.component';

describe('UiOrganismComponent', () => {
  let component: UiOrganismComponent;
  let fixture: ComponentFixture<UiOrganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiOrganismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
