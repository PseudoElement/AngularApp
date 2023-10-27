import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { TestComponent } from './pages/test/test.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { RandomBooleanResolver } from './core/resolvers/random-boolean.resolver';

const routes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: 'form-page', pathMatch: 'full' },
    { path: 'test', component: TestComponent },
    { path: 'form-page', component: FormPageComponent },
    {
        path: 'lazy-1',
        loadChildren: () => import('./modules/lazy-1/lazy-1.module').then((m) => m.Lazy1Module),
    },
    {
        path: 'lazy-2',
        loadChildren: () => import('./modules/lazy-2/lazy-2.module').then((m) => m.Lazy2Module),
        resolve: { random: RandomBooleanResolver },
    },
    { path: '**', redirectTo: 'products' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
