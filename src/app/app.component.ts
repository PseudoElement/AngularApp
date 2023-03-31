import { ModalService } from "./services/modal.service";
import { Observable, tap } from "rxjs";
import { ProductsService } from "./services/product.service";
import { Product } from "./types/products";
import {
     Component,
     OnInit,
     Input,
     OnChanges,
     SimpleChanges,
} from "@angular/core";

@Component({
     selector: "app-root",
     templateUrl: "./app.component.html",
     styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnChanges {
     title = "AngularApp";
     @Input() name: string = "";
     products: Product[];
     isLoading = false;
     products$: Observable<Product[]>;

     constructor(
          private productService: ProductsService,
          public modalService: ModalService
     ) {}

     changeName(): void {
          this.name += "1";
     }
     openModal(): void {
          this.modalService.openModal();
     }

     async ngOnInit(): Promise<any> {
          this.isLoading = true;
          this.products$ = this.productService.getAll(5).pipe(
               tap((val) => {
                    this.isLoading = false;
               })
          );
          // const response = await fetch("https://fakestoreapi.com/products");  //ЧЕРЕЗ ФЕТЧ
          // ...................
     }
     ngOnChanges(changes: SimpleChanges): void {
          console.log("NAME", changes);
     }
}
