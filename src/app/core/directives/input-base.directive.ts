import { Directive, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
    FormControl,
    FormGroup,
    ValidatorFn,
    Validators,
} from "@angular/forms";
import { IInput } from "../model/input-base.model";

@Directive({
    selector: "[appInputBase]",
    exportAs: "appInputBase",
})
export class InputBaseDirective implements OnInit {
    // @Output("appInputBase") directive = this;
    @Input() form: FormGroup;
    @Input() config: IInput;
    @Output() onFocusChange: EventEmitter<Event> = new EventEmitter();
    @Output() onBlurChange: EventEmitter<Event> = new EventEmitter();
    public control: FormControl;
    constructor() {}

    ngOnInit(): void {
        this._addControlToForm();
    }

    public onFocus(e: Event) {
        this.onFocusChange.emit(e);
    }
    public onBlur(e: Event) {
        this.onBlurChange.emit(e);
    }

    private _addControlToForm() {
        this.control.setValue(this.config.value);
        this._addValidators();
        this.form.addControl(this.config.name, this.control, {
            emitEvent: true,
        });
    }
    private _addValidators() {
        const validators: ValidatorFn[] = [];
        Object.keys(this.config.validators).forEach((key) => {
            if (!key) return;
            //@ts-ignore
            const value = this.config.validators[key] ?? null;
            if (key === "required" && value)
                validators.push(Validators.required);
            else if (key === "email") validators.push(Validators.email);
            else if (
                key === "min" ||
                key === "max" ||
                key === "maxLength" ||
                key === "minLength" ||
                key === "pattern"
            )
                validators.push(Validators[key](value));
        });
        this.control.addValidators(validators);
    }
}
