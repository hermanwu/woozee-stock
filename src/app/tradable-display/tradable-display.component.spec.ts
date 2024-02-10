import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradableDisplayComponent } from './tradable-display.component';

describe('TradableDisplayComponent', () => {
  let component: TradableDisplayComponent;
  let fixture: ComponentFixture<TradableDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradableDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradableDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
