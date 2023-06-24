import { Component } from '@angular/core';
import { SpotifyFacadeService } from 'src/app/modules/spotify/spotify-facade.service';

@Component({
  selector: 'app-profile-trends.page',
  templateUrl: './profile-trends.page.component.html',
  styleUrls: ['./profile-trends.page.component.scss'],
})
export class ProfileTrendsPageComponent {
  constructor(private spotifyFacade: SpotifyFacadeService) {}

  initAnalyzis() {}
}
