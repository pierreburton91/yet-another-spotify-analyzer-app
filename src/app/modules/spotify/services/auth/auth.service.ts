import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  AuthInitRequest,
  GrantAccessRequest,
  RefreshAccessRequest,
} from '../../utils';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class AuthService {
  private readonly baseUrl = 'https://accounts.spotify.com';

  constructor(
    private httpClient: HttpClient,
    private storage: StorageService
  ) {}

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

    (window as Window).location = this.baseUrl + '/authorize?' + args;
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
    const requestToken$ = this.httpClient.post<Spotify.GrantAccessResponse>(
      this.baseUrl + '/api/token',
      params,
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
    );

    return requestToken$.pipe(
      map((data) => ({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_at: new Date().valueOf() + data.expires_in * 1000,
      }))
    );
  }
}
