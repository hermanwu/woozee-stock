import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropRankDialogComponent } from './drag-drop-rank-dialog.component';

describe('DragDropRankDialogComponent', () => {
  let component: DragDropRankDialogComponent;
  let fixture: ComponentFixture<DragDropRankDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropRankDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropRankDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
