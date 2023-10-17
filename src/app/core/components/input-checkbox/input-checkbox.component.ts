import { Component, Input, OnInit } from "@angular/core";
import { ICheckbox, IInputCheckBox, IOption } from "../../model";
import { FormGroup } from "@angular/forms";

@Component({
    selector: "app-input-checkbox",
    templateUrl: "./input-checkbox.component.html",
    styleUrls: ["./input-checkbox.component.scss"],
})
export class InputCheckboxComponent implements OnInit {
    @Input() form: FormGroup;
    @Input() config!: IInputCheckBox;
    options: ICheckbox[];
    constructor() {}
    ngOnInit(): void {
        this.options = this.config.checkboxes;
    }
    public selectCheckbox(option: ICheckbox): void{

    }
    log() {
        console.log("form", this.form);
    }
    private _findAllCheckedOptions() {
        return this.options
            .filter((opt) => opt.isChecked)
            .map((opt) => opt.value);
    }
}
