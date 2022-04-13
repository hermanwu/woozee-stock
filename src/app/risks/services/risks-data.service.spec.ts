import { TestBed } from '@angular/core/testing';

import { RisksDataService } from './risks-data.service';

describe('RisksDataService', () => {
  let service: RisksDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RisksDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
