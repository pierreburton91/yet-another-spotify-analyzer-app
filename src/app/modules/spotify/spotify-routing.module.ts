import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AuthCallbackComponent,
  AuthComponent,
  RootPageComponent,
} from './components';
import { RouteNames } from './constants';

const routes: Routes = [
  {
    path: '',
    component: RootPageComponent,
    children: [
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class SpotifyRoutingModule {}
