import { Component } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'auth',
  templateUrl: 'auth.page.component.html',
  styleUrls: ['./auth.page.component.scss'],
})
export class AuthPageComponent {
  constructor(private auth: AuthService) {}

  init() {
    this.auth.initSpotifyAuthorization();
  }
}
