(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{"5MFV":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiTabsModule",(function(){return we}));var i=n("An66"),o=n("3kIJ"),a=n("1VvW"),r=n("SVIu"),c=n("hLNI"),l=n("Qq0t"),s=n("dvRg"),m=n("kZht"),u=n("OZlg"),d=n("e0eB"),p=n("aPft"),x=n("iyc4"),g=n("QK/x"),f=n("D1a4"),v=n("ONKv"),C=n("okGw"),I=n("x8/p");let b=(()=>{class e{constructor(e){this.alertService=e,this.activeItemIndex=0}onClick(e){this.alertService.open(e).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](l.Y))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-tabs-example-3"]],decls:12,vars:3,consts:[[3,"activeItemIndex","activeItemIndexChange"],["tuiTab","",3,"click"],["src","tuiIconCard",1,"tui-space_right-2"],["tuiTab","","disabled","",3,"click"],["src","tuiIconCall",1,"tui-space_right-2"],["src","tuiIconSettings",1,"tui-space_right-2"],[1,"tui-space_top-4",3,"max","ngModel","ngModelChange"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-tabs",0),m["\u0275\u0275listener"]("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),m["\u0275\u0275elementStart"](1,"button",1),m["\u0275\u0275listener"]("click",(function(){return t.onClick("Maps")})),m["\u0275\u0275element"](2,"tui-svg",2),m["\u0275\u0275text"](3," Maps "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"button",3),m["\u0275\u0275listener"]("click",(function(){return t.onClick("Calls")})),m["\u0275\u0275element"](5,"tui-svg",4),m["\u0275\u0275text"](6," Calls "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"button",1),m["\u0275\u0275listener"]("click",(function(){return t.onClick("Settings")})),m["\u0275\u0275element"](8,"tui-svg",5),m["\u0275\u0275text"](9," Settings "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"tui-input-count",6),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.activeItemIndex=e})),m["\u0275\u0275text"](11," activeItemIndex\n"),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("activeItemIndex",t.activeItemIndex),m["\u0275\u0275advance"](10),m["\u0275\u0275property"]("max",2)("ngModel",t.activeItemIndex))},directives:[g.a,f.a,v.a,C.a,I.a,o.NgControlStatus,o.NgModel],encapsulation:2,changeDetection:0}),e})();var h=n("tnwn"),S=n("1lyh");function y(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",4),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().onClick("Maps")})),m["\u0275\u0275element"](1,"tui-svg",5),m["\u0275\u0275text"](2," Maps "),m["\u0275\u0275elementEnd"]()}}function T(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",6),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().onClick("Calls")})),m["\u0275\u0275element"](1,"tui-svg",7),m["\u0275\u0275text"](2," Calls "),m["\u0275\u0275elementEnd"]()}}function E(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",4),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().onClick("Settings")})),m["\u0275\u0275element"](1,"tui-svg",8),m["\u0275\u0275text"](2," Settings "),m["\u0275\u0275elementEnd"]()}}function M(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",4),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().onClick("Favorite")})),m["\u0275\u0275element"](1,"tui-svg",9),m["\u0275\u0275text"](2," Favorite "),m["\u0275\u0275elementEnd"]()}}function _(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",4),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().onClick("Trash")})),m["\u0275\u0275element"](1,"tui-svg",10),m["\u0275\u0275text"](2," Trash "),m["\u0275\u0275elementEnd"]()}}let w=(()=>{class e{constructor(e){this.alertService=e,this.activeItemIndex=0}onClick(e){this.alertService.open(e).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](l.Y))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-tabs-example-4"]],decls:8,vars:4,consts:[[3,"itemsLimit","activeItemIndex","activeItemIndexChange"],["tuiTab","",3,"click",4,"tuiTab"],["tuiTab","","disabled","",3,"click",4,"tuiTab"],[1,"tui-space_top-4",3,"max","ngModel","ngModelChange"],["tuiTab","",3,"click"],["src","tuiIconCard",1,"tui-space_right-2"],["tuiTab","","disabled","",3,"click"],["src","tuiIconCall",1,"tui-space_right-2"],["src","tuiIconSettings",1,"tui-space_right-2"],["src","tuiIconHeart",1,"tui-space_right-2"],["src","tuiIconTrash",1,"tui-space_right-2"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-tabs-with-more",0),m["\u0275\u0275listener"]("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),m["\u0275\u0275template"](1,y,3,0,"button",1),m["\u0275\u0275template"](2,T,3,0,"button",2),m["\u0275\u0275template"](3,E,3,0,"button",1),m["\u0275\u0275template"](4,M,3,0,"button",1),m["\u0275\u0275template"](5,_,3,0,"button",1),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"tui-input-count",3),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.activeItemIndex=e})),m["\u0275\u0275text"](7," activeItemIndex\n"),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("itemsLimit",3)("activeItemIndex",t.activeItemIndex),m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("max",4)("ngModel",t.activeItemIndex))},directives:[h.a,S.a,C.a,I.a,o.NgControlStatus,o.NgModel,f.a,v.a],encapsulation:2,changeDetection:0}),e})();var k=n("TxeG"),O=n("q7Lq"),V=n("cVyY"),P=n("xcN3");function $(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",10),m["\u0275\u0275listener"]("click",(function(){m["\u0275\u0275restoreView"](e);const t=m["\u0275\u0275nextContext"](2).$implicit;return m["\u0275\u0275nextContext"]().onClick(t)})),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"](2).$implicit;m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",e," ")}}function A(e,t){1&e&&(m["\u0275\u0275elementContainerStart"](0),m["\u0275\u0275template"](1,$,2,1,"button",9),m["\u0275\u0275elementContainerEnd"]())}function L(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",12),m["\u0275\u0275listener"]("openChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"](3).open=t})),m["\u0275\u0275elementStart"](1,"button",13),m["\u0275\u0275listener"]("tui-tab-activate",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"](3).stop(t)})),m["\u0275\u0275text"](2," Collaborators "),m["\u0275\u0275element"](3,"tui-svg",14),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"](3),t=m["\u0275\u0275reference"](8);m["\u0275\u0275property"]("content",t)("open",e.open),m["\u0275\u0275advance"](3),m["\u0275\u0275classProp"]("icon_rotated",e.open)}}function G(e,t){1&e&&m["\u0275\u0275template"](0,L,4,4,"tui-hosted-dropdown",11)}function D(e,t){if(1&e&&(m["\u0275\u0275elementContainerStart"](0),m["\u0275\u0275template"](1,A,2,0,"ng-container",7),m["\u0275\u0275template"](2,G,1,0,"ng-template",null,8,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=m["\u0275\u0275reference"](3),i=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",i.isString(e))("ngIfElse",n)}}function N(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",16),m["\u0275\u0275listener"]("click",(function(){m["\u0275\u0275restoreView"](e);const n=t.$implicit;return m["\u0275\u0275nextContext"](2).onClick(n)})),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",e," ")}}function F(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"tui-data-list"),m["\u0275\u0275template"](1,N,2,1,"button",15),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",e.collaborators)}}function R(e,t){1&e&&m["\u0275\u0275element"](0,"tui-svg",17)}let z=(()=>{class e{constructor(){this.collaborators=["Carol Cleveland","Neil Innes"],this.tabs=["John Cleese","Eric Idle",this.collaborators,"Michael Palin","Terry Jones","Terry Gilliam","Graham Chapman"],this.activeElement=String(this.tabs[0]),this.open=!1}get activeItemIndex(){return this.collaborators.includes(this.activeElement)?this.tabs.indexOf(this.collaborators):this.tabs.indexOf(this.activeElement)}stop(e){e.stopPropagation()}onClick(e){this.activeElement=e,this.open=!1}isString(e){return"string"==typeof e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-tabs-example-5"]],decls:11,vars:4,consts:[["tuiMode","onDark",1,"wrapper"],[1,"tui-text_h3","title"],[1,"tabs",3,"activeItemIndex","moreContent"],[4,"ngFor","ngForOf"],[1,"content"],["dropdown",""],["more",""],[4,"ngIf","ngIfElse"],["submenu",""],["tuiTab","",3,"click",4,"tuiTab"],["tuiTab","",3,"click"],[3,"content","open","openChange",4,"tuiTab"],[3,"content","open","openChange"],["tuiTab","",3,"tui-tab-activate"],["src","tuiIconChevronDown",1,"icon"],["tuiOption","",3,"click",4,"ngFor","ngForOf"],["tuiOption","",3,"click"],["src","tuiIconMoreHorLarge"]],template:function(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275elementStart"](1,"h1",1),m["\u0275\u0275text"](2,"Monty Python"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"tui-tabs-with-more",2),m["\u0275\u0275template"](4,D,4,2,"ng-container",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"section",4),m["\u0275\u0275text"](6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](7,F,2,1,"ng-template",null,5,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275template"](9,R,1,0,"ng-template",null,6,m["\u0275\u0275templateRefExtractor"])),2&e){const e=m["\u0275\u0275reference"](10);m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("activeItemIndex",t.activeItemIndex)("moreContent",e),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",t.tabs),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate1"]("Currently active: ",t.activeElement,"")}},directives:[k.a,h.a,i.s,i.t,S.a,f.a,O.a,v.a,V.a,P.a],styles:["[_nghost-%COMP%]{display:block;margin:-2rem;background:#454e58;color:#fff}.wrapper[_ngcontent-%COMP%]{box-shadow:inset 0 -1px var(--tui-base-03);box-shadow:inset 0 -1px hsla(0,0%,100%,.24);display:flex;align-items:center;padding:2rem 2rem 0}.content[_ngcontent-%COMP%]{padding:2rem}.title[_ngcontent-%COMP%]{min-width:15.625rem;margin:0}.tabs[_ngcontent-%COMP%]{width:calc(100% - 15.625rem);justify-content:flex-end;box-shadow:none}.icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration,.3s);transition-timing-function:ease-in-out;margin-left:.25rem}.icon_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),e})();function H(e,t){1&e&&m["\u0275\u0275element"](0,"tui-svg",5)}function j(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementContainerStart"](0),m["\u0275\u0275elementStart"](1,"button",3),m["\u0275\u0275listener"]("click",(function(){m["\u0275\u0275restoreView"](e);const n=t.$implicit;return m["\u0275\u0275nextContext"]().onClick(n)})),m["\u0275\u0275text"](2),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](3,H,1,0,"tui-svg",4),m["\u0275\u0275elementContainerEnd"]()}if(2&e){const e=t.$implicit,n=t.last;m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("disabled",n),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",e," "),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",!n)}}let J=(()=>{class e{constructor(e){this.notifications=e,this.activeItemIndex=0,this.steps=["Sales","Settings","News"]}onClick(e){this.notifications.open(e).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](l.Y))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-tabs-example-6"]],decls:4,vars:4,consts:[[3,"activeItemIndex","activeItemIndexChange"],[4,"ngFor","ngForOf"],[1,"tui-space_top-4",3,"max","ngModel","ngModelChange"],["tuiTab","",1,"step",3,"disabled","click"],["src","tuiIconChevronRight","class","separator",4,"ngIf"],["src","tuiIconChevronRight",1,"separator"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-tabs",0),m["\u0275\u0275listener"]("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),m["\u0275\u0275template"](1,j,4,3,"ng-container",1),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-input-count",2),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.activeItemIndex=e})),m["\u0275\u0275text"](3," activeItemIndex\n"),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("activeItemIndex",t.activeItemIndex),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",t.steps),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("max",2)("ngModel",t.activeItemIndex))},directives:[g.a,i.s,C.a,I.a,o.NgControlStatus,o.NgModel,f.a,i.t,v.a],styles:[".step[_ngcontent-%COMP%]{margin:0;color:var(--tui-link)}.step[_ngcontent-%COMP%]:hover{color:var(--tui-link-hover)}.separator[_ngcontent-%COMP%]{height:100%;color:var(--tui-base-03);margin:0 .75rem}"],changeDetection:0}),e})();var W=n("zV1d");function Y(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",5),m["\u0275\u0275listener"]("keydown.delete",(function(){m["\u0275\u0275restoreView"](e);const t=m["\u0275\u0275nextContext"]().$implicit;return m["\u0275\u0275nextContext"]().remove(t)})),m["\u0275\u0275text"](1),m["\u0275\u0275elementStart"](2,"tui-svg",6),m["\u0275\u0275listener"]("click.stop",(function(){m["\u0275\u0275restoreView"](e);const t=m["\u0275\u0275nextContext"]().$implicit;return m["\u0275\u0275nextContext"]().remove(t)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]().$implicit;m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",e," ")}}function K(e,t){1&e&&(m["\u0275\u0275elementContainerStart"](0),m["\u0275\u0275template"](1,Y,3,1,"button",4),m["\u0275\u0275elementContainerEnd"]())}let q=(()=>{class e{constructor(){this.activeItemIndex=0,this.items=Array.from({length:5},(e,t)=>"Item #"+t)}add(){this.items=this.items.concat("Item #"+Date.now())}remove(e){const t=this.items.indexOf(e);this.items=this.items.filter(t=>t!==e),t<=this.activeItemIndex&&(this.activeItemIndex=Math.max(this.activeItemIndex-1,0))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-tabs-example-7"]],decls:8,vars:6,consts:[[3,"itemsLimit","activeItemIndex","activeItemIndexChange"],[4,"ngFor","ngForOf"],["tuiButton","",3,"click"],[1,"tui-space_top-4",3,"max","ngModel","ngModelChange"],["tuiTab","",3,"keydown.delete",4,"tuiTab"],["tuiTab","",3,"keydown.delete"],["src","tuiIconCloseLarge",1,"tui-space_left-2",3,"click.stop"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-tabs-with-more",0),m["\u0275\u0275listener"]("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),m["\u0275\u0275template"](1,K,2,0,"ng-container",1),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275text"](3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"button",2),m["\u0275\u0275listener"]("click",(function(){return t.add()})),m["\u0275\u0275text"](5," Add one more\n"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"tui-input-count",3),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.activeItemIndex=e})),m["\u0275\u0275text"](7," activeItemIndex\n"),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("itemsLimit",3)("activeItemIndex",t.activeItemIndex),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",t.items),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](t.items[t.activeItemIndex]),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("max",4)("ngModel",t.activeItemIndex))},directives:[h.a,i.s,W.a,C.a,I.a,o.NgControlStatus,o.NgModel,S.a,f.a,v.a],encapsulation:2,changeDetection:0}),e})();var Q=n("l4xa"),Z=n("XsJz"),B=n("1/+c");function X(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",3),m["\u0275\u0275listener"]("click",(function(){m["\u0275\u0275restoreView"](e);const n=t.$implicit;return m["\u0275\u0275nextContext"]().onClick(n.text)})),m["\u0275\u0275element"](1,"tui-svg",4),m["\u0275\u0275text"](2),m["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("src",e.icon),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",e.text," ")}}let U=(()=>{class e{constructor(e){this.alerts=e,this.items=[{text:"Maps",icon:"tuiIconCard"},{text:"Calls",icon:"tuiIconCall"},{text:"Settings",icon:"tuiIconSettings"}],this.activeItemIndex=0}onClick(e){this.alerts.open(e).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](l.Y))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-tabs-example-1"]],features:[m["\u0275\u0275ProvidersFeature"]([{provide:Q.P,useValue:!1},{provide:Q.N,useValue:!0}])],decls:4,vars:4,consts:[["tuiMobileTabs","",3,"activeItemIndex","activeItemIndexChange"],["tuiTab","","tuiRipple","var(--tui-text-01)",3,"click",4,"ngFor","ngForOf"],[1,"tui-space_top-4",3,"max","ngModel","ngModelChange"],["tuiTab","","tuiRipple","var(--tui-text-01)",3,"click"],[1,"tui-space_right-2",3,"src"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-tabs",0),m["\u0275\u0275listener"]("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),m["\u0275\u0275template"](1,X,3,2,"button",1),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-input-count",2),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.activeItemIndex=e})),m["\u0275\u0275text"](3," activeItemIndex\n"),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("activeItemIndex",t.activeItemIndex),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",t.items),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("max",2)("ngModel",t.activeItemIndex))},directives:[g.a,Z.a,i.s,C.a,I.a,o.NgControlStatus,o.NgModel,f.a,B.a,v.a],encapsulation:2,changeDetection:0}),e})();function ee(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",3),m["\u0275\u0275listener"]("click",(function(){m["\u0275\u0275restoreView"](e);const n=t.$implicit;return m["\u0275\u0275nextContext"]().onClick(n.text)})),m["\u0275\u0275element"](1,"tui-svg",4),m["\u0275\u0275text"](2),m["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("src",e.icon),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",e.text," ")}}let te=(()=>{class e{constructor(e){this.alerts=e,this.items=[{text:"Maps",icon:"tuiIconCard"},{text:"Calls",icon:"tuiIconCall"},{text:"Settings",icon:"tuiIconSettings"}],this.activeItemIndex=0}onClick(e){this.alerts.open(e).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](l.Y))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-tabs-example-2"]],features:[m["\u0275\u0275ProvidersFeature"]([{provide:Q.P,useValue:!0},{provide:Q.N,useValue:!1}])],decls:4,vars:4,consts:[["tuiMobileTabs","",3,"activeItemIndex","activeItemIndexChange"],["tuiTab","",3,"click",4,"ngFor","ngForOf"],[1,"tui-space_top-4",3,"max","ngModel","ngModelChange"],["tuiTab","",3,"click"],[1,"tui-space_right-2",3,"src"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-tabs",0),m["\u0275\u0275listener"]("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),m["\u0275\u0275template"](1,ee,3,2,"button",1),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-input-count",2),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.activeItemIndex=e})),m["\u0275\u0275text"](3," activeItemIndex\n"),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("activeItemIndex",t.activeItemIndex),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",t.items),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("max",2)("ngModel",t.activeItemIndex))},directives:[g.a,Z.a,i.s,C.a,I.a,o.NgControlStatus,o.NgModel,f.a,v.a],encapsulation:2,changeDetection:0}),e})();var ne=n("EPR0"),ie=n("yHor"),oe=n("zGJC"),ae=n("u8jZ");const re=["header",$localize`:␟cf6ff48f794c02123e431c70694805722f249e6e␟190629174387398656:Tabs`];var ce,le;ce=$localize`:␟d37914a200f83ae7a1bd327517039284125f8bf2␟2140602235362765714: Component for creating tabs. It emulates appearance and behaviour of native iOS and Android components with ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:tuiMobileTabs${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: directive from ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:TuiMobileTabsModule${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: of ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:@taiga-ui/addon-mobile${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: . `,ce=m["\u0275\u0275i18nPostprocess"](ce),le=$localize`:␟b4a4500cc465b8c7a432cc6bb030b622105d403c␟2403058099261622119: If you use ${"[\ufffd#7\ufffd|\ufffd#8\ufffd]"}:START_TAG_CODE:routerLink${"[\ufffd/#7\ufffd|\ufffd/#8\ufffd]"}:CLOSE_TAG_CODE: , add also ${"[\ufffd#7\ufffd|\ufffd#8\ufffd]"}:START_TAG_CODE:routerLinkActive${"[\ufffd/#7\ufffd|\ufffd/#8\ufffd]"}:CLOSE_TAG_CODE: directive. `,le=m["\u0275\u0275i18nPostprocess"](le);const se=["heading",$localize`:␟e75362b1b5b0d9038fcafc9670ef18bba17e61d0␟7049130908974374044:Complex`];function me(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18nStart"](1,ce),m["\u0275\u0275element"](2,"code"),m["\u0275\u0275element"](3,"code"),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"tui-notification",2),m["\u0275\u0275i18nStart"](6,le),m["\u0275\u0275element"](7,"code"),m["\u0275\u0275element"](8,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](9,"tui-doc-example",3),m["\u0275\u0275element"](10,"tui-tabs-example-3"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"tui-doc-example",4),m["\u0275\u0275element"](12,"tui-tabs-example-4"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](13,"tui-doc-example",5),m["\u0275\u0275i18nAttributes"](14,se),m["\u0275\u0275element"](15,"tui-tabs-example-5"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](16,"tui-doc-example",6),m["\u0275\u0275element"](17,"tui-tabs-example-6"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](18,"tui-doc-example",7),m["\u0275\u0275element"](19,"tui-tabs-example-7"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](20,"tui-doc-example",8),m["\u0275\u0275element"](21,"tui-tabs-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](22,"tui-doc-example",9),m["\u0275\u0275element"](23,"tui-tabs-example-2"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](9),m["\u0275\u0275property"]("content",e.example3),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example4),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example5),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example6),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example7),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example1),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example2)}}function ue(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"button",18),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]().$implicit;m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",e," ")}}function de(e,t){1&e&&(m["\u0275\u0275elementContainerStart"](0),m["\u0275\u0275template"](1,ue,2,1,"button",17),m["\u0275\u0275elementContainerEnd"]())}var pe,xe,ge,fe,ve,Ce,Ie;function be(e,t){1&e&&(m["\u0275\u0275i18nStart"](0,pe),m["\u0275\u0275elementStart"](1,"strong"),m["\u0275\u0275element"](2,"code"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275i18nEnd"]())}function he(e,t){1&e&&(m["\u0275\u0275i18nStart"](0,xe),m["\u0275\u0275elementStart"](1,"strong"),m["\u0275\u0275element"](2,"code"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275i18nEnd"]())}function Se(e,t){1&e&&(m["\u0275\u0275i18nStart"](0,ge),m["\u0275\u0275elementStart"](1,"strong"),m["\u0275\u0275element"](2,"code"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275i18nEnd"]())}function ye(e,t){1&e&&m["\u0275\u0275i18n"](0,fe)}function Te(e,t){1&e&&m["\u0275\u0275i18n"](0,ve)}function Ee(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-doc-demo"),m["\u0275\u0275elementStart"](1,"tui-tabs-with-more",10),m["\u0275\u0275listener"]("activeItemIndexChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().activeItemIndex=t})),m["\u0275\u0275template"](2,de,2,0,"ng-container",11),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"tui-doc-documentation"),m["\u0275\u0275template"](4,be,3,0,"ng-template",12),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().itemsLimit=t})),m["\u0275\u0275template"](5,he,3,0,"ng-template",13),m["\u0275\u0275template"](6,Se,3,0,"ng-template",14),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().moreContent=t})),m["\u0275\u0275template"](7,ye,1,0,"ng-template",15),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().underline=t})),m["\u0275\u0275template"](8,Te,1,0,"ng-template",16),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().activeItemIndex=t})),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("underline",e.underline)("moreContent",e.moreContent)("itemsLimit",e.itemsLimit)("activeItemIndex",e.activeItemIndex),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",e.buttons),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("documentationPropertyValue",e.itemsLimit),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("documentationPropertyValues",e.moreContentVariants)("documentationPropertyValue",e.moreContent),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.underline),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.activeItemIndex)}}function Me(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",19),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,Ce),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",20),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18n"](8,Ie),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"tui-doc-code",21),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleModule),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",e.exampleHtml)}}pe=$localize`:␟5656a5759c3839067802ce3dbe28ae130aec6619␟6887732671539828921: Visible tabs count limit ${"\ufffd#1\ufffd"}:START_TAG_STRONG: for ${"\ufffd#2\ufffd"}:START_TAG_CODE:TabsWithMore${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: only ${"\ufffd/#1\ufffd"}:CLOSE_TAG_STRONG:`,xe=$localize`:␟1bc8829d8a89d9659ca69fef0a3295e5f7663510␟8495238543846460744: "More" button dropdown content ${"\ufffd#1\ufffd"}:START_TAG_STRONG: for ${"\ufffd#2\ufffd"}:START_TAG_CODE:TabsWithMore${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: only ${"\ufffd/#1\ufffd"}:CLOSE_TAG_STRONG:`,ge=$localize`:␟844d1ab52ea0efead8ac48bd87683f0d8369d8b4␟5335660555364106694: "More" button content ${"\ufffd#1\ufffd"}:START_TAG_STRONG: for ${"\ufffd#2\ufffd"}:START_TAG_CODE:TabsWithMore${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: only ${"\ufffd/#1\ufffd"}:CLOSE_TAG_STRONG:`,fe=$localize`:␟09437ca6d1691298ecf849a9553dbdb2be774a0c␟7668872993816876546: Enable active item underline `,ve=$localize`:␟39073c99674ac0077d775c30af8bf5968ed79425␟6359519444763790284: Active index item `,Ce=$localize`:␟21be59d130eeb51248506d7cadbd4ecb32daf410␟117563320487402522: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiTabsModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,Ie=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let _e=(()=>{class e{constructor(){this.buttons=["button 1","button 2","button 3","button 4"],this.exampleModule=n.e(1327).then(n.bind(null,"uMEG")),this.exampleHtml=n.e(1328).then(n.bind(null,"N1er")),this.example1={TypeScript:n.e(1312).then(n.bind(null,"+y27")),HTML:n.e(1311).then(n.bind(null,"9U9P"))},this.example2={TypeScript:n.e(1314).then(n.bind(null,"tsLR")),HTML:n.e(1313).then(n.bind(null,"9mKQ"))},this.example3={TypeScript:n.e(1316).then(n.bind(null,"8/nL")),HTML:n.e(1315).then(n.bind(null,"LyGs"))},this.example4={TypeScript:n.e(1318).then(n.bind(null,"WHak")),HTML:n.e(1317).then(n.bind(null,"sb6V"))},this.example5={TypeScript:n.e(1321).then(n.bind(null,"Y/fr")),HTML:n.e(1319).then(n.bind(null,"gi8F")),LESS:n.e(1320).then(n.bind(null,"8DDc"))},this.example6={TypeScript:n.e(1324).then(n.bind(null,"9Ae7")),HTML:n.e(1322).then(n.bind(null,"TX9T")),LESS:n.e(1323).then(n.bind(null,"5+5l"))},this.example7={TypeScript:n.e(1326).then(n.bind(null,"mW/H")),HTML:n.e(1325).then(n.bind(null,"xx27"))},this.moreContentVariants=["","And more"],this.moreContent=this.moreContentVariants[0],this.underline=!0,this.activeItemIndex=0,this.itemsLimit=999}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-tabs"]],decls:5,vars:0,consts:[["package","KIT","type","components",6,"header"],["pageTab",""],[1,"tui-space_top-4"],["id","desktop","heading","Desktop",3,"content"],["id","more","heading","TabsWithMore",3,"content"],["id","complex",3,"content",6,"heading"],["id","stepper","heading","Stepper",3,"content"],["id","closing","heading","Closing",3,"content"],["id","android","heading","Android",3,"content"],["id","ios","heading","iOS",3,"content"],[3,"underline","moreContent","itemsLimit","activeItemIndex","activeItemIndexChange"],[4,"ngFor","ngForOf"],["documentationPropertyName","itemsLimit","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","dropdownContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","moreContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","underline","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","activeItemIndex","documentationPropertyMode","input-output","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["tuiTab","",4,"tuiTab"],["tuiTab",""],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275i18nAttributes"](1,re),m["\u0275\u0275template"](2,me,24,7,"ng-template",1),m["\u0275\u0275template"](3,Ee,9,10,"ng-template",1),m["\u0275\u0275template"](4,Me,10,2,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[u.a,d.a,p.a,x.a,b,w,z,J,q,U,te,ne.a,h.a,i.s,ie.a,oe.a,S.a,f.a,ae.a],encapsulation:2,changeDetection:0}),e})(),we=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,o.FormsModule,c.l,s.Jb,s.V,l.Db,l.Gb,l.Vb,l.ab,l.wb,l.fb,r.l,c.j,a.f.forChild(Object(r.s)(_e))]]}),e})()}}]);