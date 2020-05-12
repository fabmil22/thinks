import { Spectator, createTestComponentFactory, SpyObject } from '@netbasal/spectator/jest';
import { TestServiceSimpleComponent as PBComponent } from './test-service-simple.component';
import { DataService } from './data.service';
import { of } from 'rxjs';
import { doesNotThrow } from 'assert';

describe('TestServiceSimpleComponent', () => {
  let query: SpyObject<DataService>;
  let spectator: Spectator<PBComponent>;
  const createComponent = createTestComponentFactory({
    component: PBComponent,
    mocks: [DataService],
    shallow: true
  });

  beforeEach(() => {
    spectator = createComponent();
    query = spectator.get<DataService>(DataService);
  });
  it('should create ', () => {
    expect(spectator.component).toBeDefined();
  });

  it('should get the data', done => {
   query.getAll.andReturn(of([]));
   spectator.component.ngOnInit();

   spectator.component.data$.subscribe(val => {
     expect(val).toEqual([]);
     done();
   })
  });

});

