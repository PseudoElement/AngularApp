import { OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
    BehaviorSubject,
    Observable,
    Subject,
    catchError,
    concatMap,
    debounce,
    debounceTime,
    exhaustMap,
    filter,
    finalize,
    find,
    first,
    from,
    interval,
    map,
    mergeMap,
    of,
    switchMap,
    take,
    takeUntil,
    tap,
} from "rxjs";
import { ModalService } from "src/app/services/modal.service";
import { ProductsService } from "src/app/services/product.service";
import { Product } from "src/app/shared/types/products";
import { ajax } from "rxjs/ajax";
import { FormGroup } from "@angular/forms";
import { FormBuilderService } from "src/app/core/services/form-builder.service";
import { IInputCheckBox } from "src/app/core/model";

interface IRes {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

@Component({
    selector: "app-products",
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit, OnDestroy {
    @Input() name: string = "NAME";
    @Input() products: Product[] = this.productService.products;
    title = "AngularApp";
    id = 1;
    isLoading = false;
    isDestroyed$: Subject<boolean> = new Subject();
    obs$ = new BehaviorSubject(this.name);
    form: FormGroup = new FormGroup({});

    constructor(
        public productService: ProductsService,
        public modalService: ModalService,
        private _formBuilderSrv: FormBuilderService
    ) {
        from([1, 2, 3, 4, 5, 6])
            .pipe(
                mergeMap((id) =>
                    ajax.getJSON<IRes>(
                        `https://jsonplaceholder.typicode.com/todos/${id}`
                    )
                ),
                filter((val) => val.id > 2),
                map((val) => ({ ...val, myKey: "new-key" })),
                tap({
                    complete() {},
                }),
                catchError((e) => {
                    return of(e);
                }),
                debounceTime(10000),
                finalize(() => 1),
                take(5)
            )
            .subscribe((data) => {
                this.id++;
            });
        this.obs$.pipe(debounceTime(500)).subscribe(console.log);
    }

    changeName(): void {
        this.name += "1";
    }
    openModal(): void {
        this.modalService.openModal();
    }

    async ngOnInit(): Promise<any> {
        this.isLoading = true;
        this.productService.getAll(5).subscribe((products) => {
            this.products = products;
            this.isLoading = false;
        });
        this.form.valueChanges
            .pipe(takeUntil(this.isDestroyed$))
            .subscribe((val) => {
                console.log("formValue", val);
            });
    }

    ngOnDestroy(): void {
        this.isDestroyed$.next(true);
    }

    onNgModelChange(name: string) {
        this.obs$.next(name);
    }
}
