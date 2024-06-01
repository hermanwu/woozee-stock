import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredicationDialogComponent } from './predication-dialog.component';

describe('PredicationDialogComponent', () => {
  let component: PredicationDialogComponent;
  let fixture: ComponentFixture<PredicationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredicationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PredicationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
