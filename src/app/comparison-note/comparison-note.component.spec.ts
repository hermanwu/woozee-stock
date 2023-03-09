import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonNoteComponent } from './comparison-note.component';

describe('ComparisonNoteComponent', () => {
  let component: ComparisonNoteComponent;
  let fixture: ComponentFixture<ComparisonNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparisonNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
