"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[52608],{52608:(o,n,t)=>{t.r(n),t.d(n,{default:()=>e});const e='<form\n    class="b-form"\n    [formGroup]="testForm"\n>\n    <tui-input-phone formControlName="testValue">\n        Type a phone number\n        <input\n            tuiTextfield\n            autocomplete="tel"\n        />\n    </tui-input-phone>\n    <pre class="tui-space_bottom-3">Form value: {{ testForm.value | json }}</pre>\n</form>\n<button\n    tuiButton\n    type="button"\n    size="m"\n    (click)="setValue()"\n>\n    Set value from outside: +79926775676\n</button>\n'}}]);