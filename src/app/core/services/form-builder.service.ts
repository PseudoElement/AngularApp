import { Injectable } from "@angular/core";
import {
    FormArray,
    FormControl,
    FormGroup,
    ValidatorFn,
    Validators,
} from "@angular/forms";
import { IInput, IInputCheckBox } from "../model";

@Injectable({
    providedIn: "root",
})
export class FormBuilderService {
    constructor() {}

    public createFormGroup(inputs: Record<string, IInput>): FormGroup {
        const form = {} as any;
        Object.values(inputs).forEach((input) => {
            if(input.type === "checkbox"){
                const formArray = this._createFormArray(input as IInputCheckBox);
                form[input.name] = formArray;
            }else{
                const control = this._createControl(input);
                form[input.name] = control;
            }
        });
        return new FormGroup(form);
    }
    private _createFormArray(input: IInputCheckBox): FormArray{
        const formControls = [] as FormControl[];
        input.checkboxes.forEach(checkbox => {
                formControls.push(new FormControl(checkbox.isChecked ? checkbox.value : ''))
        })
        const validators = this._addValidators(input);
        return new FormArray(formControls, validators);
    }
    private _createControl(input: IInput): FormControl {
        const validators = this._addValidators(input);
        const control = new FormControl(input.value, validators);
        return control;
    }
    private _addValidators(input: IInput): ValidatorFn | ValidatorFn[] {
        const validators: ValidatorFn[] = [];
        Object.keys(input.validators).forEach((key) => {
            if (!key) return;
            //@ts-ignore
            const value = input.validators[key] ?? null;
            if (key === "required" && value)
                validators.push(Validators.required);
            else if (key === "email") validators.push(Validators.email);
            else if (
                key === "min" ||
                key === "max" ||
                key === "maxLength" ||
                key === "minLength" ||
                key === "pattern"
            )
                validators.push(Validators[key](value));
        });
        return validators;
    }
}