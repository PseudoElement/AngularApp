import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../components/components.module";
import { FormsModule } from "@angular/forms";
import { ProductsComponent } from "./products/products.component";
import { AboutComponent } from "./about/about.component";

@NgModule({
     declarations: [ProductsComponent, AboutComponent],
     exports: [ProductsComponent, AboutComponent],
     imports: [CommonModule, ComponentsModule, FormsModule],
})
export class PagesModule {}
