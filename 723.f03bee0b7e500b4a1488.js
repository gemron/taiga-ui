(window.webpackJsonp=window.webpackJsonp||[]).push([[723],{"5mDG":function(n,e,i){"use strict";i.r(e),e.default='<form\n    class="b-form"\n    [formGroup]="testForm"\n    [tuiTextfieldCleaner]="true"\n>\n    <p i18n>\n        If a field is optional, but unfinished field should be marked as invalid, use\n        <code>tuiUnfinishedValidator</code>\n        directive\n    </p>\n    <tui-input-date\n        tuiUnfinishedValidator="Finish filling the field"\n        formControlName="testValue"\n    >\n        Choose a date\n    </tui-input-date>\n    <tui-error\n        formControlName="testValue"\n        [error]="[] | tuiFieldError | async"\n    ></tui-error>\n</form>\n'}}]);