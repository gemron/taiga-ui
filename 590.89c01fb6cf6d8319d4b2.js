(window.webpackJsonp=window.webpackJsonp||[]).push([[590],{q5hV:function(n,e,o){"use strict";o.r(e),e.default="```ts\n@NgModule({\n  // ...\n  providers: [\n    {\n      provide: TUI_DIALOGS_CLOSE,\n      deps: [AuthService],\n      useFactory: authService => authService.logout$,\n    },\n  ],\n})\nexport class MyModule {}\n```\n"}}]);