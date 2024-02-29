import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, interval, switchMap, takeUntil, takeWhile, tap, throttle } from 'rxjs';

@Component({
    selector: 'app-draggable-block',
    templateUrl: './draggable-block.component.html',
    styleUrls: ['./draggable-block.component.scss'],
})
export class DraggableBlockComponent {
    @ViewChild('block', { static: true }) elRef: ElementRef;

    private mouseUp$ = fromEvent<MouseEvent>(document, 'mouseup');

    private mouseDown$ = fromEvent<MouseEvent>(this.hostRef.nativeElement, 'mousedown');

    private mouseMove$ = fromEvent<MouseEvent>(this.hostRef.nativeElement, 'mousemove');

    public listener$ = this.mouseDown$.pipe(
        switchMap(() => this.mouseMove$.pipe(takeUntil(this.mouseUp$))),
        tap((e) => this.move(e.movementX, e.movementY))
    );

    constructor(private hostRef: ElementRef) {}

    private move(dX: number, dY: number): void {
        const el = this.elRef.nativeElement as HTMLElement;
        const newYPos = parseInt(el.style.top || '0') + dY;
        const newXPos = parseInt(el.style.left || '0') + dX;

        el.style.top = `${newYPos}px`;
        el.style.left = `${newXPos}px`;
    }
}
