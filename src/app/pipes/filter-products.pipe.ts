import { Product } from "../shared/types/products";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
     name: "filterProducts",
})
export class FilterProductsPipe implements PipeTransform {
     transform(products: Product[], search: string): Product[] {
          return products.filter((prod) =>
               prod.title.toLowerCase().includes(search.toLowerCase())
          );
     }
}
