(window.webpackJsonp=window.webpackJsonp||[]).push([[682],{"6pC6":function(n,t,o){"use strict";o.r(t),t.default='```html\n<tui-hosted-dropdown\n  [content]="dropdown"\n  [(open)]="open"\n>\n  <button\n    tuiButton\n    type="button"\n  >\n    Open menu\n  </button>\n</tui-hosted-dropdown>\n<ng-template #dropdown>\n  <tui-data-list>\n    <button\n      *ngFor="let item of items"\n      tuiOption\n      (click)="onClick()"\n    >\n      {{item}}\n    </button>\n  </tui-data-list>\n</ng-template>\n```\n'}}]);