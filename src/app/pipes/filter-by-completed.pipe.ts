import { INewTestObject } from "./../model/test";
import { Pipe, PipeTransform } from "@angular/core";
import { ITestObject } from "../model/test";

@Pipe({
     name: "filterByCompleted",
})
export class FilterByCompletedPipe implements PipeTransform {
     transform<T extends ITestObject | INewTestObject>(
          array: T[],
          shouldFilter: boolean = false
     ): T[] {
          if (!shouldFilter) return array;
          return array.filter((obj) => {
               if ("isCompleted" in obj) {
                    return !Boolean(obj.isCompleted);
               } else return obj.husband === "michael";
          });
     }
}
