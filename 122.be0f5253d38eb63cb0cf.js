(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{PzDh:function(e,t,n){"use strict";n.r(t),n.d(t,"DialogsModule",function(){return x});var r=n("SVse"),o=n("iInd"),a=n("zIlJ"),l=n("ErM8"),i=n("QKt8"),s=n("8Y7J"),c=n("ReYJ"),p=n("PYg8"),d=n("eIep"),u=n("sHTm"),m=n("8zc/"),f=n("pW6V");function h(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",4),s["\u0275\u0275element"](1,"tui-avatar",5),s["\u0275\u0275text"](2," \xabChoose wisely\xbb "),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("rounded",!0))}function g(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",4),s["\u0275\u0275element"](1,"tui-avatar",6),s["\u0275\u0275text"](2," \xabYou chose poorly\xbb "),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("rounded",!0))}function b(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",4),s["\u0275\u0275text"](1," \xabYou have chosen wisely\xbb "),s["\u0275\u0275element"](2,"tui-avatar",7),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("rounded",!0))}let v=(()=>{class e{constructor(e,t){this.alertService=e,this.promptService=t}onClick(e,t,n){this.promptService.open(e,{heading:"Taiga UI is the best",buttons:["Absolutely!","No way!"]}).pipe(Object(d.a)(e=>e?this.alertService.open(n,{status:"success"}):this.alertService.open(t,{status:"error"}))).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](l.Y),s["\u0275\u0275directiveInject"](u.b))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-dialogs-example-1"]],decls:8,vars:0,consts:[["tuiButton","",3,"click"],["choose",""],["poorly",""],["wisely",""],[1,"wrapper"],["avatarUrl","assets/images/choose.png","size","l",1,"tui-space_right-2",3,"rounded"],["avatarUrl","assets/images/poorly.png",1,"tui-space_right-2",3,"rounded"],["avatarUrl","assets/images/wisely.png",1,"tui-space_left-1",3,"rounded"]],template:function(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"button",0),s["\u0275\u0275listener"]("click",function(){s["\u0275\u0275restoreView"](e);const n=s["\u0275\u0275reference"](3),r=s["\u0275\u0275reference"](5),o=s["\u0275\u0275reference"](7);return t.onClick(n,r,o)}),s["\u0275\u0275text"](1," Show prompt\n"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](2,h,3,1,"ng-template",null,1,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275template"](4,g,3,1,"ng-template",null,2,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275template"](6,b,3,1,"ng-template",null,3,s["\u0275\u0275templateRefExtractor"])}},directives:[m.a,f.a],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0}),e})(),y=(()=>{class e{constructor(){this.example1={TypeScript:n.e(1412).then(n.bind(null,"+NdU")),HTML:n.e(1410).then(n.bind(null,"HeC6")),LESS:n.e(1411).then(n.bind(null,"TqKl")),"prompt/prompt.service.ts":n.e(1416).then(n.bind(null,"xhav")),"prompt/prompt-options.ts":n.e(1413).then(n.bind(null,"1px+")),"prompt/prompt.component.ts":n.e(1414).then(n.bind(null,"jwTe")),"prompt/prompt.template.html":n.e(1418).then(n.bind(null,"auX9")),"prompt/prompt.style.less":n.e(1417).then(n.bind(null,"SdA4")),"prompt/prompt.module.ts":n.e(1415).then(n.bind(null,"QysH"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["dialogs"]],decls:5,vars:1,consts:function(){let e,t,n;return e=$localize`:␟9d6e1408c0a40d04f5eeb6f5d16b8706aded4261␟8564515230059500750:Dialogs`,t=$localize`:␟b3386f18bd4651b9452168426edf7f122d7f1fc1␟4814027570249937937: You can easily create your custom dialogs by extending our abstract class and providing your own component as a dialog. `,n=$localize`:␟bd9aa8d13320476087ef2b67437c8078fbb05a07␟2620483019814878192:Custom dialog`,[["header",e],t,["id","custom-dialog","heading",n,3,"content"]]},template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275elementStart"](1,"p"),s["\u0275\u0275i18n"](2,1),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"tui-doc-example",2),s["\u0275\u0275element"](4,"tui-dialogs-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",t.example1))},directives:[c.a,p.a,v],encapsulation:2,changeDetection:0}),e})();var w=n("E4J5");let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({providers:[u.a],imports:[[l.ab,w.c,r.c]]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({imports:[[r.c,S,l.ab,i.z,a.m,o.f.forChild(Object(a.t)(y))]]}),e})()}}]);