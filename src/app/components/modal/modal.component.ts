import { ModalService } from "./../../services/modal.service";
import {
     AfterViewInit,
     Component,
     ElementRef,
     EventEmitter,
     Input,
     Output,
} from "@angular/core";

@Component({
     selector: "app-modal",
     templateUrl: "./modal.component.html",
     styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements AfterViewInit {
     @Input() size: "fullscreen" | "block" = "block";
     @Input() title: string;
     isOpen: boolean = false;
     constructor(public modalService: ModalService) {}

     ngAfterViewInit(): void {}
     closeModal(): any {
          this.isOpen = false;
          this.size === "fullscreen" && (document.body.style.overflow = "auto");
     }
     openModal(): void {
          this.isOpen = true;
          this.size === "fullscreen" &&
               (document.body.style.overflow = "hidden");
     }
}
