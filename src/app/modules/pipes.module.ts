import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterProductsPipe } from "../pipes/filter-products.pipe";

@NgModule({
     declarations: [FilterProductsPipe],
     imports: [CommonModule],
     exports: [FilterProductsPipe],
})
export class PipesModule {}
