(window.webpackJsonp=window.webpackJsonp||[]).push([[1441],{"6in4":function(n,t,e){"use strict";e.r(t),t.default='import {Component} from \'@angular/core\';\nimport {changeDetection} from \'@demo/emulate/change-detection\';\nimport {tuiPure} from \'@taiga-ui/cdk\';\n\n@Component({\n    selector: \'example-tui-pure-function\',\n    template: `\n        <tui-input [(ngModel)]="text">Type a text to start computing</tui-input>\n        <div class="tui-space_top-2">Called times: {{ counter.count }}</div>\n        <div\n            *ngIf="show"\n            class="tui-space_top-2"\n        >\n            Result: {{ calculate(counter, text) | json }}\n        </div>\n        <button\n            tuiButton\n            type="button"\n            class="tui-space_top-2"\n            (click)="show = !show"\n        >\n            Show/hide\n        </button>\n    `,\n    changeDetection,\n})\nexport class ExampleTuiPureFunctionComponent {\n    text = \'\';\n\n    show = false;\n\n    counter = {\n        count: 0,\n    };\n\n    @tuiPure\n    calculate(counter: {count: number}, text: string): {text: string} {\n        counter.count++;\n\n        return {\n            text,\n        };\n    }\n}\n'}}]);