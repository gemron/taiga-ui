"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[37536],{37536:(pe,C,o)=>{o.r(C),o.d(C,{ExampleTuiRangeModule:()=>ge});var u=o(12057),m=o(23738),G=o(12021),T=o(46244),d=o(37267),E=o(38780),e=o(74788),L=o(88331),v=o(37159),b=o(79121),V=o(57068),_=o(48740),c=o(87231);let z=(()=>{class n{constructor(){this.control=new m.FormControl([4,6])}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-range-example-1"]],decls:1,vars:3,consts:[[3,"formControl","max","quantum"]],template:function(t,a){1&t&&e.\u0275\u0275element(0,"tui-range",0),2&t&&e.\u0275\u0275property("formControl",a.control)("max",10)("quantum",1)},directives:[_.U,c.H,m.NgControlStatus,m.FormControlDirective],encapsulation:2,changeDetection:0}),n})();var I=o(70329);let U=(()=>{class n{constructor(){this.smallRangeValue=[0,40],this.bigRangeControl=new m.FormControl([40,60])}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-range-example-2"]],decls:20,vars:10,consts:[[1,"island"],[1,"tui-island__title"],["id","s-size-range","size","s",1,"range",3,"max","ngModel","ngModelChange"],[1,"tui-island__paragraph"],["for","s-size-range"],["id","m-size-range","size","m",1,"range",3,"formControl","max"],["for","m-size-range"]],template:function(t,a){1&t&&(e.\u0275\u0275elementStart(0,"tui-island",0),e.\u0275\u0275elementStart(1,"h3",1),e.\u0275\u0275text(2,"S-size"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"tui-range",2),e.\u0275\u0275listener("ngModelChange",function(i){return a.smallRangeValue=i}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"p",3),e.\u0275\u0275text(5," Control value: "),e.\u0275\u0275elementStart(6,"output",4),e.\u0275\u0275elementStart(7,"code"),e.\u0275\u0275text(8),e.\u0275\u0275pipe(9,"json"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"tui-island",0),e.\u0275\u0275elementStart(11,"h3",1),e.\u0275\u0275text(12,"M-size"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(13,"tui-range",5),e.\u0275\u0275elementStart(14,"p",3),e.\u0275\u0275text(15," Control value: "),e.\u0275\u0275elementStart(16,"output",6),e.\u0275\u0275elementStart(17,"code"),e.\u0275\u0275text(18),e.\u0275\u0275pipe(19,"json"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("max",100)("ngModel",a.smallRangeValue),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(9,6,a.smallRangeValue)),e.\u0275\u0275advance(5),e.\u0275\u0275property("formControl",a.bigRangeControl)("max",100),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(19,8,a.bigRangeControl.value)))},directives:[I.h,_.U,c.H,m.NgControlStatus,m.NgModel,m.FormControlDirective],pipes:[u.Ts],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;grid-row-gap:1rem;row-gap:1rem}.island[_ngcontent-%COMP%]{box-sizing:border-box;width:49%}@media screen and (max-width: 37.4375em){.island[_ngcontent-%COMP%]{width:100%}}.range[_ngcontent-%COMP%]{margin:2rem 0}"],changeDetection:0}),n})();var X=o(34880);function J(n,l){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"i18nPlural"),e.\u0275\u0275elementContainerEnd()),2&n){const t=e.\u0275\u0275nextContext().$implicit,a=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind2(2,1,t,a.pluralMap)," ")}}function H(n,l){if(1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275template(1,J,3,4,"ng-container",6),e.\u0275\u0275elementEnd()),2&n){const t=l.$implicit;e.\u0275\u0275nextContext();const a=e.\u0275\u0275reference(4);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",750!==t)("ngIfElse",a)}}function j(n,l){1&n&&(e.\u0275\u0275element(0,"tui-svg",7),e.\u0275\u0275elementStart(1,"div"),e.\u0275\u0275text(2,"3/4"),e.\u0275\u0275elementEnd())}let K=(()=>{class n{constructor(){this.min=0,this.max=1e3,this.quantum=250,this.segments=4,this.labels=[...new Array(this.segments+1).keys()].map(t=>this.min+this.quantum*t),this.value=[0,250],this.pluralMap={"=0":"0","=1":"# item","=1000":"MAX",other:"# items"}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-range-example-3"]],decls:11,vars:9,consts:[["id","range-with-segments","new","","size","m",1,"range",3,"min","max","quantum","segments","ngModel","ngModelChange"],[1,"ticks-labels"],[4,"ngFor","ngForOf"],["labelWithIcon",""],[1,"tui-space_top-12","tui-space_bottom-0"],["for","range-with-segments"],[4,"ngIf","ngIfElse"],["src","tuiIconArrowUp"]],template:function(t,a){1&t&&(e.\u0275\u0275elementStart(0,"tui-range",0),e.\u0275\u0275listener("ngModelChange",function(i){return a.value=i}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(1,"div",1),e.\u0275\u0275template(2,H,2,2,"div",2),e.\u0275\u0275template(3,j,3,0,"ng-template",null,3,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"p",4),e.\u0275\u0275text(6," Control value: "),e.\u0275\u0275elementStart(7,"output",5),e.\u0275\u0275elementStart(8,"code"),e.\u0275\u0275text(9),e.\u0275\u0275pipe(10,"json"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("min",a.min)("max",a.max)("quantum",a.quantum)("segments",a.segments)("ngModel",a.value),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",a.labels),e.\u0275\u0275advance(7),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(10,7,a.value)))},directives:[_.U,c.H,_.l,m.NgControlStatus,m.NgModel,u.sg,u.O5,X.P],pipes:[u.Ts,u.Gx],styles:['.range[_ngcontent-%COMP%]{z-index:1}.range[_ngcontent-%COMP%]:after{content:"";position:absolute;top:-.5rem;bottom:-1.5rem;width:100%}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}'],changeDetection:0}),n})();function w(n,l){if(1&n&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=l.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t)}}let B=(()=>{class n{constructor(){this.min=0,this.max=1e6,this.ticksLabels=["0","10K","100K","500k","1000K"],this.segments=this.ticksLabels.length-1,this.value=[0,1e5],this.keySteps=[[0,this.min],[25,1e4],[50,1e5],[75,5e5],[100,this.max]]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-range-example-4"]],decls:9,vars:10,consts:[["id","range-with-key-steps","new","","size","m",1,"range",3,"min","max","keySteps","steps","segments","ngModel","ngModelChange"],[1,"ticks-labels"],[4,"ngFor","ngForOf"],[1,"tui-space_top-12","tui-space_bottom-0"],["for","range-with-key-steps"]],template:function(t,a){1&t&&(e.\u0275\u0275elementStart(0,"tui-range",0),e.\u0275\u0275listener("ngModelChange",function(i){return a.value=i}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(1,"div",1),e.\u0275\u0275template(2,w,2,1,"span",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p",3),e.\u0275\u0275text(4," Control value: "),e.\u0275\u0275elementStart(5,"output",4),e.\u0275\u0275elementStart(6,"code"),e.\u0275\u0275text(7),e.\u0275\u0275pipe(8,"json"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("min",a.min)("max",a.max)("keySteps",a.keySteps)("steps",2*a.segments)("segments",a.segments)("ngModel",a.value),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",a.ticksLabels),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(8,8,a.value)))},directives:[_.U,c.H,_.l,m.NgControlStatus,m.NgModel,u.sg],pipes:[u.Ts],styles:['.range[_ngcontent-%COMP%]{z-index:1}.range[_ngcontent-%COMP%]:after{content:"";position:absolute;top:-.5rem;bottom:-1.5rem;width:100%}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}'],changeDetection:0}),n})();var k=o(31823),Q=o(23618),Y=o(17023),W=o(66596),Z=o(76349);function q(n,l){if(1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-notification",3),e.\u0275\u0275elementStart(3,"p",4),e.\u0275\u0275i18n(4,5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"p"),e.\u0275\u0275i18nStart(6,6),e.\u0275\u0275element(7,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"p"),e.\u0275\u0275i18nStart(9,7),e.\u0275\u0275element(10,"code"),e.\u0275\u0275element(11,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"tui-doc-example",8),e.\u0275\u0275element(13,"tui-range-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"tui-doc-example",9),e.\u0275\u0275element(15,"tui-range-example-2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"tui-doc-example",10),e.\u0275\u0275elementStart(17,"tui-notification",11),e.\u0275\u0275elementStart(18,"p",4),e.\u0275\u0275i18nStart(19,12),e.\u0275\u0275element(20,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"p"),e.\u0275\u0275i18nStart(22,13),e.\u0275\u0275element(23,"code"),e.\u0275\u0275element(24,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(25,"tui-range-example-3"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"tui-doc-example",14),e.\u0275\u0275element(27,"tui-range-example-4"),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(12),e.\u0275\u0275property("content",t.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example2),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example3),e.\u0275\u0275advance(10),e.\u0275\u0275property("content",t.example4)}}function ee(n,l){if(1&n&&e.\u0275\u0275element(0,"tui-range",25),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("formControl",t.control)("min",t.min)("max",t.max)("steps",t.steps)("segments",t.segments)("pluralize",t.pluralize)("keySteps",t.keySteps)("size",t.size)("quantum",t.quantum)}}function te(n,l){1&n&&(e.\u0275\u0275i18nStart(0,26),e.\u0275\u0275element(1,"code"),e.\u0275\u0275i18nEnd())}function ne(n,l){1&n&&e.\u0275\u0275i18n(0,27)}function oe(n,l){1&n&&e.\u0275\u0275i18n(0,28)}function ae(n,l){1&n&&e.\u0275\u0275i18n(0,29)}function le(n,l){1&n&&e.\u0275\u0275i18n(0,30)}function ie(n,l){1&n&&e.\u0275\u0275i18n(0,31)}function re(n,l){1&n&&e.\u0275\u0275i18n(0,32)}function se(n,l){1&n&&e.\u0275\u0275i18n(0,33)}function me(n,l){1&n&&(e.\u0275\u0275i18nStart(0,34),e.\u0275\u0275element(1,"a",35),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275element(3,"strong"),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd())}function ue(n,l){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo",15),e.\u0275\u0275template(1,ee,1,9,"ng-template"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-documentation"),e.\u0275\u0275template(3,te,2,0,"ng-template",16),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().disabled=r}),e.\u0275\u0275template(4,ne,1,0,"ng-template",17),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().min=r}),e.\u0275\u0275template(5,oe,1,0,"ng-template",18),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().max=r}),e.\u0275\u0275template(6,ae,1,0,"ng-template",19),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().steps=r}),e.\u0275\u0275template(7,le,1,0,"ng-template",20),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().quantum=r}),e.\u0275\u0275template(8,ie,1,0,"ng-template",21),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().segments=r}),e.\u0275\u0275template(9,re,1,0,"ng-template",22),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().keySteps=r}),e.\u0275\u0275template(10,se,1,0,"ng-template",23),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().size=r}),e.\u0275\u0275template(11,me,4,0,"ng-template",24),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().pluralize=r}),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("control",t.control),e.\u0275\u0275advance(3),e.\u0275\u0275property("documentationPropertyValue",t.disabled),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.min),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.max),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.stepsVariants)("documentationPropertyValue",t.steps),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.quantumVariants)("documentationPropertyValue",t.quantum),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.segments),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.keyStepsVariants)("documentationPropertyValue",t.keySteps),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.sizeVariants)("documentationPropertyValue",t.size),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyDeprecated",!0)("documentationPropertyValues",t.pluralizeVariants)("documentationPropertyValue",t.pluralize)}}function _e(n,l){if(1&n&&(e.\u0275\u0275elementStart(0,"ol",36),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275text(2," Import an Angular module for forms and "),e.\u0275\u0275elementStart(3,"code"),e.\u0275\u0275text(4,"TuiRangeModule"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(5," in the same module where you want to use our component: "),e.\u0275\u0275element(6,"tui-doc-code",37),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"li"),e.\u0275\u0275elementStart(8,"p"),e.\u0275\u0275i18nStart(9,38),e.\u0275\u0275element(10,"code"),e.\u0275\u0275element(11,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(12,"tui-doc-code",39),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"li"),e.\u0275\u0275elementStart(14,"p"),e.\u0275\u0275i18n(15,40),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(16,"tui-doc-code",41),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(6),e.\u0275\u0275property("code",t.exampleModule),e.\u0275\u0275advance(6),e.\u0275\u0275property("code",t.exampleForm),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",t.exampleHtml)}}let ce=(()=>{class n{constructor(){this.exampleModule=o.e(92677).then(o.t.bind(o,92677,17)),this.exampleHtml=o.e(38951).then(o.t.bind(o,38951,17)),this.exampleForm=o.e(92136).then(o.t.bind(o,92136,17)),this.example1={HTML:o.e(45417).then(o.t.bind(o,45417,17)),TypeScript:o.e(76697).then(o.t.bind(o,76697,17))},this.example2={HTML:o.e(25090).then(o.t.bind(o,25090,17)),TypeScript:o.e(34100).then(o.t.bind(o,34100,17)),LESS:o.e(96585).then(o.t.bind(o,96585,17))},this.example3={HTML:o.e(82509).then(o.t.bind(o,82509,17)),LESS:o.e(91770).then(o.t.bind(o,91770,17)),TypeScript:o.e(81679).then(o.t.bind(o,81679,17))},this.example4={HTML:o.e(85407).then(o.t.bind(o,85407,17)),TypeScript:o.e(7182).then(o.t.bind(o,7182,17)),LESS:o.e(67607).then(o.t.bind(o,67607,17))},this.control=new m.FormControl([0,0]),this.sizeVariants=["s","m"],this.size=this.sizeVariants[1],this.min=0,this.max=100,this.segments=0,this.stepsVariants=[0,4,10],this.steps=this.stepsVariants[0],this.pluralizeVariants=[["year","years","years"],{one:"thing",few:"things",many:"things",other:"things"},{one:"year",other:"years"}],this.pluralize=null,this.keyStepsVariants=[[[50,1e3]]],this.keySteps=null,this.quantumVariants=[.01,.1,1,10],this.quantum=this.quantumVariants[0]}get disabled(){return this.control.disabled}set disabled(t){t?this.control.disable():this.control.enable()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["example-range"]],decls:4,vars:0,consts:function(){let l,t,a,r,i,O,F,M,g,S,N,f,R,P,D,y,x,h,A,p,$;return l=$localize`:␟39507a5d0ef5f798ed73885e520e5ac975a9e93f␟2601219398064138169:Component allows to choose a part of a range`,t=$localize`:␟09456f65f3a00702ca9aedfa0f1bedf1b28d63ea␟1346465782286970335: This component is being refactored. Soon (next major release) you will see the fresh version of it! `,a=$localize`:␟f4ca6accec772a62b559fc95d86e63a49afb8a4e␟5861899087121976760: Of course, we keep backward compatibility in mind (for 2.x.x). You can still use old version of ${"\ufffd#7\ufffd"}:START_TAG_CODE:Range${"\ufffd/#7\ufffd"}:CLOSE_TAG_CODE: . `,r=$localize`:␟02ad0f5e7f445802501f951f04d033f492b1e40c␟559627014458016143: However, if you are going to use this component, we recommend to use new version. To enable the "new version"-mode, add ${"[\ufffd#10\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:new${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE: directive. Example:  ${"[\ufffd#10\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:<tui‑range new ...>${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE:`,r=e.\u0275\u0275i18nPostprocess(r),i=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,O=$localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`,F=$localize`:␟da3ee626899400b20e2eec11b3ddadea8a3ddcc5␟7433618922144942348:Visual segments + labels for ticks`,M=$localize`:␟b71cff54548c311b9382985ce173ddbd05b1455a␟7222770680801212686: Use mixin ${"\ufffd#20\ufffd"}:START_TAG_CODE:tui-slider-ticks-labels${"\ufffd/#20\ufffd"}:CLOSE_TAG_CODE: to arrange ticks' labels (it places them strictly below ticks). `,g=$localize`:␟b43e37a55c51eed01f3c7b31c7fb8c20e9ea09ce␟7490709384902699339: The mixin accepts only a single argument – size of the slider ( ${"[\ufffd#23\ufffd|\ufffd#24\ufffd]"}:START_TAG_CODE:m${"[\ufffd/#23\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_CODE: or ${"[\ufffd#23\ufffd|\ufffd#24\ufffd]"}:START_TAG_CODE:s${"[\ufffd/#23\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_CODE: ). `,g=e.\u0275\u0275i18nPostprocess(g),S=$localize`:␟1c2f048f4281e4ee3db216fc44e19c2c36fb4478␟8285530445387044058:KeySteps`,N=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,f=$localize`:␟a11028ca3c10ed474edf5dbfa2754e26d3d18cd2␟5313959728516521310: Min value `,R=$localize`:␟e19aee5686b43d533c4778f15c66a64584c493d3␟7525448588827957289: Max value `,P=$localize`:␟8dfc46111873255f9a00be9bbc894f8b5f38f108␟2083976673220646394: Number of actual discrete slider steps `,D=$localize`:␟23f30119daeff6564906dba6e420104007f78835␟6434524407760308527: Quantum `,y=$localize`:␟7d601e1c1a940ef8835249f19cb47d2311d8fd1e␟4941460931129258402: A number of visual segments `,x=$localize`:␟2883d0ab4e0e0af2984d0424198392cd5a3d234d␟5861269790634284762: Anchor points of non-uniform format between value and position `,h=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,A=$localize`:␟63d35ea4b9b1256bf46c9b74912fa614224022bc␟3604160805509190513: Plural forms for labels. TuiPluralize array is deprecated. Use object that mimics the ${"\ufffd#1\ufffd"}:START_LINK: ICU format ${"\ufffd/#1\ufffd"}:CLOSE_LINK: for i18nPlural ${"\ufffd#2\ufffd"}:START_PARAGRAPH:${"\ufffd#3\ufffd"}:START_TAG_STRONG: See examples how create labels for ticks without this property (outside of the component). ${"\ufffd/#3\ufffd"}:CLOSE_TAG_STRONG:${"\ufffd/#2\ufffd"}:CLOSE_PARAGRAPH:`,p=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#10\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#10\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,p=e.\u0275\u0275i18nPostprocess(p),$=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","Range","package","KIT","type","components"],["pageTab",""],l,["status","warning"],[1,"tui-space_top-0"],t,a,r,["id","base","heading",i,3,"content"],["id","sizes","heading",O,3,"content"],["id","segments","heading",F,3,"content"],[1,"tui-space_bottom-8"],M,g,["id","key-steps","heading",S,3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","steps","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","quantum","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","segments","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","keySteps","documentationPropertyMode","input","documentationPropertyType","TuiKeySteps",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","pluralize","documentationPropertyMode","input","documentationPropertyType","TuiPluralize | Record<string, string>",3,"documentationPropertyDeprecated","documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","min","max","steps","segments","pluralize","keySteps","size","quantum"],N,f,R,P,D,y,x,h,A,["tuiLink","","href","https://unicode-org.github.io/icu/userguide/format_parse/messages/"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],p,["filename","myComponent.component.ts",3,"code"],$,["filename","myComponent.template.html",3,"code"]]},template:function(t,a){1&t&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,q,28,4,"ng-template",1),e.\u0275\u0275template(2,ue,12,16,"ng-template",1),e.\u0275\u0275template(3,_e,17,3,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[L.q,v.n,b.L,V.f,z,U,K,B,k.F,Q.z,Y.B,_.U,c.H,m.NgControlStatus,m.FormControlDirective,W.V,Z.c],encapsulation:2,changeDetection:0}),n})(),ge=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[E.Ltw,E.$fu,u.ez,m.FormsModule,m.ReactiveFormsModule,d.jzK,T.fV,E.ydP,d.HiG,d.EIu,G.Bz.forChild((0,T.Ve)(ce))]]}),n})()}}]);