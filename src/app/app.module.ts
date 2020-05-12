import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Interceptor } from './core/interceptor';
import { ResponseInterceptor } from './core/log-response.interceptor';
import { CacheInterceptor } from './core/cache.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule


  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,  useClass: Interceptor, multi: true},
    {provide: HTTP_INTERCEPTORS,  useClass: ResponseInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS,  useClass: CacheInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
