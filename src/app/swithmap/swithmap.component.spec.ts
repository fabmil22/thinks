

import { SwithmapComponent } from './swithmap.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Spectator, createServiceFactory, SpectatorService, createComponentFactory, byText } from '@ngneat/spectator';

import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SwithmapService } from './swithmap.service';
import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { fakeAsync, tick } from '@angular/core/testing';

describe('SwithmapCompswithmaponent', () => {
  let spectator: Spectator<SwithmapComponent >;

  const createComponent = createComponentFactory({
    component: SwithmapComponent,
    imports: [ ReactiveFormsModule , MatSlideToggleModule],
    mocks: [SwithmapService],
    detectChanges: false,

  })

  beforeEach(() => spectator = createComponent());


  it('should have a success class by default', fakeAsync(() => {

    const spectator = createComponent();
    const service = spectator.get(SwithmapService);
    service.get.and.returnValue(
      timer(100).pipe(
        mapTo([
            { id: '5ea300b7efe3bd8fc77d2376',
            isActive: false, name: 'Tonya Fitzpatrick',
            company: 'COMCUR', email: 'tonyafitzpatrick@comcur.com',
            phone: '+1 (856) 546-2845',
            address: '986 Newkirk Avenue, Oceola, Indiana, 4327',
            registered: '2016-03-02T08:50:22 -01:00',
            latitude: 42.077111,
            longitude: 42.410378 },
            { id: '5ea300b77d89c442840882b9',
            isActive: false,
            name: 'Britt Guzman',
            company: 'MAXEMIA',
            email: 'brittguzman@maxemia.com',
            phone: '+1 (911) 447-3581',
            address: '300 Brighton Court, Wolcott, Kentucky, 745',
            registered: '2018-08-17T09:20:48 -02:00',
            latitude: 84.368893,
            longitude: 156.271576 }
        ])
      )
    );
    // run ngOnInit
    spectator.detectChanges();
  // assert that the progress bar is showing
    expect(spectator.query(MatSlideToggle)).toExist();
    /* expect(spectator.query(byText('Probando switchmap'))).toExist();
    expect(spectator.query(byText('Empresas Activadas'))).toExist();
    expect(spectator.query(byText('Accept Terms of Service'))).toExist(); */
    spectator.tick(100);
    spectator.component.getComments();
    expect(service.get ).toHaveBeenCalled();
    spectator.detectChanges();

  }));
});
