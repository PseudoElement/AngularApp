import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "./components.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductsComponent } from "../pages/products/products.component";
import { AboutComponent } from "../pages/about/about.component";
import { PipesModule } from "./pipes.module";
import { DirectivesModule } from "./directives.module";
import { TestComponent } from "../pages/test/test.component";
import { SharedModule } from "../shared/shared.module";
import { CoreModule } from "../core/core.module";
import { FormPageComponent } from "../pages/form-page/form-page.component";

@NgModule({
    declarations: [
        ProductsComponent,
        AboutComponent,
        TestComponent,
        FormPageComponent,
    ],
    exports: [
        ProductsComponent,
        AboutComponent,
        TestComponent,
        FormPageComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ComponentsModule,
        PipesModule,
        DirectivesModule,
        ReactiveFormsModule,
        SharedModule,
        CoreModule,
    ],
})
export class PagesModule {}
