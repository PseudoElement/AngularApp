import { Component, Input } from '@angular/core';
import { IAccordeonOption } from '../../model';

@Component({
    selector: 'app-infinite-accordeon',
    templateUrl: './infinite-accordeon.component.html',
    styleUrls: ['./infinite-accordeon.component.scss'],
})
export class InfiniteAccordeonComponent {
    @Input() public accordeons: IAccordeonOption[] = [];
    constructor() {}

    ngAfterViewInit() {}

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
    }
    public toggleAccordeon(accordeon: IAccordeonOption) {
        accordeon.isOpen = !accordeon.isOpen;
    }
    private _getUUID(): string {
        return crypto.randomUUID();
    }
}
