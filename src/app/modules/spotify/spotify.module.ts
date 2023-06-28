import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GenericsModule } from '../generics/generics.module';
import {
  AuthCallbackComponent,
  AuthComponent,
  RootPageComponent,
} from './components/';
import { httpInterceptors } from './interceptors';
import {
  AuthService,
  GenresService,
  StorageService,
  UserService,
} from './services';
import { SpotifyRoutingModule } from './spotify-routing.module';

@NgModule({
  declarations: [RootPageComponent, AuthComponent, AuthCallbackComponent],
  imports: [
    CommonModule,
    SpotifyRoutingModule,
    HttpClientModule,
    RouterModule,
    GenericsModule,
  ],
  providers: [
    AuthService,
    StorageService,
    httpInterceptors,
    GenresService,
    UserService,
  ],
})
export class SpotifyModule {}
