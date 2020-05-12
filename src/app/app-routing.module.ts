import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',  redirectTo: 'rocket', pathMatch: 'full'},
  { path: 'share', loadChildren: () => import('./share/share.module').then(m => m.ShareModule) },
  { path: 'scoll', loadChildren: () => import('./scroll/scroll.module').then(m => m.ScrollModule) },
  { path: 'testServicesimple', loadChildren: () => import('./test-service-simple/test-service-simple.module').then(m => m.TestServiceSimpleModule) },
  { path: 'swithmap', loadChildren: () => import('./swithmap/swithmap.module').then(m => m.SwithmapModule) },
  { path: 'spyalltest', loadChildren: () => import('./spyalltest/spyalltest.module').then(m => m.SpyalltestModule) },
  { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  { path: 'converter', loadChildren: () => import('./converter/converter.module').then(m => m.ConverterModule) },
  { path: 'rocket', loadChildren: () => import('./rocket/rocket.module').then(m => m.RocketModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
