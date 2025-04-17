import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

type HighlightColor = 'yellow' | 'orange' | 'red';

@Directive({
    selector: '[higlighter]',
    exportAs: 'higlighter',
})
export class HighlighterDirective {
    @Input() set range(value: { from: number; to: number }) {
        if (value.from < value.to) {
            this.highlight(value);
        }
    }

    @Input() color: HighlightColor = 'yellow';

    constructor(private readonly elRef: ElementRef) {}

    private highlight(range: { from: number; to: number }): void {
        const el = this.elRef.nativeElement as HTMLElement;
        const removedPrevStyle = el.innerHTML.replace(/<.*">/gi, '').replace(/<\/.*>/, '');
        el.innerHTML = removedPrevStyle;

        const firstPart = el.innerHTML.slice(0, range.from);
        const lastPart = el.innerHTML.slice(range.to + 1);
        const textForHighlighing = removedPrevStyle.slice(range.from, range.to + 1);
        const wrappedInSpan = `<span style="background-color:${this.color}">` + textForHighlighing + '</span>';
        const newHTML = firstPart + wrappedInSpan + lastPart;

        el.innerHTML = newHTML;
    }
}
