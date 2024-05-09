import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFlashCardComponent } from './display-flash-card.component';

describe('DisplayFlashCardComponent', () => {
  let component: DisplayFlashCardComponent;
  let fixture: ComponentFixture<DisplayFlashCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayFlashCardComponent]
    });
    fixture = TestBed.createComponent(DisplayFlashCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
