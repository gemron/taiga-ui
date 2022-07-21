"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[32525],{32525:(b,D,t)=>{t.r(D),t.d(D,{IconSetModule:()=>U});var T=t(50506),S=t(12057),c=t(23738),C=t(12021),r=t(46244),a=t(37267),p=t(38780),g=t(67350),e=t(74788),I=t(88331),f=t(66596),_=t(76189),M=t(88618),E=t(79121),N=t(57068),y=t(92483),$=t(48706),h=t(14133),L=t(64374);const m={tuiIconCalendarLarge:"date_range-24px",tuiIconTooltipLarge:"help-24px",tuiIconInfo:"info-16px",tuiIconCloseLarge:"clear-24px",tuiIconChevronLeftLarge:"keyboard_arrow_left-24px",tuiIconChevronRightLarge:"keyboard_arrow_right-24px"};function A(n){return`assets/icons/${m[n]}.svg#${m[n]}`}let v=(()=>{class n{constructor(){this.date=null}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-icon-set-example-1"]],features:[e.\u0275\u0275ProvidersFeature([{provide:a.kiY,useValue:A}])],decls:8,vars:2,consts:[[1,"b-form"],["tuiHintContent","You can use any icons you want",1,"tui-space_top-4",3,"tuiTextfieldCleaner","ngModel","ngModelChange"]],template:function(o,F){1&o&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275elementStart(1,"tui-notification"),e.\u0275\u0275text(2," As usual with the DI this is hierarchical. Meaning you can provide different "),e.\u0275\u0275elementStart(3,"code"),e.\u0275\u0275text(4,"TUI_ICONS_PATH"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(5," and use different icons across your app. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"tui-input-date-range",1),e.\u0275\u0275listener("ngModelChange",function(u){return F.date=u}),e.\u0275\u0275text(7," Pick your favorite date range "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275advance(6),e.\u0275\u0275property("tuiTextfieldCleaner",!0)("ngModel",F.date))},directives:[E.L,y.H,$.d,h.m,L.be,c.NgControlStatus,c.NgModel],encapsulation:2}),n})();var R=t(76349),x=t(92164);function P(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"tui-doc-copy",18),e.\u0275\u0275elementStart(1,"code"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const o=i.$implicit;e.\u0275\u0275property("cdkCopyToClipboard",o),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(o)}}let G=(()=>{class n{constructor(){this.exampleSanitizer=t.e(6280).then(t.bind(t,6280)),this.example1={"process-icons.js":t.e(66187).then(t.bind(t,66187)),"process-icons.ts":t.e(80733).then(t.bind(t,80733)),TypeScript:t.e(87513).then(t.bind(t,87513)),HTML:t.e(60255).then(t.bind(t,60255))},this.names=Object.keys(g.tuiKitIcons),this.expanded=!1}toggle(){this.expanded=!this.expanded}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["icon-set"]],decls:45,vars:4,consts:function(){let i,o,F,s,u,O,l;return i=$localize`:␟c08189fb00c55f045ae49b6c01419138998d0e41␟8811200965267882277:Icons set`,o=$localize`:␟046f07409bddebdd63222d401bf0aad7690bfa7d␟2065126203376070983: Taiga UI uses ${"\ufffd#3\ufffd"}:START_LINK:${"\ufffd#4\ufffd"}:START_TAG_CODE:tui-svg${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#3\ufffd"}:CLOSE_LINK: component to display SVG icons. It can show icons by name, link or source code. Several icon names are hardcoded into kit components so if you want to switch to a different icon set you would need to provide a mapping. `,F=$localize`:␟3f0038890ba46d9aa21b924adee1c72c505a0f39␟3842005636025308996: These are keys of following dictionaries: ${"[\ufffd#13\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:tuiCoreIcons${"[\ufffd/#13\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#13\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:tuiKitIcons${"[\ufffd/#13\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE: . It is not required to provide all those icons, you can gradually add the ones you need depending on components you use. `,F=e.\u0275\u0275i18nPostprocess(F),s=$localize`:␟2ef378ecb9aa4fd37eaba2fcca8dfed62a561c14␟1836251479999697458: There are two ways to add icons: bundled and as assets. Bundled icons have the benefit of immediate display but increase your app size. Assets work like regular ${"[\ufffd#17\ufffd|\ufffd#18\ufffd]"}:START_TAG_CODE:img src="xxx"${"[\ufffd/#17\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_CODE: with all the benefits of caching. In both cases you can control color with CSS ${"[\ufffd#17\ufffd|\ufffd#18\ufffd]"}:START_TAG_CODE:color${"[\ufffd/#17\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_CODE: style. `,s=e.\u0275\u0275i18nPostprocess(s),u=$localize`:␟47b8ba6aff6dc60fd31e3dc5c5c9d51c4eae76b3␟971802390501079989: If you want to bundle your icons, you need to provide ${"[\ufffd#29\ufffd|\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd]"}:START_TAG_CODE:TUI_ICONS${"[\ufffd/#29\ufffd|\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd]"}:CLOSE_TAG_CODE: token with a dictionary of name to source code. Also you need to process your icons by ${"[\ufffd#29\ufffd|\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd]"}:START_TAG_CODE:processIcons${"[\ufffd/#29\ufffd|\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd]"}:CLOSE_TAG_CODE: from ${"[\ufffd#29\ufffd|\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd]"}:START_TAG_CODE:@taiga-ui/icons/scripts${"[\ufffd/#29\ufffd|\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd]"}:CLOSE_TAG_CODE: package. Then move icons to the assets folder and provide ${"[\ufffd#29\ufffd|\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd]"}:START_TAG_CODE:TUI_ICONS_PATH${"[\ufffd/#29\ufffd|\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd]"}:CLOSE_TAG_CODE: as seen in example below: `,u=e.\u0275\u0275i18nPostprocess(u),O=$localize`:␟0dc56b110b85e3f82dc8a031661e63c1bb5ac2c4␟4928000514802786074:Material icons`,l=$localize`:␟43d5adc1c36771c92be7a48fa3ed020c4aebb9b1␟6714212981041286774: If you use unsafe icons or ${"\ufffd#40\ufffd"}:START_LINK: Editor component ${"[\ufffd/#40\ufffd|\ufffd/#42\ufffd|\ufffd/#43\ufffd]"}:CLOSE_LINK: you need to provide ${"\ufffd#41\ufffd"}:START_TAG_CODE:TUI_SANITIZER${"\ufffd/#41\ufffd"}:CLOSE_TAG_CODE: token, which is responsible for removing malicious code from the svg. We recommend to use ${"\ufffd#42\ufffd"}:START_LINK_1: NgDompurify ${"[\ufffd/#40\ufffd|\ufffd/#42\ufffd|\ufffd/#43\ufffd]"}:CLOSE_LINK: as a sanitizer. This library implements ${"\ufffd#43\ufffd"}:START_LINK_2: DOMPurify ${"[\ufffd/#40\ufffd|\ufffd/#42\ufffd|\ufffd/#43\ufffd]"}:CLOSE_LINK: as Angular Sanitizer or Pipe. It delegates sanitizing to DOMPurify and supports the same configuration. `,l=e.\u0275\u0275i18nPostprocess(l),[["header",i],o,["tuiLink","","routerLink","/components/svg"],["tuiButton","",3,"click"],[3,"expanded"],[1,"wrapper"],[3,"cdkCopyToClipboard",4,"ngFor","ngForOf"],F,s,["status","warning"],u,["id","material","heading",O,3,"content"],["id","sanitizer",1,"sanitizer-example"],l,["tuiLink","","routerLink","/components/editor"],["tuiLink","","href","https://github.com/tinkoff/ng-dompurify","target","_blank"],["tuiLink","","href","https://github.com/cure53/DOMPurify","target","_blank"],["filename","app.module.ts",3,"code"],[3,"cdkCopyToClipboard"]]},template:function(o,F){1&o&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275elementStart(1,"p"),e.\u0275\u0275i18nStart(2,1),e.\u0275\u0275elementStart(3,"a",2),e.\u0275\u0275element(4,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"p"),e.\u0275\u0275elementStart(6,"button",3),e.\u0275\u0275listener("click",function(){return F.toggle()}),e.\u0275\u0275text(7," Show names "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"tui-expand",4),e.\u0275\u0275elementStart(9,"div",5),e.\u0275\u0275template(10,P,3,2,"tui-doc-copy",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"p"),e.\u0275\u0275i18nStart(12,7),e.\u0275\u0275element(13,"code"),e.\u0275\u0275element(14,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"p"),e.\u0275\u0275i18nStart(16,8),e.\u0275\u0275element(17,"code"),e.\u0275\u0275element(18,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"tui-notification",9),e.\u0275\u0275text(20," Make sure you mark regions in your icons that need to be colored with "),e.\u0275\u0275elementStart(21,"code"),e.\u0275\u0275text(22,'fill="currentColor"'),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(23," or "),e.\u0275\u0275elementStart(24,"code"),e.\u0275\u0275text(25,'stroke="currentColor"'),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(26," . "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"p"),e.\u0275\u0275i18nStart(28,10),e.\u0275\u0275element(29,"code"),e.\u0275\u0275element(30,"code"),e.\u0275\u0275element(31,"code"),e.\u0275\u0275element(32,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(33,"tui-doc-example",11),e.\u0275\u0275element(34,"tui-icon-set-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"section",12),e.\u0275\u0275elementStart(36,"h2"),e.\u0275\u0275text(37,"Sanitizer"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(38,"p"),e.\u0275\u0275i18nStart(39,13),e.\u0275\u0275element(40,"a",14),e.\u0275\u0275element(41,"code"),e.\u0275\u0275element(42,"a",15),e.\u0275\u0275element(43,"a",16),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(44,"tui-doc-code",17),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275advance(8),e.\u0275\u0275property("expanded",F.expanded),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",F.names),e.\u0275\u0275advance(23),e.\u0275\u0275property("content",F.example1),e.\u0275\u0275advance(11),e.\u0275\u0275property("code",F.exampleSanitizer))},directives:[I.q,f.V,C.yS,_.v,M.S,S.sg,E.L,N.f,v,R.c,x.f,T.i3],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.sanitizer-example[_ngcontent-%COMP%]{display:block;padding-top:3.5rem}"],changeDetection:0}),n})(),U=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[S.ez,c.FormsModule,T.Iq,r.k7,a.jzK,a.ijq,a.fNO,p.sR_,a.HiG,a.cnw,a.cyX,r.fV,C.Bz.forChild((0,r.Ve)(G))]]}),n})()}}]);