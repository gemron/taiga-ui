"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[78144],{78144:(a,n,e)=>{e.r(n),e.d(n,{default:()=>t});const t="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {flatLength} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-miscellaneous-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMiscellaneousExample2 {\n    get flatted(): number {\n        return flatLength([\n            [1, 2],\n            [3, 4],\n            [5, 6],\n        ]);\n    }\n}\n"}}]);