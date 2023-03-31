import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductComponent } from "./components/product/product.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ErrorComponent } from "./components/error/error.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; // for [(ngModel)]
import { FilterProductsPipe } from "./pipes/filter-products.pipe";
import { ModalComponent } from "./components/modal/modal.component";
import { CreateProductComponent } from "./components/create-product/create-product.component";
import { InputFieldComponent } from './components/create-product/input-field/input-field.component';

@NgModule({
     declarations: [
          AppComponent,
          ProductComponent,
          ErrorComponent,
          FilterProductsPipe,
          ModalComponent,
          CreateProductComponent,
          InputFieldComponent,
     ],
     imports: [
          BrowserModule,
          AppRoutingModule,
          HttpClientModule,
          BrowserAnimationsModule,
          FormsModule,
          ReactiveFormsModule,
     ],
     providers: [],
     bootstrap: [AppComponent],
})
export class AppModule {}
