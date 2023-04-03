import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FocusDirective } from "src/app/directives/focus.directive";

@Component({
     selector: "app-input-field",
     templateUrl: "./input-field.component.html",
     styleUrls: ["./input-field.component.scss"],
     // viewProviders: [
     //      {
     //           provide: ControlContainer, //<-------------------- это чтобы передавать formContactName в Input из другого компонента
     //           useExisting: FormGroupDirective, //<--------------
     //      },
     // ],
})
export class InputFieldComponent {
     @Input() id: string;
     @Input() form: FormGroup;
     JSON;
     Object;
     constructor() {
          this.JSON = JSON;
          this.Object = Object;
     }
     get control() {
          return this.form.controls[this.id];
     }
     ngOnInit(): void {}
}
