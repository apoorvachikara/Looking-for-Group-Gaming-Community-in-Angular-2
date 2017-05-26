import { TestBed, inject } from '@angular/core/testing';

import { UserplatformService } from './userplatform.service';

describe('UserplatformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserplatformService]
    });
  });

  it('should ...', inject([UserplatformService], (service: UserplatformService) => {
    expect(service).toBeTruthy();
  }));
});
