import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent {
  @Input({ required: true }) error: Error | null = null;

  get errorMessage() {
    return this.error?.message;
  }
}
