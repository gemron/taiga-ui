(window.webpackJsonp=window.webpackJsonp||[]).push([[666],{HNdQ:function(n,o,e){"use strict";e.r(o),o.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-group-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiGroupExample3 {\n    testForm = new FormGroup({\n        testValue: new FormControl('orange'),\n    });\n}\n"}}]);