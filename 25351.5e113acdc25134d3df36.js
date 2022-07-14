"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[25351],{25351:n=>{n.exports='export default "@thumb-diameters: {\\n    @s: 0.5rem;\\n    @m: 1rem;\\n};\\n\\n.tui-slider-ticks-labels(@input-size: m) {\\n    @first-tick-center: (@thumb-diameters[ @@input-size] / 2);\\n    display: flex;\\n    margin: 0 @first-tick-center;\\n    font: var(--tui-font-text-s);\\n\\n    & > * {\\n        position: relative;\\n        flex: 2;\\n        text-align: center;\\n\\n        &:first-child {\\n            left: -@first-tick-center;\\n            flex: 1;\\n            text-align: left;\\n        }\\n\\n        &:last-child {\\n            right: -@first-tick-center;\\n            flex: 1;\\n            text-align: right;\\n        }\\n    }\\n\\n    tui-input-slider + & {\\n        margin-left: calc(var(--tui-radius-m) / 2 + @first-tick-center);\\n    }\\n\\n    tui-input-range + &,\\n    tui-range + & {\\n        @thumb: @thumb-diameters[ @@input-size];\\n        margin-left: @thumb;\\n        margin-right: @thumb;\\n\\n        & > * {\\n            &:first-child {\\n                left: -@thumb;\\n            }\\n\\n            &:last-child {\\n                right: -@thumb;\\n            }\\n        }\\n    }\\n}\\n";'}}]);