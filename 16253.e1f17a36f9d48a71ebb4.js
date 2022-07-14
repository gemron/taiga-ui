"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[16253],{16253:n=>{n.exports='export default "@height-cell-large: 5rem;\\n\\n.tui-table {\\n    width: 100%;\\n\\n    &_layout_fixed {\\n        table-layout: fixed;\\n    }\\n\\n    &__tr {\\n        .transition(background);\\n        outline: none;\\n\\n        &:not(&_hover_disabled):hover {\\n            background: var(--tui-base-02);\\n        }\\n\\n        &:not(&_border_none) {\\n            border-bottom: 1px solid var(--tui-base-03);\\n        }\\n\\n        &_border_top {\\n            border-top: 1px solid var(--tui-base-03);\\n        }\\n\\n        &_cursor_pointer {\\n            cursor: pointer;\\n        }\\n    }\\n\\n    &__th {\\n        .text-overflow();\\n        font: var(--tui-font-text-s);\\n        padding: 0.5rem 1rem;\\n        vertical-align: middle;\\n        height: 2.5rem;\\n        color: var(--tui-text-02);\\n\\n        &_font-size_l,\\n        .tui-table_font-size_l & {\\n            font: var(--tui-font-text-m);\\n        }\\n    }\\n\\n    &__td {\\n        font: var(--tui-font-text-m);\\n        padding: 1rem 1rem 0.875rem;\\n        vertical-align: top;\\n        word-wrap: break-word;\\n        height: 3.4375rem;\\n        color: var(--tui-text-01);\\n\\n        &_size_l,\\n        .tui-table_size_l & {\\n            height: @height-cell-large - 0.0625rem;\\n        }\\n\\n        &_font-size_l,\\n        .tui-table_font-size_l & {\\n            font: var(--tui-font-text-l);\\n        }\\n\\n        &_font-size_s,\\n        .tui-table_font-size_s & {\\n            font: var(--tui-font-text-s);\\n        }\\n\\n        &_align_center {\\n            vertical-align: middle;\\n        }\\n    }\\n\\n    &__td,\\n    &__th {\\n        box-sizing: border-box;\\n        text-align: left;\\n\\n        &_first {\\n            padding-left: 0;\\n        }\\n\\n        &_last {\\n            padding-right: 0;\\n        }\\n\\n        &_text_center {\\n            text-align: center;\\n        }\\n\\n        &_text_right {\\n            text-align: right;\\n        }\\n\\n        &_text_overflow {\\n            .text-overflow();\\n        }\\n    }\\n\\n    &__subtext {\\n        font: var(--tui-font-text-s);\\n        margin: @space 0 0 0;\\n        color: var(--tui-text-03);\\n    }\\n\\n    &__sort {\\n        .clearbtn();\\n        .transition(color);\\n        position: relative;\\n        display: inline-flex;\\n        align-items: center;\\n        outline: none;\\n        cursor: pointer;\\n\\n        &:hover {\\n            color: var(--tui-text-01);\\n        }\\n\\n        &_active {\\n            color: var(--tui-link);\\n\\n            &:hover {\\n                color: var(--tui-link-hover);\\n            }\\n        }\\n    }\\n\\n    &__sort-icon {\\n        .center-top();\\n        left: 100%;\\n        margin-left: (@space / 2);\\n        width: 1rem;\\n        height: 1rem;\\n        flex-shrink: 0;\\n        opacity: 0;\\n\\n        .tui-table__sort_active &,\\n        .tui-table__sort:hover & {\\n            .transition(transform);\\n            opacity: 1;\\n        }\\n\\n        .tui-table__sort_active.tui-table__sort_up & {\\n            transform: rotate(180deg) translateY(50%);\\n        }\\n    }\\n}\\n";'}}]);