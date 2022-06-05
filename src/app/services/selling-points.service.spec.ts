import { TestBed } from '@angular/core/testing';

import { SellingPointsService } from './selling-points.service';

describe('SellingPointsService', () => {
  let service: SellingPointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellingPointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
