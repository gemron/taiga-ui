(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{QaEv:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiCalendarModule",function(){return Y});var a=n("SVse"),o=n("iInd"),r=n("zIlJ"),i=n("ErM8"),d=n("0Ksk"),l=n("8Y7J"),m=n("ReYJ"),c=n("WQeZ"),u=n("WDJX"),h=n("rgoq"),p=n("JKY/"),s=n("PYg8"),y=n("5ZDQ");function f(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div"),l["\u0275\u0275i18n"](1,2),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275i18nExp"](e.value),l["\u0275\u0275i18nApply"](1)}}let v=(()=>{class e{constructor(){this.value=null}onDayClick(e){this.value=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-calendar-example-1"]],decls:2,vars:2,consts:function(){let e;return e=$localize`:␟2feeb35068c5f0d54e2e1997546b856a08da841d␟2620900202482217567: Chosen date: ${"\ufffd0\ufffd"}:INTERPOLATION:
`,[[3,"value","dayClick"],[4,"ngIf"],e]},template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"tui-calendar",0),l["\u0275\u0275listener"]("dayClick",function(e){return t.onDayClick(e)}),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](1,f,2,1,"div",1)),2&e&&(l["\u0275\u0275property"]("value",t.value),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.value))},directives:[y.a,a.p],encapsulation:2,changeDetection:0}),e})();function C(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div"),l["\u0275\u0275i18n"](1,5),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275i18nExp"](e.value),l["\u0275\u0275i18nApply"](1)}}let V=(()=>{class e{constructor(){this.value=null,this.firstMonth=d.Jb.currentLocal(),this.middleMonth=d.Jb.currentLocal().append({month:1}),this.lastMonth=d.Jb.currentLocal().append({month:2}),this.hoveredItem=null}onDayClick(e){null!==this.value&&this.value.isSingleDay||(this.value=new d.ib(e,e)),this.value=d.ib.sort(this.value.from,e)}onMonthChangeFirst(e){this.firstMonth=e,this.middleMonth=e.append({month:1}),this.lastMonth=e.append({month:2})}onMonthChangeMiddle(e){this.firstMonth=e.append({month:-1}),this.middleMonth=e,this.lastMonth=e.append({month:1})}onMonthChangeLast(e){this.firstMonth=e.append({month:-2}),this.middleMonth=e.append({month:-1}),this.lastMonth=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-calendar-example-2"]],decls:5,vars:17,consts:function(){let e;return e=$localize`:␟6a61580d370f4de6560593a882e91d078a887bd0␟4859697449568186620: Chosen dates: ${"\ufffd0\ufffd"}:INTERPOLATION:
`,[[1,"wrapper"],[3,"value","showAdjacent","maxViewedMonth","month","hoveredItem","hoveredItemChange","monthChange","dayClick"],[3,"value","showAdjacent","month","minViewedMonth","maxViewedMonth","hoveredItem","hoveredItemChange","monthChange","dayClick"],[3,"value","showAdjacent","minViewedMonth","month","hoveredItem","hoveredItemChange","monthChange","dayClick"],[4,"ngIf"],e]},template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"tui-calendar",1),l["\u0275\u0275listener"]("hoveredItemChange",function(e){return t.hoveredItem=e})("monthChange",function(e){return t.onMonthChangeFirst(e)})("dayClick",function(e){return t.onDayClick(e)}),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"tui-calendar",2),l["\u0275\u0275listener"]("hoveredItemChange",function(e){return t.hoveredItem=e})("monthChange",function(e){return t.onMonthChangeMiddle(e)})("dayClick",function(e){return t.onDayClick(e)}),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"tui-calendar",3),l["\u0275\u0275listener"]("hoveredItemChange",function(e){return t.hoveredItem=e})("monthChange",function(e){return t.onMonthChangeLast(e)})("dayClick",function(e){return t.onDayClick(e)}),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](4,C,2,1,"div",4)),2&e&&(l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("value",t.value)("showAdjacent",!1)("maxViewedMonth",t.firstMonth)("month",t.firstMonth)("hoveredItem",t.hoveredItem),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("value",t.value)("showAdjacent",!1)("month",t.middleMonth)("minViewedMonth",t.middleMonth)("maxViewedMonth",t.middleMonth)("hoveredItem",t.hoveredItem),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("value",t.value)("showAdjacent",!1)("minViewedMonth",t.lastMonth)("month",t.lastMonth)("hoveredItem",t.hoveredItem),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.value))},directives:[y.a,a.p],styles:[".wrapper[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),e})();function M(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div"),l["\u0275\u0275i18n"](1,5),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275i18nExp"](e.value),l["\u0275\u0275i18nApply"](1)}}const g=["primary","secondary"],b=["success"];let x=(()=>{class e{constructor(){this.value=null,this.firstMonth=d.Jb.currentLocal(),this.middleMonth=d.Jb.currentLocal().append({month:1}),this.lastMonth=d.Jb.currentLocal().append({month:2}),this.hoveredItem=null,this.markerHandler=e=>e.day%2==0?g:b}onDayClick(e){null!==this.value&&this.value.isSingleDay||(this.value=new d.ib(e,e)),this.value=d.ib.sort(this.value.from,e)}onMonthChangeFirst(e){this.firstMonth=e,this.middleMonth=e.append({month:1}),this.lastMonth=e.append({month:2})}onMonthChangeMiddle(e){this.firstMonth=e.append({month:-1}),this.middleMonth=e,this.lastMonth=e.append({month:1})}onMonthChangeLast(e){this.firstMonth=e.append({month:-2}),this.middleMonth=e.append({month:-1}),this.lastMonth=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-calendar-example-3"]],decls:5,vars:20,consts:function(){let e;return e=$localize`:␟6a61580d370f4de6560593a882e91d078a887bd0␟4859697449568186620: Chosen dates: ${"\ufffd0\ufffd"}:INTERPOLATION:
`,[[1,"wrapper"],[3,"value","showAdjacent","markerHandler","maxViewedMonth","month","hoveredItem","hoveredItemChange","monthChange","dayClick"],[3,"value","showAdjacent","markerHandler","month","minViewedMonth","maxViewedMonth","hoveredItem","hoveredItemChange","monthChange","dayClick"],[3,"value","showAdjacent","markerHandler","minViewedMonth","month","hoveredItem","hoveredItemChange","monthChange","dayClick"],[4,"ngIf"],e]},template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"tui-calendar",1),l["\u0275\u0275listener"]("hoveredItemChange",function(e){return t.hoveredItem=e})("monthChange",function(e){return t.onMonthChangeFirst(e)})("dayClick",function(e){return t.onDayClick(e)}),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"tui-calendar",2),l["\u0275\u0275listener"]("hoveredItemChange",function(e){return t.hoveredItem=e})("monthChange",function(e){return t.onMonthChangeMiddle(e)})("dayClick",function(e){return t.onDayClick(e)}),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"tui-calendar",3),l["\u0275\u0275listener"]("hoveredItemChange",function(e){return t.hoveredItem=e})("monthChange",function(e){return t.onMonthChangeLast(e)})("dayClick",function(e){return t.onDayClick(e)}),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](4,M,2,1,"div",4)),2&e&&(l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("value",t.value)("showAdjacent",!1)("markerHandler",t.markerHandler)("maxViewedMonth",t.firstMonth)("month",t.firstMonth)("hoveredItem",t.hoveredItem),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("value",t.value)("showAdjacent",!1)("markerHandler",t.markerHandler)("month",t.middleMonth)("minViewedMonth",t.middleMonth)("maxViewedMonth",t.middleMonth)("hoveredItem",t.hoveredItem),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("value",t.value)("showAdjacent",!1)("markerHandler",t.markerHandler)("minViewedMonth",t.lastMonth)("month",t.lastMonth)("hoveredItem",t.hoveredItem),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",t.value))},directives:[y.a,a.p],styles:[".wrapper[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),e})();var w=n("mbit"),P=n("F2nr"),I=n("R5K/");const T=function(){return["/components/input-date"]},k=function(){return["/components/input-date-range"]};function S(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275text"](1," A simple calendar. If you want a textfield with date, see "),l["\u0275\u0275elementStart"](2,"a",2),l["\u0275\u0275text"](3," InputDate "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](4," and "),l["\u0275\u0275elementStart"](5,"a",2),l["\u0275\u0275text"](6," InputDateRange "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"tui-notification",3),l["\u0275\u0275i18nStart"](8,4),l["\u0275\u0275elementStart"](9,"code"),l["\u0275\u0275element"](10,"strong"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"p"),l["\u0275\u0275element"](12,"tui-doc-code",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](13,"tui-doc-example",6),l["\u0275\u0275element"](14,"tui-calendar-example-1"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](15,"tui-doc-example",7),l["\u0275\u0275element"](16,"tui-calendar-example-2"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](17,"tui-doc-example",8),l["\u0275\u0275element"](18,"tui-calendar-example-3"),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("routerLink",l["\u0275\u0275pureFunction0"](6,T)),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("routerLink",l["\u0275\u0275pureFunction0"](7,k)),l["\u0275\u0275advance"](7),l["\u0275\u0275property"]("code",e.firstDayOfWeekToken),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("content",e.example1),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",e.example2),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",e.example3)}}function E(e,t){1&e&&(l["\u0275\u0275i18nStart"](0,21),l["\u0275\u0275element"](1,"div"),l["\u0275\u0275element"](2,"strong"),l["\u0275\u0275i18nEnd"]())}function A(e,t){1&e&&l["\u0275\u0275i18n"](0,22)}function D(e,t){1&e&&l["\u0275\u0275i18n"](0,23)}function H(e,t){1&e&&l["\u0275\u0275i18n"](0,24)}function $(e,t){1&e&&l["\u0275\u0275i18n"](0,25)}function _(e,t){1&e&&l["\u0275\u0275i18n"](0,26)}function L(e,t){1&e&&l["\u0275\u0275i18n"](0,27)}function O(e,t){1&e&&l["\u0275\u0275i18n"](0,28)}function R(e,t){1&e&&l["\u0275\u0275i18n"](0,29)}function j(e,t){1&e&&l["\u0275\u0275i18n"](0,30)}function N(e,t){1&e&&l["\u0275\u0275i18n"](0,31)}function z(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"tui-doc-demo"),l["\u0275\u0275elementStart"](1,"tui-calendar",9),l["\u0275\u0275listener"]("monthChange",function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().month=t})("hoveredItemChange",function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().hoveredItem=t})("dayClick",function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().onDayClick(t)}),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"tui-doc-documentation"),l["\u0275\u0275template"](3,E,3,0,"ng-template",10),l["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().disabledItemHandler=t}),l["\u0275\u0275template"](4,A,1,0,"ng-template",11),l["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().showAdjacent=t}),l["\u0275\u0275template"](5,D,1,0,"ng-template",12),l["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().hoveredItem=t}),l["\u0275\u0275template"](6,H,1,0,"ng-template",13),l["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().markerHandler=t}),l["\u0275\u0275template"](7,$,1,0,"ng-template",14),l["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().max=t}),l["\u0275\u0275template"](8,_,1,0,"ng-template",15),l["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().max=t}),l["\u0275\u0275template"](9,L,1,0,"ng-template",16),l["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().min=t}),l["\u0275\u0275template"](10,O,1,0,"ng-template",17),l["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().min=t}),l["\u0275\u0275template"](11,R,1,0,"ng-template",18),l["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().month=t}),l["\u0275\u0275template"](12,j,1,0,"ng-template",19),l["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().value=t}),l["\u0275\u0275template"](13,N,1,0,"ng-template",20),l["\u0275\u0275elementEnd"]()}if(2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("value",e.value)("disabledItemHandler",e.disabledItemHandler)("min",e.min)("max",e.max)("markerHandler",e.markerHandler)("minViewedMonth",e.minViewedMonth)("maxViewedMonth",e.maxViewedMonth)("showAdjacent",e.showAdjacent)("month",e.month)("hoveredItem",e.hoveredItem),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("documentationPropertyValue",e.showAdjacent),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("documentationPropertyValue",e.hoveredItem),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("documentationPropertyValues",e.markerHandlerVariants)("documentationPropertyValue",e.markerHandler),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("documentationPropertyValue",e.month),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("documentationPropertyValues",e.valueVariants)("documentationPropertyValue",e.value)}}function J(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"ol",32),l["\u0275\u0275elementStart"](1,"li"),l["\u0275\u0275elementStart"](2,"p"),l["\u0275\u0275i18nStart"](3,33),l["\u0275\u0275element"](4,"code"),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](5,"tui-doc-code",34),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"li"),l["\u0275\u0275elementStart"](7,"p"),l["\u0275\u0275i18n"](8,35),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](9,"tui-doc-code",36),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](5),l["\u0275\u0275property"]("code",e.exampleModule),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("code",e.exampleHtml)}}const G=["primary","secondary"],F=["success"];let W=(()=>{class e{constructor(e){this.alertService=e,this.exampleModule=n.e(467).then(n.bind(null,"xgaS")),this.exampleHtml=n.e(468).then(n.bind(null,"R1Id")),this.firstDayOfWeekToken=n.e(466).then(n.bind(null,"WGMp")),this.example1={TypeScript:n.e(461).then(n.bind(null,"bR95")),HTML:n.e(460).then(n.bind(null,"eI4V"))},this.example2={TypeScript:n.e(463).then(n.bind(null,"NLVr")),HTML:n.e(462).then(n.bind(null,"yu5i"))},this.example3={TypeScript:n.e(465).then(n.bind(null,"TrJW")),HTML:n.e(464).then(n.bind(null,"g0IJ"))},this.showAdjacent=!0,this.minVariants=[d.N,new d.hb(2017,2,5),new d.hb(1900,0,1)],this.min=this.minVariants[0],this.maxVariants=[d.T,new d.hb(2020,3,30),new d.hb(2300,0,1)],this.max=this.maxVariants[0],this.minViewedMonthVariants=[new d.Jb(0,0),new d.Jb(2017,2),new d.Jb(1900,0)],this.minViewedMonth=this.minViewedMonthVariants[0],this.maxViewedMonthVariants=[d.T,new d.Jb(2020,3),new d.Jb(2300,0)],this.maxViewedMonth=this.maxViewedMonthVariants[0],this.disabledItemHandlerVariants=[d.a,({day:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.markerHandlerVariants=[i.q,e=>e.day%2==0?G:F],this.markerHandler=this.markerHandlerVariants[0],this.valueVariants=[d.hb.currentLocal(),new d.ib(d.hb.currentLocal(),d.hb.currentLocal().append({day:3})),new d.hb(2020,3,21)],this.value=null,this.month=d.Jb.currentLocal(),this.hoveredItem=null}onDayClick(e){this.alertService.open(String(e)).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](i.Y))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-calendar"]],decls:4,vars:0,consts:function(){let e,t,n,a,o,r,i,d,l,m,c,u,h,p,s,y,f;return e=$localize`:␟1e3ac251206e16f4cba2402607873bf368e5e82b␟4402714714780180362: Use ${"\ufffd#9\ufffd"}:START_TAG_CODE:${"\ufffd#10\ufffd"}:START_TAG_STRONG:TUI_FIRST_DAY_OF_WEEK${"\ufffd/#10\ufffd"}:CLOSE_TAG_STRONG:${"\ufffd/#9\ufffd"}:CLOSE_TAG_CODE: token if you need to change start day of the week (Monday by default): ${"\ufffd#11\ufffd"}:START_PARAGRAPH:${"\ufffd#12\ufffd"}:START_TAG_TUI_DOC_CODE:${"\ufffd/#12\ufffd"}:CLOSE_TAG_TUI_DOC_CODE:${"\ufffd/#11\ufffd"}:CLOSE_PARAGRAPH:`,t=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,n=$localize`:␟0ed6cbeb3b69bb940c9e3365663a6bff540311e7␟8823844911216143942:range`,a=$localize`:␟f0ad0067675751d24dcae9afde2a56fe3ecf3c45␟5871122953070556647:With markers`,o=$localize`:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\ufffd#1\ufffd"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,r=$localize`:␟93468ee263f0453e046cd2a7d140d971a77a21d6␟427026901846333904: Show adjacent months days `,i=$localize`:␟eda1485e51ac095aaacc17acf52331ccf5582c55␟285023532423922220: Hovered date `,d=$localize`:␟23c9859665a49041525158245d62b03eb6e0bb77␟7126872511108805662: A handler that gets date and returns null or a tuple with circled marker colors `,l=$localize`:␟0ec2997ebb79ee39672ca03c45b62d3720263ca6␟945025041805688144: Maximal date to choose `,m=$localize`:␟76712405dc083e287b7d84203f246883bf2195c8␟4446534518832798635: Maximal month to access `,c=$localize`:␟5e6b74ad89b862a2b83b5d77e43f763b57137112␟2791094226136211105: Minimum date to choose `,u=$localize`:␟7b0768860406832abc45b69314b993a46a099dc6␟4181665065525097983: Minimum month to access `,h=$localize`:␟cac850ce7e80ef75f9715f1603460f9575f1df49␟3915704723653985372: Current month `,p=$localize`:␟06c2894e3ec228f0e65407118a02fbd4a6947389␟2084704973569232503: Selected day or range `,s=$localize`:␟30dc64dde7c5b72b981802ac51cffe74453e08c2␟1956037044112739727: Date click `,y=$localize`:␟a7ee2d166f9049940b6c8619f3c1e4a0e35a5c25␟9069493769412225703: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiCalendarModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,f=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","Calendar","package","CORE","type","components"],["pageTab",""],["tuiLink","",3,"routerLink"],[1,"tui-space_vertical-4"],e,[3,"code"],["id","base","heading",t,3,"content"],["id","range","heading",n,3,"content"],["id","markers","heading",a,3,"content"],[3,"value","disabledItemHandler","min","max","markerHandler","minViewedMonth","maxViewedMonth","showAdjacent","month","hoveredItem","monthChange","hoveredItemChange","dayClick"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","showAdjacent","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hoveredItem","documentationPropertyMode","input-output","documentationPropertyType","TuiDay | null",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","markerHandler","documentationPropertyMode","input","documentationPropertyType","TuiMarkerHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxViewedMonth","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","minViewedMonth","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","month","documentationPropertyMode","input-output","documentationPropertyType","TuiMonth",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","TuiDay | TuiDayRange | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","dayClick","documentationPropertyMode","output","documentationPropertyType","TuiDay"],o,r,i,d,l,m,c,u,h,p,s,[1,"b-demo-steps"],y,["filename","myComponent.module.ts",3,"code"],f,["filename","myComponent.template.html",3,"code"]]},template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-page",0),l["\u0275\u0275template"](1,S,19,8,"ng-template",1),l["\u0275\u0275template"](2,z,14,27,"ng-template",1),l["\u0275\u0275template"](3,J,10,2,"ng-template",1),l["\u0275\u0275elementEnd"]())},directives:[m.a,c.a,u.a,o.e,h.a,p.a,s.a,v,V,x,w.a,y.a,P.a,I.a],encapsulation:2,changeDetection:0}),e})(),Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({imports:[[a.c,o.f,i.yb,i.bb,r.m,i.Gb,o.f.forChild(Object(r.v)(W))]]}),e})()}}]);