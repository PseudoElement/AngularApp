import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConfirmComponent } from "./components/confirm/confirm.component";
import { BackdropComponent } from './components/backdrop/backdrop.component';

@NgModule({
     declarations: [ConfirmComponent, BackdropComponent],
     imports: [CommonModule],
     exports: [ConfirmComponent, BackdropComponent],
})
export class SharedModule {}
