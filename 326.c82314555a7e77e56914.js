(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{"9M0k":function(n,e,t){"use strict";t.r(e),e.default='<div class="wrapper">\n    <tui-ring-chart\n        [value]="value"\n        [content]="content"\n        [(activeItemIndex)]="activeItemIndex"\n    ></tui-ring-chart>\n\n    <ng-template #content>\n        <tui-money\n            [singleColor]="true"\n            [value]="sum"\n        ></tui-money>\n        <div>Total</div>\n    </ng-template>\n\n    <div class="legend">\n        <tui-legend-item\n            *ngFor="let label of labels; let index = index"\n            size="s"\n            class="item"\n            [color]="getColor(index)"\n            [text]="label"\n            [active]="isItemActive(index)"\n            (tuiHoveredChange)="onHover(index, $event)"\n        >\n            <tui-money\n                [singleColor]="true"\n                [value]="value[index]"\n            ></tui-money>\n        </tui-legend-item>\n    </div>\n</div>\n'}}]);