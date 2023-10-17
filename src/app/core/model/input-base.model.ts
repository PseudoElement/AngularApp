export interface IInput {
    value?: string;
    name: string;
    type: InputType;
    readonly?: boolean;
    label?: string;
    disabled?: boolean;
    validators: {
        required?: boolean;
        min?: number;
        max?: number;
        minLength?: number;
        maxLength?: number;
        pattern?: string;
        email?: boolean;
    };
}

export interface IInputSelect extends IInput {
    options: IOption[];
    placeholder?: string;
    selectedOption?: IOption;
}

export interface IInputText extends IInput {
    placeholder?: string;
}
export interface IInputPassword extends IInputText {}

export interface IInputNumber extends IInput {
    count?: number;
    maxCount?: number;
}

export interface IInputRadio extends IInput {
    radioBtns: boolean;
}
export interface IInputCheckBox extends IInput {
    checkboxes: ICheckbox[];
    flexDirection: "row" | "column";
}
export interface IOption {
    value: string | number;
    text: string;
}
export interface ICheckbox {
    value: string;
    label: string;
    isChecked: boolean;
}
export interface IRadio {
    value: string;
    label: string;
    isChecked: boolean;
}
export type InputType =
    | "text"
    | "number"
    | "password"
    | "select"
    | "radio"
    | "checkbox"
    | "date";
