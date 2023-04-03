import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "./components.module";
import { FormsModule } from "@angular/forms";
import { ProductsComponent } from "../pages/products/products.component";
import { AboutComponent } from "../pages/about/about.component";

@NgModule({
     declarations: [ProductsComponent, AboutComponent],
     exports: [ProductsComponent, AboutComponent],
     imports: [CommonModule, FormsModule, ComponentsModule],
})
export class PagesModule {}
