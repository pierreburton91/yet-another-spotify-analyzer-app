import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericsModule, MainModule, SpotifyModule } from './modules';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpotifyModule,
    MainModule,
    GenericsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
