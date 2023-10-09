export interface IInputConfig {
    value: string;
    readonly: boolean;
    name: string;
    type: InputType;
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

export interface IInputSelectConfig extends IInputConfig {
    selectedOption: number;
    options: IOption[];
}

export interface IInputTextConfig extends IInputConfig {
    placeholder?: string;
}
export interface IInputPasswordConfig extends IInputTextConfig {}

export interface IInputNumberConfig extends IInputConfig {
    count?: number;
    maxCount?: number;
}

export interface IInputRadioConfig extends IInputConfig {
    radioBtns: boolean;
}
export interface IInputCheckBoxConfig extends IInputConfig {
    checkboxes: ICheckbox[];
    flexDirection: "row" | "column";
}
export interface IOption {
    id: number;
    value: string;
    text: string;
    isSelected: boolean;
}
export interface ICheckbox {
    value: string;
    label: string;
    isChecked: boolean;
    id: number;
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
