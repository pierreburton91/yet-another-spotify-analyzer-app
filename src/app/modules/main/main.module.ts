import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GenericsModule } from '../generics/generics.module';
import { ProfileTrendsPageComponent } from './components';
import { RootPageComponent } from './components/root/root.page.component';
import { MainRoutingModule } from './main-routing.module';
@NgModule({
  declarations: [ProfileTrendsPageComponent, RootPageComponent],
  imports: [CommonModule, MainRoutingModule, RouterModule, GenericsModule],
})
export class MainModule {}
