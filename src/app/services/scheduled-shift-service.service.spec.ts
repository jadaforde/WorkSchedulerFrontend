import { TestBed } from '@angular/core/testing';

import { ScheduledShiftServiceService } from './scheduled-shift-service.service';

describe('ScheduledShiftServiceService', () => {
  let service: ScheduledShiftServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduledShiftServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
