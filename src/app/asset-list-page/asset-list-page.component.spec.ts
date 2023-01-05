import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetListPageComponent } from './asset-list-page.component';

describe('AssetListPageComponent', () => {
  let component: AssetListPageComponent;
  let fixture: ComponentFixture<AssetListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
