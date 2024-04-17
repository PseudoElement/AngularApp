import { Component, ElementRef, ViewChild } from '@angular/core';
import {
    BehaviorSubject,
    Subject,
    debounceTime,
    endWith,
    finalize,
    fromEvent,
    interval,
    map,
    startWith,
    switchMap,
    take,
    takeUntil,
    takeWhile,
    tap,
    throttle,
} from 'rxjs';

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

    private _count: number = 0;

    private _randomNum: number = 0;

    private _startCounting$ = new Subject<void>();

    public shownAmount$ = this._startCounting$.pipe(
        switchMap(() =>
            interval(1000).pipe(
                map((val) => this._count - val - 1),
                take(this._randomNum),
                startWith(this._count),
                endWith(0)
            )
        ),
        startWith(this._count)
    );

    constructor(private hostRef: ElementRef) {}

    public startTimer(): void {
        this._randomNum = 5 + Math.ceil(Math.random() * 10);
        this._count = this._randomNum;
        this._startCounting$.next();
    }

    private move(dX: number, dY: number): void {
        const el = this.elRef.nativeElement as HTMLElement;
        const newYPos = parseInt(el.style.top || '0') + dY;
        const newXPos = parseInt(el.style.left || '0') + dX;

        el.style.top = `${newYPos}px`;
        el.style.left = `${newXPos}px`;
    }
}
