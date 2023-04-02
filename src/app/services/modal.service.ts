import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
     providedIn: "root",
})
export class ModalService {
     isOpenModal$ = new BehaviorSubject<boolean>(false);
     constructor() {}
     openModal(): void {
          this.isOpenModal$.next(true);
     }
     closeModal(): void {
          this.isOpenModal$.next(false);
     }
}
