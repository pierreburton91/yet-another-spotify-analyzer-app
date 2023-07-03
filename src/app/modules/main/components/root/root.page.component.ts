import { Component, OnInit } from '@angular/core';
import { SpotifyFacadeService } from 'src/app/modules/spotify/spotify-facade.service';

@Component({
  selector: 'app-root.page',
  templateUrl: './root.page.component.html',
  styleUrls: ['./root.page.component.scss'],
})
export class RootPageComponent implements OnInit {
  isLoading: boolean = false;
  userProfile: Spotify.UserProfileResponse | null = null;
  errorMessage: string | null = null;

  constructor(private spotifyFacade: SpotifyFacadeService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.spotifyFacade.getUserProfile().subscribe({
      next: (userProfile) => (this.userProfile = userProfile),
      error: (error) => (this.errorMessage = error.message),
      complete: () => (this.isLoading = false),
    });
  }
}
