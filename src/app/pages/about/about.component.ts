import { Component } from "@angular/core";
import { Subject, interval } from "rxjs";
import {
     ABOUT_CONFIRM,
     ABOUT_CONFIRM_2,
} from "src/app/shared/constants/confirms";
import { ConfirmService } from "src/app/shared/services/confirm.service";

const obj = {
     title: "My Subject",
     count: 0,
};
@Component({
     selector: "app-about",
     templateUrl: "./about.component.html",
     styleUrls: ["./about.component.scss"],
})
export class AboutComponent {
     obs$: Subject<{ count: number; title: string }> = new Subject();
     constructor(private _confirmSrv: ConfirmService) {
          interval(1000).subscribe((val) => {
               this.obs$.next({ ...obj, count: val + 1 });
          });
     }
     public async showConfirm() {
          const res = await this._confirmSrv.showConfirm(ABOUT_CONFIRM);
          console.log("C_RESPONSE", res);
     }

     public async showConfirm2() {
          const res = await this._confirmSrv.showConfirm(ABOUT_CONFIRM_2);
          console.log("C_RESPONSE_2", res);
     }
}
