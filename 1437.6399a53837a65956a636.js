(window.webpackJsonp=window.webpackJsonp||[]).push([[1437],{"s+Pv":function(n,r,e){"use strict";e.r(r),r.default="@import 'taiga-ui-local';\n\ntui-wrapper[data-appearance='material-textfield'] {\n    background: #f5f5f5;\n    color: rgba(0, 0, 0, 0.87);\n    border-radius: 0.25rem 0.25rem 0 0;\n\n    &:after {\n        .transition(all);\n        height: 0.0625rem;\n        background: #8e8e8e;\n        top: auto;\n        border: none;\n        transform-origin: bottom;\n    }\n\n    .wrapper-hover({\n        background: #ececec;\n\n        &:after {\n            background: #1f1f1f;\n        }\n    });\n\n    .wrapper-focus({\n        background: #dcdcdc;\n\n        // TODO: Better internal elements customization\n        label {\n            color: #6200ee !important;\n        }\n\n        &:after {\n            background: #6200ee;\n            transform: scaleY(2);\n        }\n    });\n\n    .wrapper-invalid({\n        // TODO: Better internal elements customization\n        label {\n            color: #b00020 !important;\n        }\n\n        &:after {\n            background: #b00020;\n        }\n    });\n}\n\ntui-wrapper[data-appearance='material-button'] {\n    .transition(all);\n    border-radius: 0.25rem;\n    background: #6200ee;\n    color: #fff;\n    text-transform: uppercase;\n    font-weight: bold;\n    box-shadow: 0 0.1875rem 0.0625rem -0.125rem rgba(0, 0, 0, 0.2), 0rem 0.125rem 0.125rem 0rem rgba(0, 0, 0, 0.14%),\n        0rem 0.0625rem 0.3125rem 0rem rgba(0, 0, 0, 0.12);\n\n    .wrapper-hover({\n        background: #6e14ef;\n        box-shadow: 0 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.2), 0rem 0.25rem 0.3125rem 0rem rgba(0, 0, 0, 0.14),\n        0rem 0.0625rem 0.625rem 0rem rgba(0, 0, 0, 0.12);\n    });\n\n    .wrapper-active({\n        background: #6e14ef;\n        box-shadow: 0 0.3125rem 0.3125rem -0.1875rem rgba(0, 0, 0, 0.2),\n        0rem 0.5rem 0.625rem 0.0625rem rgba(0, 0, 0, 0.14), 0rem 0.1875rem 0.875rem 0.125rem rgba(0, 0, 0, 0.12);\n    });\n\n    .wrapper-focus({\n        background: #883df2;\n\n        &:after {\n            display: none;\n        }\n    });\n}\n\ntui-wrapper[data-appearance='material-checkbox-on'],\ntui-wrapper[data-appearance='material-checkbox-off'] {\n    color: #fff;\n\n    &:before {\n        position: absolute;\n        content: '';\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        border-radius: 0.125rem;\n        border: 2px solid rgba(0, 0, 0, 0.54);\n        transition: all var(--tui-duration);\n    }\n\n    &:after {\n        .transition(opacity);\n        position: absolute;\n        top: -0.5rem;\n        left: -0.5rem;\n        right: -0.5rem;\n        bottom: -0.5rem;\n        border-radius: 100%;\n        background: #000;\n        opacity: 0;\n    }\n\n    .wrapper-hover({\n        &:after {\n            opacity: 0.05;\n        }\n    });\n\n    .wrapper-active({\n        &:after {\n            opacity: 0.1;\n        }\n    });\n\n    .wrapper-focus({\n        &:after {\n            opacity: 0.1;\n        }\n    });\n}\n\ntui-wrapper[data-appearance='material-checkbox-on'] {\n    &:before,\n    &:after {\n        background: #6200ee;\n        border-color: transparent;\n    }\n}\n"}}]);