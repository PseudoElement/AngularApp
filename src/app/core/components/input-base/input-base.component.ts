import { Component, Input } from "@angular/core";
import { InputBaseDirective } from "../../directives/input-base.directive";

@Component({
    selector: "app-input-base",
    templateUrl: "./input-base.component.html",
    styleUrls: ["./input-base.component.scss"],
})
export class InputBaseComponent extends InputBaseDirective {
    constructor() {
        super();
    }
}
