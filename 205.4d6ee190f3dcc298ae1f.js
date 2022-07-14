(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{C2yX:function(e,t,l){"use strict";l.r(t),l.d(t,"Table",function(){return Ce}),l.d(t,"createTable",function(){return ge}),l.d(t,"default",function(){return Ce});var o=l("mYBN"),n=l("b/sn"),r=l("byeC"),i=l("49oK"),a=l("cD+i"),s=l("uSMm");let c,d;if("undefined"!=typeof WeakMap){let e=new WeakMap;c=t=>e.get(t),d=(t,l)=>(e.set(t,l),l)}else{let e=[],t=10,l=0;c=t=>{for(let l=0;l<e.length;l+=2)if(e[l]==t)return e[l+1]},d=(o,n)=>(l==t&&(l=0),e[l++]=o,e[l++]=n)}class h{constructor(e,t,l,o){this.left=e,this.top=t,this.right=l,this.bottom=o}}class p{constructor(e,t,l,o){this.width=e,this.height=t,this.map=l,this.problems=o}findCell(e){for(let t=0;t<this.map.length;t++){let l=this.map[t];if(l!=e)continue;let o=t%this.width,n=t/this.width|0,r=o+1,i=n+1;for(let e=1;r<this.width&&this.map[t+e]==l;e++)r++;for(let e=1;i<this.height&&this.map[t+this.width*e]==l;e++)i++;return new h(o,n,r,i)}throw new RangeError("No cell with offset "+e+" found")}colCount(e){for(let t=0;t<this.map.length;t++)if(this.map[t]==e)return t%this.width;throw new RangeError("No cell with offset "+e+" found")}nextCell(e,t,l){let{left:o,right:n,top:r,bottom:i}=this.findCell(e);return"horiz"==t?(l<0?0==o:n==this.width)?null:this.map[r*this.width+(l<0?o-1:n)]:(l<0?0==r:i==this.height)?null:this.map[o+this.width*(l<0?r-1:i)]}rectBetween(e,t){let{left:l,right:o,top:n,bottom:r}=this.findCell(e),{left:i,right:a,top:s,bottom:c}=this.findCell(t);return new h(Math.min(l,i),Math.min(n,s),Math.max(o,a),Math.max(r,c))}cellsInRect(e){let t=[],l={};for(let o=e.top;o<e.bottom;o++)for(let n=e.left;n<e.right;n++){let r=o*this.width+n,i=this.map[r];l[i]||(l[i]=!0,n==e.left&&n&&this.map[r-1]==i||o==e.top&&o&&this.map[r-this.width]==i||t.push(i))}return t}positionAt(e,t,l){for(let o=0,n=0;;o++){let r=n+l.child(o).nodeSize;if(o==e){let l=t+e*this.width,o=(e+1)*this.width;for(;l<o&&this.map[l]<n;)l++;return l==o?r-1:this.map[l]}n=r}}static get(e){return c(e)||d(e,function(e){if("table"!=e.type.spec.tableRole)throw new RangeError("Not a table node: "+e.type.name);let t=function(e){let t=-1,l=!1;for(let o=0;o<e.childCount;o++){let n=e.child(o),r=0;if(l)for(let t=0;t<o;t++){let l=e.child(t);for(let e=0;e<l.childCount;e++){let n=l.child(e);t+n.attrs.rowspan>o&&(r+=n.attrs.colspan)}}for(let e=0;e<n.childCount;e++){let t=n.child(e);r+=t.attrs.colspan,t.attrs.rowspan>1&&(l=!0)}-1==t?t=r:t!=r&&(t=Math.max(t,r))}return t}(e),l=e.childCount,o=[],n=0,r=null,i=[];for(let c=0,d=t*l;c<d;c++)o[c]=0;for(let c=0,d=0;c<l;c++){let a=e.child(c);d++;for(let e=0;;e++){for(;n<o.length&&0!=o[n];)n++;if(e==a.childCount)break;let s=a.child(e),{colspan:h,rowspan:p,colwidth:f}=s.attrs;for(let e=0;e<p;e++){if(e+c>=l){(r||(r=[])).push({type:"overlong_rowspan",pos:d,n:p-e});break}let a=n+e*t;for(let e=0;e<h;e++){0==o[a+e]?o[a+e]=d:(r||(r=[])).push({type:"collision",row:c,pos:d,n:h-e});let l=f&&f[e];if(l){let o=(a+e)%t*2,n=i[o];null==n||n!=l&&1==i[o+1]?(i[o]=l,i[o+1]=1):n==l&&i[o+1]++}}}n+=h,d+=s.nodeSize}let s=(c+1)*t,h=0;for(;n<s;)0==o[n++]&&h++;h&&(r||(r=[])).push({type:"missing",row:c,n:h}),d++}let a=new p(t,l,o,r),s=!1;for(let c=0;!s&&c<i.length;c+=2)null!=i[c]&&i[c+1]<l&&(s=!0);return s&&function(e,t,l){e.problems||(e.problems=[]);for(let o=0,n={};o<e.map.length;o++){let r=e.map[o];if(n[r])continue;n[r]=!0;let i=l.nodeAt(r),a=null;for(let l=0;l<i.attrs.colspan;l++){let n=t[(o+l)%e.width*2];null==n||i.attrs.colwidth&&i.attrs.colwidth[l]==n||((a||(a=f(i.attrs)))[l]=n)}a&&e.problems.unshift({type:"colwidth mismatch",pos:r,colwidth:a})}}(a,i,e),a}(e))}}function f(e){if(e.colwidth)return e.colwidth.slice();let t=[];for(let l=0;l<e.colspan;l++)t.push(0);return t}function u(e){let t=e.cached.tableNodeTypes;if(!t){t=e.cached.tableNodeTypes={};for(let l in e.nodes){let o=e.nodes[l],n=o.spec.tableRole;n&&(t[n]=o)}}return t}const m=new n.e("selectingCells");function w(e){for(let t=e.depth-1;t>0;t--)if("row"==e.node(t).type.spec.tableRole)return e.node(0).resolve(e.before(t+1));return null}function g(e){let t=e.selection.$head;for(let l=t.depth;l>0;l--)if("row"==t.node(l).type.spec.tableRole)return!0;return!1}function b(e){let t=e.selection;return t.$anchorCell?t.$anchorCell.pos>t.$headCell.pos?t.$anchorCell:t.$headCell:t.node&&"cell"==t.node.type.spec.tableRole?t.$anchor:w(t.$head)||function(e){for(let t=e.nodeAfter,l=e.pos;t;t=t.firstChild,l++){let o=t.type.spec.tableRole;if("cell"==o||"header_cell"==o)return e.doc.resolve(l)}for(let t=e.nodeBefore,l=e.pos;t;t=t.lastChild,l--){let o=t.type.spec.tableRole;if("cell"==o||"header_cell"==o)return e.doc.resolve(l-t.nodeSize)}}(t.$head)}function C(e){return"row"==e.parent.type.spec.tableRole&&e.nodeAfter}function y(e,t){return e.depth==t.depth&&e.pos>=t.start(-1)&&e.pos<=t.end(-1)}function v(e,t,l){let o=e.start(-1),n=p.get(e.node(-1)).nextCell(e.pos-o,t,l);return null==n?null:e.node(0).resolve(o+n)}function S(e,t,l){let o={};for(let n in e)o[n]=e[n];return o[t]=l,o}function A(e,t,l=1){let o=S(e,"colspan",e.colspan-l);return o.colwidth&&(o.colwidth=o.colwidth.slice(),o.colwidth.splice(t,l),o.colwidth.some(e=>e>0)||(o.colwidth=null)),o}function $(e,t,l=1){let o=S(e,"colspan",e.colspan+l);if(o.colwidth){o.colwidth=o.colwidth.slice();for(let e=0;e<l;e++)o.colwidth.splice(t,0,0)}return o}class M extends n.f{constructor(e,t=e){let l=e.node(-1),o=p.get(l),r=e.start(-1),i=o.rectBetween(e.pos-r,t.pos-r),a=e.node(0),s=o.cellsInRect(i).filter(e=>e!=t.pos-r);s.unshift(t.pos-r);let c=s.map(e=>{let t=l.nodeAt(e),o=e+r+1;return new n.g(a.resolve(o),a.resolve(o+t.content.size))});super(c[0].$from,c[0].$to,c),this.$anchorCell=e,this.$headCell=t}map(e,t){let l=e.resolve(t.map(this.$anchorCell.pos)),o=e.resolve(t.map(this.$headCell.pos));if(C(l)&&C(o)&&y(l,o)){let e=this.$anchorCell.node(-1)!=l.node(-1);return e&&this.isRowSelection()?M.rowSelection(l,o):e&&this.isColSelection()?M.colSelection(l,o):new M(l,o)}return n.h.between(l,o)}content(){let e=this.$anchorCell.node(-1),t=p.get(e),l=this.$anchorCell.start(-1),o=t.rectBetween(this.$anchorCell.pos-l,this.$headCell.pos-l),n={},i=[];for(let s=o.top;s<o.bottom;s++){let l=[];for(let r=s*t.width+o.left,i=o.left;i<o.right;i++,r++){let i=t.map[r];if(!n[i]){n[i]=!0;let r=t.findCell(i),a=e.nodeAt(i),s=o.left-r.left,c=r.right-o.right;if(s>0||c>0){let e=a.attrs;s>0&&(e=A(e,0,s)),c>0&&(e=A(e,e.colspan-c,c)),a=r.left<o.left?a.type.createAndFill(e):a.type.create(e,a.content)}if(r.top<o.top||r.bottom>o.bottom){let e=S(a.attrs,"rowspan",Math.min(r.bottom,o.bottom)-Math.max(r.top,o.top));a=r.top<o.top?a.type.createAndFill(e):a.type.create(e,a.content)}l.push(a)}}i.push(e.child(s).copy(r.c.from(l)))}const a=this.isColSelection()&&this.isRowSelection()?e:i;return new r.j(r.c.from(a),1,1)}replace(e,t=r.j.empty){let l=e.steps.length,o=this.ranges;for(let n=0;n<o.length;n++){let{$from:i,$to:a}=o[n],s=e.mapping.slice(l);e.replace(s.map(i.pos),s.map(a.pos),n?r.j.empty:t)}let i=n.f.findFrom(e.doc.resolve(e.mapping.slice(l).map(this.to)),-1);i&&e.setSelection(i)}replaceWith(e,t){this.replace(e,new r.j(r.c.from(t),0,0))}forEachCell(e){let t=this.$anchorCell.node(-1),l=p.get(t),o=this.$anchorCell.start(-1),n=l.cellsInRect(l.rectBetween(this.$anchorCell.pos-o,this.$headCell.pos-o));for(let r=0;r<n.length;r++)e(t.nodeAt(n[r]),o+n[r])}isColSelection(){let e=this.$anchorCell.index(-1),t=this.$headCell.index(-1);return!(Math.min(e,t)>0)&&Math.max(e+this.$anchorCell.nodeAfter.attrs.rowspan,t+this.$headCell.nodeAfter.attrs.rowspan)==this.$headCell.node(-1).childCount}static colSelection(e,t=e){let l=p.get(e.node(-1)),o=e.start(-1),n=l.findCell(e.pos-o),r=l.findCell(t.pos-o),i=e.node(0);return n.top<=r.top?(n.top>0&&(e=i.resolve(o+l.map[n.left])),r.bottom<l.height&&(t=i.resolve(o+l.map[l.width*(l.height-1)+r.right-1]))):(r.top>0&&(t=i.resolve(o+l.map[r.left])),n.bottom<l.height&&(e=i.resolve(o+l.map[l.width*(l.height-1)+n.right-1]))),new M(e,t)}isRowSelection(){let e=p.get(this.$anchorCell.node(-1)),t=this.$anchorCell.start(-1),l=e.colCount(this.$anchorCell.pos-t),o=e.colCount(this.$headCell.pos-t);return!(Math.min(l,o)>0)&&Math.max(l+this.$anchorCell.nodeAfter.attrs.colspan,o+this.$headCell.nodeAfter.attrs.colspan)==e.width}eq(e){return e instanceof M&&e.$anchorCell.pos==this.$anchorCell.pos&&e.$headCell.pos==this.$headCell.pos}static rowSelection(e,t=e){let l=p.get(e.node(-1)),o=e.start(-1),n=l.findCell(e.pos-o),r=l.findCell(t.pos-o),i=e.node(0);return n.left<=r.left?(n.left>0&&(e=i.resolve(o+l.map[n.top*l.width])),r.right<l.width&&(t=i.resolve(o+l.map[l.width*(r.top+1)-1]))):(r.left>0&&(t=i.resolve(o+l.map[r.top*l.width])),n.right<l.width&&(e=i.resolve(o+l.map[l.width*(n.top+1)-1]))),new M(e,t)}toJSON(){return{type:"cell",anchor:this.$anchorCell.pos,head:this.$headCell.pos}}static fromJSON(e,t){return new M(e.resolve(t.anchor),e.resolve(t.head))}static create(e,t,l=t){return new M(e.resolve(t),e.resolve(l))}getBookmark(){return new R(this.$anchorCell.pos,this.$headCell.pos)}}M.prototype.visible=!1,n.f.jsonID("cell",M);class R{constructor(e,t){this.anchor=e,this.head=t}map(e){return new R(e.map(this.anchor),e.map(this.head))}resolve(e){let t=e.resolve(this.anchor),l=e.resolve(this.head);return"row"==t.parent.type.spec.tableRole&&"row"==l.parent.type.spec.tableRole&&t.index()<t.parent.childCount&&l.index()<l.parent.childCount&&y(t,l)?new M(t,l):n.f.near(l,1)}}function N(e){if(!(e.selection instanceof M))return null;let t=[];return e.selection.forEachCell((e,l)=>{t.push(a.a.node(l,l+e.nodeSize,{class:"selectedCell"}))}),a.b.create(e.doc,t)}function z(e,t){let l=e.createAndFill();return new s.d(l).replace(0,l.content.size,t).doc}function x(e,t,l,o,n,r,i,a){if(0==i||i==t.height)return!1;let s=!1;for(let c=n;c<r;c++){let n=i*t.width+c,r=t.map[n];if(t.map[n-t.width]==r){s=!0;let n=l.nodeAt(r),{top:d,left:h}=t.findCell(r);e.setNodeMarkup(e.mapping.slice(a).map(r+o),null,S(n.attrs,"rowspan",i-d)),e.insert(e.mapping.slice(a).map(t.positionAt(i,h,l)),n.type.createAndFill(S(n.attrs,"rowspan",d+n.attrs.rowspan-i))),c+=n.attrs.colspan-1}}return s}function k(e,t,l,o,n,r,i,a){if(0==i||i==t.width)return!1;let s=!1;for(let c=n;c<r;c++){let n=c*t.width+i,r=t.map[n];if(t.map[n-1]==r){s=!0;let n=l.nodeAt(r),d=t.colCount(r),h=e.mapping.slice(a).map(r+o);e.setNodeMarkup(h,null,A(n.attrs,i-d,n.attrs.colspan-(i-d))),e.insert(h+n.nodeSize,n.type.createAndFill(A(n.attrs,0,i-d))),c+=n.attrs.rowspan-1}}return s}function T(e,t,l,o,n){let i=l?e.doc.nodeAt(l-1):e.doc,a=p.get(i),{top:s,left:c}=o,d=c+n.width,h=s+n.height,f=e.tr,m=0;function w(){i=l?f.doc.nodeAt(l-1):f.doc,a=p.get(i),m=f.mapping.maps.length}(function(e,t,l,o,n,i,a){let s,c,d=u(e.doc.type.schema);if(n>t.width)for(let r=0,h=0;r<t.height;r++){let i=l.child(r);h+=i.nodeSize;let p,f=[];p=null==i.lastChild||i.lastChild.type==d.cell?s||(s=d.cell.createAndFill()):c||(c=d.header_cell.createAndFill());for(let e=t.width;e<n;e++)f.push(p);e.insert(e.mapping.slice(a).map(h-1+o),f)}if(i>t.height){let h=[];for(let e=0,o=(t.height-1)*t.width;e<Math.max(t.width,n);e++){let n=!(e>=t.width)&&l.nodeAt(t.map[o+e]).type==d.header_cell;h.push(n?c||(c=d.header_cell.createAndFill()):s||(s=d.cell.createAndFill()))}let p=d.row.create(null,r.c.from(h)),f=[];for(let e=t.height;e<i;e++)f.push(p);e.insert(e.mapping.slice(a).map(o+l.nodeSize-2),f)}return!(!s&&!c)})(f,a,i,l,d,h,m)&&w(),x(f,a,i,l,c,d,s,m)&&w(),x(f,a,i,l,c,d,h,m)&&w(),k(f,a,i,l,s,h,c,m)&&w(),k(f,a,i,l,s,h,d,m)&&w();for(let p=s;p<h;p++){let e=a.positionAt(p,c,i),t=a.positionAt(p,d,i);f.replace(f.mapping.slice(m).map(e+l),f.mapping.slice(m).map(t+l),new r.j(n.rows[p-s],0,0))}w(),f.setSelection(new M(f.doc.resolve(l+a.positionAt(s,c,i)),f.doc.resolve(l+a.positionAt(h-1,d-1,i)))),t(f)}const E=Object(i.a)({ArrowLeft:D("horiz",-1),ArrowRight:D("horiz",1),ArrowUp:D("vert",-1),ArrowDown:D("vert",1),"Shift-ArrowLeft":W("horiz",-1),"Shift-ArrowRight":W("horiz",1),"Shift-ArrowUp":W("vert",-1),"Shift-ArrowDown":W("vert",1),Backspace:L,"Mod-Backspace":L,Delete:L,"Mod-Delete":L});function H(e,t,l){return!l.eq(e.selection)&&(t&&t(e.tr.setSelection(l).scrollIntoView()),!0)}function D(e,t){return(l,o,r)=>{let i=l.selection;if(i instanceof M)return H(l,o,n.f.near(i.$headCell,t));if("horiz"!=e&&!i.empty)return!1;let a=O(r,e,t);if(null==a)return!1;if("horiz"==e)return H(l,o,n.f.near(l.doc.resolve(i.head+t),t));{let r,i=l.doc.resolve(a),s=v(i,e,t);return r=s?n.f.near(s,1):t<0?n.f.near(l.doc.resolve(i.before(-1)),-1):n.f.near(l.doc.resolve(i.after(-1)),1),H(l,o,r)}}}function W(e,t){return(l,o,n)=>{let r=l.selection;if(!(r instanceof M)){let o=O(n,e,t);if(null==o)return!1;r=new M(l.doc.resolve(o))}let i=v(r.$headCell,e,t);return!!i&&H(l,o,new M(r.$anchorCell,i))}}function L(e,t){let l=e.selection;if(!(l instanceof M))return!1;if(t){let o=e.tr,n=u(e.schema).cell.createAndFill().content;l.forEachCell((e,t)=>{e.content.eq(n)||o.replace(o.mapping.map(t+1),o.mapping.map(t+e.nodeSize-1),new r.j(n,0,0))}),o.docChanged&&t(o)}return!0}function _(e,t){let l=w(e.state.doc.resolve(t));return!!l&&(e.dispatch(e.state.tr.setSelection(new M(l))),!0)}function B(e,t,l){if(!g(e.state))return!1;let o=function(e){if(!e.size)return null;let{content:t,openStart:l,openEnd:o}=e;for(;1==t.childCount&&(l>0&&o>0||"table"==t.firstChild.type.spec.tableRole);)l--,o--,t=t.firstChild.content;let n=t.firstChild,i=n.type.spec.tableRole,a=n.type.schema,s=[];if("row"==i)for(let c=0;c<t.childCount;c++){let e=t.child(c).content,n=c?0:Math.max(0,l-1),i=c<t.childCount-1?0:Math.max(0,o-1);(n||i)&&(e=z(u(a).row,new r.j(e,n,i)).content),s.push(e)}else{if("cell"!=i&&"header_cell"!=i)return null;s.push(l||o?z(u(a).row,new r.j(t,l,o)).content:t)}return function(e,t){let l=[];for(let n=0;n<t.length;n++){let e=t[n];for(let t=e.childCount-1;t>=0;t--){let{rowspan:o,colspan:r}=e.child(t).attrs;for(let e=n;e<n+o;e++)l[e]=(l[e]||0)+r}}let o=0;for(let n=0;n<l.length;n++)o=Math.max(o,l[n]);for(let n=0;n<l.length;n++)if(n>=t.length&&t.push(r.c.empty),l[n]<o){let i=u(e).cell.createAndFill(),a=[];for(let e=l[n];e<o;e++)a.push(i);t[n]=t[n].append(r.c.from(a))}return{height:t.length,width:o,rows:t}}(a,s)}(l),n=e.state.selection;if(n instanceof M){o||(o={width:1,height:1,rows:[r.c.from(z(u(e.state.schema).cell,l))]});let t=n.$anchorCell.node(-1),i=n.$anchorCell.start(-1),a=p.get(t).rectBetween(n.$anchorCell.pos-i,n.$headCell.pos-i);return o=function({width:e,height:t,rows:l},o,n){if(e!=o){let t=[],n=[];for(let e=0;e<l.length;e++){let i=l[e],a=[];for(let l=t[e]||0,n=0;l<o;n++){let r=i.child(n%i.childCount);l+r.attrs.colspan>o&&(r=r.type.create(A(r.attrs,r.attrs.colspan,l+r.attrs.colspan-o),r.content)),a.push(r),l+=r.attrs.colspan;for(let l=1;l<r.attrs.rowspan;l++)t[e+l]=(t[e+l]||0)+r.attrs.colspan}n.push(r.c.from(a))}l=n,e=o}if(t!=n){let e=[];for(let o=0,i=0;o<n;o++,i++){let a=[],s=l[i%t];for(let e=0;e<s.childCount;e++){let t=s.child(e);o+t.attrs.rowspan>n&&(t=t.type.create(S(t.attrs,"rowspan",Math.max(1,n-t.attrs.rowspan)),t.content)),a.push(t)}e.push(r.c.from(a))}l=e,t=n}return{width:e,height:t,rows:l}}(o,a.right-a.left,a.bottom-a.top),T(e.state,e.dispatch,i,a,o),!0}if(o){let t=b(e.state),l=t.start(-1);return T(e.state,e.dispatch,l,p.get(t.node(-1)).findCell(t.pos-l),o),!0}return!1}function F(e,t){if(t.ctrlKey||t.metaKey)return;let l,o=j(e,t.target);if(t.shiftKey&&e.state.selection instanceof M)n(e.state.selection.$anchorCell,t),t.preventDefault();else if(t.shiftKey&&o&&null!=(l=w(e.state.selection.$anchor))&&I(e,t).pos!=l.pos)n(l,t),t.preventDefault();else if(!o)return;function n(t,l){let o=I(e,l),n=null==m.getState(e.state);if(!o||!y(t,o)){if(!n)return;o=t}let r=new M(t,o);if(n||!e.state.selection.eq(r)){let l=e.state.tr.setSelection(r);n&&l.setMeta(m,t.pos),e.dispatch(l)}}function r(){e.root.removeEventListener("mouseup",r),e.root.removeEventListener("dragstart",r),e.root.removeEventListener("mousemove",i),null!=m.getState(e.state)&&e.dispatch(e.state.tr.setMeta(m,-1))}function i(l){let i,a=m.getState(e.state);if(null!=a)i=e.state.doc.resolve(a);else if(j(e,l.target)!=o&&(i=I(e,t),!i))return r();i&&n(i,l)}e.root.addEventListener("mouseup",r),e.root.addEventListener("dragstart",r),e.root.addEventListener("mousemove",i)}function O(e,t,l){if(!(e.state.selection instanceof n.h))return null;let{$head:o}=e.state.selection;for(let n=o.depth-1;n>=0;n--){let r=o.node(n);if((l<0?o.index(n):o.indexAfter(n))!=(l<0?0:r.childCount))return null;if("cell"==r.type.spec.tableRole||"header_cell"==r.type.spec.tableRole){let r=o.before(n);return e.endOfTextblock("vert"==t?l>0?"down":"up":l>0?"right":"left")?r:null}}return null}function j(e,t){for(;t&&t!=e.dom;t=t.parentNode)if("TD"==t.nodeName||"TH"==t.nodeName)return t}function I(e,t){let l=e.posAtCoords({left:t.clientX,top:t.clientY});return l&&l?w(e.state.doc.resolve(l.pos)):null}const P=new n.e("fix-tables");function V(e,t,l,o){let n=e.childCount,r=t.childCount;e:for(let i=0,a=0;i<r;i++){let r=t.child(i);for(let t=a,o=Math.min(n,i+3);t<o;t++)if(e.child(t)==r){a=t+1,l+=r.nodeSize;continue e}o(r,l),a<n&&e.child(a).sameMarkup(r)?V(e.child(a),r,l+1,o):r.nodesBetween(0,r.content.size,o,l+1),l+=r.nodeSize}}function X(e,t){let l,o=(t,o)=>{"table"==t.type.spec.tableRole&&(l=function(e,t,l,o){let n=p.get(t);if(!n.problems)return o;o||(o=e.tr);let r,i,a=[];for(let s=0;s<n.height;s++)a.push(0);for(let s=0;s<n.problems.length;s++){let e=n.problems[s];if("collision"==e.type){let n=t.nodeAt(e.pos);for(let t=0;t<n.attrs.rowspan;t++)a[e.row+t]+=e.n;o.setNodeMarkup(o.mapping.map(l+1+e.pos),null,A(n.attrs,n.attrs.colspan-e.n,e.n))}else if("missing"==e.type)a[e.row]+=e.n;else if("overlong_rowspan"==e.type){let n=t.nodeAt(e.pos);o.setNodeMarkup(o.mapping.map(l+1+e.pos),null,S(n.attrs,"rowspan",n.attrs.rowspan-e.n))}else if("colwidth mismatch"==e.type){let n=t.nodeAt(e.pos);o.setNodeMarkup(o.mapping.map(l+1+e.pos),null,S(n.attrs,"colwidth",e.colwidth))}}for(let s=0;s<a.length;s++)a[s]&&(null==r&&(r=s),i=s);for(let s=0,c=l+1;s<n.height;s++){let l=t.child(s),n=c+l.nodeSize,d=a[s];if(d>0){let t="cell";l.firstChild&&(t=l.firstChild.type.spec.tableRole);let a=[];for(let l=0;l<d;l++)a.push(u(e.schema)[t].createAndFill());o.insert(o.mapping.map(0!=s&&r!=s-1||i!=s?n-1:c+1),a)}c=n}return o.setMeta(P,{fixTables:!0})}(e,t,o,l))};return t?t.doc!=e.doc&&V(t.doc,e.doc,0,o):e.doc.descendants(o),l}function K(e){let t,l=e.selection,o=b(e),n=o.node(-1),r=o.start(-1),i=p.get(n);return t=l instanceof M?i.rectBetween(l.$anchorCell.pos-r,l.$headCell.pos-r):i.findCell(o.pos-r),t.tableStart=r,t.map=i,t.table=n,t}function q(e,{map:t,tableStart:l,table:o},n){let r=n>0?-1:0;(function(e,t,l){let o=u(t.type.schema).header_cell;for(let n=0;n<e.height;n++)if(t.nodeAt(e.map[l+n*e.width]).type!=o)return!1;return!0})(t,o,n+r)&&(r=0==n||n==t.width?null:0);for(let i=0;i<t.height;i++){let a=i*t.width+n;if(n>0&&n<t.width&&t.map[a-1]==t.map[a]){let r=t.map[a],s=o.nodeAt(r);e.setNodeMarkup(e.mapping.map(l+r),null,$(s.attrs,n-t.colCount(r))),i+=s.attrs.rowspan-1}else{let s=null==r?u(o.type.schema).cell:o.nodeAt(t.map[a+r]).type,c=t.positionAt(i,n,o);e.insert(e.mapping.map(l+c),s.createAndFill())}}return e}function J(e,{map:t,table:l,tableStart:o},n){let r=e.mapping.maps.length;for(let i=0;i<t.height;){let a=i*t.width+n,s=t.map[a],c=l.nodeAt(s);if(n>0&&t.map[a-1]==s||n<t.width-1&&t.map[a+1]==s)e.setNodeMarkup(e.mapping.slice(r).map(o+s),null,A(c.attrs,n-t.colCount(s)));else{let t=e.mapping.slice(r).map(o+s);e.delete(t,t+c.nodeSize)}i+=c.attrs.rowspan}}function Y(e,{map:t,tableStart:l,table:o},n){let r=l;for(let s=0;s<n;s++)r+=o.child(s).nodeSize;let i=[],a=n>0?-1:0;(function(e,t,l){let o=u(t.type.schema).header_cell;for(let n=0;n<e.width;n++)if(t.nodeAt(e.map[n+l*e.width]).type!=o)return!1;return!0})(t,o,n+a)&&(a=0==n||n==t.height?null:0);for(let s=0,c=t.width*n;s<t.width;s++,c++)if(n>0&&n<t.height&&t.map[c]==t.map[c-t.width]){let n=t.map[c],r=o.nodeAt(n).attrs;e.setNodeMarkup(l+n,null,S(r,"rowspan",r.rowspan+1)),s+=r.colspan-1}else{let e=null==a?u(o.type.schema).cell:o.nodeAt(t.map[c+a*t.width]).type;i.push(e.createAndFill())}return e.insert(r,u(o.type.schema).row.create(null,i)),e}function U(e,{map:t,table:l,tableStart:o},n){let r=0;for(let s=0;s<n;s++)r+=l.child(s).nodeSize;let i=r+l.child(n).nodeSize,a=e.mapping.maps.length;e.delete(r+o,i+o);for(let s=0,c=n*t.width;s<t.width;s++,c++){let r=t.map[c];if(n>0&&r==t.map[c-t.width]){let t=l.nodeAt(r).attrs;e.setNodeMarkup(e.mapping.slice(a).map(r+o),null,S(t,"rowspan",t.rowspan-1)),s+=t.colspan-1}else if(n<t.width&&r==t.map[c+t.width]){let i=l.nodeAt(r),c=i.type.create(S(i.attrs,"rowspan",i.attrs.rowspan-1),i.content),d=t.positionAt(n+1,s,l);e.insert(e.mapping.slice(a).map(o+d),c),s+=i.attrs.colspan-1}}}function G(e){let t=e.content;return 1==t.childCount&&t.firstChild.isTextblock&&0==t.firstChild.childCount}function Q(e,t){let l=e.selection;if(!(l instanceof M)||l.$anchorCell.pos==l.$headCell.pos)return!1;let o=K(e),{map:n}=o;if(function({width:e,height:t,map:l},o){let n=o.top*e+o.left,r=n,i=(o.bottom-1)*e+o.left,a=n+(o.right-o.left-1);for(let s=o.top;s<o.bottom;s++){if(o.left>0&&l[r]==l[r-1]||o.right<e&&l[a]==l[a+1])return!0;r+=e,a+=e}for(let s=o.left;s<o.right;s++){if(o.top>0&&l[n]==l[n-e]||o.bottom<t&&l[i]==l[i+e])return!0;n++,i++}return!1}(n,o))return!1;if(t){let l,i,a=e.tr,s={},c=r.c.empty;for(let e=o.top;e<o.bottom;e++)for(let t=o.left;t<o.right;t++){let r=n.map[e*n.width+t],d=o.table.nodeAt(r);if(!s[r])if(s[r]=!0,null==l)l=r,i=d;else{G(d)||(c=c.append(d.content));let e=a.mapping.map(r+o.tableStart);a.delete(e,e+d.nodeSize)}}if(a.setNodeMarkup(l+o.tableStart,null,S($(i.attrs,i.attrs.colspan,o.right-o.left-i.attrs.colspan),"rowspan",o.bottom-o.top)),c.size){let e=l+1+i.content.size,t=G(i)?l+1:e;a.replaceWith(t+o.tableStart,e+o.tableStart,c)}a.setSelection(new M(a.doc.resolve(l+o.tableStart))),t(a)}return!0}function Z(e,t){const l=u(e.schema);return(o=({node:e})=>l[e.type.spec.tableRole],(e,t)=>{let l,n,r=e.selection;if(r instanceof M){if(r.$anchorCell.pos!=r.$headCell.pos)return!1;l=r.$anchorCell.nodeAfter,n=r.$anchorCell.pos}else{if(l=function(e){for(let t=e.depth;t>0;t--){const l=e.node(t).type.spec.tableRole;if("cell"===l||"header_cell"===l)return e.node(t)}return null}(r.$from),!l)return!1;n=w(r.$from).pos}if(1==l.attrs.colspan&&1==l.attrs.rowspan)return!1;if(t){let i=l.attrs,a=[],s=i.colwidth;i.rowspan>1&&(i=S(i,"rowspan",1)),i.colspan>1&&(i=S(i,"colspan",1));let c,d=K(e),h=e.tr;for(let e=0;e<d.right-d.left;e++)a.push(s?S(i,"colwidth",s&&s[e]?[s[e]]:null):i);for(let e=d.top;e<d.bottom;e++){let t=d.map.positionAt(e,d.left,d.table);e==d.top&&(t+=l.nodeSize);for(let n=d.left,r=0;n<d.right;n++,r++)n==d.left&&e==d.top||h.insert(c=h.mapping.map(t+d.tableStart,1),o({node:l,row:e,col:n}).createAndFill(a[r]))}h.setNodeMarkup(n,o({node:l,row:d.top,col:d.left}),a[0]),r instanceof M&&h.setSelection(new M(h.doc.resolve(r.$anchorCell.pos),c&&h.doc.resolve(c))),t(h)}return!0})(e,t);var o}function ee(e,t,l){const o=t.map.cellsInRect({left:0,top:0,right:"row"==e?t.map.width:1,bottom:"column"==e?t.map.height:1});for(let n=0;n<o.length;n++){const e=t.table.nodeAt(o[n]);if(e&&e.type!==l.header_cell)return!1}return!0}function te(e,t){return(t=t||{useDeprecatedLogic:!1}).useDeprecatedLogic?function(e){return function(t,l){if(!g(t))return!1;if(l){let o=u(t.schema),n=K(t),r=t.tr,i=n.map.cellsInRect("column"==e?new h(n.left,0,n.right,n.map.height):"row"==e?new h(0,n.top,n.map.width,n.bottom):n),a=i.map(e=>n.table.nodeAt(e));for(let e=0;e<i.length;e++)a[e].type==o.header_cell&&r.setNodeMarkup(n.tableStart+i[e],o.cell,a[e].attrs);if(0==r.steps.length)for(let e=0;e<i.length;e++)r.setNodeMarkup(n.tableStart+i[e],o.header_cell,a[e].attrs);l(r)}return!0}}(e):function(t,l){if(!g(t))return!1;if(l){let o=u(t.schema),n=K(t),r=t.tr,i=ee("row",n,o),a=ee("column",n,o),s=("column"===e?i:"row"===e&&a)?1:0,c="column"==e?new h(0,s,1,n.map.height):"row"==e?new h(s,0,n.map.width,1):n,d="column"==e?a?o.cell:o.header_cell:"row"==e?i?o.cell:o.header_cell:o.cell;n.map.cellsInRect(c).forEach(e=>{const t=e+n.tableStart,l=r.doc.nodeAt(t);l&&r.setNodeMarkup(t,d,l.attrs)}),l(r)}return!0}}te("row",{useDeprecatedLogic:!0}),te("column",{useDeprecatedLogic:!0});let le=te("cell",{useDeprecatedLogic:!0});function oe(e){return function(t,l){if(!g(t))return!1;let o=function(e,t){if(t<0){let t=e.nodeBefore;if(t)return e.pos-t.nodeSize;for(let l=e.index(-1)-1,o=e.before();l>=0;l--){let t=e.node(-1).child(l);if(t.childCount)return o-1-t.lastChild.nodeSize;o-=t.nodeSize}}else{if(e.index()<e.parent.childCount-1)return e.pos+e.nodeAfter.nodeSize;let t=e.node(-1);for(let l=e.indexAfter(-1),o=e.after();l<t.childCount;l++){let e=t.child(l);if(e.childCount)return o+1;o+=e.nodeSize}}}(b(t),e);if(null!=o){if(l){let e=t.doc.resolve(o);l(t.tr.setSelection(n.h.between(e,(r=e,r.node(0).resolve(r.pos+r.nodeAfter.nodeSize)))).scrollIntoView())}var r;return!0}}}class ne{constructor(e,t){this.node=e,this.cellMinWidth=t,this.dom=document.createElement("div"),this.dom.className="tableWrapper",this.table=this.dom.appendChild(document.createElement("table")),this.colgroup=this.table.appendChild(document.createElement("colgroup")),re(e,this.colgroup,this.table,t),this.contentDOM=this.table.appendChild(document.createElement("tbody"))}update(e){return e.type==this.node.type&&(this.node=e,re(e,this.colgroup,this.table,this.cellMinWidth),!0)}ignoreMutation(e){return"attributes"==e.type&&(e.target==this.table||this.colgroup.contains(e.target))}}function re(e,t,l,o,n,r){let i=0,a=!0,s=t.firstChild,c=e.firstChild;for(let d=0,h=0;d<c.childCount;d++){let{colspan:e,colwidth:l}=c.child(d).attrs;for(let c=0;c<e;c++,h++){let e=n==h?r:l&&l[c],d=e?e+"px":"";i+=e||o,e||(a=!1),s?(s.style.width!=d&&(s.style.width=d),s=s.nextSibling):t.appendChild(document.createElement("col")).style.width=d}}for(;s;){let e=s.nextSibling;s.parentNode.removeChild(s),s=e}a?(l.style.width=i+"px",l.style.minWidth=""):(l.style.width="",l.style.minWidth=i+"px")}const ie=new n.e("tableColumnResizing");function ae({handleWidth:e=5,cellMinWidth:t=25,View:l=ne,lastColumnResizable:o=!0}={}){return new n.d({key:ie,state:{init(e,o){return this.spec.props.nodeViews[u(o.schema).table.name]=(e,o)=>new l(e,t,o),new se(-1,!1)},apply:(e,t)=>t.apply(e)},props:{attributes:e=>ie.getState(e).activeHandle>-1?{class:"resize-cursor"}:null,handleDOMEvents:{mousemove(t,l){!function(e,t,l,o,n){let r=ie.getState(e.state);if(!r.dragging){let o=function(e){for(;e&&"TD"!=e.nodeName&&"TH"!=e.nodeName;)e=e.classList.contains("ProseMirror")?null:e.parentNode;return e}(t.target),i=-1;if(o){let{left:n,right:r}=o.getBoundingClientRect();t.clientX-n<=l?i=ce(e,t,"left"):r-t.clientX<=l&&(i=ce(e,t,"right"))}if(i!=r.activeHandle){if(!n&&-1!==i){let t=e.state.doc.resolve(i),l=t.node(-1),o=p.get(l),n=t.start(-1);if(o.colCount(t.pos-n)+t.nodeAfter.attrs.colspan-1==o.width-1)return}he(e,i)}}}(t,l,e,0,o)},mouseleave(e){!function(e){let t=ie.getState(e.state);t.activeHandle>-1&&!t.dragging&&he(e,-1)}(e)},mousedown(e,l){!function(e,t,l){let o=ie.getState(e.state);if(-1==o.activeHandle||o.dragging)return!1;let n=e.state.doc.nodeAt(o.activeHandle),r=function(e,t,{colspan:l,colwidth:o}){let n=o&&o[o.length-1];if(n)return n;let r=e.domAtPos(t),i=r.node.childNodes[r.offset].offsetWidth,a=l;if(o)for(let s=0;s<l;s++)o[s]&&(i-=o[s],a--);return i/a}(e,o.activeHandle,n.attrs);function i(t){window.removeEventListener("mouseup",i),window.removeEventListener("mousemove",a);let o=ie.getState(e.state);o.dragging&&(function(e,t,l){let o=e.state.doc.resolve(t),n=o.node(-1),r=p.get(n),i=o.start(-1),a=r.colCount(o.pos-i)+o.nodeAfter.attrs.colspan-1,s=e.state.tr;for(let c=0;c<r.height;c++){let e=c*r.width+a;if(c&&r.map[e]==r.map[e-r.width])continue;let t=r.map[e],{attrs:o}=n.nodeAt(t),d=1==o.colspan?0:a-r.colCount(t);if(o.colwidth&&o.colwidth[d]==l)continue;let h=o.colwidth?o.colwidth.slice():pe(o.colspan);h[d]=l,s.setNodeMarkup(i+t,null,S(o,"colwidth",h))}s.docChanged&&e.dispatch(s)}(e,o.activeHandle,de(o.dragging,t,l)),e.dispatch(e.state.tr.setMeta(ie,{setDragging:null})))}function a(t){if(!t.which)return i(t);let o=ie.getState(e.state),n=de(o.dragging,t,l);!function(e,t,l,o){let n=e.state.doc.resolve(t),r=n.node(-1),i=n.start(-1),a=p.get(r).colCount(n.pos-i)+n.nodeAfter.attrs.colspan-1,s=e.domAtPos(n.start(-1)).node;for(;"TABLE"!=s.nodeName;)s=s.parentNode;re(r,s.firstChild,s,o,a,l)}(e,o.activeHandle,n,l)}e.dispatch(e.state.tr.setMeta(ie,{setDragging:{startX:t.clientX,startWidth:r}})),window.addEventListener("mouseup",i),window.addEventListener("mousemove",a),t.preventDefault()}(e,l,t)}},decorations(e){let t=ie.getState(e);if(t.activeHandle>-1)return function(e,t){let l=[],o=e.doc.resolve(t),n=o.node(-1),r=p.get(n),i=o.start(-1),s=r.colCount(o.pos-i)+o.nodeAfter.attrs.colspan;for(let c=0;c<r.height;c++){let e=s+c*r.width-1;if(!(s!=r.width&&r.map[e]==r.map[e+1]||0!=c&&r.map[e-1]==r.map[e-1-r.width])){let t=r.map[e],o=i+t+n.nodeAt(t).nodeSize-1,s=document.createElement("div");s.className="column-resize-handle",l.push(a.a.widget(o,s))}}return a.b.create(e.doc,l)}(e,t.activeHandle)},nodeViews:{}}})}class se{constructor(e,t){this.activeHandle=e,this.dragging=t}apply(e){let t=this,l=e.getMeta(ie);if(l&&null!=l.setHandle)return new se(l.setHandle,null);if(l&&void 0!==l.setDragging)return new se(t.activeHandle,l.setDragging);if(t.activeHandle>-1&&e.docChanged){let l=e.mapping.map(t.activeHandle,-1);C(e.doc.resolve(l))||(l=null),t=new se(l,t.dragging)}return t}}function ce(e,t,l){let o=e.posAtCoords({left:t.clientX,top:t.clientY});if(!o)return-1;let{pos:n}=o,r=w(e.state.doc.resolve(n));if(!r)return-1;if("right"==l)return r.pos;let i=p.get(r.node(-1)),a=r.start(-1),s=i.map.indexOf(r.pos-a);return s%i.width==0?-1:a+i.map[s-1]}function de(e,t,l){return Math.max(l,e.startWidth+(t.clientX-e.startX))}function he(e,t){e.dispatch(e.state.tr.setMeta(ie,{setHandle:t}))}function pe(e){let t=[];for(let l=0;l<e;l++)t.push(0);return t}function fe({allowTableNodeSelection:e=!1}={}){return new n.d({key:m,state:{init:()=>null,apply(e,t){let l=e.getMeta(m);if(null!=l)return-1==l?null:l;if(null==t||!e.docChanged)return t;let{deleted:o,pos:n}=e.mapping.mapResult(t);return o?null:n}},props:{decorations:N,handleDOMEvents:{mousedown:F},createSelectionBetween(e){if(null!=m.getState(e.state))return e.state.selection},handleTripleClick:_,handleKeyDown:E,handlePaste:B},appendTransaction:(t,l,o)=>function(e,t,l){let o,r,i=(t||e).selection,a=(t||e).doc;if(i instanceof n.c&&(r=i.node.type.spec.tableRole)){if("cell"==r||"header_cell"==r)o=M.create(a,i.from);else if("row"==r){let e=a.resolve(i.from+1);o=M.rowSelection(e,e)}else if(!l){let e=p.get(i.node),t=i.from+1;o=M.create(a,t+1,t+e.map[e.width*e.height-1])}}else i instanceof n.h&&function({$from:e,$to:t}){if(e.pos==t.pos||e.pos<e.pos-6)return!1;let l=e.pos,o=t.pos,n=e.depth;for(;n>=0&&!(e.after(n+1)<e.end(n));n--,l++);for(let r=t.depth;r>=0&&!(t.before(r+1)>t.start(r));r--,o--);return l==o&&/row|table/.test(e.node(n).type.spec.tableRole)}(i)?o=n.h.create(a,i.from):i instanceof n.h&&function({$from:e,$to:t}){let l,o;for(let n=e.depth;n>0;n--){let t=e.node(n);if("cell"===t.type.spec.tableRole||"header_cell"===t.type.spec.tableRole){l=t;break}}for(let n=t.depth;n>0;n--){let e=t.node(n);if("cell"===e.type.spec.tableRole||"header_cell"===e.type.spec.tableRole){o=e;break}}return l!==o&&0===t.parentOffset}(i)&&(o=n.h.create(a,i.$from.start(),i.$from.end()));return o&&(t||(t=e.tr)).setSelection(o),t}(o,X(o,l),e)})}function ue(e,t,l,o,n,r){let i=0,a=!0,s=t.firstChild;const c=e.firstChild;for(let d=0,h=0;d<c.childCount;d+=1){const{colspan:e,colwidth:l}=c.child(d).attrs;for(let c=0;c<e;c+=1,h+=1){const e=n===h?r:l&&l[c],d=e?`${e}px`:"";i+=e||o,e||(a=!1),s?(s.style.width!==d&&(s.style.width=d),s=s.nextSibling):t.appendChild(document.createElement("col")).style.width=d}}for(;s;){const e=s.nextSibling;s.parentNode.removeChild(s),s=e}a?(l.style.width=`${i}px`,l.style.minWidth=""):(l.style.width="",l.style.minWidth=`${i}px`)}class me{constructor(e,t){this.node=e,this.cellMinWidth=t,this.dom=document.createElement("div"),this.dom.className="tableWrapper",this.table=this.dom.appendChild(document.createElement("table")),this.colgroup=this.table.appendChild(document.createElement("colgroup")),ue(e,this.colgroup,this.table,t),this.contentDOM=this.table.appendChild(document.createElement("tbody"))}update(e){return e.type===this.node.type&&(this.node=e,ue(e,this.colgroup,this.table,this.cellMinWidth),!0)}ignoreMutation(e){return"attributes"===e.type&&(e.target===this.table||this.colgroup.contains(e.target))}}function we(e,t){return t?e.createChecked(null,t):e.createAndFill()}function ge(e,t,l,o,n){const r=function(e){if(e.cached.tableNodeTypes)return e.cached.tableNodeTypes;const t={};return Object.keys(e.nodes).forEach(l=>{const o=e.nodes[l];o.spec.tableRole&&(t[o.spec.tableRole]=o)}),e.cached.tableNodeTypes=t,t}(e),i=[],a=[];for(let c=0;c<l;c+=1){const e=we(r.cell,n);if(e&&a.push(e),o){const e=we(r.header_cell,n);e&&i.push(e)}}const s=[];for(let c=0;c<t;c+=1)s.push(r.row.createChecked(null,o&&0===c?i:a));return r.table.createChecked(null,s)}const be=({editor:e})=>{const{selection:t}=e.state;if(!(t instanceof M))return!1;let l=0;const n=Object(o.findParentNodeClosestToPos)(t.ranges[0].$from,e=>"table"===e.type.name);return null==n||n.node.descendants(e=>{if("table"===e.type.name)return!1;["tableCell","tableHeader"].includes(e.type.name)&&(l+=1)}),l===t.ranges.length&&(e.commands.deleteTable(),!0)},Ce=o.Node.create({name:"table",addOptions:()=>({HTMLAttributes:{},resizable:!1,handleWidth:5,cellMinWidth:25,View:me,lastColumnResizable:!0,allowTableNodeSelection:!1}),content:"tableRow+",tableRole:"table",isolating:!0,group:"block",parseHTML:()=>[{tag:"table"}],renderHTML({HTMLAttributes:e}){return["table",Object(o.mergeAttributes)(this.options.HTMLAttributes,e),["tbody",0]]},addCommands:()=>({insertTable:({rows:e=3,cols:t=3,withHeaderRow:l=!0}={})=>({tr:o,dispatch:r,editor:i})=>{const a=ge(i.schema,e,t,l);if(r){const e=o.selection.anchor+1;o.replaceSelectionWith(a).scrollIntoView().setSelection(n.h.near(o.doc.resolve(e)))}return!0},addColumnBefore:()=>({state:e,dispatch:t})=>function(e,t){if(!g(e))return!1;if(t){let l=K(e);t(q(e.tr,l,l.left))}return!0}(e,t),addColumnAfter:()=>({state:e,dispatch:t})=>function(e,t){if(!g(e))return!1;if(t){let l=K(e);t(q(e.tr,l,l.right))}return!0}(e,t),deleteColumn:()=>({state:e,dispatch:t})=>function(e,t){if(!g(e))return!1;if(t){let l=K(e),o=e.tr;if(0==l.left&&l.right==l.map.width)return!1;for(let e=l.right-1;J(o,l,e),e!=l.left;e--)l.table=l.tableStart?o.doc.nodeAt(l.tableStart-1):o.doc,l.map=p.get(l.table);t(o)}return!0}(e,t),addRowBefore:()=>({state:e,dispatch:t})=>function(e,t){if(!g(e))return!1;if(t){let l=K(e);t(Y(e.tr,l,l.top))}return!0}(e,t),addRowAfter:()=>({state:e,dispatch:t})=>function(e,t){if(!g(e))return!1;if(t){let l=K(e);t(Y(e.tr,l,l.bottom))}return!0}(e,t),deleteRow:()=>({state:e,dispatch:t})=>function(e,t){if(!g(e))return!1;if(t){let l=K(e),o=e.tr;if(0==l.top&&l.bottom==l.map.height)return!1;for(let e=l.bottom-1;U(o,l,e),e!=l.top;e--)l.table=l.tableStart?o.doc.nodeAt(l.tableStart-1):o.doc,l.map=p.get(l.table);t(o)}return!0}(e,t),deleteTable:()=>({state:e,dispatch:t})=>function(e,t){let l=e.selection.$anchor;for(let o=l.depth;o>0;o--)if("table"==l.node(o).type.spec.tableRole)return t&&t(e.tr.delete(l.before(o),l.after(o)).scrollIntoView()),!0;return!1}(e,t),mergeCells:()=>({state:e,dispatch:t})=>Q(e,t),splitCell:()=>({state:e,dispatch:t})=>Z(e,t),toggleHeaderColumn:()=>({state:e,dispatch:t})=>te("column")(e,t),toggleHeaderRow:()=>({state:e,dispatch:t})=>te("row")(e,t),toggleHeaderCell:()=>({state:e,dispatch:t})=>le(e,t),mergeOrSplit:()=>({state:e,dispatch:t})=>!!Q(e,t)||Z(e,t),setCellAttribute:(e,t)=>({state:l,dispatch:o})=>function(e,t){return function(l,o){if(!g(l))return!1;let n=b(l);if(n.nodeAfter.attrs[e]===t)return!1;if(o){let r=l.tr;l.selection instanceof M?l.selection.forEachCell((l,o)=>{l.attrs[e]!==t&&r.setNodeMarkup(o,null,S(l.attrs,e,t))}):r.setNodeMarkup(n.pos,null,S(n.nodeAfter.attrs,e,t)),o(r)}return!0}}(e,t)(l,o),goToNextCell:()=>({state:e,dispatch:t})=>oe(1)(e,t),goToPreviousCell:()=>({state:e,dispatch:t})=>oe(-1)(e,t),fixTables:()=>({state:e,dispatch:t})=>(t&&X(e),!0),setCellSelection:e=>({tr:t,dispatch:l})=>{if(l){const l=M.create(t.doc,e.anchorCell,e.headCell);t.setSelection(l)}return!0}}),addKeyboardShortcuts(){return{Tab:()=>!!this.editor.commands.goToNextCell()||!!this.editor.can().addRowAfter()&&this.editor.chain().addRowAfter().goToNextCell().run(),"Shift-Tab":()=>this.editor.commands.goToPreviousCell(),Backspace:be,"Mod-Backspace":be,Delete:be,"Mod-Delete":be}},addProseMirrorPlugins(){return[...this.options.resizable&&this.editor.isEditable?[ae({handleWidth:this.options.handleWidth,cellMinWidth:this.options.cellMinWidth,View:this.options.View,lastColumnResizable:this.options.lastColumnResizable})]:[],fe({allowTableNodeSelection:this.options.allowTableNodeSelection})]},extendNodeSchema(e){const t={name:e.name,options:e.options,storage:e.storage};return{tableRole:Object(o.callOrReturn)(Object(o.getExtensionField)(e,"tableRole",t))}}})}}]);