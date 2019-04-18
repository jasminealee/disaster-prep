import { TestBed, inject } from '@angular/core/testing';

import { PrepService } from './prep.service';

describe('PrepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrepService]
    });
  });

  it('should ...', inject([PrepService], (service: PrepService) => {
    expect(service).toBeTruthy();
  }));
});
