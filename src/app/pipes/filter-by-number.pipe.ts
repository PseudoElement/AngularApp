import { Pipe, PipeTransform } from "@angular/core";
import { ITestObject } from "../model/test";

@Pipe({
     name: "filterByNumber",
})
export class FilterByNumberPipe implements PipeTransform {
     transform(array: ITestObject[], shouldFilter: boolean): ITestObject[] {
          if (!shouldFilter) return array;
          return array.filter((obj) =>
               new RegExp(/[0-9]/, "gi").test(obj.value)
          );
     }
}
