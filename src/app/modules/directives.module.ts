import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusDirective } from '../directives/focus.directive';
import { NgLetDirective } from '../directives/ng-let.directive';
import { HighlighterDirective } from '../directives/highlighter.directive';

@NgModule({
    declarations: [FocusDirective, NgLetDirective, HighlighterDirective],
    exports: [FocusDirective, NgLetDirective, HighlighterDirective],
    imports: [CommonModule],
})
export class DirectivesModule {}
