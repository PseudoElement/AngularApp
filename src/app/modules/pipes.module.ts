import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterProductsPipe } from "../pipes/filter-products.pipe";
import { FilterByLengthPipe } from '../pipes/filter-by-length.pipe';
import { FilterByCompletedPipe } from '../pipes/filter-by-completed.pipe';
import { FilterByNumberPipe } from '../pipes/filter-by-number.pipe';
import { SortByCreatedAtPipe } from '../pipes/sort-by-created-at.pipe';

@NgModule({
     declarations: [FilterProductsPipe, FilterByLengthPipe, FilterByCompletedPipe, FilterByNumberPipe, SortByCreatedAtPipe],
     imports: [CommonModule],
     exports: [FilterProductsPipe, FilterByLengthPipe, FilterByCompletedPipe, FilterByNumberPipe, SortByCreatedAtPipe],
})
export class PipesModule {}
