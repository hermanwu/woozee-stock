import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomoStocksComponent } from './fomo-stocks.component';

describe('FomoStocksComponent', () => {
  let component: FomoStocksComponent;
  let fixture: ComponentFixture<FomoStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomoStocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FomoStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
