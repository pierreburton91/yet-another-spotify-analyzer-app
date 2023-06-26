import { Injectable } from '@angular/core';
import { EMPTY, catchError, map, throwError } from 'rxjs';
import { AuthService, GenresService, UserService } from './services';

@Injectable({
  providedIn: 'root',
})
export class SpotifyFacadeService {
  constructor(
    private auth: AuthService,
    private genres: GenresService,
    private user: UserService
  ) {}

  get isLoggedIn() {
    return this.auth.isLoggedIn;
  }

  tryLoginOrLogout() {
    if (!this.auth.hasStoredAccess) {
      return throwError(() => new Error('No access found in storage.'));
    }
    if (this.auth.isLoggedIn) {
      return EMPTY;
    }
    return this.auth.refreshAccessToken().pipe(
      catchError(() => {
        this.auth.logout();
        return throwError(() => new Error('Could not refresh token.'));
      })
    );
  }

  logout() {
    return this.auth.logout();
  }

  getGenres() {
    return this.genres.getGenresSeed().pipe(map(({ genres }) => genres));
  }

  getUserTopArtists(options?: Spotify.UserTopItemsRequestParams) {
    return this.user.getUserTopItems<Spotify.Artist>('artists', options);
  }
  getUserTopTracks(options?: Spotify.UserTopItemsRequestParams) {
    return this.user.getUserTopItems<Spotify.Track>('tracks', options);
  }
}
