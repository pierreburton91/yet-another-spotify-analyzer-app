import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GenericsModule } from '../generics/generics.module';
import {
  LongTermPageComponent,
  MediumTermPageComponent,
  ProfileTrendsPageComponent,
  RootPageComponent,
  ShortTermPageComponent,
} from './components';
import { MainRoutingModule } from './main-routing.module';
import { StorageService } from './services';
@NgModule({
  declarations: [
    ProfileTrendsPageComponent,
    RootPageComponent,
    LongTermPageComponent,
    MediumTermPageComponent,
    ShortTermPageComponent,
  ],
  imports: [CommonModule, MainRoutingModule, RouterModule, GenericsModule],
  providers: [StorageService],
})
export class MainModule {}
