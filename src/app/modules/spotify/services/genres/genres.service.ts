import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GenresService {
  constructor(private http: HttpClient) {}

  getGenresSeed() {
    return this.http.get<Spotify.GenresSeedResponse>(
      '/recommendations/available-genre-seeds'
    );
  }
}
