(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{fi5P:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputDateModule",function(){return ie});var a=n("SVse"),o=n("s7LF"),r=n("iInd"),i=n("zIlJ"),l=n("qpvg"),d=n("ErM8"),m=n("QKt8"),u=n("gjpr"),c=n("8Y7J"),s=n("0Ksk"),p=n("hCbB"),f=n("0etI"),T=n("ReYJ"),b=n("WQeZ"),h=n("WDJX"),C=n("PYg8"),S=n("jo1D"),y=n("48HZ"),x=n("q5pz"),E=n("uW1G"),_=n("cmnN"),D=n("9wUs");const g=function(){return[]};let v=(()=>{class e{constructor(){this.testForm=new o.FormGroup({testValue:new o.FormControl(new s.hb(2017,0,15))})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-example-1"]],decls:9,vars:8,consts:function(){let e;return e=$localize`:␟94fc108253bd1502cd271951ce40db76787fe618␟918573850120182890: If a field is optional, but unfinished field should be marked as invalid, use ${"\ufffd#3\ufffd"}:START_TAG_CODE:tuiUnfinishedValidator${"\ufffd/#3\ufffd"}:CLOSE_TAG_CODE: directive `,[[1,"b-form",3,"formGroup","tuiTextfieldCleaner"],e,["tuiUnfinishedValidator","Finish filling the field","formControlName","testValue"],["formControlName","testValue",3,"error"]]},template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"form",0),c["\u0275\u0275elementStart"](1,"p"),c["\u0275\u0275i18nStart"](2,1),c["\u0275\u0275element"](3,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"tui-input-date",2),c["\u0275\u0275text"](5," Choose a date "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](6,"tui-error",3),c["\u0275\u0275pipe"](7,"async"),c["\u0275\u0275pipe"](8,"tuiFieldError"),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("formGroup",t.testForm)("tuiTextfieldCleaner",!0),c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("error",c["\u0275\u0275pipeBind1"](7,3,c["\u0275\u0275pipeBind1"](8,5,c["\u0275\u0275pureFunction0"](7,g)))))},directives:[o["\u0275angular_packages_forms_forms_ba"],o.NgControlStatusGroup,o.FormGroupDirective,S.b,y.a,x.a,E.a,o.NgControlStatus,o.FormControlName,_.a],pipes:[a.b,D.a],encapsulation:2,changeDetection:0}),e})();var A=n("93Am"),V=n("W527");let $=(()=>{class e{constructor(){this.testForm=new o.FormGroup({testValue:new o.FormControl(new s.hb(2017,2,15))})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-example-2"]],decls:7,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","tuiTextfieldSize","s"],["formControlName","testValue","tuiTextfieldSize","m",1,"tui-space_vertical-4",3,"tuiTextfieldLabelOutside"],["formControlName","testValue","tuiTextfieldSize","l"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"form",0),c["\u0275\u0275elementStart"](1,"tui-input-date",1),c["\u0275\u0275text"](2," Choose a date "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"tui-input-date",2),c["\u0275\u0275text"](4," Choose a date "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"tui-input-date",3),c["\u0275\u0275text"](6," Choose a date "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("formGroup",t.testForm),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0))},directives:[o["\u0275angular_packages_forms_forms_ba"],o.NgControlStatusGroup,o.FormGroupDirective,y.a,x.a,o.NgControlStatus,o.FormControlName,A.b,V.b],encapsulation:2,changeDetection:0}),e})(),O=(()=>{class e{constructor(){this.from=null,this.to=null,this.min=new s.hb(2017,9,4),this.max=s.hb.currentLocal(),this.items=[new m.pb(s.T.append({year:-1}),"Until today",s.hb.currentLocal())]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-example-3"]],decls:8,vars:6,consts:[[1,"tui-text_h4"],[1,"b-form"],[3,"min","max","ngModel","ngModelChange"],[3,"min","items","ngModel","ngModelChange"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"h2",0),c["\u0275\u0275text"](1,"Taiga UI usage experience"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"p",1),c["\u0275\u0275elementStart"](3,"tui-input-date",2),c["\u0275\u0275listener"]("ngModelChange",function(e){return t.from=e}),c["\u0275\u0275text"](4," Start "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"p",1),c["\u0275\u0275elementStart"](6,"tui-input-date",3),c["\u0275\u0275listener"]("ngModelChange",function(e){return t.to=e}),c["\u0275\u0275text"](7," Finish "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("min",t.min)("max",t.max)("ngModel",t.from),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("min",t.from||t.min)("items",t.items)("ngModel",t.to))},directives:[y.a,x.a,o.NgControlStatus,o.NgModel],encapsulation:2,changeDetection:0}),e})();var P=n("rgoq"),L=n("nsWG");let G=(()=>{class e{constructor(){this.control=new o.FormControl(new s.hb(2017,0,15))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-example-4"]],features:[c["\u0275\u0275ProvidersFeature"]([{provide:s.G,useValue:"YMD"},{provide:s.H,useValue:"/"}])],decls:11,vars:1,consts:[[1,"tui-space_bottom-4","b-form"],[1,"b-form",3,"formControl"],["tuiTextfield","","autocomplete","bday"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-notification",0),c["\u0275\u0275text"](1," If you need to set some attributes or listen to events on native "),c["\u0275\u0275elementStart"](2,"code"),c["\u0275\u0275text"](3,"input"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](4," , you can put it inside with "),c["\u0275\u0275elementStart"](5,"code"),c["\u0275\u0275text"](6,"Textfield"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](7," directive as shown below\n"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"tui-input-date",1),c["\u0275\u0275text"](9," Choose a date "),c["\u0275\u0275element"](10,"input",2),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](8),c["\u0275\u0275property"]("formControl",t.control))},directives:[P.a,y.a,x.a,o.NgControlStatus,o.FormControlDirective,L.a],encapsulation:2,changeDetection:0}),e})(),w=(()=>{class e{fromControlValue(e){return e&&s.hb.fromLocalNativeDate(e)}toControlValue(e){return(null==e?void 0:e.toLocalNativeDate())||null}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=c["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),I=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=c["\u0275\u0275defineDirective"]({type:e,selectors:[["tui-input-date","toNativeDate",""]],features:[c["\u0275\u0275ProvidersFeature"]([{provide:m.i,useClass:w}])]}),e})(),R=(()=>{class e{constructor(){this.nativeDateControl=new o.FormControl(new Date(2022,0,26)),this.defaultControl=new o.FormControl(new s.hb(2022,0,26))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-example-5"]],decls:24,vars:4,consts:[[1,"b-form",3,"formControl"],["toNativeDate","",1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"h3"),c["\u0275\u0275text"](1,"Control's output as TuiDay (default)"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-input-date",0),c["\u0275\u0275text"](3," Choose a date\n"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"p"),c["\u0275\u0275text"](5,"Stringified control value:"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"p"),c["\u0275\u0275elementStart"](7,"code"),c["\u0275\u0275text"](8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](9,"hr"),c["\u0275\u0275elementStart"](10,"h3"),c["\u0275\u0275text"](11,"Control's output as native Date"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](12,"p"),c["\u0275\u0275text"](13," (see "),c["\u0275\u0275elementStart"](14,"code"),c["\u0275\u0275text"](15,"toNativeDate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](16," directive)\n"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](17,"tui-input-date",1),c["\u0275\u0275text"](18," Choose a date\n"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](19,"p"),c["\u0275\u0275text"](20,"Stringified control value:"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](21,"p"),c["\u0275\u0275elementStart"](22,"code"),c["\u0275\u0275text"](23),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("formControl",t.defaultControl),c["\u0275\u0275advance"](6),c["\u0275\u0275textInterpolate"](t.defaultControl.value),c["\u0275\u0275advance"](9),c["\u0275\u0275property"]("formControl",t.nativeDateControl),c["\u0275\u0275advance"](6),c["\u0275\u0275textInterpolate"](t.nativeDateControl.value))},directives:[y.a,x.a,o.NgControlStatus,o.FormControlDirective,I],encapsulation:2,changeDetection:0}),e})();var M=n("mbit"),N=n("F2nr"),H=n("R5K/"),k=n("EI/i"),F=n("ZMgf"),z=n("HawL"),K=n("PRyZ"),U=n("fIai"),j=n("JKY/");function J(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",2),c["\u0275\u0275i18nStart"](1,3),c["\u0275\u0275element"](2,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"h3"),c["\u0275\u0275i18n"](4,4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"dl"),c["\u0275\u0275i18nStart"](6,5),c["\u0275\u0275elementStart"](7,"dt"),c["\u0275\u0275element"](8,"code"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"dd",6),c["\u0275\u0275element"](10,"code"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"dt"),c["\u0275\u0275element"](12,"code"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](13,"dd"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](14,"p",2),c["\u0275\u0275elementStart"](15,"a",7),c["\u0275\u0275text"](16," See example "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](17," with the usage of these tokens. "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](18,"h3"),c["\u0275\u0275i18n"](19,8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](20,"dl"),c["\u0275\u0275i18nStart"](21,9),c["\u0275\u0275elementStart"](22,"dt"),c["\u0275\u0275element"](23,"code"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](24,"dd"),c["\u0275\u0275element"](25,"a",10),c["\u0275\u0275elementStart"](26,"p"),c["\u0275\u0275element"](27,"a",11),c["\u0275\u0275element"](28,"a",12),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](29,"tui-doc-example",13),c["\u0275\u0275element"](30,"tui-input-date-example-1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](31,"tui-doc-example",14),c["\u0275\u0275element"](32,"tui-input-date-example-2"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](33,"tui-doc-example",15),c["\u0275\u0275element"](34,"tui-input-date-example-3"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](35,"tui-doc-example",16),c["\u0275\u0275element"](36,"tui-input-date-example-4"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](37,"tui-doc-example",17),c["\u0275\u0275element"](38,"tui-input-date-example-5"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](29),c["\u0275\u0275property"]("content",e.example1),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example2),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example3),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example4),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example5)}}function W(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-date",26),c["\u0275\u0275text"](1," Choose a date "),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"](2);c["\u0275\u0275property"]("formControl",e.control)("focusable",e.focusable)("min",e.min)("max",e.max)("markerHandler",e.markerHandler)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("disabledItemHandler",e.disabledItemHandler)("items",e.items)("tuiTextfieldIconLeft",e.iconLeft)("tuiTextfieldAutocomplete",e.autocomplete)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldExampleText",e.exampleText)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)}}function Y(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,27),c["\u0275\u0275element"](1,"code"),c["\u0275\u0275i18nEnd"]())}function q(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,28),c["\u0275\u0275element"](1,"div"),c["\u0275\u0275element"](2,"strong"),c["\u0275\u0275i18nEnd"]())}function B(e,t){1&e&&c["\u0275\u0275i18n"](0,29)}function Z(e,t){1&e&&c["\u0275\u0275i18n"](0,30)}function X(e,t){1&e&&c["\u0275\u0275i18n"](0,31)}function Q(e,t){1&e&&c["\u0275\u0275i18n"](0,32)}function ee(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-doc-demo",18),c["\u0275\u0275template"](1,W,2,20,"ng-template"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-doc-documentation"),c["\u0275\u0275template"](3,Y,2,0,"ng-template",19),c["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().disabled=t}),c["\u0275\u0275template"](4,q,3,0,"ng-template",20),c["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().disabledItemHandler=t}),c["\u0275\u0275template"](5,B,1,0,"ng-template",21),c["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().items=t}),c["\u0275\u0275template"](6,Z,1,0,"ng-template",22),c["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().markerHandler=t}),c["\u0275\u0275template"](7,X,1,0,"ng-template",23),c["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().min=t}),c["\u0275\u0275template"](8,Q,1,0,"ng-template",24),c["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().max=t}),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](9,"inherited-documentation",25)}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275property"]("control",e.control),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("documentationPropertyValue",e.disabled),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.itemsVariants)("documentationPropertyValue",e.items),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.markerHandlerVariants)("documentationPropertyValue",e.markerHandler),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("dropdown",!0)}}function te(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"p"),c["\u0275\u0275i18nStart"](1,33),c["\u0275\u0275element"](2,"a",34),c["\u0275\u0275element"](3,"code"),c["\u0275\u0275element"](4,"code"),c["\u0275\u0275element"](5,"a",35),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"ol",36),c["\u0275\u0275elementStart"](7,"li"),c["\u0275\u0275elementStart"](8,"p"),c["\u0275\u0275i18nStart"](9,37),c["\u0275\u0275element"](10,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](11,"tui-doc-code",38),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](12,"li"),c["\u0275\u0275elementStart"](13,"p"),c["\u0275\u0275i18nStart"](14,39),c["\u0275\u0275element"](15,"code"),c["\u0275\u0275element"](16,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](17,"tui-doc-code",40),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](18,"li"),c["\u0275\u0275text"](19," Use "),c["\u0275\u0275elementStart"](20,"code"),c["\u0275\u0275text"](21,"TuiInputDate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](22," in template: "),c["\u0275\u0275element"](23,"tui-doc-code",41),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](11),c["\u0275\u0275property"]("code",e.exampleModule),c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("code",e.exampleForm),c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("code",e.exampleHtml)}}const ne=["primary","secondary"],ae=["success"];let oe=(()=>{class e extends p.a{constructor(){super(...arguments),this.exampleForm=n.e(734).then(n.bind(null,"ue/1")),this.exampleModule=n.e(735).then(n.bind(null,"i1x+")),this.exampleHtml=n.e(736).then(n.bind(null,"tyBZ")),this.example1={TypeScript:n.e(724).then(n.bind(null,"T6NR")),HTML:n.e(723).then(n.bind(null,"5mDG"))},this.example2={TypeScript:n.e(726).then(n.bind(null,"KGle")),HTML:n.e(725).then(n.bind(null,"ukml"))},this.example3={TypeScript:n.e(728).then(n.bind(null,"s+/h")),HTML:n.e(727).then(n.bind(null,"29q6"))},this.example4={TypeScript:n.e(730).then(n.bind(null,"bEMS")),HTML:n.e(729).then(n.bind(null,"ConD"))},this.example5={TypeScript:n.e(732).then(n.bind(null,"2Gv0")),HTML:n.e(731).then(n.bind(null,"jURR")),"native-date-transformer.directive.ts":n.e(733).then(n.bind(null,"hHdX"))},this.minVariants=[s.N,new s.hb(2017,2,5),new s.hb(1900,0,1)],this.min=this.minVariants[0],this.maxVariants=[s.T,new s.hb(2017,11,11),new s.hb(2020,2,5),new s.hb(2300,0,1)],this.max=this.maxVariants[0],this.disabledItemHandlerVariants=[s.a,({day:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.itemsVariants=[[],[new m.pb(s.T.append({year:-1}),"Until today")]],this.markerHandlerVariants=[d.q,e=>e.day%2==0?ne:ae],this.markerHandler=this.markerHandlerVariants[0],this.items=this.itemsVariants[0],this.autocompleteVariants=["off","bday"],this.autocomplete="",this.cleaner=!1,this.control=new o.FormControl(null,o.Validators.required)}}return e.\u0275fac=function(t){return re(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-input-date"]],features:[c["\u0275\u0275ProvidersFeature"]([{provide:f.a,useExisting:Object(c.forwardRef)(()=>e)}]),c["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:function(){let e,t,n,a,o,r,i,l,d,m,u,s,p,f,T,b,h,C,S;return e=$localize`:␟fc2811ea354291326a11dd08fc35a97719f75c2d␟2917939038176412665:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputDate${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: – input with a calendar. `,t=$localize`:␟44191f6f2084b7e19ed30289598f45f6dc88ef96␟9067186024080940878:DI-tokens for date localization:`,n=$localize`:␟ce9790eaf90c30d2b6ab0af894665e9a649da178␟5888187430077433259:${"[\ufffd#7\ufffd|\ufffd#11\ufffd]"}:START_TAG_DT:${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TUI_DATE_FORMAT${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#7\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_DT:${"\ufffd#9\ufffd"}:START_TAG_DD: active date format ( ${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:'DMY' | 'MDY' | 'YMD'${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE: ). ${"[\ufffd/#9\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_DD:${"[\ufffd#7\ufffd|\ufffd#11\ufffd]"}:START_TAG_DT:${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TUI_DATE_SEPARATOR${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#7\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_DT:${"\ufffd#13\ufffd"}:START_TAG_DD_1:single-character date's separator (dot, slash etc.).${"[\ufffd/#9\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_DD:`,n=c["\u0275\u0275i18nPostprocess"](n),a=$localize`:␟1e189ebe2d938d6aaa6a9a2f9adeff1e3b372aac␟4839071173512899768:DI-tokens for input-configurations:`,o=$localize`:␟c3dbb47cc33bb0541b868b672596570b063d5377␟8174380454533362440:${"\ufffd#22\ufffd"}:START_TAG_DT:${"\ufffd#23\ufffd"}:START_TAG_CODE:TUI_DATE_VALUE_TRANSFORMER${"\ufffd/#23\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#22\ufffd"}:CLOSE_TAG_DT:${"\ufffd#24\ufffd"}:START_TAG_DD: custom format of control output ( ${"\ufffd#25\ufffd"}:START_LINK: TuiDay ${"[\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd]"}:CLOSE_LINK: is default). ${"\ufffd#26\ufffd"}:START_PARAGRAPH:${"\ufffd#27\ufffd"}:START_LINK_1: See example ${"[\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd]"}:CLOSE_LINK: with built-in ${"\ufffd#28\ufffd"}:START_LINK_2: Date ${"[\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd]"}:CLOSE_LINK: object as control's output. ${"\ufffd/#26\ufffd"}:CLOSE_PARAGRAPH:${"\ufffd/#24\ufffd"}:CLOSE_TAG_DD:`,o=c["\u0275\u0275i18nPostprocess"](o),r=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,i=$localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`,l=$localize`:␟eb73759f9121c31958ef3331f1a481a509877cb5␟6714747026286972804:With named dates`,d=$localize`:␟d72cd49783dcc040c08cd98ae2904eab57a0bb2e␟6669974721565177418:Date localization`,m=$localize`:␟8b48bfc50979dda56f42928887986fe0052cbc99␟4905475235330782118:With native Date output`,u=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,s=$localize`:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\ufffd#1\ufffd"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,p=$localize`:␟537796d614601f54059199b6f42a55fd283fa400␟6619372356871511006: A list of preset dates for dropdown `,f=$localize`:␟23c9859665a49041525158245d62b03eb6e0bb77␟7126872511108805662: A handler that gets date and returns null or a tuple with circled marker colors `,T=$localize`:␟4154b59e6a74ee1968fd07ad38c2a5b5329c1a78␟228579238578588280: Minimum date `,b=$localize`:␟ce93c802f63dbda020cc57d47ed04f9f56fed31f␟2371503113949525542: Maximum date `,h=$localize`:␟5616c14157b3a5879b9da1e6c8a1e9fb827ff4d9␟7181776168306782987: Mobile calendar does not use the same dropdown with calendar as desktop uses. It uses digital keyboard. If you want to open ${"\ufffd#2\ufffd"}:START_LINK: mobile calendar ${"[\ufffd/#2\ufffd|\ufffd/#5\ufffd]"}:CLOSE_LINK: , add imports of ${"[\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:TuiMobileCalendarDialogModule${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:TuiDialogModule${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: into your root module. Also, check that you did not forget about ${"\ufffd#5\ufffd"}:START_LINK_1: tui-root ${"[\ufffd/#2\ufffd|\ufffd/#5\ufffd]"}:CLOSE_LINK:`,h=c["\u0275\u0275i18nPostprocess"](h),C=$localize`:␟592c56416c0d2ae15744eba65a71a0c074426731␟6680887665039790545: Import an Angular module for forms and ${"\ufffd#10\ufffd"}:START_TAG_CODE:TuiInputDateModule${"\ufffd/#10\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,S=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#15\ufffd|\ufffd#16\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#15\ufffd|\ufffd/#16\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#15\ufffd|\ufffd#16\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#15\ufffd|\ufffd/#16\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,S=c["\u0275\u0275i18nPostprocess"](S),[["header","InputDate","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-9"],e,t,n,[1,"tui-space_bottom-5"],["tuiLink","","routerLink",".","fragment","date-localization"],a,o,["tuiLink","","target","_blank","href","https://github.com/Tinkoff/taiga-ui/blob/main/projects/cdk/date-time/day.ts"],["tuiLink","","routerLink",".","fragment","native-date-output"],["tuiLink","","target","_blank","href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"],["id","base","heading",r,3,"content"],["id","sizes","heading",i,3,"content"],["id","named","heading",l,3,"content"],["id","date-localization","heading",d,3,"content"],["id","native-date-output","heading",m,3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","items","documentationPropertyMode","input","documentationPropertyType","TuiNamedDay[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","markerHandler","documentationPropertyMode","input","documentationPropertyType","TuiMarkerHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],[3,"formControl","focusable","min","max","markerHandler","pseudoFocused","pseudoHovered","pseudoInvalid","readOnly","disabledItemHandler","items","tuiTextfieldIconLeft","tuiTextfieldAutocomplete","tuiTextfieldCleaner","tuiTextfieldExampleText","tuiTextfieldLabelOutside","tuiTextfieldSize","tuiHintContent","tuiHintDirection","tuiHintMode"],u,s,p,f,T,b,h,["tuiLink","","routerLink","/components/mobile-calendar"],["tuiLink","","routerLink","/getting-started"],[1,"b-demo-steps"],C,["filename","myComponent.module.ts",3,"code"],S,["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]]},template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275template"](1,J,39,5,"ng-template",1),c["\u0275\u0275template"](2,ee,10,13,"ng-template",1),c["\u0275\u0275template"](3,te,24,3,"ng-template",1),c["\u0275\u0275elementEnd"]())},directives:[T.a,b.a,h.a,r.e,C.a,v,$,O,G,R,M.a,N.a,H.a,k.a,y.a,x.a,o.NgControlStatus,o.FormControlDirective,F.b,z.b,S.b,K.b,V.b,A.b,U.a,j.a],encapsulation:2,changeDetection:0}),e})();const re=c["\u0275\u0275getInheritedFactory"](oe);let ie=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[i.m,u.a,o.ReactiveFormsModule,o.FormsModule,a.c,d.yb,m.yb,d.ab,m.V,l.f,m.Ob,d.Xb,d.tb,d.nb,m.O,d.Gb,r.f.forChild(Object(i.v)(oe))]]}),e})()}}]);