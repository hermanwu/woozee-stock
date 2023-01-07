import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[autoFocusForSearchBar]',
})
export class AutofocusDirective implements AfterContentInit {
  @Input() autoFocusForSearchBar: boolean;

  public constructor(private el: ElementRef) {}

  public ngAfterContentInit() {
    if (this.autoFocusForSearchBar) {
      setTimeout(() => {
        this.el.nativeElement.focus();
      }, 100);
    }
  }
}
