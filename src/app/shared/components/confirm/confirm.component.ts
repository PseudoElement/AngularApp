import { Component } from "@angular/core";
import { IConfirm } from "./confirm.model";
import { ConfirmService } from "../../services/confirm.service";

@Component({
     selector: "app-confirm",
     templateUrl: "./confirm.component.html",
     styleUrls: ["./confirm.component.scss"],
})
export class ConfirmComponent {
     data!: IConfirm | null;
     constructor(private _confirmSrv: ConfirmService) {
          this._confirmSrv.confirmData$.subscribe((data) => {
               this.data = data;
          });
     }

     public confirm(isConfirmed: boolean): void {
          this._confirmSrv.sendResponse(isConfirmed);
          setTimeout(() => this._confirmSrv.closeConfirm(), 300);
     }
}
