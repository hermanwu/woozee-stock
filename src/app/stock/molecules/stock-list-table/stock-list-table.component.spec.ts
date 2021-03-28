import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockListTableComponent } from './stock-list-table.component';

describe('StockListTableComponent', () => {
  let component: StockListTableComponent;
  let fixture: ComponentFixture<StockListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
