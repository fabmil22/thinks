import { TestBed } from '@angular/core/testing';

import { SwithmapService } from './swithmap.service';

describe('SwithmapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwithmapService = TestBed.get(SwithmapService);
    expect(service).toBeTruthy();
  });
});
