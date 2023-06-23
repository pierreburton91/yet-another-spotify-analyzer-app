import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { webApiBaseURL } from '../constants';

@Injectable()
export class GenresService {
  constructor(private http: HttpClient) {}

  getGenresSeed() {
    return this.http.get<Spotify.GenresSeedResponse>(
      webApiBaseURL + '/recommendations/available-genre-seeds'
    );
  }
}
