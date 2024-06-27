import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToTagDialogComponent } from './add-to-tag-dialog.component';

describe('AddToTagDialogComponent', () => {
  let component: AddToTagDialogComponent;
  let fixture: ComponentFixture<AddToTagDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToTagDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddToTagDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
