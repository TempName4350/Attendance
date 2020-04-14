import { TestBed } from '@angular/core/testing';

import { DateAttendServiceService } from './dateAttend-service.service';

describe('DateAttendServiceService', () => {
  let service: DateAttendServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateAttendServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
