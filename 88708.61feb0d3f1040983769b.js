"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[88708],{88708:(se,_,o)=>{o.r(_),o.d(_,{ExampleTuiFilterModule:()=>me});var u=o(12057),i=o(23738),L=o(12021),F=o(46244),E=o(37267),C=o(38780),x=o(89570),g=o(82605),e=o(74788),$=o(88331),v=o(37159),b=o(57068),p=o(16166);let A=(()=>{class n{constructor(){this.form=new i.FormGroup({filters:new i.FormControl(["Food"])}),this.items=["News","Food","Clothes","Popular","Goods","Furniture","Tech","Building materials"],this.disabledItemHandler=t=>t.length<7}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-filter-example-1"]],decls:6,vars:6,consts:[[3,"formGroup"],["formControlName","filters","size","s",3,"disabledItemHandler","items"]],template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275element(1,"tui-filter",1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"div"),e.\u0275\u0275elementStart(3,"pre"),e.\u0275\u0275text(4),e.\u0275\u0275pipe(5,"json"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("formGroup",l.form),e.\u0275\u0275advance(1),e.\u0275\u0275property("disabledItemHandler",l.disabledItemHandler)("items",l.items),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1("Form value: ",e.\u0275\u0275pipeBind1(5,4,l.form.value),""))},directives:[i.\u0275NgNoValidate,i.NgControlStatusGroup,i.FormGroupDirective,p.x,i.NgControlStatus,i.FormControlName],pipes:[u.Ts],styles:["[_nghost-%COMP%]{max-width:34.375rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5);margin:0 0 .75rem}.filters[_ngcontent-%COMP%]{display:inline}.tag[_ngcontent-%COMP%]{margin:0 .25rem .25rem 0}"],changeDetection:0}),n})();function G(n,a){1&n&&e.\u0275\u0275text(0),2&n&&e.\u0275\u0275textInterpolate1(" ",a.$implicit.title,"\n")}const V={title:"Done",operations:[{amount:100},{amount:200}]};let H=(()=>{class n{constructor(){this.form=new i.FormGroup({filters:new i.FormControl([{title:"Drafts"}])}),this.items=[V,{title:"Drafts",operations:[{amount:100},{amount:200},{amount:100},{amount:100}]},{title:"For sign",operations:[]},{title:"Queue",operations:[{amount:100},{amount:200},{amount:100},{amount:200},{amount:100},{amount:200}]}],this.identityMatcher=(t,l)=>t.title===l.title,this.badgeHandler=t=>t.operations.length}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-filter-example-2"]],decls:8,vars:8,consts:[[3,"formGroup"],["formControlName","filters",3,"identityMatcher","content","badgeHandler","items"],["content",""]],template:function(t,l){if(1&t&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275element(1,"tui-filter",1),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(2,G,1,1,"ng-template",null,2,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementStart(4,"div"),e.\u0275\u0275elementStart(5,"pre"),e.\u0275\u0275text(6),e.\u0275\u0275pipe(7,"json"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const r=e.\u0275\u0275reference(3);e.\u0275\u0275property("formGroup",l.form),e.\u0275\u0275advance(1),e.\u0275\u0275property("identityMatcher",l.identityMatcher)("content",r)("badgeHandler",l.badgeHandler)("items",l.items),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate1("Form value: ",e.\u0275\u0275pipeBind1(7,6,l.form.value),"")}},directives:[i.\u0275NgNoValidate,i.NgControlStatusGroup,i.FormGroupDirective,p.x,i.NgControlStatus,i.FormControlName],pipes:[u.Ts],styles:["[_nghost-%COMP%]{max-width:34.375rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5);margin:0 0 .75rem}.filters[_ngcontent-%COMP%]{display:inline}.tag[_ngcontent-%COMP%]{margin:0 .25rem .25rem 0}"],changeDetection:0}),n})();var U=o(34880);function z(n,a){if(1&n&&(e.\u0275\u0275text(0),e.\u0275\u0275element(1,"tui-svg",3)),2&n){const t=a.$implicit,l=e.\u0275\u0275nextContext();e.\u0275\u0275textInterpolate1(" ",t," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("src",l.getItemIcon(t))}}const J={Calendar:"tuiIconCalendarLarge",Favorite:"tuiIconStarLarge",Messages:"tuiIconCommentLarge",FAQ:"tuiIconHelpCircleLarge",Settings:"tuiIconSettingsLarge"};let X=(()=>{class n{constructor(){this.items=["Calendar","Favorite","Messages","FAQ","Settings"],this.form=new i.FormGroup({filters:new i.FormControl([])})}getItemIcon(t){return J[t]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["tui-filter-example-3"]],decls:8,vars:6,consts:[[3,"formGroup"],["formControlName","filters",3,"content","items"],["content",""],[1,"tui-space_left-2",3,"src"]],template:function(t,l){if(1&t&&(e.\u0275\u0275elementStart(0,"form",0),e.\u0275\u0275element(1,"tui-filter",1),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(2,z,2,2,"ng-template",null,2,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementStart(4,"div"),e.\u0275\u0275elementStart(5,"pre"),e.\u0275\u0275text(6),e.\u0275\u0275pipe(7,"json"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const r=e.\u0275\u0275reference(3);e.\u0275\u0275property("formGroup",l.form),e.\u0275\u0275advance(1),e.\u0275\u0275property("content",r)("items",l.items),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate1("Form value: ",e.\u0275\u0275pipeBind1(7,4,l.form.value),"")}},directives:[i.\u0275NgNoValidate,i.NgControlStatusGroup,i.FormGroupDirective,p.x,i.NgControlStatus,i.FormControlName,U.P],pipes:[u.Ts],styles:["[_nghost-%COMP%]{max-width:34.375rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5);margin:0 0 .75rem}.filters[_ngcontent-%COMP%]{display:inline}.tag[_ngcontent-%COMP%]{margin:0 .25rem .25rem 0}"],changeDetection:0}),n})();var S=o(64762),B=o(26215),f=o(88002),j=o(76189),c=(()=>{return(n=c||(c={})).IT="IT",n.HR="HR",n.HeadOffice="Heads",n.Delivery="Delivery",c;var n})();class d{constructor(){this.items=Object.values(c),this.filters$=new B.X([])}get model$(){return this.filters$.pipe((0,f.U)(a=>a.length===this.items.length?[]:a))}get buttonAppearance$(){return this.filters$.pipe((0,f.U)(a=>a.length===this.items.length?"whiteblock-active":"whiteblock"))}onModelChange(a){this.filters$.next(a)}toggleAll(){this.filters$.next(this.items.length===this.filters$.value.length?[]:[...this.items])}}d.\u0275fac=function(a){return new(a||d)},d.\u0275cmp=e.\u0275\u0275defineComponent({type:d,selectors:[["tui-filter-example-4"]],decls:8,vars:7,consts:[[1,"tui-space_bottom-4"],[1,"filters-with-all"],["tuiButton","","type","button","size","m",1,"tui-space_right-1",3,"appearance","click"],[3,"items","ngModel","ngModelChange"]],template:function(a,t){1&a&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275text(1,"Choose a department:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"div",1),e.\u0275\u0275elementStart(3,"button",2),e.\u0275\u0275listener("click",function(){return t.toggleAll()}),e.\u0275\u0275pipe(4,"async"),e.\u0275\u0275text(5," All "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"tui-filter",3),e.\u0275\u0275listener("ngModelChange",function(r){return t.onModelChange(r)}),e.\u0275\u0275pipe(7,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&a&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("appearance",e.\u0275\u0275pipeBind1(4,3,t.buttonAppearance$)||""),e.\u0275\u0275advance(3),e.\u0275\u0275property("items",t.items)("ngModel",e.\u0275\u0275pipeBind1(7,5,t.model$)))},directives:[j.v,p.x,i.NgControlStatus,i.NgModel],pipes:[u.Ov],styles:[".filters-with-all[_ngcontent-%COMP%]{display:inline-flex}"],changeDetection:0}),(0,S.gn)([g.UMq],d.prototype,"model$",null),(0,S.gn)([g.UMq],d.prototype,"buttonAppearance$",null);var W=o(31823),Q=o(23618),K=o(17023),Z=o(76349);function Y(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-example",3),e.\u0275\u0275element(3,"tui-filter-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"tui-doc-example",4),e.\u0275\u0275element(5,"tui-filter-example-2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"tui-doc-example",5),e.\u0275\u0275element(7,"tui-filter-example-3"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"tui-doc-example",6),e.\u0275\u0275element(9,"tui-filter-example-4"),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example2),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example3),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example4)}}function w(n,a){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-filter",15),e.\u0275\u0275listener("toggledItem",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext(2).onToggledItemChange(r)}),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("formControl",t.control)("badgeHandler",t.badgeHandler)("disabledItemHandler",t.disabledItemHandler)("items",t.items)("size",t.size)}}function k(n,a){1&n&&(e.\u0275\u0275i18nStart(0,16),e.\u0275\u0275element(1,"code"),e.\u0275\u0275i18nEnd())}function q(n,a){1&n&&e.\u0275\u0275i18n(0,17)}function ee(n,a){1&n&&(e.\u0275\u0275i18nStart(0,18),e.\u0275\u0275element(1,"div"),e.\u0275\u0275element(2,"strong"),e.\u0275\u0275i18nEnd())}function te(n,a){1&n&&(e.\u0275\u0275i18nStart(0,19),e.\u0275\u0275element(1,"code"),e.\u0275\u0275element(2,"strong"),e.\u0275\u0275i18nEnd())}function ne(n,a){1&n&&(e.\u0275\u0275i18nStart(0,20),e.\u0275\u0275element(1,"code"),e.\u0275\u0275i18nEnd())}function oe(n,a){1&n&&e.\u0275\u0275i18n(0,21)}function ae(n,a){1&n&&e.\u0275\u0275i18n(0,22)}function le(n,a){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo",7),e.\u0275\u0275template(1,w,1,5,"ng-template"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-doc-documentation"),e.\u0275\u0275template(3,k,2,0,"ng-template",8),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().badgeHandler=r}),e.\u0275\u0275template(4,q,1,0,"ng-template",9),e.\u0275\u0275template(5,ee,3,0,"ng-template",10),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().disabledItemHandler=r}),e.\u0275\u0275template(6,te,3,0,"ng-template",11),e.\u0275\u0275template(7,ne,2,0,"ng-template",12),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().items=r}),e.\u0275\u0275template(8,oe,1,0,"ng-template",13),e.\u0275\u0275listener("documentationPropertyValueChange",function(r){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().size=r}),e.\u0275\u0275template(9,ae,1,0,"ng-template",14),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("control",t.control),e.\u0275\u0275advance(3),e.\u0275\u0275property("documentationPropertyValues",t.badgeHandlerVariants)("documentationPropertyValue",t.badgeHandler),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValues",t.disabledItemHandlerVariants)("documentationPropertyValue",t.disabledItemHandler),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValues",t.itemsVariants)("documentationPropertyValue",t.items),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.sizeVariants)("documentationPropertyValue",t.size)}}function ie(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"ol",23),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,24),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",25),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,26),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",27),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",t.exampleHtml)}}class T{constructor(a,t){this.text=a,this.badgeValue=t}toString(){return this.text}valueOf(){return this.badgeValue?this.badgeValue:null}}let re=(()=>{class n{constructor(t){this.alertService=t,this.exampleModule=o.e(56726).then(o.t.bind(o,56726,17)),this.exampleHtml=o.e(82089).then(o.t.bind(o,82089,17)),this.example1={TypeScript:o.e(46528).then(o.t.bind(o,46528,17)),HTML:o.e(87577).then(o.t.bind(o,87577,17))},this.example2={TypeScript:o.e(96022).then(o.t.bind(o,96022,17)),HTML:o.e(70685).then(o.t.bind(o,70685,17))},this.example3={TypeScript:o.e(81715).then(o.t.bind(o,81715,17)),HTML:o.e(2447).then(o.t.bind(o,2447,17))},this.example4={TypeScript:o.e(24946).then(o.t.bind(o,24946,17)),HTML:o.e(29475).then(o.t.bind(o,29475,17)),LESS:o.e(2067).then(o.t.bind(o,2067,17))},this.initialItems=["Alex Inkin","Roman Sedov"],this.itemsVariants=[["Alex Inkin","Roman Sedov"],[new T("Focused Zone",10),new T("Dropdown",100),new T("Menu Items",30),new T("Accordion")]],this.badgeHandlerVariants=[l=>Number(l),l=>String(l).length],this.badgeHandler=this.badgeHandlerVariants[0],this.disabledItemHandlerVariants=[g.IyD,l=>"Roman Sedov"===l,l=>(l.valueOf()||0)>=30],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.items=this.itemsVariants[0],this.control=new i.FormControl(this.initialItems),this.sizeVariants=["s","m","l"],this.size=this.sizeVariants[1]}onToggledItemChange(t){this.alertService.open(String(t)).subscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(E.J9F))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["example-filters"]],decls:4,vars:0,consts:function(){let a,t,l,r,s,M,O,N,R,h,P,y,D,I;return a=$localize`:␟9919bf787bc7c0a8e71a9e457491487af5a0a81c␟6973195341614832335: Components shows separated items that can be used to filter content on the page. There are also an option with badges. `,t=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,l=$localize`:␟555c6fe50ef4fae4068cfa5e1e739a164cbd1f39␟1282387873164068840:With badges`,r=$localize`:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`,s=$localize`:␟5a776544392d038f30f735cea42d6e409b3e9915␟6633556289912992409:With all button`,M=$localize`:␟cd98273289fb99517690cbce1b1d0d11f8d0d0c8␟5781311404027237254: Function that gets and item and returns a badge value. Uses ${"\ufffd#1\ufffd"}:START_TAG_CODE:valueOf${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: to get a number to show by default `,O=$localize`:␟3e711c8b413963d30140ff282746aa85e58af981␟9103376824632144211: Template for custom content in filter `,N=$localize`:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\ufffd#1\ufffd"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,R=$localize`:␟5d5550b6d81d9ae6434fc11a40439f0f0325dd5a␟8367237806229821940: Function that matches value and items, e.g. if objects are copied. Uses ${"\ufffd#1\ufffd"}:START_TAG_CODE:===${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: by default. ${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,h=$localize`:␟81389767cdcd4e6282691e8eecc5bd1cdf2a1307␟7860704213160462565: Filter items. Can be an array of strings or an array of objects. If no custom template provided, it uses ${"\ufffd#1\ufffd"}:START_TAG_CODE:toString${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: for view `,P=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,y=$localize`:␟0ff47041d2860cb4d3a45fbce5b410bdabb3aabf␟4387032186612939582: toggled event of item `,D=$localize`:␟1ab787c2eb6660c931fda91647e7159854cb6941␟8315740496990906089: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiFilterModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,I=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","Filter","package","KIT","type","components"],["pageTab",""],a,["id","base","heading",t,3,"content"],["id","badge","heading",l,3,"content"],["id","custom","heading",r,3,"content"],["id","all","heading",s,3,"content"],[3,"control"],["documentationPropertyName","badgeHandler","documentationPropertyMode","input","documentationPropertyType","TuiHandler<T>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","content","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent<any>"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<T>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","identityMatcher","documentationPropertyMode","input","documentationPropertyType","TuiIdentityMatcher"],["documentationPropertyName","items","documentationPropertyMode","input","documentationPropertyType","T[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS | TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","toggledItem","documentationPropertyMode","output","documentationPropertyType","T"],[3,"formControl","badgeHandler","disabledItemHandler","items","size","toggledItem"],M,O,N,R,h,P,y,[1,"b-demo-steps"],D,["filename","myComponent.module.ts",3,"code"],I,["filename","myComponent.template.html",3,"code"]]},template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,Y,10,4,"ng-template",1),e.\u0275\u0275template(2,le,10,9,"ng-template",1),e.\u0275\u0275template(3,ie,10,2,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[$.q,v.n,b.f,A,H,X,d,W.F,Q.z,K.B,p.x,i.NgControlStatus,i.FormControlDirective,Z.c],encapsulation:2,changeDetection:0}),n})(),me=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[x.wq,C.DRr,E.fNO,C.d38,E.EIu,u.ez,i.FormsModule,i.ReactiveFormsModule,F.fV,L.Bz.forChild((0,F.Ve)(re))]]}),n})()}}]);