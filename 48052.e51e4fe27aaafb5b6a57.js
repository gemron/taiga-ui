"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[48052],{48052:(ue,C,t)=>{t.r(C),t.d(C,{ExampleTuiTextAreaModule:()=>Te});var x=t(12057),l=t(23738),P=t(12021),g=t(46244),T=t(37267),s=t(38780),y=t(75695),e=t(74788),$=t(82880),v=t(98204),X=t(88331),I=t(37159),G=t(57068),u=t(40329),E=t(78665);let V=(()=>{class o{constructor(){this.testForm=new l.FormGroup({testValue1:new l.FormControl("A field",l.Validators.required),testValue2:new l.FormControl("This one can be expanded",l.Validators.required)})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-text-area-example-1"]],decls:10,vars:2,consts:function(){let a;return a=$localize`:␟9349a6be5a6fcea2e58cdeff56fc9429cfebc9a4␟2215147492012374849: It has a fixed size and content scroll by default. But there is also an expandable mode with height increase from content inside
`,[a,[1,"container",3,"formGroup"],[1,"tui-row"],[1,"tui-col_md-6"],["formControlName","testValue1"],["formControlName","testValue2",3,"expandable"]]},template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,0),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"form",1),e.\u0275\u0275elementStart(3,"div",2),e.\u0275\u0275elementStart(4,"div",3),e.\u0275\u0275elementStart(5,"tui-text-area",4),e.\u0275\u0275text(6,"Type a text"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"div",3),e.\u0275\u0275elementStart(8,"tui-text-area",5),e.\u0275\u0275text(9," Type a text "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("formGroup",i.testForm),e.\u0275\u0275advance(6),e.\u0275\u0275property("expandable",!0))},directives:[l.\u0275NgNoValidate,l.NgControlStatusGroup,l.FormGroupDirective,u.Jl,E.e,l.NgControlStatus,l.FormControlName],styles:["[_nghost-%COMP%]{display:block}.container[_ngcontent-%COMP%]{margin-bottom:1.25rem;max-width:43.75rem}"],changeDetection:0}),o})(),b=(()=>{class o{constructor(){this.testForm=new l.FormGroup({testValue1:new l.FormControl("A field",l.Validators.required)})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-text-area-example-2"]],decls:9,vars:2,consts:function(){let a;return a=$localize`:␟24c99562aed3fa3a2e251380380be625ceeaf326␟2874902685291106196:You can set a custom min-height for component`,[a,[3,"formGroup"],[1,"tui-row"],[1,"tui-col_md-6"],["formControlName","testValue1",1,"tui-space_bottom-4","field-large"],["formControlName","testValue1",1,"field-small",3,"expandable"]]},template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,0),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"form",1),e.\u0275\u0275elementStart(3,"div",2),e.\u0275\u0275elementStart(4,"div",3),e.\u0275\u0275elementStart(5,"tui-text-area",4),e.\u0275\u0275text(6," Type a text "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"tui-text-area",5),e.\u0275\u0275text(8," Type a text "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("formGroup",i.testForm),e.\u0275\u0275advance(5),e.\u0275\u0275property("expandable",!0))},directives:[l.\u0275NgNoValidate,l.NgControlStatusGroup,l.FormGroupDirective,u.Jl,E.e,l.NgControlStatus,l.FormControlName],styles:[".field-large[_ngcontent-%COMP%]{min-height:9.375rem}.field-small[_ngcontent-%COMP%]{min-height:3.5rem}"],changeDetection:0}),o})();var M=t(88135),F=t(68874);let J=(()=>{class o{constructor(){this.testForm=new l.FormGroup({testValue1:new l.FormControl("A field",l.Validators.required)})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-text-area-example-3"]],decls:6,vars:2,consts:function(){let a;return a=$localize`:␟d79d1199bdb06711520d14b4a2ccc7357a9b44c2␟3036146691798610079: You can use label outside mode with ${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiLabel${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:`,[a,[1,"tui-row",3,"formGroup"],["tuiLabel","","label","Type a text",1,"tui-col_md-6"],["formControlName","testValue1",1,"tui-space_bottom-4",3,"tuiTextfieldLabelOutside"]]},template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18nStart(1,0),e.\u0275\u0275element(2,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"form",1),e.\u0275\u0275elementStart(4,"label",2),e.\u0275\u0275element(5,"tui-text-area",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("formGroup",i.testForm),e.\u0275\u0275advance(2),e.\u0275\u0275property("tuiTextfieldLabelOutside",!0))},directives:[l.\u0275NgNoValidate,l.NgControlStatusGroup,l.FormGroupDirective,M.A,u.Jl,E.e,l.NgControlStatus,l.FormControlName,F.xT],styles:[".field[_ngcontent-%COMP%]{min-height:3.5rem}"],changeDetection:0}),o})();var p=t(14133),S=t(72107),U=t(36951),z=t(7114);const H=function(){return[]};function j(o){return`Maximum length \u2014 ${o.requiredLength}`}let W=(()=>{class o{constructor(){this.maxLength=97,this.testForm=new l.FormGroup({testValue1:new l.FormControl("\nIn Java: everything is an object.\nIn Clojure: everything is a list.\nIn JavaScript: everything is a terrible mistake.\n".trim(),[l.Validators.required,l.Validators.maxLength(this.maxLength)])}),this.testForm.markAllAsTouched()}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-text-area-example-4"]],features:[e.\u0275\u0275ProvidersFeature([{provide:s.Z4Y,useValue:{required:"Enter this!",maxlength:j}}])],decls:14,vars:10,consts:function(){let a;return a=$localize`:␟33218cb91f669219499cb4af192392f9fcab5041␟8444245527580805922: To highlight extra characters: ${"\ufffd#2\ufffd"}:START_UNORDERED_LIST:${"\ufffd#3\ufffd"}:START_LIST_ITEM: Set ${"[\ufffd#4\ufffd|\ufffd#6\ufffd]"}:START_TAG_CODE:tuiTextfieldMaxLength${"[\ufffd/#4\ufffd|\ufffd/#6\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#3\ufffd|\ufffd/#5\ufffd]"}:CLOSE_LIST_ITEM:${"\ufffd#5\ufffd"}:START_LIST_ITEM_1: (Optional) Dont forget to set form validator (for example, ${"[\ufffd#4\ufffd|\ufffd#6\ufffd]"}:START_TAG_CODE:Validators.maxLength${"[\ufffd/#4\ufffd|\ufffd/#6\ufffd]"}:CLOSE_TAG_CODE: ) if you want to make field invalid on exceeding the characters limit ${"[\ufffd/#3\ufffd|\ufffd/#5\ufffd]"}:CLOSE_LIST_ITEM:${"\ufffd/#2\ufffd"}:CLOSE_UNORDERED_LIST:`,a=e.\u0275\u0275i18nPostprocess(a),[[1,"description"],a,[1,"steps"],[1,"steps_optional"],[1,"form","tui-col_md-6",3,"formGroup"],["tuiLabel","","label","Write a wise thought",1,"tui-row"],["formControlName","testValue1","tuiHintContent","it's just a joke",3,"expandable","tuiTextfieldMaxLength","tuiTextfieldLabelOutside"],["formControlName","testValue1",3,"error"]]},template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275i18nStart(1,1),e.\u0275\u0275elementStart(2,"ul",2),e.\u0275\u0275elementStart(3,"li"),e.\u0275\u0275element(4,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"li",3),e.\u0275\u0275element(6,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"form",4),e.\u0275\u0275elementStart(8,"label",5),e.\u0275\u0275elementStart(9,"tui-text-area",6),e.\u0275\u0275text(10," Type it "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(11,"tui-error",7),e.\u0275\u0275pipe(12,"async"),e.\u0275\u0275pipe(13,"tuiFieldError"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(7),e.\u0275\u0275property("formGroup",i.testForm),e.\u0275\u0275advance(2),e.\u0275\u0275property("expandable",!0)("tuiTextfieldMaxLength",i.maxLength)("tuiTextfieldLabelOutside",!0),e.\u0275\u0275advance(2),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(12,5,e.\u0275\u0275pipeBind1(13,7,e.\u0275\u0275pureFunction0(9,H)))))},directives:[l.\u0275NgNoValidate,l.NgControlStatusGroup,l.FormGroupDirective,M.A,u.Jl,E.e,l.NgControlStatus,l.FormControlName,p.m,S.fy,F.xT,U.v],pipes:[x.Ov,z.A],styles:[".description[_ngcontent-%COMP%]{margin-bottom:2rem}.steps[_ngcontent-%COMP%]{list-style-type:disc;padding-left:.9375rem;margin:1rem 0}.steps_optional[_ngcontent-%COMP%]{list-style-type:circle}tui-root._mobile[_nghost-%COMP%]   .form[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .form[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),o})();var Y=t(79121),f=t(91030);let K=(()=>{class o{constructor(){this.value=""}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-text-area-example-5"]],decls:3,vars:1,consts:[[1,"b-form",3,"ngModel","ngModelChange"],["tuiTextfield","","maxlength","97","placeholder","Write a few words about yourself"]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"tui-text-area",0),e.\u0275\u0275listener("ngModelChange",function(r){return i.value=r}),e.\u0275\u0275text(1," Bio "),e.\u0275\u0275element(2,"textarea",1),e.\u0275\u0275elementEnd()),2&n&&e.\u0275\u0275property("ngModel",i.value)},directives:[u.Jl,E.e,l.NgControlStatus,l.NgModel,f.M],encapsulation:2,changeDetection:0}),o})();var O=t(64374);let Z=(()=>{class o{constructor(){this.value="\u0645\u0648\u0646\u062a\u0649 \u067e\u0627\u064a\u062b\u0648\u0646 \u0648 \u0633\u0627\u0639\u0627\u062a \u0645\u0639\u0631\u0648\u0641\u064a\u0646 \u0627\u0646\u0647\u0645 \u0630\u0649 \u067e\u0627\u064a\u062b\u0648\u0646\u0632 \u0643\u0627\u0646\u0648 \u0645\u062c\u0645\u0648\u0639\u0629 \u0643\u0648\u0645\u064a\u062f\u064a\u0627 \u0633\u0631\u064a\u0627\u0644\u064a\u0647 \u0645\u0646 \u0628\u0631\u064a\u0637\u0627\u0646\u064a\u0627"}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-text-area-example-6"]],decls:2,vars:3,consts:[["tuiHintContent","\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0634\u062e\u0635\u064a\u0647","tuiHintDirection","bottom-right",1,"input",3,"tuiTextfieldCleaner","tuiTextfieldMaxLength","ngModel","ngModelChange"]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"tui-text-area",0),e.\u0275\u0275listener("ngModelChange",function(r){return i.value=r}),e.\u0275\u0275text(1," \u0645\u0648\u0646\u062a\u0649 \u0628\u0627\u064a\u062b\u0648\u0646\n"),e.\u0275\u0275elementEnd()),2&n&&e.\u0275\u0275property("tuiTextfieldCleaner",!0)("tuiTextfieldMaxLength",100)("ngModel",i.value)},directives:[u.Jl,E.e,p.m,O.be,S.fy,l.NgControlStatus,l.NgModel],styles:[".input[_ngcontent-%COMP%]{width:20rem;direction:rtl;text-align:right}"],changeDetection:0}),o})();var Q=t(31823),w=t(41031),k=t(10200),q=t(23618),ee=t(17023),te=t(54218),ne=t(76349);function oe(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-example",3),e.\u0275\u0275element(3,"tui-text-area-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"tui-doc-example",4),e.\u0275\u0275element(5,"tui-text-area-example-2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"tui-doc-example",5),e.\u0275\u0275element(7,"tui-text-area-example-3"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"tui-doc-example",6),e.\u0275\u0275element(9,"tui-text-area-example-4"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"tui-doc-example",7),e.\u0275\u0275elementStart(11,"tui-notification",8),e.\u0275\u0275text(12," If you need to set some attributes or listen to events on native "),e.\u0275\u0275elementStart(13,"code"),e.\u0275\u0275text(14,"textarea"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(15," , you can put it inside with "),e.\u0275\u0275elementStart(16,"code"),e.\u0275\u0275text(17,"Textfield"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(18," directive as shown below "),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(19,"tui-text-area-example-5"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"tui-doc-example",9),e.\u0275\u0275element(21,"tui-text-area-example-6"),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("content",n.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",n.example2),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",n.example3),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",n.example4),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",n.example5),e.\u0275\u0275advance(10),e.\u0275\u0275property("content",n.example6)}}function ae(o,a){1&o&&e.\u0275\u0275i18n(0,15)}function le(o,a){1&o&&e.\u0275\u0275i18n(0,16)}function ie(o,a){1&o&&(e.\u0275\u0275i18nStart(0,17),e.\u0275\u0275element(1,"code"),e.\u0275\u0275i18nEnd())}function re(o,a){if(1&o){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo"),e.\u0275\u0275elementStart(1,"tui-text-area",10),e.\u0275\u0275text(2," Textfield for multiline input. It can grow with its content. "),e.\u0275\u0275element(3,"textarea",11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"tui-doc-documentation"),e.\u0275\u0275template(5,ae,1,0,"ng-template",12),e.\u0275\u0275listener("documentationPropertyValueChange",function(m){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().disabled=m}),e.\u0275\u0275template(6,le,1,0,"ng-template",13),e.\u0275\u0275listener("documentationPropertyValueChange",function(m){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().expandable=m}),e.\u0275\u0275template(7,ie,2,0,"ng-template",14),e.\u0275\u0275listener("documentationPropertyValueChange",function(m){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().rows=m}),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(8,"inherited-documentation")}if(2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("formControl",n.control)("focusable",n.focusable)("tuiTextfieldCleaner",n.cleaner)("tuiTextfieldExampleText",n.exampleText)("tuiTextfieldLabelOutside",n.labelOutside)("tuiTextfieldMaxLength",n.maxLength)("tuiTextfieldSize",n.size)("expandable",n.expandable)("pseudoInvalid",n.pseudoInvalid)("pseudoFocus",n.pseudoFocused)("pseudoHover",n.pseudoHovered)("readOnly",n.readOnly)("rows",n.rows)("tuiHintContent",n.hintContent)("tuiHintDirection",n.hintDirection)("tuiHintMode",n.hintMode),e.\u0275\u0275advance(4),e.\u0275\u0275property("documentationPropertyValue",n.disabled),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",n.expandable),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",n.rowsVariants)("documentationPropertyValue",n.rows)}}function de(o,a){if(1&o&&(e.\u0275\u0275elementStart(0,"ol",18),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,19),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",20),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18nStart(8,21),e.\u0275\u0275element(9,"code"),e.\u0275\u0275element(10,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(11,"tui-doc-code",22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"li"),e.\u0275\u0275elementStart(13,"p"),e.\u0275\u0275i18n(14,23),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(15,"tui-doc-code",24),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",n.exampleModule),e.\u0275\u0275advance(6),e.\u0275\u0275property("code",n.exampleForm),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",n.exampleHtml)}}let me=(()=>{class o extends $.b{constructor(){super(...arguments),this.example1={TypeScript:t.e(73510).then(t.t.bind(t,73510,17)),HTML:t.e(32737).then(t.t.bind(t,32737,17)),LESS:t.e(5973).then(t.t.bind(t,5973,17))},this.example2={TypeScript:t.e(28686).then(t.t.bind(t,28686,17)),HTML:t.e(55487).then(t.t.bind(t,55487,17)),LESS:t.e(20554).then(t.t.bind(t,20554,17))},this.example3={TypeScript:t.e(152).then(t.t.bind(t,152,17)),HTML:t.e(64136).then(t.t.bind(t,64136,17)),LESS:t.e(70276).then(t.t.bind(t,70276,17))},this.example4={TypeScript:t.e(88112).then(t.t.bind(t,88112,17)),HTML:t.e(25634).then(t.t.bind(t,25634,17)),LESS:t.e(37730).then(t.t.bind(t,37730,17))},this.example5={TypeScript:t.e(1390).then(t.t.bind(t,1390,17)),HTML:t.e(13584).then(t.t.bind(t,13584,17))},this.example6={TypeScript:t.e(84729).then(t.t.bind(t,84729,17)),HTML:t.e(12869).then(t.t.bind(t,43378,17)),LESS:t.e(66783).then(t.t.bind(t,66783,17))},this.exampleModule=t.e(93135).then(t.t.bind(t,93135,17)),this.exampleHtml=t.e(89482).then(t.t.bind(t,89482,17)),this.exampleForm=t.e(51738).then(t.t.bind(t,51738,17)),this.maxLengthVariants=[50,100,500],this.maxLength=null,this.rowsVariants=[8,15,30],this.rows=this.rowsVariants[0],this.expandable=!1,this.control=new l.FormControl,this.sizeVariants=["m","l"],this.size=this.sizeVariants[1]}}return o.\u0275fac=function(){let a;return function(i){return(a||(a=e.\u0275\u0275getInheritedFactory(o)))(i||o)}}(),o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["example-tui-text-area"]],features:[e.\u0275\u0275ProvidersFeature([{provide:v.x,useExisting:(0,e.forwardRef)(()=>o)}]),e.\u0275\u0275InheritDefinitionFeature],decls:4,vars:0,consts:function(){let a,n,i,m,r,_,A,D,N,h,R,c,L;return a=$localize`:␟d8e68a67668ed36e11149af4b05578aba184f2d8␟3415839972003360203:Textfield for multiline input. It can grow with its content.`,n=$localize`:␟edc570a1a3344698bc10ae22435fcd850d8e1d5c␟947387158256125293:A simple field and expandable`,i=$localize`:␟a1516856d096185f3cd2e884d1c53927efe37878␟991068879248914444:Custom size`,m=$localize`:␟109f3df315d219bfc11667dd1c45293fef91d174␟4716735227862695980:With label outside`,r=$localize`:␟fea4a8a30133ed301fa9c3aa2501016eb2920272␟4290224686448141191:With extra characters highlight`,_=$localize`:␟e4897a811bb51b166e64728f6812355f0de6cc4a␟8180212294898737649:Native attributes`,A=$localize`:␟e79e58f2fd2e2018afeb160923b2810951e9dbfc␟2885218428372331823:Direction: RTL`,D=$localize`:␟28350648cac40c192feced71459023195fd07d01␟9000685466486669878: Disabled state (formControl.disable()) `,N=$localize`:␟fe3440932d8de8493b95c5bb7b80235d8019c4e7␟8181128573063666297: Control height can be expanded to show all content `,h=$localize`:␟a96e8afcd84a7e13d809bf3cf105ae4fceb93ee3␟3033193110728465870: A number of visible rows in ${"\ufffd#1\ufffd"}:START_TAG_CODE:expandable${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: mode `,R=$localize`:␟aeec6378605dd6e8426702c0c1a0ac3534fb3376␟103194612379487642: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiTextAreaModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,c=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,c=e.\u0275\u0275i18nPostprocess(c),L=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","TextArea","package","KIT","type","components"],["pageTab",""],a,["id","base","heading",n,3,"content"],["id","large","heading",i,3,"content"],["id","label-outside","heading",m,3,"content"],["id","extra-chars-highlight","heading",r,3,"content"],["id","native","heading",_,3,"content"],[1,"tui-space_bottom-4","b-form"],["id","rtl","heading",A,3,"content"],[1,"b-form",3,"formControl","focusable","tuiTextfieldCleaner","tuiTextfieldExampleText","tuiTextfieldLabelOutside","tuiTextfieldMaxLength","tuiTextfieldSize","expandable","pseudoInvalid","pseudoFocus","pseudoHover","readOnly","rows","tuiHintContent","tuiHintDirection","tuiHintMode"],["tuiTextfield","","placeholder","Placeholder"],["documentationPropertyName","disabled","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","expandable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","rows","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],D,N,h,[1,"b-demo-steps"],R,["filename","myComponent.module.ts",3,"code"],c,["filename","myComponent.component.ts",3,"code"],L,["filename","myComponent.template.html",3,"code"]]},template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,oe,22,6,"ng-template",1),e.\u0275\u0275template(2,re,9,20,"ng-template",1),e.\u0275\u0275template(3,de,16,3,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[X.q,I.n,G.f,V,b,J,W,Y.L,K,Z,Q.F,u.Jl,E.e,l.NgControlStatus,l.FormControlDirective,O.be,w._K,F.xT,S.fy,k.sz,p.m,f.M,q.z,ee.B,te.w,ne.c],encapsulation:2,changeDetection:0}),o})(),Te=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[[s.U1B,g.fV,y.f,l.ReactiveFormsModule,l.FormsModule,T.EIu,x.ez,s.Ltw,T.fNO,T.jzK,T.U8r,T.cnw,T.cyX,T.HiG,T.Shu,s.YuV,P.Bz.forChild((0,g.Ve)(me))]]}),o})()}}]);