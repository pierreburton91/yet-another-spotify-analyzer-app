import { Directive, ElementRef, Input } from '@angular/core';
import { ClassValue, clsx as _clsx } from 'clsx';

@Directive({
  selector: '[clsx]',
})
export class ClsxDirective {
  constructor(private eleRef: ElementRef) {}

  @Input() set clsx(classDef: ClassValue | ClassValue[]) {
    const classList = _clsx(classDef);
    this.eleRef.nativeElement.classList.add(classList);
  }
}
