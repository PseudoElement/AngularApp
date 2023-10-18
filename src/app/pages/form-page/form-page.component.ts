import { FormBuilderService } from "src/app/core/services/form-builder.service";
import { FIRST_FORM_INPUTS } from "./consts/inputs-data";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Subject } from "rxjs";

@Component({
    selector: "app-form",
    templateUrl: "./form-page.component.html",
    styleUrls: ["./form-page.component.scss"],
})
export class FormPageComponent implements OnInit, OnDestroy {
    public FIRST_FORM_INPUTS: any = FIRST_FORM_INPUTS;
    public firstForm: FormGroup;
    public isSubmittedFirstForm: boolean = false;
    private _isDestroyed$: Subject<any> = new Subject();

    constructor(private _formBuilderSrv: FormBuilderService) { }

    ngOnInit(): void {
        this.firstForm = this._formBuilderSrv.createFormGroup(
            this.FIRST_FORM_INPUTS
        );
    }
    send() {
        // this.isSubmittedFirstForm = true;
        // if (this.firstForm.invalid) {
        //     return alert('Invalid data')
        // }
        // this.isSubmittedFirstForm = false
        console.log(this.firstForm.controls)
        this.firstForm.disable()
    }
    ngOnDestroy(): void {
        this._isDestroyed$.next(true);
    }
}
