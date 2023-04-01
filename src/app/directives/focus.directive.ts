import {
     Directive,
     ElementRef,
     AfterViewInit,
     OnInit,
     Input,
} from "@angular/core";

@Directive({
     selector: "[appFocus]",
})
export class FocusDirective implements OnInit, AfterViewInit {
     @Input() appFocus = false;
     constructor(private el: ElementRef) {}
     ngOnInit(): void {}
     ngAfterViewInit(): void {
          if (this.appFocus) {
               this.el.nativeElement.focus();
          }
     }
}
