"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[62996],{62996:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_ARROW} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-button-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiButtonExample3 {\n    readonly arrow = TUI_ARROW;\n\n    open = false;\n\n    onClick(): void {\n        this.open = !this.open;\n    }\n}\n"}}]);