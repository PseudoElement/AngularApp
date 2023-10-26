import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lazy2ComponentComponent } from './lazy2-component/lazy2-component.component';

const routes: Routes = [
    {
        path: '',
        component: Lazy2ComponentComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Lazy2RoutingModule {}
