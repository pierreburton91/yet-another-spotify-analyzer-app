import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileTrendsPageComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: ProfileTrendsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MainRoutingModule {}
