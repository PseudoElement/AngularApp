import { Component, ElementRef, OnInit } from '@angular/core';
import { PortalService } from './core/services/portal.service';
import { Singleton } from './core/classes/singleton-class';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private portalService: PortalService, private elRef: ElementRef) {}

    async ngOnInit(): Promise<void> {
        this.portalService.setPortalOutlet(this.elRef.nativeElement);
    }
}
