import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCallbackComponent, AuthComponent } from './components';
import { RouteNames } from './constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: RouteNames.AUTH,
    pathMatch: 'prefix',
  },
  {
    path: RouteNames.AUTH,
    component: AuthComponent,
  },
  {
    path: RouteNames.AUTH_CALLBACK,
    component: AuthCallbackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class SpotifyRoutingModule {}
