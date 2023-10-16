import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { IInputSelect, IOption } from "../../model";

@Component({
    selector: "app-input-select",
    templateUrl: "./input-select.component.html",
    styleUrls: ["./input-select.component.scss"],
})
export class InputSelectComponent implements OnInit {
    @Input() form!: FormGroup;
    @Input() input!: IInputSelect;
    public isOpenDropdown: boolean = false;

    ngOnInit(): void {
        if (this.input.selectedOption?.value) {
            this.selectOption(this.input.selectedOption);
        }
    }
    public get control(): FormControl {
        return this.form.controls[this.input.name] as FormControl;
    }

    public selectOption(option: IOption) {
        this.control.setValue(option.value);
        this.input.selectedOption = option;
    }
    public toggleDropdown() {
        this.isOpenDropdown = !this.isOpenDropdown;
    }
}
