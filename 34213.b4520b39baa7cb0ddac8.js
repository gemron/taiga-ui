"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[34213],{34213:(J,c,e)=>{e.r(c),e.d(c,{ExampleTuiManualHintModule:()=>G});var r=e(12057),M=e(12021),E=e(46244),u=e(37267),_=e(89570),S=e(75695),t=e(74788),C=e(93352),N=e(98204),f=e(88331),g=e(37159),H=e(57068),p=e(76189),T=e(60046),h=e(30644),A=e(66596);function I(n,a){1&n&&(t.\u0275\u0275elementStart(0,"div",2),t.\u0275\u0275text(1," Use "),t.\u0275\u0275elementStart(2,"a",3),t.\u0275\u0275text(3," Hint "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd())}let O=(()=>{class n{constructor(){this.hintShown=!1}toggleHint(){this.hintShown=!this.hintShown}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["tui-manual-hint-example-1"]],decls:4,vars:2,consts:[["tuiButton","","type","button",3,"tuiManualHint","tuiManualHintShow","click"],["template",""],["tuiMode","onDark"],["tuiLink","","routerLink","hint",1,"link"]],template:function(o,l){if(1&o&&(t.\u0275\u0275elementStart(0,"button",0),t.\u0275\u0275listener("click",function(){return l.toggleHint()}),t.\u0275\u0275text(1," Hint\n"),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(2,I,4,0,"ng-template",null,1,t.\u0275\u0275templateRefExtractor)),2&o){const i=t.\u0275\u0275reference(3);t.\u0275\u0275property("tuiManualHint",i)("tuiManualHintShow",l.hintShown)}},directives:[p.v,T.v,h.w,A.V,M.yS],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),n})();var x=e(31823),D=e(23618),y=e(17023),L=e(54218),R=e(76349);function v(n,a){if(1&n&&(t.\u0275\u0275elementStart(0,"p"),t.\u0275\u0275i18n(1,2),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(2,"tui-doc-example",3),t.\u0275\u0275element(3,"tui-manual-hint-example-1"),t.\u0275\u0275elementEnd()),2&n){const o=t.\u0275\u0275nextContext();t.\u0275\u0275advance(2),t.\u0275\u0275property("content",o.example1)}}function P(n,a){1&n&&t.\u0275\u0275i18n(0,7)}function U(n,a){1&n&&t.\u0275\u0275i18n(0,8)}function $(n,a){if(1&n){const o=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"tui-doc-demo"),t.\u0275\u0275elementStart(1,"button",4),t.\u0275\u0275listener("click",function(){return t.\u0275\u0275restoreView(o),t.\u0275\u0275nextContext().sayHi()}),t.\u0275\u0275text(2," A strange button "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"tui-doc-documentation"),t.\u0275\u0275template(4,P,1,0,"ng-template",5),t.\u0275\u0275template(5,U,1,0,"ng-template",6),t.\u0275\u0275listener("documentationPropertyValueChange",function(i){return t.\u0275\u0275restoreView(o),t.\u0275\u0275nextContext().show=i}),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(6,"inherited-documentation")}if(2&n){const o=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("tuiManualHintShow",o.show)("tuiHintMode",o.mode)("tuiHintDirection",o.direction),t.\u0275\u0275advance(4),t.\u0275\u0275property("documentationPropertyValue",o.show)}}function F(n,a){if(1&n&&(t.\u0275\u0275elementStart(0,"ol",9),t.\u0275\u0275elementStart(1,"li"),t.\u0275\u0275elementStart(2,"p"),t.\u0275\u0275i18nStart(3,10),t.\u0275\u0275element(4,"code"),t.\u0275\u0275i18nEnd(),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(5,"tui-doc-code",11),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"li"),t.\u0275\u0275elementStart(7,"p"),t.\u0275\u0275i18n(8,12),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(9,"tui-doc-code",13),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementEnd()),2&n){const o=t.\u0275\u0275nextContext();t.\u0275\u0275advance(5),t.\u0275\u0275property("code",o.exampleModule),t.\u0275\u0275advance(4),t.\u0275\u0275property("code",o.exampleHtml)}}let V=(()=>{class n extends C.l{constructor(){super(...arguments),this.exampleModule=e.e(47464).then(e.t.bind(e,47464,17)),this.exampleHtml=e.e(61596).then(e.t.bind(e,61596,17)),this.example1={TypeScript:e.e(59556).then(e.t.bind(e,59556,17)),HTML:e.e(27613).then(e.t.bind(e,27613,17))},this.show=!1}sayHi(){console.info("Hi all!")}}return n.\u0275fac=function(){let a;return function(l){return(a||(a=t.\u0275\u0275getInheritedFactory(n)))(l||n)}}(),n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["example-manual-hint"]],features:[t.\u0275\u0275ProvidersFeature([{provide:N.x,useExisting:(0,t.forwardRef)(()=>n)}]),t.\u0275\u0275InheritDefinitionFeature],decls:4,vars:0,consts:function(){let a,o,l,i,d,s;return a=$localize`:␟c8c45ebec06566ef7a3a59ef2384321feec36e37␟3855161587228143615:Directive to show a hint manually`,o=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,l=$localize`:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `,i=$localize`:␟402b0978874aa99343a9ae1d9c7fc1a460f92eff␟2409354495697805229: Show/hide hint `,d=$localize`:␟bbedda9946ab6647dc22ada873a20f8c4e248f29␟6859512142526334484: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiManualHintModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,s=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","ManualHint","package","CORE","type","directives"],["pageTab",""],a,["id","base","heading",o,3,"content"],["tuiButton","","type","button","tuiManualHint","It says 'Hi all!' into console",3,"tuiManualHintShow","tuiHintMode","tuiHintDirection","click"],["documentationPropertyName","tuiManualHint","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","tuiManualHintShow","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],l,i,[1,"b-demo-steps"],d,["filename","myComponent.module.ts",3,"code"],s,["filename","myComponent.template.html",3,"code"]]},template:function(o,l){1&o&&(t.\u0275\u0275elementStart(0,"tui-doc-page",0),t.\u0275\u0275template(1,v,4,1,"ng-template",1),t.\u0275\u0275template(2,$,7,4,"ng-template",1),t.\u0275\u0275template(3,F,10,2,"ng-template",1),t.\u0275\u0275elementEnd())},directives:[f.q,g.n,H.f,O,x.F,p.v,T.v,D.z,y.B,L.w,R.c],encapsulation:2,changeDetection:0}),n})(),G=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[[u.fNO,u.THu,u.jzK,u.zw7,_.wq,r.ez,S.f,E.fV,M.Bz.forChild((0,E.Ve)(V))]]}),n})()}}]);