import { IInputSelect, IInputText } from "src/app/core/model";

export interface I_FIRST_FORM_INPUTS {
    NAME: IInputText;
    PASSWORD: IInputText;
    EMAIL: IInputText;
    SURNAME: IInputText;
    COUNTRY: IInputSelect;
    CHILDREN: IInputSelect;
}
