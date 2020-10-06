import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeverOwnStocksPanelComponent } from './forever-own-stocks-panel.component';

describe('ForeverOwnStocksPanelComponent', () => {
  let component: ForeverOwnStocksPanelComponent;
  let fixture: ComponentFixture<ForeverOwnStocksPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForeverOwnStocksPanelComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeverOwnStocksPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
