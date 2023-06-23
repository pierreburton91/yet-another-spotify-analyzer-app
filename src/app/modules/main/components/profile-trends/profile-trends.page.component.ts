import { Component, OnInit } from '@angular/core';
import { SpotifyFacadeService } from 'src/app/modules/spotify/spotify-facade.service';

@Component({
  selector: 'app-profile-trends.page',
  templateUrl: './profile-trends.page.component.html',
  styleUrls: ['./profile-trends.page.component.scss'],
})
export class ProfileTrendsPageComponent implements OnInit {
  genres: Spotify.GenresSeedResponse['genres'] = [];

  constructor(private spotifyFacade: SpotifyFacadeService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.spotifyFacade
      .getGenres()
      .subscribe((genres) => (this.genres = genres));
  }
}
