import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsLearnedComponent } from './words-learned.component';

describe('WordsLearnedComponent', () => {
  let component: WordsLearnedComponent;
  let fixture: ComponentFixture<WordsLearnedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordsLearnedComponent]
    });
    fixture = TestBed.createComponent(WordsLearnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
