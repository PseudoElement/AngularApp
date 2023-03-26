import { Observable, tap } from "rxjs";
import { ProductsService } from "./services/product.service";
import { Product } from "./types/products";
import { Component, OnInit, Input } from "@angular/core";

@Component({
     selector: "app-root",
     templateUrl: "./app.component.html",
     styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
     title = "AngularApp";
     products: Product[];
     isLoading = false;
     products$: Observable<Product[]>;

     constructor(private productService: ProductsService) {}

     async ngOnInit(): Promise<any> {
          this.isLoading = true;
          this.products$ = this.productService.getAll(5).pipe(
               tap((val) => {
                    console.log("Value", val);
                    this.isLoading = false;
               })
          );
          // const response = await fetch("https://fakestoreapi.com/products");  //ЧЕРЕЗ ФЕТЧ
          // const json = await response.json();
          // this.data = json;
          // this.productService.getAll(7, "asc").subscribe((products) => {
          //      this.products = products;
          //      this.isLoading = false;
          // });
     }
}
