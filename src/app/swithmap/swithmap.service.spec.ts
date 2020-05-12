import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { SwithmapService } from './swithmap.service';


describe('SwithmapService', () => {
  let service: SwithmapService;

  beforeEach(() =>{ TestBed.configureTestingModule({
    imports: [ HttpClientModule],
    providers: [SwithmapService]
  });
  service = TestBed.get(SwithmapService);}
  ) ;


  it('should be created', () => {
     expect(service).toBeTruthy();
  });


});
