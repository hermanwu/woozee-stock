import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalystLevelDisplayComponent } from './catalyst-level-display.component';

describe('CatalystLevelDisplayComponent', () => {
  let component: CatalystLevelDisplayComponent;
  let fixture: ComponentFixture<CatalystLevelDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalystLevelDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalystLevelDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
