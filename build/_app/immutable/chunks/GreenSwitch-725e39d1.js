import{S as w,i as I,s as V,M as v,N as y,k as S,w as m,a as q,l as G,m as L,x as p,c as z,h as u,n as C,b as $,y as d,F as D,O as E,f as h,t as g,z as b,q as F,r as M,u as N}from"./index-e15c9d95.js";import{L as O,c as j}from"./Grids-51487c7a.js";function A(n){let e;return{c(){e=F(n[1])},l(t){e=M(t,n[1])},m(t,s){$(t,e,s)},p(t,s){s&2&&N(e,t[1])},d(t){t&&u(e)}}}function B(n){let e,t,s,c,r,l;t=new O({props:{class:"my-auto",for:n[1]+"Input",$$slots:{default:[A]},$$scope:{ctx:n}}});function k(a){n[2](a)}let _={class:"my-auto",id:n[1]+"Input",type:"switch"};return n[0]!==void 0&&(_.checked=n[0]),c=new j({props:_}),v.push(()=>y(c,"checked",k)),{c(){e=S("div"),m(t.$$.fragment),s=q(),m(c.$$.fragment),this.h()},l(a){e=G(a,"DIV",{class:!0});var i=L(e);p(t.$$.fragment,i),s=z(i),p(c.$$.fragment,i),i.forEach(u),this.h()},h(){C(e,"class","d-flex flex-row gap-1")},m(a,i){$(a,e,i),d(t,e,null),D(e,s),d(c,e,null),l=!0},p(a,[i]){const o={};i&2&&(o.for=a[1]+"Input"),i&10&&(o.$$scope={dirty:i,ctx:a}),t.$set(o);const f={};i&2&&(f.id=a[1]+"Input"),!r&&i&1&&(r=!0,f.checked=a[0],E(()=>r=!1)),c.$set(f)},i(a){l||(h(t.$$.fragment,a),h(c.$$.fragment,a),l=!0)},o(a){g(t.$$.fragment,a),g(c.$$.fragment,a),l=!1},d(a){a&&u(e),b(t),b(c)}}}function H(n,e,t){let{checkVar:s=!1}=e,{label:c="default"}=e;function r(l){s=l,t(0,s)}return n.$$set=l=>{"checkVar"in l&&t(0,s=l.checkVar),"label"in l&&t(1,c=l.label)},[s,c,r]}class P extends w{constructor(e){super(),I(this,e,H,B,V,{checkVar:0,label:1})}}export{P as G};
