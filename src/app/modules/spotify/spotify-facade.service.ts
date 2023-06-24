import { Injectable } from '@angular/core';
import { map } from 'rxjs';
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
