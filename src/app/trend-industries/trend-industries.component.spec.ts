import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendIndustriesComponent } from './trend-industries.component';

describe('TrendIndustriesComponent', () => {
  let component: TrendIndustriesComponent;
  let fixture: ComponentFixture<TrendIndustriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendIndustriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
