(window.webpackJsonp=window.webpackJsonp||[]).push([[1401],{QysH:function(o,n,r){"use strict";r.r(n),n.default="import {CommonModule} from '@angular/common';\nimport {NgModule} from '@angular/core';\nimport {TuiButtonModule} from '@taiga-ui/core';\nimport {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';\n\nimport {PromptComponent} from './prompt.component';\nimport {PROMPT_PROVIDER} from './prompt.service';\n\n@NgModule({\n    imports: [TuiButtonModule, PolymorpheusModule, CommonModule],\n    // Add this provider to app module (it is here for stackblitz demonstration purpose only)\n    providers: [PROMPT_PROVIDER],\n    declarations: [PromptComponent],\n    exports: [PromptComponent],\n    entryComponents: [PromptComponent],\n})\nexport class PromptModule {}\n"}}]);