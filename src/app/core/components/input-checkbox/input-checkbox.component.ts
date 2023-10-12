import { Component, Input, OnInit } from "@angular/core";
import { ICheckbox, IInputCheckBox } from "../../model";
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
    setCheckOnCheckbox(id: number) {
        const checked = this.options.find((checkbox) => checkbox.id === id)!;
        checked.isChecked = !checked?.isChecked;
        const checkedOptions = this._findAllCheckedOptions();
        this.form.controls[this.config.name].setValue(checkedOptions);
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
