import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, switchMap } from 'rxjs';
import { AuthBaseUrl } from '../constants';
import { AuthService, StorageService } from '../services';

function setAuthorization(
  req: HttpRequest<any>,
  access_token: Spotify.GrantAccessResponse['access_token']
) {
  return req.clone({
    setHeaders: { Authorization: `Bearer ${access_token}` },
  });
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
    // Let pass any auth calls
    if (req.url.startsWith(AuthBaseUrl)) {
      return next.handle(req);
    }

    const { tokenExpiresAt } = this.authService;
    // Refresh the current token if it's less than 5 minutes before expiration.
    if (tokenExpiresAt && tokenExpiresAt - new Date().valueOf() < 300000) {
      return this.authService
        .refreshAccessToken()
        .pipe(
          switchMap(({ access_token }) =>
            next.handle(setAuthorization(req, access_token))
          )
        );
    }

    const access = this.storage.get('access');
    if (access) {
      return next.handle(setAuthorization(req, access.access_token));
    }

    return next.handle(req);
  }
}
