import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { IInputSelect, IOption } from "../../model";
import { InputBaseDirective } from "../../directives/input-base.directive";
import { OpenDropdownType } from "../../consts/inputs.const";

@Component({
    selector: "app-input-select",
    templateUrl: "./input-select.component.html",
    styleUrls: ["./input-select.component.scss"],
})
export class InputSelectComponent extends InputBaseDirective implements OnInit {

    @Input() openDropdownType: OpenDropdownType = 'click';
    public isOpenDropdown: boolean = false;

    public get inputSelect(): IInputSelect {
        return this.input as IInputSelect;
    }
    override ngOnInit(): void {
        if (this.inputSelect.selectedOption?.value) {
            this.selectOption(this.inputSelect.selectedOption);
        }
    }


    public selectOption(option: IOption) {
        this.control.setValue(option.value);
        this.inputSelect.selectedOption = option;
    }
    public toggleDropdown(isOpen: boolean) {
        this.isOpenDropdown = isOpen;
    }
}
