import { NgModule } from '@angular/core';
import { SintolLibDynamicComponentService } from './services/dynamic-component.service';
import { SintolLibModalComponent } from './components/modal/modal.component';

@NgModule({
    declarations: [SintolLibModalComponent],
    exports: [SintolLibModalComponent],
    providers: [SintolLibDynamicComponentService],
})
export class DynamicRenderingModule {}
