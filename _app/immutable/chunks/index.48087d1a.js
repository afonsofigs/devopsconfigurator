function $(){}const V=t=>t;function kt(t,e){for(const n in e)t[n]=e[n];return t}function lt(t){return t()}function st(){return Object.create(null)}function k(t){t.forEach(lt)}function H(t){return typeof t=="function"}function Zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let B;function te(t,e){return B||(B=document.createElement("a")),B.href=e,t===B.href}function Tt(t){return Object.keys(t).length===0}function Nt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ee(t,e,n){t.$$.on_destroy.push(Nt(e,n))}function ne(t,e,n,i){if(t){const s=at(t,e,n,i);return t[0](s)}}function at(t,e,n,i){return t[1]&&i?kt(n.ctx.slice(),t[1](i(e))):n.ctx}function ie(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function se(t,e,n,i,s,o){if(s){const r=at(e,n,i,o);t.p(r,s)}}function re(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function oe(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ce(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function le(t){const e={};for(const n in t)e[n]=!0;return e}function ae(t){return t??""}function ue(t){return t&&H(t.destroy)?t.destroy:$}const ut=typeof window<"u";let X=ut?()=>window.performance.now():()=>Date.now(),Y=ut?t=>requestAnimationFrame(t):$;const A=new Set;function ft(t){A.forEach(e=>{e.c(t)||(A.delete(e),e.f())}),A.size!==0&&Y(ft)}function Z(t){let e;return A.size===0&&Y(ft),{promise:new Promise(n=>{A.add(e={c:t,f:n})}),abort(){A.delete(e)}}}const fe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let W=!1;function At(){W=!0}function Ct(){W=!1}function St(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:St(1,s,_=>e[n[_]].claim_order,a))-1;i[c]=n[f]+1;const u=f+1;n[u]=c,s=Math.max(u,s)}const o=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<o.length&&r[c].claim_order>=o[a].claim_order;)a++;const f=a<o.length?o[a]:null;t.insertBefore(r[c],f)}}function jt(t,e){t.appendChild(e)}function _t(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Dt(t){const e=tt("style");return Ot(_t(t),e),e.sheet}function Ot(t,e){return jt(t.head||t,e),e.sheet}function Pt(t,e){if(W){for(Mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Lt(t,e,n){t.insertBefore(e,n||null)}function Ht(t,e,n){W&&!n?Pt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function O(t){t.parentNode&&t.parentNode.removeChild(t)}function _e(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function dt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function et(t){return document.createTextNode(t)}function de(){return et(" ")}function he(){return et("")}function me(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function pe(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ye(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function ge(t){return function(e){e.target===this&&t.call(this,e)}}function ht(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Rt=["width","height"];function $e(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Rt.indexOf(i)===-1?t[i]=e[i]:ht(t,i,e[i])}function xe(t,e){for(const n in e)ht(t,n,e[n])}function be(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function we(t){return t===""?null:+t}function Bt(t){return Array.from(t.childNodes)}function mt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function pt(t,e,n,i,s=!1){mt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function yt(t,e,n,i){return pt(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Ee(t,e,n){return yt(t,e,n,tt)}function ve(t,e,n){return yt(t,e,n,dt)}function qt(t,e){return pt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>et(e),!0)}function ke(t){return qt(t," ")}function rt(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Te(t,e){const n=rt(t,"HTML_TAG_START",0),i=rt(t,"HTML_TAG_END",n);if(n===i)return new ot(void 0,e);mt(t);const s=t.splice(n,i-n+1);O(s[0]),O(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new ot(o,e)}function Ne(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ae(t,e){t.value=e??""}function Ce(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Se(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Me(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];i.selected=~e.indexOf(i.__value)}}function je(t){const e=t.querySelector(":checked");return e&&e.__value}function De(t,e,n){t.classList[n?"add":"remove"](e)}function gt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Oe(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class zt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=dt(n.nodeName):this.e=tt(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Lt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(O)}}class ot extends zt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Ht(this.t,this.n[n],e)}}function Pe(t,e){return new t(e)}const z=new Map;let F=0;function Ft(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Gt(t,e){const n={stylesheet:Dt(e),rules:{}};return z.set(t,n),n}function nt(t,e,n,i,s,o,r,l=0){const c=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=c){const y=e+(n-e)*o(m);a+=m*100+`%{${r(y,1-y)}}
`}const f=a+`100% {${r(n,1-n)}}
}`,u=`__svelte_${Ft(f)}_${l}`,_=_t(t),{stylesheet:d,rules:h}=z.get(_)||Gt(_,t);h[u]||(h[u]=!0,d.insertRule(`@keyframes ${u} ${f}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${u} ${i}ms linear ${s}ms 1 both`,F+=1,u}function G(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),F-=s,F||It())}function It(){Y(()=>{F||(z.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&O(e)}),z.clear())})}function Le(t,e,n,i){if(!e)return $;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return $;const{delay:o=0,duration:r=300,easing:l=V,start:c=X()+o,end:a=c+r,tick:f=$,css:u}=n(t,{from:e,to:s},i);let _=!0,d=!1,h;function g(){u&&(h=nt(t,0,1,r,o,l,u)),o||(d=!0)}function m(){u&&G(t,h),_=!1}return Z(y=>{if(!d&&y>=c&&(d=!0),d&&y>=a&&(f(1,0),m()),!_)return!1;if(d){const v=y-c,w=0+1*l(v/r);f(w,1-w)}return!0}),g(),f(0,1),m}function He(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Wt(t,s)}}function Wt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let P;function D(t){P=t}function S(){if(!P)throw new Error("Function called outside component initialization");return P}function Re(t){S().$$.on_mount.push(t)}function Be(t){S().$$.after_update.push(t)}function qe(t){S().$$.on_destroy.push(t)}function ze(){const t=S();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=gt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function Fe(t,e){return S().$$.context.set(t,e),e}function Ge(t){return S().$$.context.get(t)}function Ie(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const N=[],ct=[];let C=[];const Q=[],$t=Promise.resolve();let U=!1;function xt(){U||(U=!0,$t.then(bt))}function We(){return xt(),$t}function L(t){C.push(t)}function Je(t){Q.push(t)}const K=new Set;let T=0;function bt(){if(T!==0)return;const t=P;do{try{for(;T<N.length;){const e=N[T];T++,D(e),Jt(e.$$)}}catch(e){throw N.length=0,T=0,e}for(D(null),N.length=0,T=0;ct.length;)ct.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];K.has(n)||(K.add(n),n())}C.length=0}while(N.length);for(;Q.length;)Q.pop()();U=!1,K.clear(),D(t)}function Jt(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}function Kt(t){const e=[],n=[];C.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),C=e}let j;function wt(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function I(t,e,n){t.dispatchEvent(gt(`${e?"intro":"outro"}${n}`))}const q=new Set;let E;function Ke(){E={r:0,c:[],p:E}}function Qe(){E.r||k(E.c),E=E.p}function Et(t,e){t&&t.i&&(q.delete(t),t.i(e))}function Qt(t,e,n,i){if(t&&t.o){if(q.has(t))return;q.add(t),E.c.push(()=>{q.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const vt={duration:0};function Ue(t,e,n){const i={direction:"in"};let s=e(t,n,i),o=!1,r,l,c=0;function a(){r&&G(t,r)}function f(){const{delay:_=0,duration:d=300,easing:h=V,tick:g=$,css:m}=s||vt;m&&(r=nt(t,0,1,d,_,h,m,c++)),g(0,1);const y=X()+_,v=y+d;l&&l.abort(),o=!0,L(()=>I(t,!0,"start")),l=Z(w=>{if(o){if(w>=v)return g(1,0),I(t,!0,"end"),a(),o=!1;if(w>=y){const M=h((w-y)/d);g(M,1-M)}}return o})}let u=!1;return{start(){u||(u=!0,G(t),H(s)?(s=s(i),wt().then(f)):f())},invalidate(){u=!1},end(){o&&(a(),o=!1)}}}function Ve(t,e,n){const i={direction:"out"};let s=e(t,n,i),o=!0,r;const l=E;l.r+=1;function c(){const{delay:a=0,duration:f=300,easing:u=V,tick:_=$,css:d}=s||vt;d&&(r=nt(t,1,0,f,a,u,d));const h=X()+a,g=h+f;L(()=>I(t,!1,"start")),Z(m=>{if(o){if(m>=g)return _(0,1),I(t,!1,"end"),--l.r||k(l.c),!1;if(m>=h){const y=u((m-h)/f);_(1-y,y)}}return o})}return H(s)?wt().then(()=>{s=s(i),c()}):c(),{end(a){a&&s.tick&&s.tick(1,0),o&&(r&&G(t,r),o=!1)}}}function Ut(t,e){Qt(t,1,1,()=>{e.delete(t.key)})}function Xe(t,e){t.f(),Ut(t,e)}function Ye(t,e,n,i,s,o,r,l,c,a,f,u){let _=t.length,d=o.length,h=_;const g={};for(;h--;)g[t[h].key]=h;const m=[],y=new Map,v=new Map,w=[];for(h=d;h--;){const p=u(s,o,h),x=n(p);let b=r.get(x);b?i&&w.push(()=>b.p(p,e)):(b=a(x,p),b.c()),y.set(x,m[h]=b),x in g&&v.set(x,Math.abs(h-g[x]))}const M=new Set,it=new Set;function J(p){Et(p,1),p.m(l,f),r.set(p.key,p),f=p.first,d--}for(;_&&d;){const p=m[d-1],x=t[_-1],b=p.key,R=x.key;p===x?(f=p.first,_--,d--):y.has(R)?!r.has(b)||M.has(b)?J(p):it.has(R)?_--:v.get(b)>v.get(R)?(it.add(b),J(p)):(M.add(R),_--):(c(x,r),_--)}for(;_--;){const p=t[_];y.has(p.key)||c(p,r)}for(;d;)J(m[d-1]);return k(w),m}function Ze(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],l=e[o];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[o]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function tn(t){return typeof t=="object"&&t!==null?t:{}}function en(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function nn(t){t&&t.c()}function sn(t,e){t&&t.l(e)}function Vt(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||L(()=>{const r=t.$$.on_mount.map(lt).filter(H);t.$$.on_destroy?t.$$.on_destroy.push(...r):k(r),t.$$.on_mount=[]}),o.forEach(L)}function Xt(t,e){const n=t.$$;n.fragment!==null&&(Kt(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Yt(t,e){t.$$.dirty[0]===-1&&(N.push(t),xt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function rn(t,e,n,i,s,o,r,l=[-1]){const c=P;D(t);const a=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:s,bound:st(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:st(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(u,_,...d)=>{const h=d.length?d[0]:_;return a.ctx&&s(a.ctx[u],a.ctx[u]=h)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](h),f&&Yt(t,u)),_}):[],a.update(),f=!0,k(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){At();const u=Bt(e.target);a.fragment&&a.fragment.l(u),u.forEach(O)}else a.fragment&&a.fragment.c();e.intro&&Et(t.$$.fragment),Vt(t,e.target,e.anchor,e.customElement),Ct(),bt()}D(c)}class on{$destroy(){Xt(this,1),this.$destroy=$}$on(e,n){if(!H(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ge as $,Vt as A,Xt as B,dt as C,ve as D,te as E,Pt as F,$ as G,ee as H,ne as I,se as J,re as K,ie as L,en as M,Je as N,me as O,_e as P,qe as Q,Ie as R,on as S,P as T,kt as U,$e as V,oe as W,Ze as X,tn as Y,ce as Z,Fe as _,de as a,k as a0,ue as a1,H as a2,be as a3,we as a4,je as a5,L as a6,Me as a7,Se as a8,Ae as a9,De as aa,Ue as ab,Ve as ac,ze as ad,le as ae,fe as af,X as ag,Z as ah,xe as ai,ae as aj,ge as ak,ye as al,Ye as am,pe as an,He as ao,Le as ap,Xe as aq,ot as ar,Te as as,Oe as at,Ht as b,ke as c,Qt as d,he as e,Qe as f,Et as g,O as h,rn as i,Be as j,tt as k,Ee as l,Bt as m,ht as n,Re as o,Ce as p,et as q,qt as r,Zt as s,We as t,Ne as u,Ke as v,ct as w,Pe as x,nn as y,sn as z};
