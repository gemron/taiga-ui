(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{wMbGf:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiPreviewModule",function(){return K});var i=n("SVse"),o=n("iInd"),l=n("zIlJ"),r=n("t7KG"),a=n("0Ksk"),c=n("ErM8"),p=n("E4J5"),s=n("8Y7J"),m=n("ReYJ"),d=n("WQeZ"),u=n("rgoq"),h=n("PYg8"),w=n("8zc/"),v=n("GknF"),f=n("puOq"),g=n("udOL"),b=n("j371"),x=n("9D8B");const y=["preview"],S=["contentSample"];function E(e,t){1&e&&s["\u0275\u0275element"](0,"img",10),2&e&&s["\u0275\u0275property"]("src",t.$implicit,s["\u0275\u0275sanitizeUrl"])}function C(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-preview",4),s["\u0275\u0275listener"]("tuiSwipe",function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().onSwipe(t)}),s["\u0275\u0275elementStart"](1,"tui-preview-title"),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"tui-preview-pagination",5),s["\u0275\u0275listener"]("indexChange",function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().index=t}),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"button",6),s["\u0275\u0275listener"]("click",function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().delete()}),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"button",7),s["\u0275\u0275listener"]("click",function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().download()}),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"button",8),s["\u0275\u0275listener"]("click",function(){return t.$implicit.complete()}),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"div",9),s["\u0275\u0275template"](8,E,1,1,"ng-template"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("rotatable",!0),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](e.title),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("length",e.length)("index",e.index),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("content",e.previewContent)}}function k(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",11),s["\u0275\u0275elementStart"](1,"h1"),s["\u0275\u0275text"](2,"Important document"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"p"),s["\u0275\u0275text"](4,"Hello everyone! This is some important document in A4 format, although it is made using html"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"p"),s["\u0275\u0275text"](6," This shows that the component preview can work with absolutely any content: this way you can show any template, image, pdf or even iframe with your favorite site. We will put this content in the center of the portal and provide the user with control over it, and we will provide you with convenient levers to change it and process actions. "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](7,"img",12),s["\u0275\u0275elementEnd"]())}let I=(()=>{class e{constructor(e,t){this.previewService=e,this.alertService=t,this.index=0,this.length=2}get title(){return 0===this.index?"Transaction cert.jpg":"My face.jpg"}get previewContent(){return 0===this.index&&this.contentSample?this.contentSample:"http://marsibarsi.me/images/1x1small.jpg"}show(){this.previewService.open(this.preview||"").subscribe({complete:()=>console.info("complete")})}download(){this.alertService.open("Downloading...").subscribe()}delete(){this.alertService.open("Deleting...").subscribe()}onSwipe(e){"left"===e.direction&&(this.index=Object(a.bd)(this.index+1,0,this.length-1)),"right"===e.direction&&(this.index=Object(a.bd)(this.index-1,0,this.length-1))}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](r.a),s["\u0275\u0275directiveInject"](c.Y))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-preview-example-1"]],viewQuery:function(e,t){if(1&e&&(s["\u0275\u0275viewQuery"](y,1),s["\u0275\u0275viewQuery"](S,1)),2&e){let e;s["\u0275\u0275queryRefresh"](e=s["\u0275\u0275loadQuery"]())&&(t.preview=e.first),s["\u0275\u0275queryRefresh"](e=s["\u0275\u0275loadQuery"]())&&(t.contentSample=e.first)}},decls:8,vars:0,consts:[[1,"tui-space_bottom-2"],["tuiButton","","size","m","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],["contentSample",""],[3,"rotatable","tuiSwipe"],[3,"length","index","indexChange"],["tuiIconButton","","tuiPreviewAction","","icon","tuiIconTrash","title","Delete",3,"click"],["tuiIconButton","","tuiPreviewAction","","icon","tuiIconDownload","title","Download",3,"click"],["tuiPreviewAction","","tuiIconButton","","icon","tuiIconCloseLarge","title","Close",3,"click"],["polymorpheus-outlet","",3,"content"],["alt","",3,"src"],[1,"content"],["src","https://github.com/tinkoff/ng-polymorpheus/raw/master/projects/demo/assets/logo.svg",1,"polymorpheus"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275text"](1,"With all features"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"button",1),s["\u0275\u0275listener"]("click",function(){return t.show()}),s["\u0275\u0275text"](3," Show preview\n"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](4,C,9,5,"ng-template",null,2,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275template"](6,k,8,0,"ng-template",null,3,s["\u0275\u0275templateRefExtractor"]))},directives:[w.a,v.a,f.a,g.a,b.a,x.a,p.d],styles:[".content[_ngcontent-%COMP%]{font:var(--tui-font-text-xl);background-color:var(--tui-base-01);width:50rem;height:68.75rem;padding:3.75rem;box-sizing:border-box;border-radius:.75rem}.polymorpheus[_ngcontent-%COMP%]{padding:2.5rem 10.375rem}"],changeDetection:0}),e})();const $=["preview"];function P(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-preview",2),s["\u0275\u0275element"](1,"iframe",3),s["\u0275\u0275elementStart"](2,"button",4),s["\u0275\u0275listener"]("click",function(){return t.$implicit.complete()}),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&s["\u0275\u0275property"]("rotatable",!1)("zoomable",!1)}let j=(()=>{class e{constructor(e){this.previewDialogService=e}show(){this.previewDialogService.open(this.preview||"").subscribe()}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](r.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-preview-example-2"]],viewQuery:function(e,t){if(1&e&&s["\u0275\u0275viewQuery"]($,1),2&e){let e;s["\u0275\u0275queryRefresh"](e=s["\u0275\u0275loadQuery"]())&&(t.preview=e.first)}},decls:4,vars:0,consts:[["tuiButton","","size","m","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],[3,"rotatable","zoomable"],["src","https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1","frameborder","0","allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",1,"content"],["tuiIconButton","","tuiPreviewAction","","icon","tuiIconCloseLarge","title","Close",3,"click"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"button",0),s["\u0275\u0275listener"]("click",function(){return t.show()}),s["\u0275\u0275text"](1," Show simple preview\n"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](2,P,3,2,"ng-template",null,1,s["\u0275\u0275templateRefExtractor"]))},directives:[w.a,v.a,x.a],styles:[".content[_ngcontent-%COMP%]{width:80vw;height:80vh}"],changeDetection:0}),e})();var O=n("2Vo4"),D=n("LRne"),z=n("PqYM"),B=n("lJxs"),M=n("pLZG"),T=n("eIep"),R=n("JX91"),Q=n("CqXF"),A=n("A1rY"),L=n("YRxX");const V=["preview"];function _(e,t){1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275elementStart"](1,"div",9),s["\u0275\u0275element"](2,"tui-svg",10),s["\u0275\u0275elementStart"](3,"div"),s["\u0275\u0275text"](4,"Preview unavailable"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementContainerEnd"]())}function q(e,t){1&e&&s["\u0275\u0275element"](0,"img",11),2&e&&s["\u0275\u0275property"]("src",t.ngIf,s["\u0275\u0275sanitizeUrl"])}function Y(e,t){1&e&&s["\u0275\u0275element"](0,"tui-loader",12)}function J(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-preview",2),s["\u0275\u0275pipe"](1,"async"),s["\u0275\u0275pipe"](2,"async"),s["\u0275\u0275pipe"](3,"async"),s["\u0275\u0275elementStart"](4,"tui-preview-title"),s["\u0275\u0275text"](5),s["\u0275\u0275pipe"](6,"async"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"tui-preview-pagination",3),s["\u0275\u0275listener"]("indexChange",function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().index$$.next(t)}),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"button",4),s["\u0275\u0275listener"]("click",function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().download()}),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"button",5),s["\u0275\u0275listener"]("click",function(){return t.$implicit.complete()}),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](10,_,5,0,"ng-container",6),s["\u0275\u0275pipe"](11,"async"),s["\u0275\u0275template"](12,q,1,1,"img",7),s["\u0275\u0275pipe"](13,"async"),s["\u0275\u0275template"](14,Y,1,0,"tui-loader",8),s["\u0275\u0275pipe"](15,"async"),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("rotatable",!s["\u0275\u0275pipeBind1"](1,8,e.contentUnavailable$))("zoomable",!s["\u0275\u0275pipeBind1"](2,10,e.contentUnavailable$)&&!s["\u0275\u0275pipeBind1"](3,12,e.loading$)),s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](6,14,e.title$)),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("length",e.items.length)("index",e.index$$.value),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngIf",s["\u0275\u0275pipeBind1"](11,16,e.contentUnavailable$)),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",s["\u0275\u0275pipeBind1"](13,18,e.imageSrc$)),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",s["\u0275\u0275pipeBind1"](15,20,e.loading$))}}let U=(()=>{class e{constructor(e){this.previewDialogService=e,this.items=[{title:"some table.xlsx",hasPreview:!1},{title:"Content #2",hasPreview:!0}],this.index$$=new O.a(0),this.item$=this.index$$.pipe(Object(B.a)(e=>this.items[e]),Object(M.a)(a.jd)),this.title$=this.item$.pipe(Object(B.a)(e=>e.title)),this.contentUnavailable$=this.item$.pipe(Object(B.a)(e=>!e.hasPreview)),this.imageSrc$=this.item$.pipe(Object(T.a)(e=>e.hasPreview?this.emulateBackendRequest().pipe(Object(R.a)("")):Object(D.a)(null))),this.loading$=this.imageSrc$.pipe(Object(B.a)(e=>""===e))}show(){this.previewDialogService.open(this.preview||"").subscribe()}download(){console.info("downloading...")}emulateBackendRequest(){return Object(z.a)(1500).pipe(Object(Q.a)("https://ng-web-apis.github.io/dist/assets/images/web-api.svg"))}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](r.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-preview-example-3"]],viewQuery:function(e,t){if(1&e&&s["\u0275\u0275viewQuery"](V,1),2&e){let e;s["\u0275\u0275queryRefresh"](e=s["\u0275\u0275loadQuery"]())&&(t.preview=e.first)}},decls:4,vars:0,consts:[["tuiButton","","size","m","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],[3,"rotatable","zoomable"],[3,"length","index","indexChange"],["tuiIconButton","","tuiPreviewAction","","icon","tuiIconDownload","title","Download",3,"click"],["tuiIconButton","","tuiPreviewAction","","icon","tuiIconCloseLarge","title","Close",3,"click"],[4,"ngIf"],["width","512","height","512",3,"src",4,"ngIf"],["size","xl","class","t-loader",4,"ngIf"],[1,"t-container"],["src","tuiIconFileLarge",1,"t-icon"],["width","512","height","512",3,"src"],["size","xl",1,"t-loader"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"button",0),s["\u0275\u0275listener"]("click",function(){return t.show()}),s["\u0275\u0275text"](1," Show preview\n"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](2,J,16,22,"ng-template",null,1,s["\u0275\u0275templateRefExtractor"]))},directives:[w.a,v.a,g.a,b.a,x.a,i.p,A.a,L.a],pipes:[i.b],styles:[".content[_ngcontent-%COMP%]{background-color:#f5f1f1;width:25rem;height:37.5rem;padding:2.5rem;border-radius:.75rem}.t-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:var(--tui-text-02-night)}.t-icon[_ngcontent-%COMP%]{margin-bottom:.75rem;transform:scale(4);height:5rem}.t-loader[_ngcontent-%COMP%]{width:4rem}"],changeDetection:0}),e})();var H=n("JKY/");function W(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18n"](1,3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275text"](3,"As a document you can provide any content like images,"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"tui-notification",4),s["\u0275\u0275text"](5," The component automatically adjusts to the mobile device "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"tui-doc-example",5),s["\u0275\u0275element"](7,"tui-preview-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"tui-doc-example",6),s["\u0275\u0275element"](9,"tui-preview-example-2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"tui-doc-example",7),s["\u0275\u0275element"](11,"tui-preview-example-3"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("content",e.example1),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",e.example2),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",e.example3)}}function G(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",8),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275text"](2," Add "),s["\u0275\u0275elementStart"](3,"code"),s["\u0275\u0275text"](4,"TuiPreviewModule"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](5," to main module: "),s["\u0275\u0275element"](6,"tui-doc-code",9),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"li"),s["\u0275\u0275text"](8," Create a template with tui-preview "),s["\u0275\u0275element"](9,"tui-doc-code",10),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"li"),s["\u0275\u0275text"](11," Open the component from the "),s["\u0275\u0275elementStart"](12,"code"),s["\u0275\u0275text"](13,"TuiPreviewDialogService"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](14," as in the example "),s["\u0275\u0275element"](15,"tui-doc-code",11),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("code",e.exampleModule),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("code",e.exampleHtml),s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("code",e.exampleComponent)}}let F=(()=>{class e{constructor(){this.exampleModule=n.e(1059).then(n.bind(null,"xsKh")),this.exampleComponent=n.e(1058).then(n.bind(null,"gsAD")),this.exampleHtml=n.e(1060).then(n.bind(null,"C2Ti")),this.example1={TypeScript:n.e(1051).then(n.bind(null,"7vmH")),LESS:n.e(1050).then(n.bind(null,"DyVg")),HTML:n.e(1049).then(n.bind(null,"5nW1"))},this.example2={TypeScript:n.e(1054).then(n.bind(null,"+6AU")),LESS:n.e(1053).then(n.bind(null,"R49E")),HTML:n.e(1052).then(n.bind(null,"7iRk"))},this.example3={TypeScript:n.e(1057).then(n.bind(null,"AP1d")),LESS:n.e(1056).then(n.bind(null,"yQ0Y")),HTML:n.e(1055).then(n.bind(null,"OUED"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-preview"]],decls:3,vars:0,consts:function(){let e,t,n,i;return e=$localize`:␟241d5e97fd9620093591d9a0221c0450353983f1␟182658249076803093: Preview component allows to open modal for viewing some document and to work with it (download, zoom, rotate etc) `,t=$localize`:␟02f0674c5a9d1755c787e6879af0feb3146e4851␟921011384987579529:Full preview`,n=$localize`:␟af8d845c1070b259e6a6c86f73b63f8ed2a66aeb␟6145238317927282087:Simple mode`,i=$localize`:␟9a68584192ab89eb9c03195bc31cf2bf541d66b9␟2673400971030039835:With loading and unavailable image`,[["header","Preview","package","ADDON-PREVIEW"],["pageTab",""],["pageTab","Setup"],e,[1,"tui-space_bottom-4"],["id","default","heading",t,3,"content"],["id","simple","heading",n,3,"content"],["id","loading","heading",i,3,"content"],[1,"b-demo-steps"],["filename","app.module.ts",3,"code"],["filename","some.component.html",3,"code"],["filename","some.component.ts",3,"code"]]},template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,W,12,3,"ng-template",1),s["\u0275\u0275template"](2,G,16,3,"ng-template",2),s["\u0275\u0275elementEnd"]())},directives:[m.a,d.a,u.a,h.a,I,j,U,H.a],encapsulation:2,changeDetection:0}),e})(),K=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({imports:[[i.c,p.c,c.ab,r.b,c.Gb,l.m,c.Ub,c.zb,a.Yb,o.f.forChild(Object(l.v)(F))]]}),e})()}}]);