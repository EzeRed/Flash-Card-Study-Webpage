import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFlashCardComponent } from './create-flash-card.component';

describe('CreateFlashCardComponent', () => {
  let component: CreateFlashCardComponent;
  let fixture: ComponentFixture<CreateFlashCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFlashCardComponent]
    });
    fixture = TestBed.createComponent(CreateFlashCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
