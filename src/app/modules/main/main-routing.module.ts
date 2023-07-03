import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileTrendsPageComponent, RootPageComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: RootPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'prefix',
      },
      {
        path: 'profile',
        component: ProfileTrendsPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MainRoutingModule {}
