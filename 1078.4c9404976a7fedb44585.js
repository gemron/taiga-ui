(window.webpackJsonp=window.webpackJsonp||[]).push([[1078],{KXXo:function(n,t,e){"use strict";e.r(t),t.default='<button\n    tuiButton\n    size="m"\n    type="button"\n    class="tui-space_bottom-4"\n    (click)="show()"\n>\n    Show preview\n</button>\n\n<ng-template\n    #preview\n    let-preview\n>\n    <tui-preview\n        [rotatable]="!(contentUnavailable$ | async)"\n        [zoomable]="!(contentUnavailable$ | async) && !(loading$ | async)"\n    >\n        <tui-preview-title>{{title$ | async}}</tui-preview-title>\n        <tui-preview-pagination\n            [length]="items.length"\n            [index]="index$$.value"\n            (indexChange)="index$$.next($event)"\n        ></tui-preview-pagination>\n\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            icon="tuiIconDownload"\n            title="Download"\n            (click)="download()"\n        ></button>\n\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            icon="tuiIconCloseLarge"\n            title="Close"\n            (click)="preview.complete()"\n        ></button>\n\n        <ng-container *ngIf="contentUnavailable$ | async">\n            <div class="t-container">\n                <tui-svg\n                    src="tuiIconFileLarge"\n                    class="t-icon"\n                ></tui-svg>\n                <div>Preview unavailable</div>\n            </div>\n        </ng-container>\n\n        <img\n            *ngIf="imageSrc$ | async as src"\n            width="512"\n            height="512"\n            [src]="src"\n        />\n\n        <tui-loader\n            *ngIf="loading$ | async"\n            size="xl"\n            class="t-loader"\n        ></tui-loader>\n    </tui-preview>\n</ng-template>\n'}}]);