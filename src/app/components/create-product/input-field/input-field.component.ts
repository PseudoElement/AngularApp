import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";

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
     @Output() errorChange = new EventEmitter<string>();
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
     onInputChange() {
          if (this.control.errors) {
               this.errorChange.emit(
                    Object.keys(this.control.errors!).join("")
               );
          } else {
               this.errorChange.emit("");
          }
     }
}
