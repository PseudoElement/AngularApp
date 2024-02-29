import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusDirective } from '../directives/focus.directive';
import { NgLetDirective } from '../directives/ng-let.directive';

@NgModule({
    declarations: [FocusDirective, NgLetDirective],
    exports: [FocusDirective, NgLetDirective],
    imports: [CommonModule],
})
export class DirectivesModule {}
