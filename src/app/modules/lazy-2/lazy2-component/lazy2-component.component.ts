import { EmbeddedViewRef, TemplateRef, ViewChild } from '@angular/core';
import { Component, ViewContainerRef } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';

@Component({
    selector: 'app-lazy2-component',
    templateUrl: './lazy2-component.component.html',
    styleUrls: ['./lazy2-component.component.scss'],
})
export class Lazy2ComponentComponent {
    @ViewChild('containerDiv', { read: ViewContainerRef }) vcr: ViewContainerRef;

    @ViewChild('template', { read: TemplateRef, static: true }) temp: TemplateRef<any>;

    private count: number = 1;

    constructor() {}

    ngOnInit() {}

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
