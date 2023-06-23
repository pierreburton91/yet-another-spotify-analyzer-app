import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, switchMap, tap } from 'rxjs';
import { AuthService, StorageService } from '../services';

function setAuthorization(
  req: HttpRequest<any>,
  access_token: Spotify.GrantAccessResponse['access_token']
) {
  req.headers.set('Authorization', `Bearer ${access_token}`);
}

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(
    private storage: StorageService,
    private authService: AuthService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { tokenExpiresAt } = this.authService;

    // Refresh the current token if it's less than 5 minutes before expiration.
    if (tokenExpiresAt && new Date().valueOf() - tokenExpiresAt < 300000) {
      return this.authService.refreshAccessToken().pipe(
        tap(({ access_token }) => setAuthorization(req, access_token)),
        switchMap(() => next.handle(req))
      );
    }

    const access = this.storage.get('access');
    if (access) {
      setAuthorization(req, access.access_token);
    }
    return next.handle(req);
  }
}
