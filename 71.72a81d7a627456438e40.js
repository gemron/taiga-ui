(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"88UN":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputNumberModule",function(){return ie});var o=n("SVse"),i=n("s7LF"),r=n("iInd"),a=n("oCJ7"),l=n("zIlJ"),u=n("ErM8"),m=n("QKt8"),c=n("gjpr"),p=n("8Y7J"),d=n("hCbB"),s=n("0etI"),f=n("ReYJ"),x=n("WQeZ"),T=n("WDJX"),b=n("PYg8"),y=n("I6X8"),S=n("Fxf+"),C=n("fIai"),E=n("toBt");let h=(()=>{class e{constructor(){this.control=new i.FormControl(100)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-number-example-1"]],decls:9,vars:12,consts:[["tuiHintContent","Dollar sign is commonly placed BEFORE the amount. Use [prefix].",3,"formControl","prefix"],["tuiHintContent","Euro sign (numeric code 978) is commonly placed AFTER the amount. Use [postfix].",3,"formControl","postfix"],["tuiHintContent","Pound sign (numeric code 826) is commonly placed BEFORE the amount. Use [prefix].",3,"formControl","prefix"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-input-number",0),p["\u0275\u0275pipe"](1,"tuiCurrency"),p["\u0275\u0275text"](2," Type a sum\n"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-input-number",1),p["\u0275\u0275pipe"](4,"tuiCurrency"),p["\u0275\u0275text"](5," Type a sum\n"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"tui-input-number",2),p["\u0275\u0275pipe"](7,"tuiCurrency"),p["\u0275\u0275text"](8," Type a sum\n"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("formControl",t.control)("prefix",p["\u0275\u0275pipeBind1"](1,6,"USD")),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("formControl",t.control)("postfix",p["\u0275\u0275pipeBind1"](4,8,"978")),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("formControl",t.control)("prefix",p["\u0275\u0275pipeBind1"](7,10,826)))},directives:[y.a,S.a,C.a,i.NgControlStatus,i.FormControlDirective],pipes:[E.a],styles:["tui-input-number[_ngcontent-%COMP%]{max-width:20rem}tui-input-number[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1rem}"],changeDetection:0}),e})();var g=n("rgoq"),_=n("93Am"),L=n("nsWG"),P=n("W527");let V=(()=>{class e{constructor(){this.testForm=new i.FormGroup({testValue:new i.FormControl})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-number-example-2"]],decls:10,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","tuiTextfieldSize","s","postfix","kg"],["tuiTextfield","","name","potato"],["formControlName","testValue","postfix","L","tuiTextfieldSize","m",1,"tui-space_top-2",3,"tuiTextfieldLabelOutside"],["id","milk","tuiTextfield",""],["postfix","cm","formControlName","testValue",1,"tui-space_top-2"],["tuiTextfield","",2,"color","orange"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"tui-input-number",1),p["\u0275\u0275text"](2," Potatos "),p["\u0275\u0275element"](3,"input",2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"tui-input-number",3),p["\u0275\u0275text"](5," Milk "),p["\u0275\u0275element"](6,"input",4),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"tui-input-number",5),p["\u0275\u0275text"](8," Carrot "),p["\u0275\u0275element"](9,"input",6),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("formGroup",t.testForm),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0))},directives:[i["\u0275angular_packages_forms_forms_ba"],i.NgControlStatusGroup,i.FormGroupDirective,y.a,S.a,i.NgControlStatus,i.FormControlName,_.b,L.a,P.b],encapsulation:2,changeDetection:0}),e})(),v=(()=>{class e{constructor(){this.testForm=new i.FormGroup({testValue:new i.FormControl(Math.PI)})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-number-example-3"]],decls:5,vars:2,consts:[[1,"b-form",3,"formGroup"],["decimal","not-zero","formControlName","testValue",3,"precision"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"tui-input-number",1),p["\u0275\u0275elementStart"](2,"strong"),p["\u0275\u0275text"](3,"\u03c0"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](4," -value "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("formGroup",t.testForm),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("precision",8))},directives:[i["\u0275angular_packages_forms_forms_ba"],i.NgControlStatusGroup,i.FormGroupDirective,y.a,S.a,i.NgControlStatus,i.FormControlName],encapsulation:2,changeDetection:0}),e})(),$=(()=>{class e{constructor(){this.value=1234.56}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-number-example-4"]],features:[p["\u0275\u0275ProvidersFeature"]([{provide:u.H,useValue:{decimalSeparator:".",thousandSeparator:","}}])],decls:2,vars:1,consts:[["prefix","$","tuiHintContent","Using cleaner is not recommended ;)",1,"input",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-input-number",0),p["\u0275\u0275listener"]("ngModelChange",function(e){return t.value=e}),p["\u0275\u0275text"](1," Type a sum\n"),p["\u0275\u0275elementEnd"]()),2&e&&p["\u0275\u0275property"]("ngModel",t.value)},directives:[y.a,S.a,C.a,i.NgControlStatus,i.NgModel],styles:[".input[_ngcontent-%COMP%]{text-align:right;width:320px}"],changeDetection:0}),e})(),O=(()=>{class e{constructor(){this.value=123.56}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-number-example-5"]],features:[p["\u0275\u0275ProvidersFeature"]([{provide:u.H,useValue:{decimalSeparator:",",thousandSeparator:"."}}])],decls:2,vars:2,consts:[["prefix","\xa5 ","decimal","never",3,"postfix","ngModel","ngModelChange"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-input-number",0),p["\u0275\u0275listener"]("ngModelChange",function(e){return t.value=e}),p["\u0275\u0275text"](1," Type a sum\n"),p["\u0275\u0275elementEnd"]()),2&e&&p["\u0275\u0275property"]("postfix",t.value?",00":" ,00")("ngModel",t.value)},directives:[y.a,S.a,i.NgControlStatus,i.NgModel],encapsulation:2,changeDetection:0}),e})();var A=n("mbit"),I=n("F2nr"),N=n("R5K/"),M=n("EI/i"),G=n("ZMgf"),R=n("HawL"),D=n("jo1D"),F=n("bJ++"),w=n("PRyZ"),z=n("Uem1"),H=n("JKY/");function k(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18nStart"](1,22),p["\u0275\u0275element"](2,"code"),p["\u0275\u0275element"](3,"code"),p["\u0275\u0275element"](4,"a",23),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"]())}function K(e,t){1&e&&(p["\u0275\u0275text"](0," Customize input via "),p["\u0275\u0275elementStart"](1,"a",24),p["\u0275\u0275text"](2," TextfieldControllers "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3," . "))}function U(e,t){1&e&&(p["\u0275\u0275text"](0," Use property "),p["\u0275\u0275elementStart"](1,"code"),p["\u0275\u0275text"](2,"[precision]"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3," to configure a number of digits after comma. "))}function B(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",2),p["\u0275\u0275i18n"](1,3),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"section"),p["\u0275\u0275i18nStart"](3,4),p["\u0275\u0275element"](4,"h3"),p["\u0275\u0275elementStart"](5,"ul",5),p["\u0275\u0275elementStart"](6,"li",6),p["\u0275\u0275elementStart"](7,"a",7),p["\u0275\u0275element"](8,"strong"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](9,"li",6),p["\u0275\u0275elementStart"](10,"a",8),p["\u0275\u0275element"](11,"strong"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](12,"li",6),p["\u0275\u0275elementStart"](13,"a",9),p["\u0275\u0275element"](14,"strong"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](15,"code"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](16,"li",6),p["\u0275\u0275elementStart"](17,"a",10),p["\u0275\u0275element"](18,"strong"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](19,"code"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](20,"p"),p["\u0275\u0275i18nStart"](21,11),p["\u0275\u0275element"](22,"a",12),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](23,"tui-doc-example",13),p["\u0275\u0275template"](24,k,5,0,"ng-template",null,14,p["\u0275\u0275templateRefExtractor"]),p["\u0275\u0275element"](26,"tui-input-number-example-1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](27,"tui-doc-example",15),p["\u0275\u0275template"](28,K,4,0,"ng-template",null,16,p["\u0275\u0275templateRefExtractor"]),p["\u0275\u0275elementStart"](30,"tui-notification",17),p["\u0275\u0275text"](31," If you need to set some attributes or listen to events on native "),p["\u0275\u0275elementStart"](32,"code"),p["\u0275\u0275text"](33,"input"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](34," , you can put it inside with "),p["\u0275\u0275elementStart"](35,"code"),p["\u0275\u0275text"](36,"Textfield"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](37," directive as shown below "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](38,"tui-input-number-example-2"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](39,"tui-doc-example",18),p["\u0275\u0275template"](40,U,4,0,"ng-template",null,19,p["\u0275\u0275templateRefExtractor"]),p["\u0275\u0275element"](42,"tui-input-number-example-3"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](43,"tui-doc-example",20),p["\u0275\u0275element"](44,"tui-input-number-example-4"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](45,"tui-doc-example",21),p["\u0275\u0275element"](46,"tui-input-number-example-5"),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275reference"](25),t=p["\u0275\u0275reference"](29),n=p["\u0275\u0275reference"](41),o=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](23),p["\u0275\u0275property"]("content",o.example1)("description",e),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("content",o.example2)("description",t),p["\u0275\u0275advance"](12),p["\u0275\u0275property"]("content",o.example3)("description",n),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("content",o.example4),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("content",o.example5)}}function J(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-input-number",33),p["\u0275\u0275text"](1," Type a sum "),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"](2);p["\u0275\u0275property"]("formControl",e.control)("focusable",e.focusable)("tuiTextfieldIconLeft",e.iconLeft)("tuiTextfieldAutocomplete",e.autocomplete)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldCustomContent",e.customContent)("tuiTextfieldExampleText",e.exampleText)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("tuiTextfieldType",e.type)("min",e.min)("max",e.max)("pseudoInvalid",e.pseudoInvalid)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered)("pseudoPressed",e.pseudoPressed)("precision",e.precision)("readOnly",e.readOnly)("decimal",e.decimal)("prefix",e.prefix)("postfix",e.postfix)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)}}function j(e,t){1&e&&(p["\u0275\u0275i18nStart"](0,34),p["\u0275\u0275element"](1,"code"),p["\u0275\u0275i18nEnd"]())}function W(e,t){1&e&&p["\u0275\u0275i18n"](0,35)}function Z(e,t){1&e&&p["\u0275\u0275i18n"](0,36)}function Y(e,t){1&e&&p["\u0275\u0275i18n"](0,37)}function q(e,t){1&e&&p["\u0275\u0275i18n"](0,38)}function X(e,t){1&e&&p["\u0275\u0275i18n"](0,39)}function Q(e,t){1&e&&p["\u0275\u0275i18n"](0,40)}function ee(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-doc-demo",25),p["\u0275\u0275template"](1,J,2,24,"ng-template"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"tui-doc-documentation"),p["\u0275\u0275template"](3,j,2,0,"ng-template",26),p["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().disabled=t}),p["\u0275\u0275template"](4,W,1,0,"ng-template",27),p["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().min=t}),p["\u0275\u0275template"](5,Z,1,0,"ng-template",28),p["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().max=t}),p["\u0275\u0275template"](6,Y,1,0,"ng-template",29),p["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().prefix=t}),p["\u0275\u0275template"](7,q,1,0,"ng-template",30),p["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().postfix=t}),p["\u0275\u0275template"](8,X,1,0,"ng-template",31),p["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().precision=t}),p["\u0275\u0275template"](9,Q,1,0,"ng-template",32),p["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().decimal=t}),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](10,"inherited-documentation")}if(2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("control",e.control),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("documentationPropertyValue",e.disabled),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.postfixVariants)("documentationPropertyValue",e.prefix),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.postfixVariants)("documentationPropertyValue",e.postfix),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.precisionVariants)("documentationPropertyValue",e.precision),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.decimalVariants)("documentationPropertyValue",e.decimal)}}function te(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",41),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,42),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",43),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18nStart"](8,44),p["\u0275\u0275element"](9,"code"),p["\u0275\u0275element"](10,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](11,"tui-doc-code",45),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](12,"li"),p["\u0275\u0275elementStart"](13,"p"),p["\u0275\u0275i18n"](14,46),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](15,"tui-doc-code",47),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",e.exampleModule),p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("code",e.exampleForm),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",e.exampleHtml)}}let ne=(()=>{class e extends d.a{constructor(){super(...arguments),this.exampleForm=n.e(803).then(n.bind(null,"qK8z")),this.exampleModule=n.e(804).then(n.bind(null,"OvvS")),this.exampleHtml=n.e(805).then(n.bind(null,"510B")),this.example1={HTML:n.e(791).then(n.bind(null,"UvPG")),TypeScript:n.e(793).then(n.bind(null,"4SLK")),LESS:n.e(792).then(n.bind(null,"pepK"))},this.example2={HTML:n.e(794).then(n.bind(null,"Ehur")),TypeScript:n.e(795).then(n.bind(null,"//Il"))},this.example3={HTML:n.e(796).then(n.bind(null,"jZ9x")),TypeScript:n.e(797).then(n.bind(null,"9ja3"))},this.example4={TypeScript:n.e(800).then(n.bind(null,"MZfv")),HTML:n.e(798).then(n.bind(null,"LbGF")),LESS:n.e(799).then(n.bind(null,"sHeH"))},this.example5={TypeScript:n.e(802).then(n.bind(null,"N+F0")),HTML:n.e(801).then(n.bind(null,"AzT4"))},this.minVariants=[-1/0,-500,5,25],this.min=this.minVariants[0],this.maxVariants=[1/0,10,500],this.max=this.maxVariants[0],this.autocompleteVariants=["off","transaction-amount"],this.autocomplete="",this.decimalVariants=["not-zero","always","never"],this.decimal=this.decimalVariants[0],this.cleaner=!1,this.precisionVariants=[2,3,4],this.precision=this.precisionVariants[0],this.postfixVariants=["","$","GBP"],this.prefix=this.postfixVariants[0],this.postfix=this.postfixVariants[0],this.control=new i.FormControl(6432,i.Validators.required)}}return e.\u0275fac=function(t){return oe(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-input-number"]],features:[p["\u0275\u0275ProvidersFeature"]([{provide:s.a,useExisting:Object(p.forwardRef)(()=>e)}]),p["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:function(){let e,t,n,o,i,r,a,l,u,m,c,d,s,f,x,T,b,y,S;return e=$localize`:␟10ffa175baed8ebf9062197a5bad595f5480f78e␟1048262239433767130: A component to input numbers. Control value is also of number type. `,t=$localize`:␟135d3647ed7a3ea1b3d5080b3113250a2f018540␟5806261041507532016:${"\ufffd#4\ufffd"}:START_HEADING_LEVEL3:There are also other components to input numbers:${"\ufffd/#4\ufffd"}:CLOSE_HEADING_LEVEL3:${"\ufffd#5\ufffd"}:START_UNORDERED_LIST:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#12\ufffd|\ufffd#16\ufffd]"}:START_LIST_ITEM:${"\ufffd#7\ufffd"}:START_LINK:${"[\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#18\ufffd]"}:START_TAG_STRONG:InputCount${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_STRONG:${"[\ufffd/#7\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#17\ufffd]"}:CLOSE_LINK: (integers only) ${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#12\ufffd|\ufffd/#16\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#12\ufffd|\ufffd#16\ufffd]"}:START_LIST_ITEM:${"\ufffd#10\ufffd"}:START_LINK_1:${"[\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#18\ufffd]"}:START_TAG_STRONG:Slider${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_STRONG:${"[\ufffd/#7\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#17\ufffd]"}:CLOSE_LINK:${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#12\ufffd|\ufffd/#16\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#12\ufffd|\ufffd#16\ufffd]"}:START_LIST_ITEM:${"\ufffd#13\ufffd"}:START_LINK_2:${"[\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#18\ufffd]"}:START_TAG_STRONG:InputSlider${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_STRONG:${"[\ufffd/#7\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#17\ufffd]"}:CLOSE_LINK: (it uses ${"[\ufffd#15\ufffd|\ufffd#19\ufffd]"}:START_TAG_CODE:InputNumber${"[\ufffd/#15\ufffd|\ufffd/#19\ufffd]"}:CLOSE_TAG_CODE: inside) ${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#12\ufffd|\ufffd/#16\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#12\ufffd|\ufffd#16\ufffd]"}:START_LIST_ITEM:${"\ufffd#17\ufffd"}:START_LINK_3:${"[\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#18\ufffd]"}:START_TAG_STRONG:InputRange${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_STRONG:${"[\ufffd/#7\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#17\ufffd]"}:CLOSE_LINK: (it uses ${"[\ufffd#15\ufffd|\ufffd#19\ufffd]"}:START_TAG_CODE:InputNumber${"[\ufffd/#15\ufffd|\ufffd/#19\ufffd]"}:CLOSE_TAG_CODE: inside) ${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#12\ufffd|\ufffd/#16\ufffd]"}:CLOSE_LIST_ITEM:${"\ufffd/#5\ufffd"}:CLOSE_UNORDERED_LIST:`,t=p["\u0275\u0275i18nPostprocess"](t),n=$localize`:␟f04807d740cad8bf4061798407cd7d4eda1851b1␟5187759459933626480: Number formatting can be customized with ${"\ufffd#22\ufffd"}:START_LINK: TUI_NUMBER_FORMAT ${"\ufffd/#22\ufffd"}:CLOSE_LINK: token. `,o=$localize`:␟32072c7fb0469aaf82d256a59b3e0d6ecce973b9␟4327471061205783634:Currency`,i=$localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`,r=$localize`:␟281bab00c72643e8a46c97d760098178f7bca379␟6364160638647394724:8 digits after comma`,a=$localize`:␟1e39c3e479610bfcb275d70e5797a7c144e9846e␟4961291854954937284:Align to the right`,l=$localize`:␟1254bd53a81179b793dbdce2ac9307e07cbfe883␟6787854778648694703:Prefix and postfix`,u=$localize`:␟704ffcbd53b377c11d2bc072068ffa7a5ee5312b␟4971956858864594750: To input money use properties ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:[postfix]${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: or ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:[prefix]${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: . To get currency symbol use pipe ${"\ufffd#4\ufffd"}:START_LINK: tuiCurrency ${"\ufffd/#4\ufffd"}:CLOSE_LINK: . `,u=p["\u0275\u0275i18nPostprocess"](u),m=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,c=$localize`:␟a11028ca3c10ed474edf5dbfa2754e26d3d18cd2␟5313959728516521310: Min value `,d=$localize`:␟e19aee5686b43d533c4778f15c66a64584c493d3␟7525448588827957289: Max value `,s=$localize`:␟658adf15e902084053811153efcee4ab1a098c01␟889438292388771446: A prefix symbol, like currency `,f=$localize`:␟6cd740eb34e19b39e7b5823575a0a337c2347ba3␟8021237919117600846: A postfix symbol, like currency `,x=$localize`:␟4d605907abe7259a5f8375543b52c8a01272002c␟7859588428304649828: A number of digits after comma `,T=$localize`:␟29ca7cd63e443b8d4cc789b248893976685ce792␟4020917276602472682: Show/hide decimal `,b=$localize`:␟ff39c2adbe221092857a8cdbd75bce39a6e5d5e5␟4070105638851960915: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputNumberModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,y=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,y=p["\u0275\u0275i18nPostprocess"](y),S=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","InputNumber","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],e,t,[1,"tui-list","tui-list_small"],[1,"tui-list__item"],["tuiLink","","routerLink","/components/input-count"],["tuiLink","","routerLink","/components/slider"],["tuiLink","","routerLink","/components/input-slider"],["tuiLink","","routerLink","/components/input-range"],n,["tuiLink","","routerLink","/utils/tokens","fragment","number-format"],["id","currency","heading",o,3,"content","description"],["currencyPipeDescription",""],["id","sizes","heading",i,3,"content","description"],["textFieldControllerDescription",""],[1,"tui-space_bottom-4","b-form"],["id","precision","heading",r,3,"content","description"],["precisionDescription",""],["id","align","heading",a,"description","With currency symbol as prefix and custom format",3,"content"],["id","prefix-postfix","heading",l,3,"content"],u,["tuiLink","","routerLink","/pipes/currency"],["tuiLink","","routerLink","/directives/textfield-controller"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","prefix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","postfix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","precision","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","decimal","documentationPropertyMode","input","documentationPropertyType","TuiDecimalT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","focusable","tuiTextfieldIconLeft","tuiTextfieldAutocomplete","tuiTextfieldCleaner","tuiTextfieldCustomContent","tuiTextfieldExampleText","tuiTextfieldLabelOutside","tuiTextfieldSize","tuiTextfieldType","min","max","pseudoInvalid","pseudoFocused","pseudoHovered","pseudoPressed","precision","readOnly","decimal","prefix","postfix","tuiHintContent","tuiHintDirection","tuiHintMode"],m,c,d,s,f,x,T,[1,"b-demo-steps"],b,["filename","myComponent.module.ts",3,"code"],y,["filename","myComponent.component.ts",3,"code"],S,["filename","myComponent.template.html",3,"code"]]},template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,B,47,8,"ng-template",1),p["\u0275\u0275template"](2,ee,11,14,"ng-template",1),p["\u0275\u0275template"](3,te,16,3,"ng-template",1),p["\u0275\u0275elementEnd"]())},directives:[f.a,x.a,T.a,r.e,b.a,h,g.a,V,v,$,O,A.a,I.a,N.a,M.a,y.a,S.a,i.NgControlStatus,i.FormControlDirective,G.b,R.b,D.b,F.b,w.b,P.b,_.b,z.b,C.a,H.a],encapsulation:2,changeDetection:0}),e})();const oe=p["\u0275\u0275getInheritedFactory"](ne);let ie=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({imports:[[o.c,i.FormsModule,i.ReactiveFormsModule,m.eb,a.b,u.Ub,m.zb,u.ab,u.yb,u.Xb,u.tb,u.Gb,l.m,c.a,u.ub,r.f.forChild(Object(l.t)(ne))]]}),e})()}}]);