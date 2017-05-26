import { TestBed, inject } from '@angular/core/testing';

import { UsercountService } from './usercount.service';

describe('UsercountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsercountService]
    });
  });

  it('should ...', inject([UsercountService], (service: UsercountService) => {
    expect(service).toBeTruthy();
  }));
});
