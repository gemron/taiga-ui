(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{CWLB:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiAlertsModule",function(){return ne});var o=n("SVse"),a=n("s7LF"),i=n("iInd"),l=n("oCJ7"),c=n("zIlJ"),r=n("ErM8"),s=n("QKt8"),u=n("E4J5"),m=n("8Y7J"),d=n("eIep"),p=n("b+ZT"),h=n("kB7g"),f=n("8zc/"),b=n("WDJX");let C=(()=>{class e{constructor(e){this.context=e,this.value=this.context.data}increaseBalance(){this.value+=10}submit(){this.context.emitAndCloseHook(this.value)}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](u.a))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-notifications-service-example-with-data"]],decls:9,vars:2,consts:[[1,"text"],[3,"value"],["tuiMode","onLight",1,"controls","tui-space_top-3"],["tuiButton","","type","button","appearance","outline","size","m",1,"tui-space_right-3",3,"click"],["tuiLink","","type","button",3,"pseudo","click"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"span",0),m["\u0275\u0275text"](1,"Your balance:"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](2,"\n\xa0\n"),m["\u0275\u0275element"](3,"tui-money",1),m["\u0275\u0275elementStart"](4,"div",2),m["\u0275\u0275elementStart"](5,"button",3),m["\u0275\u0275listener"]("click",function(){return t.submit()}),m["\u0275\u0275text"](6," Submit "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"button",4),m["\u0275\u0275listener"]("click",function(){return t.increaseBalance()}),m["\u0275\u0275text"](8," Increase "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("value",t.value),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("pseudo",!0))},directives:[p.a,h.a,f.a,b.a],styles:[".text[_ngcontent-%COMP%]{font-style:italic}.controls[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0}),e})();var y=n("ReYJ"),E=n("WQeZ"),S=n("PYg8");let T=(()=>{class e{constructor(e){this.alertService=e}showNotification(){this.alertService.open("A simple option",{label:"With a heading!"}).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](r.Y))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-alerts-example-1"]],decls:2,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"button",0),m["\u0275\u0275listener"]("click",function(){return t.showNotification()}),m["\u0275\u0275text"](1," Show\n"),m["\u0275\u0275elementEnd"]())},directives:[f.a],encapsulation:2,changeDetection:0}),e})();const x=["withdrawTemplate"],_=["depositTemplate"];function v(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18n"](1,4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275text"](3," Your balance: "),m["\u0275\u0275element"](4,"tui-money",0),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"button",5),m["\u0275\u0275listener"]("click",function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().withdraw()}),m["\u0275\u0275text"](6," Withdraw\xa0 "),m["\u0275\u0275element"](7,"tui-money",0),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("value",e.money),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("value",100)}}function w(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18nStart"](1,6),m["\u0275\u0275element"](2,"code"),m["\u0275\u0275element"](3,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"p"),m["\u0275\u0275text"](5," Your balance: "),m["\u0275\u0275element"](6,"tui-money",0),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"button",5),m["\u0275\u0275listener"]("click",function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().deposit()}),m["\u0275\u0275text"](8," Add\xa0 "),m["\u0275\u0275element"](9,"tui-money",0),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("value",e.money),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("value",100)}}let A=(()=>{class e{constructor(e){this.alertService=e,this.money=1e3}showWithdrawAlert(){this.alertService.open(this.withdrawTemplate||"",{label:"A template sample",status:"warning",autoClose:!1}).subscribe()}showDepositAlert(){this.alertService.open(this.depositTemplate||"",{label:"A template sample",status:"success",autoClose:!1}).subscribe()}withdraw(){this.money-=100}deposit(){this.money+=100}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](r.Y))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-alerts-example-2"]],viewQuery:function(e,t){if(1&e&&(m["\u0275\u0275viewQuery"](x,1),m["\u0275\u0275viewQuery"](_,1)),2&e){let e;m["\u0275\u0275queryRefresh"](e=m["\u0275\u0275loadQuery"]())&&(t.withdrawTemplate=e.first),m["\u0275\u0275queryRefresh"](e=m["\u0275\u0275loadQuery"]())&&(t.depositTemplate=e.first)}},decls:14,vars:2,consts:function(){let e,t;return e=$localize`:␟8d3c5771978973f774594800055ea9d9f9187731␟1511830455526270445:Notifications can be shown with template`,t=$localize`:␟89d0371fa85a88f37afe5840ebc452e9ff9bdc34␟7003116325745007663: If there are many templates, you can use ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:ViewChildren${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: instead of ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:ViewChild${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: or set them IDs with "#" (see code of this sample) `,t=m["\u0275\u0275i18nPostprocess"](t),[[3,"value"],["tuiButton","","type","button","size","m",1,"tui-space_right-3",3,"click"],["withdrawTemplate",""],["depositTemplate",""],e,["tuiButton","","type","button","tuiMode","onLight","appearance","outline","size","m",3,"click"],t]},template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275text"](1," Your balance: "),m["\u0275\u0275element"](2,"tui-money",0),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"button",1),m["\u0275\u0275listener"]("click",function(){return t.showWithdrawAlert()}),m["\u0275\u0275text"](4," Withdraw\n"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"button",1),m["\u0275\u0275listener"]("click",function(){return t.showDepositAlert()}),m["\u0275\u0275text"](6," Add\n"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"button",1),m["\u0275\u0275listener"]("click",function(){return t.withdraw()}),m["\u0275\u0275text"](8," Withdraw\xa0 "),m["\u0275\u0275element"](9,"tui-money",0),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](10,v,8,2,"ng-template",null,2,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275template"](12,w,10,2,"ng-template",null,3,m["\u0275\u0275templateRefExtractor"])),2&e&&(m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("value",t.money),m["\u0275\u0275advance"](7),m["\u0275\u0275property"]("value",100))},directives:[p.a,f.a,h.a],encapsulation:2,changeDetection:0}),e})();var O=n("1G5W");let g=(()=>{class e{constructor(e){this.context=e}ok(){this.context.emitAndCloseHook(!0)}cancel(){this.context.emitAndCloseHook(!1)}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](u.a))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-notifications-service-example"]],decls:7,vars:0,consts:[["tuiMode","onLight"],["tuiButton","","type","button","appearance","outline","size","s",3,"click"],["tuiButton","","type","button","appearance","outline","size","s",1,"tui-space_left-1",3,"click"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275text"](1,"Yes?"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"div",0),m["\u0275\u0275elementStart"](3,"button",1),m["\u0275\u0275listener"]("click",function(){return t.ok()}),m["\u0275\u0275text"](4," Yes "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"button",2),m["\u0275\u0275listener"]("click",function(){return t.cancel()}),m["\u0275\u0275text"](6," No "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]())},directives:[h.a,f.a],encapsulation:2,changeDetection:0}),e})(),$=(()=>{class e{constructor(e,t,n){this.injector=n,this.notification=e.open(new u.b(g,this.injector),{label:"Question",status:"error",autoClose:!1}).pipe(Object(d.a)(t=>e.open(`Got a value \u2014 ${t}`,{label:"Information"})),Object(O.a)(t.events))}showNotification(){this.notification.subscribe()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](r.Y),m["\u0275\u0275directiveInject"](i.c),m["\u0275\u0275directiveInject"](m.Injector))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-alerts-example-3"]],decls:4,vars:0,consts:function(){let e;return e=$localize`:␟8263fd5f4e59612e4fde19ba3a13cba5e6b5af73␟8127611195136646297:This notification will be removed after router change (see component sample)`,[e,["tuiButton","","type","button","size","m",3,"click"]]},template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18n"](1,0),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"button",1),m["\u0275\u0275listener"]("click",function(){return t.showNotification()}),m["\u0275\u0275text"](3," Show\n"),m["\u0275\u0275elementEnd"]())},directives:[f.a],encapsulation:2,changeDetection:0}),e})(),D=(()=>{class e{constructor(e,t,n){this.injector=n,this.notification=e.open(new u.b(C,this.injector),{label:"Heading is so long that it should be shown in two lines of text",data:237,status:"warning",autoClose:!1}).pipe(Object(d.a)(t=>e.open(`Got a value \u2014 ${t}`,{label:"Information"})),Object(O.a)(t.events))}showNotification(){this.notification.subscribe()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](r.Y),m["\u0275\u0275directiveInject"](i.c),m["\u0275\u0275directiveInject"](m.Injector))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-alerts-example-4"]],decls:2,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"button",0),m["\u0275\u0275listener"]("click",function(){return t.showNotification()}),m["\u0275\u0275text"](1," Show\n"),m["\u0275\u0275elementEnd"]())},directives:[f.a],encapsulation:2,changeDetection:0}),e})();var P=n("mrSG"),I=n("0Ksk");const G=function(e){return{$implicit:e}};let V=(()=>{class e{constructor(e){this.context=e}get label(){return this.context.label}get status(){return this.context.$implicit}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](u.a))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-notifications-service-example-with-custom-label"]],decls:5,vars:4,consts:[["polymorpheus-outlet","",3,"content","context"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"h4"),m["\u0275\u0275text"](1,"Start content"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](2,"label",0),m["\u0275\u0275elementStart"](3,"h4"),m["\u0275\u0275text"](4,"End content"),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",t.label)("context",m["\u0275\u0275pureFunction1"](2,G,t.status)))},directives:[u.d],encapsulation:2,changeDetection:0}),Object(P.b)([I.nd],e.prototype,"label",null),Object(P.b)([I.nd],e.prototype,"status",null),e})();var j=n("A1rY");let L=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-notifications-service-example-custom-label"]],decls:4,vars:0,consts:[[1,"label"],[1,"text"],["src","tuiIconHeart"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"label",0),m["\u0275\u0275elementStart"](1,"span",1),m["\u0275\u0275text"](2,"From custom label component with"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](3,"tui-svg",2),m["\u0275\u0275elementEnd"]())},directives:[j.a],styles:[".label[_ngcontent-%COMP%]{display:flex;align-items:center}.text[_ngcontent-%COMP%]{font-weight:400;font-style:italic}"],changeDetection:0}),e})(),k=(()=>{class e{constructor(e,t,n){this.injector=n,this.notification=e.open(new u.b(V,this.injector),{label:({$implicit:e})=>"error"===e?"Error label from function":"Info label from function",status:"info",autoClose:!1}).pipe(Object(O.a)(t.events)),this.notificationWithCustomLabel=e.open(new u.b(V,this.injector),{label:new u.b(L,this.injector),status:"warning",autoClose:!1}).pipe(Object(O.a)(t.events))}showNotification(){this.notification.subscribe()}showNotificationWithCustomLabel(){this.notificationWithCustomLabel.subscribe()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](r.Y),m["\u0275\u0275directiveInject"](i.c),m["\u0275\u0275directiveInject"](m.Injector))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-alerts-example-5"]],decls:4,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"],["tuiButton","","type","button","size","m",1,"tui-space_left-3",3,"click"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"button",0),m["\u0275\u0275listener"]("click",function(){return t.showNotification()}),m["\u0275\u0275text"](1," With custom label function\n"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"button",1),m["\u0275\u0275listener"]("click",function(){return t.showNotificationWithCustomLabel()}),m["\u0275\u0275text"](3," With custom label component\n"),m["\u0275\u0275elementEnd"]())},directives:[f.a],encapsulation:2,changeDetection:0}),e})();var R=n("JKY/"),z=n("F2nr"),N=n("R5K/");function M(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18n"](1,2),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,3),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"p"),m["\u0275\u0275i18nStart"](6,4),m["\u0275\u0275element"](7,"strong"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"tui-doc-example",5),m["\u0275\u0275element"](9,"tui-alerts-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"tui-doc-example",6),m["\u0275\u0275element"](11,"tui-alerts-example-2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](12,"tui-doc-example",7),m["\u0275\u0275element"](13,"tui-alerts-example-3"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](14,"tui-doc-example",8),m["\u0275\u0275element"](15,"tui-alerts-example-4"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](16,"tui-doc-example",9),m["\u0275\u0275element"](17,"tui-alerts-example-5"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](8),m["\u0275\u0275property"]("content",e.example1),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example2),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example3),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example4),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example5)}}function H(e,t){1&e&&m["\u0275\u0275i18n"](0,22)}function Y(e,t){1&e&&m["\u0275\u0275i18n"](0,23)}function B(e,t){1&e&&m["\u0275\u0275i18n"](0,24)}function W(e,t){1&e&&m["\u0275\u0275i18n"](0,25)}function U(e,t){1&e&&m["\u0275\u0275i18n"](0,26)}function J(e,t){1&e&&m["\u0275\u0275i18n"](0,27)}function F(e,t){1&e&&m["\u0275\u0275i18n"](0,28)}function Q(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",10),m["\u0275\u0275listener"]("click",function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().showNotification()}),m["\u0275\u0275text"](1," Show "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"div",11),m["\u0275\u0275i18nStart"](3,12),m["\u0275\u0275element"](4,"p"),m["\u0275\u0275element"](5,"tui-doc-code",13),m["\u0275\u0275element"](6,"code"),m["\u0275\u0275element"](7,"code"),m["\u0275\u0275element"](8,"code"),m["\u0275\u0275element"](9,"code"),m["\u0275\u0275elementStart"](10,"p"),m["\u0275\u0275element"](11,"code"),m["\u0275\u0275element"](12,"code"),m["\u0275\u0275element"](13,"code"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](14,"tui-doc-documentation"),m["\u0275\u0275template"](15,H,1,0,"ng-template",14),m["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().content=t}),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](16,"p"),m["\u0275\u0275i18nStart"](17,15),m["\u0275\u0275element"](18,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](19,"tui-doc-documentation"),m["\u0275\u0275template"](20,Y,1,0,"ng-template",16),m["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().status=t}),m["\u0275\u0275template"](21,B,1,0,"ng-template",17),m["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().label=t}),m["\u0275\u0275template"](22,W,1,0,"ng-template",18),m["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().data=t}),m["\u0275\u0275template"](23,U,1,0,"ng-template",19),m["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().autoClose=t}),m["\u0275\u0275template"](24,J,1,0,"ng-template",20),m["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().hasCloseButton=t}),m["\u0275\u0275template"](25,F,1,0,"ng-template",21),m["\u0275\u0275listener"]("documentationPropertyValueChange",function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().hasIcon=t}),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.method),m["\u0275\u0275advance"](10),m["\u0275\u0275property"]("documentationPropertyValues",e.contentVariants)("documentationPropertyValue",e.content),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("documentationPropertyValues",e.statusVariants)("documentationPropertyValue",e.status),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.label),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.data),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.autoCloseVariants)("documentationPropertyValue",e.autoClose),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.hasCloseButton),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.hasIcon)}}function K(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",29),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,30),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",31),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18nStart"](8,32),m["\u0275\u0275element"](9,"code"),m["\u0275\u0275element"](10,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](11,"tui-doc-code",33),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](12,"li"),m["\u0275\u0275i18nStart"](13,34),m["\u0275\u0275elementStart"](14,"a",35),m["\u0275\u0275element"](15,"code"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](16,"li"),m["\u0275\u0275elementStart"](17,"p"),m["\u0275\u0275i18nStart"](18,36),m["\u0275\u0275element"](19,"code"),m["\u0275\u0275element"](20,"code"),m["\u0275\u0275element"](21,"code"),m["\u0275\u0275element"](22,"code"),m["\u0275\u0275element"](23,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](24,"tui-doc-code",37),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](25,"li"),m["\u0275\u0275elementStart"](26,"p"),m["\u0275\u0275i18nStart"](27,38),m["\u0275\u0275element"](28,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](29,"tui-doc-code",33),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](30,"li"),m["\u0275\u0275elementStart"](31,"p"),m["\u0275\u0275i18nStart"](32,39),m["\u0275\u0275element"](33,"code"),m["\u0275\u0275element"](34,"code"),m["\u0275\u0275element"](35,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](36,"tui-doc-code",40),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](37,"li"),m["\u0275\u0275elementStart"](38,"p"),m["\u0275\u0275i18nStart"](39,41),m["\u0275\u0275element"](40,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](41,"tui-doc-code",40),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](42,"li"),m["\u0275\u0275elementStart"](43,"p"),m["\u0275\u0275i18nStart"](44,42),m["\u0275\u0275element"](45,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](46,"tui-doc-code",31),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleModule),m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("code",e.exampleServiceUsage),m["\u0275\u0275advance"](13),m["\u0275\u0275property"]("code",e.exampleImportModuleComponent),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleServiceUsageComponent),m["\u0275\u0275advance"](7),m["\u0275\u0275property"]("code",e.exampleCustomAlert),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleLazyModule),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleOptions)}}let q=(()=>{class e{constructor(e,t){this.alertService=e,this.method=n.e(1719).then(n.bind(null,"v+hc")),this.exampleImportModuleComponent=n.e(1714).then(n.bind(null,"FHIk")),this.exampleServiceUsage=n.e(1718).then(n.bind(null,"O2GM")),this.exampleServiceUsageComponent=n.e(1717).then(n.bind(null,"7ier")),this.exampleCustomAlert=n.e(1712).then(n.bind(null,"UTt6")),this.exampleLazyModule=n.e(1715).then(n.bind(null,"VcEl")),this.exampleModule=n.e(1716).then(n.bind(null,"z0UW")),this.exampleOptions=n.e(1713).then(n.bind(null,"itJj")),this.example1={TypeScript:n.e(1689).then(n.bind(null,"YuBj")),HTML:n.e(1688).then(n.bind(null,"821z"))},this.example2={TypeScript:n.e(1691).then(n.bind(null,"eig4")),HTML:n.e(1690).then(n.bind(null,"kiv8"))},this.example3={TypeScript:n.e(1696).then(n.bind(null,"1fdV")),HTML:n.e(1695).then(n.bind(null,"q5se")),"alert-example/alert-example.component.ts":n.e(1692).then(n.bind(null,"jYEV")),"alert-example/alert-example.template.html":n.e(1694).then(n.bind(null,"gY3y")),"alert-example/alert-example.module.ts":n.e(1693).then(n.bind(null,"I+o/"))},this.example4={TypeScript:n.e(1702).then(n.bind(null,"VBdj")),HTML:n.e(1701).then(n.bind(null,"8Kqb")),"alert-example-with-data/alert-example-with-data.component.ts":n.e(1697).then(n.bind(null,"uIlD")),"alert-example-with-data/alert-example-with-data.template.html":n.e(1700).then(n.bind(null,"cE8v")),"alert-example-with-data/alert-example-with-data.style.less":n.e(1699).then(n.bind(null,"WQWo")),"alert-example-with-data/alert-example-with-data.module.ts":n.e(1698).then(n.bind(null,"LIa4"))},this.example5={TypeScript:n.e(1711).then(n.bind(null,"PofW")),HTML:n.e(1710).then(n.bind(null,"xHIZ")),"custom-label/custom-label.module.ts":n.e(1707).then(n.bind(null,"uFkf")),"custom-label/custom-label.component.ts":n.e(1706).then(n.bind(null,"N/Q1")),"custom-label/custom-label.style.less":n.e(1708).then(n.bind(null,"kJPi")),"custom-label/custom-label.template.html":n.e(1709).then(n.bind(null,"0Gpk")),"alert-example-with-custom-label/alert-example-with-custom-label.module.ts":n.e(1704).then(n.bind(null,"8e6I")),"alert-example-with-custom-label/alert-example-with-custom-label.component.ts":n.e(1703).then(n.bind(null,"VCCU")),"alert-example-with-custom-label/alert-example-with-custom-label.template.html":n.e(1705).then(n.bind(null,"OWFZ"))},this.data=100,this.label="Heading",this.statusVariants=["info","success","error","warning"],this.status=this.statusVariants[0],this.contentVariants=["String","Component"],this.content=this.contentVariants[0],this.autoCloseVariants=[!0,!1,5e3,1e3,500],this.autoClose=this.autoCloseVariants[0],this.hasCloseButton=!0,this.hasIcon=!0,this.component=new u.b(C,t)}get selectedContent(){return"String"===this.content?this.content:this.component}showNotification(){this.alertService.open(this.selectedContent,{label:this.label,data:this.data,status:this.status,autoClose:this.autoClose,hasCloseButton:this.hasCloseButton,hasIcon:this.hasIcon}).pipe(Object(d.a)(e=>this.alertService.open(e,{label:"Notification responded with:"}))).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](r.Y),m["\u0275\u0275directiveInject"](m.Injector))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-alerts"]],decls:4,vars:0,consts:function(){let e,t,n,o,a,i,l,c,r,s,u,d,p,h,f,b,C,y,E,S,T,x;return e=$localize`:␟1bc7f6b64817783f73d7fa20dacc10347f5dc0a9␟5275394011225250882:Service to show notifications`,t=$localize`:␟f9c768272ef2129e75edad899c468746678c8252␟4524286694660863035: Do not forget to add ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiAlertModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into your app.module to use it `,n=$localize`:␟06634cafb8d09a8709af1c3b2f329d5d2a9e62de␟4498461250311742014:${"\ufffd#7\ufffd"}:START_TAG_STRONG:Singleton${"\ufffd/#7\ufffd"}:CLOSE_TAG_STRONG: you do not need to provide a service. It is just available to inject `,o=$localize`:␟0daf8614496e10971564a28775e074876405031d␟3087369671149412391:Component with data`,a=$localize`:␟51f3f834f095165ec2607a17213c7aa0bc5e4ba3␟1211513920026771159:Component with custom label`,i=$localize`:␟6867a837818a55e0f70764a5e68062bd01ab7163␟7317498188483132876:${"[\ufffd#4\ufffd|\ufffd#10\ufffd]"}:START_PARAGRAPH:To show notification, use method${"[\ufffd/#4\ufffd|\ufffd/#10\ufffd]"}:CLOSE_PARAGRAPH:${"\ufffd#5\ufffd"}:START_TAG_TUI_DOC_CODE:${"\ufffd/#5\ufffd"}:CLOSE_TAG_TUI_DOC_CODE: of ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:TuiAlertService${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: , where ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:O${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: is output data type and ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:I${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: is input data type. If content does not need input data, the second argument is optional. In the sample above the both of them are ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:number${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: . ${"[\ufffd#4\ufffd|\ufffd#10\ufffd]"}:START_PARAGRAPH: You can also just unsubscribe from a stream to hide a notification (this observable is returned from ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:open${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: method). You can save a subscription for that or use ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:takeUntil${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: like tools from ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:RxJs${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#4\ufffd|\ufffd/#10\ufffd]"}:CLOSE_PARAGRAPH:`,i=m["\u0275\u0275i18nPostprocess"](i),l=$localize`:␟07844fabcae9dbc5fe46cba91e975d09f6d9ce2a␟3466418148583049497:${"\ufffd#18\ufffd"}:START_TAG_CODE:TuiNotificationOptionsWithData${"\ufffd/#18\ufffd"}:CLOSE_TAG_CODE: interface: `,c=$localize`:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `,r=$localize`:␟054f7afbbdc6ffea0fc80d8039aba9a2d5dba955␟435210747077371139: Status `,s=$localize`:␟5fb70b9672bd3114da4cc91ecf05bb7d571ea807␟9208464206964786295: Heading `,u=$localize`:␟f271223d9bb6bb62e01b785f8a9b0fefc37ab76e␟2636705087580276181: Input data of notification, type <I> `,d=$localize`:␟a96e2773c11aaa18bb3e8c5da1ebb43c9f750f02␟3778304849595610845: Autoclose after 3 seconds `,p=$localize`:␟12b3111611486481901517499f89b963c39f0e24␟8491523700308437284: Has close button `,h=$localize`:␟62b895a2a597c60a6ac9e4c819904b8eac08dbd5␟149058290855307515: Has icon `,f=$localize`:␟1429eb9bd9237455d53e9b7c4cef0d095719ab81␟2697985294473194370: Add ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiAlertModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into your app.module `,b=$localize`:␟f895bd0c51111cb2c8e68ceead5ada137ab6d5b2␟7179047044375359280: Use service ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:show${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: method and subscribe to ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:Observable${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE:`,b=m["\u0275\u0275i18nPostprocess"](b),C=$localize`:␟6a766c93a51fcb02bf26ecacd479951c8f4b71fb␟8405226284519292539: To pass notification with custom content, you can use ${"\ufffd#14\ufffd"}:START_LINK:${"\ufffd#15\ufffd"}:START_TAG_CODE:your template${"\ufffd/#15\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#14\ufffd"}:CLOSE_LINK: . `,y=$localize`:␟b5030ce649b5c1e3eed72243728a574deb50a808␟5635433899377563977: You can also customize notification logic with a component. Use ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd|\ufffd#23\ufffd]"}:START_TAG_CODE:POLYMORPHEUS_CONTEXT${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_CODE: into the component to get context input data and to output results. It has the following interface: ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd|\ufffd#23\ufffd]"}:START_TAG_CODE:TuiDialog<TuiAlertOptions<I>, O>${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_CODE: , where ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd|\ufffd#23\ufffd]"}:START_TAG_CODE:O${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_CODE: is output data type and ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd|\ufffd#23\ufffd]"}:START_TAG_CODE:I${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_CODE: is input data type. Do not forget to add notification component into ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd|\ufffd#23\ufffd]"}:START_TAG_CODE:entryComponents${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_CODE: of your module: `,y=m["\u0275\u0275i18nPostprocess"](y),E=$localize`:␟ec507827c245a3395d58e897109309b8e3a99ac7␟1436172444558827801: Use ${"\ufffd#28\ufffd"}:START_TAG_CODE:new PolymorpheusComponent(CustomNotificationComponent)${"\ufffd/#28\ufffd"}:CLOSE_TAG_CODE: to show notification component with a service: `,S=$localize`:␟98b6e4b10f63846e7caeea56c097f345956709c4␟6964531271774145282: Use ${"[\ufffd#33\ufffd|\ufffd#34\ufffd|\ufffd#35\ufffd]"}:START_TAG_CODE:emitHook${"[\ufffd/#33\ufffd|\ufffd/#34\ufffd|\ufffd/#35\ufffd]"}:CLOSE_TAG_CODE: , ${"[\ufffd#33\ufffd|\ufffd#34\ufffd|\ufffd#35\ufffd]"}:START_TAG_CODE:closeHook${"[\ufffd/#33\ufffd|\ufffd/#34\ufffd|\ufffd/#35\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#33\ufffd|\ufffd#34\ufffd|\ufffd#35\ufffd]"}:START_TAG_CODE:emitAndCloseHook${"[\ufffd/#33\ufffd|\ufffd/#34\ufffd|\ufffd/#35\ufffd]"}:CLOSE_TAG_CODE: methods to control notification from itself: `,S=m["\u0275\u0275i18nPostprocess"](S),T=$localize`:␟72bdc03d46093beeafa58136204fab3ed68241ec␟7759900700350680332: If you use it from lazy loading modules, do not forget to use ${"\ufffd#40\ufffd"}:START_TAG_CODE:new TuiComponentContent Injector${"\ufffd/#40\ufffd"}:CLOSE_TAG_CODE: of component where you call it `,x=$localize`:␟bad4e5730bd20ce05150c175f3923390d3e8bbf7␟8849888545184271088: Optionally use the ${"\ufffd#45\ufffd"}:START_TAG_CODE:TUI_NOTIFICATION_OPTIONS${"\ufffd/#45\ufffd"}:CLOSE_TAG_CODE: injection token to override the default options (works only in app.module.ts). `,[["header","AlertService","package","CORE","path","core/components/alert/alert.service.ts"],["pageTab",""],e,t,n,["id","text","heading","Text",3,"content"],["id","template","heading","Template",3,"content"],["id","component","heading","Component",3,"content"],["id","data","heading",o,3,"content"],["id","label","heading",a,3,"content"],["tuiButton","","type","button","size","m",3,"click"],[1,"b-full-width"],i,[1,"tui-space_bottom-4",3,"code"],["documentationPropertyName","content","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],l,["documentationPropertyName","status","documentationPropertyType","TuiNotification",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","label","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","data","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","autoClose","documentationPropertyType","boolean | number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasCloseButton","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasIcon","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],c,r,s,u,d,p,h,[1,"b-demo-steps"],f,["filename","app.module.ts",3,"code"],b,["filename","myComponent.component.ts",3,"code"],C,["routerLink","/services/alert-service","fragment","example-template","tuiLink",""],y,["filename","myComponent.module.ts",3,"code"],E,S,["filename","customNotification.component.ts",3,"code"],T,x]},template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275template"](1,M,18,5,"ng-template",1),m["\u0275\u0275template"](2,Q,26,11,"ng-template",1),m["\u0275\u0275template"](3,K,47,7,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[y.a,E.a,S.a,T,A,$,D,k,f.a,R.a,z.a,N.a,i.e,b.a],styles:[".label[_ngcontent-%COMP%]{width:6.25rem}"],changeDetection:0}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({imports:[[o.c,a.FormsModule,r.ab,r.Db,s.Cb,l.g]]}),e})(),X=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({imports:[[o.c,a.FormsModule,r.Db,r.ab,r.yb,l.g]]}),e})(),ee=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({imports:[[o.c,u.c]]}),e})(),te=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({imports:[[o.c,r.Ub]]}),e})(),ne=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({imports:[[o.c,r.ab,r.Db,l.g,u.c,ee,X,Z,te,s.yb,s.ab,r.yb,a.FormsModule,c.m,i.f.forChild(Object(c.v)(q))]]}),e})()}}]);