(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{Ofwz:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputDateRangeModule",function(){return re});var a=n("SVse"),o=n("s7LF"),r=n("iInd"),i=n("zIlJ"),l=n("qpvg"),d=n("ErM8"),u=n("QKt8"),m=n("gjpr"),c=n("8Y7J"),s=n("0Ksk"),p=n("hCbB"),f=n("0etI"),h=n("ReYJ"),T=n("WQeZ"),y=n("WDJX"),b=n("PYg8"),C=n("rgoq"),g=n("j1x7"),S=n("2nSB"),_=n("uW1G"),E=n("nsWG");let x=(()=>{class e{constructor(){this.testForm=new o.FormGroup({testValue:new o.FormControl(new s.ib(new s.hb(2018,2,10),new s.hb(2018,3,20)))}),this.min=new s.hb(2e3,2,20),this.max=new s.hb(2040,2,20)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-range-example-1"]],decls:7,vars:3,consts:function(){let e;return e=$localize`:␟94fc108253bd1502cd271951ce40db76787fe618␟918573850120182890: If a field is optional, but unfinished field should be marked as invalid, use ${"\ufffd#3\ufffd"}:START_TAG_CODE:tuiUnfinishedValidator${"\ufffd/#3\ufffd"}:CLOSE_TAG_CODE: directive `,[[1,"b-form",3,"formGroup"],e,["tuiUnfinishedValidator","Finish filling the field","formControlName","testValue",3,"min","max"],["tuiTextfield","","placeholder","From - To"]]},template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"form",0),c["\u0275\u0275elementStart"](1,"p"),c["\u0275\u0275i18nStart"](2,1),c["\u0275\u0275element"](3,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"tui-input-date-range",2),c["\u0275\u0275text"](5," Choose dates "),c["\u0275\u0275element"](6,"input",3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("formGroup",t.testForm),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("min",t.min)("max",t.max))},directives:[o["\u0275angular_packages_forms_forms_ba"],o.NgControlStatusGroup,o.FormGroupDirective,g.a,S.a,_.a,o.NgControlStatus,o.FormControlName,E.a],encapsulation:2,changeDetection:0}),e})(),V=(()=>{class e{constructor(){this.control=new o.FormControl(new s.ib(new s.hb(2018,2,10),new s.hb(2018,3,20)))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-range-example-2"]],decls:2,vars:1,consts:[[1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-date-range",0),c["\u0275\u0275text"](1," Choose dates\n"),c["\u0275\u0275elementEnd"]()),2&e&&c["\u0275\u0275property"]("formControl",t.control)},directives:[g.a,S.a,o.NgControlStatus,o.FormControlDirective],encapsulation:2,changeDetection:0}),e})(),D=(()=>{class e{constructor(){this.control=new o.FormControl(new s.ib(new s.hb(2018,2,10),new s.hb(2018,3,20)))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-range-example-3"]],features:[c["\u0275\u0275ProvidersFeature"]([{provide:s.G,useValue:"YMD"},{provide:s.H,useValue:"/"}])],decls:2,vars:1,consts:[[1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-date-range",0),c["\u0275\u0275text"](1," Choose dates\n"),c["\u0275\u0275elementEnd"]()),2&e&&c["\u0275\u0275property"]("formControl",t.control)},directives:[g.a,S.a,o.NgControlStatus,o.FormControlDirective],encapsulation:2,changeDetection:0}),e})(),P=(()=>{class e{fromControlValue(e){return e&&s.hb.fromLocalNativeDate(e)}toControlValue(e){return(null==e?void 0:e.toLocalNativeDate())||null}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=c["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class A{constructor(e){this.dateTransformer=e}fromControlValue(e){const[t,n]=e||[null,null],a=t&&this.dateTransformer.fromControlValue(t),o=n&&this.dateTransformer.fromControlValue(n);return a&&o&&new s.ib(a,o)}toControlValue(e){const t=e&&this.dateTransformer.toControlValue(e.from),n=e&&this.dateTransformer.toControlValue(e.to);return t&&n&&[t,n]}}function L(e){return e&&new A(e)}let $=(()=>{class e{constructor(){this.control=new o.FormControl([new Date(2018,2,10),new Date(2018,3,20)])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-range-example-4"]],features:[c["\u0275\u0275ProvidersFeature"]([{provide:u.i,useClass:P},{provide:u.g,deps:[u.i],useFactory:L}])],decls:7,vars:2,consts:[[1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-date-range",0),c["\u0275\u0275text"](1," Choose dates\n"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275text"](3,"Stringified control value:"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"p"),c["\u0275\u0275elementStart"](5,"code"),c["\u0275\u0275text"](6),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("formControl",t.control),c["\u0275\u0275advance"](6),c["\u0275\u0275textInterpolate"](t.control.value))},directives:[g.a,S.a,o.NgControlStatus,o.FormControlDirective],encapsulation:2,changeDetection:0}),e})();var v=n("mbit"),w=n("F2nr"),O=n("R5K/"),G=n("EI/i"),I=n("ZMgf"),R=n("jo1D"),M=n("PRyZ"),k=n("W527"),H=n("93Am"),F=n("fIai"),N=n("JKY/");function z(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"p",2),c["\u0275\u0275i18nStart"](1,3),c["\u0275\u0275element"](2,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"h3"),c["\u0275\u0275i18n"](4,4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"dl"),c["\u0275\u0275i18nStart"](6,5),c["\u0275\u0275elementStart"](7,"dt"),c["\u0275\u0275element"](8,"code"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"dd",6),c["\u0275\u0275element"](10,"code"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"dt"),c["\u0275\u0275element"](12,"code"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](13,"dd"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](14,"p",2),c["\u0275\u0275elementStart"](15,"a",7),c["\u0275\u0275text"](16," See an example "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](17," with the usage of these tokens. "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](18,"h3"),c["\u0275\u0275i18n"](19,8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](20,"dl"),c["\u0275\u0275i18nStart"](21,9),c["\u0275\u0275elementStart"](22,"dt"),c["\u0275\u0275element"](23,"code"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](24,"dd"),c["\u0275\u0275element"](25,"a",10),c["\u0275\u0275elementStart"](26,"p"),c["\u0275\u0275element"](27,"a",11),c["\u0275\u0275element"](28,"code"),c["\u0275\u0275element"](29,"code"),c["\u0275\u0275element"](30,"a",12),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](31,"tui-doc-example",13),c["\u0275\u0275elementStart"](32,"tui-notification",14),c["\u0275\u0275text"](33," If you need to set some attributes or listen to events on native "),c["\u0275\u0275elementStart"](34,"code"),c["\u0275\u0275text"](35,"input"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](36," , you can put it inside with "),c["\u0275\u0275elementStart"](37,"code"),c["\u0275\u0275text"](38,"Textfield"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](39," directive as shown below "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](40,"tui-input-date-range-example-1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](41,"tui-doc-example",15),c["\u0275\u0275element"](42,"tui-input-date-range-example-2"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](43,"tui-doc-example",16),c["\u0275\u0275element"](44,"tui-input-date-range-example-3"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](45,"tui-doc-example",17),c["\u0275\u0275element"](46,"tui-input-date-range-example-4"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](31),c["\u0275\u0275property"]("content",e.example1),c["\u0275\u0275advance"](10),c["\u0275\u0275property"]("content",e.example2),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example3),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example4)}}function K(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-date-range",28),c["\u0275\u0275text"](1," Choose dates "),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"](2);c["\u0275\u0275property"]("focusable",e.focusable)("formControl",e.control)("defaultViewedMonth",e.defaultViewedMonth)("items",e.items)("markerHandler",e.markerHandler)("min",e.min)("max",e.max)("minLength",e.minLength)("maxLength",e.maxLength)("tuiTextfieldIconLeft",e.iconLeft)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldExampleText",e.exampleText)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)("disabledItemHandler",e.disabledItemHandler)}}function j(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,29),c["\u0275\u0275element"](1,"code"),c["\u0275\u0275i18nEnd"]())}function J(e,t){1&e&&c["\u0275\u0275i18n"](0,30)}function U(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,31),c["\u0275\u0275element"](1,"div"),c["\u0275\u0275element"](2,"strong"),c["\u0275\u0275i18nEnd"]())}function W(e,t){1&e&&c["\u0275\u0275i18n"](0,32)}function Y(e,t){1&e&&c["\u0275\u0275i18n"](0,33)}function B(e,t){1&e&&c["\u0275\u0275i18n"](0,34)}function q(e,t){1&e&&c["\u0275\u0275i18n"](0,35)}function X(e,t){1&e&&c["\u0275\u0275i18n"](0,36)}function Z(e,t){1&e&&c["\u0275\u0275i18n"](0,37)}function Q(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-doc-demo",18),c["\u0275\u0275template"](1,K,2,22,"ng-template"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-doc-documentation"),c["\u0275\u0275template"](3,j,2,0,"ng-template",19),c["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().disabled=t}),c["\u0275\u0275template"](4,J,1,0,"ng-template",20),c["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().defaultViewedMonth=t}),c["\u0275\u0275template"](5,U,3,0,"ng-template",21),c["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().disabledItemHandler=t}),c["\u0275\u0275template"](6,W,1,0,"ng-template",22),c["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().items=t}),c["\u0275\u0275template"](7,Y,1,0,"ng-template",23),c["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().markerHandler=t}),c["\u0275\u0275template"](8,B,1,0,"ng-template",24),c["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().min=t}),c["\u0275\u0275template"](9,q,1,0,"ng-template",25),c["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().max=t}),c["\u0275\u0275template"](10,X,1,0,"ng-template",26),c["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().minLength=t}),c["\u0275\u0275template"](11,Z,1,0,"ng-template",27),c["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().maxLength=t}),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](12,"inherited-documentation")}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275property"]("control",e.control),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("documentationPropertyValue",e.disabled),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.defaultViewedMonthVariants)("documentationPropertyValue",e.defaultViewedMonth),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.itemsVariants)("documentationPropertyValue",e.items),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.markerHandlerVariants)("documentationPropertyValue",e.markerHandler),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.dayVariants)("documentationPropertyValue",e.min),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.dayVariants)("documentationPropertyValue",e.max),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.minLengthVariants)("documentationPropertyValue",e.minLength),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.maxLengthVariants)("documentationPropertyValue",e.maxLength)}}function ee(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"p"),c["\u0275\u0275i18nStart"](1,38),c["\u0275\u0275element"](2,"a",39),c["\u0275\u0275element"](3,"code"),c["\u0275\u0275element"](4,"code"),c["\u0275\u0275element"](5,"a",40),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"ol",41),c["\u0275\u0275elementStart"](7,"li"),c["\u0275\u0275elementStart"](8,"p"),c["\u0275\u0275i18nStart"](9,42),c["\u0275\u0275element"](10,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](11,"tui-doc-code",43),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](12,"li"),c["\u0275\u0275elementStart"](13,"p"),c["\u0275\u0275i18nStart"](14,44),c["\u0275\u0275element"](15,"code"),c["\u0275\u0275element"](16,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](17,"tui-doc-code",45),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](18,"li"),c["\u0275\u0275text"](19," Use "),c["\u0275\u0275elementStart"](20,"code"),c["\u0275\u0275text"](21,"TuiInputDateRange"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](22," in template: "),c["\u0275\u0275element"](23,"tui-doc-code",46),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](11),c["\u0275\u0275property"]("code",e.exampleModule),c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("code",e.exampleForm),c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("code",e.exampleHtml)}}const te=["primary","secondary"],ne=["success"];let ae=(()=>{class e extends p.a{constructor(){super(...arguments),this.exampleModule=n.e(709).then(n.bind(null,"vC+/")),this.exampleHtml=n.e(710).then(n.bind(null,"6nLA")),this.exampleForm=n.e(708).then(n.bind(null,"yE2b")),this.example1={TypeScript:n.e(700).then(n.bind(null,"/9P7")),HTML:n.e(699).then(n.bind(null,"lwS0"))},this.example2={TypeScript:n.e(702).then(n.bind(null,"G2vA")),HTML:n.e(701).then(n.bind(null,"n+/p"))},this.example3={TypeScript:n.e(704).then(n.bind(null,"3lFb")),HTML:n.e(703).then(n.bind(null,"cd22"))},this.example4={TypeScript:n.e(706).then(n.bind(null,"XeXO")),HTML:n.e(705).then(n.bind(null,"6xPg")),"value-transformers.ts":n.e(707).then(n.bind(null,"InC1"))},this.dayVariants=[s.N,new s.hb(2021,2,5),new s.hb(1900,0,1),new s.hb(2300,0,1),s.T],this.min=this.dayVariants[0],this.minLengthVariants=[{day:3},{day:15}],this.minLength=null,this.maxLengthVariants=[{day:5},{month:1},{year:1}],this.maxLength=null,this.max=this.dayVariants[this.dayVariants.length-1],this.markerHandlerVariants=[d.q,e=>e.day%2==0?te:ne],this.markerHandler=this.markerHandlerVariants[0],this.cleaner=!1,this.disabledItemHandlerVariants=[s.a,({day:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.control=new o.FormControl(null,o.Validators.required),this.itemsVariants=[[],Object(u.Sb)()],this.items=this.itemsVariants[0],this.defaultViewedMonthVariants=[s.Jb.currentLocal(),s.Jb.currentLocal().append({month:1}),new s.Jb(2007,5)],this.defaultViewedMonth=this.defaultViewedMonthVariants[0]}}return e.\u0275fac=function(t){return oe(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-input-date-range"]],features:[c["\u0275\u0275ProvidersFeature"]([{provide:f.a,useExisting:Object(c.forwardRef)(()=>e)}]),c["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:function(){let e,t,n,a,o,r,i,l,d,u,m,s,p,f,h,T,y,b,C,g;return e=$localize`:␟d2d0c7a3331cfc0abccc0a31c9be9ed11b568504␟6250893485944821333:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputDate${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: is a field to input a range of dates. `,t=$localize`:␟44191f6f2084b7e19ed30289598f45f6dc88ef96␟9067186024080940878:DI-tokens for date localization:`,n=$localize`:␟4a9f8a78772cf0d29d68a56ec7d2e2e4cde207ba␟7722521738393615006:${"[\ufffd#7\ufffd|\ufffd#11\ufffd]"}:START_TAG_DT:${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TUI_DATE_FORMAT${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#7\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_DT:${"\ufffd#9\ufffd"}:START_TAG_DD: active date format ( ${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:'DMY' | 'MDY' | 'YMD'${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE: ) ${"[\ufffd/#9\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_DD:${"[\ufffd#7\ufffd|\ufffd#11\ufffd]"}:START_TAG_DT:${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TUI_DATE_SEPARATOR${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#7\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_DT:${"\ufffd#13\ufffd"}:START_TAG_DD_1:single-character date's separator (dot, slash etc.)${"[\ufffd/#9\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_DD:`,n=c["\u0275\u0275i18nPostprocess"](n),a=$localize`:␟1e189ebe2d938d6aaa6a9a2f9adeff1e3b372aac␟4839071173512899768:DI-tokens for input-configurations:`,o=$localize`:␟a889115d6a437c86488d83937a6a773891b3c218␟1221854426540962093:${"\ufffd#22\ufffd"}:START_TAG_DT:${"[\ufffd#23\ufffd|\ufffd#28\ufffd|\ufffd#29\ufffd]"}:START_TAG_CODE:TUI_DATE_RANGE_VALUE_TRANSFORMER${"[\ufffd/#23\ufffd|\ufffd/#28\ufffd|\ufffd/#29\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#22\ufffd"}:CLOSE_TAG_DT:${"\ufffd#24\ufffd"}:START_TAG_DD: custom format of control output ( ${"\ufffd#25\ufffd"}:START_LINK: TuiDayRange ${"[\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#30\ufffd]"}:CLOSE_LINK: is default). ${"\ufffd#26\ufffd"}:START_PARAGRAPH:${"\ufffd#27\ufffd"}:START_LINK_1: See an example ${"[\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#30\ufffd]"}:CLOSE_LINK: of how to provide transformers for ${"[\ufffd#23\ufffd|\ufffd#28\ufffd|\ufffd#29\ufffd]"}:START_TAG_CODE:InputDate${"[\ufffd/#23\ufffd|\ufffd/#28\ufffd|\ufffd/#29\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#23\ufffd|\ufffd#28\ufffd|\ufffd#29\ufffd]"}:START_TAG_CODE:InputDateRange${"[\ufffd/#23\ufffd|\ufffd/#28\ufffd|\ufffd/#29\ufffd]"}:CLOSE_TAG_CODE: to work with native ${"\ufffd#30\ufffd"}:START_LINK_2: Date ${"[\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#30\ufffd]"}:CLOSE_LINK: objects. ${"\ufffd/#26\ufffd"}:CLOSE_PARAGRAPH:${"\ufffd/#24\ufffd"}:CLOSE_TAG_DD:`,o=c["\u0275\u0275i18nPostprocess"](o),r=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,i=$localize`:␟5091f6acf0fbf0b72c4958189d20c85b8d7f42f0␟9065652012369821232:Big size`,l=$localize`:␟8b48bfc50979dda56f42928887986fe0052cbc99␟4905475235330782118:With native Date output`,d=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,u=$localize`:␟cee5a8a5054c8a1eed4236e17142f509a2da3c3a␟4370073840573771249: Default month to show `,m=$localize`:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\ufffd#1\ufffd"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,s=$localize`:␟0600d93e5689970aa785fe0413acf4c5da35b682␟1585752593868985764: Fixed intervals (shows 2 calendars with empty array) `,p=$localize`:␟23c9859665a49041525158245d62b03eb6e0bb77␟7126872511108805662: A handler that gets date and returns null or a tuple with circled marker colors `,f=$localize`:␟ef3b890c694996695759808838384501533c73fc␟7105748595977480347: Min date `,h=$localize`:␟9cd5094464a3da726ac76eec86e3b2b42d383faf␟6045744383953302270: Max date `,T=$localize`:␟309c0b4024f636a71dea973f24cd05b0d38af82b␟4884270346610812155: Minimal length of range `,y=$localize`:␟69cef120f415885c1d7258c5de495aa3cae21f85␟1253745446557993958: Maximal length of range `,b=$localize`:␟5616c14157b3a5879b9da1e6c8a1e9fb827ff4d9␟7181776168306782987: Mobile calendar does not use the same dropdown with calendar as desktop uses. It uses digital keyboard. If you want to open ${"\ufffd#2\ufffd"}:START_LINK: mobile calendar ${"[\ufffd/#2\ufffd|\ufffd/#5\ufffd]"}:CLOSE_LINK: , add imports of ${"[\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:TuiMobileCalendarDialogModule${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:TuiDialogModule${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: into your root module. Also, check that you did not forget about ${"\ufffd#5\ufffd"}:START_LINK_1: tui-root ${"[\ufffd/#2\ufffd|\ufffd/#5\ufffd]"}:CLOSE_LINK:`,b=c["\u0275\u0275i18nPostprocess"](b),C=$localize`:␟9b96102ad80a0d3a11e4fbb8383fedba8bc52a2b␟7275600632239735393: Import an Angular module for forms and ${"\ufffd#10\ufffd"}:START_TAG_CODE:TuiInputDateRangeModule${"\ufffd/#10\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,g=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#15\ufffd|\ufffd#16\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#15\ufffd|\ufffd/#16\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#15\ufffd|\ufffd#16\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#15\ufffd|\ufffd/#16\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,g=c["\u0275\u0275i18nPostprocess"](g),[["header","InputDateRange","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-9"],e,t,n,[1,"tui-space_bottom-5"],["tuiLink","","routerLink",".","fragment","date-localization"],a,o,["tuiLink","","target","_blank","href","https://github.com/Tinkoff/taiga-ui/blob/main/projects/cdk/date-time/day-range.ts"],["tuiLink","","routerLink",".","fragment","native-date-output"],["tuiLink","","target","_blank","href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"],["id","base","heading",r,3,"content"],[1,"tui-space_bottom-4","b-form"],["id","large","heading",i,3,"content"],["id","date-localization","heading","Date localization",3,"content"],["id","native-date-output","heading",l,3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","defaultViewedMonth","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","items","documentationPropertyMode","input","documentationPropertyType","TuiDayRangePeriod[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","markerHandler","documentationPropertyMode","input","documentationPropertyType","TuiMarkerHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","minLength","documentationPropertyMode","input","documentationPropertyType","TuiDayLike | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxLength","documentationPropertyMode","input","documentationPropertyType","TuiDayLike | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-control",3,"focusable","formControl","defaultViewedMonth","items","markerHandler","min","max","minLength","maxLength","tuiTextfieldIconLeft","tuiTextfieldCleaner","tuiTextfieldExampleText","tuiTextfieldLabelOutside","tuiTextfieldSize","pseudoFocused","pseudoHovered","pseudoInvalid","readOnly","tuiHintContent","tuiHintDirection","tuiHintMode","disabledItemHandler"],d,u,m,s,p,f,h,T,y,b,["tuiLink","","routerLink","/components/mobile-calendar"],["tuiLink","","routerLink","/getting-started"],[1,"b-demo-steps"],C,["filename","myComponent.module.ts",3,"code"],g,["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]]},template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275template"](1,z,47,4,"ng-template",1),c["\u0275\u0275template"](2,Q,13,18,"ng-template",1),c["\u0275\u0275template"](3,ee,24,3,"ng-template",1),c["\u0275\u0275elementEnd"]())},directives:[h.a,T.a,y.a,r.e,b.a,C.a,x,V,D,$,v.a,w.a,O.a,G.a,g.a,S.a,o.NgControlStatus,o.FormControlDirective,I.b,R.b,M.b,k.b,H.b,F.a,N.a],encapsulation:2,changeDetection:0}),e})();const oe=c["\u0275\u0275getInheritedFactory"](ae);let re=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[a.c,u.W,o.ReactiveFormsModule,m.a,d.ab,d.yb,l.f,d.Xb,d.tb,d.Gb,i.m,r.f.forChild(Object(i.v)(ae)),u.Ob]]}),e})()}}]);