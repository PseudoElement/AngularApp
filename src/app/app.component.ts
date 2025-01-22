import { Component, ElementRef, OnInit } from '@angular/core';
import { PortalService } from './core/services/portal.service';
import { Singleton } from './core/classes/singleton-class';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private portalService: PortalService, private elRef: ElementRef, private readonly httpClient: HttpClient) {}

    async ngOnInit(): Promise<void> {
        const worker = new Worker(new URL('./shared/workers/test-torker.worker.ts', import.meta.url))
        worker.onmessage = (resp) => {
            console.log('Worker resp ==> ', resp.data)
        }
        worker.postMessage({id: '20', needFetch: true})
        this.portalService.setPortalOutlet(this.elRef.nativeElement);
    }
}
