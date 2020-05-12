import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { CompanyService } from './company.service';

describe('CompanyService', () => {

  let service: CompanyService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule],
      providers:[CompanyService]
    });

    service = TestBed.get(CompanyService);
});

  it('should be created', () => {

    expect(service).toBeTruthy();
  });
});
