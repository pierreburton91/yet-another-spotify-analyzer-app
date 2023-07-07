import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  constructor() {}

  set(key: StorableKey, value: Storable) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  get(key: 'user_profile'): Spotify.UserProfileResponse;
  get(key: 'utir_track'): Spotify.UserTopItemsResponse<Spotify.Track>;
  get(key: 'utir_artist'): Spotify.UserTopItemsResponse<Spotify.Artist>;
  get(key: string): Storable {
    const stored = sessionStorage.getItem(key) ?? JSON.stringify(null);

    return JSON.parse(stored);
  }

  clear(): void {
    sessionStorage.removeItem('user_profile');
    sessionStorage.removeItem('utir_track');
    sessionStorage.removeItem('utir_artist');
  }
}
