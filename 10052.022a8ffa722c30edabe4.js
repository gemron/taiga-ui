"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[10052],{10052:(t,n,o)=>{o.r(n),o.d(n,{default:()=>e});const e="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-input-example-6',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputExample6 {\n    readonly items = ['Black', 'Gold', 'Silver'];\n    readonly form = new FormGroup({\n        name: new FormControl('', Validators.required),\n        date: new FormControl(null, Validators.required),\n        color: new FormControl(null, Validators.required),\n        quantity: new FormControl(),\n        sum: new FormControl(255),\n    });\n}\n"}}]);