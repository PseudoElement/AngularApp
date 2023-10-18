import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { IInputText } from "../../model";
import { InputBaseDirective } from "../../directives/input-base.directive";

@Component({
    selector: "app-input-text",
    templateUrl: "./input-text.component.html",
    styleUrls: ["./input-text.component.scss"],
})
export class InputTextComponent extends InputBaseDirective {
    constructor() {
        super()
    }
    public get inputText(): IInputText {
        return this.input as IInputText;
    }
}
