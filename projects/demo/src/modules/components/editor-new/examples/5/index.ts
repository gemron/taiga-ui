import {Component, Injector, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    tiptapEditorStyles,
    TUI_EDITOR_EXTENSIONS,
    TUI_EDITOR_GROUP_OPTIONS,
    TUI_EDITOR_STYLES,
    TuiEditorTool,
} from '@taiga-ui/addon-editor';
import {TuiDestroyService} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-editor-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [
        TuiDestroyService,
        {
            provide: TUI_EDITOR_STYLES,
            useValue: tiptapEditorStyles,
        },
        {
            provide: TUI_EDITOR_GROUP_OPTIONS,
            useValue: {draggable: false},
        },
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import('@tiptap/starter-kit').then(({default: module}) => module),
                import('@taiga-ui/addon-editor/extensions/group').then(
                    ({createGroupExtension}) => createGroupExtension(injector),
                ),
            ],
        },
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class TuiEditorNewExample5 {
    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Group];

    control = new FormControl('');

    constructor() {
        this.control.patchValue(`
            <p>This is a boring paragraph.</p>

            <div data-type="group">
              <p>And another paragraph.</p>
              <div data-type="group">
                <p>And a nested paragraph.</p>
                <div data-type="group">
                  <p>But can we go deeper?</p>
                </div>
              </div>
            </div>

            <p>Let’s finish with a boring paragraph.</p>
        `);
    }
}
