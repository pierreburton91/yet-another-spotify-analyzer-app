import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable()
export class GenresService {
  constructor(private http: HttpClient) {}

  getGenresSeed() {
    console.log('called');
    return this.http
      .get<Spotify.GenresSeedResponse>('/recommendations/available-genre-seeds')
      .pipe(tap((data) => console.log(data)));
  }
}
