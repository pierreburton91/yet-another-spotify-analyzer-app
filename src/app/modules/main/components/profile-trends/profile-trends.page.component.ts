import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainFacadeService } from '../../main-facade.service';

@Component({
  selector: 'app-profile-trends.page',
  templateUrl: './profile-trends.page.component.html',
  styleUrls: ['./profile-trends.page.component.scss'],
})
export class ProfileTrendsPageComponent implements OnInit {
  artists: Spotify.UserTopItemsResponse<Spotify.Artist> | null = null;
  tracks: Spotify.UserTopItemsResponse<Spotify.Track> | null = null;
  isLoading: boolean = false;
  errorMessage: string | null = null;

  readonly menuItems = [
    {
      to: 'long-term',
      relativeTo: this.route,
      label: 'Long term',
    },
    {
      to: 'medium-term',
      relativeTo: this.route,
      label: 'Medium term',
    },
    {
      to: 'short-term',
      relativeTo: this.route,
      label: 'Short term',
    },
  ];

  constructor(
    private mainFacade: MainFacadeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.mainFacade.getUserProfileAnalyzis().subscribe({
      next: ({ artists, tracks }) => {
        this.artists = artists;
        this.tracks = tracks;
      },
      error: (error) => (this.errorMessage = error.message),
      complete: () => (this.isLoading = false),
    });
  }

  get genresList() {
    if (!this.artists) {
      return null;
    }

    return this.artists.items
      .reduce((list, artist) => {
        artist.genres?.forEach((genre) => {
          const existing = list.find((genreItem) => genreItem.name == genre);
          if (!existing) {
            list.push({
              name: genre,
              hits: 1,
              artists: [artist],
            });
          } else {
            existing.hits += 1;
            existing.artists.push(artist);
          }
        });

        return list;
      }, [] as GenreHit[])
      .sort((a, b) => b.hits - a.hits);
  }
  get mainGenre() {
    if (!this.genresList?.length) {
      return null;
    }

    return JSON.stringify(this.genresList.at(0));
  }
}
