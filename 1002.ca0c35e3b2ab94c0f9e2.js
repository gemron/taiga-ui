(window.webpackJsonp=window.webpackJsonp||[]).push([[1002],{vLQE:function(t,n,i){"use strict";i.r(n),n.default='<form class="b-form">\n    <tui-multi-select\n        tuiTextfieldSize="s"\n        [formControl]="control"\n        [stringify]="stringify"\n        [identityMatcher]="identityMatcher"\n        [tuiTextfieldCleaner]="true"\n    >\n        Choose your heroes\n        <tui-data-list\n            *tuiDataList\n            tuiMultiSelectGroup\n        >\n            <button\n                *ngFor="let item of items"\n                tuiOption\n                [value]="item"\n            >\n                {{ item.name }}\n            </button>\n        </tui-data-list>\n    </tui-multi-select>\n    <tui-multi-select\n        tuiTextfieldSize="m"\n        class="tui-space_top-2"\n        [editable]="false"\n        [formControl]="control"\n        [stringify]="stringify"\n        [identityMatcher]="identityMatcher"\n        [tuiTextfieldLabelOutside]="true"\n        [tuiTextfieldCleaner]="true"\n    >\n        Choose your heroes\n        <tui-data-list\n            *tuiDataList\n            tuiMultiSelectGroup\n        >\n            <button\n                *ngFor="let item of items"\n                tuiOption\n                [value]="item"\n            >\n                {{ item.name }}\n            </button>\n        </tui-data-list>\n    </tui-multi-select>\n    <tui-multi-select\n        class="tui-space_top-2"\n        [editable]="false"\n        [formControl]="control"\n        [stringify]="stringify"\n        [identityMatcher]="identityMatcher"\n        [tuiTextfieldCleaner]="true"\n    >\n        Choose your heroes\n        <tui-data-list-wrapper\n            *tuiDataList\n            tuiMultiSelectGroup\n            [items]="items"\n            [itemContent]="stringify"\n        ></tui-data-list-wrapper>\n    </tui-multi-select>\n</form>\n'}}]);