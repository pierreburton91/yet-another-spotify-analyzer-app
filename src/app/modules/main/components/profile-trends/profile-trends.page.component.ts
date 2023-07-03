import { Component, OnInit } from '@angular/core';
import { SpotifyFacadeService } from 'src/app/modules/spotify/spotify-facade.service';

@Component({
  selector: 'app-profile-trends.page',
  templateUrl: './profile-trends.page.component.html',
  styleUrls: ['./profile-trends.page.component.scss'],
})
export class ProfileTrendsPageComponent implements OnInit {
  user$: Spotify.UserProfileResponse | null = null;

  constructor(private spotifyFacade: SpotifyFacadeService) {}

  ngOnInit() {
    // this.spotifyFacade
    //   .getUserProfileAnalyzis()
    //   .subscribe(({ user }) => (this.user$ = user));
  }
}
