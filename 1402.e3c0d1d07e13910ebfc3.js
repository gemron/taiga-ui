(window.webpackJsonp=window.webpackJsonp||[]).push([[1402],{H3w8:function(e,n,t){"use strict";t.r(n),n.default='<tui-tree\n    *ngFor="let item of data.children"\n    [tuiTreeController]="true"\n    [value]="item"\n    [content]="content"\n    [childrenHandler]="handler"\n></tui-tree>\n\n<ng-template\n    #content\n    let-item\n>\n    <tui-checkbox-labeled\n        class="tui-space_vertical-2 tui-space_left-1"\n        [ngModel]="item | tuiMapper: getValue:map"\n        (ngModelChange)="onChecked(item, $event)"\n    >\n        {{ item.text }}\n    </tui-checkbox-labeled>\n</ng-template>\n'}}]);