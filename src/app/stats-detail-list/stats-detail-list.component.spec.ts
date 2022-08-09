import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatsDetailListComponent } from './stats-detail-list.component';

describe('StatsDetailListComponent', () => {
  let component: StatsDetailListComponent;
  let fixture: ComponentFixture<StatsDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsDetailListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
