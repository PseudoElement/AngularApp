import { Component } from "@angular/core";
import { BehaviorSubject, interval, take } from "rxjs";
import { ITestObject } from "src/app/model/test";
import { values } from "src/app/shared/constants/test";

@Component({
     selector: "app-test",
     templateUrl: "./test.component.html",
     styleUrls: ["./test.component.scss"],
})
export class TestComponent {
     values$: BehaviorSubject<ITestObject[]> = new BehaviorSubject(
          [] as ITestObject[]
     );

     shouldFilterByLength: boolean = false;
     shouldFilterByCompleted: boolean = false;
     shouldFilterByNumber: boolean = false;
     shouldSortByCreationDate: boolean = false;

     constructor() {
          interval(300)
               .pipe(take(5))
               .subscribe((index) => {
                    const time = new Date();
                    const oldArray = this.values$.value;
                    const newArray = [
                         ...oldArray,
                         { ...values[index], createdAt: time },
                    ];
                    this.values$.next(newArray);
               });
     }

     onCheckboxCreatedChange(e: any, obj: ITestObject) {
          obj.isCompleted = e.target.checked ? true : false;
     }
}
