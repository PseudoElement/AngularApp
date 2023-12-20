import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lazy2RoutingModule } from './lazy-2-routing.module';
import { Lazy2ComponentComponent } from './lazy2-component/lazy2-component.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
    imports: [CommonModule, Lazy2RoutingModule, SharedModule, PortalModule],
    declarations: [Lazy2ComponentComponent],
})
export class Lazy2Module {}
