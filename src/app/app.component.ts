import { Component, ElementRef, OnInit } from '@angular/core';
import { PortalService } from './core/services/portal.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private portalService: PortalService, private elRef: ElementRef) {}

    ngOnInit(): void {
        this.portalService.setPortalOutlet(this.elRef.nativeElement);
    }
}
