import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDisplayNameDialogComponent } from './change-display-name-dialog.component';

describe('ChangeDisplayNameDialogComponent', () => {
  let component: ChangeDisplayNameDialogComponent;
  let fixture: ComponentFixture<ChangeDisplayNameDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDisplayNameDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeDisplayNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
