"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[36378],{36378:(Y,C,n)=>{n.r(C),n.d(C,{ExampleTuiArcChartModule:()=>W});var g=n(12057),c=n(23738),_=n(12021),S=n(50179),h=n(55970),d=n(46244),x=n(38780),e=n(74788),M=n(88331),v=n(37159),O=n(57068),f=n(65009),y=n(10383),u=n(48001),P=n(16996);let I=(()=>{class a{constructor(){this.value=[40,30,20,10],this.activeItemIndex=NaN}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["tui-arc-chart-example-1"]],decls:13,vars:8,consts:[[1,"b-form",3,"ngModel","ngModelChange"],[1,"wrapper"],["size","m",1,"tui-space_right-4",3,"value","activeItemIndex","activeItemIndexChange"],["size","l",1,"tui-space_right-4",3,"value","activeItemIndex","activeItemIndexChange"],["size","xl",1,"tui-space_right-4",3,"value","activeItemIndex","activeItemIndexChange"],[3,"value"]],template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"tui-input-count",0),e.\u0275\u0275listener("ngModelChange",function(o){return l.activeItemIndex=o}),e.\u0275\u0275text(1," activeItemIndex\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"div",1),e.\u0275\u0275elementStart(3,"tui-arc-chart",2),e.\u0275\u0275listener("activeItemIndexChange",function(o){return l.activeItemIndex=o}),e.\u0275\u0275text(4," Total value "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"tui-arc-chart",3),e.\u0275\u0275listener("activeItemIndexChange",function(o){return l.activeItemIndex=o}),e.\u0275\u0275text(6," Total value "),e.\u0275\u0275elementStart(7,"div"),e.\u0275\u0275text(8,"Label"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"tui-arc-chart",4),e.\u0275\u0275listener("activeItemIndexChange",function(o){return l.activeItemIndex=o}),e.\u0275\u0275element(10,"tui-money",5),e.\u0275\u0275elementStart(11,"div"),e.\u0275\u0275text(12,"Not bad!"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("ngModel",l.activeItemIndex),e.\u0275\u0275advance(3),e.\u0275\u0275property("value",l.value)("activeItemIndex",l.activeItemIndex),e.\u0275\u0275advance(2),e.\u0275\u0275property("value",l.value)("activeItemIndex",l.activeItemIndex),e.\u0275\u0275advance(4),e.\u0275\u0275property("value",l.value)("activeItemIndex",l.activeItemIndex),e.\u0275\u0275advance(1),e.\u0275\u0275property("value",123456))},directives:[f.E,y.a,c.NgControlStatus,c.NgModel,u.O,P.o],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:1rem;--tui-chart-0: var(--tui-support-12);--tui-chart-1: var(--tui-support-01);--tui-chart-2: var(--tui-support-03);--tui-chart-3: var(--tui-support-09)}"],changeDetection:0}),a})();var N=n(82605);const H=function(){return[40]},L=function(){return[20]};let D=(()=>{class a{constructor(){this.labels=["Food","Cafe","Open Source","Taxi","other"],this.value=[13769,12367,10172,3018,2592],this.sum=(0,N.Smz)(...this.value)}getValue(t){return Number.isNaN(t)?this.sum:this.value[t]}getLabel(t){return Number.isNaN(t)?"Total":this.labels[t]}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["tui-arc-chart-example-2"]],decls:6,vars:4,consts:[[1,"wrapper"],["size","l",3,"value"],["size","l","minLabel","","maxLabel","",1,"stacked",3,"value"]],template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275element(1,"tui-arc-chart",1),e.\u0275\u0275elementStart(2,"tui-arc-chart",2),e.\u0275\u0275text(3," +20% "),e.\u0275\u0275elementStart(4,"div"),e.\u0275\u0275text(5,"For filling in last name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("value",e.\u0275\u0275pureFunction0(2,H)),e.\u0275\u0275advance(1),e.\u0275\u0275property("value",e.\u0275\u0275pureFunction0(3,L)))},directives:[u.O],styles:[".wrapper[_ngcontent-%COMP%]{position:relative;--tui-chart-0: var(--tui-support-03)}.stacked[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;--tui-secondary: transparent;--tui-chart-0: var(--tui-support-04)}"],changeDetection:0}),a})();var $=n(31823),V=n(23618),z=n(17023),F=n(76349);function b(a,r){if(1&a&&(e.\u0275\u0275elementStart(0,"tui-doc-example",2),e.\u0275\u0275element(1,"tui-arc-chart-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-example",3),e.\u0275\u0275element(3,"tui-arc-chart-example-2"),e.\u0275\u0275elementEnd()),2&a){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("content",t.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example2)}}function G(a,r){1&a&&e.\u0275\u0275i18n(0,11)}function X(a,r){1&a&&e.\u0275\u0275i18n(0,12)}function J(a,r){1&a&&e.\u0275\u0275i18n(0,13)}function U(a,r){1&a&&e.\u0275\u0275i18n(0,14)}function B(a,r){1&a&&e.\u0275\u0275i18n(0,15)}function j(a,r){1&a&&e.\u0275\u0275i18n(0,16)}function Z(a,r){if(1&a){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo"),e.\u0275\u0275elementStart(1,"tui-arc-chart",4),e.\u0275\u0275listener("activeItemIndexChange",function(i){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().activeItemIndex=i}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-documentation"),e.\u0275\u0275template(3,G,1,0,"ng-template",5),e.\u0275\u0275listener("documentationPropertyValueChange",function(i){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().max=i}),e.\u0275\u0275template(4,X,1,0,"ng-template",6),e.\u0275\u0275listener("documentationPropertyValueChange",function(i){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().maxLabel=i}),e.\u0275\u0275template(5,J,1,0,"ng-template",7),e.\u0275\u0275listener("documentationPropertyValueChange",function(i){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().minLabel=i}),e.\u0275\u0275template(6,U,1,0,"ng-template",8),e.\u0275\u0275listener("documentationPropertyValueChange",function(i){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().size=i}),e.\u0275\u0275template(7,B,1,0,"ng-template",9),e.\u0275\u0275listener("documentationPropertyValueChange",function(i){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().value=i}),e.\u0275\u0275template(8,j,1,0,"ng-template",10),e.\u0275\u0275listener("documentationPropertyValueChange",function(i){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().activeItemIndex=i}),e.\u0275\u0275elementEnd()}if(2&a){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("max",t.max)("maxLabel",t.maxLabel)("minLabel",t.minLabel)("size",t.size)("value",t.value)("activeItemIndex",t.activeItemIndex),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValues",t.maxVariants)("documentationPropertyValue",t.max),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.maxLabel),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.minLabel),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.sizeVariants)("documentationPropertyValue",t.size),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.valueVariants)("documentationPropertyValue",t.value),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.activeItemIndex)}}function K(a,r){if(1&a&&(e.\u0275\u0275elementStart(0,"ol",17),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,18),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",19),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,20),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",21),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&a){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",t.exampleHtml)}}let Q=(()=>{class a{constructor(){this.exampleModule=n.e(85776).then(n.t.bind(n,85776,17)),this.exampleHtml=n.e(1557).then(n.t.bind(n,1557,17)),this.example1={TypeScript:n.e(96278).then(n.t.bind(n,96278,17)),HTML:n.e(57749).then(n.t.bind(n,57749,17)),LESS:n.e(63570).then(n.t.bind(n,63570,17))},this.example2={TypeScript:n.e(6726).then(n.t.bind(n,66156,17)),HTML:n.e(35868).then(n.t.bind(n,35868,17)),LESS:n.e(36077).then(n.t.bind(n,36077,17))},this.valueVariants=[[42],[40,30,20,10],[13769,10172,3018,2592]],this.value=this.valueVariants[0],this.maxVariants=[100,1e4,5e4],this.max=this.maxVariants[0],this.sizeVariants=["m","l","xl"],this.size=this.sizeVariants[0],this.minLabel="0%",this.maxLabel="100%",this.activeItemIndex=NaN}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["example-tui-arc-chart"]],decls:4,vars:0,consts:function(){let r,t,l,i,o,p,s,T,E,A,R;return r=$localize`:␟37b713ce5aea22bdc50004ec0f09e17107b9787c␟433977682549774777:ArcChart`,t=$localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`,l=$localize`:␟acad9ee00b2dbfb003d340797809ce9fe3e1ec3d␟1991766769963454924:Stacked`,i=$localize`:␟5f25cd8a9234b487725d1fa48d60e56ef72a2373␟5999590176850087451: Maximum value `,o=$localize`:␟17d58754566edc76573ee313c71d6ecc8dca894b␟366902072652186200: Label for maximum value `,p=$localize`:␟e606409e619e6757d5e8cc2834019a4604d04a87␟4901338580057825614: Label for minimum value `,s=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,T=$localize`:␟616f8c85cb0c4ed37b94e8ba9c52e117da1a90c3␟206010917694362071: Value `,E=$localize`:␟c479266fb0898c58ca78245acf0a5e0907b25eb2␟4355316937676670930: Index of selected arc `,A=$localize`:␟2779bd2d7dd07772646294f6006a05d0ab57543c␟5154896617161139394: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiArcChartModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,R=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header",r,"package","ADDON-CHARTS","type","components"],["pageTab",""],["id","sizes","heading",t,3,"content"],["id","stacked","heading",l,3,"content"],[1,"chart",3,"max","maxLabel","minLabel","size","value","activeItemIndex","activeItemIndexChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxLabel","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","minLabel","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeXL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","readonly number[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","activeItemIndex","documentationPropertyMode","input-output","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],i,o,p,s,T,E,[1,"b-demo-steps"],A,["filename","myComponent.module.ts",3,"code"],R,["filename","myComponent.template.html",3,"code"]]},template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,b,4,2,"ng-template",1),e.\u0275\u0275template(2,Z,9,15,"ng-template",1),e.\u0275\u0275template(3,K,10,2,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[M.q,v.n,O.f,I,D,$.F,u.O,V.z,z.B,F.c],styles:[".chart[_ngcontent-%COMP%]{margin:0 auto}"],changeDetection:0}),a})(),W=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=e.\u0275\u0275defineInjector({imports:[[g.ez,_.Bz,c.FormsModule,x.$HZ,S.Or,h.DC,d.fV,_.Bz.forChild((0,d.Ve)(Q))]]}),a})()}}]);