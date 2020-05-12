import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestServiceSimpleComponent } from './test-service-simple.component';

const routes: Routes = [{ path: '', component: TestServiceSimpleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestServiceSimpleRoutingModule { }
