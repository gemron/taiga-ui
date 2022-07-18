import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule} from '@taiga-ui/core';

import {TuiEditorGroupToolComponent} from './group.component';

@NgModule({
    imports: [CommonModule, TuiButtonModule],
    declarations: [TuiEditorGroupToolComponent],
    exports: [TuiEditorGroupToolComponent],
})
export class TuiEditorToolGroup {}
