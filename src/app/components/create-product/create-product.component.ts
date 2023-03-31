import { ModalService } from "./../../services/modal.service";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
     selector: "app-create-product",
     templateUrl: "./create-product.component.html",
     styleUrls: ["./create-product.component.scss"],
})
export class CreateProductComponent {
     constructor(public modalService: ModalService) {}
     closeModal() {
          this.modalService.closeModal();
     }
     stopPropagation(e: Event) {
          e.stopPropagation();
     }
}
