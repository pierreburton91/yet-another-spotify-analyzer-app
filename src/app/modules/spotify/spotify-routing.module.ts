import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AuthCallbackPageComponent,
  AuthPageComponent,
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
        component: AuthPageComponent,
      },
      {
        path: RouteNames.AUTH_CALLBACK,
        component: AuthCallbackPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class SpotifyRoutingModule {}
