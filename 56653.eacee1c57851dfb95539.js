"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[56653],{56653:(M,l,n)=>{n.r(l),n.d(l,{ExampleTokensModule:()=>C});var E=n(12057),o=n(12021),s=n(46244),T=n(37267),F=n(74788),r=n(88331),S=n(37159),m=n(57068),c=n(66989);let d=(()=>{class t{constructor(e){this.renderer=e,this.style=this.renderer.createElement("style")}}return t.\u0275fac=function(e){return new(e||t)(F.\u0275\u0275directiveInject(c.HO))},t.\u0275cmp=F.\u0275\u0275defineComponent({type:t,selectors:[["tui-token-example-1"]],decls:2,vars:0,consts:function(){let u;return u=$localize`:␟a45b7001e37ea8248fd55ba5ae99d24dd723d6a1␟705840752082841277:Inject this token if you need access to Renderer inside a singleton service.`,[u]},template:function(e,D){1&e&&(F.\u0275\u0275elementStart(0,"p"),F.\u0275\u0275i18n(1,0),F.\u0275\u0275elementEnd())},encapsulation:2,changeDetection:0}),t})();var i=n(82605),a=n(66596);let _=(()=>{class t{constructor(e){this.dialogs=e}}return t.\u0275fac=function(e){return new(e||t)(F.\u0275\u0275directiveInject(i.qYI,8))},t.\u0275cmp=F.\u0275\u0275defineComponent({type:t,selectors:[["tui-token-example-2"]],decls:6,vars:0,consts:function(){let u,e;return u=$localize`:␟c3d79f09b1c77f498f804685e4ac8abfc97d1263␟3318931371219148105: A multi token of Observables of modal dialogs displayed by ${"\ufffd#2\ufffd"}:START_LINK: TuiDialogHostComponent ${"\ufffd/#2\ufffd"}:CLOSE_LINK: .
`,e=$localize`:␟01fcb6df1b0ea45a686bb2d7f78e6f316704ee3f␟8403177569073028050: You can create your own service extending ${"\ufffd#5\ufffd"}:START_LINK: AbstractTuiDialogService ${"\ufffd/#5\ufffd"}:CLOSE_LINK: to easily add modal dialogs to your application.
`,[u,["tuiLink","","routerLink","/dialog"],e,["tuiLink","","routerLink","/components/dialog"]]},template:function(e,D){1&e&&(F.\u0275\u0275elementStart(0,"p"),F.\u0275\u0275i18nStart(1,0),F.\u0275\u0275element(2,"a",1),F.\u0275\u0275i18nEnd(),F.\u0275\u0275elementEnd(),F.\u0275\u0275elementStart(3,"p"),F.\u0275\u0275i18nStart(4,2),F.\u0275\u0275element(5,"a",3),F.\u0275\u0275i18nEnd(),F.\u0275\u0275elementEnd())},directives:[a.V,o.yS],encapsulation:2,changeDetection:0}),t})(),L=(()=>{class t{constructor(e){this.tuiFocusableComponent=e}}return t.\u0275fac=function(e){return new(e||t)(F.\u0275\u0275directiveInject(i.KZI,8))},t.\u0275cmp=F.\u0275\u0275defineComponent({type:t,selectors:[["tui-token-example-3"]],decls:2,vars:0,consts:function(){let u;return u=$localize`:␟dabfe4dcd5358df2710c18d91692fca955cfe97e␟3280607424648339721: All Taiga UI components that can be focused provide this token so you can inject them into your directives that work with focus.
`,[u]},template:function(e,D){1&e&&(F.\u0275\u0275elementStart(0,"p"),F.\u0275\u0275i18n(1,0),F.\u0275\u0275elementEnd())},encapsulation:2,changeDetection:0}),t})(),p=(()=>{class t{constructor(e){this.isAndroid=e}}return t.\u0275fac=function(e){return new(e||t)(F.\u0275\u0275directiveInject(i.XGT))},t.\u0275cmp=F.\u0275\u0275defineComponent({type:t,selectors:[["tui-token-example-4"]],decls:4,vars:0,consts:function(){let u;return u=$localize`:␟f45f6ff9b077d96c96c0492ce03b8d2bb218bd4c␟7919254654716806629: A token with a factory. It takes ${"\ufffd#2\ufffd"}:START_LINK: TUI_IS_MOBILE ${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_LINK: and ${"\ufffd#3\ufffd"}:START_LINK_1: TUI_IS_IOS ${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_LINK: , returnstrue if the device is mobile but not iOS (technically includes Windows Phone, Blackberry etc.)
`,u=F.\u0275\u0275i18nPostprocess(u),[u,["tuiLink","","routerLink",".","fragment","is-mobile"],["tuiLink","","routerLink",".","fragment","is-ios"]]},template:function(e,D){1&e&&(F.\u0275\u0275elementStart(0,"p"),F.\u0275\u0275i18nStart(1,0),F.\u0275\u0275element(2,"a",1),F.\u0275\u0275element(3,"a",2),F.\u0275\u0275i18nEnd(),F.\u0275\u0275elementEnd())},directives:[a.V,o.yS],encapsulation:2,changeDetection:0}),t})(),I=(()=>{class t{constructor(e){this.isIos=e}}return t.\u0275fac=function(e){return new(e||t)(F.\u0275\u0275directiveInject(c.FA))},t.\u0275cmp=F.\u0275\u0275defineComponent({type:t,selectors:[["tui-token-example-5"]],decls:3,vars:0,consts:function(){let u;return u=$localize`:␟91528f04c4deee77ae0cf540a8023262f2ab6665␟7260144031031628013: A token with a factory. It takes ${"\ufffd#2\ufffd"}:START_LINK: TUI_IS_MOBILE ${"\ufffd/#2\ufffd"}:CLOSE_LINK: and if it is true detects iOS devices with a regex
`,[u,["tuiLink","","routerLink",".","fragment","is-mobile"]]},template:function(e,D){1&e&&(F.\u0275\u0275elementStart(0,"p"),F.\u0275\u0275i18nStart(1,0),F.\u0275\u0275element(2,"a",1),F.\u0275\u0275i18nEnd(),F.\u0275\u0275elementEnd())},directives:[a.V,o.yS],encapsulation:2,changeDetection:0}),t})(),$=(()=>{class t{constructor(e){this.isMobile=e}}return t.\u0275fac=function(e){return new(e||t)(F.\u0275\u0275directiveInject(i.fLQ))},t.\u0275cmp=F.\u0275\u0275defineComponent({type:t,selectors:[["tui-token-example-6"]],decls:2,vars:0,consts:function(){let u;return u=$localize`:␟abf3ac0a1bcf55a9764c7d357f716e8c46ec4c7a␟5737617888014424543: A token with a factory. It takes USER_AGENT token and parses it with a complex Regex to detect users with mobile devices
`,[u]},template:function(e,D){1&e&&(F.\u0275\u0275elementStart(0,"p"),F.\u0275\u0275i18n(1,0),F.\u0275\u0275elementEnd())},encapsulation:2,changeDetection:0}),t})(),g=(()=>{class t{constructor(e){this.TuiNumberFormatSettings=e}}return t.\u0275fac=function(e){return new(e||t)(F.\u0275\u0275directiveInject(T.HOy))},t.\u0275cmp=F.\u0275\u0275defineComponent({type:t,selectors:[["tui-token-example-8"]],decls:28,vars:0,consts:function(){let u;return u=$localize`:␟0c2f92ed6e4c694e9e5777611745fef956fc57b2␟6639559641070555035:${"[\ufffd#2\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_DIV: Using ${"\ufffd#3\ufffd"}:START_TAG_STRONG:TUI_NUMBER_FORMAT${"\ufffd/#3\ufffd"}:CLOSE_TAG_STRONG: injection token you can customize numbers formatting. ${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_DIV:${"[\ufffd#2\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_DIV:For example: 10 500,33${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_DIV:${"[\ufffd#2\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_DIV:Can be customized as: 10/500.33${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_DIV:${"[\ufffd#6\ufffd|\ufffd#15\ufffd]"}:START_TAG_SECTION:${"[\ufffd#7\ufffd|\ufffd#16\ufffd]"}:START_HEADING_LEVEL3:Defaults:${"[\ufffd/#7\ufffd|\ufffd/#16\ufffd]"}:CLOSE_HEADING_LEVEL3:${"[\ufffd#8\ufffd|\ufffd#17\ufffd]"}:START_UNORDERED_LIST:${"[\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#13\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd]"}:START_LIST_ITEM: decimalSeparator = ${"[\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:,${"[\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#13\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#26\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#13\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd]"}:START_LIST_ITEM: thousandSeparator = ${"[\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:CHAR_NO_BREAK_SPACE${"[\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#13\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#26\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#13\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd]"}:START_LIST_ITEM: zeroPadding = ${"[\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:true${"[\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#13\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#26\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd/#8\ufffd|\ufffd/#17\ufffd]"}:CLOSE_UNORDERED_LIST:${"[\ufffd/#6\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_SECTION:${"[\ufffd#6\ufffd|\ufffd#15\ufffd]"}:START_TAG_SECTION:${"[\ufffd#7\ufffd|\ufffd#16\ufffd]"}:START_HEADING_LEVEL3:Components that are customizable:${"[\ufffd/#7\ufffd|\ufffd/#16\ufffd]"}:CLOSE_HEADING_LEVEL3:${"[\ufffd#8\ufffd|\ufffd#17\ufffd]"}:START_UNORDERED_LIST:${"[\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#13\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd]"}:START_LIST_ITEM:${"\ufffd#19\ufffd"}:START_LINK: TuiMoneyComponent ${"[\ufffd/#19\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd]"}:CLOSE_LINK:${"[\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#13\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#26\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#13\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd]"}:START_LIST_ITEM:${"\ufffd#21\ufffd"}:START_LINK_1: TuiFormatNumberPipe ${"[\ufffd/#19\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd]"}:CLOSE_LINK:${"[\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#13\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#26\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#13\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd]"}:START_LIST_ITEM:${"\ufffd#23\ufffd"}:START_LINK_2: TuiInputNumberComponent ${"[\ufffd/#19\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd]"}:CLOSE_LINK:${"[\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#13\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#26\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#13\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd]"}:START_LIST_ITEM:${"\ufffd#25\ufffd"}:START_LINK_3: TuiInputSliderComponent ${"[\ufffd/#19\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd]"}:CLOSE_LINK:${"[\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#13\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#26\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#13\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd]"}:START_LIST_ITEM:${"\ufffd#27\ufffd"}:START_LINK_4: TuiInputRangeComponent ${"[\ufffd/#19\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd]"}:CLOSE_LINK:${"[\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#13\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#26\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd/#8\ufffd|\ufffd/#17\ufffd]"}:CLOSE_UNORDERED_LIST:${"[\ufffd/#6\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_SECTION:`,u=F.\u0275\u0275i18nPostprocess(u),[u,[1,"tui-list","tui-list_small"],[1,"tui-list__item"],["tuiLink","","routerLink","/components/money"],["tuiLink","","routerLink","/pipes/format-number"],["tuiLink","","routerLink","/components/input-number"],["tuiLink","","routerLink","/components/input-slider"],["tuiLink","","routerLink","/components/input-range"]]},template:function(e,D){1&e&&(F.\u0275\u0275elementStart(0,"div"),F.\u0275\u0275i18nStart(1,0),F.\u0275\u0275elementStart(2,"div"),F.\u0275\u0275element(3,"strong"),F.\u0275\u0275elementEnd(),F.\u0275\u0275element(4,"div"),F.\u0275\u0275element(5,"div"),F.\u0275\u0275elementStart(6,"section"),F.\u0275\u0275element(7,"h3"),F.\u0275\u0275elementStart(8,"ul",1),F.\u0275\u0275elementStart(9,"li",2),F.\u0275\u0275element(10,"code"),F.\u0275\u0275elementEnd(),F.\u0275\u0275elementStart(11,"li",2),F.\u0275\u0275element(12,"code"),F.\u0275\u0275elementEnd(),F.\u0275\u0275elementStart(13,"li",2),F.\u0275\u0275element(14,"code"),F.\u0275\u0275elementEnd(),F.\u0275\u0275elementEnd(),F.\u0275\u0275elementEnd(),F.\u0275\u0275elementStart(15,"section"),F.\u0275\u0275element(16,"h3"),F.\u0275\u0275elementStart(17,"ul",1),F.\u0275\u0275elementStart(18,"li",2),F.\u0275\u0275element(19,"a",3),F.\u0275\u0275elementEnd(),F.\u0275\u0275elementStart(20,"li",2),F.\u0275\u0275element(21,"a",4),F.\u0275\u0275elementEnd(),F.\u0275\u0275elementStart(22,"li",2),F.\u0275\u0275element(23,"a",5),F.\u0275\u0275elementEnd(),F.\u0275\u0275elementStart(24,"li",2),F.\u0275\u0275element(25,"a",6),F.\u0275\u0275elementEnd(),F.\u0275\u0275elementStart(26,"li",2),F.\u0275\u0275element(27,"a",7),F.\u0275\u0275elementEnd(),F.\u0275\u0275elementEnd(),F.\u0275\u0275elementEnd(),F.\u0275\u0275i18nEnd(),F.\u0275\u0275elementEnd())},directives:[a.V,o.yS],encapsulation:2,changeDetection:0}),t})();function O(t,u){if(1&t&&(F.\u0275\u0275elementStart(0,"tui-doc-example",2),F.\u0275\u0275element(1,"tui-token-example-1"),F.\u0275\u0275elementEnd(),F.\u0275\u0275elementStart(2,"tui-doc-example",3),F.\u0275\u0275element(3,"tui-token-example-2"),F.\u0275\u0275elementEnd(),F.\u0275\u0275elementStart(4,"tui-doc-example",4),F.\u0275\u0275element(5,"tui-token-example-3"),F.\u0275\u0275elementEnd(),F.\u0275\u0275elementStart(6,"tui-doc-example",5),F.\u0275\u0275element(7,"tui-token-example-4"),F.\u0275\u0275elementEnd(),F.\u0275\u0275elementStart(8,"tui-doc-example",6),F.\u0275\u0275element(9,"tui-token-example-5"),F.\u0275\u0275elementEnd(),F.\u0275\u0275elementStart(10,"tui-doc-example",7),F.\u0275\u0275element(11,"tui-token-example-6"),F.\u0275\u0275elementEnd(),F.\u0275\u0275elementStart(12,"tui-doc-example",8),F.\u0275\u0275element(13,"tui-token-example-8"),F.\u0275\u0275elementEnd()),2&t){const e=F.\u0275\u0275nextContext();F.\u0275\u0275property("content",e.example1),F.\u0275\u0275advance(2),F.\u0275\u0275property("content",e.example2),F.\u0275\u0275advance(2),F.\u0275\u0275property("content",e.example3),F.\u0275\u0275advance(2),F.\u0275\u0275property("content",e.example4),F.\u0275\u0275advance(2),F.\u0275\u0275property("content",e.example5),F.\u0275\u0275advance(2),F.\u0275\u0275property("content",e.example6),F.\u0275\u0275advance(2),F.\u0275\u0275property("content",e.example8)}}let f=(()=>{class t{constructor(){this.example1={TypeScript:n.e(14896).then(n.bind(n,14896))},this.example2={TypeScript:n.e(87845).then(n.bind(n,87845))},this.example3={TypeScript:n.e(7810).then(n.bind(n,7810))},this.example4={TypeScript:n.e(54059).then(n.bind(n,54059))},this.example5={TypeScript:n.e(17873).then(n.bind(n,17873))},this.example6={TypeScript:n.e(62360).then(n.bind(n,62360))},this.example7={TypeScript:n.e(33192).then(n.bind(n,33192))},this.example8={TypeScript:n.e(42623).then(n.bind(n,42623))}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=F.\u0275\u0275defineComponent({type:t,selectors:[["example-tokens"]],features:[F.\u0275\u0275ProvidersFeature([{provide:s.lW,useValue:null}])],decls:2,vars:0,consts:function(){let u;return u=$localize`:␟831c70609f5320ba73bb112526ec9cb86c71367c␟4548722462586549001:Tokens`,[["header",u,"package","CDK","path","cdk/tokens"],["pageTab",""],["id","default-renderer","heading","TUI_DEFAULT_RENDERER",3,"content"],["id","dialog","heading","TUI_DIALOGS",3,"content"],["id","focusable-item-accessor","heading","TUI_FOCUSABLE_ITEM_ACCESSOR",3,"content"],["id","is-android","heading","TUI_IS_ANDROID",3,"content"],["id","is-ios","heading","TUI_IS_IOS",3,"content"],["id","is-mobile","heading","TUI_IS_MOBILE",3,"content"],["id","number-format","heading","TUI_NUMBER_FORMAT",3,"content"]]},template:function(e,D){1&e&&(F.\u0275\u0275elementStart(0,"tui-doc-page",0),F.\u0275\u0275template(1,O,14,7,"ng-template",1),F.\u0275\u0275elementEnd())},directives:[r.q,S.n,m.f,d,_,L,p,I,$,g],encapsulation:2,changeDetection:0}),t})(),C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=F.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=F.\u0275\u0275defineInjector({imports:[[E.ez,T.jzK,s.fV,o.Bz.forChild((0,s.Ve)(f))]]}),t})()}}]);