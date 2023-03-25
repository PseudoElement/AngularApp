import { ProductsService } from "./services/product.service";
import { Product } from "./types/products";
import { Component, OnInit } from "@angular/core";

@Component({
     selector: "app-root",
     templateUrl: "./app.component.html",
     styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
     title = "AngularApp";
     products: Product[];
     loading = false;

     constructor(private productService: ProductsService) {}

     async ngOnInit(): Promise<any> {
          // const response = await fetch("https://fakestoreapi.com/products");  //ЧЕРЕЗ ФЕТЧ
          // const json = await response.json();
          // this.data = json;
          this.productService.getAll(7, "asc").subscribe((products) => {
               this.products = products;
          });
     }
}
