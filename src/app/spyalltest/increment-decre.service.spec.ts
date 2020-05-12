import { TestBed } from '@angular/core/testing';

import { IncrementDecreService } from './increment-decre.service';

describe('IncrementDecreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncrementDecreService = TestBed.get(IncrementDecreService);
    expect(service).toBeTruthy();
  });
});
