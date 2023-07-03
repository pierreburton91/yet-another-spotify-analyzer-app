import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthBaseUrl } from '../../constants';
import {
  AuthInitRequest,
  GrantAccessRequest,
  RefreshAccessRequest,
} from '../../utils';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private storage: StorageService
  ) {}

  get hasStoredAccess() {
    const access = this.storage.get('access');

    return Boolean(access);
  }

  get isLoggedIn() {
    const access = this.storage.get('access');

    if (!access) {
      return false;
    }

    return access.expires_at > new Date().valueOf();
  }

  get tokenExpiresAt() {
    const access = this.storage.get('access');

    return access && access.expires_at;
  }

  async initSpotifyAuthorization() {
    const authInitRequest = new AuthInitRequest(this.storage);
    const args = await authInitRequest.setCodeVerifier().toParams();

    (window as Window).location = AuthBaseUrl + '/authorize?' + args;
  }

  requestAccessToken(code: Spotify.AuthInitResponse['code']) {
    const body = new GrantAccessRequest(code, this.storage);
    return this.requestToken(body.toParams());
  }

  refreshAccessToken() {
    const body = new RefreshAccessRequest(this.storage);
    return this.requestToken(body.toParams());
  }

  requestToken(params: URLSearchParams): Observable<Spotify.StoredAccess> {
    return this.httpClient
      .post<Spotify.GrantAccessResponse>(AuthBaseUrl + '/api/token', params, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .pipe(
        map((data) => ({
          access_token: data.access_token,
          refresh_token: data.refresh_token,
          expires_at: new Date().valueOf() + data.expires_in * 1000,
        }))
      );
  }

  logout() {
    this.storage.clear();
  }
}
