import{S as vn,i as On,s as $n,k as J,a as k,q as $e,l as Q,m as ne,c as P,r as Be,h as C,n as Y,E as En,p as Mn,b as te,F as h,P as jn,u as yn,B as mn,w as I,x as E,y as H,f as $,t as B,z as N,M as b,N as S,O as M,e as an,Q as Bn,L as zn,g as Wn,d as Jn}from"../../../chunks/index-e15c9d95.js";import{O as Qn,M as fn,c as Cn,N as qe,d as ye,e as Hn,s as Yn,I as Kn,L as Nn,B as Xn,a as Tn,G as Zn,H as xn,f as et,b as Dn,g as nt}from"../../../chunks/Grids-51487c7a.js";/* empty css                             */import{c as Fn}from"../../../chunks/CIs-2ab24d3f.js";function tt(e){let t,n,l,i,f,o,p;return{c(){t=J("span"),n=J("img"),i=k(),f=$e(e[0]),this.h()},l(a){t=Q(a,"SPAN",{class:!0});var g=ne(t);n=Q(g,"IMG",{alt:!0,height:!0,src:!0}),i=P(g),f=Be(g,e[0]),g.forEach(C),this.h()},h(){Y(n,"alt",e[4]),Y(n,"height",e[1]),n.hidden=e[5],En(n.src,l=e[3])||Y(n,"src",l),Y(t,"class","svelte-gx6k8d"),Mn(t,"gap",e[2])},m(a,g){te(a,t,g),h(t,n),h(t,i),h(t,f),o||(p=jn(n,"error",e[6]),o=!0)},p(a,[g]){g&16&&Y(n,"alt",a[4]),g&2&&Y(n,"height",a[1]),g&32&&(n.hidden=a[5]),g&8&&!En(n.src,l=a[3])&&Y(n,"src",l),g&1&&yn(f,a[0]),g&4&&Mn(t,"gap",a[2])},i:mn,o:mn,d(a){a&&C(t),o=!1,p()}}}function lt(e,t,n){let l,{option:i=""}=t,{height:f="20px"}=t,{gap:o="4pt"}=t;const p="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons";let a="";function g(){l==="assembla"?n(3,a="https://seeklogo.com/images/A/assembla-logo-0BE7A98406-seeklogo.com.png"):l==="github"?n(3,a="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"):l==="other"?n(3,a="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"):n(3,a=`${p}/file_type_${l}.svg`)}let v;const W=()=>n(5,v=!0);return e.$$set=A=>{"option"in A&&n(0,i=A.option),"height"in A&&n(1,f=A.height),"gap"in A&&n(2,o=A.gap)},e.$$.update=()=>{e.$$.dirty&1&&n(4,l=String(i).toLowerCase().replaceAll("+","p").replace("#","sharp").replace("javascript","js").replace("bitbucket","bitbucketpipeline").replace("dart","dartlang")),e.$$.dirty&16&&l&&g(),e.$$.dirty&8&&n(5,v=!1)},[i,f,o,a,l,v,W]}class qn extends vn{constructor(t){super(),On(this,t,lt,tt,$n,{option:0,height:1,gap:2})}}function Rn(e,t,n){const l=e.slice();return l[34]=t[n],l}function An(e,t,n){const l=e.slice();return l[34]=t[n],l}function Vn(e){let t,n=e[34]+"",l;return{c(){t=J("option"),l=$e(n),this.h()},l(i){t=Q(i,"OPTION",{});var f=ne(t);l=Be(f,n),f.forEach(C),this.h()},h(){t.__value=e[34],t.value=t.__value},m(i,f){te(i,t,f),h(t,l)},p:mn,d(i){i&&C(t)}}}function st(e){let t,n=ye,l=[];for(let i=0;i<n.length;i+=1)l[i]=Vn(An(e,n,i));return{c(){for(let i=0;i<l.length;i+=1)l[i].c();t=an()},l(i){for(let f=0;f<l.length;f+=1)l[f].l(i);t=an()},m(i,f){for(let o=0;o<l.length;o+=1)l[o].m(i,f);te(i,t,f)},p(i,f){if(f&0){n=ye;let o;for(o=0;o<n.length;o+=1){const p=An(i,n,o);l[o]?l[o].p(p,f):(l[o]=Vn(p),l[o].c(),l[o].m(t.parentNode,t))}for(;o<l.length;o+=1)l[o].d(1);l.length=n.length}},d(i){Bn(l,i),i&&C(t)}}}function Gn(e){let t,n=e[34]+"",l;return{c(){t=J("option"),l=$e(n),this.h()},l(i){t=Q(i,"OPTION",{});var f=ne(t);l=Be(f,n),f.forEach(C),this.h()},h(){t.__value=e[34],t.value=t.__value},m(i,f){te(i,t,f),h(t,l)},p:mn,d(i){i&&C(t)}}}function it(e){let t,n=ye,l=[];for(let i=0;i<n.length;i+=1)l[i]=Gn(Rn(e,n,i));return{c(){for(let i=0;i<l.length;i+=1)l[i].c();t=an()},l(i){for(let f=0;f<l.length;f+=1)l[f].l(i);t=an()},m(i,f){for(let o=0;o<l.length;o+=1)l[o].m(i,f);te(i,t,f)},p(i,f){if(f&0){n=ye;let o;for(o=0;o<n.length;o+=1){const p=Rn(i,n,o);l[o]?l[o].p(p,f):(l[o]=Gn(p),l[o].c(),l[o].m(t.parentNode,t))}for(;o<l.length;o+=1)l[o].d(1);l.length=n.length}},d(i){Bn(l,i),i&&C(t)}}}function ut(e){let t,n,l,i,f,o,p,a,g,v,W,A,F,V,K,U,j,w,T,X,D,oe,_e,G,fe,ge,R,de,re,Z,le,ve,x,O,Oe,se,d,Pe,ae,Ie,Ee,he,Se,He,Ne,ce,De,Fe,pe,Re,Ae,ie,Ve,c,Me,ee,Ce,q,be;function xe(u){e[18](u)}let en={options:Hn,placeholder:"Cloud OSs: All"};e[12]!==void 0&&(en.selected=e[12]),p=new fn({props:en}),b.push(()=>S(p,"selected",xe));function nn(u){e[19](u)}let tn={id:"exampleSelect",name:"select",style:"width: 80px",type:"select",$$slots:{default:[st]},$$scope:{ctx:e}};e[14]!==void 0&&(tn.value=e[14]),v=new Cn({props:tn}),b.push(()=>S(v,"value",nn));function Le(u){e[20](u)}let ln={options:Hn,placeholder:"Self-hosted OSs: All"};e[13]!==void 0&&(ln.selected=e[13]),w=new fn({props:ln}),b.push(()=>S(w,"selected",Le));function r(u){e[21](u)}let y={id:"exampleSelect",name:"select",style:"width: 80px",type:"select",$$slots:{default:[it]},$$scope:{ctx:e}};e[15]!==void 0&&(y.value=e[15]),D=new Cn({props:y}),b.push(()=>S(D,"value",r));function Ue(u){e[22](u)}let sn={label:"Cloud concurrent builds:",max:"1000",min:"0",placeholder:"builds"};e[1]!==void 0&&(sn.value=e[1]),G=new qe({props:sn}),b.push(()=>S(G,"value",Ue));function je(u){e[23](u)}let me={label:"Self-hosted runners:",max:"1000",min:"0",placeholder:"runners"};e[2]!==void 0&&(me.value=e[2]),R=new qe({props:me}),b.push(()=>S(R,"value",je));function ze(u){e[24](u)}let We={label:"Linux monthly cloud minutes:",min:"0",placeholder:"linuxMinutes",width:"90px"};e[3]!==void 0&&(We.value=e[3]),Z=new qe({props:We}),b.push(()=>S(Z,"value",ze));function un(u){e[25](u)}let on={label:"Docker monthly cloud minutes:",placeholder:"dockerMinutes",width:"90px"};e[4]!==void 0&&(on.value=e[4]),x=new qe({props:on}),b.push(()=>S(x,"value",un));function _n(u){e[26](u)}let Je={label:"Windows monthly cloud minutes:",placeholder:"windowsMinutes",width:"90px"};e[5]!==void 0&&(Je.value=e[5]),se=new qe({props:Je}),b.push(()=>S(se,"value",_n));function bn(u){e[27](u)}let gn={label:"macOS monthly cloud minutes:",placeholder:"macOSMinutes",width:"90px"};e[6]!==void 0&&(gn.value=e[6]),ae=new qe({props:gn}),b.push(()=>S(ae,"value",bn));function z(u){e[28](u)}let s={options:Yn,placeholder:"Support: All"};e[16]!==void 0&&(s.selected=e[16]),ce=new fn({props:s}),b.push(()=>S(ce,"selected",z));function m(u){e[29](u)}let we={label:"Results per page:",max:"70",min:"1",placeholder:"pagination"};e[9]!==void 0&&(we.value=e[9]),pe=new qe({props:we}),b.push(()=>S(pe,"value",m));function Qe(u){e[30](u)}function Ye(u){e[31](u)}let ue={placeholder:"Brands: All ("+e[10].length+")"};e[10]!==void 0&&(ue.options=e[10]),e[11]!==void 0&&(ue.selected=e[11]),ie=new fn({props:ue}),b.push(()=>S(ie,"options",Qe)),b.push(()=>S(ie,"selected",Ye));function Ge(u){e[32](u)}function ke(u){e[33](u)}let dn={placeholder:"Visible fields: All"};return e[7]!==void 0&&(dn.options=e[7]),e[8]!==void 0&&(dn.selected=e[8]),ee=new fn({props:dn}),b.push(()=>S(ee,"options",Ge)),b.push(()=>S(ee,"selected",ke)),{c(){t=J("div"),n=J("div"),l=J("p"),i=$e("Cloud OSs:"),f=k(),o=J("div"),I(p.$$.fragment),g=k(),I(v.$$.fragment),A=k(),F=J("div"),V=J("p"),K=$e("Self-hosted OSs:"),U=k(),j=J("div"),I(w.$$.fragment),X=k(),I(D.$$.fragment),_e=k(),I(G.$$.fragment),ge=k(),I(R.$$.fragment),re=k(),I(Z.$$.fragment),ve=k(),I(x.$$.fragment),Oe=k(),I(se.$$.fragment),Pe=k(),I(ae.$$.fragment),Ee=k(),he=J("div"),Se=J("p"),He=$e("Commercial support:"),Ne=k(),I(ce.$$.fragment),Fe=k(),I(pe.$$.fragment),Ae=k(),I(ie.$$.fragment),Me=k(),I(ee.$$.fragment),this.h()},l(u){t=Q(u,"DIV",{class:!0});var _=ne(t);n=Q(_,"DIV",{});var L=ne(n);l=Q(L,"P",{class:!0});var rn=ne(l);i=Be(rn,"Cloud OSs:"),rn.forEach(C),f=P(L),o=Q(L,"DIV",{class:!0});var Ke=ne(o);E(p.$$.fragment,Ke),g=P(Ke),E(v.$$.fragment,Ke),Ke.forEach(C),L.forEach(C),A=P(_),F=Q(_,"DIV",{});var Te=ne(F);V=Q(Te,"P",{class:!0});var cn=ne(V);K=Be(cn,"Self-hosted OSs:"),cn.forEach(C),U=P(Te),j=Q(Te,"DIV",{class:!0});var Xe=ne(j);E(w.$$.fragment,Xe),X=P(Xe),E(D.$$.fragment,Xe),Xe.forEach(C),Te.forEach(C),_e=P(_),E(G.$$.fragment,_),ge=P(_),E(R.$$.fragment,_),re=P(_),E(Z.$$.fragment,_),ve=P(_),E(x.$$.fragment,_),Oe=P(_),E(se.$$.fragment,_),Pe=P(_),E(ae.$$.fragment,_),Ee=P(_),he=Q(_,"DIV",{});var Ze=ne(he);Se=Q(Ze,"P",{class:!0});var pn=ne(Se);He=Be(pn,"Commercial support:"),pn.forEach(C),Ne=P(Ze),E(ce.$$.fragment,Ze),Ze.forEach(C),Fe=P(_),E(pe.$$.fragment,_),Ae=P(_),E(ie.$$.fragment,_),Me=P(_),E(ee.$$.fragment,_),_.forEach(C),this.h()},h(){Y(l,"class","mb-2"),Y(o,"class","d-flex flex-row justify-content-start gap-2 w-100"),Y(V,"class","mb-2"),Y(j,"class","d-flex flex-row justify-content-start gap-2"),Y(Se,"class","mb-2"),Y(t,"class","d-flex flex-column justify-content-start gap-4")},m(u,_){te(u,t,_),h(t,n),h(n,l),h(l,i),h(n,f),h(n,o),H(p,o,null),h(o,g),H(v,o,null),h(t,A),h(t,F),h(F,V),h(V,K),h(F,U),h(F,j),H(w,j,null),h(j,X),H(D,j,null),h(t,_e),H(G,t,null),h(t,ge),H(R,t,null),h(t,re),H(Z,t,null),h(t,ve),H(x,t,null),h(t,Oe),H(se,t,null),h(t,Pe),H(ae,t,null),h(t,Ee),h(t,he),h(he,Se),h(Se,He),h(he,Ne),H(ce,he,null),h(t,Fe),H(pe,t,null),h(t,Ae),H(ie,t,null),h(t,Me),H(ee,t,null),be=!0},p(u,_){const L={};!a&&_[0]&4096&&(a=!0,L.selected=u[12],M(()=>a=!1)),p.$set(L);const rn={};_[1]&256&&(rn.$$scope={dirty:_,ctx:u}),!W&&_[0]&16384&&(W=!0,rn.value=u[14],M(()=>W=!1)),v.$set(rn);const Ke={};!T&&_[0]&8192&&(T=!0,Ke.selected=u[13],M(()=>T=!1)),w.$set(Ke);const Te={};_[1]&256&&(Te.$$scope={dirty:_,ctx:u}),!oe&&_[0]&32768&&(oe=!0,Te.value=u[15],M(()=>oe=!1)),D.$set(Te);const cn={};!fe&&_[0]&2&&(fe=!0,cn.value=u[1],M(()=>fe=!1)),G.$set(cn);const Xe={};!de&&_[0]&4&&(de=!0,Xe.value=u[2],M(()=>de=!1)),R.$set(Xe);const Ze={};!le&&_[0]&8&&(le=!0,Ze.value=u[3],M(()=>le=!1)),Z.$set(Ze);const pn={};!O&&_[0]&16&&(O=!0,pn.value=u[4],M(()=>O=!1)),x.$set(pn);const wn={};!d&&_[0]&32&&(d=!0,wn.value=u[5],M(()=>d=!1)),se.$set(wn);const kn={};!Ie&&_[0]&64&&(Ie=!0,kn.value=u[6],M(()=>Ie=!1)),ae.$set(kn);const Pn={};!De&&_[0]&65536&&(De=!0,Pn.selected=u[16],M(()=>De=!1)),ce.$set(Pn);const In={};!Re&&_[0]&512&&(Re=!0,In.value=u[9],M(()=>Re=!1)),pe.$set(In);const hn={};_[0]&1024&&(hn.placeholder="Brands: All ("+u[10].length+")"),!Ve&&_[0]&1024&&(Ve=!0,hn.options=u[10],M(()=>Ve=!1)),!c&&_[0]&2048&&(c=!0,hn.selected=u[11],M(()=>c=!1)),ie.$set(hn);const Sn={};!Ce&&_[0]&128&&(Ce=!0,Sn.options=u[7],M(()=>Ce=!1)),!q&&_[0]&256&&(q=!0,Sn.selected=u[8],M(()=>q=!1)),ee.$set(Sn)},i(u){be||($(p.$$.fragment,u),$(v.$$.fragment,u),$(w.$$.fragment,u),$(D.$$.fragment,u),$(G.$$.fragment,u),$(R.$$.fragment,u),$(Z.$$.fragment,u),$(x.$$.fragment,u),$(se.$$.fragment,u),$(ae.$$.fragment,u),$(ce.$$.fragment,u),$(pe.$$.fragment,u),$(ie.$$.fragment,u),$(ee.$$.fragment,u),be=!0)},o(u){B(p.$$.fragment,u),B(v.$$.fragment,u),B(w.$$.fragment,u),B(D.$$.fragment,u),B(G.$$.fragment,u),B(R.$$.fragment,u),B(Z.$$.fragment,u),B(x.$$.fragment,u),B(se.$$.fragment,u),B(ae.$$.fragment,u),B(ce.$$.fragment,u),B(pe.$$.fragment,u),B(ie.$$.fragment,u),B(ee.$$.fragment,u),be=!1},d(u){u&&C(t),N(p),N(v),N(w),N(D),N(G),N(R),N(Z),N(x),N(se),N(ae),N(ce),N(pe),N(ie),N(ee)}}}function ot(e){let t,n;return t=new Qn({props:{header:"More filters",isOpen:e[0],placement:"end",toggle:e[17],$$slots:{default:[ut]},$$scope:{ctx:e}}}),{c(){I(t.$$.fragment)},l(l){E(t.$$.fragment,l)},m(l,i){H(t,l,i),n=!0},p(l,i){const f={};i[0]&1&&(f.isOpen=l[0]),i[0]&131070|i[1]&256&&(f.$$scope={dirty:i,ctx:l}),t.$set(f)},i(l){n||($(t.$$.fragment,l),n=!0)},o(l){B(t.$$.fragment,l),n=!1},d(l){N(t,l)}}}function dt(e,t,n){let{sideMenuOpen:l=!1}=t;const i=()=>n(0,l=!l);let{concurrentBuilds:f=0}=t,{selfHostedRunners:o=0}=t,{linuxMonthlyCloudMins:p=0}=t,{dockerMonthlyCloudMins:a=0}=t,{windowsMonthlyCloudMins:g=0}=t,{macOSMonthlyCloudMins:v=0}=t,{allFieldNames:W=[]}=t,{fieldsSelected:A=[]}=t,{currentPagination:F=10}=t,{allBrands:V=[]}=t,{brandsSelected:K=[]}=t,{cloudOSsSelected:U=[]}=t,{selfHostedOSsSelected:j=[]}=t,{boolCloudBuild:w=ye[0]}=t,{boolSelfHostedBuild:T=ye[0]}=t,{supportSelected:X=[]}=t;function D(d){U=d,n(12,U)}function oe(d){w=d,n(14,w)}function _e(d){j=d,n(13,j)}function G(d){T=d,n(15,T)}function fe(d){f=d,n(1,f)}function ge(d){o=d,n(2,o)}function R(d){p=d,n(3,p)}function de(d){a=d,n(4,a)}function re(d){g=d,n(5,g)}function Z(d){v=d,n(6,v)}function le(d){X=d,n(16,X)}function ve(d){F=d,n(9,F)}function x(d){V=d,n(10,V)}function O(d){K=d,n(11,K)}function Oe(d){W=d,n(7,W)}function se(d){A=d,n(8,A)}return e.$$set=d=>{"sideMenuOpen"in d&&n(0,l=d.sideMenuOpen),"concurrentBuilds"in d&&n(1,f=d.concurrentBuilds),"selfHostedRunners"in d&&n(2,o=d.selfHostedRunners),"linuxMonthlyCloudMins"in d&&n(3,p=d.linuxMonthlyCloudMins),"dockerMonthlyCloudMins"in d&&n(4,a=d.dockerMonthlyCloudMins),"windowsMonthlyCloudMins"in d&&n(5,g=d.windowsMonthlyCloudMins),"macOSMonthlyCloudMins"in d&&n(6,v=d.macOSMonthlyCloudMins),"allFieldNames"in d&&n(7,W=d.allFieldNames),"fieldsSelected"in d&&n(8,A=d.fieldsSelected),"currentPagination"in d&&n(9,F=d.currentPagination),"allBrands"in d&&n(10,V=d.allBrands),"brandsSelected"in d&&n(11,K=d.brandsSelected),"cloudOSsSelected"in d&&n(12,U=d.cloudOSsSelected),"selfHostedOSsSelected"in d&&n(13,j=d.selfHostedOSsSelected),"boolCloudBuild"in d&&n(14,w=d.boolCloudBuild),"boolSelfHostedBuild"in d&&n(15,T=d.boolSelfHostedBuild),"supportSelected"in d&&n(16,X=d.supportSelected)},[l,f,o,p,a,g,v,W,A,F,V,K,U,j,w,T,X,i,D,oe,_e,G,fe,ge,R,de,re,Z,le,ve,x,O,Oe,se]}class rt extends vn{constructor(t){super(),On(this,t,dt,ot,$n,{sideMenuOpen:0,concurrentBuilds:1,selfHostedRunners:2,linuxMonthlyCloudMins:3,dockerMonthlyCloudMins:4,windowsMonthlyCloudMins:5,macOSMonthlyCloudMins:6,allFieldNames:7,fieldsSelected:8,currentPagination:9,allBrands:10,brandsSelected:11,cloudOSsSelected:12,selfHostedOSsSelected:13,boolCloudBuild:14,boolSelfHostedBuild:15,supportSelected:16},null,[-1,-1])}}function Ln(e,t,n){const l=e.slice();return l[52]=t[n],l}function ft(e){let t;return{c(){t=$e("Self-hosted")},l(n){t=Be(n,"Self-hosted")},m(n,l){te(n,t,l)},d(n){n&&C(t)}}}function at(e){let t=e[52]+"",n;return{c(){n=$e(t)},l(l){n=Be(l,t)},m(l,i){te(l,n,i)},p:mn,d(l){l&&C(n)}}}function Un(e){let t,n;return t=new Tn({props:{size:"sm",color:"light",active:e[3]===e[52],$$slots:{default:[at]},$$scope:{ctx:e}}}),t.$on("click",e[29]),{c(){I(t.$$.fragment)},l(l){E(t.$$.fragment,l)},m(l,i){H(t,l,i),n=!0},p(l,i){const f={};i[0]&8&&(f.active=l[3]===l[52]),i[1]&16777216&&(f.$$scope={dirty:i,ctx:l}),t.$set(f)},i(l){n||($(t.$$.fragment,l),n=!0)},o(l){B(t.$$.fragment,l),n=!1},d(l){N(t,l)}}}function ct(e){let t,n,l=Dn,i=[];for(let o=0;o<l.length;o+=1)i[o]=Un(Ln(e,l,o));const f=o=>B(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();t=an()},l(o){for(let p=0;p<i.length;p+=1)i[p].l(o);t=an()},m(o,p){for(let a=0;a<i.length;a+=1)i[a].m(o,p);te(o,t,p),n=!0},p(o,p){if(p[0]&8){l=Dn;let a;for(a=0;a<l.length;a+=1){const g=Ln(o,l,a);i[a]?(i[a].p(g,p),$(i[a],1)):(i[a]=Un(g),i[a].c(),$(i[a],1),i[a].m(t.parentNode,t))}for(Wn(),a=l.length;a<i.length;a+=1)f(a);Jn()}},i(o){if(!n){for(let p=0;p<l.length;p+=1)$(i[p]);n=!0}},o(o){i=i.filter(Boolean);for(let p=0;p<i.length;p+=1)B(i[p]);n=!1},d(o){Bn(i,o),o&&C(t)}}}function pt(e){let t;return{c(){t=$e("CD")},l(n){t=Be(n,"CD")},m(n,l){te(n,t,l)},d(n){n&&C(t)}}}function mt(e){let t,n;return t=new qn({props:{option:e[51],slot:"selected"}}),{c(){I(t.$$.fragment)},l(l){E(t.$$.fragment,l)},m(l,i){H(t,l,i),n=!0},p(l,i){const f={};i[1]&1048576&&(f.option=l[51]),t.$set(f)},i(l){n||($(t.$$.fragment,l),n=!0)},o(l){B(t.$$.fragment,l),n=!1},d(l){N(t,l)}}}function _t(e){let t,n;return t=new qn({props:{option:e[51],slot:"option"}}),{c(){I(t.$$.fragment)},l(l){E(t.$$.fragment,l)},m(l,i){H(t,l,i),n=!0},p(l,i){const f={};i[1]&1048576&&(f.option=l[51]),t.$set(f)},i(l){n||($(t.$$.fragment,l),n=!0)},o(l){B(t.$$.fragment,l),n=!1},d(l){N(t,l)}}}function gt(e){let t;return{c(){t=$e("More filters")},l(n){t=Be(n,"More filters")},m(n,l){te(n,t,l)},d(n){n&&C(t)}}}function ht(e){let t,n,l,i,f,o,p,a,g,v,W,A,F,V,K,U,j,w,T,X,D,oe,_e,G,fe,ge,R,de,re,Z,le,ve,x,O,Oe,se,d,Pe,ae,Ie,Ee,he,Se,He,Ne,ce,De,Fe,pe,Re,Ae,ie,Ve,c;p=new Kn({props:{height:18,width:18}});function Me(s){e[28](s)}let ee={classNames:"bg-light",label:"Users",min:"1",placeholder:"users",width:"60px"};e[1]!==void 0&&(ee.value=e[1]),v=new qe({props:ee}),b.push(()=>S(v,"value",Me)),V=new Nn({props:{class:"my-auto",for:"runnersInput",$$slots:{default:[ft]},$$scope:{ctx:e}}}),U=new Xn({props:{$$slots:{default:[ct]},$$scope:{ctx:e}}}),T=new Nn({props:{class:"my-auto",for:"runnersInput",$$slots:{default:[pt]},$$scope:{ctx:e}}});function Ce(s){e[30](s)}let q={class:"my-auto",id:"s2",type:"switch"};e[9]!==void 0&&(q.checked=e[9]),D=new Cn({props:q}),b.push(()=>S(D,"checked",Ce));function be(s){e[31](s)}let xe={options:nt,outerDivClass:"bg-light",placeholder:"Git Platforms",$$slots:{option:[_t,({option:s})=>({51:s}),({option:s})=>[0,s?1048576:0]],selected:[mt,({option:s})=>({51:s}),({option:s})=>[0,s?1048576:0]]},$$scope:{ctx:e}};e[10]!==void 0&&(xe.selected=e[10]),G=new fn({props:xe}),b.push(()=>S(G,"selected",be)),R=new Tn({props:{color:"light",$$slots:{default:[gt]},$$scope:{ctx:e}}}),R.$on("click",e[26]),re=new Zn({props:{allEntries:e[0],allFields:e[20],colIDIdx:e[19],currentPagination:e[23],fieldsSelected:e[22],filteredEntries:e[18]}});function en(s){e[32](s)}let nn={category:"CIs",title:"CI/CD Help"};e[24]!==void 0&&(nn.helpModalOpen=e[24]),le=new xn({props:nn}),b.push(()=>S(le,"helpModalOpen",en));function tn(s){e[33](s)}function Le(s){e[34](s)}function ln(s){e[35](s)}function r(s){e[36](s)}function y(s){e[37](s)}function Ue(s){e[38](s)}function sn(s){e[39](s)}function je(s){e[40](s)}function me(s){e[41](s)}function ze(s){e[42](s)}function We(s){e[43](s)}function un(s){e[44](s)}function on(s){e[45](s)}function _n(s){e[46](s)}function Je(s){e[47](s)}function bn(s){e[48](s)}function gn(s){e[49](s)}let z={};return e[21]!==void 0&&(z.allBrands=e[21]),e[17]!==void 0&&(z.allFieldNames=e[17]),e[14]!==void 0&&(z.boolCloudBuild=e[14]),e[15]!==void 0&&(z.boolSelfHostedBuild=e[15]),e[11]!==void 0&&(z.brandsSelected=e[11]),e[12]!==void 0&&(z.cloudOSsSelected=e[12]),e[2]!==void 0&&(z.concurrentBuilds=e[2]),e[23]!==void 0&&(z.currentPagination=e[23]),e[6]!==void 0&&(z.dockerMonthlyCloudMins=e[6]),e[22]!==void 0&&(z.fieldsSelected=e[22]),e[5]!==void 0&&(z.linuxMonthlyCloudMins=e[5]),e[8]!==void 0&&(z.macOSMonthlyCloudMins=e[8]),e[13]!==void 0&&(z.selfHostedOSsSelected=e[13]),e[4]!==void 0&&(z.selfHostedRunners=e[4]),e[25]!==void 0&&(z.sideMenuOpen=e[25]),e[16]!==void 0&&(z.supportSelected=e[16]),e[7]!==void 0&&(z.windowsMonthlyCloudMins=e[7]),O=new rt({props:z}),b.push(()=>S(O,"allBrands",tn)),b.push(()=>S(O,"allFieldNames",Le)),b.push(()=>S(O,"boolCloudBuild",ln)),b.push(()=>S(O,"boolSelfHostedBuild",r)),b.push(()=>S(O,"brandsSelected",y)),b.push(()=>S(O,"cloudOSsSelected",Ue)),b.push(()=>S(O,"concurrentBuilds",sn)),b.push(()=>S(O,"currentPagination",je)),b.push(()=>S(O,"dockerMonthlyCloudMins",me)),b.push(()=>S(O,"fieldsSelected",ze)),b.push(()=>S(O,"linuxMonthlyCloudMins",We)),b.push(()=>S(O,"macOSMonthlyCloudMins",un)),b.push(()=>S(O,"selfHostedOSsSelected",on)),b.push(()=>S(O,"selfHostedRunners",_n)),b.push(()=>S(O,"sideMenuOpen",Je)),b.push(()=>S(O,"supportSelected",bn)),b.push(()=>S(O,"windowsMonthlyCloudMins",gn)),{c(){t=k(),n=J("div"),l=J("p"),i=$e("CI/CD Comparisons"),f=k(),o=J("a"),I(p.$$.fragment),a=k(),g=J("div"),I(v.$$.fragment),A=k(),F=J("div"),I(V.$$.fragment),K=k(),I(U.$$.fragment),j=k(),w=J("div"),I(T.$$.fragment),X=k(),I(D.$$.fragment),_e=k(),I(G.$$.fragment),ge=k(),I(R.$$.fragment),de=k(),I(re.$$.fragment),Z=k(),I(le.$$.fragment),x=k(),I(O.$$.fragment),this.h()},l(s){zn("svelte-mn2mnz",document.head).forEach(C),t=P(s),n=Q(s,"DIV",{class:!0,style:!0});var we=ne(n);l=Q(we,"P",{class:!0});var Qe=ne(l);i=Be(Qe,"CI/CD Comparisons"),Qe.forEach(C),f=P(we),o=Q(we,"A",{href:!0});var Ye=ne(o);E(p.$$.fragment,Ye),Ye.forEach(C),we.forEach(C),a=P(s),g=Q(s,"DIV",{class:!0});var ue=ne(g);E(v.$$.fragment,ue),A=P(ue),F=Q(ue,"DIV",{class:!0});var Ge=ne(F);E(V.$$.fragment,Ge),K=P(Ge),E(U.$$.fragment,Ge),Ge.forEach(C),j=P(ue),w=Q(ue,"DIV",{class:!0});var ke=ne(w);E(T.$$.fragment,ke),X=P(ke),E(D.$$.fragment,ke),ke.forEach(C),_e=P(ue),E(G.$$.fragment,ue),ge=P(ue),E(R.$$.fragment,ue),ue.forEach(C),de=P(s),E(re.$$.fragment,s),Z=P(s),E(le.$$.fragment,s),x=P(s),E(O.$$.fragment,s),this.h()},h(){document.title="CI/CD Comparison",Y(l,"class","h2 opacity-75"),Y(o,"href",""),Y(n,"class","d-flex flex-row justify-content-center align-items-top gap-1"),Mn(n,"margin-top","75px",1),Y(F,"class","d-flex flex-row gap-2 mb-0 align-content-center"),Y(w,"class","d-flex flex-row gap-1"),Y(g,"class","d-flex flex-row flex-wrap gap-4 justify-content-center align-content-center mb-3 mt-4")},m(s,m){te(s,t,m),te(s,n,m),h(n,l),h(l,i),h(n,f),h(n,o),H(p,o,null),te(s,a,m),te(s,g,m),H(v,g,null),h(g,A),h(g,F),H(V,F,null),h(F,K),H(U,F,null),h(g,j),h(g,w),H(T,w,null),h(w,X),H(D,w,null),h(g,_e),H(G,g,null),h(g,ge),H(R,g,null),te(s,de,m),H(re,s,m),te(s,Z,m),H(le,s,m),te(s,x,m),H(O,s,m),ie=!0,Ve||(c=jn(o,"click",e[27]),Ve=!0)},p(s,m){const we={};!W&&m[0]&2&&(W=!0,we.value=s[1],M(()=>W=!1)),v.$set(we);const Qe={};m[1]&16777216&&(Qe.$$scope={dirty:m,ctx:s}),V.$set(Qe);const Ye={};m[0]&8|m[1]&16777216&&(Ye.$$scope={dirty:m,ctx:s}),U.$set(Ye);const ue={};m[1]&16777216&&(ue.$$scope={dirty:m,ctx:s}),T.$set(ue);const Ge={};!oe&&m[0]&512&&(oe=!0,Ge.checked=s[9],M(()=>oe=!1)),D.$set(Ge);const ke={};m[1]&17825792&&(ke.$$scope={dirty:m,ctx:s}),!fe&&m[0]&1024&&(fe=!0,ke.selected=s[10],M(()=>fe=!1)),G.$set(ke);const dn={};m[1]&16777216&&(dn.$$scope={dirty:m,ctx:s}),R.$set(dn);const u={};m[0]&1&&(u.allEntries=s[0]),m[0]&1048576&&(u.allFields=s[20]),m[0]&524288&&(u.colIDIdx=s[19]),m[0]&8388608&&(u.currentPagination=s[23]),m[0]&4194304&&(u.fieldsSelected=s[22]),m[0]&262144&&(u.filteredEntries=s[18]),re.$set(u);const _={};!ve&&m[0]&16777216&&(ve=!0,_.helpModalOpen=s[24],M(()=>ve=!1)),le.$set(_);const L={};!Oe&&m[0]&2097152&&(Oe=!0,L.allBrands=s[21],M(()=>Oe=!1)),!se&&m[0]&131072&&(se=!0,L.allFieldNames=s[17],M(()=>se=!1)),!d&&m[0]&16384&&(d=!0,L.boolCloudBuild=s[14],M(()=>d=!1)),!Pe&&m[0]&32768&&(Pe=!0,L.boolSelfHostedBuild=s[15],M(()=>Pe=!1)),!ae&&m[0]&2048&&(ae=!0,L.brandsSelected=s[11],M(()=>ae=!1)),!Ie&&m[0]&4096&&(Ie=!0,L.cloudOSsSelected=s[12],M(()=>Ie=!1)),!Ee&&m[0]&4&&(Ee=!0,L.concurrentBuilds=s[2],M(()=>Ee=!1)),!he&&m[0]&8388608&&(he=!0,L.currentPagination=s[23],M(()=>he=!1)),!Se&&m[0]&64&&(Se=!0,L.dockerMonthlyCloudMins=s[6],M(()=>Se=!1)),!He&&m[0]&4194304&&(He=!0,L.fieldsSelected=s[22],M(()=>He=!1)),!Ne&&m[0]&32&&(Ne=!0,L.linuxMonthlyCloudMins=s[5],M(()=>Ne=!1)),!ce&&m[0]&256&&(ce=!0,L.macOSMonthlyCloudMins=s[8],M(()=>ce=!1)),!De&&m[0]&8192&&(De=!0,L.selfHostedOSsSelected=s[13],M(()=>De=!1)),!Fe&&m[0]&16&&(Fe=!0,L.selfHostedRunners=s[4],M(()=>Fe=!1)),!pe&&m[0]&33554432&&(pe=!0,L.sideMenuOpen=s[25],M(()=>pe=!1)),!Re&&m[0]&65536&&(Re=!0,L.supportSelected=s[16],M(()=>Re=!1)),!Ae&&m[0]&128&&(Ae=!0,L.windowsMonthlyCloudMins=s[7],M(()=>Ae=!1)),O.$set(L)},i(s){ie||($(p.$$.fragment,s),$(v.$$.fragment,s),$(V.$$.fragment,s),$(U.$$.fragment,s),$(T.$$.fragment,s),$(D.$$.fragment,s),$(G.$$.fragment,s),$(R.$$.fragment,s),$(re.$$.fragment,s),$(le.$$.fragment,s),$(O.$$.fragment,s),ie=!0)},o(s){B(p.$$.fragment,s),B(v.$$.fragment,s),B(V.$$.fragment,s),B(U.$$.fragment,s),B(T.$$.fragment,s),B(D.$$.fragment,s),B(G.$$.fragment,s),B(R.$$.fragment,s),B(re.$$.fragment,s),B(le.$$.fragment,s),B(O.$$.fragment,s),ie=!1},d(s){s&&C(t),s&&C(n),N(p),s&&C(a),s&&C(g),N(v),N(V),N(U),N(T),N(D),N(G),N(R),s&&C(de),N(re,s),s&&C(Z),N(le,s),s&&C(x),N(O,s),Ve=!1,c()}}}function bt(e,t,n){let l=[],i=[],f=[],o=0,p=[],a=[],g=1,v=0,W="Both",A=0,F=0,V=0,K=0,U=0,j=!1,w=[],T=[],X=[],D=[],oe=[],_e=ye[0],G=ye[0],fe=[],ge=10,R=!1,de=!1;(()=>{const c=Fn.CIs[0];n(0,i=Fn.CIs.slice(1));let Me=[],ee=[],Ce=[];return Object.keys(c).forEach((q,be)=>{q==="colID"?(n(19,o=be),Me[be]={id:q,name:c[q],hidden:!0}):(Me[be]={id:q,name:c[q]},ee[be]=c[q])}),i.forEach(q=>Ce.includes(q.Brand)?"":Ce=[...Ce,q.Brand]),n(20,p=Me),Me.forEach(q=>et.includes(q.id)?null:n(22,T=[...T,q.name])),n(17,l=ee),n(21,a=Ce),!0})();function re(){function c(r){return X.length===0||X.includes(r.Brand)}function Me(r){return W==="Both"||r["Self-hosted"]==="Both"||r["Self-hosted"]===W}function ee(r){return!j||j&&r.CD==="Yes"}function Ce(r){return w.length===0||r.GitPlatformsCompatible==="All"||w.some(y=>r.GitPlatformsCompatible.split(", ").includes(y))}function q(r){return fe.length===0||fe.some(y=>r.CommercialSupport.includes(y))}function be(r){return D.length===0||(_e==="Or"?D.some(y=>r.CloudBuildOSs.split(", ").includes(y)):D.every(y=>r.CloudBuildOSs.split(", ").includes(y)))}function xe(r){return oe.length===0||(G==="Or"?oe.some(y=>r["Self-hostedRunnersBuildOSs"].split(", ").includes(y)):oe.every(y=>r["Self-hostedRunnersBuildOSs"].split(", ").includes(y)))}function en(r){return r.MaxUsers==="∞"||g<=parseInt(r.MaxUsers)}function nn(r){return r.NCloudConcurrentBuilds==="∞"||v<=parseInt(r.NCloudConcurrentBuilds)||r.PriceExtraParallelBuild!=="N/A"}function tn(r){return r["NSelf-hostedRunners"]==="∞"||A<=parseInt(r["NSelf-hostedRunners"])||r.PriceExtraRunners!=="N/A"}function Le(r,y,Ue){return Ue===0?!0:!(r[`CreditsPerCloudBuildMinute${y}`]==="N/A"||r.PricePerExtraCredit==="N/A"&&parseFloat(r.IncludedCreditsPerMonth)<Ue)}function ln(r){function y(){if(r.IncludedUsers==="∞")return 0;const me=parseInt(r.IncludedUsers);return me>=g?0:(g-me)*parseFloat(r.PriceExtraUser$)}function Ue(){if(r.PriceExtraParallelBuild==="N/A"||r.NCloudConcurrentBuilds==="∞")return 0;const me=parseInt(r.NCloudConcurrentBuilds);return me>=v?0:(v-me)*parseFloat(r.PriceExtraParallelBuild)}function sn(){if(r.PriceExtraRunners==="N/A"||r["NSelf-hostedRunners"]==="∞")return 0;const me=parseInt(r["NSelf-hostedRunners"]);return me>=A?0:(A-me)*parseFloat(r.PriceExtraRunners)}function je(me,ze){if(ze===0)return 0;const We=parseFloat(r[`CreditsPerCloudBuildMinute${me}`]);if(We===0||r.IncludedCreditsPerMonth==="∞")return 0;const un=parseFloat(r.IncludedCreditsPerMonth);if(r.PricePerExtraCredit==="N/A"&&un>=ze)return 0;const on=parseFloat(r.PricePerExtraCredit),Je=ze*We-un;return Je<0?0:Je*on}r.CalculatedCost=Math.round((parseFloat(r.LicenseCost$PerMonth)+y()+Ue()+sn()+je("Linux",F)+je("Docker",V)+je("Windows",K)+je("macOS",U)+Number.EPSILON)*100)/100}n(18,f=i.filter(r=>c(r)&&Ce(r)&&be(r)&&xe(r)&&en(r)&&ee(r)&&Me(r)&&nn(r)&&tn(r)&&Le(r,"Linux",F)&&Le(r,"Docker",V)&&Le(r,"Windows",K)&&Le(r,"macOS",U)&&q(r)).map(r=>(ln(r),r)))}function Z(){n(25,de=!de)}const le=()=>n(24,R=!R);function ve(c){g=c,n(1,g)}const x=c=>n(3,W=c.srcElement.innerText);function O(c){j=c,n(9,j)}function Oe(c){w=c,n(10,w)}function se(c){R=c,n(24,R)}function d(c){a=c,n(21,a)}function Pe(c){l=c,n(17,l)}function ae(c){_e=c,n(14,_e)}function Ie(c){G=c,n(15,G)}function Ee(c){X=c,n(11,X)}function he(c){D=c,n(12,D)}function Se(c){v=c,n(2,v)}function He(c){ge=c,n(23,ge)}function Ne(c){V=c,n(6,V)}function ce(c){T=c,n(22,T)}function De(c){F=c,n(5,F)}function Fe(c){U=c,n(8,U)}function pe(c){oe=c,n(13,oe)}function Re(c){A=c,n(4,A)}function Ae(c){de=c,n(25,de)}function ie(c){fe=c,n(16,fe)}function Ve(c){K=c,n(7,K)}return e.$$.update=()=>{e.$$.dirty[0]&131071&&re()},[i,g,v,W,A,F,V,K,U,j,w,X,D,oe,_e,G,fe,l,f,o,p,a,T,ge,R,de,Z,le,ve,x,O,Oe,se,d,Pe,ae,Ie,Ee,he,Se,He,Ne,ce,De,Fe,pe,Re,Ae,ie,Ve]}class Ot extends vn{constructor(t){super(),On(this,t,bt,ht,$n,{},null,[-1,-1])}}export{Ot as default};