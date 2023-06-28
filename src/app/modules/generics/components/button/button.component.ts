import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[g-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input({ required: true }) type: HTMLButtonElement['type'] = 'button';
}
