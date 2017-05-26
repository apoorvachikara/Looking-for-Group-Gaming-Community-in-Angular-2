import { TestBed, inject } from '@angular/core/testing';

import { LfgpageService } from './lfgpage.service';

describe('LfgpageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LfgpageService]
    });
  });

  it('should ...', inject([LfgpageService], (service: LfgpageService) => {
    expect(service).toBeTruthy();
  }));
});
