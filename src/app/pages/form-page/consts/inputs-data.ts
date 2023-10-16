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
        validators: { required: true },
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
};
