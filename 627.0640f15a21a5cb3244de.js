(window.webpackJsonp=window.webpackJsonp||[]).push([[627],{"/bUP":function(n,e,r){"use strict";r.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiValidationError} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-error-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiErrorExample1 {\n    enabled = false;\n\n    error = new TuiValidationError('An error');\n\n    get computedError(): TuiValidationError | null {\n        return this.enabled ? this.error : null;\n    }\n}\n"}}]);