import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClsxDirective } from 'src/app/directives/clsx/clsx.directive';
import { ButtonComponent, SpinnerComponent } from './components';
import { SectionMenuComponent } from './components/section-menu/section-menu.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SpinnerComponent,
    ClsxDirective,
    SectionMenuComponent,
  ],
  exports: [
    ButtonComponent,
    SpinnerComponent,
    SectionMenuComponent,
    ClsxDirective,
  ],
  imports: [CommonModule, RouterModule],
})
export class GenericsModule {}
