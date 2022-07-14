"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[44247],{44247:(te,g,t)=>{t.r(g),t.d(g,{ExampleTuiProgressBarModule:()=>ee});var m=t(12057),N=t(12021),F=t(46244),$=t(37267),x=t(38780),e=t(74788),A=t(88331),y=t(37159),h=t(57068),u=t(82605),S=t(25917),E=t(46797),c=t(88002),O=t(39761),p=t(98515);let B=(()=>{class n{constructor(o){this.isCypress=o,this.value$=this.isCypress?(0,S.of)(40):(0,E.H)(300,300).pipe((0,c.U)(a=>a+30),(0,O.O)(30))}}return n.\u0275fac=function(o){return new(o||n)(e.\u0275\u0275directiveInject(u.B4V))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-progress-bar-example-1"]],decls:2,vars:3,consts:[["tuiProgressBar","","max","100",1,"progress",3,"value"]],template:function(o,a){1&o&&(e.\u0275\u0275element(0,"progress",0),e.\u0275\u0275pipe(1,"async")),2&o&&e.\u0275\u0275property("value",e.\u0275\u0275pipeBind1(1,1,a.value$))},directives:[p.i],pipes:[m.Ov],styles:[".progress[_ngcontent-%COMP%]{width:50%}@media screen and (max-width: 37.4375em){.progress[_ngcontent-%COMP%]{width:100%}}"],changeDetection:0}),n})();var v=t(22824);let G=(()=>{class n{constructor(o){this.isCypress=o,this.fastValue$=this.isCypress?(0,S.of)(80):(0,E.H)(500,100),this.slowValue$=this.isCypress?(0,S.of)(4):(0,E.H)(500,2e3),this.colors=["var(--tui-support-01)","var(--tui-support-21)","lightskyblue","#3682db","var(--tui-primary)"]}}return n.\u0275fac=function(o){return new(o||n)(e.\u0275\u0275directiveInject(u.B4V))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-progress-bar-example-2"]],decls:32,vars:15,consts:function(){let r,o,a;return r=$localize`:␟ab3eb576a4d2b77500066bb0f71f51331629c494␟1101375577014023805: Single color
`,o=$localize`:␟7342d3c89bf9afecda17d4cd92d27708faeaa2b8␟5511912390234747958: With fancy color gradient
`,a=$localize`:␟c68f6db0a6492b25e0e1e6e45301901e6106a18b␟7426878659956347852: Multicolor segments
`,[[1,"description"],r,["tuiProgressBar","","max","100",1,"progress",3,"value"],o,["tuiProgressBar","","max","100","color","linear-gradient(to right, var(--tui-support-02), var(--tui-support-14), var(--tui-support-12))",1,"progress",3,"value"],a,["tuiProgressBar","","max","100",1,"progress",3,"value","tuiProgressColorSegments"],["tuiProgressBar","",1,"progress",3,"value","max","tuiProgressColorSegments"]]},template:function(o,a){1&o&&(e.\u0275\u0275elementStart(0,"h6",0),e.\u0275\u0275i18n(1,1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275text(3," Use "),e.\u0275\u0275elementStart(4,"code"),e.\u0275\u0275text(5,"<progress />"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(6," 's CSS-property "),e.\u0275\u0275elementStart(7,"code"),e.\u0275\u0275text(8,"color"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(9," to set solid color of progress indicator.\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(10,"progress",2),e.\u0275\u0275pipe(11,"async"),e.\u0275\u0275elementStart(12,"h6",0),e.\u0275\u0275i18n(13,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"p"),e.\u0275\u0275text(15," Set component's input property "),e.\u0275\u0275elementStart(16,"code"),e.\u0275\u0275text(17,"color"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(18," to get more complex color combinations.\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(19,"progress",4),e.\u0275\u0275pipe(20,"async"),e.\u0275\u0275elementStart(21,"h6",0),e.\u0275\u0275i18n(22,5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"p"),e.\u0275\u0275text(24," Use "),e.\u0275\u0275elementStart(25,"code"),e.\u0275\u0275text(26,"tuiProgressColorSegments"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(27," directive to to get multicolor segments.\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(28,"progress",6),e.\u0275\u0275pipe(29,"async"),e.\u0275\u0275element(30,"progress",7),e.\u0275\u0275pipe(31,"async")),2&o&&(e.\u0275\u0275advance(10),e.\u0275\u0275property("value",e.\u0275\u0275pipeBind1(11,7,a.fastValue$)),e.\u0275\u0275advance(9),e.\u0275\u0275property("value",e.\u0275\u0275pipeBind1(20,9,a.fastValue$)),e.\u0275\u0275advance(9),e.\u0275\u0275property("value",e.\u0275\u0275pipeBind1(29,11,a.fastValue$))("tuiProgressColorSegments",a.colors),e.\u0275\u0275advance(2),e.\u0275\u0275property("value",e.\u0275\u0275pipeBind1(31,13,a.slowValue$))("max",a.colors.length)("tuiProgressColorSegments",a.colors))},directives:[p.i,v.U],pipes:[m.Ov],styles:[".progress[_ngcontent-%COMP%]{width:70%;margin-bottom:1rem;color:var(--tui-support-09)}@media screen and (max-width: 37.4375em){.progress[_ngcontent-%COMP%]{width:100%}}.description[_ngcontent-%COMP%]{font:var(--tui-font-heading-6);margin-bottom:1rem}.description[_ngcontent-%COMP%]:first-child{margin-top:0}"],changeDetection:0}),n})(),L=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-progress-bar-example-3"]],decls:2,vars:2,consts:[["tuiProgressBar","","max","100","size","s",1,"progress",3,"value"],["tuiProgressBar","","max","100","size","m",1,"progress",3,"value"]],template:function(o,a){1&o&&(e.\u0275\u0275element(0,"progress",0),e.\u0275\u0275element(1,"progress",1)),2&o&&(e.\u0275\u0275property("value",60),e.\u0275\u0275advance(1),e.\u0275\u0275property("value",70))},directives:[p.i],styles:[".progress[_ngcontent-%COMP%]{width:50%;margin-bottom:1rem}@media screen and (max-width: 37.4375em){.progress[_ngcontent-%COMP%]{width:100%}}"],changeDetection:0}),n})();var b=t(70409),T=t(45590);function I(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"label",1),e.\u0275\u0275text(1),e.\u0275\u0275element(2,"progress",2),e.\u0275\u0275elementEnd()),2&n){const o=r.ngIf,a=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",o,"% "),e.\u0275\u0275advance(1),e.\u0275\u0275property("max",a.max)("value",o)}}let V=(()=>{class n{constructor(o){this.isCypress=o,this.max=100,this.value$=this.isCypress?(0,S.of)(30):(0,E.H)(300,300).pipe((0,c.U)(a=>a+30),(0,O.O)(30),(0,b.o)(a=>a<=this.max))}}return n.\u0275fac=function(o){return new(o||n)(e.\u0275\u0275directiveInject(u.B4V))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-progress-bar-example-4"]],decls:2,vars:3,consts:[["tuiProgressLabel","","class","label-wrapper",4,"ngIf"],["tuiProgressLabel","",1,"label-wrapper"],["tuiProgressBar","",3,"max","value"]],template:function(o,a){1&o&&(e.\u0275\u0275template(0,I,3,3,"label",0),e.\u0275\u0275pipe(1,"async")),2&o&&e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(1,1,a.value$))},directives:[m.O5,T.v,p.i],pipes:[m.Ov],styles:[".label-wrapper[_ngcontent-%COMP%]{width:50%}@media screen and (max-width: 37.4375em){.label-wrapper[_ngcontent-%COMP%]{width:100%}}"],changeDetection:0}),n})(),X=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-progress-bar-example-5"]],decls:3,vars:2,consts:[["tuiProgressLabel","",1,"label-wrapper"],["tuiProgressBar","","max","4","size","s",1,"progress",3,"value"]],template:function(o,a){1&o&&(e.\u0275\u0275elementStart(0,"label",0),e.\u0275\u0275element(1,"progress",1),e.\u0275\u0275element(2,"progress",1),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("value",3),e.\u0275\u0275advance(1),e.\u0275\u0275property("value",1))},directives:[T.v,p.i],styles:[".label-wrapper[_ngcontent-%COMP%]{width:50%}@media screen and (max-width: 37.4375em){.label-wrapper[_ngcontent-%COMP%]{width:100%}}.progress[_ngcontent-%COMP%]:nth-child(1){color:#a3ecb3}.progress[_ngcontent-%COMP%]:nth-child(2){color:#39b54a}"],changeDetection:0}),n})();var z=t(31823),U=t(23618),J=t(17023),H=t(66596),W=t(76349);function j(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"dl"),e.\u0275\u0275i18nStart(1,2),e.\u0275\u0275elementStart(2,"dt"),e.\u0275\u0275element(3,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"dd"),e.\u0275\u0275element(5,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"p"),e.\u0275\u0275i18nStart(7,3),e.\u0275\u0275element(8,"strong"),e.\u0275\u0275element(9,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"tui-doc-example",4),e.\u0275\u0275element(11,"tui-progress-bar-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"tui-doc-example",5),e.\u0275\u0275element(13,"tui-progress-bar-example-2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"tui-doc-example",6),e.\u0275\u0275element(15,"tui-progress-bar-example-3"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"tui-doc-example",7),e.\u0275\u0275element(17,"tui-progress-bar-example-4"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"tui-doc-example",8),e.\u0275\u0275element(19,"tui-progress-bar-example-5"),e.\u0275\u0275elementEnd()),2&n){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(10),e.\u0275\u0275property("content",o.basicExample),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",o.multiColorExample),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",o.sizesExample),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",o.labelExample),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",o.stackedExample)}}function K(n,r){1&n&&(e.\u0275\u0275i18nStart(0,14),e.\u0275\u0275element(1,"a",15),e.\u0275\u0275element(2,"code"),e.\u0275\u0275i18nEnd())}function Q(n,r){1&n&&(e.\u0275\u0275i18nStart(0,16),e.\u0275\u0275element(1,"a",15),e.\u0275\u0275element(2,"code"),e.\u0275\u0275i18nEnd())}function Y(n,r){1&n&&e.\u0275\u0275i18n(0,17)}function Z(n,r){1&n&&(e.\u0275\u0275i18nStart(0,18),e.\u0275\u0275elementStart(1,"p"),e.\u0275\u0275element(2,"code"),e.\u0275\u0275element(3,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd())}function w(n,r){if(1&n){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo"),e.\u0275\u0275element(1,"progress",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-documentation"),e.\u0275\u0275template(3,K,3,0,"ng-template",10),e.\u0275\u0275listener("documentationPropertyValueChange",function(s){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().value=s}),e.\u0275\u0275template(4,Q,3,0,"ng-template",11),e.\u0275\u0275listener("documentationPropertyValueChange",function(s){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().max=s}),e.\u0275\u0275template(5,Y,1,0,"ng-template",12),e.\u0275\u0275listener("documentationPropertyValueChange",function(s){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().size=s}),e.\u0275\u0275template(6,Z,4,0,"ng-template",13),e.\u0275\u0275listener("documentationPropertyValueChange",function(s){return e.\u0275\u0275restoreView(o),e.\u0275\u0275nextContext().color=s}),e.\u0275\u0275elementEnd()}if(2&n){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("value",o.value)("max",o.max)("size",o.size)("color",o.color),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValue",o.value),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",o.max),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",o.sizeVariants)("documentationPropertyValue",o.size),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",o.colorVariants)("documentationPropertyValue",o.color)}}function k(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"ol",19),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,20),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",21),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,22),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",o.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",o.exampleHtml)}}let q=(()=>{class n{constructor(){this.value=6,this.max=10,this.sizeVariants=["m","s"],this.size=this.sizeVariants[0],this.colorVariants=["var(--tui-primary)","lightskyblue","#3682db","rgba(74, 201, 155, 1)","linear-gradient(to right, var(--tui-support-02), var(--tui-support-14), var(--tui-support-12))"],this.color=this.colorVariants[0],this.basicExample={HTML:t.e(43457).then(t.bind(t,43457)),TypeScript:t.e(15322).then(t.bind(t,15322)),LESS:t.e(36783).then(t.t.bind(t,36783,17))},this.multiColorExample={HTML:t.e(224).then(t.bind(t,224)),TypeScript:t.e(76387).then(t.bind(t,76387)),LESS:t.e(84893).then(t.t.bind(t,84893,17))},this.sizesExample={HTML:t.e(82581).then(t.bind(t,82581)),TypeScript:t.e(26521).then(t.bind(t,26521)),LESS:t.e(43753).then(t.t.bind(t,43753,17))},this.labelExample={HTML:t.e(88181).then(t.bind(t,88181)),TypeScript:t.e(21277).then(t.bind(t,21277)),LESS:t.e(69749).then(t.t.bind(t,69749,17))},this.stackedExample={HTML:t.e(12120).then(t.bind(t,12120)),TypeScript:t.e(22469).then(t.bind(t,22469)),LESS:t.e(53505).then(t.t.bind(t,53505,17))},this.exampleModule=t.e(98691).then(t.bind(t,98691)),this.exampleHtml=t.e(1945).then(t.bind(t,1945))}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["example-tui-progress-bar"]],decls:4,vars:0,consts:function(){let r,o,a,s,i,_,C,R,P,M,d,D,f;return r=$localize`:␟4ed7053c5c74592c268021eeec7e822e85123eef␟8624557147577439768:${"\ufffd#2\ufffd"}:START_TAG_DT:${"[\ufffd#3\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:tuiProgressBar${"[\ufffd/#3\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#2\ufffd"}:CLOSE_TAG_DT:${"\ufffd#4\ufffd"}:START_TAG_DD: – attribute component for native html tag ${"[\ufffd#3\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:<progress />${"[\ufffd/#3\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: . ${"\ufffd/#4\ufffd"}:CLOSE_TAG_DD:`,r=e.\u0275\u0275i18nPostprocess(r),o=$localize`:␟1ee2ab2cf8b61ffa7e26891d9ff65b84f589b500␟1959442075124179089:${"\ufffd#8\ufffd"}:START_TAG_STRONG:Usage:${"\ufffd/#8\ufffd"}:CLOSE_TAG_STRONG:${"\ufffd#9\ufffd"}:START_TAG_CODE:<progress tuiProgressBar value="40" max="100"></progress>${"\ufffd/#9\ufffd"}:CLOSE_TAG_CODE: . `,a=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,s=$localize`:␟d7a340fb882e7e5f76d0949bbfa10811361d7e93␟1598512795966065598:Multicolor`,i=$localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`,_=$localize`:␟43cf922b4e2e453f2fcd8e43be9fd18e96f9b74c␟8720306042838547123:With label`,C=$localize`:␟dd4002bde6f74a0a30ec223b660ed5d4458c127d␟1765388942323233214:Stacked progress bars`,R=$localize`:␟ba74cd5237673a75a1bbbbfe36cf54bc1fcaff01␟4894529704152782945: Native attribute ${"\ufffd#1\ufffd"}:START_LINK: value ${"\ufffd/#1\ufffd"}:CLOSE_LINK: of ${"\ufffd#2\ufffd"}:START_TAG_CODE:<progress />${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:`,P=$localize`:␟1826095affba926e4075210d4d2fe1f0b5281214␟5682634365450052698: Native attribute ${"\ufffd#1\ufffd"}:START_LINK: max ${"\ufffd/#1\ufffd"}:CLOSE_LINK: of ${"\ufffd#2\ufffd"}:START_TAG_CODE:<progress />${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:`,M=$localize`:␟d9f4db967c9e78b6e28feafdf3c916002fb067c7␟5415347527315359817: Size of the progress element `,d=$localize`:␟7ae65b188c23ffa2ea105cdc7c4e30f3ae314321␟2864892605454291497: Color of the progress indicator ${"\ufffd#1\ufffd"}:START_PARAGRAPH: We recommend set solid color via ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:<progress />${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: 's CSS-property ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:color${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: (especially, if you support old not-chromium based Edge) ${"\ufffd/#1\ufffd"}:CLOSE_PARAGRAPH:`,d=e.\u0275\u0275i18nPostprocess(d),D=$localize`:␟7bc158fa5ee50dd5e598c2cd6720474e7c814cab␟8674861496686918589: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiProgressModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our attribute component `,f=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","ProgressBar","package","KIT","path","kit/components/progress/progress-bar"],["pageTab",""],r,o,["id","basic","heading",a,3,"content"],["id","multicolor","heading",s,3,"content"],["id","sizes","heading",i,3,"content"],["id","label","heading",_,3,"content"],["id","stacked","heading",C,3,"content"],["tuiProgressBar","",1,"api-progress",3,"value","max","size","color"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","color","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],R,["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress#attributes","target","_blank"],P,M,d,[1,"b-demo-steps"],D,["filename","myComponent.module.ts",3,"code"],f,["filename","myComponent.template.html",3,"code"]]},template:function(o,a){1&o&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,j,20,5,"ng-template",1),e.\u0275\u0275template(2,w,7,10,"ng-template",1),e.\u0275\u0275template(3,k,10,2,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[A.q,y.n,h.f,B,G,L,V,X,z.F,p.i,U.z,J.B,H.V,W.c],styles:[".api-progress[_ngcontent-%COMP%]{width:50%}@media screen and (max-width: 37.4375em){.api-progress[_ngcontent-%COMP%]{width:100%}}dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%]{display:inline;margin:0}"],changeDetection:0}),n})(),ee=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[m.ez,F.fV,x.V5U,$.jzK,N.Bz.forChild((0,F.Ve)(q))]]}),n})()}}]);