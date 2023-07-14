import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[yasaa-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input({ required: true }) type: HTMLButtonElement['type'] = 'button';
  @Input() loading: boolean = false;
}
