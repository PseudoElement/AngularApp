import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { IInputText } from "../../model";

@Component({
    selector: "app-input-text",
    templateUrl: "./input-text.component.html",
    styleUrls: ["./input-text.component.scss"],
})
export class InputTextComponent {
    @Input() form: FormGroup;
    @Input() input!: IInputText;
    constructor() {}
    get isValid(): boolean {
        return this.form.controls[this.input.name].valid;
    }
}
