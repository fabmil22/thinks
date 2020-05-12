import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable , of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpCacheService} from './http-cache.service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor( private cacheService: HttpCacheService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

 //pase cualquier solicitu almecenada
 if (req.method !== 'GET') {
   console.log(`invalidando el cache:  ${req.method} ${req.url}`);
   this.cacheService.invalidateCache();
   return next.handle(req);

 }
 const cachedResponse: HttpResponse<any> = this.cacheService.get(req.url);

 if ( cachedResponse){
   console.log(` URL de  la RESPUESTA  CACHE ${cachedResponse.url}` );
   console.log(`  CACHE ${JSON.stringify(cachedResponse)}` );
   return of(cachedResponse)
 }


 //manda la solicitud al servidor y agregar nueva respuesta al cache

 return next.handle(req).pipe(
  tap(
    event => {
      if(event instanceof HttpResponse){
       console.log(`agregando el nuevo cache:  ${req.url}`);
       this.cacheService.put(req.url , event);
      }
    }
  )
);
return



  }
}
