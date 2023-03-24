import { Product } from "./types/products";
import { Component } from "@angular/core";
import { products } from "./data/productsData";

@Component({
     selector: "app-root",
     templateUrl: "./app.component.html",
     styleUrls: ["./app.component.scss"],
})
export class AppComponent {
     title = "AngularApp";
     products: Product[] = products;
}
