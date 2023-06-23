import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileTrendsPageComponent } from './components';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [ProfileTrendsPageComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
