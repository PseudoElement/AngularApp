import { Directive, ElementRef, AfterViewInit, Input } from "@angular/core";

@Directive({
     selector: "[appFocus]",
})
export class FocusDirective implements AfterViewInit {
     @Input() appFocus = false;
     constructor(private el: ElementRef) {}
     ngAfterViewInit(): void {
          if (this.appFocus) {
               this.el.nativeElement.focus();
          }
     }
}
