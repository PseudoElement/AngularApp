import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lazy1ComponentComponent } from './lazy1-component/lazy1-component.component';
import { Lazy1NestedComponent } from './lazy1-nested/lazy1-nested.component';

const routes: Routes = [
    {
        path: '',
        component: Lazy1ComponentComponent,
    },
    {
        path: 'nested',
        component: Lazy1NestedComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Lazy1RoutingModule {}
