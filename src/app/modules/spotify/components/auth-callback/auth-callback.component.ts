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
  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.authService
      .requestAccessToken(AuthInitResponse.getCodeFromLocation())
      .subscribe((data) => {
        this.storage.set('access', data);
        this.router.navigate(['']);
      });
  }
}
