import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpyalltestComponent } from './spyalltest.component';

const routes: Routes = [{ path: '', component: SpyalltestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpyalltestRoutingModule { }
