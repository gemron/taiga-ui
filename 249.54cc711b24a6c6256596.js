(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{lAFX:function(n,r,a){"use strict";a.r(r),r.default="@import '../../taiga-ui-local';\n\n/* stylelint-disable order/order */\n[tuiWrapper][data-appearance='textfield'] {\n    .transition(~'box-shadow, background');\n    background: var(--tui-base-01);\n    color: var(--tui-text-01);\n    box-shadow: 0 0.125rem 0.1875rem rgba(0, 0, 0, 0.1);\n\n    &[data-appearance='textfield']:after {\n        .transition(color);\n        color: var(--tui-base-03);\n    }\n\n    .wrapper-hover({\n        box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.16);\n    });\n\n    .wrapper-focus({\n        box-shadow: none;\n\n        --tui-focus: var(--tui-primary);\n    });\n\n    .wrapper-readonly({\n        box-shadow: none;\n\n        &:after {\n            color: var(--tui-base-04);\n        }\n    });\n\n    .wrapper-disabled({\n        box-shadow: none;\n    });\n\n    .wrapper-invalid({\n        --tui-focus: var(--tui-error-fill-night);\n    });\n}\n\n[tuiWrapper][data-appearance='textfield'][data-mode='onDark'] {\n    background: var(--tui-clear-inverse);\n    color: var(--tui-text-01-night);\n\n    &:after {\n        color: var(--tui-text-03-night);\n        opacity: var(--tui-disabled-opacity);\n    }\n\n    .wrapper-hover({\n        background: var(--tui-clear-inverse-hover);\n    });\n\n    .wrapper-readonly({\n        background: transparent;\n    });\n\n    .wrapper-focus({\n        background: rgba(255, 255, 255, 0.08);\n\n        --tui-focus: var(--tui-primary);\n\n        &:after {\n            transition: none;\n            opacity: 1;\n        }\n    });\n\n    .wrapper-invalid({\n        --tui-focus: var(--tui-error-fill-night);\n    });\n}\n\n[tuiWrapper][data-appearance='textfield'][data-mode='onLight'] {\n    background: var(--tui-clear);\n\n    .wrapper-hover({\n        background: var(--tui-clear-hover);\n    });\n\n    .wrapper-readonly({\n        background: transparent;\n    });\n\n    .wrapper-invalid({\n        &:after {\n            color: var(--tui-error-fill);\n        }\n    });\n\n    .wrapper-focus({\n        background: transparent;\n\n        --tui-focus: var(--tui-text-01);\n    });\n}\n"}}]);