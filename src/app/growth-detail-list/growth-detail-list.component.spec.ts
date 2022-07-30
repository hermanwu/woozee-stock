import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthDetailListComponent } from './growth-detail-list.component';

describe('GrowthDetailListComponent', () => {
  let component: GrowthDetailListComponent;
  let fixture: ComponentFixture<GrowthDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowthDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
