import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagInteractionBarComponent } from './tag-interaction-bar.component';

describe('TagInteractionBarComponent', () => {
  let component: TagInteractionBarComponent;
  let fixture: ComponentFixture<TagInteractionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagInteractionBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TagInteractionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
