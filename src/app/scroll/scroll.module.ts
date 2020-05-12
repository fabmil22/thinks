import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollRoutingModule } from './scroll-routing.module';
import { ScrollComponent } from './scroll.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  declarations: [ScrollComponent],
  imports: [
    CommonModule,
    ScrollRoutingModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule
  ]
})
export class ScrollModule { }
