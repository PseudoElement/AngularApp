import { ComponentPortal, DomPortalOutlet } from '@angular/cdk/portal';
import { ApplicationRef, ComponentFactoryResolver, Injectable } from '@angular/core';
import { Subject, take } from 'rxjs';
import { ModalComponent } from 'src/app/components/modal/modal.component';

interface ShowDialogType {
    title: string;
    size: 'fullscreen' | 'block';
    modalClosureDelay?: number;
}

@Injectable({
    providedIn: 'root',
})
export class PortalService {
    public portalOutlet: DomPortalOutlet;

    private _isConfirmed$: Subject<boolean> = new Subject();

    private _portalComponent: ComponentPortal<ModalComponent>;

    constructor(private cfr: ComponentFactoryResolver, private appRef: ApplicationRef) {}

    public setPortalOutlet(el: Element) {
        this.portalOutlet = new DomPortalOutlet(el, this.cfr, this.appRef);
    }

    /**
     * @return Return boolean user choice
     */
    public async showModal({ size, title, modalClosureDelay = 500 }: ShowDialogType): Promise<boolean> {
        this._portalComponent = new ComponentPortal(ModalComponent);
        const portalRef = this.portalOutlet.attach(this._portalComponent);

        portalRef.instance.size = size;
        portalRef.instance.title = title;

        return new Promise((res) => {
            this._isConfirmed$.pipe(take(1)).subscribe((bool) => {
                res(bool);
                setTimeout(() => {
                    this.portalOutlet.detach();
                }, modalClosureDelay);
            });
        });
    }

    public confirm() {
        this._isConfirmed$.next(true);
    }

    public cancel() {
        this._isConfirmed$.next(false);
    }
}
