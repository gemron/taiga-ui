(window.webpackJsonp=window.webpackJsonp||[]).push([[1395],{"2IU4":function(n,t,e){"use strict";e.r(t),t.default='<tui-tree\n    [tuiTreeController]="false"\n    [map]="map"\n    [value]="data"\n    [content]="content"\n    [childrenHandler]="handler"\n></tui-tree>\n\n<ng-template\n    #content\n    let-item\n>\n    {{ item.text }}\n</ng-template>\n\n<p>\n    <button\n        tuiButton\n        size="s"\n        class="tui-space_right-2"\n        (click)="toggleTopmost()"\n    >\n        Toggle Topmost\n    </button>\n    <button\n        tuiButton\n        size="s"\n        (click)="toggleLevel()"\n    >\n        Toggle Top level 1\n    </button>\n</p>\n'}}]);