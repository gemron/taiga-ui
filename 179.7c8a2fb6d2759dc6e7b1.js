(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{k82B:function(e,t,r){"use strict";r.r(t),r.d(t,"ExampleTuiFieldErrorModule",(function(){return je}));var n=r("An66"),o=r("3kIJ"),a=r("1VvW"),i=r("T8fS"),l=r("SVIu"),u=r("53zJ"),p=r("Qq0t"),m=r("dvRg"),s=r("bMyq"),c=r("cWK9"),d=r("kZht"),f=r("OZlg"),E=r("e0eB"),_=r("yZWP"),b=r("iyc4"),h=r("1Nkj"),T=r("GdrL"),C=r("71sB"),S=r("2wTY"),y=r("gEyt"),g=r("6doR"),A=r("DkUU");const x=["label",$localize`:␟c2f188eeca60463782738d8247914bf170df5098␟3772154377692784553:Type the ultimate answer`],v=["label",$localize`:␟4de3cc8dba3c7b052f74a1db4752f51bda859e9c␟8591875090862306452:Set a password`];var L;L=$localize`:␟740e12c058c1a630b11478b272764bf7d7d5f028␟124757051077109908: If you need to show validation message as early as a user started to type something, subscribe on form value changes and call markAsTouched on control on first value change `;const O=function(){return[]},F=/^[a-zA-Z]+$/;function P(e){return e.value&&F.test(e.value)?null:{other:"Only latin letters are allowed"}}function V(e){return"42"===e.value?null:{other:"Wrong"}}let R=(()=>{class e{constructor(){this.testValue1=new o.FormControl("",[o.Validators.required,P]),this.testValue3=new o.FormControl("",[o.Validators.required,P]),this.testForm=new o.FormGroup({testValue1:this.testValue1,testValue2:new o.FormControl("",[o.Validators.required,V])}),this.testValue1.valueChanges.subscribe(()=>{this.testValue1.markAsTouched()})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-pipe-example-1"]],decls:17,vars:15,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","",1,"tui-space_bottom-4",6,"label"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue2",3,"error"],["tuiLabel","",6,"label"],["formControlName","testValue1","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue1",3,"error"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"form",0),d["\u0275\u0275elementStart"](1,"label",1),d["\u0275\u0275i18nAttributes"](2,x),d["\u0275\u0275elementStart"](3,"tui-input",2),d["\u0275\u0275text"](4," to the Question of Life, the Universe, and Everything "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-error",3),d["\u0275\u0275pipe"](6,"async"),d["\u0275\u0275pipe"](7,"tuiFieldError"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"label",4),d["\u0275\u0275i18nAttributes"](9,v),d["\u0275\u0275elementStart"](10,"tui-input",5),d["\u0275\u0275text"](11," Latin letters only "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](12,"tui-error",6),d["\u0275\u0275pipe"](13,"async"),d["\u0275\u0275pipe"](14,"tuiFieldError"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"p"),d["\u0275\u0275i18n"](16,L),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("formGroup",t.testForm),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("error",d["\u0275\u0275pipeBind1"](6,5,d["\u0275\u0275pipeBind1"](7,7,d["\u0275\u0275pureFunction0"](13,O)))),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("error",d["\u0275\u0275pipeBind1"](13,9,d["\u0275\u0275pipeBind1"](14,11,d["\u0275\u0275pureFunction0"](14,O)))))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,h.a,T.a,C.a,o.NgControlStatus,o.FormControlName,S.b,y.b,g.a],pipes:[n.b,A.a],encapsulation:2,changeDetection:0}),e})();var I,w=r("3p4X"),G=r("SrNW"),D=r("YtkY"),$=r("jIqt"),M=r("okGw"),N=r("x8/p");I=$localize`:␟87a9e0f6ceb1444cab6185424f933a376357a91c␟3646762244302681891: Required `;const z=function(){return[]};function B(e){return"Maximum length \u2014 "+e.requiredLength}function U(e){return"Minimum length \u2014 "+e.requiredLength}let X=(()=>{class e{constructor(){this.testValue1=new o.FormControl("",[o.Validators.minLength(4),o.Validators.maxLength(4)]),this.testValue2=new o.FormControl("",[o.Validators.required,o.Validators.email]),this.testValue3=new o.FormControl(2,[o.Validators.min(3)]),this.testForm=new o.FormGroup({testValue1:this.testValue1,testValue2:this.testValue2,testValue3:this.testValue3}),this.testValue1.valueChanges.subscribe(()=>{this.testValue1.markAsTouched()})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-pipe-example-2"]],features:[d["\u0275\u0275ProvidersFeature"]([{provide:m.v,useValue:{required:"Enter this!",email:"Enter a valid email",maxlength:B,minlength:U,min:Object(w.a)(2e3).pipe(Object(G.a)(e=>!e,!1),Object(D.a)(e=>e?"Fix please":"Min number 3"),Object($.a)("Min number 3"))}}])],decls:19,vars:20,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","","label","Enter an email",1,"tui-space_bottom-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue2",3,"error"],["tuiLabel","","label","Minimum and maximum length",1,"tui-space_bottom-4"],["formControlName","testValue1","tuiTextfieldSize","m"],["formControlName","testValue1",3,"error"],["tuiLabel","","label","Minimum number"],["formControlName","testValue3","tuiTextfieldSize","m"],["formControlName","testValue3",3,"error"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"form",0),d["\u0275\u0275elementStart"](1,"label",1),d["\u0275\u0275elementStart"](2,"tui-input",2),d["\u0275\u0275i18n"](3,I),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](4,"tui-error",3),d["\u0275\u0275pipe"](5,"async"),d["\u0275\u0275pipe"](6,"tuiFieldError"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"label",4),d["\u0275\u0275elementStart"](8,"tui-input",5),d["\u0275\u0275text"](9," 4 letters word... "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](10,"tui-error",6),d["\u0275\u0275pipe"](11,"async"),d["\u0275\u0275pipe"](12,"tuiFieldError"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](13,"label",7),d["\u0275\u0275elementStart"](14,"tui-input-count",8),d["\u0275\u0275text"](15," number "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](16,"tui-error",9),d["\u0275\u0275pipe"](17,"async"),d["\u0275\u0275pipe"](18,"tuiFieldError"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("formGroup",t.testForm),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("error",d["\u0275\u0275pipeBind1"](5,5,d["\u0275\u0275pipeBind1"](6,7,d["\u0275\u0275pureFunction0"](17,z)))),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("error",d["\u0275\u0275pipeBind1"](11,9,d["\u0275\u0275pipeBind1"](12,11,d["\u0275\u0275pureFunction0"](18,z)))),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("error",d["\u0275\u0275pipeBind1"](17,13,d["\u0275\u0275pipeBind1"](18,15,d["\u0275\u0275pureFunction0"](19,z)))))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,h.a,T.a,C.a,o.NgControlStatus,o.FormControlName,S.b,y.b,g.a,M.a,N.a],pipes:[n.b,A.a],encapsulation:2,changeDetection:0}),e})();var k=r("l4xa"),q=r("zV1d");const j=["errorContent"],H=["bigErrorContent"],Q=["label",$localize`:␟7d66ae66a6f955b1eb6f5c00aac4d4e2584cdeed␟2295031025708706060:Enter company name`];function Y(e,t){1&e&&(d["\u0275\u0275text"](0," Secret number must contain "),d["\u0275\u0275elementStart"](1,"strong"),d["\u0275\u0275text"](2,"10 or 12 digits"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](3," . "))}function W(e,t){1&e&&(d["\u0275\u0275text"](0," This company is already registered "),d["\u0275\u0275elementStart"](1,"button",9),d["\u0275\u0275text"](2," It is mine "),d["\u0275\u0275elementEnd"]())}const Z=function(){return["required","inn"]},J=function(){return[]},K=/^\d{10}$/,ee=/^\d{12}$/;let te=(()=>{class e{constructor(){this.errorContent="",this.bigErrorContent="",this.testValue2=new o.FormControl(""),this.testForm=new o.FormGroup({testValue1:new o.FormControl("",[o.Validators.required,this.getSecretValidator()]),testValue2:this.testValue2}),this.companyValidator=e=>e.value?{inn:new k.cc(this.bigErrorContent)}:null}ngOnInit(){this.testValue2.setValidators([o.Validators.required,this.companyValidator])}getSecretValidator(){return e=>e.value&&(K.test(e.value)||ee.test(e.value))?null:{secret:new k.cc(this.errorContent)}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-pipe-example-3"]],viewQuery:function(e,t){var r;1&e&&(d["\u0275\u0275viewQuery"](j,!0),d["\u0275\u0275viewQuery"](H,!0)),2&e&&(d["\u0275\u0275queryRefresh"](r=d["\u0275\u0275loadQuery"]())&&(t.errorContent=r.first),d["\u0275\u0275queryRefresh"](r=d["\u0275\u0275loadQuery"]())&&(t.bigErrorContent=r.first))},decls:16,vars:15,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","","label","Secret number"],["formControlName","testValue1","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["errorContent",""],["formControlName","testValue1",3,"error"],["tuiLabel","",1,"tui-space_top-4",6,"label"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["bigErrorContent",""],["formControlName","testValue2",3,"error"],["tuiButton","","type","button",1,"tui-space_top-2"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"form",0),d["\u0275\u0275elementStart"](1,"label",1),d["\u0275\u0275element"](2,"tui-input",2),d["\u0275\u0275template"](3,Y,4,0,"ng-template",null,3,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275element"](5,"tui-error",4),d["\u0275\u0275pipe"](6,"async"),d["\u0275\u0275pipe"](7,"tuiFieldError"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"label",5),d["\u0275\u0275i18nAttributes"](9,Q),d["\u0275\u0275element"](10,"tui-input",6),d["\u0275\u0275template"](11,W,3,0,"ng-template",null,7,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275element"](13,"tui-error",8),d["\u0275\u0275pipe"](14,"async"),d["\u0275\u0275pipe"](15,"tuiFieldError"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("formGroup",t.testForm),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("error",d["\u0275\u0275pipeBind1"](6,5,d["\u0275\u0275pipeBind1"](7,7,d["\u0275\u0275pureFunction0"](13,Z)))),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("error",d["\u0275\u0275pipeBind1"](14,9,d["\u0275\u0275pipeBind1"](15,11,d["\u0275\u0275pureFunction0"](14,J)))))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,h.a,T.a,C.a,o.NgControlStatus,o.FormControlName,S.b,y.b,g.a,q.a],pipes:[n.b,A.a],encapsulation:2,changeDetection:0}),e})();var re=r("bYz0"),ne=r("LhIY"),oe=r("CDxv");const ae=["phoneErrorContent"];function ie(e,t){1&e&&d["\u0275\u0275text"](0," Invalid phone number length ")}const le=function(){return[]};function ue(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"label",4),d["\u0275\u0275elementStart"](1,"span",5),d["\u0275\u0275element"](2,"tui-input-phone",6),d["\u0275\u0275elementStart"](3,"button",7),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](e);const r=t.index;return d["\u0275\u0275nextContext"]().removePhone(r)})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](4,ie,1,0,"ng-template",null,8,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275element"](6,"tui-error",9),d["\u0275\u0275pipe"](7,"async"),d["\u0275\u0275pipe"](8,"tuiFieldError"),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.index;d["\u0275\u0275propertyInterpolate1"]("label","Phone number ",e+1,""),d["\u0275\u0275advance"](2),d["\u0275\u0275propertyInterpolate"]("formControlName",e),d["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),d["\u0275\u0275advance"](4),d["\u0275\u0275propertyInterpolate"]("formControlName",e),d["\u0275\u0275property"]("error",d["\u0275\u0275pipeBind1"](7,5,d["\u0275\u0275pipeBind1"](8,7,d["\u0275\u0275pureFunction0"](9,le))))}}let pe=(()=>{class e{constructor(){this.phoneErrorContent="",this.testForm=new o.FormGroup({phones:new o.FormArray([new o.FormControl("",[o.Validators.required,this.getPhoneLengthValidator()])],[this.getPhoneArrayValidator()])})}get formData(){return this.testForm.get("phones")}addPhone(){this.formData.push(new o.FormControl("",this.addValidators()))}removePhone(e){this.formData.removeAt(e);let t=0;for(;t<=1&&this.formData.controls[t];)this.formData.controls[t].setValidators([o.Validators.required,this.getPhoneLengthValidator()]),t++}addValidators(){return this.formData.controls.length<2?[o.Validators.required,this.getPhoneLengthValidator()]:null}getPhoneLengthValidator(){return e=>12!==e.value.length?{length:new k.cc(this.phoneErrorContent)}:null}getPhoneArrayValidator(){return e=>e.controls.length<2||e.controls.filter(e=>e.errors).length&&e.controls.length?{length:new k.cc("You should add at least 2 phone number")}:null}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-pipe-example-4"]],viewQuery:function(e,t){var r;1&e&&d["\u0275\u0275viewQuery"](ae,!0),2&e&&d["\u0275\u0275queryRefresh"](r=d["\u0275\u0275loadQuery"]())&&(t.phoneErrorContent=r.first)},decls:7,vars:8,consts:[[3,"formGroup"],["tuiLabel","","formArrayName","phones","class","tui-space_bottom-4",3,"label",4,"ngFor","ngForOf"],["formArrayName","phones",1,"form-array-error",3,"error"],["tuiButton","","type","button","size","s",1,"tui-space_top-4",3,"click"],["tuiLabel","","formArrayName","phones",1,"tui-space_bottom-4",3,"label"],[1,"row"],["tuiTextfieldAutocomplete","off","tuiTextfieldSize","m",1,"input",3,"formControlName","tuiTextfieldLabelOutside"],["tuiIconButton","","type","button","size","m","title","Delete phone number","appearance","icon","icon","tuiIconTrash",1,"tui-space_left-2","icon",3,"click"],["phoneErrorContent",""],[3,"formControlName","error"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"form",0),d["\u0275\u0275template"](1,ue,9,10,"label",1),d["\u0275\u0275element"](2,"tui-error",2),d["\u0275\u0275pipe"](3,"async"),d["\u0275\u0275pipe"](4,"tuiFieldError"),d["\u0275\u0275elementStart"](5,"button",3),d["\u0275\u0275listener"]("click",(function(){return t.addPhone()})),d["\u0275\u0275text"](6," Add a phone number "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("formGroup",t.testForm),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",t.formData.controls),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("error",d["\u0275\u0275pipeBind1"](3,3,d["\u0275\u0275pipeBind1"](4,5,d["\u0275\u0275pureFunction0"](7,le)))))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,n.s,g.a,o.FormArrayName,q.a,h.a,re.a,ne.a,oe.b,S.b,o.NgControlStatus,o.FormControlName,y.b],pipes:[n.b,A.a],styles:[".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:flex;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),e})();var me=r("ROBh"),se=r("BwBJ");const ce=function(){return[]},de=/^[a-zA-Z]+$/;let fe=(()=>{class e{constructor(e,t){this.fb=e,this.form=this.fb.group({text:["\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0442\u0435\u043a\u0441\u0442",o.Validators.required]}),this.form.controls.text.setAsyncValidators(function(e){return t=>t.value&&de.test(t.value)?Object(me.a)(null):Object(me.a)({error:new k.cc("Only latin letters allowed")}).pipe(e?Object(se.a)(0):Object(se.a)(5e3))}(t)),this.form.controls.text.markAsTouched()}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](o.FormBuilder),d["\u0275\u0275directiveInject"](k.O))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-pipe-example-5"]],decls:7,vars:7,consts:[[3,"formGroup"],[1,"tui-form__row"],["formControlName","text",1,"input"],["formControlName","text",3,"error"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"form",0),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275elementStart"](2,"tui-input",2),d["\u0275\u0275text"](3," Enter some text "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](4,"tui-error",3),d["\u0275\u0275pipe"](5,"async"),d["\u0275\u0275pipe"](6,"tuiFieldError"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("formGroup",t.form),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("error",d["\u0275\u0275pipeBind1"](5,2,d["\u0275\u0275pipeBind1"](6,4,d["\u0275\u0275pureFunction0"](6,ce)))))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,T.a,C.a,o.NgControlStatus,o.FormControlName,g.a],pipes:[n.b,A.a],styles:[".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:flex;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),e})();var Ee=r("wvvs"),_e=r("vFDu"),be=r("Tmnd"),he=r("nyb7"),Te=r("f2O7"),Ce=r("dIS+"),Se=r("JR0X"),ye=r("Z+uQ"),ge=r("YjIA"),Ae=r("xCPM"),xe=r("fHzR"),ve=r("vgAd"),Le=r("+Dvi");function Oe(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"td",8),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]().$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",e.name," ")}}const Fe=function(){return[]};function Pe(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"td",8),d["\u0275\u0275elementStart"](1,"tui-input-number",9),d["\u0275\u0275pipe"](2,"tuiCurrency"),d["\u0275\u0275pipe"](3,"tuiFieldErrorContent"),d["\u0275\u0275text"](4," Price "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]().index,t=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("postfix",d["\u0275\u0275pipeBind1"](2,3,"UGX"))("formControl",t.controls[e])("tuiHint",d["\u0275\u0275pipeBind1"](3,5,d["\u0275\u0275pureFunction0"](7,Fe)))}}function Ve(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tr",6),d["\u0275\u0275template"](1,Oe,2,1,"td",7),d["\u0275\u0275template"](2,Pe,5,8,"td",7),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("tuiCell","name"),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("tuiCell","price"))}let Re=(()=>{class e{constructor(){this.data=[{name:"Latte"},{name:"Cappuccino"}],this.latteControl=new o.FormControl(null,[o.Validators.required,o.Validators.max(6)]),this.cappuccinoControl=new o.FormControl(null,[o.Validators.required,o.Validators.max(5)]),this.controls=[this.latteControl,this.cappuccinoControl],this.columns=["name","price"]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-content-pipe-example-6"]],features:[d["\u0275\u0275ProvidersFeature"]([{provide:m.v,useValue:{required:"Enter this!",max:e=>"Too expensive, max "+e.max}}])],decls:9,vars:4,consts:[["tuiTable","",1,"table",3,"columns"],["tuiThGroup",""],["tuiTh","",3,"resizable"],["tuiTh",""],["tuiTbody","",3,"data"],["tuiTr","",4,"tuiRow","tuiRowOf"],["tuiTr",""],["tuiTd","",4,"tuiCell"],["tuiTd",""],["tuiHintDirection","right",3,"postfix","formControl","tuiHint"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"table",0),d["\u0275\u0275elementStart"](1,"thead"),d["\u0275\u0275elementStart"](2,"tr",1),d["\u0275\u0275elementStart"](3,"th",2),d["\u0275\u0275text"](4," Name "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"th",3),d["\u0275\u0275text"](6,"Price"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"tbody",4),d["\u0275\u0275template"](8,Ve,3,2,"tr",5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("columns",t.columns),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("resizable",!0),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("data",t.data),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("tuiRowOf",t.data))},directives:[Ee.a,_e.a,be.a,he.a,Te.a,Ce.a,Se.a,ye.a,ge.a,Ae.a,o.NgControlStatus,o.FormControlDirective,xe.b],pipes:[ve.a,Le.a],styles:[".table[_ngcontent-%COMP%]{width:100%;table-layout:fixed}.error[_ngcontent-%COMP%]{color:#fff}"],changeDetection:0}),e})();var Ie=r("u8jZ");const we=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],Ge=["heading",$localize`:␟878e6fe461fd9ca2712122350e24522f5de8fd18␟8087109270529539309:With custom messages for validators`],De=["heading",$localize`:␟beedd8b329a8f8773c3b0f41eefeeb5e601578a9␟7592818721454246340:with a template`],$e=["heading",$localize`:␟f168335edcd7a2503812f5cdb86f5fdf3f53881e␟296183290148574667:With adding new controls (FormArray)`],Me=["heading",$localize`:␟4dd4c0a5cc2f0b5edcf6ce49c7de250516eb991e␟2219993318238885702:async validator`],Ne=["heading",$localize`:␟cd32fd6943404603d4285581b8c6fc926a23eec0␟2645314855951305243:tuiFieldErrorContentPipe`];var ze,Be,Ue;function Xe(e,t){if(1&e&&(d["\u0275\u0275i18nStart"](0,ze),d["\u0275\u0275elementStart"](1,"p"),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275element"](3,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"p"),d["\u0275\u0275element"](5,"code"),d["\u0275\u0275element"](6,"code"),d["\u0275\u0275element"](7,"a",3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"tui-doc-example",4),d["\u0275\u0275i18nAttributes"](9,we),d["\u0275\u0275element"](10,"tui-field-error-pipe-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"tui-doc-example",5),d["\u0275\u0275i18nAttributes"](12,Ge),d["\u0275\u0275element"](13,"tui-field-error-pipe-example-2"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"tui-doc-example",6),d["\u0275\u0275i18nAttributes"](15,De),d["\u0275\u0275element"](16,"tui-field-error-pipe-example-3"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](17,"tui-doc-example",7),d["\u0275\u0275i18nAttributes"](18,$e),d["\u0275\u0275element"](19,"tui-field-error-pipe-example-4"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](20,"tui-doc-example",8),d["\u0275\u0275i18nAttributes"](21,Me),d["\u0275\u0275element"](22,"tui-field-error-pipe-example-5"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](23,"tui-doc-example",9),d["\u0275\u0275i18nAttributes"](24,Ne),d["\u0275\u0275element"](25,"tui-field-error-content-pipe-example-6"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275i18nEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](8),d["\u0275\u0275property"]("content",e.example1),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example2),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example3),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example4),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example5),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example6)}}function ke(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",10),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,Be),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,Ue),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",12),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.exampleHtml)}}ze=$localize`:␟42c69b6d2ac097886f22a489d25b3d405635b997␟362690177758388643:${"[\ufffd#1\ufffd|\ufffd#4\ufffd]"}:START_PARAGRAPH: FieldErrorPipe takes order of errors as array and transform it to ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd]"}:START_TAG_CODE:TuiValidationError${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd]"}:CLOSE_TAG_CODE: . Can be used with ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd]"}:START_TAG_CODE:TuiError${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd]"}:CLOSE_PARAGRAPH:${"[\ufffd#1\ufffd|\ufffd#4\ufffd]"}:START_PARAGRAPH: You can also use ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd]"}:START_TAG_CODE:tuiFieldErrorContentPipe${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd]"}:CLOSE_TAG_CODE: with ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd]"}:START_TAG_CODE:TuiHint${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd]"}:CLOSE_TAG_CODE: (see ${"\ufffd#7\ufffd"}:START_LINK: tuiFieldErrorContentPipe example ${"\ufffd/#7\ufffd"}:CLOSE_LINK: ). It returns a content of the TuiValidationError. ${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd]"}:CLOSE_PARAGRAPH:${"\ufffd#8\ufffd"}:START_TAG_TUI_DOC_EXAMPLE:${"\ufffd#10\ufffd"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_1:${"\ufffd/#10\ufffd"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_1:${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#17\ufffd|\ufffd/#20\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#11\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\ufffd#13\ufffd"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_2:${"\ufffd/#13\ufffd"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_2:${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#17\ufffd|\ufffd/#20\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#14\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_2:${"\ufffd#16\ufffd"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_3:${"\ufffd/#16\ufffd"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_3:${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#17\ufffd|\ufffd/#20\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#17\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_3:${"\ufffd#19\ufffd"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_4:${"\ufffd/#19\ufffd"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_4:${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#17\ufffd|\ufffd/#20\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#20\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_4:${"\ufffd#22\ufffd"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_5:${"\ufffd/#22\ufffd"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_5:${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#17\ufffd|\ufffd/#20\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#23\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_5:${"\ufffd#25\ufffd"}:START_TAG_TUI_FIELD_ERROR_CONTENT_PIPE_EXAMPLE_6:${"\ufffd/#25\ufffd"}:CLOSE_TAG_TUI_FIELD_ERROR_CONTENT_PIPE_EXAMPLE_6:${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#17\ufffd|\ufffd/#20\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`,ze=d["\u0275\u0275i18nPostprocess"](ze),Be=$localize`:␟121f4dac7c3383d54e07bb2845ac74f2ade59411␟3384755420899190664: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiFieldErrorPipeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,Ue=$localize`:␟0946c7e6e1334eb04ea506cdd9864968aecc69cb␟412868639087182729:Use pipe in template:`;let qe=(()=>{class e{constructor(){this.exampleModule=r.e(1675).then(r.bind(null,"u6is")),this.exampleHtml=r.e(1676).then(r.bind(null,"vGCg")),this.example1={TypeScript:r.e(1661).then(r.bind(null,"EIm0")),HTML:r.e(1660).then(r.bind(null,"rP++"))},this.example2={TypeScript:r.e(1663).then(r.bind(null,"jo3U")),HTML:r.e(1662).then(r.bind(null,"NY1w"))},this.example3={TypeScript:r.e(1665).then(r.bind(null,"87ds")),HTML:r.e(1664).then(r.bind(null,"NYrW"))},this.example4={TypeScript:r.e(1668).then(r.bind(null,"7rv3")),HTML:r.e(1666).then(r.bind(null,"ignV")),LESS:r.e(1667).then(r.bind(null,"Ko+z"))},this.example5={TypeScript:r.e(1671).then(r.bind(null,"ao1z")),HTML:r.e(1669).then(r.bind(null,"u82q")),LESS:r.e(1670).then(r.bind(null,"IrvF"))},this.example6={TypeScript:r.e(1674).then(r.bind(null,"aZ0m")),HTML:r.e(1672).then(r.bind(null,"ir+3")),LESS:r.e(1673).then(r.bind(null,"rDDc"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-field-error-pipe"]],decls:3,vars:0,consts:[["header","FieldError","package","KIT","type","pipes"],["pageTab",""],["pageTab","Setup"],["tuiLink","","routerLink",".","fragment","content"],["id","base",3,"content",6,"heading"],["id","customMessages",3,"content",6,"heading"],["id","patterns",3,"content",6,"heading"],["id","formArray",3,"content",6,"heading"],["id","async",3,"content",6,"heading"],["id","content",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,Xe,26,6,"ng-template",1),d["\u0275\u0275template"](2,ke,10,2,"ng-template",2),d["\u0275\u0275elementEnd"]())},directives:[f.a,E.a,_.a,a.e,b.a,R,X,te,pe,fe,Re,Ie.a],encapsulation:2,changeDetection:0}),e})(),je=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.c,o.ReactiveFormsModule,l.l,p.Yb,p.nb,s.a,p.xb,p.ub,m.cb,p.ab,m.ib,m.V,p.yb,u.c,p.ub,m.fb,i.b,c.c,a.f.forChild(Object(l.s)(qe))]]}),e})()}}]);