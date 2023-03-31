import { Component, Input } from "@angular/core";
import { ValidationErrors } from "@angular/forms";

interface Data {
     id: string;
     titleText: string;
     errorText: ValidationErrors | null;
}
@Component({
     selector: "app-input-field",
     templateUrl: "./input-field.component.html",
     styleUrls: ["./input-field.component.scss"],
})
export class InputFieldComponent {
     @Input() data: Data;
}
