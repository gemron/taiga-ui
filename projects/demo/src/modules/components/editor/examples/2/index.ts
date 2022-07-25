import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';

export async function importStarterKit(): Promise<unknown> {
    return (await import('@tiptap/starter-kit')).default;
}

export async function importEmojiExtension(): Promise<unknown> {
    return (await import('./smiles-tool/emoji.extension')).EmojiExtension;
}

@Component({
    selector: 'tui-editor-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [importStarterKit(), importEmojiExtension()],
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorExample2 {
    readonly builtInTools = [TuiEditorTool.Undo];
    readonly control = new FormControl('', Validators.required);
}
