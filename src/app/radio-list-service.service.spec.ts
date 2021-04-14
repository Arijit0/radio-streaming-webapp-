import { TestBed } from '@angular/core/testing';

import { RadioListServiceService } from './radio-list-service.service';

describe('RadioListServiceService', () => {
  let service: RadioListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadioListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
