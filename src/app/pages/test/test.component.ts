import {
     Component,
     ElementRef,
     OnInit,
     TemplateRef,
     ViewChild,
     ViewContainerRef,
} from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { BehaviorSubject, interval, take } from "rxjs";
import { INewTestObject, ITestObject } from "src/app/model/test";
import { values } from "src/app/shared/constants/test";

@Component({
     selector: "app-test",
     templateUrl: "./test.component.html",
     styleUrls: ["./test.component.scss"],
})
export class TestComponent implements OnInit {
     @ViewChild("inputRef", { read: ElementRef, static: true })
     inputRef: ElementRef;
     @ViewChild("tempRef", { read: TemplateRef, static: true })
     tempRef: TemplateRef<any>;
     @ViewChild("h1Ref", { read: ViewContainerRef, static: true })
     h1Ref: ViewContainerRef;
     values$: BehaviorSubject<ITestObject[]> = new BehaviorSubject(
          [] as ITestObject[]
     );

     shouldFilterByLength: boolean = false;
     shouldFilterByCompleted: boolean = false;
     shouldFilterByNumber: boolean = false;
     shouldSortByCreationDate: boolean = false;

     form: FormGroup;
     countries: Array<any> = [
          { name: "India", value: "india" },
          { name: "France", value: "france" },
          { name: "USA", value: "USA" },
          { name: "Germany", value: "germany" },
          { name: "Japan", value: "Japan" },
     ];

     couples: INewTestObject[] = [
          { husband: "michael", wife: "paul" },
          { husband: "Steve", wife: "Lili" },
          { husband: "Joe", wife: "Nady" },
     ];

     constructor(
          private fb: FormBuilder,
          private viewContainerRef: ViewContainerRef,
          private host: ElementRef
     ) {
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
          this.form = fb.group({
               selectedCountries: new FormArray([]),
          });
     }

     ngOnInit(): void {}

     ngAfterViewInit() {
          const elements = [
               this.inputRef.nativeElement,
               this.inputRef.nativeElement,
               this.inputRef.nativeElement,
               this.inputRef.nativeElement,
          ];
          console.log(this.host);
          this.host.nativeElement.style.padding = "150px";
          // this._appendElements(elements);
          // setTimeout(() => this.viewContainerRef.clear(), 5000);
     }

     private _appendElements(elements: HTMLElement[]): void {
          if (!elements.length) return;
          elements.forEach((el) => {
               const clone = el.cloneNode(true);
               this.host.nativeElement.append(clone);
          });
     }

     onCheckboxCompletedChange(e: any, obj: ITestObject) {
          obj.isCompleted = e.target.checked ? true : false;
     }

     onCheckboxChange(event: any) {
          console.log("TFC", this.form.controls.selectedCountries);
          const selectedCountries = this.form.controls[
               "selectedCountries"
          ] as FormArray;
          if (event.target.checked) {
               selectedCountries.push(new FormControl(event.target.value));
          } else {
               const index = selectedCountries.controls.findIndex(
                    (x) => x.value === event.target.value
               );
               selectedCountries.removeAt(index);
          }
     }

     submit() {
          console.log(this.form.value);
     }
}
