"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[70314],{70314:(Y,c,o)=>{o.r(c),o.d(c,{ExampleTuiPaginationModule:()=>Q});var S=o(12057),p=o(23738),f=o(12021),r=o(46244),u=o(38780),A=o(89570),e=o(74788),x=o(88331),I=o(37159),y=o(57068),s=o(44056),g=o(31639);let h=(()=>{class n{constructor(){this.length=64,this.index=10}goToPage(t){this.index=t,console.info("New page:",t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-pagination-example-1"]],decls:2,vars:5,consts:[["secondary","index","size","m",1,"slider",3,"max","quantum","ngModel","ngModelChange"],[3,"length","index","indexChange"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"tui-input-slider",0),e.\u0275\u0275listener("ngModelChange",function(l){return i.index=l}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(1,"tui-pagination",1),e.\u0275\u0275listener("indexChange",function(l){return i.goToPage(l)}),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("max",i.length-1)("quantum",1)("ngModel",i.index),e.\u0275\u0275advance(1),e.\u0275\u0275property("length",i.length)("index",i.index))},directives:[s.h,p.NgControlStatus,p.NgModel,g.r],styles:[".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],changeDetection:0}),n})(),R=(()=>{class n{constructor(){this.activePadding=2}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-pagination-example-2"]],decls:2,vars:6,consts:[["secondary","activePadding","size","m",1,"slider",3,"max","quantum","ngModel","ngModelChange"],[3,"activePadding","length","index"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"tui-input-slider",0),e.\u0275\u0275listener("ngModelChange",function(l){return i.activePadding=l}),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(1,"tui-pagination",1)),2&t&&(e.\u0275\u0275property("max",6)("quantum",1)("ngModel",i.activePadding),e.\u0275\u0275advance(1),e.\u0275\u0275property("activePadding",i.activePadding)("length",64)("index",10))},directives:[s.h,p.NgControlStatus,p.NgModel,g.r],styles:[".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],changeDetection:0}),n})(),G=(()=>{class n{constructor(){this.sidePadding=3}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-pagination-example-3"]],decls:2,vars:6,consts:[["secondary","sidePadding","size","m",1,"slider",3,"max","quantum","ngModel","ngModelChange"],[3,"sidePadding","length","index"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"tui-input-slider",0),e.\u0275\u0275listener("ngModelChange",function(l){return i.sidePadding=l}),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(1,"tui-pagination",1)),2&t&&(e.\u0275\u0275property("max",6)("quantum",1)("ngModel",i.sidePadding),e.\u0275\u0275advance(1),e.\u0275\u0275property("sidePadding",i.sidePadding)("length",64)("index",10))},directives:[s.h,p.NgControlStatus,p.NgModel,g.r],styles:[".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],changeDetection:0}),n})();function $(n,a){if(1&n&&e.\u0275\u0275text(0),2&n){const t=a.$implicit,i=e.\u0275\u0275nextContext();e.\u0275\u0275textInterpolate1(" ",i.days[t],"\n")}}let v=(()=>{class n{constructor(){this.days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-pagination-example-4"]],decls:3,vars:2,consts:[[3,"length","content"],["test",""]],template:function(t,i){if(1&t&&(e.\u0275\u0275element(0,"tui-pagination",0),e.\u0275\u0275template(1,$,1,1,"ng-template",null,1,e.\u0275\u0275templateRefExtractor)),2&t){const d=e.\u0275\u0275reference(2);e.\u0275\u0275property("length",7)("content",d)}},directives:[g.r],encapsulation:2,changeDetection:0}),n})();var D=o(31823),L=o(23618),V=o(17023),F=o(76349);function z(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-example",3),e.\u0275\u0275element(3,"tui-pagination-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"tui-doc-example",4),e.\u0275\u0275element(5,"tui-pagination-example-2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"tui-doc-example",5),e.\u0275\u0275element(7,"tui-pagination-example-3"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"tui-doc-example",6),e.\u0275\u0275element(9,"tui-pagination-example-4"),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example2),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example3),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example4)}}function J(n,a){1&n&&e.\u0275\u0275i18n(0,14)}function U(n,a){1&n&&e.\u0275\u0275i18n(0,15)}function X(n,a){1&n&&e.\u0275\u0275i18n(0,16)}function b(n,a){1&n&&e.\u0275\u0275i18n(0,17)}function H(n,a){1&n&&e.\u0275\u0275i18n(0,18)}function B(n,a){1&n&&e.\u0275\u0275i18n(0,19)}function j(n,a){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo"),e.\u0275\u0275elementStart(1,"tui-pagination",7),e.\u0275\u0275listener("indexChange",function(d){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().index=d}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-documentation"),e.\u0275\u0275template(3,J,1,0,"ng-template",8),e.\u0275\u0275listener("documentationPropertyValueChange",function(d){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().focusable=d}),e.\u0275\u0275template(4,U,1,0,"ng-template",9),e.\u0275\u0275listener("documentationPropertyValueChange",function(d){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().index=d}),e.\u0275\u0275template(5,X,1,0,"ng-template",10),e.\u0275\u0275listener("documentationPropertyValueChange",function(d){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().length=d}),e.\u0275\u0275template(6,b,1,0,"ng-template",11),e.\u0275\u0275listener("documentationPropertyValueChange",function(d){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().size=d}),e.\u0275\u0275template(7,H,1,0,"ng-template",12),e.\u0275\u0275listener("documentationPropertyValueChange",function(d){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().activePadding=d}),e.\u0275\u0275template(8,B,1,0,"ng-template",13),e.\u0275\u0275listener("documentationPropertyValueChange",function(d){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().sidePadding=d}),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("focusable",t.focusable)("length",t.length)("size",t.size)("activePadding",t.activePadding)("sidePadding",t.sidePadding)("index",t.index),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValue",t.focusable),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.index),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.length),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.sizeVariants)("documentationPropertyValue",t.size),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.activePadding),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.sidePadding)}}function W(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"ol",20),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,21),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,23),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",24),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",t.exampleHtml)}}let K=(()=>{class n{constructor(){this.exampleModule=o.e(90198).then(o.t.bind(o,90198,17)),this.exampleHtml=o.e(74636).then(o.t.bind(o,74636,17)),this.example1={TypeScript:o.e(91571).then(o.t.bind(o,91571,17)),HTML:o.e(90874).then(o.t.bind(o,90874,17)),LESS:o.e(85089).then(o.t.bind(o,85089,17))},this.example2={TypeScript:o.e(57931).then(o.t.bind(o,57931,17)),HTML:o.e(27305).then(o.t.bind(o,27305,17)),LESS:o.e(85089).then(o.t.bind(o,85089,17))},this.example3={TypeScript:o.e(60346).then(o.t.bind(o,60346,17)),HTML:o.e(28520).then(o.t.bind(o,28520,17)),LESS:o.e(85089).then(o.t.bind(o,85089,17))},this.example4={TypeScript:o.e(29433).then(o.t.bind(o,29433,17)),HTML:o.e(87293).then(o.t.bind(o,87293,17))},this.focusable=!0,this.index=0,this.length=8,this.sizeVariants=["s","m"],this.size=this.sizeVariants[1],this.activePadding=1,this.sidePadding=1}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["example-tui-pagination"]],decls:4,vars:0,consts:function(){let a,t,i,d,l,T,_,P,E,N,O,C,M;return a=$localize`:␟661de1abe57e9dcf4ef0b9887972092fa3139ec3␟4234058188529646153:Pagination component enables the user to select a specific page from a range of pages`,t=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,i=$localize`:␟7447e99a313dfd660dfdac371c1790c906afdfbc␟1343291924581059799:Visible pages around active`,d=$localize`:␟47ebd404b33f1353e628e1beaab432a604aa0267␟1450301538176787808:Visible edge pages`,l=$localize`:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`,T=$localize`:␟30781cbf047ad38e186ad68e325b742909287b00␟1810512560805883949: Accepts focus with keyboard `,_=$localize`:␟bf69fc21a86418012f148932ebe5eb91bcae5b45␟6937522081049060052: Active page index `,P=$localize`:␟7188b68f4c0ede7f60421cd661e5d0791220c304␟4207451728711936955: Total pages count `,E=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,N=$localize`:␟6ce429b0b2501d96eefb0c6f3c52e414e14909ef␟7208302007968196085: Amount of visible pages around active page `,O=$localize`:␟ce7a11e7e6703260dd3c380e666f8a12a54128ff␟8219649223317915483: Amount of visible pages at the edges `,C=$localize`:␟efadc8d4431e8d89cddff062a3ea73f171e1b8db␟4453511622032715639: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiPaginationModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,M=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","Pagination","package","KIT","type","components"],["pageTab",""],a,["id","base","heading",t,3,"content"],["id","around","heading",i,3,"content"],["id","edges","heading",d,3,"content"],["id","custom","heading",l,3,"content"],[3,"focusable","length","size","activePadding","sidePadding","index","indexChange"],["documentationPropertyName","focusable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","index","documentationPropertyMode","input-output","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","length","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","activePadding","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","sidePadding","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],T,_,P,E,N,O,[1,"b-demo-steps"],C,["filename","myComponent.module.ts",3,"code"],M,["filename","myComponent.template.html",3,"code"]]},template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,z,10,4,"ng-template",1),e.\u0275\u0275template(2,j,9,13,"ng-template",1),e.\u0275\u0275template(3,W,10,2,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[x.q,I.n,y.f,h,R,G,v,D.F,g.r,L.z,V.B,F.c],encapsulation:2,changeDetection:0}),n})(),Q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[u.fT6,u.iwW,u.aJT,S.ez,u.Ltw,p.FormsModule,p.ReactiveFormsModule,r.fV,f.Bz.forChild((0,r.Ve)(K)),A.wq]]}),n})()}}]);