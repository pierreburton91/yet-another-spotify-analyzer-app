import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, StorageService } from '../../services';
import { AuthInitResponse } from '../../utils';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss'],
})
export class AuthCallbackComponent implements OnInit {
  isBusy = false;
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.isBusy = true;
    const code = AuthInitResponse.getCodeFromLocation();
    if (code) {
      this.authService.requestAccessToken(code).subscribe({
        next: (data) => this.storage.set('access', data),
        error: (error) => {
          this.errorMessage = `${error.message}\r\n"${error.error?.error_description}"`;
          this.isBusy = false;
        },
        complete: () => this.router.navigate(['/main']),
      });
      return;
    }
    const error = AuthInitResponse.getErrorFromLocation();
    if (error) {
      this.errorMessage = error;
      this.isBusy = false;
    }
  }

  retry() {
    this.isBusy = true;
    this.authService.initSpotifyAuthorization();
  }
}
