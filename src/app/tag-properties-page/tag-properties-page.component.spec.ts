import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagPropertiesPageComponent } from './tag-properties-page.component';

describe('TagPropertiesPageComponent', () => {
  let component: TagPropertiesPageComponent;
  let fixture: ComponentFixture<TagPropertiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagPropertiesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagPropertiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
