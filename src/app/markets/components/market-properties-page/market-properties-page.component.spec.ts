import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPropertiesPageComponent } from './market-properties-page.component';

describe('MarketPropertiesPageComponent', () => {
  let component: MarketPropertiesPageComponent;
  let fixture: ComponentFixture<MarketPropertiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketPropertiesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketPropertiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
