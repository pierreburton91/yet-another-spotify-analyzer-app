import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AuthService, GenresService } from './services';

@Injectable({
  providedIn: 'root',
})
export class SpotifyFacadeService {
  constructor(private auth: AuthService, private genres: GenresService) {}

  get isLoggedIn() {
    return this.auth.isLoggedIn;
  }

  logout() {
    return this.auth.logout();
  }

  getGenres() {
    console.log('called');
    return this.genres.getGenresSeed().pipe(map(({ genres }) => genres));
  }
}
