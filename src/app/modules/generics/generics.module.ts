import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClsxDirective } from 'src/app/directives/clsx/clsx.directive';
import { ButtonComponent, SpinnerComponent } from './components';

@NgModule({
  declarations: [ButtonComponent, SpinnerComponent, ClsxDirective],
  exports: [ButtonComponent, SpinnerComponent],
  imports: [CommonModule],
})
export class GenericsModule {}
