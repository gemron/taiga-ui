(window.webpackJsonp=window.webpackJsonp||[]).push([[631],{jVg3:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-expand-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiExpandExample1 {\n    expanded = false;\n\n    toggle(): void {\n        this.expanded = !this.expanded;\n    }\n}\n"}}]);