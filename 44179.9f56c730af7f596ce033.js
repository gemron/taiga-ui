"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[44179],{44179:(_,m,t)=>{t.r(m),t.d(m,{VariablesModule:()=>I});var S=t(50506),u=t(12057),d=t(23738),E=t(12021),F=t(46244),f=t(37267),c=t(38780),e=t(74788),T=t(88331),p=t(66596),g=t(57068),C=t(70329),M=t(77027),O=t(41360),D=t(81894);let h=(()=>{class n{constructor(){this.value="",this.checkbox=!0}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-variables-example-1"]],decls:6,vars:3,consts:[[3,"hoverable"],[3,"ngModel","ngModelChange"],[1,"tui-space_top-4"],["size","l",3,"ngModel","ngModelChange"]],template:function(a,i){1&a&&(e.\u0275\u0275elementStart(0,"tui-island",0),e.\u0275\u0275elementStart(1,"tui-input",1),e.\u0275\u0275listener("ngModelChange",function(s){return i.value=s}),e.\u0275\u0275text(2,"Input example"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",2),e.\u0275\u0275elementStart(4,"tui-checkbox-labeled",3),e.\u0275\u0275listener("ngModelChange",function(s){return i.checkbox=s}),e.\u0275\u0275text(5," Checkbox example "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&a&&(e.\u0275\u0275property("hoverable",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngModel",i.value),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngModel",i.checkbox))},directives:[C.h,M.K,O.w,d.NgControlStatus,d.NgModel,D.p],styles:['[_nghost-%COMP%]{--tui-font-text: "Comic Sans MS", cursive;--tui-font-text-m: bold 1rem/1.5rem var(--tui-font-text);--tui-font-text-s: normal .5rem/1.25rem var(--tui-font-text);--tui-primary: #c86dd7;--tui-primary-hover: #a456b1;--tui-primary-active: #7f3b8a;--tui-primary-text: #fff;--tui-radius-s: 0;--tui-radius-m: .25rem;--tui-height-l: 4.375rem}'],changeDetection:0}),n})();var A=t(92164);function L(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"li"),e.\u0275\u0275elementStart(1,"tui-doc-copy",9),e.\u0275\u0275elementStart(2,"code"),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd()),2&n){const a=o.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("cdkCopyToClipboard",a.key),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(a.key),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" \u2014 ",a.value," ")}}let v=(()=>{class n{constructor(){this.example1={HTML:t.e(9464).then(t.bind(t,9464)),LESS:t.e(17576).then(t.t.bind(t,17576,17))},this.vars={"--tui-font-heading":"font for headings","--tui-font-text":"font for text","--tui-radius-xs":"border radius for smallest items (i.e. small checkbox)","--tui-radius-s":"border radius for small elements (i.e. tags)","--tui-radius-m":"default border radius","--tui-radius-l":"border radius for containers (i.e. hint, accordion)","--tui-height-xs":"smallest elements height (i.e. small button, badges)","--tui-height-s":"small elements height (i.e. small inputs)","--tui-height-m":"default elements height (i.e. inputs, buttons)","--tui-height-l":"large elements height (i.e. inputs, buttons)","--tui-padding-s":'padding for inputs with size "s"',"--tui-padding-m":'padding for inputs with size "m"',"--tui-padding-l":'padding for inputs with size "l"',"--tui-disabled-opacity":"amount of transparency for disabled elements","--tui-autofill":"color for native browser autofill"}}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["variables"]],decls:17,vars:4,consts:function(){let o,a,i,l,s;return o=$localize`:␟f014ca169762f17944612b404ca3277a0ff46b04␟4467462789627316821:Variables`,a=$localize`:␟5bfe32b26e1e4d60bcb63a2ab52042abc3588a5d␟1632021933702754681: Taiga UI uses CSS custom properties for many of its visual aspects. You can see ${"\ufffd#3\ufffd"}:START_LINK: colors ${"\ufffd/#3\ufffd"}:CLOSE_LINK: for the full list of color variables. `,i=$localize`:␟a4f75da9c1ff87f6cd13c629b6f4bea46a0de501␟163740347890303905:Besides colors there are also following variables that can be adjusted at any level of DOM structure:`,l=$localize`:␟bf9c19cc699aeb68adfd762067f0bc91ef2d1c14␟2655444008267344766: An easy way to dynamically override variables is to use a ${"\ufffd#11\ufffd"}:START_LINK:${"[\ufffd#12\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:ThemeSwitcher${"[\ufffd/#12\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#11\ufffd|\ufffd/#13\ufffd]"}:CLOSE_LINK: . This is how ${"\ufffd#13\ufffd"}:START_LINK_1:${"[\ufffd#12\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:ThemeNight${"[\ufffd/#12\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#11\ufffd|\ufffd/#13\ufffd]"}:CLOSE_LINK: does it. `,l=e.\u0275\u0275i18nPostprocess(l),s=$localize`:␟d557ac3c1cb761db5ba264036accec4aca3c6d98␟1809364622633527376:Override example`,[["header",o],a,["tuiLink","","routerLink","/colors"],i,[4,"ngFor","ngForOf"],l,["tuiLink","","routerLink","/components/theme-switcher"],["tuiLink","","routerLink","/components/theme-night"],["id","override","heading",s,3,"content"],[1,"var",3,"cdkCopyToClipboard"]]},template:function(a,i){1&a&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275elementStart(1,"p"),e.\u0275\u0275i18nStart(2,1),e.\u0275\u0275element(3,"a",2),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"p"),e.\u0275\u0275i18n(5,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"ul"),e.\u0275\u0275template(7,L,5,3,"li",4),e.\u0275\u0275pipe(8,"keyvalue"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"p"),e.\u0275\u0275i18nStart(10,5),e.\u0275\u0275elementStart(11,"a",6),e.\u0275\u0275element(12,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"a",7),e.\u0275\u0275element(14,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"tui-doc-example",8),e.\u0275\u0275element(16,"tui-variables-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&a&&(e.\u0275\u0275advance(7),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind1(8,2,i.vars)),e.\u0275\u0275advance(8),e.\u0275\u0275property("content",i.example1))},directives:[T.q,p.V,E.yS,u.sg,g.f,h,A.f,S.i3],pipes:[u.Nd],encapsulation:2,changeDetection:0}),n})(),I=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[u.ez,S.Iq,c.ydP,f.jzK,F.k7,c.QfL,c.sxu,F.fV,E.Bz.forChild((0,F.Ve)(v)),d.FormsModule]]}),n})()}}]);