"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[41988],{41988:(i,n,s)=>{s.r(n),s.d(n,{default:()=>t});const t='<button\n    tuiButton\n    appearance="outline"\n    size="xs"\n    class="switch"\n    (click)="isOpen = !isOpen"\n>\n    {{ isOpen ? \'ON\' : \'OFF\' }}\n</button>\n\n<div\n    *ngIf="isOpen"\n    class="plasma"\n    [@tuiWidthCollapse]="getAnimation(speed)"\n></div>\n'}}]);