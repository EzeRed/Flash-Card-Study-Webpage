import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFlashCardComponent } from './update-flash-card.component';

describe('UpdateFlashCardComponent', () => {
  let component: UpdateFlashCardComponent;
  let fixture: ComponentFixture<UpdateFlashCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateFlashCardComponent]
    });
    fixture = TestBed.createComponent(UpdateFlashCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
