import {InjectionToken} from '@angular/core';

export interface TuiEditorGroupOptions {
    readonly draggable: boolean;
    readonly createOnEnter: boolean;
}

export const TUI_EDITOR_DEFAULT_GROUP_OPTIONS: TuiEditorGroupOptions = {
    draggable: true,
    createOnEnter: false,
};

export const TUI_EDITOR_GROUP_OPTIONS = new InjectionToken<TuiEditorGroupOptions>(
    'Group options',
    {
        factory: () => TUI_EDITOR_DEFAULT_GROUP_OPTIONS,
    },
);
