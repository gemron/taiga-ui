(window.webpackJsonp=window.webpackJsonp||[]).push([[1750],{FKyJ:function(e,n,a){"use strict";a.r(n),n.default="```ts\nimport {TuiTableBarsService} from '@taiga-ui/addon-tablebars';\n// ...\nexport class AppComponent {\n  @ViewChild('tableBarTemplate')\n  tableBarTemplate: TemplateRef<Record<string, unknown>>;\n\n  constructor(@Inject(TuiTableBarsService) private readonly tableBarsService: TuiTableBarsService) {\n    // ...\n    this.tableBarsService\n      .showTableBar(this.tableBarTemplate, {\n        mode: 'onLight',\n        hasCloseButton: true,\n      })\n      .subscribe();\n    // ...\n  }\n}\n```\n"}}]);