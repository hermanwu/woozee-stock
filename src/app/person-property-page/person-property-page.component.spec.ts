import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonPropertyPageComponent } from './person-property-page.component';

describe('PersonPropertyPageComponent', () => {
  let component: PersonPropertyPageComponent;
  let fixture: ComponentFixture<PersonPropertyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonPropertyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonPropertyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
