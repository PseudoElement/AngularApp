import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { ProductsComponent } from "./pages/products/products.component";

const routes: Routes = [
     { path: "products", component: ProductsComponent },
     { path: "about", component: AboutComponent },
     { path: "home", redirectTo: "products", pathMatch: "prefix" },
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule],
})
export class AppRoutingModule {}
