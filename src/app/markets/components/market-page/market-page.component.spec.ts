import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndustriesPageComponent } from './market-page.component';

describe('IndustriesPageComponent', () => {
  let component: IndustriesPageComponent;
  let fixture: ComponentFixture<IndustriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndustriesPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
