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
            if (input.type === "checkbox") {
                const fg = this._createNestedFormGroup(input as IInputCheckBox);
                form[input.name] = fg;
            } else {
                const control = this._createControl(input);
                form[input.name] = control;
            }
        });
        return new FormGroup(form);
    }
    private _createNestedFormGroup(input: IInputCheckBox): FormGroup {
        const formGroup = input.checkboxes.reduce((acc, el, i) => {
            const key = el.value as string;
            acc[key] = new FormControl(el.isChecked);
            return acc;
        }, {} as { [k: string]: FormControl<boolean | null> });
        return new FormGroup(formGroup);
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
