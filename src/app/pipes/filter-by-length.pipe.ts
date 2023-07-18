import { Pipe, PipeTransform } from "@angular/core";
import { ITestObject } from "../model/test";

@Pipe({
     name: "filterByLength",
})
export class FilterByLengthPipe implements PipeTransform {
     transform(
          array: ITestObject[],
          length: number,
          shouldFilter: boolean
     ): ITestObject[] {
          if (!shouldFilter || !array.length) return array;
          return array.filter((obj) => obj.value.length >= length);
     }
}
