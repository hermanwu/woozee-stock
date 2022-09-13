import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDisplayDialogComponent } from './news-display-dialog.component';

describe('NewsDisplayDialogComponent', () => {
  let component: NewsDisplayDialogComponent;
  let fixture: ComponentFixture<NewsDisplayDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsDisplayDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDisplayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
