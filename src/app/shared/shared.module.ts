import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { BackdropComponent } from './components/backdrop/backdrop.component';
import { SpinNumberComponent } from './components/spin-number/spin-number.component';

@NgModule({
    declarations: [ConfirmComponent, BackdropComponent, SpinNumberComponent],
    imports: [CommonModule],
    exports: [ConfirmComponent, BackdropComponent, SpinNumberComponent],
})
export class SharedModule {}
