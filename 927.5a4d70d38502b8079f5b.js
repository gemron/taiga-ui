"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[927],{927:(o,n,e)=>{e.r(n),e.d(n,{default:()=>t});const t="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_NUMBER_FORMAT} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-input-number-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_NUMBER_FORMAT,\n            useValue: {decimalSeparator: '.', thousandSeparator: ','},\n        },\n    ],\n})\nexport class TuiInputNumberExample4 {\n    value = 1234.56;\n}\n"}}]);