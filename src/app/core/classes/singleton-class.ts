import { BehaviorSubject } from 'rxjs';

export class Singleton {
    private static instance: Singleton;

    private _count: number = 0;

    private _count$: BehaviorSubject<number> = new BehaviorSubject(this._count);

    public count$ = this._count$.asObservable();

    public get count(): number {
        return this._count;
    }

    /* private singleSrv = new Singleton() to get same instance */
    public constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    /* private singleSrv = Singleton.getInstance() to get same */
    public static getInstance(): Singleton {
        if (!this.instance) {
            this.instance = new Singleton();
        }

        return this.instance;
    }

    public increment(): void {
        this._count++;
        this._count$.next(this._count);
    }

    public decrement(): void {
        this._count--;
        this._count$.next(this._count);
    }
}
