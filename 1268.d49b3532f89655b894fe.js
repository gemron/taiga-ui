(window.webpackJsonp=window.webpackJsonp||[]).push([[1268],{F2Hd:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiKeySteps} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-slider-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSliderExample2 {\n    readonly testValue = new FormControl();\n\n    keySteps: TuiKeySteps = [\n        [(100 / 3) * 1, 100000],\n        [(100 / 3) * (1 + 1), 300000],\n    ];\n}\n"}}]);