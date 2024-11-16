import { EventEmitter } from '@angular/core';

export abstract class AbstractConfirmComponent {
    public abstract isConfirmed: EventEmitter<boolean>;

    public abstract close: () => void;
}

export interface  AbstractModalComp<T> {
    returnedValue: EventEmitter<T>

    close: () => void
}
