"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[29268],{29268:(Re,h,n)=>{n.r(h),n.d(h,{ExampleTuiAlertsModule:()=>he});var d=n(12057),_=n(23738),E=n(12021),f=n(55970),R=n(46244),s=n(37267),g=n(38780),c=n(89570),e=n(74788),A=n(43190),M=n(16996),O=n(30644),m=n(76189),L=n(66596);let $=(()=>{class o{constructor(t){this.context=t,this.value=this.context.data}increaseBalance(){this.value+=10}submit(){this.context.emitAndCloseHook(this.value)}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(c.yf))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-notifications-service-example-with-data"]],decls:9,vars:2,consts:[[1,"text"],[3,"value"],["tuiMode","onLight",1,"controls","tui-space_top-3"],["tuiButton","","type","button","appearance","outline","size","m",1,"tui-space_right-3",3,"click"],["tuiLink","","type","button",3,"pseudo","click"]],template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"span",0),e.\u0275\u0275text(1,"Your balance:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(2,"\n\xa0\n"),e.\u0275\u0275element(3,"tui-money",1),e.\u0275\u0275elementStart(4,"div",2),e.\u0275\u0275elementStart(5,"button",3),e.\u0275\u0275listener("click",function(){return l.submit()}),e.\u0275\u0275text(6," Submit "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"button",4),e.\u0275\u0275listener("click",function(){return l.increaseBalance()}),e.\u0275\u0275text(8," Increase "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("value",l.value),e.\u0275\u0275advance(4),e.\u0275\u0275property("pseudo",!0))},directives:[M.o,O.w,m.v,L.V],styles:[".text[_ngcontent-%COMP%]{font-style:italic}.controls[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0}),o})();var H=n(88331),W=n(37159),B=n(57068);let Y=(()=>{class o{constructor(t){this.alertService=t}showNotification(){this.alertService.open("A simple option",{label:"With a heading!"}).subscribe()}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(s.J9F))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-alerts-example-1"]],decls:2,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"]],template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"button",0),e.\u0275\u0275listener("click",function(){return l.showNotification()}),e.\u0275\u0275text(1," Show\n"),e.\u0275\u0275elementEnd())},directives:[m.v],encapsulation:2,changeDetection:0}),o})();const Q=["withdrawTemplate"],K=["depositTemplate"];function Z(o,F){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275text(3," Your balance: "),e.\u0275\u0275element(4,"tui-money",0),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"button",5),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().withdraw()}),e.\u0275\u0275text(6," Withdraw\xa0 "),e.\u0275\u0275element(7,"tui-money",0),e.\u0275\u0275elementEnd()}if(2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(4),e.\u0275\u0275property("value",t.money),e.\u0275\u0275advance(3),e.\u0275\u0275property("value",100)}}function k(o,F){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18nStart(1,6),e.\u0275\u0275element(2,"code"),e.\u0275\u0275element(3,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"p"),e.\u0275\u0275text(5," Your balance: "),e.\u0275\u0275element(6,"tui-money",0),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"button",5),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().deposit()}),e.\u0275\u0275text(8," Add\xa0 "),e.\u0275\u0275element(9,"tui-money",0),e.\u0275\u0275elementEnd()}if(2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(6),e.\u0275\u0275property("value",t.money),e.\u0275\u0275advance(3),e.\u0275\u0275property("value",100)}}let q=(()=>{class o{constructor(t){this.alertService=t,this.money=1e3}showWithdrawAlert(){this.alertService.open(this.withdrawTemplate||"",{label:"A template sample",status:"warning",autoClose:!1}).subscribe()}showDepositAlert(){this.alertService.open(this.depositTemplate||"",{label:"A template sample",status:"success",autoClose:!1}).subscribe()}withdraw(){this.money-=100}deposit(){this.money+=100}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(s.J9F))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-alerts-example-2"]],viewQuery:function(t,l){if(1&t&&(e.\u0275\u0275viewQuery(Q,5),e.\u0275\u0275viewQuery(K,5)),2&t){let a;e.\u0275\u0275queryRefresh(a=e.\u0275\u0275loadQuery())&&(l.withdrawTemplate=a.first),e.\u0275\u0275queryRefresh(a=e.\u0275\u0275loadQuery())&&(l.depositTemplate=a.first)}},decls:14,vars:2,consts:function(){let F,t;return F=$localize`:␟8d3c5771978973f774594800055ea9d9f9187731␟1511830455526270445:Notifications can be shown with template`,t=$localize`:␟89d0371fa85a88f37afe5840ebc452e9ff9bdc34␟7003116325745007663: If there are many templates, you can use ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:ViewChildren${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: instead of ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:ViewChild${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: or set them IDs with "#" (see code of this sample) `,t=e.\u0275\u0275i18nPostprocess(t),[[3,"value"],["tuiButton","","type","button","size","m",1,"tui-space_right-3",3,"click"],["withdrawTemplate",""],["depositTemplate",""],F,["tuiButton","","type","button","tuiMode","onLight","appearance","outline","size","m",3,"click"],t]},template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1," Your balance: "),e.\u0275\u0275element(2,"tui-money",0),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"button",1),e.\u0275\u0275listener("click",function(){return l.showWithdrawAlert()}),e.\u0275\u0275text(4," Withdraw\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"button",1),e.\u0275\u0275listener("click",function(){return l.showDepositAlert()}),e.\u0275\u0275text(6," Add\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"button",1),e.\u0275\u0275listener("click",function(){return l.withdraw()}),e.\u0275\u0275text(8," Withdraw\xa0 "),e.\u0275\u0275element(9,"tui-money",0),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(10,Z,8,2,"ng-template",null,2,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(12,k,10,2,"ng-template",null,3,e.\u0275\u0275templateRefExtractor)),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("value",l.money),e.\u0275\u0275advance(7),e.\u0275\u0275property("value",100))},directives:[M.o,m.v,O.w],encapsulation:2,changeDetection:0}),o})();var D=n(46782);let ee=(()=>{class o{constructor(t){this.context=t}ok(){this.context.emitAndCloseHook(!0)}cancel(){this.context.emitAndCloseHook(!1)}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(c.yf))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-notifications-service-example"]],decls:7,vars:0,consts:[["tuiMode","onLight"],["tuiButton","","type","button","appearance","outline","size","s",3,"click"],["tuiButton","","type","button","appearance","outline","size","s",1,"tui-space_left-1",3,"click"]],template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"Yes?"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"div",0),e.\u0275\u0275elementStart(3,"button",1),e.\u0275\u0275listener("click",function(){return l.ok()}),e.\u0275\u0275text(4," Yes "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"button",2),e.\u0275\u0275listener("click",function(){return l.cancel()}),e.\u0275\u0275text(6," No "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd())},directives:[O.w,m.v],encapsulation:2,changeDetection:0}),o})(),te=(()=>{class o{constructor(t,l,a){this.injector=a,this.notification=t.open(new c.Al(ee,this.injector),{label:"Question",status:"error",autoClose:!1}).pipe((0,A.w)(u=>t.open(`Got a value \u2014 ${u}`,{label:"Information"})),(0,D.R)(l.events))}showNotification(){this.notification.subscribe()}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(s.J9F),e.\u0275\u0275directiveInject(E.F0),e.\u0275\u0275directiveInject(e.Injector))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-alerts-example-3"]],decls:4,vars:0,consts:function(){let F;return F=$localize`:␟8263fd5f4e59612e4fde19ba3a13cba5e6b5af73␟8127611195136646297:This notification will be removed after router change (see component sample)`,[F,["tuiButton","","type","button","size","m",3,"click"]]},template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,0),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"button",1),e.\u0275\u0275listener("click",function(){return l.showNotification()}),e.\u0275\u0275text(3," Show\n"),e.\u0275\u0275elementEnd())},directives:[m.v],encapsulation:2,changeDetection:0}),o})(),ne=(()=>{class o{constructor(t,l,a){this.injector=a,this.notification=t.open(new c.Al($,this.injector),{label:"Heading is so long that it should be shown in two lines of text",data:237,status:"warning",autoClose:!1}).pipe((0,A.w)(u=>t.open(`Got a value \u2014 ${u}`,{label:"Information"})),(0,D.R)(l.events))}showNotification(){this.notification.subscribe()}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(s.J9F),e.\u0275\u0275directiveInject(E.F0),e.\u0275\u0275directiveInject(e.Injector))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-alerts-example-4"]],decls:2,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"]],template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"button",0),e.\u0275\u0275listener("click",function(){return l.showNotification()}),e.\u0275\u0275text(1," Show\n"),e.\u0275\u0275elementEnd())},directives:[m.v],encapsulation:2,changeDetection:0}),o})();var x=n(64762),y=n(82605);const oe=function(o){return{$implicit:o}};class r{constructor(F){this.context=F}get label(){return this.context.label}get status(){return this.context.$implicit}}r.\u0275fac=function(F){return new(F||r)(e.\u0275\u0275directiveInject(c.yf))},r.\u0275cmp=e.\u0275\u0275defineComponent({type:r,selectors:[["tui-notifications-service-example-with-custom-label"]],decls:5,vars:4,consts:[["polymorpheus-outlet","",3,"content","context"]],template:function(F,t){1&F&&(e.\u0275\u0275elementStart(0,"h4"),e.\u0275\u0275text(1,"Start content"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(2,"label",0),e.\u0275\u0275elementStart(3,"h4"),e.\u0275\u0275text(4,"End content"),e.\u0275\u0275elementEnd()),2&F&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.label)("context",e.\u0275\u0275pureFunction1(2,oe,t.status)))},directives:[c.r1],encapsulation:2,changeDetection:0}),(0,x.gn)([y.UMq],r.prototype,"label",null),(0,x.gn)([y.UMq],r.prototype,"status",null);var Fe=n(34880);let le=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-notifications-service-example-custom-label"]],decls:4,vars:0,consts:[[1,"label"],[1,"text"],["src","tuiIconHeart"]],template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"label",0),e.\u0275\u0275elementStart(1,"span",1),e.\u0275\u0275text(2,"From custom label component with"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(3,"tui-svg",2),e.\u0275\u0275elementEnd())},directives:[Fe.P],styles:[".label[_ngcontent-%COMP%]{display:flex;align-items:center}.text[_ngcontent-%COMP%]{font-weight:normal;font-style:italic}"],changeDetection:0}),o})(),ae=(()=>{class o{constructor(t,l,a){this.injector=a,this.notification=t.open(new c.Al(r,this.injector),{label:({$implicit:u})=>"error"===u?"Error label from function":"Info label from function",status:"info",autoClose:!1}).pipe((0,D.R)(l.events)),this.notificationWithCustomLabel=t.open(new c.Al(r,this.injector),{label:new c.Al(le,this.injector),status:"warning",autoClose:!1}).pipe((0,D.R)(l.events))}showNotification(){this.notification.subscribe()}showNotificationWithCustomLabel(){this.notificationWithCustomLabel.subscribe()}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(s.J9F),e.\u0275\u0275directiveInject(E.F0),e.\u0275\u0275directiveInject(e.Injector))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["tui-alerts-example-5"]],decls:4,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"],["tuiButton","","type","button","size","m",1,"tui-space_left-3",3,"click"]],template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"button",0),e.\u0275\u0275listener("click",function(){return l.showNotification()}),e.\u0275\u0275text(1," With custom label function\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"button",1),e.\u0275\u0275listener("click",function(){return l.showNotificationWithCustomLabel()}),e.\u0275\u0275text(3," With custom label component\n"),e.\u0275\u0275elementEnd())},directives:[m.v],encapsulation:2,changeDetection:0}),o})();var ue=n(76349),ie=n(23618),se=n(17023);function ce(o,F){if(1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275i18n(1,2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,3),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"p"),e.\u0275\u0275i18nStart(6,4),e.\u0275\u0275element(7,"strong"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"tui-doc-example",5),e.\u0275\u0275element(9,"tui-alerts-example-1"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"tui-doc-example",6),e.\u0275\u0275element(11,"tui-alerts-example-2"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"tui-doc-example",7),e.\u0275\u0275element(13,"tui-alerts-example-3"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"tui-doc-example",8),e.\u0275\u0275element(15,"tui-alerts-example-4"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"tui-doc-example",9),e.\u0275\u0275element(17,"tui-alerts-example-5"),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(8),e.\u0275\u0275property("content",t.example1),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example2),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example3),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example4),e.\u0275\u0275advance(2),e.\u0275\u0275property("content",t.example5)}}function me(o,F){1&o&&e.\u0275\u0275i18n(0,22)}function re(o,F){1&o&&e.\u0275\u0275i18n(0,23)}function de(o,F){1&o&&e.\u0275\u0275i18n(0,24)}function Ee(o,F){1&o&&e.\u0275\u0275i18n(0,25)}function De(o,F){1&o&&e.\u0275\u0275i18n(0,26)}function pe(o,F){1&o&&e.\u0275\u0275i18n(0,27)}function Te(o,F){1&o&&e.\u0275\u0275i18n(0,28)}function Ce(o,F){if(1&o){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",10),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().showNotification()}),e.\u0275\u0275text(1," Show "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"div",11),e.\u0275\u0275i18nStart(3,12),e.\u0275\u0275element(4,"p"),e.\u0275\u0275element(5,"tui-doc-code",13),e.\u0275\u0275element(6,"code"),e.\u0275\u0275element(7,"code"),e.\u0275\u0275element(8,"code"),e.\u0275\u0275element(9,"code"),e.\u0275\u0275elementStart(10,"p"),e.\u0275\u0275element(11,"code"),e.\u0275\u0275element(12,"code"),e.\u0275\u0275element(13,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"tui-doc-documentation"),e.\u0275\u0275template(15,me,1,0,"ng-template",14),e.\u0275\u0275listener("documentationPropertyValueChange",function(a){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().content=a}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"p"),e.\u0275\u0275i18nStart(17,15),e.\u0275\u0275element(18,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"tui-doc-documentation"),e.\u0275\u0275template(20,re,1,0,"ng-template",16),e.\u0275\u0275listener("documentationPropertyValueChange",function(a){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().status=a}),e.\u0275\u0275template(21,de,1,0,"ng-template",17),e.\u0275\u0275listener("documentationPropertyValueChange",function(a){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().label=a}),e.\u0275\u0275template(22,Ee,1,0,"ng-template",18),e.\u0275\u0275listener("documentationPropertyValueChange",function(a){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().data=a}),e.\u0275\u0275template(23,De,1,0,"ng-template",19),e.\u0275\u0275listener("documentationPropertyValueChange",function(a){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().autoClose=a}),e.\u0275\u0275template(24,pe,1,0,"ng-template",20),e.\u0275\u0275listener("documentationPropertyValueChange",function(a){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().hasCloseButton=a}),e.\u0275\u0275template(25,Te,1,0,"ng-template",21),e.\u0275\u0275listener("documentationPropertyValueChange",function(a){return e.\u0275\u0275restoreView(t),e.\u0275\u0275nextContext().hasIcon=a}),e.\u0275\u0275elementEnd()}if(2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.method),e.\u0275\u0275advance(10),e.\u0275\u0275property("documentationPropertyValues",t.contentVariants)("documentationPropertyValue",t.content),e.\u0275\u0275advance(5),e.\u0275\u0275property("documentationPropertyValues",t.statusVariants)("documentationPropertyValue",t.status),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.label),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.data),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValues",t.autoCloseVariants)("documentationPropertyValue",t.autoClose),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.hasCloseButton),e.\u0275\u0275advance(1),e.\u0275\u0275property("documentationPropertyValue",t.hasIcon)}}function Se(o,F){if(1&o&&(e.\u0275\u0275elementStart(0,"ol",29),e.\u0275\u0275elementStart(1,"li"),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275i18nStart(3,30),e.\u0275\u0275element(4,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"tui-doc-code",31),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"li"),e.\u0275\u0275elementStart(7,"p"),e.\u0275\u0275i18nStart(8,32),e.\u0275\u0275element(9,"code"),e.\u0275\u0275element(10,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(11,"tui-doc-code",33),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"li"),e.\u0275\u0275i18nStart(13,34),e.\u0275\u0275elementStart(14,"a",35),e.\u0275\u0275element(15,"code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"li"),e.\u0275\u0275elementStart(17,"p"),e.\u0275\u0275i18nStart(18,36),e.\u0275\u0275element(19,"code"),e.\u0275\u0275element(20,"code"),e.\u0275\u0275element(21,"code"),e.\u0275\u0275element(22,"code"),e.\u0275\u0275element(23,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(24,"tui-doc-code",37),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"li"),e.\u0275\u0275elementStart(26,"p"),e.\u0275\u0275i18nStart(27,38),e.\u0275\u0275element(28,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(29,"tui-doc-code",33),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"li"),e.\u0275\u0275elementStart(31,"p"),e.\u0275\u0275i18nStart(32,39),e.\u0275\u0275element(33,"code"),e.\u0275\u0275element(34,"code"),e.\u0275\u0275element(35,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(36,"tui-doc-code",40),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(37,"li"),e.\u0275\u0275elementStart(38,"p"),e.\u0275\u0275i18nStart(39,41),e.\u0275\u0275element(40,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(41,"tui-doc-code",40),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(42,"li"),e.\u0275\u0275elementStart(43,"p"),e.\u0275\u0275i18nStart(44,42),e.\u0275\u0275element(45,"code"),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(46,"tui-doc-code",31),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&o){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleModule),e.\u0275\u0275advance(6),e.\u0275\u0275property("code",t.exampleServiceUsage),e.\u0275\u0275advance(13),e.\u0275\u0275property("code",t.exampleImportModuleComponent),e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleServiceUsageComponent),e.\u0275\u0275advance(7),e.\u0275\u0275property("code",t.exampleCustomAlert),e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleLazyModule),e.\u0275\u0275advance(5),e.\u0275\u0275property("code",t.exampleOptions)}}let _e=(()=>{class o{constructor(t,l){this.alertService=t,this.method=n.e(56270).then(n.bind(n,56270)),this.exampleImportModuleComponent=n.e(15654).then(n.bind(n,15654)),this.exampleServiceUsage=n.e(97781).then(n.bind(n,97781)),this.exampleServiceUsageComponent=n.e(35337).then(n.bind(n,35337)),this.exampleCustomAlert=n.e(55655).then(n.bind(n,55655)),this.exampleLazyModule=n.e(65503).then(n.bind(n,65503)),this.exampleModule=n.e(7816).then(n.bind(n,97835)),this.exampleOptions=n.e(84723).then(n.bind(n,84723)),this.example1={TypeScript:n.e(95516).then(n.bind(n,95516)),HTML:n.e(68131).then(n.bind(n,68131))},this.example2={TypeScript:n.e(54089).then(n.bind(n,54089)),HTML:n.e(9752).then(n.bind(n,9752))},this.example3={TypeScript:n.e(61918).then(n.bind(n,61918)),HTML:n.e(37650).then(n.bind(n,37650)),"alert-example/alert-example.component.ts":n.e(15973).then(n.bind(n,15973)),"alert-example/alert-example.template.html":n.e(20572).then(n.bind(n,20572)),"alert-example/alert-example.module.ts":n.e(84856).then(n.bind(n,84856))},this.example4={TypeScript:n.e(77941).then(n.bind(n,77941)),HTML:n.e(85496).then(n.bind(n,85496)),"alert-example-with-data/alert-example-with-data.component.ts":n.e(34790).then(n.bind(n,34790)),"alert-example-with-data/alert-example-with-data.template.html":n.e(75894).then(n.bind(n,75894)),"alert-example-with-data/alert-example-with-data.style.less":n.e(95285).then(n.t.bind(n,95285,17)),"alert-example-with-data/alert-example-with-data.module.ts":n.e(91435).then(n.bind(n,91435))},this.example5={TypeScript:n.e(22352).then(n.bind(n,22352)),HTML:n.e(12975).then(n.bind(n,12975)),"custom-label/custom-label.module.ts":n.e(97835).then(n.bind(n,27021)),"custom-label/custom-label.component.ts":n.e(70349).then(n.bind(n,70349)),"custom-label/custom-label.style.less":n.e(87814).then(n.t.bind(n,87814,17)),"custom-label/custom-label.template.html":n.e(7222).then(n.bind(n,7222)),"alert-example-with-custom-label/alert-example-with-custom-label.module.ts":n.e(9956).then(n.bind(n,9956)),"alert-example-with-custom-label/alert-example-with-custom-label.component.ts":n.e(12218).then(n.bind(n,12218)),"alert-example-with-custom-label/alert-example-with-custom-label.template.html":n.e(26614).then(n.bind(n,26614))},this.data=100,this.label="Heading",this.statusVariants=["info","success","error","warning"],this.status=this.statusVariants[0],this.contentVariants=["String","Component"],this.content=this.contentVariants[0],this.autoCloseVariants=[!0,!1,5e3,1e3,500],this.autoClose=this.autoCloseVariants[0],this.hasCloseButton=!0,this.hasIcon=!0,this.component=new c.Al($,l)}get selectedContent(){return"String"===this.content?this.content:this.component}showNotification(){this.alertService.open(this.selectedContent,{label:this.label,data:this.data,status:this.status,autoClose:this.autoClose,hasCloseButton:this.hasCloseButton,hasIcon:this.hasIcon}).pipe((0,A.w)(t=>this.alertService.open(t,{label:"Notification responded with:"}))).subscribe()}}return o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(s.J9F),e.\u0275\u0275directiveInject(e.Injector))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["example-tui-alerts"]],decls:4,vars:0,consts:function(){let F,t,l,a,u,p,N,P,I,v,b,V,G,U,X,T,J,C,z,S,j,w;return F=$localize`:␟1bc7f6b64817783f73d7fa20dacc10347f5dc0a9␟5275394011225250882:Service to show notifications`,t=$localize`:␟f9c768272ef2129e75edad899c468746678c8252␟4524286694660863035: Do not forget to add ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiAlertModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into your app.module to use it `,l=$localize`:␟06634cafb8d09a8709af1c3b2f329d5d2a9e62de␟4498461250311742014:${"\ufffd#7\ufffd"}:START_TAG_STRONG:Singleton${"\ufffd/#7\ufffd"}:CLOSE_TAG_STRONG: you do not need to provide a service. It is just available to inject `,a=$localize`:␟0daf8614496e10971564a28775e074876405031d␟3087369671149412391:Component with data`,u=$localize`:␟51f3f834f095165ec2607a17213c7aa0bc5e4ba3␟1211513920026771159:Component with custom label`,p=$localize`:␟6867a837818a55e0f70764a5e68062bd01ab7163␟7317498188483132876:${"[\ufffd#4\ufffd|\ufffd#10\ufffd]"}:START_PARAGRAPH:To show notification, use method${"[\ufffd/#4\ufffd|\ufffd/#10\ufffd]"}:CLOSE_PARAGRAPH:${"\ufffd#5\ufffd"}:START_TAG_TUI_DOC_CODE:${"\ufffd/#5\ufffd"}:CLOSE_TAG_TUI_DOC_CODE: of ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:TuiAlertService${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: , where ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:O${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: is output data type and ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:I${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: is input data type. If content does not need input data, the second argument is optional. In the sample above the both of them are ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:number${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: . ${"[\ufffd#4\ufffd|\ufffd#10\ufffd]"}:START_PARAGRAPH: You can also just unsubscribe from a stream to hide a notification (this observable is returned from ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:open${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: method). You can save a subscription for that or use ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:takeUntil${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: like tools from ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:RxJs${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#4\ufffd|\ufffd/#10\ufffd]"}:CLOSE_PARAGRAPH:`,p=e.\u0275\u0275i18nPostprocess(p),N=$localize`:␟07844fabcae9dbc5fe46cba91e975d09f6d9ce2a␟3466418148583049497:${"\ufffd#18\ufffd"}:START_TAG_CODE:TuiNotificationOptionsWithData${"\ufffd/#18\ufffd"}:CLOSE_TAG_CODE: interface: `,P=$localize`:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `,I=$localize`:␟054f7afbbdc6ffea0fc80d8039aba9a2d5dba955␟435210747077371139: Status `,v=$localize`:␟5fb70b9672bd3114da4cc91ecf05bb7d571ea807␟9208464206964786295: Heading `,b=$localize`:␟f271223d9bb6bb62e01b785f8a9b0fefc37ab76e␟2636705087580276181: Input data of notification, type <I> `,V=$localize`:␟a96e2773c11aaa18bb3e8c5da1ebb43c9f750f02␟3778304849595610845: Autoclose after 3 seconds `,G=$localize`:␟12b3111611486481901517499f89b963c39f0e24␟8491523700308437284: Has close button `,U=$localize`:␟62b895a2a597c60a6ac9e4c819904b8eac08dbd5␟149058290855307515: Has icon `,X=$localize`:␟1429eb9bd9237455d53e9b7c4cef0d095719ab81␟2697985294473194370: Add ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiAlertModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into your app.module `,T=$localize`:␟f895bd0c51111cb2c8e68ceead5ada137ab6d5b2␟7179047044375359280: Use service ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:show${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: method and subscribe to ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:Observable${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE:`,T=e.\u0275\u0275i18nPostprocess(T),J=$localize`:␟6a766c93a51fcb02bf26ecacd479951c8f4b71fb␟8405226284519292539: To pass notification with custom content, you can use ${"\ufffd#14\ufffd"}:START_LINK:${"\ufffd#15\ufffd"}:START_TAG_CODE:your template${"\ufffd/#15\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#14\ufffd"}:CLOSE_LINK: . `,C=$localize`:␟b5030ce649b5c1e3eed72243728a574deb50a808␟5635433899377563977: You can also customize notification logic with a component. Use ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd|\ufffd#23\ufffd]"}:START_TAG_CODE:POLYMORPHEUS_CONTEXT${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_CODE: into the component to get context input data and to output results. It has the following interface: ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd|\ufffd#23\ufffd]"}:START_TAG_CODE:TuiDialog<TuiAlertOptions<I>, O>${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_CODE: , where ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd|\ufffd#23\ufffd]"}:START_TAG_CODE:O${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_CODE: is output data type and ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd|\ufffd#23\ufffd]"}:START_TAG_CODE:I${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_CODE: is input data type. Do not forget to add notification component into ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd|\ufffd#23\ufffd]"}:START_TAG_CODE:entryComponents${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_CODE: of your module: `,C=e.\u0275\u0275i18nPostprocess(C),z=$localize`:␟ec507827c245a3395d58e897109309b8e3a99ac7␟1436172444558827801: Use ${"\ufffd#28\ufffd"}:START_TAG_CODE:new PolymorpheusComponent(CustomNotificationComponent)${"\ufffd/#28\ufffd"}:CLOSE_TAG_CODE: to show notification component with a service: `,S=$localize`:␟98b6e4b10f63846e7caeea56c097f345956709c4␟6964531271774145282: Use ${"[\ufffd#33\ufffd|\ufffd#34\ufffd|\ufffd#35\ufffd]"}:START_TAG_CODE:emitHook${"[\ufffd/#33\ufffd|\ufffd/#34\ufffd|\ufffd/#35\ufffd]"}:CLOSE_TAG_CODE: , ${"[\ufffd#33\ufffd|\ufffd#34\ufffd|\ufffd#35\ufffd]"}:START_TAG_CODE:closeHook${"[\ufffd/#33\ufffd|\ufffd/#34\ufffd|\ufffd/#35\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#33\ufffd|\ufffd#34\ufffd|\ufffd#35\ufffd]"}:START_TAG_CODE:emitAndCloseHook${"[\ufffd/#33\ufffd|\ufffd/#34\ufffd|\ufffd/#35\ufffd]"}:CLOSE_TAG_CODE: methods to control notification from itself: `,S=e.\u0275\u0275i18nPostprocess(S),j=$localize`:␟72bdc03d46093beeafa58136204fab3ed68241ec␟7759900700350680332: If you use it from lazy loading modules, do not forget to use ${"\ufffd#40\ufffd"}:START_TAG_CODE:new TuiComponentContent Injector${"\ufffd/#40\ufffd"}:CLOSE_TAG_CODE: of component where you call it `,w=$localize`:␟bad4e5730bd20ce05150c175f3923390d3e8bbf7␟8849888545184271088: Optionally use the ${"\ufffd#45\ufffd"}:START_TAG_CODE:TUI_NOTIFICATION_OPTIONS${"\ufffd/#45\ufffd"}:CLOSE_TAG_CODE: injection token to override the default options (works only in app.module.ts). `,[["header","AlertService","package","CORE","path","core/components/alert/alert.service.ts"],["pageTab",""],F,t,l,["id","text","heading","Text",3,"content"],["id","template","heading","Template",3,"content"],["id","component","heading","Component",3,"content"],["id","data","heading",a,3,"content"],["id","label","heading",u,3,"content"],["tuiButton","","type","button","size","m",3,"click"],[1,"b-full-width"],p,[1,"tui-space_bottom-4",3,"code"],["documentationPropertyName","content","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],N,["documentationPropertyName","status","documentationPropertyType","TuiNotification",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","label","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","data","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","autoClose","documentationPropertyType","boolean | number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasCloseButton","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasIcon","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],P,I,v,b,V,G,U,[1,"b-demo-steps"],X,["filename","app.module.ts",3,"code"],T,["filename","myComponent.component.ts",3,"code"],J,["routerLink","/services/alert-service","fragment","example-template","tuiLink",""],C,["filename","myComponent.module.ts",3,"code"],z,S,["filename","customNotification.component.ts",3,"code"],j,w]},template:function(t,l){1&t&&(e.\u0275\u0275elementStart(0,"tui-doc-page",0),e.\u0275\u0275template(1,ce,18,5,"ng-template",1),e.\u0275\u0275template(2,Ce,26,11,"ng-template",1),e.\u0275\u0275template(3,Se,47,7,"ng-template",1),e.\u0275\u0275elementEnd())},directives:[H.q,W.n,B.f,Y,q,te,ne,ae,m.v,ue.c,ie.z,se.B,E.yS,L.V],styles:[".label[_ngcontent-%COMP%]{width:6.25rem}"],changeDetection:0}),o})(),fe=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[[d.ez,_.FormsModule,s.fNO,s.zw7,g.Jyo,f.DC]]}),o})(),ge=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[[d.ez,_.FormsModule,s.zw7,s.fNO,s.jzK,f.DC]]}),o})(),Ae=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[[d.ez,c.wq]]}),o})(),Oe=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[[d.ez,s.EIu]]}),o})(),he=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[[d.ez,s.fNO,s.zw7,f.DC,c.wq,Ae,ge,fe,Oe,g.Ltw,g.QfL,s.jzK,_.FormsModule,R.fV,E.Bz.forChild((0,R.Ve)(_e))]]}),o})()}}]);