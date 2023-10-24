import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAccordeonOption } from '../../model';

@Component({
    selector: 'app-infinite-accordeon',
    templateUrl: './infinite-accordeon.component.html',
    styleUrls: ['./infinite-accordeon.component.scss'],
})
export class InfiniteAccordeonComponent {
    @Input() public accordeons: IAccordeonOption[] = [];
    @Output() onAdd: EventEmitter<unknown> = new EventEmitter();
    @Output() onDelete: EventEmitter<unknown> = new EventEmitter();
    constructor() {}

    public addAccordeon(value: string, accordeon?: IAccordeonOption): void {
        if (!value) return alert('Input value.');
        const _id = this._getUUID();
        const newAccordeon = {
            id: _id,
            title: value,
            isOpen: false,
            options: [],
        };
        if (!accordeon) this.accordeons.push(newAccordeon);
        else accordeon.options.push(newAccordeon);
        this.onAdd.emit();
    }
    public deleteAccordeon(e: Event, accordeon: IAccordeonOption): void {
        e.stopPropagation();
        const mainAccordeon = this.accordeons.find((acc) => acc === accordeon);
        if (mainAccordeon) {
            this.accordeons = this.accordeons.filter((acc) => acc !== mainAccordeon);
        } else {
            let found = this._findParentByChildAccordeonId(this.accordeons, accordeon.id);
            if (found) {
                found.options = found.options.filter((acc) => acc.id !== accordeon.id);
            }
        }
        this.onDelete.emit();
    }
    public toggleAccordeon(accordeon: IAccordeonOption) {
        accordeon.isOpen = !accordeon.isOpen;
    }
    private _findAccordeon(arr: IAccordeonOption[], id: string): IAccordeonOption | undefined {
        for (const option of arr) {
            if (option.id === id) {
                return option;
            }
            if (option.options) {
                const nestedOption = this._findAccordeon(option.options, id);
                if (nestedOption) {
                    return nestedOption;
                }
            }
        }
        return undefined;
    }
    private _findParentByChildAccordeonId(arr: IAccordeonOption[], id: string): IAccordeonOption | null {
        for (const accordeon of arr) {
            const isFound = accordeon.options.find((child) => child.id === id);
            if (isFound) {
                return accordeon;
            }
            if (accordeon.options) {
                const found = this._findParentByChildAccordeonId(accordeon.options, id);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    }
    private _getUUID(): string {
        return crypto.randomUUID();
    }
}
