import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'tui-hosted-dropdown-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiHostedDropdownExample4 {
    readonly settingsDropdownOpened$ = new BehaviorSubject(false);

    readonly testForm = new FormGroup({
        option: new FormControl(false),
    });

    open = false;

    index = 0;

    onClick(): void {
        this.open = false;
        this.index = 1;
    }

    handleFiltersDropdownOpenedChange(open: boolean): void {
        this.settingsDropdownOpened$.next(open);
    }
}
