import { TestBed } from '@angular/core/testing';

import { SnapkitService } from './snapkit.service';

describe('SnapkitService', () => {
  let service: SnapkitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnapkitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
