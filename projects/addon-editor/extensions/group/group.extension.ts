import {Injector} from '@angular/core';
import {TUI_EDITOR_GROUP_OPTIONS} from '@taiga-ui/addon-editor/tokens';
import {tuiDeleteNode, tuiGetSelectedContent} from '@taiga-ui/addon-editor/utils';
import {mergeAttributes, Node, RawCommands} from '@tiptap/core';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        group: {
            setGroup: () => ReturnType;
            removeGroup: () => ReturnType;
        };
    }
}

export const createGroupExtension = (injector: Injector): Node => {
    const {draggable} = injector.get(TUI_EDITOR_GROUP_OPTIONS);

    return Node.create({
        name: 'group',
        draggable,
        group: 'block',
        content: 'block+',

        parseHTML() {
            return [{tag: 'div[data-type="group"]'}];
        },

        renderHTML({HTMLAttributes}) {
            return ['div', mergeAttributes(HTMLAttributes, {'data-type': 'group'}), 0];
        },

        addNodeView() {
            return () => {
                const dom = document.createElement('div');
                const content = document.createElement('div');

                dom.classList.add('tui-group-node');
                content.setAttribute('data-type', 'group');

                if (draggable) {
                    const pointer = document.createElement('div');

                    pointer.classList.add('tui-group-pointer');
                    pointer.innerHTML = '';
                    pointer.contentEditable = 'false';

                    dom.append(pointer, content);
                } else {
                    dom.append(content);
                }

                return {dom, contentDOM: content};
            };
        },

        addCommands(): Partial<RawCommands> {
            return {
                setGroup:
                    () =>
                    ({commands, state}) => {
                        this.editor.chain().focus().run();

                        const content = tuiGetSelectedContent(state, '');
                        const wrapped = content.trim().startsWith('<p>')
                            ? content
                            : `<p>${content}</p>`;
                        const result = `<div data-type="group">${wrapped}</div>`;

                        return commands.insertContent(result);
                    },
                removeGroup:
                    () =>
                    ({state, dispatch}) =>
                        tuiDeleteNode(state, dispatch, this.name),
            };
        },

        addKeyboardShortcuts(): any {
            return {
                Enter: () => {
                    // TODO: make later
                },
            };
        },
    });
};
