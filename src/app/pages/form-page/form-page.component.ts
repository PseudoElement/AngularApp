import { FormBuilderService } from "src/app/core/services/form-builder.service";
import { FIRST_FORM_INPUTS } from "./consts/inputs-data";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";
import { IInput, IInputSelect, IInputText } from "src/app/core/model";
import { I_FIRST_FORM_INPUTS } from "./model/interfaces";

@Component({
    selector: "app-form",
    templateUrl: "./form-page.component.html",
    styleUrls: ["./form-page.component.scss"],
})
export class FormPageComponent implements OnInit, OnDestroy {
    public FIRST_FORM_INPUTS: any = FIRST_FORM_INPUTS;
    public firstForm: FormGroup;
    private _isDestroyed$: Subject<any> = new Subject();

    constructor(private _formBuilderSrv: FormBuilderService) {}

    ngOnInit(): void {
        this.firstForm = this._formBuilderSrv.createFormGroup(
            this.FIRST_FORM_INPUTS
        );
        this.firstForm.valueChanges
            .pipe(takeUntil(this._isDestroyed$))
            .subscribe((v) => {
                console.log(this.firstForm.controls);
            });
    }
    ngOnDestroy(): void {
        this._isDestroyed$.next(true);
    }
}
