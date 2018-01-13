import { TestBed, inject } from '@angular/core/testing';

import { SelfService } from './self.service';

describe('SelfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelfService]
    });
  });

  it('should be created', inject([SelfService], (service: SelfService) => {
    expect(service).toBeTruthy();
  }));
});
