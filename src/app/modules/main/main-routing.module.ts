import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  LongTermPageComponent,
  MediumTermPageComponent,
  ProfileTrendsPageComponent,
  RootPageComponent,
  ShortTermPageComponent,
} from './components';

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
        children: [
          {
            path: '',
            redirectTo: 'long-term',
            pathMatch: 'prefix',
          },
          {
            path: 'long-term',
            component: LongTermPageComponent,
          },
          {
            path: 'medium-term',
            component: MediumTermPageComponent,
          },
          {
            path: 'short-term',
            component: ShortTermPageComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MainRoutingModule {}
