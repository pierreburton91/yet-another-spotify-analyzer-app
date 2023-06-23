import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SpotifyFacadeService } from './modules/spotify/spotify-facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  genres: Spotify.GenresSeedResponse['genres'] = [];
  constructor(
    private spotifyFacade: SpotifyFacadeService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    const entryPath = this.location.path();
    if (entryPath.indexOf('auth-redirect') !== -1) {
      this.router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
          this.loadData();
        }
      });
      return;
    }
    if (!this.spotifyFacade.isLoggedIn) {
      this.router.navigate(['/spotify']);
      return;
    }

    this.loadData();
  }

  loadData() {
    console.log('load data');
    this.spotifyFacade
      .getGenres()
      .subscribe((genres) => (console.log(genres), (this.genres = genres)));
  }
}
