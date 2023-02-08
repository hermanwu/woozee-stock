import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterDisplayDialogComponent } from './twitter-display-dialog.component';

describe('TwitterDisplayDialogComponent', () => {
  let component: TwitterDisplayDialogComponent;
  let fixture: ComponentFixture<TwitterDisplayDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterDisplayDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterDisplayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
