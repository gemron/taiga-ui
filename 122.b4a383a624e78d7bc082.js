(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{QNGr:function(e,t,n){"use strict";n.r(t),n.d(t,"IconSetModule",function(){return L});var o=n("Tr4x"),a=n("SVse"),i=n("s7LF"),r=n("iInd"),c=n("zIlJ"),d=n("ErM8"),l=n("QKt8"),s=n("Q9fL"),u=n("8Y7J"),p=n("ReYJ"),m=n("WDJX"),f=n("8zc/"),S=n("fWOT"),T=n("rgoq"),_=n("PYg8"),E=n("j1x7"),g=n("2nSB"),C=n("fIai"),h=n("jo1D");const b={tuiIconCalendarLarge:"date_range-24px",tuiIconTooltipLarge:"help-24px",tuiIconInfo:"info-16px",tuiIconCloseLarge:"clear-24px",tuiIconChevronLeftLarge:"keyboard_arrow_left-24px",tuiIconChevronRightLarge:"keyboard_arrow_right-24px"};function y(e){return`assets/icons/${b[e]}.svg#${b[e]}`}let O=(()=>{class e{constructor(){this.date=null}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-icon-set-example-1"]],features:[u["\u0275\u0275ProvidersFeature"]([{provide:d.y,useValue:y}])],decls:8,vars:2,consts:[[1,"b-form"],["tuiHintContent","You can use any icons you want",1,"tui-space_top-4",3,"tuiTextfieldCleaner","ngModel","ngModelChange"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275elementStart"](1,"tui-notification"),u["\u0275\u0275text"](2," As usual with the DI this is hierarchical. Meaning you can provide different "),u["\u0275\u0275elementStart"](3,"code"),u["\u0275\u0275text"](4,"TUI_ICONS_PATH"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](5," and use different icons across your app. "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"tui-input-date-range",1),u["\u0275\u0275listener"]("ngModelChange",function(e){return t.date=e}),u["\u0275\u0275text"](7," Pick your favorite date range "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](6),u["\u0275\u0275property"]("tuiTextfieldCleaner",!0)("ngModel",t.date))},directives:[T.a,E.a,g.a,C.a,h.b,i.NgControlStatus,i.NgModel],encapsulation:2}),e})();var x=n("JKY/"),I=n("UzhA");function A(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-copy",18),u["\u0275\u0275elementStart"](1,"code"),u["\u0275\u0275text"](2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;u["\u0275\u0275property"]("cdkCopyToClipboard",e),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](e)}}let $=(()=>{class e{constructor(){this.exampleSanitizer=n.e(1408).then(n.bind(null,"y8Ft")),this.example1={"process-icons.js":n.e(1407).then(n.bind(null,"4NzV")),TypeScript:n.e(1406).then(n.bind(null,"UdQv")),HTML:n.e(1405).then(n.bind(null,"zpm8"))},this.names=Object.keys(s.tuiKitIcons),this.expanded=!1}toggle(){this.expanded=!this.expanded}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["icon-set"]],decls:45,vars:4,consts:function(){let e,t,n,o,a,i,r;return e=$localize`:␟c08189fb00c55f045ae49b6c01419138998d0e41␟8811200965267882277:Icons set`,t=$localize`:␟046f07409bddebdd63222d401bf0aad7690bfa7d␟2065126203376070983: Taiga UI uses ${"\ufffd#3\ufffd"}:START_LINK:${"\ufffd#4\ufffd"}:START_TAG_CODE:tui-svg${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#3\ufffd"}:CLOSE_LINK: component to display SVG icons. It can show icons by name, link or source code. Several icon names are hardcoded into kit components so if you want to switch to a different icon set you would need to provide a mapping. `,n=$localize`:␟3f0038890ba46d9aa21b924adee1c72c505a0f39␟3842005636025308996: These are keys of following dictionaries: ${"[\ufffd#13\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:tuiCoreIcons${"[\ufffd/#13\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#13\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:tuiKitIcons${"[\ufffd/#13\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE: . It is not required to provide all those icons, you can gradually add the ones you need depending on components you use. `,n=u["\u0275\u0275i18nPostprocess"](n),o=$localize`:␟2ef378ecb9aa4fd37eaba2fcca8dfed62a561c14␟1836251479999697458: There are two ways to add icons: bundled and as assets. Bundled icons have the benefit of immediate display but increase your app size. Assets work like regular ${"[\ufffd#17\ufffd|\ufffd#18\ufffd]"}:START_TAG_CODE:img src="xxx"${"[\ufffd/#17\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_CODE: with all the benefits of caching. In both cases you can control color with CSS ${"[\ufffd#17\ufffd|\ufffd#18\ufffd]"}:START_TAG_CODE:color${"[\ufffd/#17\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_CODE: style. `,o=u["\u0275\u0275i18nPostprocess"](o),a=$localize`:␟47b8ba6aff6dc60fd31e3dc5c5c9d51c4eae76b3␟971802390501079989: If you want to bundle your icons, you need to provide ${"[\ufffd#29\ufffd|\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd]"}:START_TAG_CODE:TUI_ICONS${"[\ufffd/#29\ufffd|\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd]"}:CLOSE_TAG_CODE: token with a dictionary of name to source code. Also you need to process your icons by ${"[\ufffd#29\ufffd|\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd]"}:START_TAG_CODE:processIcons${"[\ufffd/#29\ufffd|\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd]"}:CLOSE_TAG_CODE: from ${"[\ufffd#29\ufffd|\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd]"}:START_TAG_CODE:@taiga-ui/icons/scripts${"[\ufffd/#29\ufffd|\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd]"}:CLOSE_TAG_CODE: package. Then move icons to the assets folder and provide ${"[\ufffd#29\ufffd|\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd]"}:START_TAG_CODE:TUI_ICONS_PATH${"[\ufffd/#29\ufffd|\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd]"}:CLOSE_TAG_CODE: as seen in example below: `,a=u["\u0275\u0275i18nPostprocess"](a),i=$localize`:␟0dc56b110b85e3f82dc8a031661e63c1bb5ac2c4␟4928000514802786074:Material icons`,r=$localize`:␟43d5adc1c36771c92be7a48fa3ed020c4aebb9b1␟6714212981041286774: If you use unsafe icons or ${"\ufffd#40\ufffd"}:START_LINK: Editor component ${"[\ufffd/#40\ufffd|\ufffd/#42\ufffd|\ufffd/#43\ufffd]"}:CLOSE_LINK: you need to provide ${"\ufffd#41\ufffd"}:START_TAG_CODE:TUI_SANITIZER${"\ufffd/#41\ufffd"}:CLOSE_TAG_CODE: token, which is responsible for removing malicious code from the svg. We recommend to use ${"\ufffd#42\ufffd"}:START_LINK_1: NgDompurify ${"[\ufffd/#40\ufffd|\ufffd/#42\ufffd|\ufffd/#43\ufffd]"}:CLOSE_LINK: as a sanitizer. This library implements ${"\ufffd#43\ufffd"}:START_LINK_2: DOMPurify ${"[\ufffd/#40\ufffd|\ufffd/#42\ufffd|\ufffd/#43\ufffd]"}:CLOSE_LINK: as Angular Sanitizer or Pipe. It delegates sanitizing to DOMPurify and supports the same configuration. `,r=u["\u0275\u0275i18nPostprocess"](r),[["header",e],t,["tuiLink","","routerLink","/components/svg"],["tuiButton","",3,"click"],[3,"expanded"],[1,"wrapper"],[3,"cdkCopyToClipboard",4,"ngFor","ngForOf"],n,o,["status","warning"],a,["id","material","heading",i,3,"content"],["id","sanitizer",1,"sanitizer-example"],r,["tuiLink","","routerLink","/components/editor"],["tuiLink","","href","https://github.com/tinkoff/ng-dompurify","target","_blank"],["tuiLink","","href","https://github.com/cure53/DOMPurify","target","_blank"],["filename","app.module.ts",3,"code"],[3,"cdkCopyToClipboard"]]},template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275elementStart"](1,"p"),u["\u0275\u0275i18nStart"](2,1),u["\u0275\u0275elementStart"](3,"a",2),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"p"),u["\u0275\u0275elementStart"](6,"button",3),u["\u0275\u0275listener"]("click",function(){return t.toggle()}),u["\u0275\u0275text"](7," Show names "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](8,"tui-expand",4),u["\u0275\u0275elementStart"](9,"div",5),u["\u0275\u0275template"](10,A,3,2,"tui-doc-copy",6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](11,"p"),u["\u0275\u0275i18nStart"](12,7),u["\u0275\u0275element"](13,"code"),u["\u0275\u0275element"](14,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](15,"p"),u["\u0275\u0275i18nStart"](16,8),u["\u0275\u0275element"](17,"code"),u["\u0275\u0275element"](18,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](19,"tui-notification",9),u["\u0275\u0275text"](20," Make sure you mark regions in your icons that need to be colored with "),u["\u0275\u0275elementStart"](21,"code"),u["\u0275\u0275text"](22,'fill="currentColor"'),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](23," or "),u["\u0275\u0275elementStart"](24,"code"),u["\u0275\u0275text"](25,'stroke="currentColor"'),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](26," . "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](27,"p"),u["\u0275\u0275i18nStart"](28,10),u["\u0275\u0275element"](29,"code"),u["\u0275\u0275element"](30,"code"),u["\u0275\u0275element"](31,"code"),u["\u0275\u0275element"](32,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](33,"tui-doc-example",11),u["\u0275\u0275element"](34,"tui-icon-set-example-1"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](35,"section",12),u["\u0275\u0275elementStart"](36,"h2"),u["\u0275\u0275text"](37,"Sanitizer"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](38,"p"),u["\u0275\u0275i18nStart"](39,13),u["\u0275\u0275element"](40,"a",14),u["\u0275\u0275element"](41,"code"),u["\u0275\u0275element"](42,"a",15),u["\u0275\u0275element"](43,"a",16),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](44,"tui-doc-code",17),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](8),u["\u0275\u0275property"]("expanded",t.expanded),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngForOf",t.names),u["\u0275\u0275advance"](23),u["\u0275\u0275property"]("content",t.example1),u["\u0275\u0275advance"](11),u["\u0275\u0275property"]("code",t.exampleSanitizer))},directives:[p.a,m.a,r.e,f.a,S.a,a.o,T.a,_.a,O,x.a,I.a,o.a],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.sanitizer-example[_ngcontent-%COMP%]{display:block;padding-top:3.5rem}"],changeDetection:0}),e})(),L=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({imports:[[a.c,i.FormsModule,o.c,c.o,d.yb,d.pb,d.ab,l.W,d.Gb,d.Xb,d.tb,c.m,r.f.forChild(Object(c.v)($))]]}),e})()}}]);