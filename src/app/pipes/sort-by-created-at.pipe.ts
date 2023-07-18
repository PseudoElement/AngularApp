import { Pipe, PipeTransform } from "@angular/core";
import { ITestObject } from "../model/test";

@Pipe({
     name: "sortByCreatedAt",
})
export class SortByCreatedAtPipe implements PipeTransform {
     transform(array: ITestObject[], shouldFilter: boolean): ITestObject[] {
          if (!shouldFilter) return array;
          return [...array].sort(
               (a, b) => b.createdAt.valueOf() - a.createdAt.valueOf()
          );
     }
}
