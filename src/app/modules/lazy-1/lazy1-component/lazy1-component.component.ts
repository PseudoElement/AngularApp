import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-lazy1-component',
    templateUrl: './lazy1-component.component.html',
    styleUrls: ['./lazy1-component.component.scss'],
})
export class Lazy1ComponentComponent implements OnInit {
    constructor(private _route: ActivatedRoute) {}

    ngOnInit(): void {
        this._route.data.subscribe((d) => console.log('data', d));
        this._route.parent?.data.subscribe((d) => console.log('parentData', d));
    }
}
