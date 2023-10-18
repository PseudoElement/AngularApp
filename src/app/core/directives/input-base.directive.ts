import { Directive, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
    FormControl,
    FormGroup,
} from "@angular/forms";
import { IInput } from "../model/input-base.model";

@Directive({
    selector: "[appInputBase]",
    exportAs: "appInputBase",
})
export class InputBaseDirective implements OnInit {
    @Input() form: FormGroup;
    @Input() input: IInput;
    @Input() isSubmitted: boolean = false;
    @Output() onFocusChange: EventEmitter<Event> = new EventEmitter();
    @Output() onBlurChange: EventEmitter<Event> = new EventEmitter();
    public get control(): FormControl {
        return this.form.controls[this.input.name] as FormControl;
    }
    public get isValid(): boolean {
        return this.control.valid;
    }
    public get isTouched(): boolean {
        return this.control.touched;
    }
    public get isDirty(): boolean {
        return this.control.dirty;
    }
    public get error(): string | undefined {
        return Object.keys(this.control.errors || {})[0] ?? undefined;
    }
    constructor() { }

    ngOnInit(): void {
    }

    public onFocus(e: Event) {
        this.onFocusChange.emit(e);
    }
    public onBlur(e: Event) {
        this.onBlurChange.emit(e);
    }

}
