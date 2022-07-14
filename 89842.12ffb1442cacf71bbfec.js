"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[89842],{89842:(K,d,t)=>{t.r(d),t.d(d,{ExampleTuiTableBarModule:()=>H});var g=t(12057),B=t(23738),f=t(12021),R=t(55970),c=t(46244),u=t(37267),E=t(38780),b=t(89570),p=t(40249),A=t(79765),T=t(75319),M=t(46782),e=t(74788),O=t(88331),D=t(37159),y=t(57068),_=t(76189),h=t(30644);const x=["tableBarTemplate"];function L(o,a){if(1&o){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",2),e.\u0275\u0275elementStart(1,"button",3),e.\u0275\u0275text(2," Save "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"button",4),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(n).$implicit()}),e.\u0275\u0275text(4," Cancel "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"button",5),e.\u0275\u0275text(6," Delete "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}}let $=(()=>{class o{constructor(n){this.tableBarsService=n,this.tableBarTemplate="",this.subscription=new T.w}showTableBar(){this.subscription.unsubscribe(),this.subscription=this.tableBarsService.open(this.tableBarTemplate||"",{hasCloseButton:!0,adaptive:!0}).subscribe()}}return o.\u0275fac=function(n){return new(n||o)(e.\u0275\u0275directiveInject(p.A6))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-table-bar-example-1"]],viewQuery:function(n,i){if(1&n&&e.\u0275\u0275viewQuery(x,5),2&n){let l;e.\u0275\u0275queryRefresh(l=e.\u0275\u0275loadQuery())&&(i.tableBarTemplate=l.first)}},decls:4,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"],["tableBarTemplate",""],["tuiMode","onDark",1,"content"],["tuiButton","","type","button","size","m"],["tuiButton","","type","button","appearance","flat","size","m",1,"tui-space_left-3",3,"click"],["tuiButton","","type","button","appearance","outline","size","m","icon","tuiIconTrashLarge",1,"delete-button"]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"button",0),e.\u0275\u0275listener("click",function(){return i.showTableBar()}),e.\u0275\u0275text(1," Show TableBar\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(2,L,7,0,"ng-template",null,1,e.\u0275\u0275templateRefExtractor))},directives:[_.v,h.w],styles:[".content[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.875rem 0}.delete-button[_ngcontent-%COMP%]{margin-left:auto}"],changeDetection:0}),o})();var v=t(23618),P=t(17023),N=t(76349);const I=["tableBarTemplate"];function V(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-example",3),e.\u0275\u0275element(3,"tui-table-bar-example-1"),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("content",n.example1)}}function G(o,a){1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"Some template"),e.\u0275\u0275elementEnd())}function U(o,a){1&o&&e.\u0275\u0275i18n(0,10)}function z(o,a){1&o&&e.\u0275\u0275i18n(0,11)}function J(o,a){1&o&&e.\u0275\u0275i18n(0,12)}function X(o,a){if(1&o){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275elementStart(1,"button",4),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().showTableBar()}),e.\u0275\u0275text(2," Show tableBar "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"button",5),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().destroy()}),e.\u0275\u0275text(4," Hide tableBar "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(5,G,2,0,"ng-template",null,6,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275element(7,"br"),e.\u0275\u0275elementStart(8,"tui-doc-documentation"),e.\u0275\u0275template(9,U,1,0,"ng-template",7),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().adaptive=l}),e.\u0275\u0275template(10,z,1,0,"ng-template",8),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().hasCloseButton=l}),e.\u0275\u0275template(11,J,1,0,"ng-template",9),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().mode=l}),e.\u0275\u0275elementEnd()}if(2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(9),e.\u0275\u0275property("documentationPropertyValue",n.adaptive),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",n.hasCloseButton),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",n.modeVariants)("documentationPropertyValue",n.mode)}}function Q(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"ol",13),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,14),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",15),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18nStart(8,16),e.\u0275\u0275element(9,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(10,"tui-doc-code",15),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"li"),e.\u0275\u0275elementStart(12,"p"),e.\u0275\u0275i18nStart(13,17),e.\u0275\u0275element(14,"code"),e.\u0275\u0275element(15,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(16,"tui-doc-code",18),e.\u0275\u0275element(17,"tui-doc-code",19),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"li"),e.\u0275\u0275elementStart(19,"p"),e.\u0275\u0275i18nStart(20,20),e.\u0275\u0275element(21,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(22,"tui-doc-code",21),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",n.exampleModule),e.\u0275\u0275advance(5),e.\u0275\u0275property("code",n.exampleHtml),e.\u0275\u0275advance(6),e.\u0275\u0275property("code",n.exampleServiceUsageHtml),e.\u0275\u0275advance(1),e.\u0275\u0275property("code",n.exampleServiceUsage),e.\u0275\u0275advance(5),e.\u0275\u0275property("code",n.exampleLazyModule)}}let j=(()=>{class o{constructor(n){this.tableBarsService=n,this.destroy$=new A.xQ,this.tableBarTemplate="",this.exampleServiceUsage=t.e(23613).then(t.bind(t,23613)),this.exampleServiceUsageHtml=t.e(80437).then(t.bind(t,80437)),this.exampleLazyModule=t.e(55458).then(t.bind(t,55458)),this.exampleModule=t.e(52837).then(t.bind(t,52837)),this.exampleHtml=t.e(20010).then(t.bind(t,20010)),this.example1={TypeScript:t.e(54013).then(t.bind(t,98498)),HTML:t.e(12330).then(t.bind(t,12330)),LESS:t.e(47065).then(t.t.bind(t,47065,17))},this.modeVariants=["onLight","onDark"],this.mode=this.modeVariants[0],this.adaptive=!1,this.hasCloseButton=!1,this.subscription=new T.w}showTableBar(){this.subscription.unsubscribe(),this.subscription=this.tableBarsService.open(this.tableBarTemplate||"",{adaptive:this.adaptive,mode:this.mode,hasCloseButton:this.hasCloseButton}).pipe((0,M.R)(this.destroy$)).subscribe()}destroy(){this.destroy$.next()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return o.\u0275fac=function(n){return new(n||o)(e.\u0275\u0275directiveInject(p.A6))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["example-tui-table-bar"]],viewQuery:function(n,i){if(1&n&&e.\u0275\u0275viewQuery(I,5),2&n){let l;e.\u0275\u0275queryRefresh(l=e.\u0275\u0275loadQuery())&&(i.tableBarTemplate=l.first)}},decls:4,vars:0,consts:function(){let a,n,i,l,m,C,S,r,F;return a=$localize`:␟d4eaacf31ad166bfe74dbf267afaff7d767d4dad␟7392151570764225525: It is an element on the bottom of screen to show actions by multiselect of some items. It works with custom content. `,n=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,i=$localize`:␟5e641f8103cca3a413f65da8c27fcc74a78fbef3␟5646260285050734970: Adaprive content `,l=$localize`:␟0508167899eda99f73e069ef49027af94e6b0328␟4329350149148955327: Enable close button `,m=$localize`:␟cdcabff292f0314e30e6f31102dd5ede8bb860a0␟1527305502164610498: Light / dark mode `,C=$localize`:␟33b59d28b627891220e6c360c8ffb07eef6c76cb␟5586136887716454770: Add ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiTableBarsHostModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into your app.module `,S=$localize`:␟066cf82b786e3393ee3efed2ca0016a89d7a4357␟5654054825567970286: Add ${"\ufffd#9\ufffd"}:START_TAG_CODE:tui-table-bars-host${"\ufffd/#9\ufffd"}:CLOSE_TAG_CODE: into your app.template `,r=$localize`:␟b7d425f4c801f0a1d193d06c1862a5bc0cc48c14␟2388724752770660394: Use ${"[\ufffd#14\ufffd|\ufffd#15\ufffd]"}:START_TAG_CODE:open${"[\ufffd/#14\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_CODE: method and subscribe to returened ${"[\ufffd#14\ufffd|\ufffd#15\ufffd]"}:START_TAG_CODE:Observable${"[\ufffd/#14\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_CODE:`,r=e.\u0275\u0275i18nPostprocess(r),F=$localize`:␟ba1892794b314f679ac905e2ef9357d65d51e41e␟282224705145462981: If you use component in lazy loading modules, do not forget to pass into ${"\ufffd#21\ufffd"}:START_TAG_CODE:new PolymorpheusComponent Injector${"\ufffd/#21\ufffd"}:CLOSE_TAG_CODE: of component where you open table bar `,[["header","TableBarsService","package","ADDON-TABLEBARS","path","addon-tablebars/services/table-bars.service.ts"],["pageTab",""],a,["id","base","heading",n,3,"content"],["tuiButton","","type","button","size","m",1,"tui-space_right-2",3,"click"],["tuiButton","","type","button","size","m",3,"click"],["tableBarTemplate",""],["documentationPropertyName","adaptive","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasCloseButton","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","mode","documentationPropertyType","TuiBrightness",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],i,l,m,[1,"b-demo-steps"],C,["filename","app.module.ts",3,"code"],S,r,["filename","myComponent.template.html",3,"code"],["filename","myComponent.component.ts",3,"code"],F,["filename","customNotification.component.ts",3,"code"]]},template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,V,4,1,"ng-template",1),e.\u0275\u0275template(2,X,12,4,"ng-template",1),e.\u0275\u0275template(3,Q,23,5,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[O.q,D.n,y.f,$,_.v,v.z,P.B,N.c],styles:[".label[_ngcontent-%COMP%]{width:6.25rem}"],changeDetection:0}),o})(),H=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[[g.ez,u.fNO,R.DC,b.wq,E.Ltw,E.QfL,u.jzK,B.FormsModule,u.zw7,c.fV,f.Bz.forChild((0,c.Ve)(j))]]}),o})()}}]);