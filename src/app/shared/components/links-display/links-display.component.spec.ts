import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksDisplayComponent } from './links-display.component';

describe('LinksDisplayComponent', () => {
  let component: LinksDisplayComponent;
  let fixture: ComponentFixture<LinksDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
