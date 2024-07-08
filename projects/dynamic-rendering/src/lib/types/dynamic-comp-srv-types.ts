import { EventEmitter } from '@angular/core';

export abstract class AbstractConfirmComponent {
    public abstract isConfirmed: EventEmitter<boolean>;

    public abstract close: () => void;
}
