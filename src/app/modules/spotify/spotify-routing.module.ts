import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCallbackComponent, AuthComponent } from './components';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'prefix',
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'auth-callback',
    component: AuthCallbackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class SpotifyRoutingModule {}
