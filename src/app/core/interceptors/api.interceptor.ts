import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
;
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private router: Router,) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestWithAuth: any;
    const lang = localStorage.getItem('lang') || '';
    {
      requestWithAuth = request.clone({
        headers: request.headers
          .set('accept-language', lang)
          .set('Accept', '*/*')
      });
      return next.handle(requestWithAuth).pipe(
        tap((e) => { },
          (error) => {
            this.router.navigate(['/auth', 'login']);
          })
      )
    }
  }

}

export const ApiInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiInterceptor,
  multi: true
};



