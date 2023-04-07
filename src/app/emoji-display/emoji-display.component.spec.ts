import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiDisplayComponent } from './emoji-display.component';

describe('EmojiDisplayComponent', () => {
  let component: EmojiDisplayComponent;
  let fixture: ComponentFixture<EmojiDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojiDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
