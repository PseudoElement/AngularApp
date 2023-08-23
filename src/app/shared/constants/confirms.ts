import { IConfirm } from "../components/confirm/confirm.model";

export const ABOUT_CONFIRM: IConfirm = {
     buttons: [
          { text: "Yes", isConfirmed: true },
          { isConfirmed: false, text: "No" },
     ],
     message: "Are you sure?",
     title: "Test confirm",
};
export const ABOUT_CONFIRM_2: IConfirm = {
     buttons: [
          { text: "Принять", isConfirmed: true },
          { text: "Закрыть", isConfirmed: false },
     ],
     message: "Вы действительно хотите продолжить?",
     title: "Подтверждение действия",
};
