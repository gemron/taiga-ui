(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{SVcV:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputPhoneModule",(function(){return Ve}));var o=n("An66"),a=n("3kIJ"),i=n("1VvW"),r=n("SVIu"),l=n("l4xa"),d=n("Qq0t"),c=n("dvRg"),u=n("cWK9"),p=n("Piem"),s=n("kZht"),m=n("LusI"),h=n("K/iL"),f=n("OZlg"),C=n("e0eB"),b=n("iyc4"),y=n("aPft"),x=n("bYz0"),g=n("LhIY"),v=n("vwaW"),S=n("zV1d");let w=(()=>{class e{constructor(){this.testForm=new a.FormGroup({testValue:new a.FormControl("+77777777777",a.Validators.required)})}setValue(){this.testForm.get("testValue").setValue("+79926775676")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-phone-example-1"]],decls:9,vars:4,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue"],["tuiTextfield","","autocomplete","tel"],[1,"tui-space_bottom-3"],["tuiButton","","type","button","size","m",3,"click"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"form",0),s["\u0275\u0275elementStart"](1,"tui-input-phone",1),s["\u0275\u0275text"](2," Type a phone number "),s["\u0275\u0275element"](3,"input",2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"pre",3),s["\u0275\u0275text"](5),s["\u0275\u0275pipe"](6,"json"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"button",4),s["\u0275\u0275listener"]("click",(function(){return t.setValue()})),s["\u0275\u0275text"](8," Set value from outside: +79926775676\n"),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("formGroup",t.testForm),s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate1"]("Form value: ",s["\u0275\u0275pipeBind1"](6,2,t.testForm.value),""))},directives:[a["\u0275angular_packages_forms_forms_y"],a.NgControlStatusGroup,a.FormGroupDirective,x.a,g.a,a.NgControlStatus,a.FormControlName,v.a,S.a],pipes:[o.k],encapsulation:2,changeDetection:0}),e})(),T=(()=>{class e{constructor(){this.control=new a.FormControl("",a.Validators.minLength(12))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-phone-example-2"]],decls:5,vars:4,consts:[[1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-input-phone",0),s["\u0275\u0275text"](1," Type phone number\n"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"pre"),s["\u0275\u0275text"](3),s["\u0275\u0275pipe"](4,"json"),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("formControl",t.control),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"]("Form value: ",s["\u0275\u0275pipeBind1"](4,2,t.control.value),""))},directives:[x.a,g.a,a.NgControlStatus,a.FormControlDirective],pipes:[o.k],encapsulation:2,changeDetection:0}),e})();var E=n("D57K"),O=n("ZTXN"),M=n("g6G6"),P=n("HM3f"),V=n("ROBh"),A=n("TLy2"),D=n("YtkY"),_=n("8j5Y"),$=n("jIqt"),F=n("7ntQ"),L=n("+SFL"),k=n("Kl/4"),I=n("RKv1"),H=n("fP8s"),j=n("cVyY"),z=n("xcN3"),N=n("cweO");function G(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"button",6),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit;return s["\u0275\u0275nextContext"](4).onClick(n)})),s["\u0275\u0275element"](1,"tui-avatar",7),s["\u0275\u0275elementStart"](2,"span",8),s["\u0275\u0275elementStart"](3,"span"),s["\u0275\u0275text"](4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"span",9),s["\u0275\u0275text"](6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;s["\u0275\u0275property"]("value",e.phone)("disabled",e.disabled),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("avatarUrl",e.avatarUrl||null)("text",e.firstName),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate2"]("",e.firstName," ",e.lastName,""),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](e.phone)}}function R(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tui-data-list"),s["\u0275\u0275template"](1,G,7,7,"button",5),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"](2).tuiLet;s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",e)}}function W(e,t){1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,R,2,1,"tui-data-list",4),s["\u0275\u0275elementContainerEnd"]())}function B(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-input-phone",2),s["\u0275\u0275listener"]("ngModelChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().value=t}))("searchChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().onSearch(t)})),s["\u0275\u0275text"](1),s["\u0275\u0275pipe"](2,"async"),s["\u0275\u0275template"](3,W,2,0,"ng-container",3),s["\u0275\u0275elementEnd"]()}if(2&e){const e=t.tuiLet,n=s["\u0275\u0275nextContext"](),o=s["\u0275\u0275reference"](3);s["\u0275\u0275property"]("tuiTextfieldCustomContent",o)("allowText",!0)("ngModel",n.value),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",s["\u0275\u0275pipeBind1"](2,5,n.placeholder$)," "),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",e.length)}}function U(e,t){if(1&e&&s["\u0275\u0275element"](0,"tui-avatar",11),2&e){const e=t.ngIf;s["\u0275\u0275property"]("rounded",!0)("avatarUrl",e.avatarUrl||null)("text",e.firstName)}}function Y(e,t){if(1&e&&(s["\u0275\u0275template"](0,U,1,3,"tui-avatar",10),s["\u0275\u0275pipe"](1,"async")),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("ngIf",s["\u0275\u0275pipeBind1"](1,1,e.user$))}}class q{constructor(e,t,n,o=null,a=!1){this.firstName=e,this.lastName=t,this.phone=n,this.avatarUrl=o,this.disabled=a}toString(){return`${this.firstName} ${this.lastName}`}}const K=[new q("Roman","Sedov","+75678901234","http://marsibarsi.me/images/1x1small.jpg"),new q("Alex","Inkin","+75678901234",L.a)];let J=(()=>{class e{constructor(){this.search$=new O.a,this.selected$=new O.a,this.value="",this.user$=Object(M.a)(this.selected$,this.search$.pipe(Object(A.a)(e=>this.request(e).pipe(Object(D.a)(t=>this.isFullMatch(t,e)?t[0]:null))))).pipe(Object(_.a)(e=>{e&&(this.value=e.phone)})),this.items$=this.search$.pipe(Object($.a)(""),Object(A.a)(e=>this.request(e).pipe(Object(D.a)(t=>this.isFullMatch(t,e)?[]:t)))),this.placeholder$=Object(P.a)(this.user$,this.search$).pipe(Object(D.a)(([e,t])=>e||this.getPlaceholder(t)),Object($.a)("Phone number or name"))}onSearch(e){this.search$.next(e)}onClick(e){this.selected$.next(e)}request(e){return Object(V.a)(K.filter(t=>Object(l.H)(t,e)||Object(l.H)(t.phone,e))).pipe(Object(F.a)())}getPlaceholder(e){return e?e.startsWith("+")?"Phone number":"Name":"Phone number or name"}isFullMatch(e,t){return 1===e.length&&(String(e[0])===t||e[0].phone===t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-phone-example-3"]],decls:6,vars:4,consts:[["class","b-form",3,"tuiTextfieldCustomContent","allowText","ngModel","ngModelChange","searchChange",4,"tuiLet"],["avatar",""],[1,"b-form",3,"tuiTextfieldCustomContent","allowText","ngModel","ngModelChange","searchChange"],[4,"ngIf"],[4,"tuiDataList"],["tuiOption","",3,"value","disabled","click",4,"ngFor","ngForOf"],["tuiOption","",3,"value","disabled","click"],["size","s",1,"tui-space_right-3",3,"avatarUrl","text"],[1,"user"],[1,"phone"],["size","s",3,"rounded","avatarUrl","text",4,"ngIf"],["size","s",3,"rounded","avatarUrl","text"]],template:function(e,t){1&e&&(s["\u0275\u0275template"](0,B,4,7,"tui-input-phone",0),s["\u0275\u0275pipe"](1,"async"),s["\u0275\u0275template"](2,Y,2,3,"ng-template",null,1,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementStart"](4,"p"),s["\u0275\u0275text"](5),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("tuiLet",s["\u0275\u0275pipeBind1"](1,2,t.items$)),s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate1"]("Value: ",t.value,""))},directives:[k.a,x.a,g.a,I.b,a.NgControlStatus,a.NgModel,o.t,H.a,j.a,o.s,z.a,N.a],pipes:[o.b],styles:[".user[_ngcontent-%COMP%]{margin-right:auto}.phone[_ngcontent-%COMP%]{font:var(--tui-font-text-s);display:block;color:var(--tui-text-03)}"],changeDetection:0}),Object(E.b)([l.nd],e.prototype,"request",null),e})();var Z,Q=n("EPR0"),X=n("yHor"),ee=n("zGJC"),te=n("FSyC"),ne=n("CDxv"),oe=n("eB8V"),ae=n("gEyt"),ie=n("2wTY"),re=n("SUM+"),le=n("RlDx"),de=n("u8jZ");Z=$localize`:␟cdedf35da9f1fe59a6967a31fca86bb5223deb5e␟4265916685645891270:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputPhone${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows to input a phone number `;const ce=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],ue=["heading",$localize`:␟3d7fa81ead9d15f29cb4d813100cad4c816553cd␟577318767938750368:With length validator`],pe=["heading",$localize`:␟f7801e64b274854b74c1e808598fc1ddd2f44e16␟7072553736290807084:With autocomplete`,"description",$localize`:␟7a074c8c6837e68463062476f13f9646e4b3ffb8␟3923198094532276941:By number and by name`];function se(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18nStart"](1,Z),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"tui-doc-example",2),s["\u0275\u0275i18nAttributes"](4,ce),s["\u0275\u0275elementStart"](5,"tui-notification",3),s["\u0275\u0275text"](6," If you need to set some attributes or listen to events on native "),s["\u0275\u0275elementStart"](7,"code"),s["\u0275\u0275text"](8,"input"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](9," , you can put it inside with "),s["\u0275\u0275elementStart"](10,"code"),s["\u0275\u0275text"](11,"Textfield"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](12," directive as shown below "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](13,"tui-input-phone-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"tui-doc-example",4),s["\u0275\u0275i18nAttributes"](15,ue),s["\u0275\u0275element"](16,"tui-input-phone-example-2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](17,"tui-doc-example",5),s["\u0275\u0275i18nAttributes"](18,pe),s["\u0275\u0275element"](19,"tui-input-phone-example-3"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example1),s["\u0275\u0275advance"](11),s["\u0275\u0275property"]("content",e.example2),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example3)}}function me(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tui-input-phone",12),s["\u0275\u0275text"](1," Type a phone number "),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"](2);s["\u0275\u0275property"]("formControl",e.control)("focusable",e.focusable)("readOnly",e.readOnly)("tuiTextfieldAutocomplete",e.autocomplete)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldCustomContent",e.customContent)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("countryCode",e.countryCode)("phoneMaskAfterCountryCode",e.phoneMaskAfterCountryCode)("pseudoInvalid",e.pseudoInvalid)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered)("tuiDropdownAlign",e.dropdownAlign)("tuiDropdownDirection",e.dropdownDirection)("tuiDropdownLimitWidth",e.dropdownLimitWidth)("tuiDropdownMinHeight",e.dropdownMinHeight)("tuiDropdownMaxHeight",e.dropdownMaxHeight)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)}}var he,fe,Ce,be,ye,xe,ge;function ve(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,he),s["\u0275\u0275element"](1,"code"),s["\u0275\u0275i18nEnd"]())}function Se(e,t){1&e&&s["\u0275\u0275i18n"](0,fe)}function we(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,Ce),s["\u0275\u0275element"](1,"code"),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275i18nEnd"]())}function Te(e,t){1&e&&s["\u0275\u0275i18n"](0,be)}function Ee(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-doc-demo",6),s["\u0275\u0275template"](1,me,2,21,"ng-template"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-documentation"),s["\u0275\u0275template"](3,ve,2,0,"ng-template",7),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().disabled=t})),s["\u0275\u0275template"](4,Se,1,0,"ng-template",8),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().countryCode=t})),s["\u0275\u0275template"](5,we,3,0,"ng-template",9),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().phoneMaskAfterCountryCode=t})),s["\u0275\u0275template"](6,Te,1,0,"ng-template",10),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](7,"inherited-documentation",11)}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("control",e.control),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("documentationPropertyValue",e.disabled),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.countryCodes)("documentationPropertyValue",e.countryCode),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.phoneMasksAfterCountryCode)("documentationPropertyValue",e.phoneMaskAfterCountryCode),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("dropdown",!0)}}function Oe(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",13),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,ye),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",14),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18nStart"](8,xe),s["\u0275\u0275element"](9,"code"),s["\u0275\u0275element"](10,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](11,"tui-doc-code",15),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"li"),s["\u0275\u0275elementStart"](13,"p"),s["\u0275\u0275i18n"](14,ge),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](15,"tui-doc-code",16),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",e.exampleModule),s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("code",e.exampleForm),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",e.exampleHtml)}}he=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,fe=$localize`:␟3796d9edaba5839bc345b9dc9c1d22bec3e806b3␟2828194013486797327: Country code `,Ce=$localize`:␟68665a783e62d750ebd0261d482afd5e9717751a␟3398053793685015135: Text mask after country code. You can use ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:#${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: , ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:-${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: and spaces as a template sumbol `,Ce=s["\u0275\u0275i18nPostprocess"](Ce),be=$localize`:␟0ec866a9ec689912cd4a6a95bc762ea569b9ff1c␟5614373748421345116: Textfield value to subscribe on input or setting it from the outside `,ye=$localize`:␟3066c1bc71219464813f85b21117fcdb078ebfd8␟4215209632386988101: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputPhoneModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,xe=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,xe=s["\u0275\u0275i18nPostprocess"](xe),ge=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let Me=(()=>{class e extends m.a{constructor(){super(...arguments),this.exampleForm=n.e(842).then(n.bind(null,"ntMP")),this.exampleModule=n.e(843).then(n.bind(null,"xmsw")),this.exampleHtml=n.e(844).then(n.bind(null,"ci8f")),this.example1={TypeScript:n.e(836).then(n.bind(null,"LeDF")),HTML:n.e(835).then(n.bind(null,"QS1d"))},this.example2={TypeScript:n.e(838).then(n.bind(null,"FmUb")),HTML:n.e(837).then(n.bind(null,"Fz73"))},this.example3={TypeScript:n.e(841).then(n.bind(null,"HXAw")),HTML:n.e(839).then(n.bind(null,"3kdT")),LESS:n.e(840).then(n.bind(null,"zP4C"))},this.cleaner=!1,this.dropdownAlignVariants=["left","right"],this.dropdownAlign=this.dropdownAlignVariants[0],this.dropdownLimitWidthVariants=["fixed","min"],this.dropdownLimitWidth=this.dropdownLimitWidthVariants[0],this.dropdownDirectionVariants=["top","bottom"],this.dropdownDirection=null,this.dropdownMinHeight=d.c,this.dropdownMaxHeight=d.b,this.control=new a.FormControl("",[a.Validators.required,a.Validators.minLength(12)]),this.countryCodes=["+7","+850","+1","+52"],this.countryCode=this.countryCodes[0],this.phoneMasksAfterCountryCode=["(###) ###-##-##","(####)+____:-#############","### ###-####"],this.phoneMaskAfterCountryCode=this.phoneMasksAfterCountryCode[0]}}return e.\u0275fac=function(t){return Pe(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-input-phone"]],features:[s["\u0275\u0275ProvidersFeature"]([{provide:h.a,useExisting:Object(s.forwardRef)(()=>e)}]),s["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputPhone","package","KIT","type","components"],["pageTab",""],["id","base",3,"content",6,"heading"],[1,"tui-space_bottom-4","b-form"],["id","validated",3,"content",6,"heading"],["id","autocomplete",3,"content",6,"heading","description"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","countryCode","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","phoneMaskAfterCountryCode","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","search","documentationPropertyMode","input-output","documentationPropertyType","string"],[3,"dropdown"],[3,"formControl","focusable","readOnly","tuiTextfieldAutocomplete","tuiTextfieldCleaner","tuiTextfieldCustomContent","tuiTextfieldLabelOutside","tuiTextfieldSize","countryCode","phoneMaskAfterCountryCode","pseudoInvalid","pseudoFocused","pseudoHovered","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiHintContent","tuiHintDirection","tuiHintMode"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,se,20,3,"ng-template",1),s["\u0275\u0275template"](2,Ee,8,7,"ng-template",1),s["\u0275\u0275template"](3,Oe,16,3,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[f.a,C.a,b.a,y.a,w,T,J,Q.a,X.a,ee.a,te.a,x.a,g.a,a.NgControlStatus,a.FormControlDirective,ne.b,oe.b,I.b,ae.b,ie.b,re.a,le.a,de.a],styles:[".item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;margin:-.625rem 0}.avatar[_ngcontent-%COMP%]{margin-left:.75rem}.name[_ngcontent-%COMP%], .phone[_ngcontent-%COMP%]{margin:0}.phone[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-03)}"],changeDetection:0}),e})();const Pe=s["\u0275\u0275getInheritedFactory"](Me);let Ve=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,a.FormsModule,a.ReactiveFormsModule,u.c,l.Eb,d.fb,d.ab,d.Vb,c.z,d.lb,d.Yb,d.tb,c.ib,d.yb,d.Gb,p.a,r.l,i.f.forChild(Object(r.s)(Me))]]}),e})()}}]);