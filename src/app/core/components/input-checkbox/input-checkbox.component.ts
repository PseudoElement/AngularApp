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
    options: ICheckbox[];
    constructor() {}
    ngOnInit(): void {
        this.options = this.input.checkboxes;
        const checkedOptions = this._findAllCheckedOptions()
    }

    public get formArray(): FormArray {
        return this.form.controls[this.input.name] as FormArray;
    } 
    public toggleCheckbox(option: ICheckbox, event: Event): void{
        const checkbox = event.target as HTMLInputElement
        option.isChecked = checkbox.checked;
        if(checkbox.checked){
            this.formArray.push(new FormControl(option.value))
        }else{
            let i: number = 0;
            this.formArray.controls.forEach((control) => {
              if(control.value === checkbox.value) {
                this.formArray.removeAt(i);
                return;
              }
              i++;
            });
        }
    }
    private _findAllCheckedOptions(): string[] | [null] {
        const checkedCheckboxes = this.options.filter((opt) => opt.isChecked).map((opt) => opt.value)
        return checkedCheckboxes.length ? checkedCheckboxes : [null];
    }
}
