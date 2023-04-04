import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFormListComponent } from './note-form-list.component';

describe('NoteFormListComponent', () => {
  let component: NoteFormListComponent;
  let fixture: ComponentFixture<NoteFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteFormListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
