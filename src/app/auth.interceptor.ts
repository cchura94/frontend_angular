import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem("access_token");
    // verificar si es token valido
    let tokenizedReq = request.clone({
      setHeaders: {
        'Authorization': 'Bearer '+token
      }
    });

    return next.handle(tokenizedReq).pipe(tap(() => {},
      (error: any) => {
        if(error instanceof HttpErrorResponse){
          if(error.status !== 401){
            return;
          }
          localStorage.removeItem("access_token")
          this.router.navigate(["auth/login"]);
        }
      }
    ))
    // capturar errores
  }
}
