(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{cgaB:function(t,e,r){"use strict";r.r(e),r.d(e,"Superscript",function(){return n}),r.d(e,"default",function(){return n});var s=r("mYBN");const n=s.Mark.create({name:"superscript",addOptions:()=>({HTMLAttributes:{}}),parseHTML:()=>[{tag:"sup"},{style:"vertical-align",getAttrs:t=>"super"===t&&null}],renderHTML({HTMLAttributes:t}){return["sup",Object(s.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands(){return{setSuperscript:()=>({commands:t})=>t.setMark(this.name),toggleSuperscript:()=>({commands:t})=>t.toggleMark(this.name),unsetSuperscript:()=>({commands:t})=>t.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-.":()=>this.editor.commands.toggleSuperscript()}}})}}]);