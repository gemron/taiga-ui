(window.webpackJsonp=window.webpackJsonp||[]).push([[1071],{ART1:function(n,e,i){"use strict";i.r(e),e.default="```ts\nexport class MyComponent {\n  constructor(@Inject(TuiPdfViewerService) private readonly pdfService: TuiPdfViewerService) {}\n\n  show(actions: PolymorpheusContent<TuiPdfViewerOptions>) {\n    this.pdfService\n      .open('/assets/taiga.pdf', {\n        label: 'Taiga UI',\n        actions,\n      })\n      .subscribe();\n  }\n}\n```\n"}}]);