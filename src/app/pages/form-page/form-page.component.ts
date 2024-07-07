import { FormBuilderService } from 'src/app/core/services/form-builder.service';
import { FIRST_FORM_INPUTS } from './consts/inputs-data';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { AppUtils } from 'src/app/utils/utils';

function callFunc(cb: (...args: unknown[]) => any) {
    cb();
}

@Component({
    selector: 'app-form',
    templateUrl: './form-page.component.html',
    styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent implements OnInit, OnDestroy {
    public FIRST_FORM_INPUTS: any = FIRST_FORM_INPUTS;
    public firstForm: FormGroup;
    public isSubmittedFirstForm: boolean = false;
    private _isDestroyed$: Subject<any> = new Subject();
    private _value1 = 'Sintol successfull!';
    private _value2 = 'Borrow successfull!';

    constructor(private _formBuilderSrv: FormBuilderService) {}

    async ngOnInit(): Promise<void> {
        this.firstForm = this._formBuilderSrv.createFormGroup(this.FIRST_FORM_INPUTS);

        // const cb1 = this.log.bind(this, this._value1);
        // const cb2 = this.log.bind(this, this._value2);

        // callFunc(cb1);
        // callFunc(cb2);

        const promises = this.getPromises().map((promise, i) => AppUtils.handleTimeout(promise, 4501, `Promise ${i + 1} failed!`));
        const res = await Promise.allSettled(promises);
        console.log('All_settled response - ', res);
    }
    send() {
        // this.isSubmittedFirstForm = true;
        // if (this.firstForm.invalid) {
        //     return alert('Invalid data')
        // }
        // this.isSubmittedFirstForm = false
        console.log(this.firstForm.getRawValue());
    }
    ngOnDestroy(): void {
        this._isDestroyed$.next(true);
    }

    public log(value: string): string {
        return value;
    }

    private getBoundFunc(value: string): () => string {
        return this.log.bind(this, value);
    }

    private getPromises(): Promise<string>[] {
        return [AppUtils.wait(4_500, this.getBoundFunc(this._value1)), AppUtils.wait(2_000, this.getBoundFunc(this._value2))];
    }
}
