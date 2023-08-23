import { Injectable } from "@angular/core";
import { IConfirm } from "../components/confirm/confirm.model";
import { Subject, of, take } from "rxjs";

@Injectable({
     providedIn: "root",
})
export class ConfirmService {
     confirmData$: Subject<IConfirm | null> = new Subject();
     private isConfirmed$: Subject<boolean> = new Subject();
     constructor() {}

     public showConfirm(data: IConfirm): Promise<boolean> {
          this.confirmData$.next(data);
          return new Promise((res) => {
               this.isConfirmed$
                    .pipe(take(1))
                    .subscribe((isConfirmed) => res(isConfirmed));
          });
     }

     public sendResponse(isConfirmed: boolean) {
          this.isConfirmed$.next(isConfirmed);
     }

     public closeConfirm() {
          this.confirmData$.next(null);
     }
}
