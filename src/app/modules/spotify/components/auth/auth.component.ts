import { Component } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'auth',
  templateUrl: 'auth.component.html',
})
export class AuthComponent {
  constructor(private auth: AuthService) {}

  init() {
    this.auth.initSpotifyAuthorization();
  }
}
