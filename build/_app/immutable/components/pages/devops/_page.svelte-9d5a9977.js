import{S as Bn,i as Pn,s as In,k as X,a as $,q as $e,l as Z,m as ie,c as B,r as Be,h as C,n as ee,E as An,p as $n,b as x,F as h,P as Yn,u as Xn,B as Cn,w as P,x as I,y as H,f as O,t as k,z as N,M as b,N as S,O as M,e as hn,Q as Hn,L as Zn,g as xn,d as et}from"../../../chunks/index-e15c9d95.js";import{O as nt,c as On,M as gn,N as Ze,d as xe,e as Vn,s as tt,I as lt,L as jn,B as st,a as Qn,G as it,R as ut,H as ot,f as dt,b as Gn,g as rt}from"../../../chunks/HelpModal-a36de979.js";/* empty css                             */import{c as Ln}from"../../../chunks/CIs-c6b174ac.js";function ft(e){let t,n,s,i,f,o,g;return{c(){t=X("span"),n=X("img"),i=$(),f=$e(e[0]),this.h()},l(c){t=Z(c,"SPAN",{class:!0});var m=ie(t);n=Z(m,"IMG",{alt:!0,height:!0,src:!0}),i=B(m),f=Be(m,e[0]),m.forEach(C),this.h()},h(){ee(n,"alt",e[4]),ee(n,"height",e[1]),n.hidden=e[5],An(n.src,s=e[3])||ee(n,"src",s),ee(t,"class","svelte-gx6k8d"),$n(t,"gap",e[2])},m(c,m){x(c,t,m),h(t,n),h(t,i),h(t,f),o||(g=Yn(n,"error",e[6]),o=!0)},p(c,[m]){m&16&&ee(n,"alt",c[4]),m&2&&ee(n,"height",c[1]),m&32&&(n.hidden=c[5]),m&8&&!An(n.src,s=c[3])&&ee(n,"src",s),m&1&&Xn(f,c[0]),m&4&&$n(t,"gap",c[2])},i:Cn,o:Cn,d(c){c&&C(t),o=!1,g()}}}function at(e,t,n){let s,{option:i=""}=t,{height:f="20px"}=t,{gap:o="4pt"}=t;const g="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons";let c="";function m(){s==="assembla"?n(3,c="https://seeklogo.com/images/A/assembla-logo-0BE7A98406-seeklogo.com.png"):s==="github"?n(3,c="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"):s==="other"?n(3,c="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"):n(3,c=`${g}/file_type_${s}.svg`)}let w;const Q=()=>n(5,w=!0);return e.$$set=A=>{"option"in A&&n(0,i=A.option),"height"in A&&n(1,f=A.height),"gap"in A&&n(2,o=A.gap)},e.$$.update=()=>{e.$$.dirty&1&&n(4,s=String(i).toLowerCase().replaceAll("+","p").replace("#","sharp").replace("javascript","js").replace("bitbucket","bitbucketpipeline").replace("dart","dartlang")),e.$$.dirty&16&&s&&m(),e.$$.dirty&8&&n(5,w=!1)},[i,f,o,c,s,w,Q]}class Kn extends Bn{constructor(t){super(),Pn(this,t,at,ft,In,{option:0,height:1,gap:2})}}function Un(e,t,n){const s=e.slice();return s[36]=t[n],s}function Tn(e,t,n){const s=e.slice();return s[36]=t[n],s}function yn(e){let t,n=e[36]+"",s;return{c(){t=X("option"),s=$e(n),this.h()},l(i){t=Z(i,"OPTION",{});var f=ie(t);s=Be(f,n),f.forEach(C),this.h()},h(){t.__value=e[36],t.value=t.__value},m(i,f){x(i,t,f),h(t,s)},p:Cn,d(i){i&&C(t)}}}function ct(e){let t,n=xe,s=[];for(let i=0;i<n.length;i+=1)s[i]=yn(Tn(e,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();t=hn()},l(i){for(let f=0;f<s.length;f+=1)s[f].l(i);t=hn()},m(i,f){for(let o=0;o<s.length;o+=1)s[o].m(i,f);x(i,t,f)},p(i,f){if(f&0){n=xe;let o;for(o=0;o<n.length;o+=1){const g=Tn(i,n,o);s[o]?s[o].p(g,f):(s[o]=yn(g),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){Hn(s,i),i&&C(t)}}}function zn(e){let t,n=e[36]+"",s;return{c(){t=X("option"),s=$e(n),this.h()},l(i){t=Z(i,"OPTION",{});var f=ie(t);s=Be(f,n),f.forEach(C),this.h()},h(){t.__value=e[36],t.value=t.__value},m(i,f){x(i,t,f),h(t,s)},p:Cn,d(i){i&&C(t)}}}function pt(e){let t,n=xe,s=[];for(let i=0;i<n.length;i+=1)s[i]=zn(Un(e,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();t=hn()},l(i){for(let f=0;f<s.length;f+=1)s[f].l(i);t=hn()},m(i,f){for(let o=0;o<s.length;o+=1)s[o].m(i,f);x(i,t,f)},p(i,f){if(f&0){n=xe;let o;for(o=0;o<n.length;o+=1){const g=Un(i,n,o);s[o]?s[o].p(g,f):(s[o]=zn(g),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){Hn(s,i),i&&C(t)}}}function mt(e){let t,n,s,i,f,o,g,c,m,w,Q,A,D,L,ne,R,z,U,T,G,E,ue,oe,V,ge,ae,j,de,W,K,q,Ce,te,le,we,se,v,ve,d,De,Re,ce,Fe,Ae,re,Ve,je,Ge,be,Se,Le,Ue,pe,Te,ye,fe,ze,qe,he,Je,en,a;function Pe(u){e[19](u)}let Ie={id:"s1",label:"Packaged",type:"switch"};e[10]!==void 0&&(Ie.checked=e[10]),n=new On({props:Ie}),b.push(()=>S(n,"checked",Pe));function He(u){e[20](u)}let J={options:Vn,placeholder:"Cloud OSs: All"};e[13]!==void 0&&(J.selected=e[13]),w=new gn({props:J}),b.push(()=>S(w,"selected",He));function Ne(u){e[21](u)}let nn={id:"exampleSelect",name:"select",style:"width: 80px",type:"select",$$slots:{default:[ct]},$$scope:{ctx:e}};e[15]!==void 0&&(nn.value=e[15]),D=new On({props:nn}),b.push(()=>S(D,"value",Ne));function bn(u){e[22](u)}let dn={options:Vn,placeholder:"Self-hosted OSs: All"};e[14]!==void 0&&(dn.selected=e[14]),E=new gn({props:dn}),b.push(()=>S(E,"selected",bn));function Sn(u){e[23](u)}let rn={id:"exampleSelect",name:"select",style:"width: 80px",type:"select",$$slots:{default:[pt]},$$scope:{ctx:e}};e[16]!==void 0&&(rn.value=e[16]),V=new On({props:rn}),b.push(()=>S(V,"value",Sn));function Ye(u){e[24](u)}let fn={label:"Cloud concurrent builds:",max:"1000",min:"0",placeholder:"builds"};e[1]!==void 0&&(fn.value=e[1]),j=new Ze({props:fn}),b.push(()=>S(j,"value",Ye));function r(u){e[25](u)}let Y={label:"Self-hosted runners:",max:"1000",min:"0",placeholder:"runners"};e[2]!==void 0&&(Y.value=e[2]),K=new Ze({props:Y}),b.push(()=>S(K,"value",r));function Qe(u){e[26](u)}let an={label:"Linux monthly cloud minutes:",min:"0",placeholder:"linuxMinutes",width:"90px"};e[3]!==void 0&&(an.value=e[3]),te=new Ze({props:an}),b.push(()=>S(te,"value",Qe));function Ke(u){e[27](u)}let me={label:"Docker monthly cloud minutes:",placeholder:"dockerMinutes",width:"90px"};e[4]!==void 0&&(me.value=e[4]),se=new Ze({props:me}),b.push(()=>S(se,"value",Ke));function tn(u){e[28](u)}let ln={label:"Windows monthly cloud minutes:",placeholder:"windowsMinutes",width:"90px"};e[5]!==void 0&&(ln.value=e[5]),d=new Ze({props:ln}),b.push(()=>S(d,"value",tn));function cn(u){e[29](u)}let pn={label:"macOS monthly cloud minutes:",placeholder:"macOSMinutes",width:"90px"};e[6]!==void 0&&(pn.value=e[6]),ce=new Ze({props:pn}),b.push(()=>S(ce,"value",cn));function wn(u){e[30](u)}function mn(u){e[31](u)}let y={placeholder:"Brands: All ("+e[11].length+")"};e[11]!==void 0&&(y.options=e[11]),e[12]!==void 0&&(y.selected=e[12]),re=new gn({props:y}),b.push(()=>S(re,"options",wn)),b.push(()=>S(re,"selected",mn));function l(u){e[32](u)}let p={options:tt,placeholder:"Support: All"};e[17]!==void 0&&(p.selected=e[17]),pe=new gn({props:p}),b.push(()=>S(pe,"selected",l));function We(u){e[33](u)}let Xe={label:"Results per page:",max:"70",min:"1",placeholder:"pagination"};e[9]!==void 0&&(Xe.value=e[9]),fe=new Ze({props:Xe}),b.push(()=>S(fe,"value",We));function sn(u){e[34](u)}function _e(u){e[35](u)}let Oe={placeholder:"Visible fields: All"};return e[7]!==void 0&&(Oe.options=e[7]),e[8]!==void 0&&(Oe.selected=e[8]),he=new gn({props:Oe}),b.push(()=>S(he,"options",sn)),b.push(()=>S(he,"selected",_e)),{c(){t=X("div"),P(n.$$.fragment),i=$(),f=X("div"),o=X("p"),g=$e("Cloud OSs:"),c=$(),m=X("div"),P(w.$$.fragment),A=$(),P(D.$$.fragment),ne=$(),R=X("div"),z=X("p"),U=$e("Self-hosted OSs:"),T=$(),G=X("div"),P(E.$$.fragment),oe=$(),P(V.$$.fragment),ae=$(),P(j.$$.fragment),W=$(),P(K.$$.fragment),Ce=$(),P(te.$$.fragment),we=$(),P(se.$$.fragment),ve=$(),P(d.$$.fragment),Re=$(),P(ce.$$.fragment),Ae=$(),P(re.$$.fragment),Ge=$(),be=X("div"),Se=X("p"),Le=$e("Commercial support:"),Ue=$(),P(pe.$$.fragment),ye=$(),P(fe.$$.fragment),qe=$(),P(he.$$.fragment),this.h()},l(u){t=Z(u,"DIV",{class:!0});var _=ie(t);I(n.$$.fragment,_),i=B(_),f=Z(_,"DIV",{});var Me=ie(f);o=Z(Me,"P",{class:!0});var Ee=ie(o);g=Be(Ee,"Cloud OSs:"),Ee.forEach(C),c=B(Me),m=Z(Me,"DIV",{class:!0});var ke=ie(m);I(w.$$.fragment,ke),A=B(ke),I(D.$$.fragment,ke),ke.forEach(C),Me.forEach(C),ne=B(_),R=Z(_,"DIV",{});var F=ie(R);z=Z(F,"P",{class:!0});var _n=ie(z);U=Be(_n,"Self-hosted OSs:"),_n.forEach(C),T=B(F),G=Z(F,"DIV",{class:!0});var un=ie(G);I(E.$$.fragment,un),oe=B(un),I(V.$$.fragment,un),un.forEach(C),F.forEach(C),ae=B(_),I(j.$$.fragment,_),W=B(_),I(K.$$.fragment,_),Ce=B(_),I(te.$$.fragment,_),we=B(_),I(se.$$.fragment,_),ve=B(_),I(d.$$.fragment,_),Re=B(_),I(ce.$$.fragment,_),Ae=B(_),I(re.$$.fragment,_),Ge=B(_),be=Z(_,"DIV",{});var on=ie(be);Se=Z(on,"P",{class:!0});var Mn=ie(Se);Le=Be(Mn,"Commercial support:"),Mn.forEach(C),Ue=B(on),I(pe.$$.fragment,on),on.forEach(C),ye=B(_),I(fe.$$.fragment,_),qe=B(_),I(he.$$.fragment,_),_.forEach(C),this.h()},h(){ee(o,"class","mb-2"),ee(m,"class","d-flex flex-row justify-content-start gap-2 w-100"),ee(z,"class","mb-2"),ee(G,"class","d-flex flex-row justify-content-start gap-2"),ee(Se,"class","mb-2"),ee(t,"class","d-flex flex-column justify-content-start gap-4")},m(u,_){x(u,t,_),H(n,t,null),h(t,i),h(t,f),h(f,o),h(o,g),h(f,c),h(f,m),H(w,m,null),h(m,A),H(D,m,null),h(t,ne),h(t,R),h(R,z),h(z,U),h(R,T),h(R,G),H(E,G,null),h(G,oe),H(V,G,null),h(t,ae),H(j,t,null),h(t,W),H(K,t,null),h(t,Ce),H(te,t,null),h(t,we),H(se,t,null),h(t,ve),H(d,t,null),h(t,Re),H(ce,t,null),h(t,Ae),H(re,t,null),h(t,Ge),h(t,be),h(be,Se),h(Se,Le),h(be,Ue),H(pe,be,null),h(t,ye),H(fe,t,null),h(t,qe),H(he,t,null),a=!0},p(u,_){const Me={};!s&&_[0]&1024&&(s=!0,Me.checked=u[10],M(()=>s=!1)),n.$set(Me);const Ee={};!Q&&_[0]&8192&&(Q=!0,Ee.selected=u[13],M(()=>Q=!1)),w.$set(Ee);const ke={};_[1]&1024&&(ke.$$scope={dirty:_,ctx:u}),!L&&_[0]&32768&&(L=!0,ke.value=u[15],M(()=>L=!1)),D.$set(ke);const F={};!ue&&_[0]&16384&&(ue=!0,F.selected=u[14],M(()=>ue=!1)),E.$set(F);const _n={};_[1]&1024&&(_n.$$scope={dirty:_,ctx:u}),!ge&&_[0]&65536&&(ge=!0,_n.value=u[16],M(()=>ge=!1)),V.$set(_n);const un={};!de&&_[0]&2&&(de=!0,un.value=u[1],M(()=>de=!1)),j.$set(un);const on={};!q&&_[0]&4&&(q=!0,on.value=u[2],M(()=>q=!1)),K.$set(on);const Mn={};!le&&_[0]&8&&(le=!0,Mn.value=u[3],M(()=>le=!1)),te.$set(Mn);const Nn={};!v&&_[0]&16&&(v=!0,Nn.value=u[4],M(()=>v=!1)),se.$set(Nn);const En={};!De&&_[0]&32&&(De=!0,En.value=u[5],M(()=>De=!1)),d.$set(En);const Dn={};!Fe&&_[0]&64&&(Fe=!0,Dn.value=u[6],M(()=>Fe=!1)),ce.$set(Dn);const vn={};_[0]&2048&&(vn.placeholder="Brands: All ("+u[11].length+")"),!Ve&&_[0]&2048&&(Ve=!0,vn.options=u[11],M(()=>Ve=!1)),!je&&_[0]&4096&&(je=!0,vn.selected=u[12],M(()=>je=!1)),re.$set(vn);const Rn={};!Te&&_[0]&131072&&(Te=!0,Rn.selected=u[17],M(()=>Te=!1)),pe.$set(Rn);const Fn={};!ze&&_[0]&512&&(ze=!0,Fn.value=u[9],M(()=>ze=!1)),fe.$set(Fn);const kn={};!Je&&_[0]&128&&(Je=!0,kn.options=u[7],M(()=>Je=!1)),!en&&_[0]&256&&(en=!0,kn.selected=u[8],M(()=>en=!1)),he.$set(kn)},i(u){a||(O(n.$$.fragment,u),O(w.$$.fragment,u),O(D.$$.fragment,u),O(E.$$.fragment,u),O(V.$$.fragment,u),O(j.$$.fragment,u),O(K.$$.fragment,u),O(te.$$.fragment,u),O(se.$$.fragment,u),O(d.$$.fragment,u),O(ce.$$.fragment,u),O(re.$$.fragment,u),O(pe.$$.fragment,u),O(fe.$$.fragment,u),O(he.$$.fragment,u),a=!0)},o(u){k(n.$$.fragment,u),k(w.$$.fragment,u),k(D.$$.fragment,u),k(E.$$.fragment,u),k(V.$$.fragment,u),k(j.$$.fragment,u),k(K.$$.fragment,u),k(te.$$.fragment,u),k(se.$$.fragment,u),k(d.$$.fragment,u),k(ce.$$.fragment,u),k(re.$$.fragment,u),k(pe.$$.fragment,u),k(fe.$$.fragment,u),k(he.$$.fragment,u),a=!1},d(u){u&&C(t),N(n),N(w),N(D),N(E),N(V),N(j),N(K),N(te),N(se),N(d),N(ce),N(re),N(pe),N(fe),N(he)}}}function _t(e){let t,n;return t=new nt({props:{header:"More filters",isOpen:e[0],placement:"end",toggle:e[18],$$slots:{default:[mt]},$$scope:{ctx:e}}}),{c(){P(t.$$.fragment)},l(s){I(t.$$.fragment,s)},m(s,i){H(t,s,i),n=!0},p(s,i){const f={};i[0]&1&&(f.isOpen=s[0]),i[0]&262142|i[1]&1024&&(f.$$scope={dirty:i,ctx:s}),t.$set(f)},i(s){n||(O(t.$$.fragment,s),n=!0)},o(s){k(t.$$.fragment,s),n=!1},d(s){N(t,s)}}}function gt(e,t,n){let{sideMenuOpen:s=!1}=t;const i=()=>n(0,s=!s);let{concurrentBuilds:f=0}=t,{selfHostedRunners:o=0}=t,{linuxMonthlyCloudMins:g=0}=t,{dockerMonthlyCloudMins:c=0}=t,{windowsMonthlyCloudMins:m=0}=t,{macOSMonthlyCloudMins:w=0}=t,{allFieldNames:Q=[]}=t,{fieldsSelected:A=[]}=t,{currentPagination:D=10}=t,{packagedChecked:L}=t,{allBrands:ne=[]}=t,{brandsSelected:R=[]}=t,{cloudOSsSelected:z=[]}=t,{selfHostedOSsSelected:U=[]}=t,{boolCloudBuild:T=xe[0]}=t,{boolSelfHostedBuild:G=xe[0]}=t,{supportSelected:E=[]}=t;function ue(d){L=d,n(10,L)}function oe(d){z=d,n(13,z)}function V(d){T=d,n(15,T)}function ge(d){U=d,n(14,U)}function ae(d){G=d,n(16,G)}function j(d){f=d,n(1,f)}function de(d){o=d,n(2,o)}function W(d){g=d,n(3,g)}function K(d){c=d,n(4,c)}function q(d){m=d,n(5,m)}function Ce(d){w=d,n(6,w)}function te(d){ne=d,n(11,ne)}function le(d){R=d,n(12,R)}function we(d){E=d,n(17,E)}function se(d){D=d,n(9,D)}function v(d){Q=d,n(7,Q)}function ve(d){A=d,n(8,A)}return e.$$set=d=>{"sideMenuOpen"in d&&n(0,s=d.sideMenuOpen),"concurrentBuilds"in d&&n(1,f=d.concurrentBuilds),"selfHostedRunners"in d&&n(2,o=d.selfHostedRunners),"linuxMonthlyCloudMins"in d&&n(3,g=d.linuxMonthlyCloudMins),"dockerMonthlyCloudMins"in d&&n(4,c=d.dockerMonthlyCloudMins),"windowsMonthlyCloudMins"in d&&n(5,m=d.windowsMonthlyCloudMins),"macOSMonthlyCloudMins"in d&&n(6,w=d.macOSMonthlyCloudMins),"allFieldNames"in d&&n(7,Q=d.allFieldNames),"fieldsSelected"in d&&n(8,A=d.fieldsSelected),"currentPagination"in d&&n(9,D=d.currentPagination),"packagedChecked"in d&&n(10,L=d.packagedChecked),"allBrands"in d&&n(11,ne=d.allBrands),"brandsSelected"in d&&n(12,R=d.brandsSelected),"cloudOSsSelected"in d&&n(13,z=d.cloudOSsSelected),"selfHostedOSsSelected"in d&&n(14,U=d.selfHostedOSsSelected),"boolCloudBuild"in d&&n(15,T=d.boolCloudBuild),"boolSelfHostedBuild"in d&&n(16,G=d.boolSelfHostedBuild),"supportSelected"in d&&n(17,E=d.supportSelected)},[s,f,o,g,c,m,w,Q,A,D,L,ne,R,z,U,T,G,E,i,ue,oe,V,ge,ae,j,de,W,K,q,Ce,te,le,we,se,v,ve]}class ht extends Bn{constructor(t){super(),Pn(this,t,gt,_t,In,{sideMenuOpen:0,concurrentBuilds:1,selfHostedRunners:2,linuxMonthlyCloudMins:3,dockerMonthlyCloudMins:4,windowsMonthlyCloudMins:5,macOSMonthlyCloudMins:6,allFieldNames:7,fieldsSelected:8,currentPagination:9,packagedChecked:10,allBrands:11,brandsSelected:12,cloudOSsSelected:13,selfHostedOSsSelected:14,boolCloudBuild:15,boolSelfHostedBuild:16,supportSelected:17},null,[-1,-1])}}function Wn(e,t,n){const s=e.slice();return s[60]=t[n],s}function bt(e){let t;return{c(){t=$e("Self-hosted")},l(n){t=Be(n,"Self-hosted")},m(n,s){x(n,t,s)},d(n){n&&C(t)}}}function St(e){let t=e[60]+"",n;return{c(){n=$e(t)},l(s){n=Be(s,t)},m(s,i){x(s,n,i)},p:Cn,d(s){s&&C(n)}}}function qn(e){let t,n;return t=new Qn({props:{size:"sm",color:"light",active:e[3]===e[60],$$slots:{default:[St]},$$scope:{ctx:e}}}),t.$on("click",e[34]),{c(){P(t.$$.fragment)},l(s){I(t.$$.fragment,s)},m(s,i){H(t,s,i),n=!0},p(s,i){const f={};i[0]&8&&(f.active=s[3]===s[60]),i[2]&2&&(f.$$scope={dirty:i,ctx:s}),t.$set(f)},i(s){n||(O(t.$$.fragment,s),n=!0)},o(s){k(t.$$.fragment,s),n=!1},d(s){N(t,s)}}}function Mt(e){let t,n,s=Gn,i=[];for(let o=0;o<s.length;o+=1)i[o]=qn(Wn(e,s,o));const f=o=>k(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();t=hn()},l(o){for(let g=0;g<i.length;g+=1)i[g].l(o);t=hn()},m(o,g){for(let c=0;c<i.length;c+=1)i[c].m(o,g);x(o,t,g),n=!0},p(o,g){if(g[0]&8){s=Gn;let c;for(c=0;c<s.length;c+=1){const m=Wn(o,s,c);i[c]?(i[c].p(m,g),O(i[c],1)):(i[c]=qn(m),i[c].c(),O(i[c],1),i[c].m(t.parentNode,t))}for(xn(),c=s.length;c<i.length;c+=1)f(c);et()}},i(o){if(!n){for(let g=0;g<s.length;g+=1)O(i[g]);n=!0}},o(o){i=i.filter(Boolean);for(let g=0;g<i.length;g+=1)k(i[g]);n=!1},d(o){Hn(i,o),o&&C(t)}}}function Ct(e){let t;return{c(){t=$e("CD")},l(n){t=Be(n,"CD")},m(n,s){x(n,t,s)},d(n){n&&C(t)}}}function wt(e){let t,n;return t=new Kn({props:{option:e[59],slot:"selected"}}),{c(){P(t.$$.fragment)},l(s){I(t.$$.fragment,s)},m(s,i){H(t,s,i),n=!0},p(s,i){const f={};i[1]&268435456&&(f.option=s[59]),t.$set(f)},i(s){n||(O(t.$$.fragment,s),n=!0)},o(s){k(t.$$.fragment,s),n=!1},d(s){N(t,s)}}}function vt(e){let t,n;return t=new Kn({props:{option:e[59],slot:"option"}}),{c(){P(t.$$.fragment)},l(s){I(t.$$.fragment,s)},m(s,i){H(t,s,i),n=!0},p(s,i){const f={};i[1]&268435456&&(f.option=s[59]),t.$set(f)},i(s){n||(O(t.$$.fragment,s),n=!0)},o(s){k(t.$$.fragment,s),n=!1},d(s){N(t,s)}}}function Ot(e){let t;return{c(){t=$e("More filters")},l(n){t=Be(n,"More filters")},m(n,s){x(n,t,s)},d(n){n&&C(t)}}}function kt(e){let t,n,s,i,f,o,g,c,m,w,Q,A,D,L,ne,R,z,U,T,G,E,ue,oe,V,ge,ae,j,de,W,K,q,Ce,te,le,we,se,v,ve,d,De,Re,ce,Fe,Ae,re,Ve,je,Ge,be,Se,Le,Ue,pe,Te,ye,fe,ze,qe;g=new lt({props:{height:18,width:18}});function he(l){e[33](l)}let Je={classNames:"bg-light",label:"Users",min:"1",placeholder:"users",width:"60px"};e[1]!==void 0&&(Je.value=e[1]),w=new Ze({props:Je}),b.push(()=>S(w,"value",he)),L=new jn({props:{class:"my-auto",for:"runnersInput",$$slots:{default:[bt]},$$scope:{ctx:e}}}),R=new st({props:{$$slots:{default:[Mt]},$$scope:{ctx:e}}}),T=new jn({props:{class:"my-auto",for:"runnersInput",$$slots:{default:[Ct]},$$scope:{ctx:e}}});function en(l){e[35](l)}let a={class:"my-auto",id:"s2",type:"switch"};e[10]!==void 0&&(a.checked=e[10]),E=new On({props:a}),b.push(()=>S(E,"checked",en));function Pe(l){e[36](l)}let Ie={options:rt,outerDivClass:"bg-light",placeholder:"Git Platforms",$$slots:{option:[vt,({option:l})=>({59:l}),({option:l})=>[0,l?268435456:0]],selected:[wt,({option:l})=>({59:l}),({option:l})=>[0,l?268435456:0]]},$$scope:{ctx:e}};e[11]!==void 0&&(Ie.selected=e[11]),V=new gn({props:Ie}),b.push(()=>S(V,"selected",Pe)),j=new Qn({props:{color:"light",$$slots:{default:[Ot]},$$scope:{ctx:e}}}),j.$on("click",e[31]),W=new it({props:{autoWidth:!0,className:{table:"small w-auto"},columns:e[23].length===0?e[21]:e[29](),data:e[19],pagination:{enabled:!0,limit:e[24]==null?Jn:e[24],summary:!0},resizable:!0,search:!0,sort:!0,style:{table:{"white-space":"nowrap"},td:{"min-width":"100px"}}}}),W.$on("rowClick",e[37]);function He(l){e[38](l)}let J={allFields:e[21],fullRow:e[0][e[27]]};e[25]!==void 0&&(J.rowModalOpen=e[25]),q=new ut({props:J}),b.push(()=>S(q,"rowModalOpen",He));function Ne(l){e[39](l)}let nn={category:"CIs",title:"CI/CD Help"};e[26]!==void 0&&(nn.helpModalOpen=e[26]),le=new ot({props:nn}),b.push(()=>S(le,"helpModalOpen",Ne));function bn(l){e[40](l)}function dn(l){e[41](l)}function Sn(l){e[42](l)}function rn(l){e[43](l)}function Ye(l){e[44](l)}function fn(l){e[45](l)}function r(l){e[46](l)}function Y(l){e[47](l)}function Qe(l){e[48](l)}function an(l){e[49](l)}function Ke(l){e[50](l)}function me(l){e[51](l)}function tn(l){e[52](l)}function ln(l){e[53](l)}function cn(l){e[54](l)}function pn(l){e[55](l)}function wn(l){e[56](l)}function mn(l){e[57](l)}let y={};return e[22]!==void 0&&(y.allBrands=e[22]),e[18]!==void 0&&(y.allFieldNames=e[18]),e[15]!==void 0&&(y.boolCloudBuild=e[15]),e[16]!==void 0&&(y.boolSelfHostedBuild=e[16]),e[12]!==void 0&&(y.brandsSelected=e[12]),e[13]!==void 0&&(y.cloudOSsSelected=e[13]),e[2]!==void 0&&(y.concurrentBuilds=e[2]),e[24]!==void 0&&(y.currentPagination=e[24]),e[6]!==void 0&&(y.dockerMonthlyCloudMins=e[6]),e[23]!==void 0&&(y.fieldsSelected=e[23]),e[5]!==void 0&&(y.linuxMonthlyCloudMins=e[5]),e[8]!==void 0&&(y.macOSMonthlyCloudMins=e[8]),e[9]!==void 0&&(y.packagedChecked=e[9]),e[14]!==void 0&&(y.selfHostedOSsSelected=e[14]),e[4]!==void 0&&(y.selfHostedRunners=e[4]),e[28]!==void 0&&(y.sideMenuOpen=e[28]),e[17]!==void 0&&(y.supportSelected=e[17]),e[7]!==void 0&&(y.windowsMonthlyCloudMins=e[7]),v=new ht({props:y}),b.push(()=>S(v,"allBrands",bn)),b.push(()=>S(v,"allFieldNames",dn)),b.push(()=>S(v,"boolCloudBuild",Sn)),b.push(()=>S(v,"boolSelfHostedBuild",rn)),b.push(()=>S(v,"brandsSelected",Ye)),b.push(()=>S(v,"cloudOSsSelected",fn)),b.push(()=>S(v,"concurrentBuilds",r)),b.push(()=>S(v,"currentPagination",Y)),b.push(()=>S(v,"dockerMonthlyCloudMins",Qe)),b.push(()=>S(v,"fieldsSelected",an)),b.push(()=>S(v,"linuxMonthlyCloudMins",Ke)),b.push(()=>S(v,"macOSMonthlyCloudMins",me)),b.push(()=>S(v,"packagedChecked",tn)),b.push(()=>S(v,"selfHostedOSsSelected",ln)),b.push(()=>S(v,"selfHostedRunners",cn)),b.push(()=>S(v,"sideMenuOpen",pn)),b.push(()=>S(v,"supportSelected",wn)),b.push(()=>S(v,"windowsMonthlyCloudMins",mn)),{c(){t=$(),n=X("div"),s=X("p"),i=$e("CI/CD Comparisons"),f=$(),o=X("a"),P(g.$$.fragment),c=$(),m=X("div"),P(w.$$.fragment),A=$(),D=X("div"),P(L.$$.fragment),ne=$(),P(R.$$.fragment),z=$(),U=X("div"),P(T.$$.fragment),G=$(),P(E.$$.fragment),oe=$(),P(V.$$.fragment),ae=$(),P(j.$$.fragment),de=$(),P(W.$$.fragment),K=$(),P(q.$$.fragment),te=$(),P(le.$$.fragment),se=$(),P(v.$$.fragment),this.h()},l(l){Zn("svelte-mn2mnz",document.head).forEach(C),t=B(l),n=Z(l,"DIV",{class:!0,style:!0});var We=ie(n);s=Z(We,"P",{class:!0});var Xe=ie(s);i=Be(Xe,"CI/CD Comparisons"),Xe.forEach(C),f=B(We),o=Z(We,"A",{href:!0});var sn=ie(o);I(g.$$.fragment,sn),sn.forEach(C),We.forEach(C),c=B(l),m=Z(l,"DIV",{class:!0});var _e=ie(m);I(w.$$.fragment,_e),A=B(_e),D=Z(_e,"DIV",{class:!0});var Oe=ie(D);I(L.$$.fragment,Oe),ne=B(Oe),I(R.$$.fragment,Oe),Oe.forEach(C),z=B(_e),U=Z(_e,"DIV",{class:!0});var u=ie(U);I(T.$$.fragment,u),G=B(u),I(E.$$.fragment,u),u.forEach(C),oe=B(_e),I(V.$$.fragment,_e),ae=B(_e),I(j.$$.fragment,_e),_e.forEach(C),de=B(l),I(W.$$.fragment,l),K=B(l),I(q.$$.fragment,l),te=B(l),I(le.$$.fragment,l),se=B(l),I(v.$$.fragment,l),this.h()},h(){document.title="CI/CD Comparison",ee(s,"class","h2 opacity-75"),ee(o,"href",""),ee(n,"class","d-flex flex-row justify-content-center align-items-top gap-1"),$n(n,"margin-top","75px",1),ee(D,"class","d-flex flex-row gap-2 mb-0 align-content-center"),ee(U,"class","d-flex flex-row gap-1"),ee(m,"class","d-flex flex-row flex-wrap gap-4 justify-content-center align-content-center mb-3 mt-4")},m(l,p){x(l,t,p),x(l,n,p),h(n,s),h(s,i),h(n,f),h(n,o),H(g,o,null),x(l,c,p),x(l,m,p),H(w,m,null),h(m,A),h(m,D),H(L,D,null),h(D,ne),H(R,D,null),h(m,z),h(m,U),H(T,U,null),h(U,G),H(E,U,null),h(m,oe),H(V,m,null),h(m,ae),H(j,m,null),x(l,de,p),H(W,l,p),x(l,K,p),H(q,l,p),x(l,te,p),H(le,l,p),x(l,se,p),H(v,l,p),fe=!0,ze||(qe=Yn(o,"click",e[32]),ze=!0)},p(l,p){const We={};!Q&&p[0]&2&&(Q=!0,We.value=l[1],M(()=>Q=!1)),w.$set(We);const Xe={};p[2]&2&&(Xe.$$scope={dirty:p,ctx:l}),L.$set(Xe);const sn={};p[0]&8|p[2]&2&&(sn.$$scope={dirty:p,ctx:l}),R.$set(sn);const _e={};p[2]&2&&(_e.$$scope={dirty:p,ctx:l}),T.$set(_e);const Oe={};!ue&&p[0]&1024&&(ue=!0,Oe.checked=l[10],M(()=>ue=!1)),E.$set(Oe);const u={};p[1]&268435456|p[2]&2&&(u.$$scope={dirty:p,ctx:l}),!ge&&p[0]&2048&&(ge=!0,u.selected=l[11],M(()=>ge=!1)),V.$set(u);const _={};p[2]&2&&(_.$$scope={dirty:p,ctx:l}),j.$set(_);const Me={};p[0]&10485760&&(Me.columns=l[23].length===0?l[21]:l[29]()),p[0]&524288&&(Me.data=l[19]),p[0]&16777216&&(Me.pagination={enabled:!0,limit:l[24]==null?Jn:l[24],summary:!0}),W.$set(Me);const Ee={};p[0]&2097152&&(Ee.allFields=l[21]),p[0]&134217729&&(Ee.fullRow=l[0][l[27]]),!Ce&&p[0]&33554432&&(Ce=!0,Ee.rowModalOpen=l[25],M(()=>Ce=!1)),q.$set(Ee);const ke={};!we&&p[0]&67108864&&(we=!0,ke.helpModalOpen=l[26],M(()=>we=!1)),le.$set(ke);const F={};!ve&&p[0]&4194304&&(ve=!0,F.allBrands=l[22],M(()=>ve=!1)),!d&&p[0]&262144&&(d=!0,F.allFieldNames=l[18],M(()=>d=!1)),!De&&p[0]&32768&&(De=!0,F.boolCloudBuild=l[15],M(()=>De=!1)),!Re&&p[0]&65536&&(Re=!0,F.boolSelfHostedBuild=l[16],M(()=>Re=!1)),!ce&&p[0]&4096&&(ce=!0,F.brandsSelected=l[12],M(()=>ce=!1)),!Fe&&p[0]&8192&&(Fe=!0,F.cloudOSsSelected=l[13],M(()=>Fe=!1)),!Ae&&p[0]&4&&(Ae=!0,F.concurrentBuilds=l[2],M(()=>Ae=!1)),!re&&p[0]&16777216&&(re=!0,F.currentPagination=l[24],M(()=>re=!1)),!Ve&&p[0]&64&&(Ve=!0,F.dockerMonthlyCloudMins=l[6],M(()=>Ve=!1)),!je&&p[0]&8388608&&(je=!0,F.fieldsSelected=l[23],M(()=>je=!1)),!Ge&&p[0]&32&&(Ge=!0,F.linuxMonthlyCloudMins=l[5],M(()=>Ge=!1)),!be&&p[0]&256&&(be=!0,F.macOSMonthlyCloudMins=l[8],M(()=>be=!1)),!Se&&p[0]&512&&(Se=!0,F.packagedChecked=l[9],M(()=>Se=!1)),!Le&&p[0]&16384&&(Le=!0,F.selfHostedOSsSelected=l[14],M(()=>Le=!1)),!Ue&&p[0]&16&&(Ue=!0,F.selfHostedRunners=l[4],M(()=>Ue=!1)),!pe&&p[0]&268435456&&(pe=!0,F.sideMenuOpen=l[28],M(()=>pe=!1)),!Te&&p[0]&131072&&(Te=!0,F.supportSelected=l[17],M(()=>Te=!1)),!ye&&p[0]&128&&(ye=!0,F.windowsMonthlyCloudMins=l[7],M(()=>ye=!1)),v.$set(F)},i(l){fe||(O(g.$$.fragment,l),O(w.$$.fragment,l),O(L.$$.fragment,l),O(R.$$.fragment,l),O(T.$$.fragment,l),O(E.$$.fragment,l),O(V.$$.fragment,l),O(j.$$.fragment,l),O(W.$$.fragment,l),O(q.$$.fragment,l),O(le.$$.fragment,l),O(v.$$.fragment,l),fe=!0)},o(l){k(g.$$.fragment,l),k(w.$$.fragment,l),k(L.$$.fragment,l),k(R.$$.fragment,l),k(T.$$.fragment,l),k(E.$$.fragment,l),k(V.$$.fragment,l),k(j.$$.fragment,l),k(W.$$.fragment,l),k(q.$$.fragment,l),k(le.$$.fragment,l),k(v.$$.fragment,l),fe=!1},d(l){l&&C(t),l&&C(n),N(g),l&&C(c),l&&C(m),N(w),N(L),N(R),N(T),N(E),N(V),N(j),l&&C(de),N(W,l),l&&C(K),N(q,l),l&&C(te),N(le,l),l&&C(se),N(v,l),ze=!1,qe()}}}let Jn=10;function $t(e,t,n){let s=[],i=[],f=[],o=0,g=[],c=[],m=1,w=0,Q="Both",A=0,D=0,L=0,ne=0,R=0,z=!1,U=!1,T=[],G=[],E=[],ue=[],oe=[],V=xe[0],ge=xe[0],ae=[],j=10,de=!1,W=!1,K=0,q=!1;(()=>{const a=Ln.CIs[0];n(0,i=Ln.CIs.slice(1));let Pe=[],Ie=[],He=[];return Object.keys(a).forEach((J,Ne)=>{J==="colID"?(n(20,o=Ne),Pe[Ne]={id:J,name:a[J],hidden:!0}):(Pe[Ne]={id:J,name:a[J]},Ie[Ne]=a[J])}),i.forEach(J=>He.includes(J.Brand)?"":He=[...He,J.Brand]),n(21,g=Pe),Pe.forEach(J=>dt.includes(J.id)?null:n(23,G=[...G,J.name])),n(18,s=Ie),n(22,c=He),!0})();function Ce(){function a(r){return E.length===0||E.includes(r.Brand)}function Pe(r){return!z||z&&r.Packaged==="Yes"}function Ie(r){return Q==="Both"||r["Self-hosted"]==="Both"||r["Self-hosted"]===Q}function He(r){return!U||U&&r.CD==="Yes"}function J(r){return T.length===0||r.GitPlatformsCompatible==="All"||T.some(Y=>r.GitPlatformsCompatible.split(", ").includes(Y))}function Ne(r){return ae.length===0||ae.some(Y=>r.CommercialSupport.includes(Y))}function nn(r){return ue.length===0||(V==="Or"?ue.some(Y=>r.CloudBuildOSs.split(", ").includes(Y)):ue.every(Y=>r.CloudBuildOSs.split(", ").includes(Y)))}function bn(r){return oe.length===0||(ge==="Or"?oe.some(Y=>r["Self-hostedRunnersBuildOSs"].split(", ").includes(Y)):oe.every(Y=>r["Self-hostedRunnersBuildOSs"].split(", ").includes(Y)))}function dn(r){return r.MaxUsers==="∞"||m<=parseInt(r.MaxUsers)}function Sn(r){return r.NCloudConcurrentBuilds==="∞"||w<=parseInt(r.NCloudConcurrentBuilds)||r.PriceExtraParallelBuild!=="N/A"}function rn(r){return r["NSelf-hostedRunners"]==="∞"||A<=parseInt(r["NSelf-hostedRunners"])||r.PriceExtraRunners!=="N/A"}function Ye(r,Y,Qe){return Qe===0?!0:!(r[`CreditsPerCloudBuildMinute${Y}`]==="N/A"||r.PricePerExtraCredit==="N/A"&&parseFloat(r.IncludedCreditsPerMonth)<Qe)}function fn(r){function Y(){if(r.IncludedUsers==="∞")return 0;const me=parseInt(r.IncludedUsers);return me>=m?0:(m-me)*parseFloat(r.PriceExtraUser$)}function Qe(){if(r.PriceExtraParallelBuild==="N/A"||r.NCloudConcurrentBuilds==="∞")return 0;const me=parseInt(r.NCloudConcurrentBuilds);return me>=w?0:(w-me)*parseFloat(r.PriceExtraParallelBuild)}function an(){if(r.PriceExtraRunners==="N/A"||r["NSelf-hostedRunners"]==="∞")return 0;const me=parseInt(r["NSelf-hostedRunners"]);return me>=A?0:(A-me)*parseFloat(r.PriceExtraRunners)}function Ke(me,tn){if(tn===0)return 0;const ln=parseFloat(r[`CreditsPerCloudBuildMinute${me}`]);if(ln===0||r.IncludedCreditsPerMonth==="∞")return 0;const cn=parseFloat(r.IncludedCreditsPerMonth);if(r.PricePerExtraCredit==="N/A"&&cn>=tn)return 0;const pn=parseFloat(r.PricePerExtraCredit),mn=tn*ln-cn;return mn<0?0:mn*pn}r.CalculatedCost=Math.round((parseFloat(r.LicenseCost$PerMonth)+Y()+Qe()+an()+Ke("Linux",D)+Ke("Docker",L)+Ke("Windows",ne)+Ke("macOS",R)+Number.EPSILON)*100)/100}n(19,f=i.filter(r=>a(r)&&Pe(r)&&J(r)&&nn(r)&&bn(r)&&dn(r)&&He(r)&&Ie(r)&&Sn(r)&&rn(r)&&Ye(r,"Linux",D)&&Ye(r,"Docker",L)&&Ye(r,"Windows",ne)&&Ye(r,"macOS",R)&&Ne(r)).map(r=>(fn(r),r)))}function te(){return g.filter(a=>a.id==="colID"||G.includes(a.name))}function le(a){n(27,K=a-1),n(25,de=!de)}function we(){n(28,q=!q)}const se=a=>n(26,W=!W);function v(a){m=a,n(1,m)}const ve=a=>n(3,Q=a.srcElement.innerText);function d(a){U=a,n(10,U)}function De(a){T=a,n(11,T)}const Re=a=>le(a.detail[1]._cells[o].data);function ce(a){de=a,n(25,de)}function Fe(a){W=a,n(26,W)}function Ae(a){c=a,n(22,c)}function re(a){s=a,n(18,s)}function Ve(a){V=a,n(15,V)}function je(a){ge=a,n(16,ge)}function Ge(a){E=a,n(12,E)}function be(a){ue=a,n(13,ue)}function Se(a){w=a,n(2,w)}function Le(a){j=a,n(24,j)}function Ue(a){L=a,n(6,L)}function pe(a){G=a,n(23,G)}function Te(a){D=a,n(5,D)}function ye(a){R=a,n(8,R)}function fe(a){z=a,n(9,z)}function ze(a){oe=a,n(14,oe)}function qe(a){A=a,n(4,A)}function he(a){q=a,n(28,q)}function Je(a){ae=a,n(17,ae)}function en(a){ne=a,n(7,ne)}return e.$$.update=()=>{e.$$.dirty[0]&262143&&Ce()},[i,m,w,Q,A,D,L,ne,R,z,U,T,E,ue,oe,V,ge,ae,s,f,o,g,c,G,j,de,W,K,q,te,le,we,se,v,ve,d,De,Re,ce,Fe,Ae,re,Ve,je,Ge,be,Se,Le,Ue,pe,Te,ye,fe,ze,qe,he,Je,en]}class Nt extends Bn{constructor(t){super(),Pn(this,t,$t,kt,In,{},null,[-1,-1,-1])}}export{Nt as default};
