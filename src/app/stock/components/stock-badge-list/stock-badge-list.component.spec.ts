import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBadgeListComponent } from './stock-badge-list.component';

describe('StockBadgeListComponent', () => {
  let component: StockBadgeListComponent;
  let fixture: ComponentFixture<StockBadgeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockBadgeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockBadgeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
