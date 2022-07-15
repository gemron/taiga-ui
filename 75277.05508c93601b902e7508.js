"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[75277],{75277:(fe,_,n)=>{n.r(_),n.d(_,{ExampleTuiInputNumberModule:()=>ge});var h=n(12057),i=n(23738),E=n(12021),b=n(55970),D=n(46244),m=n(37267),N=n(38780),v=n(75695),e=n(74788),A=n(82880),V=n(98204),B=n(88331),G=n(37159),z=n(66596),X=n(57068),p=n(16753),s=n(13735),T=n(14133),J=n(99886);let H=(()=>{class o{constructor(){this.control=new i.FormControl(100)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-input-number-example-1"]],decls:9,vars:12,consts:[["tuiHintContent","Dollar sign is commonly placed BEFORE the amount. Use [prefix].",3,"formControl","prefix"],["tuiHintContent","Euro sign (numeric code 978) is commonly placed AFTER the amount. Use [postfix].",3,"formControl","postfix"],["tuiHintContent","Pound sign (numeric code 826) is commonly placed BEFORE the amount. Use [prefix].",3,"formControl","prefix"]],template:function(t,F){1&t&&(e.\u0275\u0275elementStart(0,"tui-input-number",0),e.\u0275\u0275pipe(1,"tuiCurrency"),e.\u0275\u0275text(2," Type a sum\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"tui-input-number",1),e.\u0275\u0275pipe(4,"tuiCurrency"),e.\u0275\u0275text(5," Type a sum\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"tui-input-number",2),e.\u0275\u0275pipe(7,"tuiCurrency"),e.\u0275\u0275text(8," Type a sum\n"),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("formControl",F.control)("prefix",e.\u0275\u0275pipeBind1(1,6,"USD")),e.\u0275\u0275advance(3),e.\u0275\u0275property("formControl",F.control)("postfix",e.\u0275\u0275pipeBind1(4,8,"978")),e.\u0275\u0275advance(3),e.\u0275\u0275property("formControl",F.control)("prefix",e.\u0275\u0275pipeBind1(7,10,826)))},directives:[p.q,s.g,T.m,i.NgControlStatus,i.FormControlDirective],pipes:[J.i],styles:["tui-input-number[_ngcontent-%COMP%]{max-width:20rem}tui-input-number[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1rem}"],changeDetection:0}),o})();var K=n(79121),C=n(10200),j=n(91030),S=n(68874);let W=(()=>{class o{constructor(){this.testForm=new i.FormGroup({testValue:new i.FormControl})}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-input-number-example-2"]],decls:10,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","tuiTextfieldSize","s","postfix","kg"],["tuiTextfield","","name","potato"],["formControlName","testValue","postfix","L","tuiTextfieldSize","m",1,"tui-space_top-2",3,"tuiTextfieldLabelOutside"],["id","milk","tuiTextfield",""],["postfix","cm","formControlName","testValue",1,"tui-space_top-2"],["tuiTextfield","",2,"color","orange"]],template:function(t,F){1&t&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275elementStart(1,"tui-input-number",1),e.\u0275\u0275text(2," Potatos "),e.\u0275\u0275element(3,"input",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"tui-input-number",3),e.\u0275\u0275text(5," Milk "),e.\u0275\u0275element(6,"input",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"tui-input-number",5),e.\u0275\u0275text(8," Carrot "),e.\u0275\u0275element(9,"input",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("formGroup",F.testForm),e.\u0275\u0275advance(4),e.\u0275\u0275property("tuiTextfieldLabelOutside",!0))},directives:[i.\u0275NgNoValidate,i.NgControlStatusGroup,i.FormGroupDirective,p.q,s.g,i.NgControlStatus,i.FormControlName,C.sz,j.M,S.xT],encapsulation:2,changeDetection:0}),o})(),Q=(()=>{class o{constructor(){this.testForm=new i.FormGroup({testValue:new i.FormControl(Math.PI)})}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-input-number-example-3"]],decls:5,vars:2,consts:[[1,"b-form",3,"formGroup"],["decimal","not-zero","formControlName","testValue",3,"precision"]],template:function(t,F){1&t&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275elementStart(1,"tui-input-number",1),e.\u0275\u0275elementStart(2,"strong"),e.\u0275\u0275text(3,"\u03c0"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(4," -value "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("formGroup",F.testForm),e.\u0275\u0275advance(1),e.\u0275\u0275property("precision",8))},directives:[i.\u0275NgNoValidate,i.NgControlStatusGroup,i.FormGroupDirective,p.q,s.g,i.NgControlStatus,i.FormControlName],encapsulation:2,changeDetection:0}),o})(),Y=(()=>{class o{constructor(){this.value=1234.56}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-input-number-example-4"]],features:[e.\u0275\u0275ProvidersFeature([{provide:m.HOy,useValue:{decimalSeparator:".",thousandSeparator:","}}])],decls:2,vars:1,consts:[["prefix","$","tuiHintContent","Using cleaner is not recommended ;)",1,"input",3,"ngModel","ngModelChange"]],template:function(t,F){1&t&&(e.\u0275\u0275elementStart(0,"tui-input-number",0),e.\u0275\u0275listener("ngModelChange",function(a){return F.value=a}),e.\u0275\u0275text(1," Type a sum\n"),e.\u0275\u0275elementEnd()),2&t&&e.\u0275\u0275property("ngModel",F.value)},directives:[p.q,s.g,T.m,i.NgControlStatus,i.NgModel],styles:[".input[_ngcontent-%COMP%]{text-align:right;width:320px}"],changeDetection:0}),o})(),Z=(()=>{class o{constructor(){this.value=123.56}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-input-number-example-5"]],features:[e.\u0275\u0275ProvidersFeature([{provide:m.HOy,useValue:{decimalSeparator:",",thousandSeparator:"."}}])],decls:2,vars:2,consts:[["prefix","\xa5 ","decimal","never",3,"postfix","ngModel","ngModelChange"]],template:function(t,F){1&t&&(e.\u0275\u0275elementStart(0,"tui-input-number",0),e.\u0275\u0275listener("ngModelChange",function(a){return F.value=a}),e.\u0275\u0275text(1," Type a sum\n"),e.\u0275\u0275elementEnd()),2&t&&e.\u0275\u0275property("postfix",F.value?",00":" ,00")("ngModel",F.value)},directives:[p.q,s.g,i.NgControlStatus,i.NgModel],encapsulation:2,changeDetection:0}),o})();var k=n(31823),w=n(23618),q=n(17023),ee=n(54218),te=n(3729),ne=n(60332),oe=n(64374),ue=n(6707),Fe=n(41031),ie=n(6451),ae=n(76349);function re(o,u){1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18nStart(1,22),e.\u0275\u0275element(2,"code"),e.\u0275\u0275element(3,"code"),e.\u0275\u0275element(4,"a",23),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd())}function le(o,u){1&o&&(e.\u0275\u0275text(0," Customize input via "),e.\u0275\u0275elementStart(1,"a",24),e.\u0275\u0275text(2," TextfieldControllers "),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(3," . "))}function me(o,u){1&o&&(e.\u0275\u0275text(0," Use property "),e.\u0275\u0275elementStart(1,"code"),e.\u0275\u0275text(2,"[precision]"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(3," to configure a number of digits after comma. "))}function pe(o,u){if(1&o&&(e.\u0275\u0275elementStart(0,"div",2),e.\u0275\u0275i18n(1,3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"section"),e.\u0275\u0275i18nStart(3,4),e.\u0275\u0275element(4,"h3"),e.\u0275\u0275elementStart(5,"ul",5),e.\u0275\u0275elementStart(6,"li",6),e.\u0275\u0275elementStart(7,"a",7),e.\u0275\u0275element(8,"strong"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"li",6),e.\u0275\u0275elementStart(10,"a",8),e.\u0275\u0275element(11,"strong"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"li",6),e.\u0275\u0275elementStart(13,"a",9),e.\u0275\u0275element(14,"strong"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(15,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"li",6),e.\u0275\u0275elementStart(17,"a",10),e.\u0275\u0275element(18,"strong"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(19,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"p"),e.\u0275\u0275i18nStart(21,11),e.\u0275\u0275element(22,"a",12),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"tui-doc-example",13),e.\u0275\u0275template(24,re,5,0,"ng-template",null,14,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275element(26,"tui-input-number-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"tui-doc-example",15),e.\u0275\u0275template(28,le,4,0,"ng-template",null,16,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementStart(30,"tui-notification",17),e.\u0275\u0275text(31," If you need to set some attributes or listen to events on native "),e.\u0275\u0275elementStart(32,"code"),e.\u0275\u0275text(33,"input"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(34," , you can put it inside with "),e.\u0275\u0275elementStart(35,"code"),e.\u0275\u0275text(36,"Textfield"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(37," directive as shown below "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(38,"tui-input-number-example-2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(39,"tui-doc-example",18),e.\u0275\u0275template(40,me,4,0,"ng-template",null,19,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275element(42,"tui-input-number-example-3"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(43,"tui-doc-example",20),e.\u0275\u0275element(44,"tui-input-number-example-4"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(45,"tui-doc-example",21),e.\u0275\u0275element(46,"tui-input-number-example-5"),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275reference(25),F=e.\u0275\u0275reference(29),r=e.\u0275\u0275reference(41),a=e.\u0275\u0275nextContext();e.\u0275\u0275advance(23),e.\u0275\u0275property("content",a.example1)("description",t),e.\u0275\u0275advance(4),e.\u0275\u0275property("content",a.example2)("description",F),e.\u0275\u0275advance(12),e.\u0275\u0275property("content",a.example3)("description",r),e.\u0275\u0275advance(4),e.\u0275\u0275property("content",a.example4),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",a.example5)}}function se(o,u){if(1&o&&(e.\u0275\u0275elementStart(0,"tui-input-number",33),e.\u0275\u0275text(1," Type a sum "),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("formControl",t.control)("focusable",t.focusable)("tuiTextfieldIconLeft",t.iconLeft)("tuiTextfieldAutocomplete",t.autocomplete)("tuiTextfieldCleaner",t.cleaner)("tuiTextfieldCustomContent",t.customContent)("tuiTextfieldExampleText",t.exampleText)("tuiTextfieldLabelOutside",t.labelOutside)("tuiTextfieldSize",t.size)("tuiTextfieldType",t.type)("min",t.min)("max",t.max)("pseudoInvalid",t.pseudoInvalid)("pseudoFocus",t.pseudoFocused)("pseudoHover",t.pseudoHovered)("pseudoActive",t.pseudoPressed)("precision",t.precision)("readOnly",t.readOnly)("decimal",t.decimal)("prefix",t.prefix)("postfix",t.postfix)("tuiHintContent",t.hintContent)("tuiHintDirection",t.hintDirection)("tuiHintMode",t.hintMode)}}function de(o,u){1&o&&(e.\u0275\u0275i18nStart(0,34),e.\u0275\u0275element(1,"code"),e.\u0275\u0275i18nEnd())}function ce(o,u){1&o&&e.\u0275\u0275i18n(0,35)}function Te(o,u){1&o&&e.\u0275\u0275i18n(0,36)}function _e(o,u){1&o&&e.\u0275\u0275i18n(0,37)}function Ee(o,u){1&o&&e.\u0275\u0275i18n(0,38)}function De(o,u){1&o&&e.\u0275\u0275i18n(0,39)}function Ne(o,u){1&o&&e.\u0275\u0275i18n(0,40)}function Ce(o,u){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo",25),e.\u0275\u0275template(1,se,2,24,"ng-template"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-documentation"),e.\u0275\u0275template(3,de,2,0,"ng-template",26),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().disabled=r}),e.\u0275\u0275template(4,ce,1,0,"ng-template",27),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().min=r}),e.\u0275\u0275template(5,Te,1,0,"ng-template",28),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().max=r}),e.\u0275\u0275template(6,_e,1,0,"ng-template",29),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().prefix=r}),e.\u0275\u0275template(7,Ee,1,0,"ng-template",30),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().postfix=r}),e.\u0275\u0275template(8,De,1,0,"ng-template",31),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().precision=r}),e.\u0275\u0275template(9,Ne,1,0,"ng-template",32),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().decimal=r}),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(10,"inherited-documentation")}if(2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("control",t.control),e.\u0275\u0275advance(3),e.\u0275\u0275property("documentationPropertyValue",t.disabled),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.minVariants)("documentationPropertyValue",t.min),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.maxVariants)("documentationPropertyValue",t.max),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.postfixVariants)("documentationPropertyValue",t.prefix),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.postfixVariants)("documentationPropertyValue",t.postfix),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.precisionVariants)("documentationPropertyValue",t.precision),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.decimalVariants)("documentationPropertyValue",t.decimal)}}function Se(o,u){if(1&o&&(e.\u0275\u0275elementStart(0,"ol",41),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,42),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",43),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18nStart(8,44),e.\u0275\u0275element(9,"code"),e.\u0275\u0275element(10,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(11,"tui-doc-code",45),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"li"),e.\u0275\u0275elementStart(13,"p"),e.\u0275\u0275i18n(14,46),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(15,"tui-doc-code",47),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleModule),e.\u0275\u0275advance(6),e.\u0275\u0275property("code",t.exampleForm),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",t.exampleHtml)}}let Me=(()=>{class o extends A.b{constructor(){super(...arguments),this.exampleForm=n.e(91603).then(n.bind(n,91603)),this.exampleModule=n.e(11191).then(n.bind(n,11191)),this.exampleHtml=n.e(58363).then(n.bind(n,58363)),this.example1={HTML:n.e(73166).then(n.bind(n,73166)),TypeScript:n.e(42273).then(n.bind(n,42273)),LESS:n.e(72460).then(n.t.bind(n,72460,17))},this.example2={HTML:n.e(36548).then(n.bind(n,36548)),TypeScript:n.e(68912).then(n.bind(n,68912))},this.example3={HTML:n.e(12470).then(n.bind(n,12470)),TypeScript:n.e(92e3).then(n.bind(n,92e3))},this.example4={TypeScript:n.e(927).then(n.bind(n,927)),HTML:n.e(21561).then(n.bind(n,21561)),LESS:n.e(21207).then(n.t.bind(n,81329,17))},this.example5={TypeScript:n.e(68541).then(n.bind(n,68541)),HTML:n.e(54288).then(n.bind(n,54288))},this.minVariants=[-1/0,-500,5,25],this.min=this.minVariants[0],this.maxVariants=[1/0,10,500],this.max=this.maxVariants[0],this.autocompleteVariants=["off","transaction-amount"],this.autocomplete="",this.decimalVariants=["not-zero","always","never"],this.decimal=this.decimalVariants[0],this.cleaner=!1,this.precisionVariants=[2,3,4],this.precision=this.precisionVariants[0],this.postfixVariants=["","$","GBP"],this.prefix=this.postfixVariants[0],this.postfix=this.postfixVariants[0],this.control=new i.FormControl(6432,i.Validators.required)}}return o.\u0275fac=function(){let u;return function(F){return(u||(u=e.\u0275\u0275getInheritedFactory(o)))(F||o)}}(),o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["example-tui-input-number"]],features:[e.\u0275\u0275ProvidersFeature([{provide:V.x,useExisting:(0,e.forwardRef)(()=>o)}]),e.\u0275\u0275InheritDefinitionFeature],decls:4,vars:0,consts:function(){let u,t,F,r,a,M,g,f,d,O,P,x,R,I,y,U,L,c,$;return u=$localize`:␟10ffa175baed8ebf9062197a5bad595f5480f78e␟1048262239433767130: A component to input numbers. Control value is also of number type. `,t=$localize`:␟135d3647ed7a3ea1b3d5080b3113250a2f018540␟5806261041507532016:${"\ufffd#4\ufffd"}:START_HEADING_LEVEL3:There are also other components to input numbers:${"\ufffd/#4\ufffd"}:CLOSE_HEADING_LEVEL3:${"\ufffd#5\ufffd"}:START_UNORDERED_LIST:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#12\ufffd|\ufffd#16\ufffd]"}:START_LIST_ITEM:${"\ufffd#7\ufffd"}:START_LINK:${"[\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#18\ufffd]"}:START_TAG_STRONG:InputCount${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_STRONG:${"[\ufffd/#7\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#17\ufffd]"}:CLOSE_LINK: (integers only) ${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#12\ufffd|\ufffd/#16\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#12\ufffd|\ufffd#16\ufffd]"}:START_LIST_ITEM:${"\ufffd#10\ufffd"}:START_LINK_1:${"[\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#18\ufffd]"}:START_TAG_STRONG:Slider${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_STRONG:${"[\ufffd/#7\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#17\ufffd]"}:CLOSE_LINK:${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#12\ufffd|\ufffd/#16\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#12\ufffd|\ufffd#16\ufffd]"}:START_LIST_ITEM:${"\ufffd#13\ufffd"}:START_LINK_2:${"[\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#18\ufffd]"}:START_TAG_STRONG:InputSlider${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_STRONG:${"[\ufffd/#7\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#17\ufffd]"}:CLOSE_LINK: (it uses ${"[\ufffd#15\ufffd|\ufffd#19\ufffd]"}:START_TAG_CODE:InputNumber${"[\ufffd/#15\ufffd|\ufffd/#19\ufffd]"}:CLOSE_TAG_CODE: inside) ${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#12\ufffd|\ufffd/#16\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#12\ufffd|\ufffd#16\ufffd]"}:START_LIST_ITEM:${"\ufffd#17\ufffd"}:START_LINK_3:${"[\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#18\ufffd]"}:START_TAG_STRONG:InputRange${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#18\ufffd]"}:CLOSE_TAG_STRONG:${"[\ufffd/#7\ufffd|\ufffd/#10\ufffd|\ufffd/#13\ufffd|\ufffd/#17\ufffd]"}:CLOSE_LINK: (it uses ${"[\ufffd#15\ufffd|\ufffd#19\ufffd]"}:START_TAG_CODE:InputNumber${"[\ufffd/#15\ufffd|\ufffd/#19\ufffd]"}:CLOSE_TAG_CODE: inside) ${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#12\ufffd|\ufffd/#16\ufffd]"}:CLOSE_LIST_ITEM:${"\ufffd/#5\ufffd"}:CLOSE_UNORDERED_LIST:`,t=e.\u0275\u0275i18nPostprocess(t),F=$localize`:␟f04807d740cad8bf4061798407cd7d4eda1851b1␟5187759459933626480: Number formatting can be customized with ${"\ufffd#22\ufffd"}:START_LINK: TUI_NUMBER_FORMAT ${"\ufffd/#22\ufffd"}:CLOSE_LINK: token. `,r=$localize`:␟32072c7fb0469aaf82d256a59b3e0d6ecce973b9␟4327471061205783634:Currency`,a=$localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`,M=$localize`:␟281bab00c72643e8a46c97d760098178f7bca379␟6364160638647394724:8 digits after comma`,g=$localize`:␟1e39c3e479610bfcb275d70e5797a7c144e9846e␟4961291854954937284:Align to the right`,f=$localize`:␟1254bd53a81179b793dbdce2ac9307e07cbfe883␟6787854778648694703:Prefix and postfix`,d=$localize`:␟704ffcbd53b377c11d2bc072068ffa7a5ee5312b␟4971956858864594750: To input money use properties ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:[postfix]${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: or ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:[prefix]${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: . To get currency symbol use pipe ${"\ufffd#4\ufffd"}:START_LINK: tuiCurrency ${"\ufffd/#4\ufffd"}:CLOSE_LINK: . `,d=e.\u0275\u0275i18nPostprocess(d),O=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,P=$localize`:␟a11028ca3c10ed474edf5dbfa2754e26d3d18cd2␟5313959728516521310: Min value `,x=$localize`:␟e19aee5686b43d533c4778f15c66a64584c493d3␟7525448588827957289: Max value `,R=$localize`:␟658adf15e902084053811153efcee4ab1a098c01␟889438292388771446: A prefix symbol, like currency `,I=$localize`:␟6cd740eb34e19b39e7b5823575a0a337c2347ba3␟8021237919117600846: A postfix symbol, like currency `,y=$localize`:␟4d605907abe7259a5f8375543b52c8a01272002c␟7859588428304649828: A number of digits after comma `,U=$localize`:␟29ca7cd63e443b8d4cc789b248893976685ce792␟4020917276602472682: Show/hide decimal `,L=$localize`:␟ff39c2adbe221092857a8cdbd75bce39a6e5d5e5␟4070105638851960915: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputNumberModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,c=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,c=e.\u0275\u0275i18nPostprocess(c),$=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","InputNumber","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],u,t,[1,"tui-list","tui-list_small"],[1,"tui-list__item"],["tuiLink","","routerLink","/components/input-count"],["tuiLink","","routerLink","/components/slider"],["tuiLink","","routerLink","/components/input-slider"],["tuiLink","","routerLink","/components/input-range"],F,["tuiLink","","routerLink","/utils/tokens","fragment","number-format"],["id","currency","heading",r,3,"content","description"],["currencyPipeDescription",""],["id","sizes","heading",a,3,"content","description"],["textFieldControllerDescription",""],[1,"tui-space_bottom-4","b-form"],["id","precision","heading",M,3,"content","description"],["precisionDescription",""],["id","align","heading",g,"description","With currency symbol as prefix and custom format",3,"content"],["id","prefix-postfix","heading",f,3,"content"],d,["tuiLink","","routerLink","/pipes/currency"],["tuiLink","","routerLink","/directives/textfield-controller"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","prefix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","postfix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","precision","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","decimal","documentationPropertyMode","input","documentationPropertyType","TuiDecimalT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","focusable","tuiTextfieldIconLeft","tuiTextfieldAutocomplete","tuiTextfieldCleaner","tuiTextfieldCustomContent","tuiTextfieldExampleText","tuiTextfieldLabelOutside","tuiTextfieldSize","tuiTextfieldType","min","max","pseudoInvalid","pseudoFocus","pseudoHover","pseudoActive","precision","readOnly","decimal","prefix","postfix","tuiHintContent","tuiHintDirection","tuiHintMode"],O,P,x,R,I,y,U,[1,"b-demo-steps"],L,["filename","myComponent.module.ts",3,"code"],c,["filename","myComponent.component.ts",3,"code"],$,["filename","myComponent.template.html",3,"code"]]},template:function(t,F){1&t&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,pe,47,8,"ng-template",1),e.\u0275\u0275template(2,Ce,11,14,"ng-template",1),e.\u0275\u0275template(3,Se,16,3,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[B.q,G.n,z.V,E.yS,X.f,H,K.L,W,Q,Y,Z,k.F,w.z,q.B,ee.w,p.q,s.g,i.NgControlStatus,i.FormControlDirective,te.aR,ne.S8,oe.be,ue.B7,Fe._K,S.xT,C.sz,ie.iW,T.m,ae.c],encapsulation:2,changeDetection:0}),o})(),ge=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[[h.ez,i.FormsModule,i.ReactiveFormsModule,N._Hh,b.wc,m.EIu,N.Ltw,m.fNO,m.jzK,m.cnw,m.cyX,m.HiG,D.fV,v.f,m.goS,E.Bz.forChild((0,D.Ve)(Me))]]}),o})()}}]);