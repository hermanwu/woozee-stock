import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradablePropertiesPageComponent } from './tradable-properties-page.component';

describe('TradablePropertiesPageComponent', () => {
  let component: TradablePropertiesPageComponent;
  let fixture: ComponentFixture<TradablePropertiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradablePropertiesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradablePropertiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
