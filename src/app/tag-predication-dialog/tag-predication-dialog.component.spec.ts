import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagPredicationDialogComponent } from './tag-predication-dialog.component';

describe('TagPredicationDialogComponent', () => {
  let component: TagPredicationDialogComponent;
  let fixture: ComponentFixture<TagPredicationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagPredicationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagPredicationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
