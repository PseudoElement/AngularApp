import { OnChanges, OnInit, SimpleChanges } from "@angular/core";
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
     tap,
} from "rxjs";
import { ModalService } from "src/app/services/modal.service";
import { ProductsService } from "src/app/services/product.service";
import { Product } from "src/app/shared/types/products";
import { ajax } from "rxjs/ajax";

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
export class ProductsComponent implements OnInit, OnChanges {
     title = "AngularApp";
     // private route: ActivatedRoute;
     id = 1;
     @Input() name: string = "NAME";
     @Input() products: Product[] = this.productService.products;
     isLoading = false;
     // products$: Observable<Product[]>;
     obs$ = new BehaviorSubject(this.name);

     constructor(
          public productService: ProductsService,
          public modalService: ModalService
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
                         complete() {
                              console.log("TAP COMPLETED");
                         },
                    }),
                    catchError((e) => {
                         console.log("ERROR", e);
                         return of(e);
                    }),
                    debounceTime(10000),
                    finalize(() => console.log("FINAL")),
                    take(5)
               )
               .subscribe((data) => {
                    this.id++;
                    console.log(data);
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
          // this.products$ = this.productService.getAll(5).pipe(
          //      tap((val) => {
          //           this.isLoading = false;
          //      })
          // );
          this.productService.getAll(5).subscribe((products) => {
               this.products = products;
               this.isLoading = false;
          });
          // const response = await fetch("https://fakestoreapi.com/products");  //ЧЕРЕЗ ФЕТЧ
          // ...................
     }
     ngOnChanges(changes: SimpleChanges): void {
          console.log("CHANGES", changes);
     }

     onNgModelChange(name: string) {
          this.obs$.next(name);
     }
}
