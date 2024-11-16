import { animate, animation, style, transition, trigger, useAnimation } from '@angular/animations';
import { AfterViewInit, Component, EventEmitter, Inject, Input, Output, ViewContainerRef } from '@angular/core';
import { AbstractModalComp } from 'projects/dynamic-rendering/src/lib/types/dynamic-comp-srv-types';
import { PortalService } from 'src/app/core/services/portal.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements AfterViewInit, AbstractModalComp<boolean> {
    @Input() size: 'fullscreen' | 'block' = 'block';

    @Input() title: string = 'Default Title';

    @Output() returnedValue: EventEmitter<boolean> = new EventEmitter();

    public close: () => void = () => {};

    public isVisible: boolean;

    constructor(private portalSrv: PortalService, private vcr: ViewContainerRef) {
        this.isVisible = true;
    }

    ngAfterViewInit(): void {}

    ngOnDestroy() {
        this.isVisible = false;
    }

    public chooseOption(isConfirmed: boolean) {
        //@ts-ignore
        this.returnedValue.emit([{key: 'key', value: 'KeyW'}]);
        if (isConfirmed) {
            this.portalSrv.confirm();
        } else {
            this.portalSrv.cancel();
        }
        this.close();
    }
}
