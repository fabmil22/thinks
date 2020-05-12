import { createHTTPFactory, SpectatorHTTP } from '@netbasal/spectator/jest';
import { HTTPMethod } from '@netbasal/spectator';
import { DataService  as servicedt} from './data.service';
import {of } from 'rxjs';

describe('DataService', () => {
const httpService: () => SpectatorHTTP<servicedt> = createHTTPFactory<servicedt>(servicedt);

it('exists', () => {
const { dataService } = httpService();
expect(dataService).toBeDefined();
});


it('can get entities from the server', () => {
  const { dataService, expectOne } = httpService();

  dataService.getAll().subscribe();
  expectOne('http://localhost:3000/pictures?_sort=id&_order=desc', HTTPMethod.GET);
});

});
