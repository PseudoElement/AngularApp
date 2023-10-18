import { IInputCheckBox, IInputSelect, IInputText } from "src/app/core/model";

export interface I_FIRST_FORM_INPUTS {
    NAME: IInputText;
    PASSWORD: IInputText;
    EMAIL: IInputText;
    SURNAME: IInputText;
    COUNTRY: IInputSelect;
    CHILDREN: IInputSelect;
    RULES: IInputCheckBox;
    CHECK2: IInputCheckBox;
    CHECK3: IInputCheckBox;
}
