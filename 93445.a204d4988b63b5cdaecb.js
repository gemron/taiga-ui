"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[93445],{93445:(l,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i='<tui-select\n    class="b-form"\n    [(ngModel)]="value"\n>\n    Country\n    <cdk-virtual-scroll-viewport\n        *tuiDataList\n        tuiScrollable\n        class="scroll"\n        [itemSize]="44"\n    >\n        <tui-data-list>\n            <button\n                *cdkVirtualFor="let item of countries"\n                tuiOption\n                [value]="item"\n            >\n                {{ item }}\n            </button>\n        </tui-data-list>\n    </cdk-virtual-scroll-viewport>\n</tui-select>\n'}}]);