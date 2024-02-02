import { BehaviorSubject, Observable, map, startWith } from 'rxjs';
import { SingletonAbstract } from './singleton-abstract';

export class SingleInherited {
    private _list$: BehaviorSubject<number[]> = new BehaviorSubject([] as number[]);

    public list$ = this._list$.asObservable();

    public length$: Observable<number> = this.list$.pipe(
        map((list) => list.length),
        startWith(0)
    );

    constructor() {}

    public addItem(num: number): void {
        const list = this._list$.getValue();
        list.push(num);
        this._list$.next(list);
    }
}
