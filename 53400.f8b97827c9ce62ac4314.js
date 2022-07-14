"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[53400],{53400:(N,O,o)=>{o.r(O),o.d(O,{ExampleTuiMobileDialogModule:()=>f});var m=o(12057),u=o(12021),d=o(46244),M=o(36518),s=o(37267),e=o(74788),S=o(88331),D=o(37159),T=o(57068),p=o(82605),C=o(43190),g=o(76189);let _=(()=>{class t{constructor(n,i){this.dialogService=n,this.alertService=i}show(){const n=["No thanks","Remind me later","Rate now"];this.dialogService.open("If you like this app, please take a moment to leave a positive rating.",{label:"What do you think?",actions:n}).pipe((0,C.w)(i=>this.alertService.open(`Selected: ${n[i]}`))).subscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(M.Ms),e.\u0275\u0275directiveInject(s.J9F))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["tui-mobile-dialog-example-1"]],features:[e.\u0275\u0275ProvidersFeature([{provide:p.FAH,useValue:!1}])],decls:4,vars:0,consts:function(){let l;return l=$localize`:␟a1ac22cbf3e8b8cd6fb77e5af9144ed418580c37␟1762522912961222062:Choose iPhone into DevTools to see iOS styled dialog.`,[l,["tuiButton","","type","button",3,"click"]]},template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,0),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"button",1),e.\u0275\u0275listener("click",function(){return i.show()}),e.\u0275\u0275text(3," Show dialog\n"),e.\u0275\u0275elementEnd())},directives:[g.v],encapsulation:2,changeDetection:0}),t})();var F=o(76349);function L(t,l){if(1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275i18n(1,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-example",4),e.\u0275\u0275element(3,"tui-mobile-dialog-example-1"),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("content",n.example1)}}function r(t,l){if(1&t&&(e.\u0275\u0275elementStart(0,"ol",5),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,6),e.\u0275\u0275element(4,"code"),e.\u0275\u0275element(5,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(6,"tui-doc-code",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"li"),e.\u0275\u0275elementStart(8,"p"),e.\u0275\u0275i18n(9,8),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(10,"tui-doc-code",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(6),e.\u0275\u0275property("code",n.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",n.exampleInsertComponent)}}let I=(()=>{class t{constructor(){this.example1={TypeScript:o.e(58603).then(o.bind(o,58603)),HTML:o.e(665).then(o.bind(o,665))},this.exampleModule=o.e(50487).then(o.bind(o,50487)),this.exampleInsertComponent=o.e(25743).then(o.bind(o,25743))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["example-mobile-dialog"]],decls:3,vars:0,consts:function(){let l,n,i,a,c;return l=$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`,n=$localize`:␟ee880be28e74945c5b1b23bf1cb0ac757599aec5␟9137228641915038521: Component for showing a dialog on mobile devices. It emulates appearance of native alerts on iOS and Android `,i=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,a=$localize`:␟4ac5c76bf1d0e6a6b56d25b951863735a838975a␟3639391024646583640: Import ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:TuiMobileDialogModule${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: to your ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:AppModule${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE:`,a=e.\u0275\u0275i18nPostprocess(a),c=$localize`:␟406023e62926140d7e1398ca0791caa8ac93ddfd␟8851886848912378945:Use it in component`,[["header","MobileDialog","package","ADDON-MOBILE","type","components"],["pageTab",""],["pageTab",l],n,["id","base","heading",i,3,"content"],[1,"b-demo-steps"],a,["filename","myComponent.module.ts",3,"code"],c,["filename","myComponent.template.html",3,"code"]]},template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,L,4,1,"ng-template",1),e.\u0275\u0275template(2,r,11,2,"ng-template",2),e.\u0275\u0275elementEnd())},directives:[S.q,D.n,T.f,_,F.c],encapsulation:2,changeDetection:0}),t})(),f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[m.ez,M.ru,s.fNO,d.fV,u.Bz.forChild((0,d.Ve)(I))]]}),t})()}}]);