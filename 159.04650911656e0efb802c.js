(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{syjL:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiZoomModule",function(){return v});var o=n("SVse"),a=n("iInd"),l=n("zIlJ"),c=n("0Ksk"),i=n("8Y7J"),m=n("ReYJ"),d=n("WQeZ"),r=n("PYg8"),p=n("XNiG"),s=n("Kqap"),u=n("JX91"),f=n("lJxs"),b=n("3f8f");let h=(()=>{class e{constructor(){this.delta$=new p.a,this.scale$=this.delta$.pipe(Object(s.a)((e,t)=>Object(c.lc)(e+t,.5,3),1),Object(u.a)(1)),this.transform$=this.scale$.pipe(Object(f.a)(e=>`scale(${e})`))}onZoom({delta:e}){this.delta$.next(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-zoom-example-1"]],decls:7,vars:10,consts:[[1,"t-container",3,"tuiZoom"],[1,"t-zoomable"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275listener"]("tuiZoom",function(e){return t.onZoom(e)}),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275pipe"](2,"async"),i["\u0275\u0275elementStart"](3,"span"),i["\u0275\u0275text"](4),i["\u0275\u0275pipe"](5,"number"),i["\u0275\u0275pipe"](6,"async"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](1),i["\u0275\u0275styleProp"]("transform",i["\u0275\u0275pipeBind1"](2,3,t.transform$)),i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind2"](5,5,i["\u0275\u0275pipeBind1"](6,8,t.scale$),"1.0-3")))},directives:[b.a],pipes:[o.b,o.e],styles:[".t-container[_ngcontent-%COMP%], .t-zoomable[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.t-container[_ngcontent-%COMP%]{width:12rem;height:12rem;background-color:var(--tui-secondary)}.t-zoomable[_ngcontent-%COMP%]{width:3rem;height:3rem;background-color:var(--tui-primary);border-radius:var(--tui-radius-l)}"],changeDetection:0}),e})();var g=n("JKY/");function x(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"p"),i["\u0275\u0275i18nStart"](1,3),i["\u0275\u0275element"](2,"code"),i["\u0275\u0275i18nEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"tui-doc-example",4),i["\u0275\u0275element"](4,"tui-zoom-example-1"),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("content",e.example1)}}function y(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"ol",5),i["\u0275\u0275elementStart"](1,"li"),i["\u0275\u0275elementStart"](2,"p"),i["\u0275\u0275i18nStart"](3,6),i["\u0275\u0275element"](4,"code"),i["\u0275\u0275i18nEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](5,"tui-doc-code",7),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"li"),i["\u0275\u0275elementStart"](7,"p"),i["\u0275\u0275i18n"](8,8),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](9,"tui-doc-code",9),i["\u0275\u0275element"](10,"tui-doc-code",10),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](5),i["\u0275\u0275property"]("code",e.exampleModule),i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("code",e.exampleHtml),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("code",e.exampleComponent)}}let C=(()=>{class e{constructor(){this.exampleModule=n.e(1609).then(n.bind(null,"VjRB")),this.exampleHtml=n.e(1610).then(n.bind(null,"uJK6")),this.exampleComponent=n.e(1608).then(n.bind(null,"JTRy")),this.example1={TypeScript:n.e(1607).then(n.bind(null,"nPgq")),HTML:n.e(1606).then(n.bind(null,"ChL2"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-zoom"]],decls:3,vars:0,consts:function(){let e,t,n,o,a;return e=$localize`:␟e76cd6dbaa898f85934f363fef654b29e44d004b␟6421460271971606186:Zoom`,t=$localize`:␟e6b130c134abcffac0e7a556ee8e7d5e3b56f182␟7159822271573365477:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiZoom${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: directive emits delta between wheel events or between pinch on mobile devices. It emits coordinates of the zoom center as well. You can use it to change the scale of an element as in example below `,n=$localize`:␟1ea31081e50390f86dac9d44f30ce6d662d9b486␟8227596913155490392:Simple`,o=$localize`:␟b353d913cbd741c6c16613accf378b4da1d7201a␟2830324911231252653: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiZoomModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,a=$localize`:␟17eb6975c7e319b982144e2bd8f0ee6999e9eb2e␟3799636229807761262:Add to the template and subscribe to a change:`,[["header",e,"package","CDK","type","directives"],["pageTab",""],["pageTab","Setup"],t,["id","multiple","heading",n,3,"content"],[1,"b-demo-steps"],o,["filename","myComponent.module.ts",3,"code"],a,["filename","myComponent.template.html",3,"code"],["filename","myComponent.component.ts",3,"code"]]},template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"tui-doc-page",0),i["\u0275\u0275template"](1,x,5,1,"ng-template",1),i["\u0275\u0275template"](2,y,11,3,"ng-template",2),i["\u0275\u0275elementEnd"]())},directives:[m.a,d.a,r.a,h,g.a],encapsulation:2,changeDetection:0}),e})(),v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({imports:[[o.c,c.hc,l.m,a.f.forChild(Object(l.t)(C))]]}),e})()}}]);