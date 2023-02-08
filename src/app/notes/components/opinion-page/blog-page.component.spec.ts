import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MePageComponent } from './blog-page.component';

describe('MePageComponent', () => {
  let component: MePageComponent;
  let fixture: ComponentFixture<MePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MePageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
