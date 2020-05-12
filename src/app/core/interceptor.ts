import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('se ejecuta Interceptor' , request.url);
    const customReq = request.clone({
     setHeaders: {
        'Content-Type': 'application/json',
        Authorization : 'MypermeidosToken'

    }
    });
    return next.handle(customReq)
    .pipe(
      tap(
        event => {
          if(event instanceof HttpResponse){
  //modifica la httpResponse
          }
        }
      )
    );
  }
}
