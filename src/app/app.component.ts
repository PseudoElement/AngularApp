import { Component, ElementRef, OnInit } from '@angular/core';
import { PortalService } from './core/services/portal.service';
import { Orbiter } from '@orbiter-finance/bridge-sdk';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    private sdk: Orbiter;

    constructor(private portalService: PortalService, private elRef: ElementRef) {
        this.sdk = new Orbiter({});
    }

    async ngOnInit(): Promise<void> {
        this.portalService.setPortalOutlet(this.elRef.nativeElement);
        // await this.sdk.queryTokensAllChain();
        // await this.sdk.queryRouters();
        // await this.sdk.searchTransaction('');
        // // await this.sdk.queryReceiveAmount(123, {});
        // // await this.sdk.queryHistoryList()
        // const res = await this.sdk.toBridge({ fromChainID: '1', fromCurrency: 'USDT', toChainID: '42161', toCurrency: 'USDC', transferValue: 1100000 });
        // console.log('RES', res);
    }
}
