"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[39655],{39655:(Y,C,t)=>{t.r(C),t.d(C,{ExampleTuiProgressCircleModule:()=>Q});var m=t(12057),M=t(12021),E=t(46244),f=t(38780),e=t(74788),x=t(88331),h=t(37159),y=t(57068),d=t(82605),F=t(25917),S=t(46797),g=t(88002),T=t(39761),O=t(70409),c=t(86214);let N=(()=>{class n{constructor(o){this.isCypress=o,this.max=100,this.value$=this.isCypress?(0,F.of)(30):(0,S.H)(300,200).pipe((0,g.U)(r=>r+30),(0,T.O)(30),(0,O.o)(r=>r<=this.max))}}return n.\u0275fac=function(o){return new(o||n)(e.\u0275\u0275directiveInject(d.B4V))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-progress-circle-example-1"]],decls:2,vars:4,consts:[["size","xl",3,"max","value"]],template:function(o,r){1&o&&(e.\u0275\u0275element(0,"tui-progress-circle",0),e.\u0275\u0275pipe(1,"async")),2&o&&e.\u0275\u0275property("max",r.max)("value",e.\u0275\u0275pipeBind1(1,2,r.value$)||0)},directives:[c.B],pipes:[m.Ov],encapsulation:2,changeDetection:0}),n})(),v=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-progress-circle-example-2"]],decls:4,vars:8,consts:[["size","xl",3,"max","value"],["size","l",3,"max","value"],["size","m",3,"max","value"],["size","s",3,"max","value"]],template:function(o,r){1&o&&(e.\u0275\u0275element(0,"tui-progress-circle",0),e.\u0275\u0275element(1,"tui-progress-circle",1),e.\u0275\u0275element(2,"tui-progress-circle",2),e.\u0275\u0275element(3,"tui-progress-circle",3)),2&o&&(e.\u0275\u0275property("max",100)("value",60),e.\u0275\u0275advance(1),e.\u0275\u0275property("max",100)("value",60),e.\u0275\u0275advance(1),e.\u0275\u0275property("max",100)("value",60),e.\u0275\u0275advance(1),e.\u0275\u0275property("max",100)("value",60))},directives:[c.B],styles:["[_nghost-%COMP%]{display:flex}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{margin-right:1rem}"],changeDetection:0}),n})();var L=t(45590);function $(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"label",1),e.\u0275\u0275elementStart(1,"span",2),e.\u0275\u0275text(2,"COMPLETED"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"span",3),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-progress-circle",4),e.\u0275\u0275elementEnd()),2&n){const o=a.ngIf,r=e.\u0275\u0275nextContext();e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate1("",o,"%"),e.\u0275\u0275advance(1),e.\u0275\u0275property("max",r.max)("value",o)}}let G=(()=>{class n{constructor(o){this.isCypress=o,this.max=100,this.value$=this.isCypress?(0,F.of)(30):(0,S.H)(300,200).pipe((0,g.U)(r=>r+30),(0,T.O)(30),(0,O.o)(r=>r<=this.max))}}return n.\u0275fac=function(o){return new(o||n)(e.\u0275\u0275directiveInject(d.B4V))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-progress-circle-example-3"]],decls:2,vars:3,consts:[["tuiProgressLabel","",4,"ngIf"],["tuiProgressLabel",""],[1,"text"],[1,"percent"],["size","xl",3,"max","value"]],template:function(o,r){1&o&&(e.\u0275\u0275template(0,$,6,3,"label",0),e.\u0275\u0275pipe(1,"async")),2&o&&e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(1,1,r.value$))},directives:[m.O5,L.v,c.B],pipes:[m.Ov],styles:[".text[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-03)}.percent[_ngcontent-%COMP%]{font:var(--tui-font-heading-6)}"],changeDetection:0}),n})(),I=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-progress-circle-example-4"]],decls:10,vars:8,consts:[["size","xl","color","url(#gradient)",3,"max","value"],["size","l",1,"progress",3,"max","value"],["size","m",1,"progress",3,"max","value"],["size","s",1,"progress",3,"max","value"],["width","0","height","0"],["id","gradient","gradientTransform","rotate(95)"],["offset","0%","stop-color","var(--tui-support-02)"],["offset","45%","stop-color","var(--tui-support-14)"],["offset","100%","stop-color","var(--tui-support-12)"]],template:function(o,r){1&o&&(e.\u0275\u0275element(0,"tui-progress-circle",0),e.\u0275\u0275element(1,"tui-progress-circle",1),e.\u0275\u0275element(2,"tui-progress-circle",2),e.\u0275\u0275element(3,"tui-progress-circle",3),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(4,"svg",4),e.\u0275\u0275elementStart(5,"defs"),e.\u0275\u0275elementStart(6,"linearGradient",5),e.\u0275\u0275element(7,"stop",6),e.\u0275\u0275element(8,"stop",7),e.\u0275\u0275element(9,"stop",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275property("max",4)("value",3),e.\u0275\u0275advance(1),e.\u0275\u0275property("max",4)("value",3),e.\u0275\u0275advance(1),e.\u0275\u0275property("max",4)("value",3),e.\u0275\u0275advance(1),e.\u0275\u0275property("max",4)("value",3))},directives:[c.B],styles:["[_nghost-%COMP%]{display:flex}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{margin-right:1rem}.progress[data-size=l][_ngcontent-%COMP%]{color:var(--tui-support-01)}.progress[data-size=m][_ngcontent-%COMP%]{color:var(--tui-support-03)}.progress[data-size=s][_ngcontent-%COMP%]{color:var(--tui-support-09)}"],changeDetection:0}),n})();var A=t(31823),z=t(23618),V=t(17023),b=t(76349);function U(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"dl"),e.\u0275\u0275i18nStart(1,7),e.\u0275\u0275elementStart(2,"dt"),e.\u0275\u0275element(3,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(4,"dd"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"tui-doc-example",8),e.\u0275\u0275element(6,"tui-progress-circle-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"tui-doc-example",9),e.\u0275\u0275element(8,"tui-progress-circle-example-2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"tui-doc-example",10),e.\u0275\u0275element(10,"tui-progress-circle-example-3"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"tui-doc-example",11),e.\u0275\u0275element(12,"tui-progress-circle-example-4"),e.\u0275\u0275elementEnd()),2&n){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("content",o.basicExample),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",o.sizesExample),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",o.labelExample),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",o.colorsExample)}}function J(n,a){1&n&&(e.\u0275\u0275i18nStart(0,17),e.\u0275\u0275element(1,"code"),e.\u0275\u0275element(2,"code"),e.\u0275\u0275i18nEnd())}function X(n,a){1&n&&(e.\u0275\u0275i18nStart(0,18),e.\u0275\u0275element(1,"p"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275element(3,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd())}function H(n,a){1&n&&e.\u0275\u0275i18n(0,19)}function B(n,a){1&n&&(e.\u0275\u0275i18nStart(0,20),e.\u0275\u0275elementStart(1,"p"),e.\u0275\u0275element(2,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd())}function W(n,a){if(1&n){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo"),e.\u0275\u0275element(1,"tui-progress-circle",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-documentation"),e.\u0275\u0275template(3,J,3,0,"ng-template",13),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().value=l}),e.\u0275\u0275template(4,X,4,0,"ng-template",14),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().max=l}),e.\u0275\u0275template(5,H,1,0,"ng-template",15),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().size=l}),e.\u0275\u0275template(6,B,3,0,"ng-template",16),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().color=l}),e.\u0275\u0275elementEnd()}if(2&n){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("value",o.value)("max",o.max)("size",o.size)("color",o.color),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValue",o.value),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",o.max),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",o.sizeVariants)("documentationPropertyValue",o.size),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",o.colorVariants)("documentationPropertyValue",o.color)}}function j(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"ol",21),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,22),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,24),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",25),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",o.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",o.exampleHtml)}}let K=(()=>{class n{constructor(){this.value=6,this.max=10,this.sizeVariants=["s","m","l","xl"],this.size=this.sizeVariants[1],this.colorVariants=["var(--tui-primary)","lightskyblue","#3682db","rgba(74, 201, 155, 1)","url(#gradient)"],this.color=this.colorVariants[0],this.basicExample={HTML:t.e(15331).then(t.t.bind(t,15331,17)),TypeScript:t.e(45121).then(t.t.bind(t,45121,17))},this.sizesExample={HTML:t.e(46223).then(t.t.bind(t,46223,17)),LESS:t.e(82190).then(t.t.bind(t,82190,17)),TypeScript:t.e(82413).then(t.t.bind(t,82413,17))},this.labelExample={HTML:t.e(47148).then(t.t.bind(t,47148,17)),LESS:t.e(39317).then(t.t.bind(t,39317,17)),TypeScript:t.e(92633).then(t.t.bind(t,92633,17))},this.colorsExample={HTML:t.e(27979).then(t.t.bind(t,27979,17)),LESS:t.e(26481).then(t.t.bind(t,26481,17)),TypeScript:t.e(1322).then(t.t.bind(t,1322,17))},this.exampleModule=t.e(30179).then(t.t.bind(t,30179,17)),this.exampleHtml=t.e(89064).then(t.t.bind(t,89064,17))}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["example-tui-progress-circle"]],decls:10,vars:0,consts:function(){let a,o,r,l,s,p,u,P,R,_,D;return a=$localize`:␟77b397b33e9cd1d22dcfb87a2facf3e2a9ab2b97␟9220911365799277601:${"\ufffd#2\ufffd"}:START_TAG_DT:${"\ufffd#3\ufffd"}:START_TAG_CODE:<tui-progress-circle />${"\ufffd/#3\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#2\ufffd"}:CLOSE_TAG_DT:${"\ufffd#4\ufffd"}:START_TAG_DD: is a component to visually represent the completion of a process or operation (as a partially filled circle/ring). It shows how much has been completed and how much remains. ${"\ufffd/#4\ufffd"}:CLOSE_TAG_DD:`,o=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,r=$localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`,l=$localize`:␟43cf922b4e2e453f2fcd8e43be9fd18e96f9b74c␟8720306042838547123:With label`,s=$localize`:␟e93acd761801b3f2077278b282163a9c03283b8c␟5267754967054916445:Colors`,p=$localize`:␟ff15d3bc09a3b1dcddd1094a4120e7f6a39dba0f␟7359913426686326253: This property specifies how much of the task that has been completed. It must be a valid floating point number between 0 and ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:max${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: , or between 0 and 1 if ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:max${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: is omitted. `,p=e.\u0275\u0275i18nPostprocess(p),u=$localize`:␟dd8ee06f37b58d3130157a67e55b27b6a81efbb1␟3982028735468302053:${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_PARAGRAPH:This property describes how much work the task indicated by the progress element requires.${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_PARAGRAPH:${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_PARAGRAPH: The default value is ${"\ufffd#3\ufffd"}:START_TAG_CODE:1${"\ufffd/#3\ufffd"}:CLOSE_TAG_CODE: . ${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_PARAGRAPH:`,u=e.\u0275\u0275i18nPostprocess(u),P=$localize`:␟d2c6b778ff1deaef80c19bdbca3f34ea9c829704␟2635824333932204053: Size of the circle. `,R=$localize`:␟b64cbf14678cc3f5a296127f19e7fe1eac20ddbf␟8131965803907340765: Color of the progress indicator. ${"\ufffd#1\ufffd"}:START_PARAGRAPH: We recommend set solid color via CSS-property ${"\ufffd#2\ufffd"}:START_TAG_CODE:color${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: . ${"\ufffd/#1\ufffd"}:CLOSE_PARAGRAPH:`,_=$localize`:␟b2342227392ebea4df6aa6cba85e57fb10b5feb9␟1544037559221110858: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiProgressModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,D=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","ProgressCircle","package","KIT","path","kit/components/progress/progress-circle"],["pageTab",""],["width","0","height","0"],["id","gradient","gradientTransform","rotate(95)"],["offset","0%","stop-color","var(--tui-support-02)"],["offset","45%","stop-color","var(--tui-support-14) "],["offset","100%","stop-color","var(--tui-support-12)"],a,["id","basic","heading",o,3,"content"],["id","size","heading",r,3,"content"],["id","label","heading",l,3,"content"],["id","colors","heading",s,3,"content"],[3,"value","max","size","color"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","color","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],p,u,P,R,[1,"b-demo-steps"],_,["filename","myComponent.module.ts",3,"code"],D,["filename","myComponent.template.html",3,"code"]]},template:function(o,r){1&o&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,U,13,4,"ng-template",1),e.\u0275\u0275template(2,W,7,10,"ng-template",1),e.\u0275\u0275template(3,j,10,2,"ng-template",1),e.\u0275\u0275elementEnd(),e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(4,"svg",2),e.\u0275\u0275elementStart(5,"defs"),e.\u0275\u0275elementStart(6,"linearGradient",3),e.\u0275\u0275element(7,"stop",4),e.\u0275\u0275element(8,"stop",5),e.\u0275\u0275element(9,"stop",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd())},directives:[x.q,h.n,y.f,N,v,G,I,A.F,c.B,z.z,V.B,b.c],styles:["dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%]{display:inline;margin:0}"],changeDetection:0}),n})(),Q=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[m.ez,E.fV,f.V5U,M.Bz.forChild((0,E.Ve)(K))]]}),n})()}}]);