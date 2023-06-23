import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  constructor() {}

  set(key: Spotify.StorableKey, value: Spotify.Storable) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: 'code_verifier'): string;
  get(key: 'access'): Spotify.StoredAccess;
  get(key: string): Spotify.Storable {
    const stored = localStorage.getItem(key) ?? JSON.stringify(null);

    return JSON.parse(stored);
  }
}
