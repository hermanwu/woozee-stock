import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermDisplayComponent } from './risk-level-display.component';

describe('TermDisplayComponent', () => {
  let component: TermDisplayComponent;
  let fixture: ComponentFixture<TermDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TermDisplayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
