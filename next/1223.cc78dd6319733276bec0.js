(window.webpackJsonp=window.webpackJsonp||[]).push([[1223],{nr4r:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-select-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSelectExample1 {\n    items = [\n        'Luke Skywalker',\n        'Leia Organa Solo',\n        'Darth Vader',\n        'Han Solo',\n        'Obi-Wan Kenobi',\n        'Yoda',\n    ];\n\n    testValue = new FormControl();\n}\n"}}]);