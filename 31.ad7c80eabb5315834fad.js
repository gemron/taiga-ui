(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"3F4M":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiLineChartModule",function(){return k});var i=n("SVse"),o=n("s7LF"),a=n("iInd"),r=n("S+W0"),l=n("zIlJ"),c=n("ErM8"),d=n("8Y7J"),u=n("ReYJ"),m=n("WQeZ"),p=n("PYg8"),s=n("0Ksk"),h=n("pF6g"),y=n("LZ5V");let f=(()=>{class e{constructor(){this.value=[[50,50],[100,75],[150,50],[200,150],[250,155],[300,190],[350,90]],this.stringify=s.K}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-line-chart-example-1"]],decls:2,vars:10,consts:[[1,"axes",3,"verticalLines","horizontalLines"],[3,"x","y","width","height","dots","value","xStringify","yStringify"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-axes",0),d["\u0275\u0275element"](1,"tui-line-chart",1),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("verticalLines",4)("horizontalLines",2),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("x",0)("y",0)("width",400)("height",200)("dots",!0)("value",t.value)("xStringify",t.stringify)("yStringify",t.stringify))},directives:[h.a,y.a],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;width:25rem;color:#bc71c9}"],changeDetection:0}),e})(),g=(()=>{class e{constructor(){this.value=[[50,50],[100,75],[150,50],[200,150],[250,155],[300,190],[350,90]]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-line-chart-example-2"]],decls:2,vars:9,consts:[[1,"axes",3,"verticalLines","horizontalLines"],[3,"x","y","width","height","smoothingFactor","value","filled"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-axes",0),d["\u0275\u0275element"](1,"tui-line-chart",1),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("verticalLines",4)("horizontalLines",2),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("x",0)("y",0)("width",400)("height",200)("smoothingFactor",50)("value",t.value)("filled",!0))},directives:[h.a,y.a],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;width:25rem;color:#bc71c9}"],changeDetection:0}),e})(),x=(()=>{class e{constructor(){this.dotted=[[50,50],[100,75],[150,50]],this.solid=[[150,50],[200,150],[250,155]],this.dashed=[[250,155],[300,190],[350,90]]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-line-chart-example-3"]],decls:4,vars:20,consts:[[1,"axes",3,"verticalLines","horizontalLines"],[1,"chart","chart_dotted",3,"dots","x","y","width","height","value"],[1,"chart",3,"dots","x","y","width","height","value"],[1,"chart","chart_dashed",3,"dots","x","y","width","height","value"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-axes",0),d["\u0275\u0275element"](1,"tui-line-chart",1),d["\u0275\u0275element"](2,"tui-line-chart",2),d["\u0275\u0275element"](3,"tui-line-chart",3),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("verticalLines",4)("horizontalLines",2),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("dots",!0)("x",0)("y",0)("width",400)("height",200)("value",t.dotted),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("dots",!0)("x",0)("y",0)("width",400)("height",200)("value",t.solid),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("dots",!0)("x",0)("y",0)("width",400)("height",200)("value",t.dashed))},directives:[h.a,y.a],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;width:25rem;color:#bc71c9}.chart[_ngcontent-%COMP%]{position:absolute;top:0;left:0}.chart_dotted[_ngcontent-%COMP%]{stroke-dasharray:2}.chart_dashed[_ngcontent-%COMP%]{stroke-dasharray:4}"],changeDetection:0}),e})();function v(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"div"),d["\u0275\u0275text"](3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"div"),d["\u0275\u0275text"](5),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=t.index;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"]("Vertical: ",e[0],""),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("Horizontal: ",e[1],""),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"]("index: ",n,"")}}let P=(()=>{class e{constructor(){this.value=[[50,50],[100,75],[150,50],[200,150],[250,155],[300,190],[350,90]],this.singleValue=[[200,150]],this.hint=({$implicit:e})=>`Vertical: ${e[1]}\nHorizontal: ${e[0]}`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-line-chart-example-4"]],decls:6,vars:17,consts:[[1,"axes",3,"verticalLines","horizontalLines"],[3,"x","y","width","height","value","hintContent"],[1,"axes","tui-space_top-10",3,"verticalLines","horizontalLines"],[3,"x","y","width","height","value","dots","hintContent"],["hintContent",""]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-axes",0),d["\u0275\u0275element"](1,"tui-line-chart",1),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-axes",2),d["\u0275\u0275element"](3,"tui-line-chart",3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](4,v,6,3,"ng-template",null,4,d["\u0275\u0275templateRefExtractor"])),2&e){const e=d["\u0275\u0275reference"](5);d["\u0275\u0275property"]("verticalLines",4)("horizontalLines",2),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("x",0)("y",0)("width",400)("height",200)("value",t.value)("hintContent",t.hint),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("verticalLines",4)("horizontalLines",2),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("x",0)("y",0)("width",400)("height",200)("value",t.singleValue)("dots",!0)("hintContent",e)}},directives:[h.a,y.a],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;width:25rem;color:#bc71c9}"],changeDetection:0}),e})();var C=n("4tVw");function b(e,t){if(1&e&&d["\u0275\u0275element"](0,"tui-line-chart",2),2&e){const e=t.$implicit;d["\u0275\u0275property"]("x",0)("y",0)("width",400)("height",200)("value",e)}}let S=(()=>{class e{constructor(){this.values=[[[50,50],[100,75],[150,50],[200,150],[250,155],[300,190],[350,90]],[[50,40],[100,60],[150,90],[200,120],[250,150],[300,110],[350,130]],[[50,30],[100,90],[150,80],[200,50],[250,130],[300,190],[350,150]]],this.hint=({$implicit:e})=>`${e[0][0]} items:\n\n${e.map(([e,t])=>t).join("$\n")}$`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-line-chart-example-5"]],decls:2,vars:4,consts:[[1,"axes",3,"verticalLines","horizontalLines","tuiLineChartHint"],["class","chart",3,"x","y","width","height","value",4,"ngFor","ngForOf"],[1,"chart",3,"x","y","width","height","value"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-axes",0),d["\u0275\u0275template"](1,b,1,5,"tui-line-chart",1),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("verticalLines",4)("horizontalLines",2)("tuiLineChartHint",t.hint),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",t.values))},directives:[h.a,C.a,i.o,y.a],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;width:25rem}.chart[_ngcontent-%COMP%]{position:absolute;color:#ffb74c}.chart[_ngcontent-%COMP%]:first-child{color:#bc71c9}.chart[_ngcontent-%COMP%]:last-child{color:#4dc3f7}"],changeDetection:0}),e})();var V=n("mbit"),w=n("F2nr"),L=n("R5K/"),E=n("JKY/");function T(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-example",2),d["\u0275\u0275element"](1,"tui-line-chart-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-example",3),d["\u0275\u0275element"](3,"tui-line-chart-example-2"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"tui-doc-example",4),d["\u0275\u0275element"](5,"tui-line-chart-example-3"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"tui-doc-example",5),d["\u0275\u0275element"](7,"tui-line-chart-example-4"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"tui-doc-example",6),d["\u0275\u0275element"](9,"tui-line-chart-example-5"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("content",e.example1),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",e.example2),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",e.example3),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",e.example4),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",e.example5)}}function $(e,t){1&e&&d["\u0275\u0275i18n"](0,20)}function z(e,t){1&e&&d["\u0275\u0275i18n"](0,21)}function M(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,22),d["\u0275\u0275element"](1,"code"),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275i18nEnd"]())}function _(e,t){1&e&&d["\u0275\u0275i18n"](0,23)}function O(e,t){1&e&&d["\u0275\u0275i18n"](0,24)}function F(e,t){1&e&&d["\u0275\u0275i18n"](0,25)}function D(e,t){1&e&&d["\u0275\u0275i18n"](0,26)}function H(e,t){1&e&&d["\u0275\u0275i18n"](0,27)}function A(e,t){1&e&&d["\u0275\u0275i18n"](0,28)}function N(e,t){1&e&&d["\u0275\u0275i18n"](0,29)}function R(e,t){1&e&&d["\u0275\u0275i18n"](0,30)}function G(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-doc-demo"),d["\u0275\u0275elementStart"](1,"tui-axes",7),d["\u0275\u0275element"](2,"tui-line-chart",8),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-doc-documentation"),d["\u0275\u0275template"](4,$,1,0,"ng-template",9),d["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().dots=t}),d["\u0275\u0275template"](5,z,1,0,"ng-template",10),d["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().filled=t}),d["\u0275\u0275template"](6,M,3,0,"ng-template",11),d["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().hintContent=t}),d["\u0275\u0275template"](7,_,1,0,"ng-template",12),d["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().height=t}),d["\u0275\u0275template"](8,O,1,0,"ng-template",13),d["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().y=t}),d["\u0275\u0275template"](9,F,1,0,"ng-template",14),d["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().width=t}),d["\u0275\u0275template"](10,D,1,0,"ng-template",15),d["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().x=t}),d["\u0275\u0275template"](11,H,1,0,"ng-template",16),d["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().smoothingFactor=t}),d["\u0275\u0275template"](12,A,1,0,"ng-template",17),d["\u0275\u0275template"](13,N,1,0,"ng-template",18),d["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().xStringify=t}),d["\u0275\u0275template"](14,R,1,0,"ng-template",19),d["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().yStringify=t}),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("verticalLines",4)("horizontalLines",2),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("x",e.x)("y",e.y)("width",e.width)("height",e.height)("smoothingFactor",e.smoothingFactor)("value",e.value)("filled",e.filled)("dots",e.dots)("hintContent",e.hintContent)("xStringify",e.xStringify)("yStringify",e.yStringify),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("documentationPropertyValue",e.dots),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.filled),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.hintContentVariants)("documentationPropertyValue",e.hintContent),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.height),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.y),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.width),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.x),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.smoothingFactor),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("documentationPropertyValues",e.xStringifyVariants)("documentationPropertyValue",e.xStringify),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.yStringifyVariants)("documentationPropertyValue",e.yStringify)}}function Y(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",31),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,32),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",33),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,34),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",35),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.exampleHtml)}}let j=(()=>{class e{constructor(){this.exampleModule=n.e(349).then(n.bind(null,"Hcmj")),this.exampleHtml=n.e(350).then(n.bind(null,"GQs3")),this.example1={TypeScript:n.e(336).then(n.bind(null,"UcPZ")),HTML:n.e(334).then(n.bind(null,"yseY")),LESS:n.e(335).then(n.bind(null,"GRWf"))},this.example2={TypeScript:n.e(339).then(n.bind(null,"+U+z")),HTML:n.e(337).then(n.bind(null,"/pyu")),LESS:n.e(338).then(n.bind(null,"bhFk"))},this.example3={TypeScript:n.e(342).then(n.bind(null,"f7th")),HTML:n.e(340).then(n.bind(null,"3p6/")),LESS:n.e(341).then(n.bind(null,"lW7q"))},this.example4={TypeScript:n.e(345).then(n.bind(null,"nUyz")),HTML:n.e(343).then(n.bind(null,"0+oQ")),LESS:n.e(344).then(n.bind(null,"YhNW"))},this.example5={TypeScript:n.e(348).then(n.bind(null,"LFCo")),HTML:n.e(346).then(n.bind(null,"kjma")),LESS:n.e(347).then(n.bind(null,"BjN3"))},this.value=[[50,50],[100,75],[150,50],[200,150],[250,155],[300,190],[350,90]],this.yStringifyVariants=[e=>`${(10*e).toLocaleString("ru-RU",{maximumFractionDigits:0})} $`],this.xStringifyVariants=[e=>""+100*e],this.hintContentVariants=["",({$implicit:e})=>`${100*e[0]}\n${(10*e[1]).toLocaleString("ru-RU",{maximumFractionDigits:0})} $`],this.yStringify=null,this.xStringify=null,this.hintContent=this.hintContentVariants[0],this.x=0,this.y=0,this.width=400,this.height=200,this.smoothingFactor=0,this.filled=!1,this.dots=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-line-chart"]],decls:4,vars:0,consts:function(){let e,t,n,i,o,a,r,l,c,u,m,p,s,h,y,f,g;return e=$localize`:␟af942a24234fa47efa01bf2d4236dad05131a5a0␟8543119714580512727:Line`,t=$localize`:␟d98cf87828e8a5c956667d9a8b9c12145824ee0f␟4272334652167271438:Smooth`,n=$localize`:␟86baef6e3d5572968c0da4f1709f97c74190d36e␟2812108764688288077:Dotted`,i=$localize`:␟1560319447dbaf27b0d1b06e594c573c85d89d96␟5135659169158832318:Hint`,o=$localize`:␟c4d83e70435953f62ccae3cbf6016420df475424␟4740076445307023096: Show dots on chart `,a=$localize`:␟9baeb452de4b3e87de2854d7d7299ae8e5349371␟6311054337495080517: Filled with gradient `,r=$localize`:␟962b0408fa0aa5b665e0e2ce9afa1c9d031023ec␟5098898074892729168: Content of hint for hover. It has ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:$implicit${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: in context with a tuple ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:[TuiPoint, number]${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE:`,r=d["\u0275\u0275i18nPostprocess"](r),l=$localize`:␟1148b851b9d07a503fe83074185fada4c56bc932␟4329060505650601384: Axis Y range, pixel scale is 1:1 `,c=$localize`:␟f33f8b3f2cfd7ef519194cc1ae13fc8fb91fb8d7␟9084820970498059965: Start of Y axis `,u=$localize`:␟f4bba10989219b2e80f0c07cb583e5975596b805␟8347772747848156772: Axis X range, pixel scale is 1:1 `,m=$localize`:␟792c21644049857ec7d2abd21a018da6feeaf8f3␟715212499497888512: Start of X axis `,p=$localize`:␟dbcff3658adbc7241a4e120d0403b9b59203cf6f␟7622132382477188848: Smoothing factor from 0 to 99 `,s=$localize`:␟2eb20b3adec45476e892d48624603eec29f04ca7␟620827304048157009: Array of data `,h=$localize`:␟a95376fd00f2c7de89ef1205191f686e9bb93ceb␟8840512580092681625: Function to stringify a value number to a string in axis X hint `,y=$localize`:␟aa03eea8f292367391947b1ee6d45d8e5fe1c884␟8439308556823064311: Function to stringify a value number to a string in axis Y hint `,f=$localize`:␟30a5ab566dceb0cacf69465ffadb6bd0c272f1c4␟4207828476122780700: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiLineChartModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,g=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","LineChart","package","ADDON-CHARTS","type","components"],["pageTab",""],["id","line","heading",e,3,"content"],["id","curve","heading",t,3,"content"],["id","dash","heading",n,3,"content"],["id","hint","heading",i,3,"content"],["id","multiple","heading","Several lines with hints",3,"content"],[1,"axes",3,"verticalLines","horizontalLines"],[3,"x","y","width","height","smoothingFactor","value","filled","dots","hintContent","xStringify","yStringify"],["documentationPropertyName","dots","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","filled","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hintContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","height","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","y","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","width","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","x","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","smoothingFactor","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","TuiPoint[]"],["documentationPropertyName","xStringify","documentationPropertyMode","input","documentationPropertyType","TuiStringHandler<number> | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","yStringify","documentationPropertyMode","input","documentationPropertyType","TuiStringHandler<number> | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],o,a,r,l,c,u,m,p,s,h,y,[1,"b-demo-steps"],f,["filename","myComponent.module.ts",3,"code"],g,["filename","myComponent.template.html",3,"code"]]},template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,T,10,5,"ng-template",1),d["\u0275\u0275template"](2,G,15,26,"ng-template",1),d["\u0275\u0275template"](3,Y,10,2,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[u.a,m.a,p.a,f,g,x,P,S,V.a,h.a,y.a,w.a,L.a,E.a],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem;width:25rem;color:#bc71c9}"],changeDetection:0}),e})(),k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[i.c,o.FormsModule,r.e,c.Gb,r.j,l.m,a.f.forChild(Object(l.v)(j))]]}),e})()}}]);