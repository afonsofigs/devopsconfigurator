import{w as u}from"./index-8a56110d.js";let f="",g="";function E(e){f=e.base,g=e.assets||f}let h="";function R(e){h=e}const k="sveltekit:scroll",x="sveltekit:index",d={tap:1,hover:2,viewport:3,eager:4,off:-1};function I(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function y(){return{x:pageXOffset,y:pageYOffset}}function l(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const p={...d,"":d.hover};function b(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function A(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A")return e;e=b(e)}}function S(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o={rel_external:(e.getAttribute("rel")||"").split(/\s+/).includes("external"),download:e.hasAttribute("download"),target:!!(e instanceof SVGAElement?e.target.baseVal:e.target)},a=!n||w(n,t)||o.rel_external||o.target||o.download;return{url:n,has:o,external:a}}function T(e){let t=null,n=null,o=null,a=null,s=e;for(;s&&s!==document.documentElement;)n===null&&(n=l(s,"preload-code")),o===null&&(o=l(s,"preload-data")),t===null&&(t=l(s,"noscroll")),a===null&&(a=l(s,"reload")),s=b(s);return{preload_code:p[n??"off"],preload_data:p[o??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:a==="off"?!1:a===""?!0:null}}function _(e){const t=u(e);let n=!0;function o(){n=!0,t.update(r=>r)}function a(r){n=!1,t.set(r)}function s(r){let i;return t.subscribe(c=>{(i===void 0||n&&c!==i)&&r(i=c)})}return{notify:o,set:a,subscribe:s}}function v(){const{set:e,subscribe:t}=u(!1);let n;async function o(){clearTimeout(n);const a=await fetch(`${g}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const r=(await a.json()).version!==h;return r&&(e(!0),clearTimeout(n)),r}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:t,check:o}}function w(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function U(e){e.client}const L={url:_({}),page:_({}),navigating:u(null),updated:v()};export{x as I,d as P,k as S,S as a,T as b,y as c,E as d,U as e,A as f,I as g,R as h,w as i,L as s};
