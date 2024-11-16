import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractModalComp } from '../../types/dynamic-comp-srv-types';

@Component({
    selector: 'sintol-lib-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class SintolLibModalComponent implements AfterViewInit, AbstractModalComp<boolean> {
    @Input() size: 'fullscreen' | 'block' = 'block';
    @Input() title: string = 'SOME TITLE';
    @Output() returnedValue: EventEmitter<boolean> = new EventEmitter();

    public isVisible: boolean;

    public close: () => void;

    constructor() {
        this.isVisible = true;
    }

    ngAfterViewInit(): void {}

    ngOnDestroy() {
        this.isVisible = false;
    }

    public chooseOption(isConfirmed: boolean) {
        this.returnedValue.emit(isConfirmed);
    }
}
