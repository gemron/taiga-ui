"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[94313],{94313:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});const o='<div\n    tuiMode="onDark"\n    class="wrapper"\n>\n    <h1 class="tui-text_h3 title">Monty Python</h1>\n    <tui-tabs-with-more\n        class="tabs"\n        [activeItemIndex]="activeItemIndex"\n        [moreContent]="more"\n    >\n        <ng-container *ngFor="let tab of tabs">\n            <ng-container *ngIf="isString(tab); else submenu">\n                <button\n                    *tuiItem\n                    tuiTab\n                    (click)="onClick(tab)"\n                >\n                    {{ tab }}\n                </button>\n            </ng-container>\n            <ng-template #submenu>\n                <tui-hosted-dropdown\n                    *tuiItem\n                    [content]="dropdown"\n                    [(open)]="open"\n                >\n                    <button\n                        tuiTab\n                        (tui-tab-activate)="stop($event)"\n                    >\n                        Collaborators\n                        <tui-svg\n                            src="tuiIconChevronDown"\n                            class="icon"\n                            [class.icon_rotated]="open"\n                        ></tui-svg>\n                    </button>\n                </tui-hosted-dropdown>\n            </ng-template>\n        </ng-container>\n    </tui-tabs-with-more>\n</div>\n<section class="content">Currently active: {{ activeElement }}</section>\n<ng-template #dropdown>\n    <tui-data-list>\n        <button\n            *ngFor="let collaborator of collaborators"\n            tuiOption\n            (click)="onClick(collaborator)"\n        >\n            {{ collaborator }}\n        </button>\n    </tui-data-list>\n</ng-template>\n<ng-template #more>\n    <tui-svg src="tuiIconMoreHorLarge"></tui-svg>\n</ng-template>\n'}}]);