import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthCallbackComponent } from './components';
import { httpInterceptors } from './interceptors';
import { AuthService, GenresService, StorageService } from './services';
import { SpotifyRoutingModule } from './spotify-routing.module';

@NgModule({
  declarations: [AuthCallbackComponent],
  imports: [CommonModule, SpotifyRoutingModule, HttpClientModule],
  providers: [AuthService, StorageService, httpInterceptors, GenresService],
})
export class SpotifyModule {}
