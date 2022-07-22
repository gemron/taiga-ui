"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[31014],{31014:(h,m,t)=>{t.r(m),t.d(m,{ExampleTuiPanModule:()=>R});var E=t(12057),r=t(12021),c=t(46244),T=t(92130),e=t(74788),S=t(88331),C=t(37159),p=t(57068),M=t(91211),P=t(26215),g=t(88002),f=t(60015);let O=(()=>{class n{constructor(o){this.sanitizer=o,this.coordinates$=new P.X([0,0]),this.transform$=this.coordinates$.pipe((0,g.U)(l=>this.sanitizer.bypassSecurityTrustStyle(`translate(${l[0]}px, ${l[1]}px)`)))}onPan(o){this.coordinates$.next([this.currentCoords[0]+o[0],this.currentCoords[1]+o[1]])}get currentCoords(){return this.coordinates$.value}}return n.\u0275fac=function(o){return new(o||n)(e.\u0275\u0275directiveInject(M.DomSanitizer))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-pan-example-1"]],decls:3,vars:4,consts:[[1,"container","tui-text_body-l"],[1,"circle",3,"tuiPan"]],template:function(o,l){1&o&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275elementStart(1,"div",1),e.\u0275\u0275listener("tuiPan",function(d){return l.onPan(d)}),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275advance(1),e.\u0275\u0275styleProp("transform",e.\u0275\u0275pipeBind1(2,2,l.transform$)))},directives:[f.g],pipes:[E.Ov],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:12rem;height:12rem;background-color:var(--tui-secondary);overflow:hidden}.circle[_ngcontent-%COMP%]{width:6rem;height:6rem;border-radius:100%;touch-action:none;background-color:var(--tui-support-01);box-shadow:.25rem .25rem .5rem rgba(34,60,80,.2);cursor:move;will-change:transform}"],changeDetection:0}),n})();var N=t(76349);function D(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18nStart(1,3),e.\u0275\u0275element(2,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"tui-doc-example",4),e.\u0275\u0275element(4,"tui-pan-example-1"),e.\u0275\u0275elementEnd()),2&n){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275property("content",o.example1)}}function F(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"ol",5),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,6),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,8),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",o.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",o.exampleHtml)}}let _=(()=>{class n{constructor(){this.exampleModule=t.e(37693).then(t.t.bind(t,37693,17)),this.exampleHtml=t.e(509).then(t.t.bind(t,509,17)),this.example1={TypeScript:t.e(9028).then(t.t.bind(t,9028,17)),HTML:t.e(57066).then(t.t.bind(t,57066,17)),LESS:t.e(14923).then(t.t.bind(t,14923,17))}}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["example-tui-pan"]],decls:3,vars:0,consts:function(){let a,o,l,s,d,u;return a=$localize`:␟7cd14ceae63b4aba71ab7935638f5d3b799f4f4b␟9128067536654850026:Pan`,o=$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`,l=$localize`:␟3cb7dfa255d6c41046d3cfa8bf454e2b46f4a170␟1665675151568039908:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiPan${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: The directive emits delta between mousemove / touchmove events. You can use it to change the coordinates of an element as in example below `,s=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,d=$localize`:␟6a3b47f295a88bb1c26bc0ed826becb749fcea6c␟6584529262933175347: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiPanModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our directive `,u=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header",a,"package","CDK","type","directives"],["pageTab",""],["pageTab",o],l,["id","base","heading",s,3,"content"],[1,"b-demo-steps"],d,["filename","myComponent.module.ts",3,"code"],u,["filename","myComponent.template.html",3,"code"]]},template:function(o,l){1&o&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,D,5,1,"ng-template",1),e.\u0275\u0275template(2,F,10,2,"ng-template",2),e.\u0275\u0275elementEnd())},directives:[S.q,C.n,p.f,O,N.c],encapsulation:2,changeDetection:0}),n})(),R=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[E.ez,T.N,c.fV,r.Bz.forChild((0,c.Ve)(_))]]}),n})()}}]);