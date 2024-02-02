import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Singleton } from 'src/app/core/classes/singleton-class';

@Component({
    selector: 'app-lazy1-nested',
    templateUrl: './lazy1-nested.component.html',
    styleUrls: ['./lazy1-nested.component.scss'],
})
export class Lazy1NestedComponent {
    private singletonSrv = new Singleton();

    public count$: Observable<number> = this.singletonSrv.count$;
}
