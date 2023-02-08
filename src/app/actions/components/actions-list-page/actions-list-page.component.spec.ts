import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsListPageComponent } from './actions-list-page.component';

describe('ActionsListPageComponent', () => {
  let component: ActionsListPageComponent;
  let fixture: ComponentFixture<ActionsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
