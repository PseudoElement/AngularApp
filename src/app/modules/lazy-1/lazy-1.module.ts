import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Lazy1RoutingModule } from './lazy-1-routing.module';
import { Lazy1ComponentComponent } from './lazy1-component/lazy1-component.component';
import { Lazy1NestedComponent } from './lazy1-nested/lazy1-nested.component';

@NgModule({
    declarations: [Lazy1ComponentComponent, Lazy1NestedComponent],
    imports: [CommonModule, RouterModule, Lazy1RoutingModule],
})
export class Lazy1Module {}
