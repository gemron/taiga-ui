"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[98667],{98667:n=>{n.exports="import {Component} from '@angular/core';\nimport {TUI_SVG_SRC_PROCESSOR} from '@taiga-ui/core';\n\nexport function icons8SourceProcessor(): (src: string) => string {\n    return (src: string) => {\n        const myCustomPrefix = 'icons8::';\n\n        return src.startsWith(myCustomPrefix)\n            ? `assets/icons8/${src.replace(myCustomPrefix, '')}.svg`\n            : src;\n    };\n}\n\n@Component({\n    selector: 'customization-icons-example',\n    templateUrl: './customization-icons.template.html',\n    styleUrls: ['./customization-icons.style.less'],\n    providers: [\n        {\n            provide: TUI_SVG_SRC_PROCESSOR,\n            useFactory: icons8SourceProcessor,\n        },\n    ],\n})\nexport class IconsCustomizationComponent {}\n"}}]);