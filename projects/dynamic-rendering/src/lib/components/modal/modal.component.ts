import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'sintol-lib-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class SintolLibModalComponent implements AfterViewInit {
    @Input() size: 'fullscreen' | 'block' = 'block';
    @Input() title: string = 'HUI PIZDA';
    @Input() close: () => void;

    @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter();

    public isVisible: boolean;

    constructor() {
        this.isVisible = true;
    }

    ngAfterViewInit(): void {}

    ngOnDestroy() {
        this.isVisible = false;
    }

    public chooseOption(isConfirmed: boolean) {
        this.isConfirmed.emit(isConfirmed);
        this.close();
    }
}
