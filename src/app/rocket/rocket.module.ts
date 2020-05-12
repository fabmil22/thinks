import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketRoutingModule } from './rocket-routing.module';
import { RocketComponent } from './rocket.component';


@NgModule({
  declarations: [RocketComponent],
  imports: [
    CommonModule,
    RocketRoutingModule
  ]
})
export class RocketModule { }
