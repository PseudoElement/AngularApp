import { Component, Input, OnInit } from "@angular/core";
import { ICheckbox, IInputCheckBox, IOption } from "../../model";
import { FormArray, FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "app-input-checkbox",
    templateUrl: "./input-checkbox.component.html",
    styleUrls: ["./input-checkbox.component.scss"],
})
export class InputCheckboxComponent implements OnInit {
    @Input() form: FormGroup;
    @Input() input!: IInputCheckBox;
    constructor() {}
    ngOnInit(): void {}

    public get options(): ICheckbox[] {
        return this.input.checkboxes;
    }

    public get formGroup(): FormGroup {
        return this.form.controls[this.input.name] as FormGroup;
    }

    public toggleCheckbox(option: ICheckbox, e: Event, index: number) {
        option.isChecked = (e.target as HTMLInputElement).checked;
        this.formGroup.controls[option.value].patchValue(option.isChecked);
    }

    private _findAllCheckedOptions(): string[] | never[] {
        const checkedCheckboxes = this.options
            .filter((opt) => opt.isChecked)
            .map((opt) => opt.value);
        return checkedCheckboxes.length ? checkedCheckboxes : [];
    }
}
