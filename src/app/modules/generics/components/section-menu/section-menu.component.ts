import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-menu',
  templateUrl: './section-menu.component.html',
  styleUrls: ['./section-menu.component.scss'],
})
export class SectionMenuComponent {
  @Input({ required: true }) links: any[] = [];
}
