import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpinionPageComponent } from './blog-page.component';

describe('OpinionPageComponent', () => {
  let component: OpinionPageComponent;
  let fixture: ComponentFixture<OpinionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpinionPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
