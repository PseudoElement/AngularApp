import { IInput, IInputText } from "src/app/core/model";

// export const FIRST_FORM_INPUTS: [
//     IInputText,
//     IInputText,
//     IInputText,
//     IInputText
// ] = [
//     {
//         name: "name",
//         type: "text",
//         value: "Hi boys!",
//         label: "Name",
//         validators: { minLength: 5, maxLength: 20, required: true },
//     },
//     {
//         name: "password",
//         type: "password",
//         value: "",
//         label: "Password",
//         validators: {
//             minLength: 5,
//             maxLength: 20,
//             required: true,
//             pattern: "^[0-9]",
//         },
//     },
//     {
//         name: "email",
//         type: "text",
//         value: "",
//         placeholder: "Enter email...",
//         disabled: true,
//         label: "Name",
//         validators: { required: true },
//     },
//     {
//         name: "surname",
//         type: "text",
//         value: "Hi girls!",
//         label: "Surname",
//         validators: { required: true },
//     },
// ];
export const FIRST_FORM_INPUTS: Record<string, IInputText> = {
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
};
