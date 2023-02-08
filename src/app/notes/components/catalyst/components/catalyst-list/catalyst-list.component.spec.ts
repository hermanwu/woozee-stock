import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalystListComponent } from './catalyst-list.component';

describe('CatalystListComponent', () => {
  let component: CatalystListComponent;
  let fixture: ComponentFixture<CatalystListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalystListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalystListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
