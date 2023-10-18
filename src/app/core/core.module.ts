import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputBaseComponent } from "./components/input-base/input-base.component";
import { InputBaseDirective } from "./directives/input-base.directive";
import { InputTextComponent } from "./components/input-text/input-text.component";
import { InputPasswordComponent } from "./components/input-password/input-password.component";
import { InputNumberComponent } from "./components/input-number/input-number.component";
import { InputSelectComponent } from "./components/input-select/input-select.component";
import { InputCheckboxComponent } from "./components/input-checkbox/input-checkbox.component";
import { InputRadioComponent } from "./components/input-radio/input-radio.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ControlErrorComponent } from './components/control-error/control-error.component';

@NgModule({
    declarations: [
        InputBaseComponent,
        InputBaseDirective,
        InputTextComponent,
        InputPasswordComponent,
        InputNumberComponent,
        InputSelectComponent,
        InputCheckboxComponent,
        InputRadioComponent,
        ControlErrorComponent,
    ],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [
        InputBaseComponent,
        InputTextComponent,
        InputPasswordComponent,
        InputNumberComponent,
        InputSelectComponent,
        InputCheckboxComponent,
        InputRadioComponent,
        ControlErrorComponent,
    ],
})
export class CoreModule { }
