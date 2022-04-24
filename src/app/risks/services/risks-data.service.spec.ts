import { TestBed } from '@angular/core/testing';
import { SubjectiveDataService } from './subjective-data.service';

describe('SubjectiveDataService', () => {
  let service: SubjectiveDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectiveDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
