import { Pipe, PipeTransform } from "@angular/core";
import { ITestObject } from "../model/test";

@Pipe({
     name: "filterByCompleted",
})
export class FilterByCompletedPipe implements PipeTransform {
     transform(array: ITestObject[], shouldFilter: boolean): ITestObject[] {
          if (!shouldFilter) return array;
          return array.filter((obj) => !Boolean(obj.isCompleted));
     }
}
