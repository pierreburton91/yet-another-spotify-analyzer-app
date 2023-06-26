import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { httpInterceptors } from './interceptors';
import {
  AuthService,
  GenresService,
  StorageService,
  UserService,
} from './services';
import { SpotifyRoutingModule } from './spotify-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SpotifyRoutingModule, HttpClientModule],
  providers: [
    AuthService,
    StorageService,
    httpInterceptors,
    GenresService,
    UserService,
  ],
})
export class SpotifyModule {}
