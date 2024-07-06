import { ApplicationRef, ComponentRef, Injectable, Injector, createComponent } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Injectable({
    providedIn: 'root',
})
export class DynamicComponentService {
    constructor(private injector: Injector, private appRef: ApplicationRef) {}

    public appendModalToBody(bankName: string): ComponentRef<ModalComponent> {
        const componentRef = createComponent(ModalComponent, {
            environmentInjector: this.appRef.injector,
        });

        componentRef.instance.title = bankName;
        componentRef.instance.size = 'fullscreen';
        // componentRef.instance.close = this.removeComponent.bind(this);
        componentRef.instance.close = this.removeComponent.bind(this, componentRef);

        this.appRef.attachView(componentRef.hostView);
        const domElem = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
        document.body.appendChild(domElem);

        return componentRef;
    }

    private removeComponent(componentRef: ComponentRef<any>) {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
        componentRef.onDestroy(() => alert('Modal is destroyed!'));
    }
}
