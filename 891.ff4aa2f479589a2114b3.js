(window.webpackJsonp=window.webpackJsonp||[]).push([[891],{"/NP0":function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-input-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputExample5 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl('mail@mail.ru'),\n    });\n}\n"}}]);