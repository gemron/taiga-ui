import {
    ChangeDetectionStrategy,
    Component,
    forwardRef,
    Inject,
    Input,
} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {TUI_DATA_LIST_ACCESSOR} from '@taiga-ui/core';
import {TUI_ITEMS_HANDLERS, TuiItemsHandlers} from '@taiga-ui/kit/tokens';

import {AbstractTuiDataListWrapper} from './data-list-wrapper';

@Component({
    selector: 'tui-data-list-wrapper[labels]',
    templateUrl: './data-list-group-wrapper.template.html',
    styleUrls: ['./data-list-wrapper.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_DATA_LIST_ACCESSOR,
            useExisting: forwardRef(() => TuiDataListGroupWrapperComponent),
        },
    ],
})
export class TuiDataListGroupWrapperComponent<T> extends AbstractTuiDataListWrapper<T> {
    @Input()
    @tuiDefaultProp()
    items: readonly T[][] | null = [];

    @Input()
    @tuiDefaultProp()
    labels: readonly string[] = [];

    constructor(@Inject(TUI_ITEMS_HANDLERS) itemsHandlers: TuiItemsHandlers<T>) {
        super(itemsHandlers);
    }
}
