"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[31289],{31289:(t,n,l)=>{l.r(n),l.d(n,{default:()=>e});const e='<input\n    tuiSlider\n    type="range"\n    size="m"\n    [max]="1000"\n    [step]="250"\n    [segments]="4"\n    [formControl]="formControl"\n/>\n\n<div class="ticks-labels">\n    <button\n        *ngFor="let label of labels"\n        class="tick-label"\n        (click)="patchValue(label)"\n    >\n        ${{ label }}\n    </button>\n</div>\n\n<p>\n    Control value:\n    <code>{{ formControl.value }}</code>\n</p>\n'}}]);