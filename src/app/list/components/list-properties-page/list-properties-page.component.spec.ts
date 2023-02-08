import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPropertiesPageComponent } from './list-properties-page.component';

describe('ListPropertiesPageComponent', () => {
  let component: ListPropertiesPageComponent;
  let fixture: ComponentFixture<ListPropertiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPropertiesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPropertiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
