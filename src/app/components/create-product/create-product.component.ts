import { ModalService } from "./../../services/modal.service";
import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
     selector: "app-create-product",
     templateUrl: "./create-product.component.html",
     styleUrls: ["./create-product.component.scss"],
})
export class CreateProductComponent implements OnInit {
     form = new FormGroup({
          title: new FormControl<string>("", [
               Validators.minLength(4),
               Validators.required,
          ]),
          author: new FormControl<string>("", [Validators.required]),
          createdAt: new FormControl<string>(new Date().toUTCString()),
     });
     constructor(public modalService: ModalService) {}
     ngOnInit(): void {}

     get title() {
          return this.form.controls.title;
     }
     get author() {
          return this.form.controls.author;
     }
     closeModal() {
          this.modalService.closeModal();
     }
     stopPropagation(e: Event): void {
          e.stopPropagation();
     }
     handleSubmit(e: Event): void {
          e.preventDefault();
          console.log("FORM VALUE", this.form.value);
     }
}
