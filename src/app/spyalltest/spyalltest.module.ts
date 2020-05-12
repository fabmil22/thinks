import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpyalltestRoutingModule } from './spyalltest-routing.module';
import { SpyalltestComponent } from './spyalltest.component';


@NgModule({
  declarations: [SpyalltestComponent],
  imports: [
    CommonModule,
    SpyalltestRoutingModule
  ]
})
export class SpyalltestModule { }
