import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionPropertiesPageComponent } from './region-properties-page.component';

describe('RegionPropertiesPageComponent', () => {
  let component: RegionPropertiesPageComponent;
  let fixture: ComponentFixture<RegionPropertiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionPropertiesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionPropertiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
