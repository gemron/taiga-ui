"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[50101],{50101:(de,x,o)=>{o.r(x),o.d(x,{ExampleTuiCarouselModule:()=>pe});var g=o(12057),C=o(12021),v=o(55970),h=o(46244),y=o(82605),m=o(37267),c=o(38780),e=o(74788),S=o(88331),P=o(37159),O=o(79121),E=o(66596),M=o(57068),u=o(56272),s=o(22043),T=o(31639),p=o(82707),f=o(70329),d=o(76189);function V(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"tui-island"),e.\u0275\u0275elementStart(1,"h2",4),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"a",5),e.\u0275\u0275text(4," Wiki "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(n),e.\u0275\u0275advance(1),e.\u0275\u0275propertyInterpolate1("href","https://en.wikipedia.org/wiki/",n,"",e.\u0275\u0275sanitizeUrl)}}function F(t,a){1&t&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,V,5,2,"tui-island",3),e.\u0275\u0275elementContainerEnd())}let b=(()=>{class t{constructor(){this.index=2,this.items=["John Cleese","Eric Idle","Michael Palin","Graham Chapman","Terry Gilliam","Terry Jones"]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["tui-carousel-example-1"]],decls:3,vars:5,consts:[[3,"duration","index","indexChange"],[4,"ngFor","ngForOf"],["size","s",1,"pagination",3,"length","index","indexChange"],[4,"tuiItem"],[1,"tui-island__title"],["tuiButton","",3,"href"]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"tui-carousel",0),e.\u0275\u0275listener("indexChange",function(r){return i.index=r}),e.\u0275\u0275template(1,F,2,0,"ng-container",1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-pagination",2),e.\u0275\u0275listener("indexChange",function(r){return i.index=r}),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275property("duration",4e3)("index",i.index),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",i.items),e.\u0275\u0275advance(1),e.\u0275\u0275property("length",i.items.length)("index",i.index))},directives:[u.V,s.E,g.sg,T.r,p.w,f.h,d.v],styles:["[_nghost-%COMP%]{display:block}.pagination[_ngcontent-%COMP%]{margin:1rem auto 0}"],changeDetection:0}),t})();function D(t,a){if(1&t&&e.\u0275\u0275element(0,"img",3),2&t){const n=e.\u0275\u0275nextContext(),i=n.index,l=n.$implicit,r=e.\u0275\u0275nextContext();e.\u0275\u0275classProp("item_active",i===r.index+1),e.\u0275\u0275propertyInterpolate1("src","assets/images/",l,"",e.\u0275\u0275sanitizeUrl)}}function L(t,a){1&t&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,D,1,3,"img",2),e.\u0275\u0275elementContainerEnd())}let I=(()=>{class t{constructor(){this.index=0,this.items=["angular.svg","avatar.jpg","angular.svg","avatar.jpg","angular.svg","avatar.jpg"]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["tui-carousel-example-2"]],decls:2,vars:4,consts:[[3,"draggable","itemsCount","index","indexChange"],[4,"ngFor","ngForOf"],["alt","","draggable","false","class","item",3,"src","item_active",4,"tuiItem"],["alt","","draggable","false",1,"item",3,"src"]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"tui-carousel",0),e.\u0275\u0275listener("indexChange",function(r){return i.index=r}),e.\u0275\u0275template(1,L,2,0,"ng-container",1),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275property("draggable",!0)("itemsCount",3)("index",i.index),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",i.items))},directives:[u.V,s.E,g.sg,p.w],styles:[".item[_ngcontent-%COMP%]{transition-property:box-shadow,transform;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;max-height:100px;margin:2rem auto;border-radius:100%}.item_active[_ngcontent-%COMP%]{box-shadow:0 .5rem 1rem rgba(0,0,0,.16);transform:scale(1.2)}"],changeDetection:0}),t})();var _=o(22096),R=o(16996),N=o(23184),$=o(86187);function z(t,a){1&t&&(e.\u0275\u0275elementStart(0,"tui-island"),e.\u0275\u0275elementStart(1,"h2",7),e.\u0275\u0275text(2,"Monty Python and the Holy Grail"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p"),e.\u0275\u0275text(4," King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles. "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"div"),e.\u0275\u0275elementStart(6,"button",8),e.\u0275\u0275text(7," Buy $ "),e.\u0275\u0275element(8,"tui-money",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"button",10),e.\u0275\u0275text(10," Rent $ "),e.\u0275\u0275element(11,"tui-money",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(8),e.\u0275\u0275property("value",12.99),e.\u0275\u0275advance(3),e.\u0275\u0275property("value",4.99))}function A(t,a){1&t&&(e.\u0275\u0275elementStart(0,"tui-island"),e.\u0275\u0275element(1,"tui-loader"),e.\u0275\u0275elementEnd())}function B(t,a){1&t&&(e.\u0275\u0275elementStart(0,"tui-island",11),e.\u0275\u0275elementStart(1,"h2",7),e.\u0275\u0275text(2,"Failed to load"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p"),e.\u0275\u0275element(4,"tui-marker-icon",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd())}let U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["tui-carousel-example-3"]],decls:8,vars:0,consts:[["tuiCarouselButtons","",1,"wrapper"],["tuiIconButton","","icon","tuiIconChevronLeftLarge","title","Previous",3,"click"],[1,"carousel"],["carousel",""],[4,"tuiItem"],["class","tui-island_text-align_center",4,"tuiItem"],["tuiIconButton","","icon","tuiIconChevronRightLarge","title","Next",3,"click"],[1,"tui-island__title"],["tuiButton","","appearance","primary"],[3,"value"],["tuiButton","",1,"tui-space_left-2"],[1,"tui-island_text-align_center"],["mode","error","src","tuiIconRemoveLarge"]],template:function(n,i){if(1&n){const l=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275elementStart(1,"button",1),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(l),e.\u0275\u0275reference(3).prev()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-carousel",2,3),e.\u0275\u0275template(4,z,12,2,"tui-island",4),e.\u0275\u0275template(5,A,2,0,"tui-island",4),e.\u0275\u0275template(6,B,5,0,"tui-island",5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"button",6),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(l),e.\u0275\u0275reference(3).next()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}},directives:[_.e,d.v,u.V,s.E,p.w,f.h,R.o,N.k,$.B],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.carousel[_ngcontent-%COMP%]{width:25rem;flex-shrink:0}"],changeDetection:0}),t})();var G=o(56423),j=o(30644);function H(t,a){if(1&t&&e.\u0275\u0275element(0,"div",3),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275styleProp("background-image",n.background)}}function J(t,a){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275elementStart(1,"h2"),e.\u0275\u0275text(2,"Carousel is awesome"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p"),e.\u0275\u0275text(4,"It can show arbitrary content and it's very easy to control"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd())}function X(t,a){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275elementStart(1,"h2"),e.\u0275\u0275text(2,"Pagination"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p"),e.\u0275\u0275text(4," You can use "),e.\u0275\u0275elementStart(5,"a",12),e.\u0275\u0275text(6," Pagination "),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(7," component with size 's' together with it "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd())}function K(t,a){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275elementStart(1,"h2"),e.\u0275\u0275text(2,"Buttons"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p"),e.\u0275\u0275text(4," Use "),e.\u0275\u0275elementStart(5,"code"),e.\u0275\u0275text(6,"tuiCarouselButtons"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(7," directive to setup navigation buttons "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd())}function W(t,a){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",4),e.\u0275\u0275listener("touchstart.passive.stop",function(){return 0}),e.\u0275\u0275elementStart(1,"button",5),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().navigate(-1)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"tui-carousel",6),e.\u0275\u0275listener("indexChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().index=l}),e.\u0275\u0275template(3,J,5,0,"div",7),e.\u0275\u0275template(4,X,8,0,"div",7),e.\u0275\u0275template(5,K,8,0,"div",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"button",8),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().navigate(1)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"tui-pagination",9),e.\u0275\u0275listener("indexChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().index=l}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"div",10),e.\u0275\u0275elementStart(9,"button",11),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().open=!1}),e.\u0275\u0275text(10," Got it! "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()}if(2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("index",n.index),e.\u0275\u0275advance(5),e.\u0275\u0275property("length",3)("index",n.index)}}const Y=function(t){return{size:"s",header:t}};let Q=(()=>{class t{constructor(){this.open=!1,this.index=0}get background(){switch(this.index){case 0:return"url(https://cdn.tvc.ru/pictures/mood/bw/194/22.jpg)";case 1:return"url(https://ic.pics.livejournal.com/ruhtal/6943012/12468/12468_900.jpg)";default:return"url(https://cdn.motor1.com/images/mgl/28bxz/s1/ford-carousel.jpg)"}}onClick(){this.index=0,this.open=!0}navigate(n){this.index=(this.index+n)%3}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["tui-carousel-example-4"]],decls:5,vars:4,consts:[["tuiButton","","size","m",3,"click"],["header",""],[3,"tuiDialogOptions","tuiDialog","tuiDialogChange"],[1,"header"],["tuiCarouselButtons","",1,"wrapper",3,"touchstart.passive.stop"],["tuiIconButton","","tuiMode","onDark","icon","tuiIconChevronLeftLarge",1,"tui-space_right-4",3,"click"],[3,"index","indexChange"],[4,"tuiItem"],["tuiIconButton","","tuiMode","onDark","icon","tuiIconChevronRightLarge",1,"tui-space_left-4",3,"click"],["size","s",1,"tui-space_top-4",3,"length","index","indexChange"],[1,"tui-space_top-4"],["tuiButton","","appearance","primary",3,"click"],["tuiLink","","routerLink","/components/pagination"]],template:function(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"button",0),e.\u0275\u0275listener("click",function(){return i.onClick()}),e.\u0275\u0275text(1," Show dialog with carousel\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(2,H,1,2,"ng-template",null,1,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(4,W,11,3,"ng-template",2),e.\u0275\u0275listener("tuiDialogChange",function(r){return i.open=r})),2&n){const l=e.\u0275\u0275reference(3);e.\u0275\u0275advance(4),e.\u0275\u0275property("tuiDialogOptions",e.\u0275\u0275pureFunction1(2,Y,l))("tuiDialog",i.open)}},directives:[d.v,G.i,_.e,j.w,u.V,s.E,p.w,T.r,E.V,C.yS],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;margin:0 -5rem}tui-root._mobile[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{margin:0}tui-root._mobile[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:none}.header[_ngcontent-%COMP%]{transition-property:background;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;height:10rem;flex:1;background:var(--tui-base-01) center;background-size:cover}"],changeDetection:0}),t})();var Z=o(31823),w=o(36097),k=o(23618),q=o(17023),ee=o(76349);function te(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"tui-notification",2),e.\u0275\u0275text(1," Requires "),e.\u0275\u0275elementStart(2,"a",3),e.\u0275\u0275text(3," IntersectionObserver "),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(4," support or a "),e.\u0275\u0275elementStart(5,"a",4),e.\u0275\u0275text(6," polyfill "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(7," Carousel allows you to rotate through arbitrary items. Multiple items can be shown simultaneously. "),e.\u0275\u0275elementStart(8,"tui-doc-example",5),e.\u0275\u0275elementStart(9,"tui-carousel-example-1",6),e.\u0275\u0275listener("touchstart.passive.stop",function(){return 0}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"tui-doc-example",7),e.\u0275\u0275elementStart(11,"tui-carousel-example-2",6),e.\u0275\u0275listener("touchstart.passive.stop",function(){return 0}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"tui-doc-example",8),e.\u0275\u0275elementStart(13,"tui-carousel-example-3",6),e.\u0275\u0275listener("touchstart.passive.stop",function(){return 0}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"tui-doc-example",9),e.\u0275\u0275element(15,"tui-carousel-example-4"),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(8),e.\u0275\u0275property("content",n.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",n.example2),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",n.example3),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",n.example4)}}function ne(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275text(1),e.\u0275\u0275elementStart(2,"button",18),e.\u0275\u0275text(3," I'm focusable "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",n," ")}}function oe(t,a){1&t&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,ne,4,1,"div",16),e.\u0275\u0275elementContainerEnd())}function ae(t,a){1&t&&e.\u0275\u0275text(0," Whether or not slider can be dragged by clicking and holding ")}function ie(t,a){1&t&&e.\u0275\u0275text(0," Duration in milliseconds for each slide for automatic rotation (use 0 to disable automatic rotation) ")}function le(t,a){1&t&&e.\u0275\u0275text(0," Number of slides shown at the same time ")}function re(t,a){1&t&&e.\u0275\u0275text(0," Current index ")}function me(t,a){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tui-doc-demo"),e.\u0275\u0275elementStart(1,"tui-carousel",10),e.\u0275\u0275listener("indexChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().index=l})("touchstart.passive.stop",function(){return 0}),e.\u0275\u0275template(2,oe,2,0,"ng-container",11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"tui-doc-documentation"),e.\u0275\u0275template(4,ae,1,0,"ng-template",12),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().draggable=l}),e.\u0275\u0275template(5,ie,1,0,"ng-template",13),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().duration=l}),e.\u0275\u0275template(6,le,1,0,"ng-template",14),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().itemsCount=l}),e.\u0275\u0275template(7,re,1,0,"ng-template",15),e.\u0275\u0275listener("documentationPropertyValueChange",function(l){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().index=l}),e.\u0275\u0275elementEnd()}if(2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("draggable",n.draggable)("duration",n.duration)("itemsCount",n.itemsCount)("index",n.index),e.\u0275\u0275advance(1),e.\u0275\u0275property("tuiRepeatTimesOf",9),e.\u0275\u0275advance(2),e.\u0275\u0275property("documentationPropertyValue",n.draggable),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",n.durationVariants)("documentationPropertyValue",n.duration),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",n.itemsCount),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",n.index)}}function ue(t,a){if(1&t&&(e.\u0275\u0275elementStart(0,"ol",19),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,20),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",21),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18n(8,22),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"tui-doc-code",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",n.exampleModule),e.\u0275\u0275advance(4),e.\u0275\u0275property("code",n.exampleHtml)}}let se=(()=>{class t{constructor(){this.durationVariants=[0,3e3,1e4],this.draggable=!1,this.duration=this.durationVariants[0],this.index=0,this.itemsCount=1,this.exampleModule=o.e(16665).then(o.t.bind(o,16665,17)),this.exampleHtml=o.e(94880).then(o.t.bind(o,94880,17)),this.example1={TypeScript:o.e(70610).then(o.t.bind(o,70610,17)),HTML:o.e(90947).then(o.t.bind(o,90947,17))},this.example2={TypeScript:o.e(57929).then(o.t.bind(o,57929,17)),HTML:o.e(79783).then(o.t.bind(o,79783,17))},this.example3={TypeScript:o.e(66693).then(o.t.bind(o,66693,17)),HTML:o.e(36838).then(o.t.bind(o,36838,17))},this.example4={TypeScript:o.e(13453).then(o.t.bind(o,13453,17)),HTML:o.e(7705).then(o.t.bind(o,7705,17)),LESS:o.e(4159).then(o.t.bind(o,4159,17))}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["example-carousel"]],decls:4,vars:0,consts:function(){let a,n;return a=$localize`:␟83003332a17dbd00d33d00f27a668a2597948456␟2626084410037085748: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiCarouselModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,n=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","Carousel","package","KIT","type","components"],["pageTab",""],["status","warning",1,"tui-space_bottom-4"],["tuiLink","","href","https://caniuse.com/intersectionobserver"],["tuiLink","","href","https://github.com/w3c/IntersectionObserver/tree/main/polyfill"],["id","single","heading","Single",3,"content"],[3,"touchstart.passive.stop"],["id","multi","heading","Multiple",3,"content"],["id","custom","heading","Custom",3,"content"],["id","dialog","heading","Carousel inside dialog",3,"content"],[1,"carousel",3,"draggable","duration","itemsCount","index","indexChange","touchstart.passive.stop"],[4,"tuiRepeatTimes","tuiRepeatTimesOf"],["documentationPropertyName","draggable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","duration","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","itemsCount","documentationPropertyType","number","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","index","documentationPropertyType","number","documentationPropertyMode","input-output",3,"documentationPropertyValue","documentationPropertyValueChange"],["class","plate",4,"tuiItem"],[1,"plate"],["tuiButton","","type","button","size","s",1,"button"],[1,"b-demo-steps"],a,["filename","myComponent.module.ts",3,"code"],n,["filename","myComponent.template.html",3,"code"]]},template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,te,16,4,"ng-template",1),e.\u0275\u0275template(2,me,8,10,"ng-template",1),e.\u0275\u0275template(3,ue,10,2,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[S.q,P.n,O.L,E.V,M.f,b,I,U,Q,Z.F,u.V,s.E,w.X,k.z,q.B,p.w,d.v,ee.c],styles:[".carousel[_ngcontent-%COMP%]{margin:0 2.5rem}.plate[_ngcontent-%COMP%]{font:var(--tui-font-heading-3);display:flex;flex-direction:column;align-items:flex-start;width:100%;height:7.5rem;padding:1.75rem;box-sizing:border-box;background:var(--tui-secondary)}.button[_ngcontent-%COMP%]{margin-top:.5rem}"],changeDetection:0}),t})(),pe=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[g.ez,c.Xj,c.iwW,m.HiG,m.jzK,m.fNO,c.ydP,v.DC,m.dSp,c.zk$,m.upG,m.zw7,y.IhY,h.fV,C.Bz.forChild((0,h.Ve)(se))]]}),t})()}}]);