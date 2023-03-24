import { Product } from "./../../../types/products";
import { Component, Input } from "@angular/core";

@Component({
     selector: "app-product",
     templateUrl: "./product.component.html",
     styleUrls: ["./product.component.scss"],
})
export class ProductComponent {
     @Input() product: Product;
     constructor() {}
}
