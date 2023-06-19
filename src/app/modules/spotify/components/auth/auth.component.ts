import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'auth',
  templateUrl: 'auth.component.html',
})
export class AuthComponent implements OnInit {
  authService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  ngOnInit() {
    this.authService.initSpotifyAuthorization();
  }
}
