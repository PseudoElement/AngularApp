export interface IConfirm {
     title: string;
     message: string;
     buttons: IConfirmButton[];
}

export interface IConfirmButton {
     text: string;
     isConfirmed: boolean;
}
