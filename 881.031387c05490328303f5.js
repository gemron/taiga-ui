(window.webpackJsonp=window.webpackJsonp||[]).push([[881],{Q8aA:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTime} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-input-time-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputTimeExample1 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(new TuiTime(12, 30)),\n    });\n}\n"}}]);