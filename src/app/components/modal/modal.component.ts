import { ModalService } from "./../../services/modal.service";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
     selector: "app-modal",
     templateUrl: "./modal.component.html",
     styleUrls: ["./modal.component.scss"],
})
export class ModalComponent {
     // @Output() closeModal = new EventEmitter<void>(); // для двустороннего связывания с app-component
     constructor(public modalService: ModalService) {}
     closeModal(): any {
          this.modalService.closeModal();
     }
}
