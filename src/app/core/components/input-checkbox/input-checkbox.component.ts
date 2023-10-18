import { Component, OnInit } from "@angular/core";
import { ICheckbox, IInputCheckBox } from "../../model";
import { FormGroup } from "@angular/forms";
import { InputBaseDirective } from "../../directives/input-base.directive";

@Component({
    selector: "app-input-checkbox",
    templateUrl: "./input-checkbox.component.html",
    styleUrls: ["./input-checkbox.component.scss"],
})
export class InputCheckboxComponent extends InputBaseDirective implements OnInit {

    constructor() {
        super()
    }
    override ngOnInit(): void { }

    public get inputCheckbox(): IInputCheckBox {
        return this.input as IInputCheckBox;
    }
    public get options(): ICheckbox[] {
        return this.inputCheckbox.checkboxes;
    }

    public get formGroup(): FormGroup {
        return this.form.controls[this.input.name] as FormGroup;
    }

    public toggleCheckbox(option: ICheckbox, e: Event) {
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
