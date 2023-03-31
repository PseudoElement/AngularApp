import { Injectable } from "@angular/core";

@Injectable({
     providedIn: "root",
})
export class ModalService {
     isOpenModal = false;
     constructor() {}
     openModal(): void {
          this.isOpenModal = true;
     }
     closeModal(): void {
          this.isOpenModal = false;
     }
}
