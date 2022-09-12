import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroStatsPageComponent } from './macro-stats-page.component';

describe('MacroStatsPageComponent', () => {
  let component: MacroStatsPageComponent;
  let fixture: ComponentFixture<MacroStatsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacroStatsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroStatsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
