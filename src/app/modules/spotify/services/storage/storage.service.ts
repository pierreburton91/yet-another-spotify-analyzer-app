import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  constructor() {}

  set(key: Spotify.StorableKey, value: Spotify.Storable) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: 'code_verifier'): string;
  get(key: 'access'): Spotify.GrantAccessResponse;
  get(key: string): Spotify.Storable {
    const stored = localStorage.getItem(key) ?? '';

    return JSON.parse(stored);
  }
}
