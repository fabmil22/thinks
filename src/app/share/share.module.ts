import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { timer } from 'rxjs';
import {  tap, share, mapTo } from 'rxjs/operators';

@NgModule({
  declarations: [ShareComponent],
  imports: [
    CommonModule,
    ShareRoutingModule
  ]
})
export class ShareModule {

  source = timer(1000);
  example = this.source.pipe(
    tap(() => console.log('efecto ')),
   // mapTo('logrado')
  );
  // subscribe = this.example.subscribe(val => console.log(val));
  // subscribeTwo = this.example.subscribe(val => console.log(val));

  sharedExample = this.example.pipe(share());

  subscribeThree  =  this.sharedExample.subscribe(val => console.log('subscribeThree',  val));
  subscribeFour   =  this.sharedExample.subscribe(val => console.log('subscribeFour',   val));
  subscribeThreeq =  this.sharedExample.subscribe(val => console.log('subscribeThreeq', val));
  subscribeFoura  =  this.sharedExample.subscribe(val => console.log('subscribeFoura',  val));
   constructor() {}



}
