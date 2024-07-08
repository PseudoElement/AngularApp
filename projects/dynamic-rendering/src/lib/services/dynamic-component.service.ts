import { ApplicationRef, Injectable, Type, ViewContainerRef, createComponent } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AbstractConfirmComponent } from '../types/dynamic-comp-srv-types';

@Injectable({
    providedIn: 'platform',
})
export class SintolLibDynamicComponentService {
    constructor(private appRef: ApplicationRef) {}

    public async openConfirmModal<T extends AbstractConfirmComponent>(
        component: Type<T>,
        inputs: Partial<T>,
        onOpen?: (...args: unknown[]) => any,
        onClose?: (...args: unknown[]) => any
    ): Promise<boolean> {
        const componentRef = createComponent(component, {
            environmentInjector: this.appRef.injector,
        });

        for (const inputName in componentRef.instance) {
            if (inputs[inputName]) {
                componentRef.instance[inputName] = inputs[inputName]!;
            }
        }

        componentRef.instance.close = () => {
            onClose?.();
            this.appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        };

        onOpen?.();
        this.appRef.attachView(componentRef.hostView);
        const domElem = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
        document.body.appendChild(domElem);

        return firstValueFrom(componentRef.instance.isConfirmed);
    }

    public async renderModalInVCRef<T extends AbstractConfirmComponent>(
        vcr: ViewContainerRef,
        component: Type<T>,
        inputs: Partial<T>,
        onOpen?: (...args: unknown[]) => any,
        onClose?: (...args: unknown[]) => any
    ): Promise<boolean> {
        const componentRef = vcr.createComponent(component);
        for (const inputName in componentRef.instance) {
            if (inputs[inputName]) {
                componentRef.instance[inputName] = inputs[inputName]!;
            }
        }
        componentRef.instance.close = () => {
            onClose?.();
            this.appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        };

        onOpen?.();
        vcr.insert(componentRef.hostView);

        return firstValueFrom(componentRef.instance.isConfirmed);
    }
}
