import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "../components/product/product.component";
import { ErrorComponent } from "../components/error/error.component";
import { ModalComponent } from "../components/modal/modal.component";
import { CreateProductComponent } from "../components/create-product/create-product.component";
import { InputFieldComponent } from "../components/create-product/input-field/input-field.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DirectivesModule } from "./directives.module";
import { InputComponent } from '../components/input/input.component';

@NgModule({
     declarations: [
          ProductComponent,
          ErrorComponent,
          ModalComponent,
          CreateProductComponent,
          InputFieldComponent,
          InputComponent,
     ],
     imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          DirectivesModule,
     ],
     exports: [
          ProductComponent,
          ErrorComponent,
          ModalComponent,
          CreateProductComponent,
          InputFieldComponent,
          InputComponent,
     ],
})
export class ComponentsModule {}
