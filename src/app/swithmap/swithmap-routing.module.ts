import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwithmapComponent } from './swithmap.component';

const routes: Routes = [{ path: '', component: SwithmapComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwithmapRoutingModule { }
