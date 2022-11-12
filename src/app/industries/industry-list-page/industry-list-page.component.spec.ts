import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryListPageComponent } from './industry-list-page.component';

describe('IndustryListPageComponent', () => {
  let component: IndustryListPageComponent;
  let fixture: ComponentFixture<IndustryListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
