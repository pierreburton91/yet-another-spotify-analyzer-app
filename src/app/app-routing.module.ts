import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SpotifyConst } from './modules';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: SpotifyConst.RouteNames.ROOT,
    loadChildren: () =>
      import('./modules/spotify/spotify.module').then(
        (module) => module.SpotifyModule
      ),
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./modules/main/main.module').then((module) => module.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
