import { ModalService } from "../../services/modal.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ProductsService } from "src/app/services/product.service";
import { getAlertText } from "src/app/shared/heplers/getAlertText";

@Component({
     selector: "app-create-product",
     templateUrl: "./create-product.component.html",
     styleUrls: ["./create-product.component.scss"],
})
export class CreateProductComponent implements OnInit {
     form = new FormGroup({
          title: new FormControl<string>("", [
               Validators.minLength(4),
               Validators.maxLength(12),
               Validators.required,
               Validators.nullValidator,
          ]),
          price: new FormControl<string>("", [
               Validators.required,
               Validators.pattern("^[0-9]*$"),
               Validators.nullValidator,
          ]),
     });
     errorName: string;
     constructor(
          public modalService: ModalService,
          private productsService: ProductsService
     ) {}
     ngOnInit(): void {}
     onErrorChange(error: any) {
          this.errorName = error;
     }
     closeModal() {
          this.modalService.closeModal();
     }
     stopPropagation(e: Event): void {
          e.stopPropagation();
     }
     handleSubmit(e: Event): void {
          e.preventDefault();
          console.log("THIS FORM", this.form);
          if (this.form.valid) {
               const newProduct = {
                    title: this.form.value.title ?? "Default title",
                    price: +this.form.value.price!,
                    description: "Random Descript",
                    category: "Sport",
                    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
                    rating: {
                         rate: 10,
                         count: 10,
                    },
               };
               this.productsService.createProduct(newProduct).subscribe({
                    next: (value) => {
                         this.modalService.closeModal();
                    },
                    error: (value) => {
                         console.log("error", value);
                    },
                    complete: () => {
                         // console.log("Complete");
                    },
               });
          } else {
               alert(getAlertText(this.errorName));
          }
     }
}
