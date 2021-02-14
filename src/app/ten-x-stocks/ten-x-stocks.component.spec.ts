import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenXStocksComponent } from './ten-x-stocks.component';

describe('TenXStocksComponent', () => {
  let component: TenXStocksComponent;
  let fixture: ComponentFixture<TenXStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenXStocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenXStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
