import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestServiceSimpleRoutingModule } from './test-service-simple-routing.module';
import { TestServiceSimpleComponent } from './test-service-simple.component';


@NgModule({
  declarations: [TestServiceSimpleComponent],
  imports: [
    CommonModule,
    TestServiceSimpleRoutingModule
  ]
})
export class TestServiceSimpleModule { }
