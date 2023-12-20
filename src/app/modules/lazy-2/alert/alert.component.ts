import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input, EmbeddedViewRef } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
    @Input() id: string;
    @Input() text: string;
    @Input() view: EmbeddedViewRef<AlertComponent>;

    @Output() onClose: EventEmitter<string> = new EventEmitter();
    public random: string;

    constructor() {
        this.random = this.getRandom();
    }
    public getRandom(): string {
        return Math.random().toString();
    }

    public close() {
        this.view.destroy();
    }
}
