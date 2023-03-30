import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductComponent } from "./components/shared/product/product.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ErrorComponent } from "./components/error/error.component";
import { FormsModule } from "@angular/forms";
import { FilterProductsPipe } from './pipes/filter-products.pipe';

@NgModule({
     declarations: [AppComponent, ProductComponent, ErrorComponent, FilterProductsPipe],
     imports: [
          BrowserModule,
          AppRoutingModule,
          HttpClientModule,
          BrowserAnimationsModule,
          FormsModule,
     ],
     providers: [],
     bootstrap: [AppComponent],
})
export class AppModule {}
