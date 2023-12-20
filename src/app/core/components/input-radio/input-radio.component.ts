import { Component, OnInit } from '@angular/core';
import { IInputRadio, IRadio } from '../../model';
import { InputBaseDirective } from '../../directives/input-base.directive';

@Component({
    selector: 'app-input-radio',
    templateUrl: './input-radio.component.html',
    styleUrls: ['./input-radio.component.scss'],
})
export class InputRadioComponent extends InputBaseDirective implements OnInit {
    public get inputRadio(): IInputRadio {
        return this.input as IInputRadio;
    }
    public get options(): IRadio[] {
        return this.inputRadio.radioBtns;
    }

    override ngOnInit(): void {
        const value = this.options.find((radio) => radio.isChecked)?.value;
        this.control.setValue(value ?? '');
        this.control.disable();
    }

    private _setDisabledInputs() {}
}
