function $(){}const V=t=>t;function kt(t,e){for(const n in e)t[n]=e[n];return t}function ct(t){return t()}function it(){return Object.create(null)}function A(t){t.forEach(ct)}function O(t){return typeof t=="function"}function Vt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let B;function Xt(t,e){return B||(B=document.createElement("a")),B.href=e,t===B.href}function Et(t){return Object.keys(t).length===0}function Nt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Yt(t,e,n){t.$$.on_destroy.push(Nt(e,n))}function Zt(t,e,n,i){if(t){const s=lt(t,e,n,i);return t[0](s)}}function lt(t,e,n,i){return t[1]&&i?kt(n.ctx.slice(),t[1](i(e))):n.ctx}function te(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function ee(t,e,n,i,s,o){if(s){const r=lt(e,n,i,o);t.p(r,s)}}function ne(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ie(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function se(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function re(t){const e={};for(const n in t)e[n]=!0;return e}function oe(t){return t??""}function ce(t){return t&&O(t.destroy)?t.destroy:$}const at=typeof window<"u";let X=at?()=>window.performance.now():()=>Date.now(),Y=at?t=>requestAnimationFrame(t):$;const T=new Set;function ut(t){T.forEach(e=>{e.c(t)||(T.delete(e),e.f())}),T.size!==0&&Y(ut)}function Z(t){let e;return T.size===0&&Y(ut),{promise:new Promise(n=>{T.add(e={c:t,f:n})}),abort(){T.delete(e)}}}let W=!1;function Tt(){W=!0}function At(){W=!1}function Ct(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function St(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:Ct(1,s,_=>e[n[_]].claim_order,a))-1;i[c]=n[f]+1;const u=f+1;n[u]=c,s=Math.max(u,s)}const o=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<o.length&&r[c].claim_order>=o[a].claim_order;)a++;const f=a<o.length?o[a]:null;t.insertBefore(r[c],f)}}function jt(t,e){t.appendChild(e)}function ft(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Dt(t){const e=tt("style");return Mt(ft(t),e),e.sheet}function Mt(t,e){return jt(t.head||t,e),e.sheet}function Ht(t,e){if(W){for(St(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Rt(t,e,n){t.insertBefore(e,n||null)}function Ot(t,e,n){W&&!n?Ht(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function M(t){t.parentNode&&t.parentNode.removeChild(t)}function le(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function _t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function et(t){return document.createTextNode(t)}function ae(){return et(" ")}function ue(){return et("")}function fe(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function _e(t){return function(e){return e.preventDefault(),t.call(this,e)}}function de(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function he(t){return function(e){e.target===this&&t.call(this,e)}}function dt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function me(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:dt(t,i,e[i])}function pe(t,e){for(const n in e)dt(t,n,e[n])}function ye(t){return t===""?null:+t}function Pt(t){return Array.from(t.childNodes)}function ht(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function mt(t,e,n,i,s=!1){ht(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function pt(t,e,n,i){return mt(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ge(t,e,n){return pt(t,e,n,tt)}function $e(t,e,n){return pt(t,e,n,_t)}function Bt(t,e){return mt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>et(e),!0)}function xe(t){return Bt(t," ")}function st(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function we(t,e){const n=st(t,"HTML_TAG_START",0),i=st(t,"HTML_TAG_END",n);if(n===i)return new rt(void 0,e);ht(t);const s=t.splice(n,i-n+1);M(s[0]),M(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new rt(o,e)}function be(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ve(t,e){t.value=e??""}function ke(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ee(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function Ne(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];i.selected=~e.indexOf(i.__value)}}function Te(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function Ae(t,e,n){t.classList[n?"add":"remove"](e)}function yt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Ce(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Lt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=_t(n.nodeName):this.e=tt(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Rt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(M)}}class rt extends Lt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Ot(this.t,this.n[n],e)}}function Se(t,e){return new t(e)}const z=new Map;let F=0;function qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function zt(t,e){const n={stylesheet:Dt(e),rules:{}};return z.set(t,n),n}function nt(t,e,n,i,s,o,r,l=0){const c=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=c){const y=e+(n-e)*o(m);a+=m*100+`%{${r(y,1-y)}}
`}const f=a+`100% {${r(n,1-n)}}
}`,u=`__svelte_${qt(f)}_${l}`,_=ft(t),{stylesheet:d,rules:h}=z.get(_)||zt(_,t);h[u]||(h[u]=!0,d.insertRule(`@keyframes ${u} ${f}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${u} ${i}ms linear ${s}ms 1 both`,F+=1,u}function G(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),F-=s,F||Ft())}function Ft(){Y(()=>{F||(z.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&M(e)}),z.clear())})}function je(t,e,n,i){if(!e)return $;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return $;const{delay:o=0,duration:r=300,easing:l=V,start:c=X()+o,end:a=c+r,tick:f=$,css:u}=n(t,{from:e,to:s},i);let _=!0,d=!1,h;function g(){u&&(h=nt(t,0,1,r,o,l,u)),o||(d=!0)}function m(){u&&G(t,h),_=!1}return Z(y=>{if(!d&&y>=c&&(d=!0),d&&y>=a&&(f(1,0),m()),!_)return!1;if(d){const k=y-c,b=0+1*l(k/r);f(b,1-b)}return!0}),g(),f(0,1),m}function De(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Gt(t,s)}}function Gt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let H;function D(t){H=t}function C(){if(!H)throw new Error("Function called outside component initialization");return H}function Me(t){C().$$.on_mount.push(t)}function He(t){C().$$.after_update.push(t)}function Re(t){C().$$.on_destroy.push(t)}function Oe(){const t=C();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=yt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function Pe(t,e){return C().$$.context.set(t,e),e}function Be(t){return C().$$.context.get(t)}function Le(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const N=[],ot=[],L=[],Q=[],gt=Promise.resolve();let U=!1;function $t(){U||(U=!0,gt.then(xt))}function qe(){return $t(),gt}function R(t){L.push(t)}function ze(t){Q.push(t)}const K=new Set;let E=0;function xt(){if(E!==0)return;const t=H;do{try{for(;E<N.length;){const e=N[E];E++,D(e),It(e.$$)}}catch(e){throw N.length=0,E=0,e}for(D(null),N.length=0,E=0;ot.length;)ot.pop()();for(let e=0;e<L.length;e+=1){const n=L[e];K.has(n)||(K.add(n),n())}L.length=0}while(N.length);for(;Q.length;)Q.pop()();U=!1,K.clear(),D(t)}function It(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}let j;function wt(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function I(t,e,n){t.dispatchEvent(yt(`${e?"intro":"outro"}${n}`))}const q=new Set;let v;function Fe(){v={r:0,c:[],p:v}}function Ge(){v.r||A(v.c),v=v.p}function bt(t,e){t&&t.i&&(q.delete(t),t.i(e))}function Wt(t,e,n,i){if(t&&t.o){if(q.has(t))return;q.add(t),v.c.push(()=>{q.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const vt={duration:0};function Ie(t,e,n){const i={direction:"in"};let s=e(t,n,i),o=!1,r,l,c=0;function a(){r&&G(t,r)}function f(){const{delay:_=0,duration:d=300,easing:h=V,tick:g=$,css:m}=s||vt;m&&(r=nt(t,0,1,d,_,h,m,c++)),g(0,1);const y=X()+_,k=y+d;l&&l.abort(),o=!0,R(()=>I(t,!0,"start")),l=Z(b=>{if(o){if(b>=k)return g(1,0),I(t,!0,"end"),a(),o=!1;if(b>=y){const S=h((b-y)/d);g(S,1-S)}}return o})}let u=!1;return{start(){u||(u=!0,G(t),O(s)?(s=s(i),wt().then(f)):f())},invalidate(){u=!1},end(){o&&(a(),o=!1)}}}function We(t,e,n){const i={direction:"out"};let s=e(t,n,i),o=!0,r;const l=v;l.r+=1;function c(){const{delay:a=0,duration:f=300,easing:u=V,tick:_=$,css:d}=s||vt;d&&(r=nt(t,1,0,f,a,u,d));const h=X()+a,g=h+f;R(()=>I(t,!1,"start")),Z(m=>{if(o){if(m>=g)return _(0,1),I(t,!1,"end"),--l.r||A(l.c),!1;if(m>=h){const y=u((m-h)/f);_(1-y,y)}}return o})}return O(s)?wt().then(()=>{s=s(i),c()}):c(),{end(a){a&&s.tick&&s.tick(1,0),o&&(r&&G(t,r),o=!1)}}}const Je=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Jt(t,e){Wt(t,1,1,()=>{e.delete(t.key)})}function Ke(t,e){t.f(),Jt(t,e)}function Qe(t,e,n,i,s,o,r,l,c,a,f,u){let _=t.length,d=o.length,h=_;const g={};for(;h--;)g[t[h].key]=h;const m=[],y=new Map,k=new Map;for(h=d;h--;){const p=u(s,o,h),x=n(p);let w=r.get(x);w?i&&w.p(p,e):(w=a(x,p),w.c()),y.set(x,m[h]=w),x in g&&k.set(x,Math.abs(h-g[x]))}const b=new Set,S=new Set;function J(p){bt(p,1),p.m(l,f),r.set(p.key,p),f=p.first,d--}for(;_&&d;){const p=m[d-1],x=t[_-1],w=p.key,P=x.key;p===x?(f=p.first,_--,d--):y.has(P)?!r.has(w)||b.has(w)?J(p):S.has(P)?_--:k.get(w)>k.get(P)?(S.add(w),J(p)):(b.add(P),_--):(c(x,r),_--)}for(;_--;){const p=t[_];y.has(p.key)||c(p,r)}for(;d;)J(m[d-1]);return m}function Ue(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],l=e[o];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[o]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ve(t){return typeof t=="object"&&t!==null?t:{}}function Xe(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ye(t){t&&t.c()}function Ze(t,e){t&&t.l(e)}function Kt(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||R(()=>{const r=t.$$.on_mount.map(ct).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...r):A(r),t.$$.on_mount=[]}),o.forEach(R)}function Qt(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ut(t,e){t.$$.dirty[0]===-1&&(N.push(t),$t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tn(t,e,n,i,s,o,r,l=[-1]){const c=H;D(t);const a=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:s,bound:it(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:it(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(u,_,...d)=>{const h=d.length?d[0]:_;return a.ctx&&s(a.ctx[u],a.ctx[u]=h)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](h),f&&Ut(t,u)),_}):[],a.update(),f=!0,A(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){Tt();const u=Pt(e.target);a.fragment&&a.fragment.l(u),u.forEach(M)}else a.fragment&&a.fragment.c();e.intro&&bt(t.$$.fragment),Kt(t,e.target,e.anchor,e.customElement),At(),xt()}D(c)}class en{$destroy(){Qt(this,1),this.$destroy=$}$on(e,n){if(!O(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{A as $,qe as A,$ as B,_t as C,$e as D,Xt as E,Ht as F,Yt as G,Zt as H,ee as I,ne as J,te as K,se as L,kt as M,ie as N,Le as O,ot as P,me as Q,fe as R,en as S,Ue as T,Ce as U,Xe as V,ze as W,le as X,Pe as Y,Be as Z,Re as _,ae as a,ce as a0,O as a1,ye as a2,Te as a3,R as a4,Ne as a5,Ee as a6,ve as a7,Ve as a8,Ae as a9,Ie as aa,We as ab,Oe as ac,re as ad,Je as ae,pe as af,X as ag,Z as ah,oe as ai,he as aj,de as ak,Qe as al,_e as am,De as an,je as ao,Ke as ap,rt as aq,we as ar,H as as,Ot as b,xe as c,Ge as d,ue as e,bt as f,Fe as g,M as h,tn as i,He as j,tt as k,ge as l,Pt as m,dt as n,Me as o,ke as p,et as q,Bt as r,Vt as s,Wt as t,be as u,Se as v,Ye as w,Ze as x,Kt as y,Qt as z};
