import { OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModalService } from "src/app/services/modal.service";
import { ProductsService } from "src/app/services/product.service";
import { Product } from "src/app/shared/types/products";

@Component({
     selector: "app-products",
     templateUrl: "./products.component.html",
     styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit, OnChanges {
     title = "AngularApp";
     // private route: ActivatedRoute;
     @Input() name: string = "NAME";
     @Input() products: Product[] = this.productService.products;
     isLoading = false;
     // products$: Observable<Product[]>;

     constructor(
          public productService: ProductsService,
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

     onNgModelChange(e: Event) {
          console.log(this.name);
     }
}
