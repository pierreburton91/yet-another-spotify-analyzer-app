import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import { SpotifyFacadeService } from '../spotify/spotify-facade.service';
import { StorageService } from './services';

@Injectable({
  providedIn: 'root',
})
export class MainFacadeService {
  constructor(
    private spotifyFacade: SpotifyFacadeService,
    private storage: StorageService
  ) {}

  getUserProfile() {
    const stored = this.storage.get('user_profile');

    if (stored) {
      return of(stored);
    }
    return this.spotifyFacade
      .getUserProfile()
      .pipe(tap((data) => this.storage.set('user_profile', data)));
  }

  getUserProfileAnalyzis() {
    const artists = this.storage.get('utir_artist');
    const tracks = this.storage.get('utir_track');

    if (artists && tracks) {
      return of({ artists, tracks });
    }

    return this.spotifyFacade.getUserProfileAnalyzis().pipe(
      tap((data) => {
        this.storage.set('utir_artist', data.artists);
        this.storage.set('utir_track', data.tracks);
      })
    );
  }
}
