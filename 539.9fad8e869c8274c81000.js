(window.webpackJsonp=window.webpackJsonp||[]).push([[539],{"/g5d":function(n,e,a){"use strict";a.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\n\n@Component({\n    selector: 'tui-combo-box-example-4',\n    templateUrl: './index.html',\n    changeDetection,\n})\nexport class TuiComboBoxExample4 {\n    value = null;\n\n    readonly items = [\n        {name: 'John', surname: 'Cleese'},\n        {name: 'Eric', surname: 'Idle'},\n        {name: 'Graham', surname: 'Chapman'},\n        {name: 'Michael', surname: 'Palin'},\n        {name: 'Terry', surname: 'Gilliam'},\n        {name: 'Terry', surname: 'Jones'},\n    ];\n\n    readonly stringify = (item: {name: string; surname: string}): string =>\n        `${item.name} ${item.surname}`;\n}\n"}}]);