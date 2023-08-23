import { IConfirm } from "../components/confirm/confirm.model";

export const ABOUT_CONFIRM: IConfirm = {
     buttons: [
          { text: "Yes", isConfirmed: true },
          { isConfirmed: false, text: "No" },
     ],
     message: "Are you sure?",
     title: "Test confirm",
};
