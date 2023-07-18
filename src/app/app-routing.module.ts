import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { ProductsComponent } from "./pages/products/products.component";
import { TestComponent } from "./pages/test/test.component";

const routes: Routes = [
     { path: "products", component: ProductsComponent },
     { path: "about", component: AboutComponent },
     { path: "", redirectTo: "test", pathMatch: "prefix" },
     { path: "test", component: TestComponent },
     { path: "**", redirectTo: "products" },
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule],
})
export class AppRoutingModule {}
