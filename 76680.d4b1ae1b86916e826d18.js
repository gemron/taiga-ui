"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[76680],{62339:(a,n,e)=>{e.r(n),e.d(n,{default:()=>t});const t='<button\n    tuiButton\n    (click)="toggle()"\n>\n    Show/Hide\n</button>\n<ng-template\n    [tuiSheetOptions]="options"\n    [(tuiSheet)]="open"\n>\n    <h2 tuiSheetHeading>\n        <label\n            tuiLabel\n            label="Monty Python"\n        >\n            And the Holy Grail\n        </label>\n    </h2>\n    <p class="buttons">\n        <button\n            tuiButton\n            size="m"\n            appearance="secondary"\n            class="tui-space_right-2"\n        >\n            Buy\n            <tui-money\n                currency="USD"\n                class="tui-space_left-1"\n                [value]="12.99"\n            ></tui-money>\n        </button>\n        <button\n            tuiButton\n            size="m"\n            appearance="secondary"\n        >\n            Rent\n            <tui-money\n                currency="USD"\n                class="tui-space_left-1"\n                [value]="4.99"\n            ></tui-money>\n        </button>\n    </p>\n    <button\n        tuiButton\n        size="m"\n        class="action"\n    >\n        Add to Watch List\n    </button>\n    <h3 class="cast">Cast:</h3>\n    <p>John Cleese</p>\n    <p>Eric Idle</p>\n    <p>Michael Palin</p>\n    <p>Graham Chapman</p>\n    <p>Terry Gilliam</p>\n    <p>Terry Jones</p>\n    <p>Carol Cleveland</p>\n    <hr />\n    <h3>Directed by:</h3>\n    <p>Terry Gilliam</p>\n    <p>Terry Jones</p>\n    <hr />\n    <h3>Produced by:</h3>\n    <p>Mark Forstater</p>\n    <p>Michael White</p>\n    <hr />\n    <h3>Written by:</h3>\n    <p>John Cleese</p>\n    <p>Eric Idle</p>\n    <p>Michael Palin</p>\n    <p>Graham Chapman</p>\n    <p>Terry Gilliam</p>\n    <p>Terry Jones</p>\n    <hr />\n    <h3>Budget:</h3>\n    <p>\n        <tui-money\n            currency="USD"\n            [value]="400000"\n        ></tui-money>\n    </p>\n    <hr />\n    <h3>Box office:</h3>\n    <p>\n        <tui-money\n            currency="USD"\n            [value]="5000000"\n        ></tui-money>\n    </p>\n    <hr />\n    <h3>Release date</h3>\n    <p>April 3, 1975</p>\n    <hr />\n    <h3>Running time</h3>\n    <p>92 minutes</p>\n    <footer class="footer">\xa9 EMI Films</footer>\n</ng-template>\n'}}]);