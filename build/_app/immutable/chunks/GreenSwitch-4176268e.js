import{S as w,i as I,s as V,P as v,V as y,k as S,w as _,a as q,l as G,m as L,x as p,c as z,h as u,n as C,b as $,y as d,F as D,W as E,f as h,t as g,z as b,q as F,r as P,u as W}from"./index-02e1f1cb.js";import{L as j,b as A}from"./Grids-a06cd819.js";import"./Offcanvas.svelte_svelte_type_style_lang-198a5440.js";function B(n){let e;return{c(){e=F(n[1])},l(t){e=P(t,n[1])},m(t,s){$(t,e,s)},p(t,s){s&2&&W(e,t[1])},d(t){t&&u(e)}}}function H(n){let e,t,s,i,r,l;t=new j({props:{class:"my-auto",for:n[1]+"Input",$$slots:{default:[B]},$$scope:{ctx:n}}});function k(a){n[2](a)}let m={class:"my-auto",id:n[1]+"Input",type:"switch"};return n[0]!==void 0&&(m.checked=n[0]),i=new A({props:m}),v.push(()=>y(i,"checked",k)),{c(){e=S("div"),_(t.$$.fragment),s=q(),_(i.$$.fragment),this.h()},l(a){e=G(a,"DIV",{class:!0});var c=L(e);p(t.$$.fragment,c),s=z(c),p(i.$$.fragment,c),c.forEach(u),this.h()},h(){C(e,"class","d-flex flex-row gap-1")},m(a,c){$(a,e,c),d(t,e,null),D(e,s),d(i,e,null),l=!0},p(a,[c]){const o={};c&2&&(o.for=a[1]+"Input"),c&10&&(o.$$scope={dirty:c,ctx:a}),t.$set(o);const f={};c&2&&(f.id=a[1]+"Input"),!r&&c&1&&(r=!0,f.checked=a[0],E(()=>r=!1)),i.$set(f)},i(a){l||(h(t.$$.fragment,a),h(i.$$.fragment,a),l=!0)},o(a){g(t.$$.fragment,a),g(i.$$.fragment,a),l=!1},d(a){a&&u(e),b(t),b(i)}}}function J(n,e,t){let{checkVar:s=!1}=e,{label:i="default"}=e;function r(l){s=l,t(0,s)}return n.$$set=l=>{"checkVar"in l&&t(0,s=l.checkVar),"label"in l&&t(1,i=l.label)},[s,i,r]}class O extends w{constructor(e){super(),I(this,e,J,H,V,{checkVar:0,label:1})}}export{O as G};
