import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstagramNewsDisplayDialogComponent } from './news-display-dialog.component';

describe('InstagramNewsDisplayDialogComponent', () => {
  let component: InstagramNewsDisplayDialogComponent;
  let fixture: ComponentFixture<InstagramNewsDisplayDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstagramNewsDisplayDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramNewsDisplayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
