import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
} from "@angular/core";
import { InputBaseDirective } from "../../directives/input-base.directive";
import { ICheckbox, IInputCheckBoxConfig } from "../../model";
import { FormGroup } from "@angular/forms";

@Component({
    selector: "app-input-checkbox",
    templateUrl: "./input-checkbox.component.html",
    styleUrls: ["./input-checkbox.component.scss"],
})
export class InputCheckboxComponent implements OnInit {
    @Input() form: FormGroup;
    @Input() config!: IInputCheckBoxConfig;
    @Output() onCheckChange: EventEmitter<string[]> = new EventEmitter();
    @ViewChild("inputBaseDir") inputBaseDir: InputBaseDirective;
    options: ICheckbox[];
    constructor() {}
    ngOnInit(): void {
        this.options = this.config.checkboxes;
    }
    setCheckOnCheckbox(id: number) {
        const checked = this.config.checkboxes.find(
            (checkbox) => checkbox.id === id
        )!;
        checked.isChecked = !checked?.isChecked;
        const checkedOptions = this._findAllCheckedOptions();
        this.onCheckChange.emit(checkedOptions);
    }
    private _findAllCheckedOptions() {
        return this.options
            .filter((opt) => opt.isChecked)
            .map((opt) => opt.value);
    }
}
