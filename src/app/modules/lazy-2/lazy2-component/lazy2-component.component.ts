import { CdkPortalOutletAttachedRef, ComponentPortal } from '@angular/cdk/portal';
import { EmbeddedViewRef, TemplateRef, ViewChild } from '@angular/core';
import { Component, ComponentRef, ViewContainerRef } from '@angular/core';
import { Observable, delay, distinctUntilChanged, of, timeout } from 'rxjs';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { PortalService } from 'src/app/core/services/portal.service';
import { AlertComponent } from '../alert/alert.component';
import { Singleton } from 'src/app/core/classes/singleton-class';
import { SingleInherited } from 'src/app/core/classes/singleton2-class';

@Component({
    selector: 'app-lazy2-component',
    templateUrl: './lazy2-component.component.html',
    styleUrls: ['./lazy2-component.component.scss'],
})
export class Lazy2ComponentComponent {
    @ViewChild('containerDiv', { read: ViewContainerRef }) vcr: ViewContainerRef;

    @ViewChild('template', { read: TemplateRef, static: true }) temp: TemplateRef<any>;

    public portalComponent: ComponentPortal<ModalComponent> | undefined;

    public singletonSrv = new Singleton();

    private single2Srv = new SingleInherited();

    public length$: Observable<number> = this.single2Srv.length$;

    public count$ = this.singletonSrv.count$;

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

        of(false).pipe(delay(5000)).subscribe();
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

    private count: number = 1;

    public closeAllAlerts() {
        this.vcr.clear();
    }

    public createAlert(): void {
        const newAlert = this.vcr.createEmbeddedView(this.temp, {
            text: 'Text passed from parent component',
            id: crypto.randomUUID(),
        }) as EmbeddedViewRef<AlertComponent>;
        newAlert.context.text = 'Changed text in alert' + this.count;
        newAlert.context.view = newAlert;
        this.count++;
    }

    public closeAlert(id: string): void {}
}
