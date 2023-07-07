import { Component, OnInit } from '@angular/core';
import { MainFacadeService } from '../../main-facade.service';

@Component({
  selector: 'app-root.page',
  templateUrl: './root.page.component.html',
  styleUrls: ['./root.page.component.scss'],
})
export class RootPageComponent implements OnInit {
  isLoading: boolean = false;
  userProfile: Spotify.UserProfileResponse | null = null;
  errorMessage: string | null = null;

  constructor(private mainFacade: MainFacadeService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.mainFacade.getUserProfile().subscribe({
      next: (userProfile) => (this.userProfile = userProfile),
      error: (error) => (this.errorMessage = error.message),
      complete: () => (this.isLoading = false),
    });
  }
}
