import { CdkPortalOutletAttachedRef, ComponentPortal } from '@angular/cdk/portal';
import { Component, ComponentRef } from '@angular/core';
import { distinctUntilChanged, of } from 'rxjs';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { PortalService } from 'src/app/core/services/portal.service';

@Component({
    selector: 'app-lazy2-component',
    templateUrl: './lazy2-component.component.html',
    styleUrls: ['./lazy2-component.component.scss'],
})
export class Lazy2ComponentComponent {
    public portalComponent: ComponentPortal<ModalComponent> | undefined;

    constructor(private portalService: PortalService) {}

    async ngOnInit() {
        const temps$ = of(30, 31, 20, 34, 33, 29, 20, 21, 22, 24, 35, 20);

        const recordHighs$ = temps$.pipe(
            distinctUntilChanged((prev, current) => {
                // If the current temp is less than
                // or the same as the previous record,
                // the record hasn't changed.
                // console.log('prev', prev);
                return current <= prev;
            })
        );
        recordHighs$.subscribe();
    }

    public async showModal() {
        const isOk = await this.portalService.showModal({ size: 'block', title: 'Custom title', modalClosureDelay: 200 });
        console.log(isOk);
    }

    public showTemplateModal() {
        this.portalComponent = new ComponentPortal(ModalComponent);
    }

    public onModalAttach(portalOutletRef: CdkPortalOutletAttachedRef) {
        portalOutletRef = portalOutletRef as ComponentRef<ModalComponent>;
        portalOutletRef.instance.title = 'PortalOutletRef';
        portalOutletRef.instance.isConfirmed.subscribe((bool: boolean) => {
            console.log(bool);
            setTimeout(() => portalOutletRef?.destroy(), 500);
        });
    }
}
