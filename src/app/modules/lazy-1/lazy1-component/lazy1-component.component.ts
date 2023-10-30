import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concat, interval, timeout, timer } from 'rxjs';
import { ITab } from 'src/app/core/model';
import { LAZY_1_TABS } from '../consts';

@Component({
    selector: 'app-lazy1-component',
    templateUrl: './lazy1-component.component.html',
    styleUrls: ['./lazy1-component.component.scss'],
})
export class Lazy1ComponentComponent implements OnInit {
    public tabs: ITab[] = LAZY_1_TABS;
    public activeTabValue: string | null;
    constructor(private _route: ActivatedRoute) {}

    ngOnInit(): void {
        this._route.data.subscribe((d) => console.log('data', d));
        this._route.parent?.data.subscribe((d) => console.log('parentData', d));
        const source$ = interval(1000);

        // Создайте таймер, который завершится через 5 секунд
        const timer$ = timer(5000);

        // Соедините интервал и таймер с помощью оператора concat
        const result$ = concat(source$, interval(1500));

        // Подпишитесь на результат
        // result$.pipe(timeout({ each: 1100, with: () => interval(500) })).subscribe((value) => console.log(value));
    }
    public setActiveTabValue(value: string | null) {
        this.activeTabValue = value;
    }
}
