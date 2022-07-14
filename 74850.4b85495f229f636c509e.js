"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[74850],{74850:(i,e,n)=>{n.r(e),n.d(e,{default:()=>t});const t="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-tabs-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTabsExample3 {\n    activeItemIndex = 0;\n\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly alertService: TuiAlertService,\n    ) {}\n\n    onClick(item: string): void {\n        this.alertService.open(item).subscribe();\n    }\n}\n"}}]);