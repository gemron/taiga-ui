"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[15860],{15860:(B,E,t)=>{t.r(E),t.d(E,{ExampleTuiEditorModule:()=>H});var S=t(12057),r=t(23738),c=t(12021),p=t(46244),m=t(31846),s=t(37267),g=t(75695),e=t(74788),M=t(82880),f=t(98204),D=t(88331),N=t(37159),R=t(66596),x=t(79121),F=t(57068),P=t(76189),T=t(69303),y=t(20179);let h=(()=>{class o{constructor(){this.model='WYSIWYG (What you see is what you get) \u2014 Rich Text Editor for using with Angular forms.<p><font size="6">Heading</font></p><font size="4">Lorem ipsum dolor sit amet <font color="#ff78a7">consectetur adipiscing elit</font>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span style="background-color: rgb(163, 129, 255);">Ut enim </span></font><blockquote>ad minim veniam, <u>quis nostrud exercitation</u> <b>ullamco</b>, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</blockquote><p style="text-align: right;">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'}onClick(){this.model="<b>HTML FTW!</b>"}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-editor-example-1"]],decls:12,vars:3,consts:function(){let i;return i=$localize`:␟89fd372770204e6ff2d0de55746e615910809a98␟1989142630043887249: Describe a problem
`,[["tuiButton","","type","button",3,"click"],["exampleText","Describe a problem with templates",1,"editor",3,"ngModel","ngModelChange"],i,[3,"content"]]},template:function(n,a){1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275elementStart(1,"button",0),e.\u0275\u0275listener("click",function(){return a.onClick()}),e.\u0275\u0275text(2," Set value "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"tui-editor",1),e.\u0275\u0275listener("ngModelChange",function(d){return a.model=d}),e.\u0275\u0275i18n(4,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"h4"),e.\u0275\u0275text(6,"HTML:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(7,"tui-editor-socket",3),e.\u0275\u0275elementStart(8,"h4"),e.\u0275\u0275text(9,"Text:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"p"),e.\u0275\u0275text(11),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("ngModel",a.model),e.\u0275\u0275advance(4),e.\u0275\u0275property("content",a.model),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(a.model))},directives:[P.v,T.aI,r.NgControlStatus,r.NgModel,y.D],styles:[".editor[_ngcontent-%COMP%]{max-height:18.75rem}"],changeDetection:0}),o})();var I=t(31823),$=t(23618),L=t(17023),v=t(54218),A=t(76349);function V(o,i){if(1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18nStart(1,2),e.\u0275\u0275element(2,"a",3),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"tui-notification",4),e.\u0275\u0275i18n(4,5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"tui-doc-example",6),e.\u0275\u0275element(6,"tui-editor-example-1"),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("content",n.example1)}}function b(o,i){1&o&&(e.\u0275\u0275i18nStart(0,11),e.\u0275\u0275element(1,"code"),e.\u0275\u0275i18nEnd())}function G(o,i){1&o&&e.\u0275\u0275i18n(0,12)}function U(o,i){1&o&&e.\u0275\u0275i18n(0,13)}function X(o,i){if(1&o){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo"),e.\u0275\u0275elementStart(1,"tui-editor",7),e.\u0275\u0275text(2," Start typing "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"tui-doc-documentation"),e.\u0275\u0275template(4,b,2,0,"ng-template",8),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().disabled=l}),e.\u0275\u0275template(5,G,1,0,"ng-template",9),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().exampleText=l}),e.\u0275\u0275template(6,U,1,0,"ng-template",10),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().tools=l}),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(7,"inherited-documentation")}if(2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("formControl",n.control)("focusable",n.focusable)("exampleText",n.exampleText)("readOnly",n.readOnly)("tools",n.tools)("pseudoInvalid",n.pseudoInvalid)("pseudoFocus",n.pseudoFocused)("pseudoHover",n.pseudoHovered),e.\u0275\u0275advance(3),e.\u0275\u0275property("documentationPropertyValue",n.disabled),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",n.exampleText),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",n.toolsVariants)("documentationPropertyValue",n.tools)}}function z(o,i){if(1&o&&(e.\u0275\u0275elementStart(0,"ol",14),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,15),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",16),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,17),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",18),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",n.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",n.exampleHtml)}}let J=(()=>{class o extends M.b{constructor(){super(...arguments),this.exampleModule=t.e(71474).then(t.bind(t,71474)),this.exampleHtml=t.e(45370).then(t.bind(t,45370)),this.example1={TypeScript:t.e(96938).then(t.bind(t,96938)),HTML:t.e(1873).then(t.bind(t,82779)),LESS:t.e(43714).then(t.t.bind(t,43714,17))},this.control=new r.FormControl,this.toolsVariants=[m.aU,[m._2.Bold,m._2.Italic,m._2.Strikethrough,m._2.HR]],this.tools=this.toolsVariants[0]}}return o.\u0275fac=function(){let i;return function(a){return(i||(i=e.\u0275\u0275getInheritedFactory(o)))(a||o)}}(),o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["example-tui-editor"]],features:[e.\u0275\u0275ProvidersFeature([{provide:f.x,useExisting:(0,e.forwardRef)(()=>o)}]),e.\u0275\u0275InheritDefinitionFeature],decls:4,vars:0,consts:function(){let i,n,a,l,d,_,O,C;return i=$localize`:␟3f66bec530b67bd9ec24c9458b653602473dee5c␟6793261396403784865: Rich Text Editor for using with Angular forms. For safety reasons use a ${"\ufffd#2\ufffd"}:START_LINK: sanitizer ${"\ufffd/#2\ufffd"}:CLOSE_LINK: with this component. `,n=$localize`:␟e6b4e9f9fd1f4d932da45ab3092e930ff3fadf35␟2608797396215002752: This component is experimental. Use it with caution. `,a=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,l=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,d=$localize`:␟4451dd975ad87c22f3e58059c2d38ee4dce01d18␟8752995704195016078: Example text shown on empty focused input `,_=$localize`:␟0cea9742234b055b1bce51470d8f030dd089acde␟2877889858952730048: Allowed edit tools `,O=$localize`:␟03a323cd3ce898d115bcdb8364920447fb35afb8␟1340683940823692236: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiEditorModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,C=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","Editor","package","ADDON-EDITOR","type","components"],["pageTab",""],i,["tuiLink","","routerLink","/icon-set","fragment","sanitizer"],["status","warning",1,"tui-space_top-4"],n,["id","basic","heading",a,3,"content"],[3,"formControl","focusable","exampleText","readOnly","tools","pseudoInvalid","pseudoFocus","pseudoHover"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","exampleText","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tools","documentationPropertyMode","input","documentationPropertyType","ReadonlyArray<TuiEditorTool>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],l,d,_,[1,"b-demo-steps"],O,["filename","myComponent.module.ts",3,"code"],C,["filename","myComponent.template.html",3,"code"]]},template:function(n,a){1&n&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,V,7,1,"ng-template",1),e.\u0275\u0275template(2,X,8,12,"ng-template",1),e.\u0275\u0275template(3,z,10,2,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[D.q,N.n,R.V,c.yS,x.L,F.f,h,I.F,T.aI,r.NgControlStatus,r.FormControlDirective,$.z,L.B,v.w,A.c],encapsulation:2,changeDetection:0}),o})(),H=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[[S.ez,r.FormsModule,r.ReactiveFormsModule,m.T_,m.GK,s.HiG,s.fNO,g.f,p.fV,s.jzK,c.Bz.forChild((0,p.Ve)(J))]]}),o})()}}]);