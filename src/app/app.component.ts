import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyConst } from './modules';
import { SpotifyFacadeService } from './modules/spotify/spotify-facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private spotifyFacade: SpotifyFacadeService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    const entryPath = this.location.path();

    if (entryPath.indexOf(SpotifyConst.RouteNames.AUTH_CALLBACK) !== -1) {
      // Let the auth callback do its magic
      return;
    }

    this.spotifyFacade.tryLoginOrLogout().subscribe({
      error: (error) => {
        this.router.navigate([SpotifyConst.RouteNames.ROOT]);
      },
      complete: () => {
        this.router.navigate(['/main']);
      },
    });
  }
}
