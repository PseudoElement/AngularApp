import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "./components.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductsComponent } from "../pages/products/products.component";
import { AboutComponent } from "../pages/about/about.component";
import { PipesModule } from "./pipes.module";
import { DirectivesModule } from "./directives.module";
import { TestComponent } from "../pages/test/test.component";

@NgModule({
     declarations: [ProductsComponent, AboutComponent, TestComponent],
     exports: [ProductsComponent, AboutComponent, TestComponent],
     imports: [
          CommonModule,
          FormsModule,
          ComponentsModule,
          PipesModule,
          DirectivesModule,
          ReactiveFormsModule,
     ],
})
export class PagesModule {}
