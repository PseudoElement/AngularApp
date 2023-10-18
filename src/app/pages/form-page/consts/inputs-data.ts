import { IInput, IInputSelect, IInputText } from "src/app/core/model";
import { I_FIRST_FORM_INPUTS } from "../model/interfaces";

export const FIRST_FORM_INPUTS: I_FIRST_FORM_INPUTS = {
    NAME: {
        name: "name",
        type: "text",
        value: "Hi boys!",
        label: "Name",
        validators: { minLength: 5, maxLength: 20, required: true },
    },
    PASSWORD: {
        name: "password",
        type: "password",
        value: "",
        label: "Password",
        placeholder: 'Enter Password',
        validators: {
            minLength: 5,
            maxLength: 20,
            required: true,
            pattern: "^[0-9].*$",
        },
    },
    EMAIL: {
        name: "email",
        type: "text",
        value: "",
        placeholder: "Enter email...",
        disabled: true,
        label: "Email",
        validators: { required: true, email: true },
    },
    SURNAME: {
        name: "surname",
        type: "text",
        value: "Hi girls!",
        label: "Surname",
        validators: { required: true },
    },
    COUNTRY: {
        name: "country",
        type: "select",
        label: "Birth place",
        options: [
            { text: "China", value: "CN" },
            { text: "Russia", value: "RU" },
            { text: "Belarus", value: "BY" },
            { text: "England", value: "UK" },
            { text: "America", value: "USA" },
            { text: "Germany", value: "DE" },
        ],
        validators: { required: true },
        placeholder: "Select Country",
    },
    CHILDREN: {
        name: "childrenCount",
        type: "select",
        label: "How much children?",
        validators: { required: true },
        options: [
            { text: "One", value: 1 },
            { text: "Two", value: 2 },
            { text: "Three", value: 3 },
            { text: "Four", value: 4 },
        ],
    },
    RULES: {
        name: 'rules',
        type: 'checkbox',
        label: 'Select rules',
        flexDirection: 'column',
        validators: { required: true },
        checkboxes: [
            { isChecked: false, label: 'SystemAdmin', value: 'SystemAdmin' },
            { isChecked: true, label: 'TechUser', value: 'TechUser', isDisabled: true },
            { isChecked: false, label: 'CEO', value: 'CEO' },
            { isChecked: false, label: 'Moderator', value: 'Moderator' }
        ]
    },
    CHECK2: {
        name: 'check2',
        type: 'checkbox',
        label: 'Select CHECK2',
        flexDirection: 'column',
        validators: { required: true },
        checkboxes: [
            { isChecked: false, label: 'Value1', value: 'Value1' },
            { isChecked: true, label: 'value2', value: 'value2', isDisabled: true },
            { isChecked: false, label: 'Value3', value: 'Value3' },
            { isChecked: false, label: 'vale4', value: 'Value4' }
        ]
    },
    CHECK3: {
        name: 'check3',
        type: 'checkbox',
        label: 'Select CHECK3',
        flexDirection: 'column',
        validators: { required: true },
        checkboxes: [
            { isChecked: false, label: 'ANdrei', value: 'ANdrei' },
            { isChecked: true, label: 'max', value: 'max', isDisabled: true },
            { isChecked: false, label: 'Pavel', value: 'Pavel' },
            { isChecked: false, label: 'Sergei', value: 'Sergei' }
        ]
    }
};
