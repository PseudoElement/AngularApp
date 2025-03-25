import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    BehaviorSubject,
    Observable,
    Subject,
    catchError,
    concatMap,
    debounce,
    debounceTime,
    delay,
    exhaustMap,
    filter,
    finalize,
    find,
    first,
    from,
    interval,
    map,
    merge,
    mergeMap,
    of,
    switchMap,
    take,
    takeUntil,
    tap,
    timer,
} from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/types/products';
import { ajax } from 'rxjs/ajax';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilderService } from 'src/app/core/services/form-builder.service';
import { IAccordeonOption, IInputCheckBox } from 'src/app/core/model';

interface IRes {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
    @Input() name: string = 'NAME';
    @Input() products: Product[] = this._porductSrv.products;
    public accordeons: IAccordeonOption[] = [];
    title = 'AngularApp';
    id = 1;
    isLoading = false;
    isDestroyed$: Subject<boolean> = new Subject();
    obs$ = new BehaviorSubject(this.name);

    form: FormGroup = new FormGroup({
        gender: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required]),
    });

    public radioGroups = [
        [
            {
                value: 'Male',
                label: 'Man',
                name: 'gender',
            },
            {
                value: 'Female',
                label: 'Woman',
                name: 'gender',
            },
        ],
        [
            {
                value: 'Child',
                label: '0-10',
                name: 'age',
            },
            {
                value: 'teenager',
                label: '11-18',
                name: 'age',
            },
            {
                value: 'adult',
                label: '18+',
                name: 'age',
            },
        ],
    ];

    public randomNum: number = 1_000;

    constructor(
        private _porductSrv: ProductsService,
        public modalService: ModalService,
        private _formBuilderSrv: FormBuilderService,
    ) {
        from([1, 2, 3, 4, 5, 6])
            .pipe(
                mergeMap((id) => ajax.getJSON<IRes>(`https://jsonplaceholder.typicode.com/todos/${id}`)),
                filter((val) => val.id > 2),
                map((val) => ({ ...val, myKey: 'new-key' })),
                tap({
                    complete() {},
                }),
                catchError((e) => {
                    return of(e);
                }),
                debounceTime(10000),
                finalize(() => 1),
                take(5),
            )
            .subscribe((data) => {
                this.id++;
            });
        this.form.valueChanges.subscribe(console.log);
        // this.obs$.pipe(debounceTime(500)).subscribe(console.log);
    }

    changeName(): void {
        this.name += '1';
    }
    openModal(): void {
        this.modalService.openModal();
    }

    async ngOnInit() {
        // merge(timer(1000).pipe(mergeMap(() => of('of1'))), timer(2000).pipe(mergeMap(() => of('of2'))), timer(3000).pipe(mergeMap(() => of('of3'))))
        //     .pipe()
        //     .subscribe(console.log);
        // this.isLoading = true;
        // this._porductSrv.getAll(5).subscribe((products) => {
        //     this.products = products;
        //     this.isLoading = false;
        // });
        // this.form.valueChanges.pipe(takeUntil(this.isDestroyed$)).subscribe((val) => {
        //     console.log('formValue', val);
        // });
    }

    ngOnDestroy(): void {
        this.isDestroyed$.next(true);
    }

    onNgModelChange(name: string) {
        this.obs$.next(name);
        this.makeRequest().pipe(exhaustMap((res) => of(res)));
    }

    private makeRequest(): Observable<any> {
        // Здесь вы можете использовать свой код для выполнения запроса
        return new Observable((observer) => {
            // Пример: Имитация асинхронного запроса с использованием setTimeout
            setTimeout(() => {
                observer.next('Результат запроса');
                observer.complete();
            }, 2000);
        });
    }

    public updateRandomNum(): void {
        this.randomNum = Math.floor(Math.random() * 1_000_000);
    }
}
