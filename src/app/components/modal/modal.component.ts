import { animate, animation, style, transition, trigger, useAnimation } from '@angular/animations';
import { AfterViewInit, Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { PortalService } from 'src/app/core/services/portal.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements AfterViewInit {
    @Input() size: 'fullscreen' | 'block' = 'block';
    @Input() title: string;

    @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter();

    public isVisible: boolean;

    constructor(private portalSrv: PortalService) {
        this.isVisible = true;
    }

    ngAfterViewInit(): void {}

    ngOnDestroy() {
        console.log('destroy');
        this.isVisible = false;
    }

    public chooseOption(isConfirmed: boolean) {
        this.isConfirmed.emit(isConfirmed);

        if (isConfirmed) {
            this.portalSrv.confirm();
        } else {
            this.portalSrv.cancel();
        }
    }
}
