import { ApplicationRef, Injectable, Type, ViewContainerRef, createComponent } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AbstractConfirmComponent } from '../types/dynamic-comp-srv-types';
import { AbstractModalComp } from 'projects/dynamic-rendering/src/lib/types/dynamic-comp-srv-types';

@Injectable({
    providedIn: 'root',
})
export class DynamicComponentService {
    constructor(private appRef: ApplicationRef) {}

    public async openConfirmModal<T extends AbstractModalComp<ReturnedValue>, ReturnedValue>(
        component: Type<T>,
        inputs: Partial<Omit<T, 'close' | 'isConfirmed'>>,
        onOpen?: (...args: unknown[]) => any,
        onClose?: (...args: unknown[]) => any
    ): Promise<ReturnedValue> {
        const componentRef = createComponent(component, {
            environmentInjector: this.appRef.injector,
        });

        for (const inputName in componentRef.instance) {
            // @ts-ignore
            if (inputs[inputName]) {
                // @ts-ignore
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

        return firstValueFrom(componentRef.instance.returnedValue);
    }

    public async renderModalInVCRef<T extends AbstractModalComp<ReturnedValue>, ReturnedValue>(
        vcr: ViewContainerRef,
        component: Type<T>,
        inputs:  Partial<Omit<T, 'close' | 'isConfirmed'>>,
        onOpen?: (...args: unknown[]) => any,
        onClose?: (...args: unknown[]) => any
    ): Promise<ReturnedValue> {
        const componentRef = vcr.createComponent(component);
        for (const inputName in componentRef.instance) {
            // @ts-ignore
            if (inputs[inputName]) {
                // @ts-ignore
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

        return firstValueFrom(componentRef.instance.returnedValue);
    }
}
