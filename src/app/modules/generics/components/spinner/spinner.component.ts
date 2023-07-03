import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: '[y-spinner]',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SpinnerComponent implements OnInit, OnChanges {
  @Input() small: boolean = false;
  @Input() ['aria-label']: string = 'Loading';

  constructor(private ref: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.checkRef();
  }
  ngOnChanges(): void {
    this.checkRef();
  }

  checkRef(): void {
    const el = this.ref.nativeElement;

    if (el.tagName.toLocaleLowerCase() !== 'progress') {
      throw new Error('Spinner should only be a progress element.');
    }
    if (
      el.parentElement!.tagName.toLocaleLowerCase() !== 'label' &&
      !el.getAttribute('aria-label')
    ) {
      el.setAttribute('aria-label', this['aria-label']);
    }

    if (this.small) {
      el.classList.add('spinner--small');
    } else {
      el.classList.remove('spinner--small');
    }
  }
}
