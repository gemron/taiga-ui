(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{FLw7:function(n,o,r){"use strict";r.r(o),o.default="```ts\nimport './polyfills';\n\nimport {platformBrowserDynamic} from '@angular/platform-browser-dynamic';\n\nimport {AppModule} from './app/app.module';\n\nplatformBrowserDynamic()\n  .bootstrapModule(AppModule)\n  .then(ref => {\n    // Stackblitz: Ensure Angular destroys itself on hot reloads.\n    if (window['ngRef']) {\n      window['ngRef'].destroy();\n    }\n\n    window['ngRef'] = ref;\n\n    // Otherwise, log the boot error\n  })\n  .catch(err => console.error(err));\n```\n"}}]);