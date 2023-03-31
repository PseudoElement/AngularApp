import { Product } from "../../types/products";
import { Component, Input } from "@angular/core";

@Component({
     selector: "app-product",
     templateUrl: "./product.component.html",
     styleUrls: ["./product.component.scss"],
})
export class ProductComponent {
     @Input() product: Product;
     @Input() i: number;
     isShownMore = false;
     setClasses() {
          return {
               first: this.product.id === 1,
               [`id` + this.product.id]: this.product.id, // true
               product: "product", // false
               isShown: this.isShownMore, // true
          };
     }
     constructor() {}
}
