import { Component } from "@angular/core";
import { ABOUT_CONFIRM } from "src/app/shared/constants/confirms";
import { ConfirmService } from "src/app/shared/services/confirm.service";

@Component({
     selector: "app-about",
     templateUrl: "./about.component.html",
     styleUrls: ["./about.component.scss"],
})
export class AboutComponent {
     constructor(private _confirmSrv: ConfirmService) {}
     public async showConfirm() {
          const res = await this._confirmSrv.showConfirm(ABOUT_CONFIRM);
          console.log("C_RESPONSE", res);
     }
}
