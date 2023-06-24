import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { WebApiBaseUrl } from '../constants';

@Injectable()
export class BaseURLInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.startsWith('https')) {
      const clone = req.clone({ url: WebApiBaseUrl + req.url });

      return next.handle(clone);
    }
    return next.handle(req);
  }
}
