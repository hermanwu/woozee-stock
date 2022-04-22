import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerDisplayComponent } from './ticker-display.component';

describe('TickerDisplayComponent', () => {
  let component: TickerDisplayComponent;
  let fixture: ComponentFixture<TickerDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickerDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TickerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
