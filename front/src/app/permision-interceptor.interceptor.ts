import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class PermisionInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((response: HttpErrorResponse) => {
        console.error('HTTP Error:', response);

        if (response.status === 403) {
          alert('Permission Denied: ' + response.error.message);
        } else if (response.status === 500) {
          alert('Internal Server Error: Please try again later.');
        } else if (response.status === 0) {
          alert('Network Error: Please check your internet connection.');
        } else {
          alert('Unexpected Error: ' + response.message);
        }

        return throwError(response);
      })
    );
  }
}

