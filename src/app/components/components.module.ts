import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product/product.component";
import { ErrorComponent } from "./error/error.component";
import { FilterProductsPipe } from "../pipes/filter-products.pipe";
import { ModalComponent } from "./modal/modal.component";
import { CreateProductComponent } from "./create-product/create-product.component";
import { InputFieldComponent } from "./create-product/input-field/input-field.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FocusDirective } from "../directives/focus.directive";

@NgModule({
     declarations: [
          ProductComponent,
          ErrorComponent,
          FilterProductsPipe,
          ModalComponent,
          CreateProductComponent,
          InputFieldComponent,
          FocusDirective,
     ],
     imports: [CommonModule, FormsModule, ReactiveFormsModule],
     exports: [
          ProductComponent,
          ErrorComponent,
          FilterProductsPipe,
          ModalComponent,
          CreateProductComponent,
          InputFieldComponent,
     ],
})
export class ComponentsModule {}
