import { TestBed } from '@angular/core/testing';

import { FlashCardsService } from './flash-cards.service';

describe('FlashCardsService', () => {
  let service: FlashCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
