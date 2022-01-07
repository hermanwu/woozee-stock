import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideDemoComponent } from './slide-demo.component';

describe('SlideDemoComponent', () => {
  let component: SlideDemoComponent;
  let fixture: ComponentFixture<SlideDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
