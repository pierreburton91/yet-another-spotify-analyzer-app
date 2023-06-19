import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AuthInitRequest,
  GrantAccessRequest,
  RefreshAccessRequest,
} from '../../utils';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private storage: StorageService
  ) {}

  async initSpotifyAuthorization() {
    const authInitRequest = new AuthInitRequest(this.storage);
    const args = await authInitRequest.toParams();

    (window as Window).location =
      'https://accounts.spotify.com/authorize?' + args;
  }

  requestAccessToken(code: Spotify.AuthInitResponse['code']) {
    const body = new GrantAccessRequest(code);
    return this.requestToken(body.toParams());
  }

  refreshAccessToken() {
    const body = new RefreshAccessRequest(this.storage);
    return this.requestToken(body.toParams());
  }

  requestToken(params: URLSearchParams) {
    return this.httpClient.post<Spotify.GrantAccessResponse>(
      'https://accounts.spotify.com/api/token',
      params,
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
    );
  }
}
