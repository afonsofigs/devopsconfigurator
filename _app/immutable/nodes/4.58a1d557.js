import{S as En,i as Hn,s as Nn,k as Z,a as I,q as Ee,l as x,m as le,c as E,r as He,h as k,n as ee,E as Ln,p as Pn,b as se,F as m,O as Zn,u as nt,G as Mn,y as w,z as O,A as B,g as v,d as $,B as P,w as b,M as C,N as S,e as cn,P as Vn,v as tt,f as lt}from"../chunks/index.48087d1a.js";import{B as xn}from"../chunks/Offcanvas.svelte_svelte_type_style_lang.da738a64.js";import{O as st,M as Sn,c as In,N as Xe,G as Bn,d as Ze,e as Tn,s as it,I as ut,L as qn,B as ot,V as rt,a as dt,H as ft,f as ct,b as zn,g as at}from"../chunks/VisibleFields.42bdccc2.js";/* empty css                       */import{c as Wn}from"../chunks/CIs.f8e5cc7d.js";import{T as pt}from"../chunks/Title.51034bb4.js";const ht=!0,jt=Object.freeze(Object.defineProperty({__proto__:null,prerender:ht},Symbol.toStringTag,{value:"Module"}));function gt(e){let n,t,l,i,f,r,h;return{c(){n=Z("span"),t=Z("img"),i=I(),f=Ee(e[0]),this.h()},l(a){n=x(a,"SPAN",{class:!0});var M=le(n);t=x(M,"IMG",{alt:!0,height:!0,src:!0}),i=E(M),f=He(M,e[0]),M.forEach(k),this.h()},h(){ee(t,"alt",e[4]),ee(t,"height",e[1]),t.hidden=e[5],Ln(t.src,l=e[3])||ee(t,"src",l),ee(n,"class","svelte-1q21rrj"),Pn(n,"gap",e[2])},m(a,M){se(a,n,M),m(n,t),m(n,i),m(n,f),r||(h=Zn(t,"error",e[6]),r=!0)},p(a,[M]){M&16&&ee(t,"alt",a[4]),M&2&&ee(t,"height",a[1]),M&32&&(t.hidden=a[5]),M&8&&!Ln(t.src,l=a[3])&&ee(t,"src",l),M&1&&nt(f,a[0]),M&4&&Pn(n,"gap",a[2])},i:Mn,o:Mn,d(a){a&&k(n),r=!1,h()}}}function mt(e,n,t){let l,{option:i=""}=n,{height:f="20px"}=n,{gap:r="4pt"}=n;const h="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons";let a="";function M(){l==="assembla"?t(3,a="https://seeklogo.com/images/A/assembla-logo-0BE7A98406-seeklogo.com.png"):l==="github"?t(3,a="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"):l==="all"?t(3,a="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"):t(3,a=`${h}/file_type_${l}.svg`)}let _;const D=()=>t(5,_=!0);return e.$$set=R=>{"option"in R&&t(0,i=R.option),"height"in R&&t(1,f=R.height),"gap"in R&&t(2,r=R.gap)},e.$$.update=()=>{e.$$.dirty&1&&t(4,l=String(i).toLowerCase().replaceAll("+","p").replace("#","sharp").replace("javascript","js").replace("bitbucket","bitbucketpipeline").replace("dart","dartlang")),e.$$.dirty&16&&l&&M(),e.$$.dirty&8&&t(5,_=!1)},[i,f,r,a,l,_,D]}class et extends En{constructor(n){super(),Hn(this,n,mt,gt,Nn,{option:0,height:1,gap:2})}}function yn(e,n,t){const l=e.slice();return l[36]=n[t],l}function Jn(e,n,t){const l=e.slice();return l[36]=n[t],l}function Yn(e){let n,t=e[36]+"",l;return{c(){n=Z("option"),l=Ee(t),this.h()},l(i){n=x(i,"OPTION",{});var f=le(n);l=He(f,t),f.forEach(k),this.h()},h(){n.__value=e[36],n.value=n.__value},m(i,f){se(i,n,f),m(n,l)},p:Mn,d(i){i&&k(n)}}}function _t(e){let n,t=Ze,l=[];for(let i=0;i<t.length;i+=1)l[i]=Yn(Jn(e,t,i));return{c(){for(let i=0;i<l.length;i+=1)l[i].c();n=cn()},l(i){for(let f=0;f<l.length;f+=1)l[f].l(i);n=cn()},m(i,f){for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(i,f);se(i,n,f)},p(i,f){if(f&0){t=Ze;let r;for(r=0;r<t.length;r+=1){const h=Jn(i,t,r);l[r]?l[r].p(h,f):(l[r]=Yn(h),l[r].c(),l[r].m(n.parentNode,n))}for(;r<l.length;r+=1)l[r].d(1);l.length=t.length}},d(i){Vn(l,i),i&&k(n)}}}function Kn(e){let n,t=e[36]+"",l;return{c(){n=Z("option"),l=Ee(t),this.h()},l(i){n=x(i,"OPTION",{});var f=le(n);l=He(f,t),f.forEach(k),this.h()},h(){n.__value=e[36],n.value=n.__value},m(i,f){se(i,n,f),m(n,l)},p:Mn,d(i){i&&k(n)}}}function bt(e){let n,t=Ze,l=[];for(let i=0;i<t.length;i+=1)l[i]=Kn(yn(e,t,i));return{c(){for(let i=0;i<l.length;i+=1)l[i].c();n=cn()},l(i){for(let f=0;f<l.length;f+=1)l[f].l(i);n=cn()},m(i,f){for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(i,f);se(i,n,f)},p(i,f){if(f&0){t=Ze;let r;for(r=0;r<t.length;r+=1){const h=yn(i,t,r);l[r]?l[r].p(h,f):(l[r]=Kn(h),l[r].c(),l[r].m(n.parentNode,n))}for(;r<l.length;r+=1)l[r].d(1);l.length=t.length}},d(i){Vn(l,i),i&&k(n)}}}function Ct(e){let n,t,l,i,f,r,h,a,M,_,D,R,q,F,G,ne,H,A,U,L,j,y,oe,z,Y,ge,J,Q,fe,N,we,Oe,te,re,ve,T,Be,ke,u,Ve,De,ce,Fe,Re,ae,Ae,je,pe,Ge,Ue,_e,$e,Le,Te,he,qe,ze,de,c,be,ie,Ce,K,Se;function an(o){e[19](o)}let xe={options:Tn,placeholder:"Cloud OSs: All"};e[10]!==void 0&&(xe.selected=e[10]),h=new Sn({props:xe}),b.push(()=>C(h,"selected",an));function pn(o){e[20](o)}let un={id:"exampleSelect",name:"select",style:"width: 80px",type:"select",$$slots:{default:[_t]},$$scope:{ctx:e}};e[12]!==void 0&&(un.value=e[12]),_=new In({props:un}),b.push(()=>C(_,"value",pn));function en(o){e[21](o)}let on={options:Tn,placeholder:"Self-hosted OSs: All"};e[11]!==void 0&&(on.selected=e[11]),A=new Sn({props:on}),b.push(()=>C(A,"selected",en));function rn(o){e[22](o)}let We={id:"exampleSelect",name:"select",style:"width: 80px",type:"select",$$slots:{default:[bt]},$$scope:{ctx:e}};e[13]!==void 0&&(We.value=e[13]),j=new In({props:We}),b.push(()=>C(j,"value",rn));function hn(o){e[23](o)}let d={label:"Cloud concurrent builds:",max:"1000",min:"0",placeholder:"builds"};e[1]!==void 0&&(d.value=e[1]),z=new Xe({props:d}),b.push(()=>C(z,"value",hn));function X(o){e[24](o)}let ye={label:"Self-hosted runners:",max:"1000",min:"0",placeholder:"runners"};e[2]!==void 0&&(ye.value=e[2]),J=new Xe({props:ye}),b.push(()=>C(J,"value",X));function gn(o){e[25](o)}let Je={label:"Pipeline Caching"};e[15]!==void 0&&(Je.checkVar=e[15]),N=new Bn({props:Je}),b.push(()=>C(N,"checkVar",gn));function me(o){e[26](o)}let Ke={label:"Statistics and Metrics"};e[17]!==void 0&&(Ke.checkVar=e[17]),te=new Bn({props:Ke}),b.push(()=>C(te,"checkVar",me));function dn(o){e[27](o)}let nn={label:"Scheduled Pipelines"};e[16]!==void 0&&(nn.checkVar=e[16]),T=new Bn({props:nn}),b.push(()=>C(T,"checkVar",dn));function mn(o){e[28](o)}let _n={label:"Linux monthly cloud minutes:",min:"0",placeholder:"linuxMinutes",width:"90px"};e[3]!==void 0&&(_n.value=e[3]),u=new Xe({props:_n}),b.push(()=>C(u,"value",mn));function fn(o){e[29](o)}let vn={label:"Docker monthly cloud minutes:",placeholder:"dockerMinutes",width:"90px"};e[4]!==void 0&&(vn.value=e[4]),ce=new Xe({props:vn}),b.push(()=>C(ce,"value",fn));function wn(o){e[30](o)}let kn={label:"Windows monthly cloud minutes:",placeholder:"windowsMinutes",width:"90px"};e[5]!==void 0&&(kn.value=e[5]),ae=new Xe({props:kn}),b.push(()=>C(ae,"value",wn));function On(o){e[31](o)}let W={label:"macOS monthly cloud minutes:",placeholder:"macOSMinutes",width:"90px"};e[6]!==void 0&&(W.value=e[6]),pe=new Xe({props:W}),b.push(()=>C(pe,"value",On));function s(o){e[32](o)}let p={options:it,placeholder:"Support: All"};e[14]!==void 0&&(p.selected=e[14]),he=new Sn({props:p}),b.push(()=>C(he,"selected",s));function tn(o){e[33](o)}let Qe={label:"Results per page:",max:"70",min:"1",placeholder:"pagination"};e[7]!==void 0&&(Qe.value=e[7]),de=new Xe({props:Qe}),b.push(()=>C(de,"value",tn));function ue(o){e[34](o)}function Ye(o){e[35](o)}let Pe={placeholder:"Brands: All ("+e[8].length+")"};return e[8]!==void 0&&(Pe.options=e[8]),e[9]!==void 0&&(Pe.selected=e[9]),ie=new Sn({props:Pe}),b.push(()=>C(ie,"options",ue)),b.push(()=>C(ie,"selected",Ye)),{c(){n=Z("div"),t=Z("div"),l=Z("p"),i=Ee("Cloud OSs:"),f=I(),r=Z("div"),w(h.$$.fragment),M=I(),w(_.$$.fragment),R=I(),q=Z("div"),F=Z("p"),G=Ee("Self-hosted OSs:"),ne=I(),H=Z("div"),w(A.$$.fragment),L=I(),w(j.$$.fragment),oe=I(),w(z.$$.fragment),ge=I(),w(J.$$.fragment),fe=I(),w(N.$$.fragment),Oe=I(),w(te.$$.fragment),ve=I(),w(T.$$.fragment),ke=I(),w(u.$$.fragment),De=I(),w(ce.$$.fragment),Re=I(),w(ae.$$.fragment),je=I(),w(pe.$$.fragment),Ue=I(),_e=Z("div"),$e=Z("p"),Le=Ee("Commercial support:"),Te=I(),w(he.$$.fragment),ze=I(),w(de.$$.fragment),be=I(),w(ie.$$.fragment),this.h()},l(o){n=x(o,"DIV",{class:!0});var g=le(n);t=x(g,"DIV",{});var Ie=le(t);l=x(Ie,"P",{class:!0});var Me=le(l);i=He(Me,"Cloud OSs:"),Me.forEach(k),f=E(Ie),r=x(Ie,"DIV",{class:!0});var Ne=le(r);O(h.$$.fragment,Ne),M=E(Ne),O(_.$$.fragment,Ne),Ne.forEach(k),Ie.forEach(k),R=E(g),q=x(g,"DIV",{});var V=le(q);F=x(V,"P",{class:!0});var bn=le(F);G=He(bn,"Self-hosted OSs:"),bn.forEach(k),ne=E(V),H=x(V,"DIV",{class:!0});var ln=le(H);O(A.$$.fragment,ln),L=E(ln),O(j.$$.fragment,ln),ln.forEach(k),V.forEach(k),oe=E(g),O(z.$$.fragment,g),ge=E(g),O(J.$$.fragment,g),fe=E(g),O(N.$$.fragment,g),Oe=E(g),O(te.$$.fragment,g),ve=E(g),O(T.$$.fragment,g),ke=E(g),O(u.$$.fragment,g),De=E(g),O(ce.$$.fragment,g),Re=E(g),O(ae.$$.fragment,g),je=E(g),O(pe.$$.fragment,g),Ue=E(g),_e=x(g,"DIV",{});var sn=le(_e);$e=x(sn,"P",{class:!0});var Cn=le($e);Le=He(Cn,"Commercial support:"),Cn.forEach(k),Te=E(sn),O(he.$$.fragment,sn),sn.forEach(k),ze=E(g),O(de.$$.fragment,g),be=E(g),O(ie.$$.fragment,g),g.forEach(k),this.h()},h(){ee(l,"class","mb-2"),ee(r,"class","d-flex flex-row justify-content-start gap-2 w-100"),ee(F,"class","mb-2"),ee(H,"class","d-flex flex-row justify-content-start gap-2"),ee($e,"class","mb-2"),ee(n,"class","d-flex flex-column justify-content-start gap-4")},m(o,g){se(o,n,g),m(n,t),m(t,l),m(l,i),m(t,f),m(t,r),B(h,r,null),m(r,M),B(_,r,null),m(n,R),m(n,q),m(q,F),m(F,G),m(q,ne),m(q,H),B(A,H,null),m(H,L),B(j,H,null),m(n,oe),B(z,n,null),m(n,ge),B(J,n,null),m(n,fe),B(N,n,null),m(n,Oe),B(te,n,null),m(n,ve),B(T,n,null),m(n,ke),B(u,n,null),m(n,De),B(ce,n,null),m(n,Re),B(ae,n,null),m(n,je),B(pe,n,null),m(n,Ue),m(n,_e),m(_e,$e),m($e,Le),m(_e,Te),B(he,_e,null),m(n,ze),B(de,n,null),m(n,be),B(ie,n,null),Se=!0},p(o,g){const Ie={};!a&&g[0]&1024&&(a=!0,Ie.selected=o[10],S(()=>a=!1)),h.$set(Ie);const Me={};g[1]&1024&&(Me.$$scope={dirty:g,ctx:o}),!D&&g[0]&4096&&(D=!0,Me.value=o[12],S(()=>D=!1)),_.$set(Me);const Ne={};!U&&g[0]&2048&&(U=!0,Ne.selected=o[11],S(()=>U=!1)),A.$set(Ne);const V={};g[1]&1024&&(V.$$scope={dirty:g,ctx:o}),!y&&g[0]&8192&&(y=!0,V.value=o[13],S(()=>y=!1)),j.$set(V);const bn={};!Y&&g[0]&2&&(Y=!0,bn.value=o[1],S(()=>Y=!1)),z.$set(bn);const ln={};!Q&&g[0]&4&&(Q=!0,ln.value=o[2],S(()=>Q=!1)),J.$set(ln);const sn={};!we&&g[0]&32768&&(we=!0,sn.checkVar=o[15],S(()=>we=!1)),N.$set(sn);const Cn={};!re&&g[0]&131072&&(re=!0,Cn.checkVar=o[17],S(()=>re=!1)),te.$set(Cn);const Dn={};!Be&&g[0]&65536&&(Be=!0,Dn.checkVar=o[16],S(()=>Be=!1)),T.$set(Dn);const Fn={};!Ve&&g[0]&8&&(Ve=!0,Fn.value=o[3],S(()=>Ve=!1)),u.$set(Fn);const Rn={};!Fe&&g[0]&16&&(Fe=!0,Rn.value=o[4],S(()=>Fe=!1)),ce.$set(Rn);const An={};!Ae&&g[0]&32&&(Ae=!0,An.value=o[5],S(()=>Ae=!1)),ae.$set(An);const jn={};!Ge&&g[0]&64&&(Ge=!0,jn.value=o[6],S(()=>Ge=!1)),pe.$set(jn);const Gn={};!qe&&g[0]&16384&&(qe=!0,Gn.selected=o[14],S(()=>qe=!1)),he.$set(Gn);const Un={};!c&&g[0]&128&&(c=!0,Un.value=o[7],S(()=>c=!1)),de.$set(Un);const $n={};g[0]&256&&($n.placeholder="Brands: All ("+o[8].length+")"),!Ce&&g[0]&256&&(Ce=!0,$n.options=o[8],S(()=>Ce=!1)),!K&&g[0]&512&&(K=!0,$n.selected=o[9],S(()=>K=!1)),ie.$set($n)},i(o){Se||(v(h.$$.fragment,o),v(_.$$.fragment,o),v(A.$$.fragment,o),v(j.$$.fragment,o),v(z.$$.fragment,o),v(J.$$.fragment,o),v(N.$$.fragment,o),v(te.$$.fragment,o),v(T.$$.fragment,o),v(u.$$.fragment,o),v(ce.$$.fragment,o),v(ae.$$.fragment,o),v(pe.$$.fragment,o),v(he.$$.fragment,o),v(de.$$.fragment,o),v(ie.$$.fragment,o),Se=!0)},o(o){$(h.$$.fragment,o),$(_.$$.fragment,o),$(A.$$.fragment,o),$(j.$$.fragment,o),$(z.$$.fragment,o),$(J.$$.fragment,o),$(N.$$.fragment,o),$(te.$$.fragment,o),$(T.$$.fragment,o),$(u.$$.fragment,o),$(ce.$$.fragment,o),$(ae.$$.fragment,o),$(pe.$$.fragment,o),$(he.$$.fragment,o),$(de.$$.fragment,o),$(ie.$$.fragment,o),Se=!1},d(o){o&&k(n),P(h),P(_),P(A),P(j),P(z),P(J),P(N),P(te),P(T),P(u),P(ce),P(ae),P(pe),P(he),P(de),P(ie)}}}function St(e){let n,t;return n=new st({props:{header:"More filters",isOpen:e[0],placement:"end",toggle:e[18],$$slots:{default:[Ct]},$$scope:{ctx:e}}}),{c(){w(n.$$.fragment)},l(l){O(n.$$.fragment,l)},m(l,i){B(n,l,i),t=!0},p(l,i){const f={};i[0]&1&&(f.isOpen=l[0]),i[0]&262142|i[1]&1024&&(f.$$scope={dirty:i,ctx:l}),n.$set(f)},i(l){t||(v(n.$$.fragment,l),t=!0)},o(l){$(n.$$.fragment,l),t=!1},d(l){P(n,l)}}}function Mt(e,n,t){let{sideMenuOpen:l=!1}=n;const i=()=>t(0,l=!l);let{concurrentBuilds:f=0}=n,{selfHostedRunners:r=0}=n,{linuxMonthlyCloudMins:h=0}=n,{dockerMonthlyCloudMins:a=0}=n,{windowsMonthlyCloudMins:M=0}=n,{macOSMonthlyCloudMins:_=0}=n,{currentPagination:D=10}=n,{allBrands:R=[]}=n,{brandsSelected:q=[]}=n,{cloudOSsSelected:F=[]}=n,{selfHostedOSsSelected:G=[]}=n,{boolCloudBuild:ne=Ze[0]}=n,{boolSelfHostedBuild:H=Ze[0]}=n,{supportSelected:A=[]}=n,{cachingChecked:U=!1}=n,{scheduledChecked:L=!1}=n,{statisticsChecked:j=!1}=n;function y(u){F=u,t(10,F)}function oe(u){ne=u,t(12,ne)}function z(u){G=u,t(11,G)}function Y(u){H=u,t(13,H)}function ge(u){f=u,t(1,f)}function J(u){r=u,t(2,r)}function Q(u){U=u,t(15,U)}function fe(u){j=u,t(17,j)}function N(u){L=u,t(16,L)}function we(u){h=u,t(3,h)}function Oe(u){a=u,t(4,a)}function te(u){M=u,t(5,M)}function re(u){_=u,t(6,_)}function ve(u){A=u,t(14,A)}function T(u){D=u,t(7,D)}function Be(u){R=u,t(8,R)}function ke(u){q=u,t(9,q)}return e.$$set=u=>{"sideMenuOpen"in u&&t(0,l=u.sideMenuOpen),"concurrentBuilds"in u&&t(1,f=u.concurrentBuilds),"selfHostedRunners"in u&&t(2,r=u.selfHostedRunners),"linuxMonthlyCloudMins"in u&&t(3,h=u.linuxMonthlyCloudMins),"dockerMonthlyCloudMins"in u&&t(4,a=u.dockerMonthlyCloudMins),"windowsMonthlyCloudMins"in u&&t(5,M=u.windowsMonthlyCloudMins),"macOSMonthlyCloudMins"in u&&t(6,_=u.macOSMonthlyCloudMins),"currentPagination"in u&&t(7,D=u.currentPagination),"allBrands"in u&&t(8,R=u.allBrands),"brandsSelected"in u&&t(9,q=u.brandsSelected),"cloudOSsSelected"in u&&t(10,F=u.cloudOSsSelected),"selfHostedOSsSelected"in u&&t(11,G=u.selfHostedOSsSelected),"boolCloudBuild"in u&&t(12,ne=u.boolCloudBuild),"boolSelfHostedBuild"in u&&t(13,H=u.boolSelfHostedBuild),"supportSelected"in u&&t(14,A=u.supportSelected),"cachingChecked"in u&&t(15,U=u.cachingChecked),"scheduledChecked"in u&&t(16,L=u.scheduledChecked),"statisticsChecked"in u&&t(17,j=u.statisticsChecked)},[l,f,r,h,a,M,_,D,R,q,F,G,ne,H,A,U,L,j,i,y,oe,z,Y,ge,J,Q,fe,N,we,Oe,te,re,ve,T,Be,ke]}class vt extends En{constructor(n){super(),Hn(this,n,Mt,St,Nn,{sideMenuOpen:0,concurrentBuilds:1,selfHostedRunners:2,linuxMonthlyCloudMins:3,dockerMonthlyCloudMins:4,windowsMonthlyCloudMins:5,macOSMonthlyCloudMins:6,currentPagination:7,allBrands:8,brandsSelected:9,cloudOSsSelected:10,selfHostedOSsSelected:11,boolCloudBuild:12,boolSelfHostedBuild:13,supportSelected:14,cachingChecked:15,scheduledChecked:16,statisticsChecked:17},null,[-1,-1])}}function Qn(e,n,t){const l=e.slice();return l[57]=n[t],l}function kt(e){let n;return{c(){n=Ee("Self-hosted")},l(t){n=He(t,"Self-hosted")},m(t,l){se(t,n,l)},d(t){t&&k(n)}}}function $t(e){let n=e[57]+"",t;return{c(){t=Ee(n)},l(l){t=He(l,n)},m(l,i){se(l,t,i)},p:Mn,d(l){l&&k(t)}}}function Xn(e){let n,t;return n=new xn({props:{size:"sm",color:"light",active:e[3]===e[57],$$slots:{default:[$t]},$$scope:{ctx:e}}}),n.$on("click",e[31]),{c(){w(n.$$.fragment)},l(l){O(n.$$.fragment,l)},m(l,i){B(n,l,i),t=!0},p(l,i){const f={};i[0]&8&&(f.active=l[3]===l[57]),i[1]&536870912&&(f.$$scope={dirty:i,ctx:l}),n.$set(f)},i(l){t||(v(n.$$.fragment,l),t=!0)},o(l){$(n.$$.fragment,l),t=!1},d(l){P(n,l)}}}function wt(e){let n,t,l=zn,i=[];for(let r=0;r<l.length;r+=1)i[r]=Xn(Qn(e,l,r));const f=r=>$(i[r],1,1,()=>{i[r]=null});return{c(){for(let r=0;r<i.length;r+=1)i[r].c();n=cn()},l(r){for(let h=0;h<i.length;h+=1)i[h].l(r);n=cn()},m(r,h){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(r,h);se(r,n,h),t=!0},p(r,h){if(h[0]&8){l=zn;let a;for(a=0;a<l.length;a+=1){const M=Qn(r,l,a);i[a]?(i[a].p(M,h),v(i[a],1)):(i[a]=Xn(M),i[a].c(),v(i[a],1),i[a].m(n.parentNode,n))}for(tt(),a=l.length;a<i.length;a+=1)f(a);lt()}},i(r){if(!t){for(let h=0;h<l.length;h+=1)v(i[h]);t=!0}},o(r){i=i.filter(Boolean);for(let h=0;h<i.length;h+=1)$(i[h]);t=!1},d(r){Vn(i,r),r&&k(n)}}}function Ot(e){let n;return{c(){n=Ee("CD")},l(t){n=He(t,"CD")},m(t,l){se(t,n,l)},d(t){t&&k(n)}}}function Bt(e){let n,t;return n=new et({props:{option:e[56],slot:"selected"}}),{c(){w(n.$$.fragment)},l(l){O(n.$$.fragment,l)},m(l,i){B(n,l,i),t=!0},p(l,i){const f={};i[1]&33554432&&(f.option=l[56]),n.$set(f)},i(l){t||(v(n.$$.fragment,l),t=!0)},o(l){$(n.$$.fragment,l),t=!1},d(l){P(n,l)}}}function Pt(e){let n,t;return n=new et({props:{option:e[56],slot:"option"}}),{c(){w(n.$$.fragment)},l(l){O(n.$$.fragment,l)},m(l,i){B(n,l,i),t=!0},p(l,i){const f={};i[1]&33554432&&(f.option=l[56]),n.$set(f)},i(l){t||(v(n.$$.fragment,l),t=!0)},o(l){$(n.$$.fragment,l),t=!1},d(l){P(n,l)}}}function It(e){let n;return{c(){n=Ee("More filters")},l(t){n=He(t,"More filters")},m(t,l){se(t,n,l)},d(t){t&&k(n)}}}function Et(e){let n,t,l,i,f,r,h,a,M,_,D,R,q,F,G,ne,H,A,U,L,j,y,oe,z,Y,ge,J,Q,fe,N,we,Oe,te,re,ve,T,Be,ke,u,Ve,De,ce,Fe,Re,ae,Ae,je,pe,Ge,Ue,_e,$e,Le,Te,he,qe,ze,de,c,be;n=new pt({props:{prefix:"CI/CD"}}),a=new ut({props:{height:18,width:18}});function ie(s){e[30](s)}let Ce={classNames:"bg-light",label:"Users",min:"1",placeholder:"users",width:"60px"};e[1]!==void 0&&(Ce.value=e[1]),D=new Xe({props:Ce}),b.push(()=>C(D,"value",ie)),G=new qn({props:{class:"my-auto",for:"runnersInput",$$slots:{default:[kt]},$$scope:{ctx:e}}}),H=new ot({props:{$$slots:{default:[wt]},$$scope:{ctx:e}}}),L=new qn({props:{class:"my-auto",for:"runnersInput",$$slots:{default:[Ot]},$$scope:{ctx:e}}});function K(s){e[32](s)}let Se={class:"my-auto",id:"s2",type:"switch"};e[9]!==void 0&&(Se.checked=e[9]),y=new In({props:Se}),b.push(()=>C(y,"checked",K));function an(s){e[33](s)}let xe={options:at,outerDivClass:"bg-light",placeholder:"Git Platforms",$$slots:{option:[Pt,({option:s})=>({56:s}),({option:s})=>[0,s?33554432:0]],selected:[Bt,({option:s})=>({56:s}),({option:s})=>[0,s?33554432:0]]},$$scope:{ctx:e}};e[10]!==void 0&&(xe.selected=e[10]),Y=new Sn({props:xe}),b.push(()=>C(Y,"selected",an)),Q=new xn({props:{color:"light",$$slots:{default:[It]},$$scope:{ctx:e}}}),Q.$on("click",e[28]);function pn(s){e[34](s)}function un(s){e[35](s)}let en={};e[20]!==void 0&&(en.allFieldNames=e[20]),e[24]!==void 0&&(en.fieldsSelected=e[24]),N=new rt({props:en}),b.push(()=>C(N,"allFieldNames",pn)),b.push(()=>C(N,"fieldsSelected",un)),re=new dt({props:{allEntries:e[0],allFields:e[22],currentPagination:e[25],fieldsSelected:e[24],filteredEntries:e[21]}});function on(s){e[36](s)}let rn={category:"CIs",title:"CI/CD Help"};e[26]!==void 0&&(rn.helpModalOpen=e[26]),T=new ft({props:rn}),b.push(()=>C(T,"helpModalOpen",on));function We(s){e[37](s)}function hn(s){e[38](s)}function d(s){e[39](s)}function X(s){e[40](s)}function ye(s){e[41](s)}function gn(s){e[42](s)}function Je(s){e[43](s)}function me(s){e[44](s)}function Ke(s){e[45](s)}function dn(s){e[46](s)}function nn(s){e[47](s)}function mn(s){e[48](s)}function _n(s){e[49](s)}function fn(s){e[50](s)}function vn(s){e[51](s)}function wn(s){e[52](s)}function kn(s){e[53](s)}function On(s){e[54](s)}let W={};return e[23]!==void 0&&(W.allBrands=e[23]),e[17]!==void 0&&(W.boolCloudBuild=e[17]),e[18]!==void 0&&(W.boolSelfHostedBuild=e[18]),e[14]!==void 0&&(W.brandsSelected=e[14]),e[11]!==void 0&&(W.cachingChecked=e[11]),e[15]!==void 0&&(W.cloudOSsSelected=e[15]),e[2]!==void 0&&(W.concurrentBuilds=e[2]),e[25]!==void 0&&(W.currentPagination=e[25]),e[6]!==void 0&&(W.dockerMonthlyCloudMins=e[6]),e[5]!==void 0&&(W.linuxMonthlyCloudMins=e[5]),e[8]!==void 0&&(W.macOSMonthlyCloudMins=e[8]),e[12]!==void 0&&(W.scheduledChecked=e[12]),e[16]!==void 0&&(W.selfHostedOSsSelected=e[16]),e[4]!==void 0&&(W.selfHostedRunners=e[4]),e[27]!==void 0&&(W.sideMenuOpen=e[27]),e[13]!==void 0&&(W.statisticsChecked=e[13]),e[19]!==void 0&&(W.supportSelected=e[19]),e[7]!==void 0&&(W.windowsMonthlyCloudMins=e[7]),u=new vt({props:W}),b.push(()=>C(u,"allBrands",We)),b.push(()=>C(u,"boolCloudBuild",hn)),b.push(()=>C(u,"boolSelfHostedBuild",d)),b.push(()=>C(u,"brandsSelected",X)),b.push(()=>C(u,"cachingChecked",ye)),b.push(()=>C(u,"cloudOSsSelected",gn)),b.push(()=>C(u,"concurrentBuilds",Je)),b.push(()=>C(u,"currentPagination",me)),b.push(()=>C(u,"dockerMonthlyCloudMins",Ke)),b.push(()=>C(u,"linuxMonthlyCloudMins",dn)),b.push(()=>C(u,"macOSMonthlyCloudMins",nn)),b.push(()=>C(u,"scheduledChecked",mn)),b.push(()=>C(u,"selfHostedOSsSelected",_n)),b.push(()=>C(u,"selfHostedRunners",fn)),b.push(()=>C(u,"sideMenuOpen",vn)),b.push(()=>C(u,"statisticsChecked",wn)),b.push(()=>C(u,"supportSelected",kn)),b.push(()=>C(u,"windowsMonthlyCloudMins",On)),{c(){w(n.$$.fragment),t=I(),l=Z("div"),i=Z("p"),f=Ee("CI/CD Comparisons"),r=I(),h=Z("a"),w(a.$$.fragment),M=I(),_=Z("div"),w(D.$$.fragment),q=I(),F=Z("div"),w(G.$$.fragment),ne=I(),w(H.$$.fragment),A=I(),U=Z("div"),w(L.$$.fragment),j=I(),w(y.$$.fragment),z=I(),w(Y.$$.fragment),J=I(),w(Q.$$.fragment),fe=I(),w(N.$$.fragment),te=I(),w(re.$$.fragment),ve=I(),w(T.$$.fragment),ke=I(),w(u.$$.fragment),this.h()},l(s){O(n.$$.fragment,s),t=E(s),l=x(s,"DIV",{class:!0,style:!0});var p=le(l);i=x(p,"P",{class:!0});var tn=le(i);f=He(tn,"CI/CD Comparisons"),tn.forEach(k),r=E(p),h=x(p,"A",{href:!0});var Qe=le(h);O(a.$$.fragment,Qe),Qe.forEach(k),p.forEach(k),M=E(s),_=x(s,"DIV",{class:!0});var ue=le(_);O(D.$$.fragment,ue),q=E(ue),F=x(ue,"DIV",{class:!0});var Ye=le(F);O(G.$$.fragment,Ye),ne=E(Ye),O(H.$$.fragment,Ye),Ye.forEach(k),A=E(ue),U=x(ue,"DIV",{class:!0});var Pe=le(U);O(L.$$.fragment,Pe),j=E(Pe),O(y.$$.fragment,Pe),Pe.forEach(k),z=E(ue),O(Y.$$.fragment,ue),J=E(ue),O(Q.$$.fragment,ue),fe=E(ue),O(N.$$.fragment,ue),ue.forEach(k),te=E(s),O(re.$$.fragment,s),ve=E(s),O(T.$$.fragment,s),ke=E(s),O(u.$$.fragment,s),this.h()},h(){ee(i,"class","h2 opacity-75"),ee(h,"href",""),ee(l,"class","d-flex flex-row justify-content-center align-items-top gap-1"),Pn(l,"margin-top","75px",1),ee(F,"class","d-flex flex-row gap-2 mb-0 align-content-center"),ee(U,"class","d-flex flex-row gap-1"),ee(_,"class","d-flex flex-row flex-wrap gap-4 justify-content-center align-content-center mb-3 mt-4")},m(s,p){B(n,s,p),se(s,t,p),se(s,l,p),m(l,i),m(i,f),m(l,r),m(l,h),B(a,h,null),se(s,M,p),se(s,_,p),B(D,_,null),m(_,q),m(_,F),B(G,F,null),m(F,ne),B(H,F,null),m(_,A),m(_,U),B(L,U,null),m(U,j),B(y,U,null),m(_,z),B(Y,_,null),m(_,J),B(Q,_,null),m(_,fe),B(N,_,null),se(s,te,p),B(re,s,p),se(s,ve,p),B(T,s,p),se(s,ke,p),B(u,s,p),de=!0,c||(be=Zn(h,"click",e[29]),c=!0)},p(s,p){const tn={};!R&&p[0]&2&&(R=!0,tn.value=s[1],S(()=>R=!1)),D.$set(tn);const Qe={};p[1]&536870912&&(Qe.$$scope={dirty:p,ctx:s}),G.$set(Qe);const ue={};p[0]&8|p[1]&536870912&&(ue.$$scope={dirty:p,ctx:s}),H.$set(ue);const Ye={};p[1]&536870912&&(Ye.$$scope={dirty:p,ctx:s}),L.$set(Ye);const Pe={};!oe&&p[0]&512&&(oe=!0,Pe.checked=s[9],S(()=>oe=!1)),y.$set(Pe);const o={};p[1]&570425344&&(o.$$scope={dirty:p,ctx:s}),!ge&&p[0]&1024&&(ge=!0,o.selected=s[10],S(()=>ge=!1)),Y.$set(o);const g={};p[1]&536870912&&(g.$$scope={dirty:p,ctx:s}),Q.$set(g);const Ie={};!we&&p[0]&1048576&&(we=!0,Ie.allFieldNames=s[20],S(()=>we=!1)),!Oe&&p[0]&16777216&&(Oe=!0,Ie.fieldsSelected=s[24],S(()=>Oe=!1)),N.$set(Ie);const Me={};p[0]&1&&(Me.allEntries=s[0]),p[0]&4194304&&(Me.allFields=s[22]),p[0]&33554432&&(Me.currentPagination=s[25]),p[0]&16777216&&(Me.fieldsSelected=s[24]),p[0]&2097152&&(Me.filteredEntries=s[21]),re.$set(Me);const Ne={};!Be&&p[0]&67108864&&(Be=!0,Ne.helpModalOpen=s[26],S(()=>Be=!1)),T.$set(Ne);const V={};!Ve&&p[0]&8388608&&(Ve=!0,V.allBrands=s[23],S(()=>Ve=!1)),!De&&p[0]&131072&&(De=!0,V.boolCloudBuild=s[17],S(()=>De=!1)),!ce&&p[0]&262144&&(ce=!0,V.boolSelfHostedBuild=s[18],S(()=>ce=!1)),!Fe&&p[0]&16384&&(Fe=!0,V.brandsSelected=s[14],S(()=>Fe=!1)),!Re&&p[0]&2048&&(Re=!0,V.cachingChecked=s[11],S(()=>Re=!1)),!ae&&p[0]&32768&&(ae=!0,V.cloudOSsSelected=s[15],S(()=>ae=!1)),!Ae&&p[0]&4&&(Ae=!0,V.concurrentBuilds=s[2],S(()=>Ae=!1)),!je&&p[0]&33554432&&(je=!0,V.currentPagination=s[25],S(()=>je=!1)),!pe&&p[0]&64&&(pe=!0,V.dockerMonthlyCloudMins=s[6],S(()=>pe=!1)),!Ge&&p[0]&32&&(Ge=!0,V.linuxMonthlyCloudMins=s[5],S(()=>Ge=!1)),!Ue&&p[0]&256&&(Ue=!0,V.macOSMonthlyCloudMins=s[8],S(()=>Ue=!1)),!_e&&p[0]&4096&&(_e=!0,V.scheduledChecked=s[12],S(()=>_e=!1)),!$e&&p[0]&65536&&($e=!0,V.selfHostedOSsSelected=s[16],S(()=>$e=!1)),!Le&&p[0]&16&&(Le=!0,V.selfHostedRunners=s[4],S(()=>Le=!1)),!Te&&p[0]&134217728&&(Te=!0,V.sideMenuOpen=s[27],S(()=>Te=!1)),!he&&p[0]&8192&&(he=!0,V.statisticsChecked=s[13],S(()=>he=!1)),!qe&&p[0]&524288&&(qe=!0,V.supportSelected=s[19],S(()=>qe=!1)),!ze&&p[0]&128&&(ze=!0,V.windowsMonthlyCloudMins=s[7],S(()=>ze=!1)),u.$set(V)},i(s){de||(v(n.$$.fragment,s),v(a.$$.fragment,s),v(D.$$.fragment,s),v(G.$$.fragment,s),v(H.$$.fragment,s),v(L.$$.fragment,s),v(y.$$.fragment,s),v(Y.$$.fragment,s),v(Q.$$.fragment,s),v(N.$$.fragment,s),v(re.$$.fragment,s),v(T.$$.fragment,s),v(u.$$.fragment,s),de=!0)},o(s){$(n.$$.fragment,s),$(a.$$.fragment,s),$(D.$$.fragment,s),$(G.$$.fragment,s),$(H.$$.fragment,s),$(L.$$.fragment,s),$(y.$$.fragment,s),$(Y.$$.fragment,s),$(Q.$$.fragment,s),$(N.$$.fragment,s),$(re.$$.fragment,s),$(T.$$.fragment,s),$(u.$$.fragment,s),de=!1},d(s){P(n,s),s&&k(t),s&&k(l),P(a),s&&k(M),s&&k(_),P(D),P(G),P(H),P(L),P(y),P(Y),P(Q),P(N),s&&k(te),P(re,s),s&&k(ve),P(T,s),s&&k(ke),P(u,s),c=!1,be()}}}function Ht(e,n,t){let l=[],i=[],f=[],r=[],h=[],a=1,M=0,_="Both",D=0,R=0,q=0,F=0,G=0,ne=!1,H=[],A=!1,U=!1,L=!1,j=[],y=[],oe=[],z=[],Y=Ze[0],ge=Ze[0],J=[],Q=10,fe=!1,N=!1;(()=>{const c=Wn.CIs[0];t(0,i=Wn.CIs.slice(1));let be=[],ie=[],Ce=[];return Object.keys(c).forEach((K,Se)=>{K==="colID"?be[Se]={id:K,name:c[K],hidden:!0}:(be[Se]={id:K,name:c[K]},ie[Se]=c[K])}),i.forEach(K=>Ce.includes(K.Brand)?"":Ce=[...Ce,K.Brand]),t(22,r=be),be.forEach(K=>ct.includes(K.id)?t(24,j=[...j,K.name]):null),t(20,l=ie),t(23,h=Ce),!0})();function we(){function c(d){return y.length===0||y.includes(d.Brand)}function be(d){return _==="Both"||d["Self-hosted"]==="Both"||d["Self-hosted"]===_}function ie(d){return!ne||ne&&d.CD==="Yes"}function Ce(d){return!A||A&&d.CachingPipelineAndDependencies!=="No"}function K(d){return!L||L&&d.StatisticsAndMetrics!=="No"}function Se(d){return!U||U&&d.ScheduledPipelines==="Yes"}function an(d){return H.length===0||d.GitPlatformsCompatible==="All"||H.some(X=>d.GitPlatformsCompatible.split(", ").includes(X))}function xe(d){return J.length===0||J.some(X=>d.CommercialSupport.includes(X))}function pn(d){return oe.length===0||(Y==="Or"?oe.some(X=>d.CloudBuildOSs.split(", ").includes(X)):oe.every(X=>d.CloudBuildOSs.split(", ").includes(X)))}function un(d){return z.length===0||(ge==="Or"?z.some(X=>d["Self-hostedRunnersBuildOSs"].split(", ").includes(X)):z.every(X=>d["Self-hostedRunnersBuildOSs"].split(", ").includes(X)))}function en(d){return d.MaxUsers==="∞"||a<=parseInt(d.MaxUsers)}function on(d){return d.NCloudConcurrentBuilds==="∞"||M<=parseInt(d.NCloudConcurrentBuilds)||d.PriceExtraParallelBuild!=="N/A"}function rn(d){return d["NSelf-hostedRunners"]==="∞"||D<=parseInt(d["NSelf-hostedRunners"])||d.PriceExtraRunners!=="N/A"}function We(d,X,ye){return ye===0?!0:!(d[`CreditsPerCloudBuildMinute${X}`]==="N/A"||d.PricePerExtraCredit==="N/A"&&parseFloat(d.IncludedCreditsPerMonth)<ye)}function hn(d){function X(){if(d.IncludedUsers==="∞")return 0;const me=parseInt(d.IncludedUsers);return me>=a?0:(a-me)*parseFloat(d.PriceExtraUser$)}function ye(){if(d.PriceExtraParallelBuild==="N/A"||d.NCloudConcurrentBuilds==="∞")return 0;const me=parseInt(d.NCloudConcurrentBuilds);return me>=M?0:(M-me)*parseFloat(d.PriceExtraParallelBuild)}function gn(){if(d.PriceExtraRunners==="N/A"||d["NSelf-hostedRunners"]==="∞")return 0;const me=parseInt(d["NSelf-hostedRunners"]);return me>=D?0:(D-me)*parseFloat(d.PriceExtraRunners)}function Je(me,Ke){if(Ke===0)return 0;const dn=parseFloat(d[`CreditsPerCloudBuildMinute${me}`]);if(dn===0||d.IncludedCreditsPerMonth==="∞")return 0;const nn=parseFloat(d.IncludedCreditsPerMonth);if(d.PricePerExtraCredit==="N/A"&&nn>=Ke)return 0;const mn=parseFloat(d.PricePerExtraCredit),fn=Ke*dn-nn;return fn<0?0:fn*mn}d.CalculatedCost=Math.round((parseFloat(d.LicenseCost$PerMonth)+X()+ye()+gn()+Je("Linux",R)+Je("Docker",q)+Je("Windows",F)+Je("macOS",G)+Number.EPSILON)*100)/100}t(21,f=i.filter(d=>c(d)&&an(d)&&pn(d)&&un(d)&&en(d)&&ie(d)&&be(d)&&on(d)&&rn(d)&&We(d,"Linux",R)&&We(d,"Docker",q)&&We(d,"Windows",F)&&We(d,"macOS",G)&&xe(d)&&Ce(d)&&K(d)&&Se(d)).map(d=>(hn(d),d)))}function Oe(){t(27,N=!N)}const te=()=>t(26,fe=!fe);function re(c){a=c,t(1,a)}const ve=c=>t(3,_=c.target.innerText);function T(c){ne=c,t(9,ne)}function Be(c){H=c,t(10,H)}function ke(c){l=c,t(20,l)}function u(c){j=c,t(24,j)}function Ve(c){fe=c,t(26,fe)}function De(c){h=c,t(23,h)}function ce(c){Y=c,t(17,Y)}function Fe(c){ge=c,t(18,ge)}function Re(c){y=c,t(14,y)}function ae(c){A=c,t(11,A)}function Ae(c){oe=c,t(15,oe)}function je(c){M=c,t(2,M)}function pe(c){Q=c,t(25,Q)}function Ge(c){q=c,t(6,q)}function Ue(c){R=c,t(5,R)}function _e(c){G=c,t(8,G)}function $e(c){U=c,t(12,U)}function Le(c){z=c,t(16,z)}function Te(c){D=c,t(4,D)}function he(c){N=c,t(27,N)}function qe(c){L=c,t(13,L)}function ze(c){J=c,t(19,J)}function de(c){F=c,t(7,F)}return e.$$.update=()=>{e.$$.dirty[0]&1048575&&we()},[i,a,M,_,D,R,q,F,G,ne,H,A,U,L,y,oe,z,Y,ge,J,l,f,r,h,j,Q,fe,N,Oe,te,re,ve,T,Be,ke,u,Ve,De,ce,Fe,Re,ae,Ae,je,pe,Ge,Ue,_e,$e,Le,Te,he,qe,ze,de]}class Gt extends En{constructor(n){super(),Hn(this,n,Ht,Et,Nn,{},null,[-1,-1])}}export{Gt as component,jt as universal};
