import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent, SpinnerComponent } from './components';

@NgModule({
  declarations: [ButtonComponent, SpinnerComponent],
  exports: [ButtonComponent, SpinnerComponent],
  imports: [CommonModule],
})
export class GenericsModule {}
