(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{m4yM:function(n,e,a){"use strict";a.r(e),e.default="@space-small: 0.5rem;\n@space-normal: 1.25rem;\n@space-large: 1.5rem;\n\n/* stylelint-disable order/order */\n.generate-columns(@infix, @n, @padding, @i: 1) when (@i =< @n) {\n    &_@{infix}-@{i} {\n        width: (@i * 100% / @n);\n        padding-left: @padding;\n        padding-right: @padding;\n        box-sizing: border-box;\n    }\n\n    .generate-columns(@infix, @n, @padding, (@i + 1));\n}\n\n.generate-offset-columns(@infix, @n, @i: 1) when (@i =< @n) {\n    &_@{infix}-@{i} {\n        margin-left: (@i * 100% / @n);\n    }\n\n    .generate-offset-columns(@infix, @n, (@i + 1));\n}\n\n.generate-sme-columns(@n, @padding, @i: 1) when (@i =< @n) {\n    &_@{i} {\n        width: (@i * 100% / @n);\n        padding-left: @padding;\n        padding-right: @padding;\n        box-sizing: border-box;\n    }\n\n    .generate-sme-columns(@n, @padding, (@i + 1));\n}\n\n.generate-sme-offset-columns(@n, @i: 1) when (@i =< @n) {\n    &_@{i} {\n        margin-left: (@i * 100% / @n);\n    }\n\n    .generate-sme-offset-columns(@n, (@i + 1));\n}\n/* stylelint-enable order/order */\n\n.tui-row {\n    display: flex;\n    flex-wrap: wrap;\n\n    &_align_center {\n        align-items: center;\n    }\n\n    &_align_start {\n        align-items: flex-start;\n    }\n\n    &_align_end {\n        align-items: flex-end;\n    }\n\n    &_adaptive.tui-row {\n        @media @desktop-m-min {\n            margin-left: -@space-large;\n            margin-right: -@space-large;\n        }\n\n        @media @desktop-s {\n            margin-left: -@space-normal;\n            margin-right: -@space-normal;\n        }\n\n        @media @mobile-m {\n            margin-left: -@space-small;\n            margin-right: -@space-small;\n        }\n    }\n\n    &_temporary.tui-row {\n        margin-left: -@space-normal;\n        margin-right: -@space-normal;\n    }\n\n    @media @desktop-m-min {\n        margin-left: -@space-large;\n        margin-right: -@space-large;\n    }\n\n    @media @desktop-s {\n        margin-left: -@space-normal;\n        margin-right: -@space-normal;\n    }\n}\n\n.tui-col {\n    .generate-sme-columns(12, @space-normal);\n    .generate-columns(md, 12, @space-normal);\n\n    &_stretch {\n        display: flex;\n    }\n\n    .tui-row_adaptive & {\n        @media @desktop-m-min {\n            .generate-columns(lg, 12, @space-large);\n        }\n\n        @media @desktop-s {\n            .generate-columns(md, 12, @space-normal);\n        }\n\n        @media @mobile-m {\n            .generate-columns(xs, 12, @space-small);\n        }\n    }\n\n    .tui-row_temporary & {\n        .generate-sme-columns(12, @space-normal);\n    }\n\n    @media @desktop-m-min {\n        .generate-sme-columns(12, @space-large);\n    }\n}\n\n.tui-col-offset {\n    .generate-sme-offset-columns(12);\n\n    @media @mobile-m-interval {\n        .generate-offset-columns(xs, 12);\n    }\n\n    @media @desktop-s {\n        .generate-offset-columns(md, 12);\n    }\n\n    @media @desktop-m-min {\n        .generate-offset-columns(lg, 12);\n    }\n}\n"}}]);