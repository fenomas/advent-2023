var s1=Object.defineProperty;var F1=(t,n,r)=>n in t?s1(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;var on=(t,n,r)=>(F1(t,typeof n!="symbol"?n+"":n,r),r);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const J of e)if(J.type==="childList")for(const L of J.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&s(L)}).observe(document,{childList:!0,subtree:!0});function r(e){const J={};return e.integrity&&(J.integrity=e.integrity),e.referrerPolicy&&(J.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?J.credentials="include":e.crossOrigin==="anonymous"?J.credentials="omit":J.credentials="same-origin",J}function s(e){if(e.ep)return;e.ep=!0;const J=r(e);fetch(e.href,J)}})();function vn(){}function Xn(t){return t()}function _n(){return Object.create(null)}function nn(t){t.forEach(Xn)}function Pn(t){return typeof t=="function"}function f1(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function v1(t){return Object.keys(t).length===0}function q(t,n){t.appendChild(n)}function zn(t,n,r){t.insertBefore(n,r||null)}function bn(t){t.parentNode&&t.parentNode.removeChild(t)}function Dn(t,n){for(let r=0;r<t.length;r+=1)t[r]&&t[r].d(n)}function R(t){return document.createElement(t)}function gn(t){return document.createTextNode(t)}function A(){return gn(" ")}function y(t,n,r,s){return t.addEventListener(n,r,s),()=>t.removeEventListener(n,r,s)}function K(t,n,r){r==null?t.removeAttribute(n):t.getAttribute(n)!==r&&t.setAttribute(n,r)}function l1(t){return Array.from(t.childNodes)}function qn(t,n){n=""+n,t.data!==n&&(t.data=n)}function Ln(t,n){t.value=n??""}function d1(t,n,r,s){r==null?t.style.removeProperty(n):t.style.setProperty(n,r,s?"important":"")}function U(t,n,r){t.classList.toggle(n,!!r)}let Qn;function hn(t){Qn=t}const Fn=[],Gn=[];let fn=[];const Bn=[],g1=Promise.resolve();let un=!1;function h1(){un||(un=!0,g1.then(Nn))}function Tn(t){fn.push(t)}const kn=new Set;let sn=0;function Nn(){if(sn!==0)return;const t=Qn;do{try{for(;sn<Fn.length;){const n=Fn[sn];sn++,hn(n),b1(n.$$)}}catch(n){throw Fn.length=0,sn=0,n}for(hn(null),Fn.length=0,sn=0;Gn.length;)Gn.pop()();for(let n=0;n<fn.length;n+=1){const r=fn[n];kn.has(r)||(kn.add(r),r())}fn.length=0}while(Fn.length);for(;Bn.length;)Bn.pop()();un=!1,kn.clear(),hn(t)}function b1(t){if(t.fragment!==null){t.update(),nn(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(Tn)}}function c1(t){const n=[],r=[];fn.forEach(s=>t.indexOf(s)===-1?n.push(s):r.push(s)),r.forEach(s=>s()),fn=n}const p1=new Set;function m1(t,n){t&&t.i&&(p1.delete(t),t.i(n))}function pn(t){return t?.length!==void 0?t:Array.from(t)}function a1(t,n,r){const{fragment:s,after_update:e}=t.$$;s&&s.m(n,r),Tn(()=>{const J=t.$$.on_mount.map(Xn).filter(Pn);t.$$.on_destroy?t.$$.on_destroy.push(...J):nn(J),t.$$.on_mount=[]}),e.forEach(Tn)}function O1(t,n){const r=t.$$;r.fragment!==null&&(c1(r.after_update),nn(r.on_destroy),r.fragment&&r.fragment.d(n),r.on_destroy=r.fragment=null,r.ctx=[])}function z1(t,n){t.$$.dirty[0]===-1&&(Fn.push(t),h1(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function x1(t,n,r,s,e,J,L=null,F=[-1]){const f=Qn;hn(t);const v=t.$$={fragment:null,ctx:[],props:J,update:vn,not_equal:e,bound:_n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:_n(),dirty:F,skip_bound:!1,root:n.target||f.$$.root};L&&L(v.root);let d=!1;if(v.ctx=r?r(t,n.props||{},(g,l,...h)=>{const c=h.length?h[0]:l;return v.ctx&&e(v.ctx[g],v.ctx[g]=c)&&(!v.skip_bound&&v.bound[g]&&v.bound[g](c),d&&z1(t,g)),l}):[],v.update(),d=!0,nn(v.before_update),v.fragment=s?s(v.ctx):!1,n.target){if(n.hydrate){const g=l1(n.target);v.fragment&&v.fragment.l(g),g.forEach(bn)}else v.fragment&&v.fragment.c();n.intro&&m1(t.$$.fragment),a1(t,n.target,n.anchor),Nn()}hn(f)}class i1{constructor(){on(this,"$$");on(this,"$$set")}$destroy(){O1(this,1),this.$destroy=vn}$on(n,r){if(!Pn(r))return vn;const s=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return s.push(r),()=>{const e=s.indexOf(r);e!==-1&&s.splice(e,1)}}$set(n){this.$$set&&!v1(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const o1="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(o1);var k1=[54304,54418,142,,,281];function j1(t=""){return t.split(/\n/).reduce((n,r)=>{var s=r.split("").filter(e=>/\d/.test(e));return n+parseInt(s[0]+s.at(-1))||0},0)}function q1(t=""){var n=[..."0123456789".split(""),"zero","one","two","three","four","five","six","seven","eight","nine"];return t.split(/\n/).reduce((r,s)=>{var e=-1,J=1/0,L=-1,F=-1;return n.forEach((f,v)=>{var d=s.indexOf(f);d>-1&&d<J&&(J=d,e=v%10);var g=s.lastIndexOf(f);g>-1&&g>F&&(F=g,L=v%10)}),r+parseInt(e+""+L)},0)}const u1=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:k1,part1:j1,part2:q1},Symbol.toStringTag,{value:"Module"}));var T1=[2727,56580,8,2286];function K1(t=""){var n=0,r={red:12,green:13,blue:14};return t.split(`
`).forEach(s=>{var[e,J]=s.split(":"),L=J.split(";").every(F=>F.split(",").every(f=>{var[,v,d]=/(\d+)\s+(\S+)/.exec(f);return r[d]?parseInt(v)<=r[d]:!0}));L&&(n+=parseInt(/\d+/.exec(e)[0]))}),n}function Q1(t=""){var n=0;return t.split(`
`).forEach(r=>{var s={red:0,green:0,blue:0},[,e]=r.split(":");e.split(";").forEach(J=>{J.split(",").forEach(L=>{var[,F,f]=/(\d+)\s+(\S+)/.exec(L),v=parseInt(F);v>s[f]&&(s[f]=v)})}),n+=s.red*s.green*s.blue}),n}const R1=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:T1,part1:K1,part2:Q1},Symbol.toStringTag,{value:"Module"}));var C1=[539637,82818007,4361,467835];function _1(t=""){var n=[],r=[];t.split(`
`).forEach((e,J)=>{n[J]=[],r[J]=[];for(var L=0;L<e.length;L++){var F=e[L];if(F!==".")if(/\d/.test(F)){var f=parseInt(e.substring(L)),v=String(f).length;n[J].push({y:J,x:L,value:f,len:v}),L+=v-1}else r[J].push({y:J,x:L})}});var s=0;return n.forEach(e=>{e.forEach(J=>{for(var L=J.y-1;L<J.y+2;L++){var F=r[L]||[],f=F.some(v=>{if(!(v.x<J.x-1)&&!(v.x>J.x+J.len))return!0});if(f){s+=J.value;return}}})}),s}function D1(t=""){var n=[],r=[];t.split(`
`).forEach((e,J)=>{n[J]=[],r[J]=[];for(var L=0;L<e.length;L++){var F=e[L];if(F!==".")if(/\d/.test(F)){var f=parseInt(e.substring(L)),v=String(f).length;n[J].push({y:J,x:L,value:f,len:v}),L+=v-1}else F==="*"&&r[J].push({y:J,x:L})}});var s=0;return r.forEach(e=>{e.forEach(J=>{for(var L=0,F=1,f=J.y-1;f<J.y+2;f++){var v=n[f]||[];v.forEach(d=>{J.x<d.x-1||J.x>d.x+d.len||(L++,F*=d.value)})}L===2&&(s+=F)})}),s}const G1=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:C1,part1:_1,part2:D1},Symbol.toStringTag,{value:"Module"}));var B1=[26443,6284877,13,30];function M1(t=""){var n=0;return t.split(`
`).forEach((r,s)=>{var e=r.split(":")[1].split("|"),J=e[0].trim().split(/\s+/).map(f=>parseInt(f)),L=e[1].trim().split(/\s+/).map(f=>parseInt(f)),F=L.reduce((f,v)=>f+(J.includes(v)?1:0),0);F>0&&(n+=Math.pow(2,F-1))}),n}function w1(t=""){var n=t.split(`
`).map((e,J)=>{var L=e.split(":")[1].split("|"),F=L[0].trim().split(/\s+/).map(d=>parseInt(d)),f=L[1].trim().split(/\s+/).map(d=>parseInt(d)),v=f.reduce((d,g)=>d+(F.includes(g)?1:0),0);return v>0&&(r+=Math.pow(2,v-1)),v}),r=0,s=[];return n.forEach((e,J)=>{for(var L=1+(s[J]||0),F=n[J],f=0;f<F;f++){var v=J+1+f;s[v]=(s[v]||0)+L}r+=L}),r}const A1=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:B1,part1:M1,part2:w1},Symbol.toStringTag,{value:"Module"}));var S1=[525792406,79004094,35,46];function H1(t=""){var n=[],r=null;t.split(`
`).forEach((e,J)=>{if(/:/.test(e)){var[,L]=e.split(":");n.push(r=[]),e=L}var F=e.trim().split(/\s+/).filter(f=>f).map(f=>parseInt(f));F.length>0&&r.push(F)});var s=n.shift()[0];return n.forEach(e=>{var J={};e.forEach(([L,F,f])=>{s.forEach((v,d)=>{J[d]||v>=F&&v<F+f&&(s[d]+=L-F,J[d]=!0)})})}),s.reduce((e,J)=>Math.min(e,J),1/0)}function V1(t=""){var n,r=[],s;t.split(`
`).forEach((F,f)=>{if(/:/.test(F)){var[,v]=F.split(":");if(!n){n=v.trim().split(/\s+/).map(h=>parseInt(h));return}r.push(s=[]),F=v}if(F=F.trim(),!!F){var[d,g,l]=F.split(/\s+/).map(h=>parseInt(h));s.push([g,g+l,d-g])}}),r.forEach(F=>{F.sort((f,v)=>f[0]-v[0])});for(var e=1/0,J=(F,f,v=0)=>{if(v>=r.length){F<e&&(e=F);return}var d=r[v];d.some(([g,l,h])=>{if(!(F>=l)){if(f<=g)return!0;F<g&&(J(F,g,v+1),F=g);var c=Math.min(f,l);J(F+h,c+h,v+1),F=c}}),F<f&&J(F,f,v+1)},L=0;L<n.length;L+=2)J(n[L],n[L]+n[L+1]);return e}const X1=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:S1,part1:H1,part2:V1},Symbol.toStringTag,{value:"Module"}));var P1=[1195150,42550411,288,71503];function yn(t=""){var n=t.split(`
`).map(J=>{var L=J.split(":")[1];return L.trim().split(/\s+/).map(F=>parseInt(F))}),[r,s]=n,e=1;return r.forEach((J,L)=>{var F=-J,f=s[L],v=Math.sqrt(F*F-4*f),d=(-F-v)/2,g=(-F+v)/2,l=1e-5,h=Math.floor(g-l)-Math.ceil(d+l)+1;e*=h}),e}function N1(t=""){return yn(t.replace(/ /g,""))}const y1=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:P1,part1:yn,part2:N1},Symbol.toStringTag,{value:"Module"}));var U1=[249726565,251135960,6440,5905];function E1(t=""){var n="23456789TJQKA".split(""),r={};n.forEach((e,J)=>{r[e]=String.fromCharCode(65+J)});var s=t.split(`
`).map(e=>{var[J,L]=e.trim().split(/\s+/),F=parseInt(L),f=J.split("").map(g=>r[g]),v={};f.forEach(g=>{v[g]=(v[g]||0)+1});var d=Object.keys(v).map(g=>v[g]).sort((g,l)=>l-g);return d.push(0,0),{chars:f,bid:F,ctList:d}});return s.sort((e,J)=>{for(var L=0;L<2;L++)if(e.ctList[L]!==J.ctList[L])return e.ctList[L]-J.ctList[L];for(var F=0;F<5;F++){var f=e.chars[F],v=J.chars[F];if(f!==v)return f>v?1:-1}return 0}),s.reduce((e,{bid:J},L)=>e+J*(L+1),0)}function $1(t=""){var n="J23456789TQKA".split(""),r={};n.forEach((e,J)=>{r[e]=String.fromCharCode(65+J)});var s=t.split(`
`).map(e=>{var[J,L]=e.trim().split(/\s+/),F=parseInt(L),f=J.split("").map(l=>r[l]),v={},d=0;f.forEach(l=>{if(l==="A"){d++;return}v[l]=(v[l]||0)+1});var g=Object.keys(v).map(l=>v[l]).sort((l,h)=>h-l);return g.push(0,0),g[0]+=d,{chars:f,bid:F,ctList:g,hand:J}});return s.sort((e,J)=>{for(var L=0;L<2;L++)if(e.ctList[L]!==J.ctList[L])return e.ctList[L]-J.ctList[L];for(var F=0;F<5;F++){var f=e.chars[F],v=J.chars[F];if(f!==v)return f>v?1:-1}return 0}),s.reduce((e,{bid:J},L)=>e+J*(L+1),0)}const I1=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:U1,part1:E1,part2:$1},Symbol.toStringTag,{value:"Module"}));var Z1=[18673,17972669116327,2,,6,,,6];function W1(t=""){var n={},r=t.split(`
`).map(F=>{if(F=F.trim(),!!F){if(!F.includes("="))return F.split("");var[,f,v,d]=/(\S+) = \((\S+), (\S+)\)/.exec(F);n[f]={L:v,R:d}}}),s=r.shift(),e="AAA";if(!n[e])return-1;for(var J=0,L=0;J<1e7;J++){if(e==="ZZZ")return J;e=n[e][s[L]],L=(L+1)%s.length}return-1}function Y1(t=""){var n={},r=[],s={},e=t.split(`
`).map(d=>{if(d=d.trim(),!!d){if(!d.includes("="))return d.split("");var[,g,l,h]=/(\S+) = \((\S+), (\S+)\)/.exec(d);/..A/.test(g)&&r.push(g),/..Z/.test(g)&&(s[g]=!0),n[g]={L:l,R:h}}}),J=e.shift(),L=r.map(d=>{for(var g=0,l=0;g<1e7;g++){if(d in s)return g;d=n[d][J[l]],l=(l+1)%J.length}});L.sort((d,g)=>d-g);for(var F=L.pop();L.length>0;)for(var f=F,v=L.pop();F%v!==0;)F+=f;return F}const n2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:Z1,part1:W1,part2:Y1},Symbol.toStringTag,{value:"Module"}));var e2=[1772145754,867,114,2];function r2(t=""){var n=(r=[1,1])=>{if(r.length<2)return NaN;for(var s=!0,e=[],J=1;J<r.length;J++){var L=r[J]-r[J-1];s&&(s=L===0),e.push(L)}var F=s?0:n(e);return F+r.at(-1)};return t.split(`
`).reduce((r,s)=>{var e=s.trim().split(/\s+/).map(J=>parseInt(J));return r+=n(e)},0)}function t2(t=""){var n=(r=[1,1])=>{if(r.length<2)return NaN;for(var s=!0,e=[],J=1;J<r.length;J++){var L=r[J]-r[J-1];s&&(s=L===0),e.push(L)}var F=s?0:n(e);return r[0]-F};return t.split(`
`).reduce((r,s)=>{var e=s.trim().split(/\s+/).map(J=>parseInt(J));return r+=n(e)},0)}const J2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:e2,part1:r2,part2:t2},Symbol.toStringTag,{value:"Module"}));var L2=[6757,523,8,,,10];function s2(t=""){var{perimeter:n}=Un(t);return n/2}function F2(t=""){var{perimeter:n,area:r}=Un(t);return r-n/2+1}var Un=t=>{var n=[],r=[0,0];t.split(`
`).forEach((b,a)=>{n[a]=b.trim();var p=n[a].indexOf("S");p>-1&&(r=[p,a])},0);for(var s=(b,a)=>a<0||a>=n.length?".":n[a][b]||".",e=(b,a,p)=>(b+=[0,1,0,-1][p],a+=[-1,0,1,0][p],[b,a]),J={"|":[0,-1,2,-1],"-":[-1,1,-1,3],L:[-1,-1,1,0],F:[1,-1,-1,2],7:[3,2,-1,-1],J:[-1,0,3,-1],".":[-1,-1,-1,-1]},[L,F]=r,f=[0,1,2,3].filter(b=>{var a=e(...r,b),p=s(...a);return p&&J[p][b]>=0})[0],v=0,d=0,g=0;g<1e5;g++){d++;var[l,h]=e(L,F,f),c=s(l,h);if(c==="S")break;var m=J[c];if(!c||!m)throw"?";v-=F*(l-L),[L,F]=[l,h],f=m[f]}return v-=F*(r[0]-L),{perimeter:d,area:v}};const f2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:L2,part1:s2,part2:F2},Symbol.toStringTag,{value:"Module"}));var v2=[9623138,726820169514,374,82000210];function En(t=""){var n=[],r=[],s=[];t.split(`
`).forEach((F,f)=>{if(F=F.trim(),!!F){n.length===0&&(n.length=F.length,n.fill(!0)),r[f]=!0;for(var v=-1;v=F.indexOf("#",v),!(v<0);)n[v]=!1,r[f]=!1,s.push({x:v,y:f}),v++}});var e=0,J=n.map(F=>F?++e:e);e=0;var L=r.map(F=>F?++e:e);return s.forEach(F=>{F.emptyLeft=J[F.x],F.emptyAbove=L[F.y]}),{locs:s}}function l2(t=""){for(var{locs:n}=En(t),r=(L,F)=>{var f=n[L],v=n[F],d=Math.abs(f.x-v.x),g=Math.abs(f.y-v.y),l=Math.abs(f.emptyLeft-v.emptyLeft),h=Math.abs(f.emptyAbove-v.emptyAbove);return d+g+l+h},s=0,e=0;e<n.length;e++)for(var J=e+1;J<n.length;J++)s+=r(e,J);return s}function d2(t=""){for(var{locs:n}=En(t),r=999999,s=(F,f)=>{var v=n[F],d=n[f],g=Math.abs(v.x-d.x),l=Math.abs(v.y-d.y),h=Math.abs(v.emptyLeft-d.emptyLeft)*r,c=Math.abs(v.emptyAbove-d.emptyAbove)*r;return g+l+h+c},e=0,J=0;J<n.length;J++)for(var L=J+1;L<n.length;L++)e+=s(J,L);return e}const g2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:v2,part1:l2,part2:d2},Symbol.toStringTag,{value:"Module"}));var h2=[7379,7732028747925,21,525152];function b2(t=""){var n=(r="",s=0,e=0,J=[1])=>{if(s>r.length-1)return e===0?1:0;if(e>r.length-s)return 0;if(e===0)return r.substring(s).includes("#")?0:1;if(r[s]===".")return n(r,s+1,e,J);var L=0;r[s]==="?"&&(L+=n(r,s+1,e,J));var F=J[0];if(r.substring(s,s+F).includes(".")||r[s+F]==="#")return L;var f=J.filter((d,g)=>g>0),v=e-F-(J.length>1?1:0);return L+n(r,s+F+1,v,f)};return t.split(`
`).reduce((r,s)=>{if(s=s.trim(),!s)return r;var[e,J]=s.split(/\s+/),L=e.split(/\.+/).join("."),F=J.split(",").map(v=>parseInt(v)),f=F.reduce((v,d)=>v+d)+F.length-1;return r+n(L,0,f,F)},0)}function c2(t=""){var n=(e,J,L,F)=>{for(;L<F;)if(e[L++]===J)return!0},r=e=>{var J={};return(L,F,f)=>{var v=(L<<12)+F;return v in J?J[v]:J[v]=e(L,F,f)}},s=(e="")=>{var J=(L=0,F=0,f=[1])=>{if(L>e.length-1)return F===0?1:0;if(F>e.length-L)return 0;if(F===0)return n(e,"#",L,e.length)?0:1;if(e[L]===".")return J(L+1,F,f);var v=0;e[L]==="?"&&(v+=J(L+1,F,f));var d=f[0];if(n(e,".",L,L+d)||e[L+d]==="#")return v;var g=f.filter((h,c)=>c>0),l=F-d-(f.length>1?1:0);return v+J(L+d+1,l,g)};return J=r(J),J};return t.split(`
`).reduce((e,J)=>{if(J=J.trim(),!J)return e;var[L,F]=J.split(/\s+/),f=L.split(/\.+/).join("."),v=F.split(",").map(l=>parseInt(l)),d=5;f=[...Array(d).fill(f)].join("?"),v=[].concat(...Array(d).fill(v));var g=v.reduce((l,h)=>l+h)+v.length-1;return e+s(f)(0,g,v)},0)}const p2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:h2,part1:b2,part2:c2},Symbol.toStringTag,{value:"Module"}));var m2=[35210,31974,405,400],$n=(t=[""],n=0,r=1)=>{for(var s=0;n>=0&&r<t.length;n--,r++)if(t[n]!==t[r]){for(var e=0;e<t[0].length;e++)if(t[n][e]!==t[r][e]&&(s++,s>1))return 2}return s},In=(t=[""],n=0,r=1)=>{for(var s=0;n>=0&&r<t[0].length;n--,r++)for(var e=0;e<t.length;e++)if(t[e][n]!==t[e][r]&&(s++,s>1))return 2;return s};function a2(t=""){return t.split(`

`).reduce((n,r)=>{for(var s=r.split(`
`).map(F=>F.trim()),e=1;e<s.length;e++){var J=$n(s,e-1,e);if(!(J>0))return n+e*100}for(var L=1;L<s[0].length;L++){var J=In(s,L-1,L);if(!(J>0))return n+L}throw"?"},0)}function O2(t=""){return t.split(`

`).reduce((n,r)=>{for(var s=r.split(`
`).map(F=>F.trim()),e=1;e<s.length;e++){var J=$n(s,e-1,e);if(J===1)return n+e*100}for(var L=1;L<s[0].length;L++){var J=In(s,L-1,L);if(J===1)return n+L}throw"?"},0)}const z2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:m2,part1:a2,part2:O2},Symbol.toStringTag,{value:"Module"}));function x2(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function i2(t){for(var n=new Array(t),r=0;r<t;++r)n[r]=r;return n}var o2=i2;/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var k2=function(t){return t!=null&&(Zn(t)||j2(t)||!!t._isBuffer)};function Zn(t){return!!t.constructor&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function j2(t){return typeof t.readFloatLE=="function"&&typeof t.slice=="function"&&Zn(t.slice(0,0))}var q2=o2,u2=k2,T2=typeof Float64Array<"u";function K2(t,n){return t[0]-n[0]}function Q2(){var t=this.stride,n=new Array(t.length),r;for(r=0;r<n.length;++r)n[r]=[Math.abs(t[r]),r];n.sort(K2);var s=new Array(n.length);for(r=0;r<s.length;++r)s[r]=n[r][1];return s}function R2(t,n){var r=["View",n,"d",t].join("");n<0&&(r="View_Nil"+t);var s=t==="generic";if(n===-1){var e="function "+r+"(a){this.data=a;};var proto="+r+".prototype;proto.dtype='"+t+"';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new "+r+"(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_"+r+"(a){return new "+r+"(a);}",m=new Function(e);return m()}else if(n===0){var e="function "+r+"(a,d) {this.data = a;this.offset = d};var proto="+r+".prototype;proto.dtype='"+t+"';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function "+r+"_copy() {return new "+r+"(this.data,this.offset)};proto.pick=function "+r+"_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function "+r+"_get(){return "+(s?"this.data.get(this.offset)":"this.data[this.offset]")+"};proto.set=function "+r+"_set(v){return "+(s?"this.data.set(this.offset,v)":"this.data[this.offset]=v")+"};return function construct_"+r+"(a,b,c,d){return new "+r+"(a,d)}",m=new Function("TrivialArray",e);return m(an[t][0])}var e=["'use strict'"],J=q2(n),L=J.map(function(b){return"i"+b}),F="this.offset+"+J.map(function(b){return"this.stride["+b+"]*i"+b}).join("+"),f=J.map(function(b){return"b"+b}).join(","),v=J.map(function(b){return"c"+b}).join(",");e.push("function "+r+"(a,"+f+","+v+",d){this.data=a","this.shape=["+f+"]","this.stride=["+v+"]","this.offset=d|0}","var proto="+r+".prototype","proto.dtype='"+t+"'","proto.dimension="+n),e.push("Object.defineProperty(proto,'size',{get:function "+r+"_size(){return "+J.map(function(b){return"this.shape["+b+"]"}).join("*"),"}})"),n===1?e.push("proto.order=[0]"):(e.push("Object.defineProperty(proto,'order',{get:"),n<4?(e.push("function "+r+"_order(){"),n===2?e.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"):n===3&&e.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")):e.push("ORDER})")),e.push("proto.set=function "+r+"_set("+L.join(",")+",v){"),s?e.push("return this.data.set("+F+",v)}"):e.push("return this.data["+F+"]=v}"),e.push("proto.get=function "+r+"_get("+L.join(",")+"){"),s?e.push("return this.data.get("+F+")}"):e.push("return this.data["+F+"]}"),e.push("proto.index=function "+r+"_index(",L.join(),"){return "+F+"}"),e.push("proto.hi=function "+r+"_hi("+L.join(",")+"){return new "+r+"(this.data,"+J.map(function(b){return["(typeof i",b,"!=='number'||i",b,"<0)?this.shape[",b,"]:i",b,"|0"].join("")}).join(",")+","+J.map(function(b){return"this.stride["+b+"]"}).join(",")+",this.offset)}");var d=J.map(function(b){return"a"+b+"=this.shape["+b+"]"}),g=J.map(function(b){return"c"+b+"=this.stride["+b+"]"});e.push("proto.lo=function "+r+"_lo("+L.join(",")+"){var b=this.offset,d=0,"+d.join(",")+","+g.join(","));for(var l=0;l<n;++l)e.push("if(typeof i"+l+"==='number'&&i"+l+">=0){d=i"+l+"|0;b+=c"+l+"*d;a"+l+"-=d}");e.push("return new "+r+"(this.data,"+J.map(function(b){return"a"+b}).join(",")+","+J.map(function(b){return"c"+b}).join(",")+",b)}"),e.push("proto.step=function "+r+"_step("+L.join(",")+"){var "+J.map(function(b){return"a"+b+"=this.shape["+b+"]"}).join(",")+","+J.map(function(b){return"b"+b+"=this.stride["+b+"]"}).join(",")+",c=this.offset,d=0,ceil=Math.ceil");for(var l=0;l<n;++l)e.push("if(typeof i"+l+"==='number'){d=i"+l+"|0;if(d<0){c+=b"+l+"*(a"+l+"-1);a"+l+"=ceil(-a"+l+"/d)}else{a"+l+"=ceil(a"+l+"/d)}b"+l+"*=d}");e.push("return new "+r+"(this.data,"+J.map(function(b){return"a"+b}).join(",")+","+J.map(function(b){return"b"+b}).join(",")+",c)}");for(var h=new Array(n),c=new Array(n),l=0;l<n;++l)h[l]="a[i"+l+"]",c[l]="b[i"+l+"]";e.push("proto.transpose=function "+r+"_transpose("+L+"){"+L.map(function(b,a){return b+"=("+b+"===undefined?"+a+":"+b+"|0)"}).join(";"),"var a=this.shape,b=this.stride;return new "+r+"(this.data,"+h.join(",")+","+c.join(",")+",this.offset)}"),e.push("proto.pick=function "+r+"_pick("+L+"){var a=[],b=[],c=this.offset");for(var l=0;l<n;++l)e.push("if(typeof i"+l+"==='number'&&i"+l+">=0){c=(c+this.stride["+l+"]*i"+l+")|0}else{a.push(this.shape["+l+"]);b.push(this.stride["+l+"])}");e.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"),e.push("return function construct_"+r+"(data,shape,stride,offset){return new "+r+"(data,"+J.map(function(b){return"shape["+b+"]"}).join(",")+","+J.map(function(b){return"stride["+b+"]"}).join(",")+",offset)}");var m=new Function("CTOR_LIST","ORDER",e.join(`
`));return m(an[t],Q2)}function C2(t){if(u2(t))return"buffer";if(T2)switch(Object.prototype.toString.call(t)){case"[object Float64Array]":return"float64";case"[object Float32Array]":return"float32";case"[object Int8Array]":return"int8";case"[object Int16Array]":return"int16";case"[object Int32Array]":return"int32";case"[object Uint8Array]":return"uint8";case"[object Uint16Array]":return"uint16";case"[object Uint32Array]":return"uint32";case"[object Uint8ClampedArray]":return"uint8_clamped";case"[object BigInt64Array]":return"bigint64";case"[object BigUint64Array]":return"biguint64"}return Array.isArray(t)?"array":"generic"}var an={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],bigint64:[],biguint64:[],buffer:[],generic:[]};function _2(t,n,r,s){if(t===void 0){var v=an.array[0];return v([])}else typeof t=="number"&&(t=[t]);n===void 0&&(n=[t.length]);var e=n.length;if(r===void 0){r=new Array(e);for(var J=e-1,L=1;J>=0;--J)r[J]=L,L*=n[J]}if(s===void 0){s=0;for(var J=0;J<e;++J)r[J]<0&&(s-=(n[J]-1)*r[J])}for(var F=C2(t),f=an[F];f.length<=e+1;)f.push(R2(F,f.length-1));var v=f[e+1];return v(t,n,r,s)}var D2=_2;const Wn=x2(D2);var G2=[108935,100876,136,64],Kn=0,B2=1,On=2,Yn={".":Kn,O:On,"#":B2};function M2(t=""){var n=t.split(`
`).map(s=>s.trim()),r=Wn([],[n.length,n[0].length]);return n.forEach((s,e)=>{s.split("").forEach((J,L)=>{r.set(e,L,Yn[J])})}),n1(r),e1(r).load}var n1=t=>{for(var n=0;n<t.shape[0];n++)for(var r=0;r<t.shape[1];r++){var s=t.get(n,r);if(s===On)for(var e=n;e>0&&t.get(e-1,r)===Kn;)t.set(e,r,Kn),t.set(--e,r,On)}},e1=t=>{for(var n=0,r=0,s=0,e=0;s<t.shape[0];s++,e++)for(var J=0;J<t.shape[1];J++)t.get(s,J)===On&&(n+=t.shape[0]-s,r+=J*17+s*177+e*1777);return{load:n,hash:r}};function w2(t=""){var n=t.split(`
`).map(l=>l.trim()),r=Wn([],[n.length,n[0].length]);n.forEach((l,h)=>{l.split("").forEach((c,m)=>{r.set(h,m,Yn[c])})});for(var s=[],e=[],J=0;J<1e4;J++){for(var L=0;L<4;L++)n1(r),r=r.transpose(1,0).step(1,-1);var{load:F,hash:f}=e1(r),v=e.indexOf(f)+1;if(v>0){var d=J+2,g=v+(1e9-d)%(d-v-1);return s[g]}s.push(F),e.push(f)}return-1}const A2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:G2,part1:M2,part2:w2},Symbol.toStringTag,{value:"Module"}));var S2=[505459,228508,1320,145],r1=(t="")=>{for(var n=0,r=0;r<t.length;r++)n+=t.charCodeAt(r),n*=17,n%=256;return n};function H2(t=""){return t.split(`
`).join("").split(",").reduce((n,r)=>n+r1(r),0)}function V2(t=""){var n=Array(256).fill(1).map(r=>[]);return t.split(`
`).join("").split(",").forEach(r=>{var[,s,e]=/^(\w+)(.*)/.exec(r),J=r1(s),L=n[J];if(e==="-"){n[J]=L.filter(v=>v.label!==s);return}var F=parseInt(e.substring(1)),f=L.some((v,d)=>{if(v.label===s)return v.num=F,!0});f||L.push({label:s,num:F})}),n.reduce((r,s,e)=>r+s.reduce((J,L,F)=>J+(e+1)*(F+1)*L.num,0),0)}const X2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:S2,part1:H2,part2:V2},Symbol.toStringTag,{value:"Module"}));var P2=[6361,6701,46,51];function N2(t=""){var{countFrom:n}=t1(t);return n(-1,0,1)}function y2(t=""){for(var{countFrom:n,clearData:r,sx:s,sy:e}=t1(t),J=(v,d,g)=>(r(),n(v,d,g)),L=0,F=0;F<s;F++)L=Math.max(L,J(F,-1,2)),L=Math.max(L,J(F,e,0));for(var f=0;f<e;f++)L=Math.max(L,J(-1,f,1)),L=Math.max(L,J(s,f,3));return L}var t1=t=>{var n=t.split(`
`).map(f=>f.trim().split("").map(v=>({char:v,flags:[]}))),r=n[0].length,s=n.length,e=(f,v)=>f<0||v<0||f>=r||v>=s,J=(f,v)=>f==="/"?[[1,0,3,2][v]]:f==="\\"?[[3,2,1,0][v]]:f==="|"&&v%2?[0,2]:f==="-"&&!(v%2)?[1,3]:[v],L=(f,v,d)=>{if(f+=[0,1,0,-1][d],v+=[-1,0,1,0][d],e(f,v))return 0;var{char:g,flags:l}=n[v][f];if(l[d])return 0;l[d]=!0;var h=l[4]?0:1;return l[4]=!0,g==="."?h+L(f,v,d):(J(g,d).forEach(c=>h+=L(f,v,c)),h)},F=()=>{n.forEach(f=>{f.forEach(v=>{v.flags=[]})})};return{sx:r,sy:s,countFrom:L,clearData:F}};const U2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:P2,part1:N2,part2:y2},Symbol.toStringTag,{value:"Module"}));var E2=[674,773,102,94];function $2(t=""){return J1(t,1,3)}function I2(t=""){return J1(t,4,10)}var Z2=t=>{var n=t.split(`
`).map(F=>F.trim().split("").map(f=>({cost:parseInt(f),best:[1/0,1/0]}))),r=n[0].length,s=n.length,e=(F,f)=>F<0||f<0||F>=r||f>=s,J=(F,f)=>n[f][F],L=(F,f)=>Math.abs(r-1-F)+Math.abs(s-1-f);return{getData:J,OOB:e,goalDist:L}};function W2(){var t={},n=[],r=(e,J)=>{if(e in t)return t[e].push(J);t[e]=[J],n.push(e),n.sort((L,F)=>F-L)},s=()=>{if(n.length===0)return null;var e=n.at(-1),J=t[e];return J.length>1?J.pop():(n.pop(),delete t[e],J[0])};return{pushQueue:r,popQueue:s}}function J1(t="",n=1,r=3){var{getData:s,OOB:e,goalDist:J}=Z2(t),{pushQueue:L,popQueue:F}=W2(),f=(l=0,h=0,c=0,m=0)=>{if(!e(l,h)){var b=c%2,a=s(l,h);if(!(m>=a.best[b])){a.best[b]=m;var p=m+J(l,h);L(p,{x:l,y:h,dir:(c+1)%4,cost:m}),L(p,{x:l,y:h,dir:(c+3)%4,cost:m})}}};f(0,0,1,0),f(0,0,2,0);for(var v=-1,d=l=>{var{x:h,y:c,dir:m,cost:b}=l;if(J(h,c)===0){v=b;return}for(var a=1;a<=r;a++){if(h+=[0,1,0,-1][m],c+=[-1,0,1,0][m],e(h,c))return;b+=s(h,c).cost,a>=n&&f(h,c,m,b)}};v<0;){var g=F();if(!g)return-1;d(g)}return v}const Y2=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:E2,part1:$2,part2:I2},Symbol.toStringTag,{value:"Module"}));var n3=[38188,93325849869340,62,952408144115];function e3(t=""){var n=0,r=0,s=0;return t.split(`
`).forEach(e=>{var[J,L,F]=e.trim().split(/\s+/),f=parseInt(L),v={R:1,L:-1}[J]||0,d={D:1,U:-1}[J]||0;s+=f,r-=n*v*f,n+=d*f}),r+s/2+1}function r3(t=""){var n=0,r=0,s=0;return t.split(`
`).forEach(e=>{var[,,J]=e.trim().split(/\s+/),L="RDLU"[J.substring(7,8)],F=parseInt(J.substring(2,7),16),f={R:1,L:-1}[L]||0,v={D:1,U:-1}[L]||0;s+=F,f!==0&&(r+=n*-f*F),n+=v*F}),r+s/2+1}const t3=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:n3,part1:e3,part2:r3},Symbol.toStringTag,{value:"Module"})),J3=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));var L3=[896998430,0xd6ba61c4ab3b,32e6,,11687500],$="low",Z="high";function s3(t=""){var n={};t.split(`
`).forEach(F=>{var[f,v]=F.trim().split(/\s*->\s*/),d=f[0],g=f.substring(1),l=v.split(/\s*,\s*/),h=!1,c=[],m={};n[g]={type:d,label:g,dest:l,inputs:c,state:h,remembered:m}}),Object.keys(n).forEach(F=>{n[F].dest.forEach(f=>{f in n&&(n[f].inputs.push(F),n[f].remembered[F]=$)})});for(var r=[],s={[$]:0,[Z]:0},e=(F="",f="",v=$)=>{s[v]++,f in n&&r.push({src:F,tgt:f,pulse:v})},J=()=>{r=[],e("button","roadcaster",$);for(var F=0;F<r.length;F++){var{src:f,tgt:v,pulse:d}=r[F],{type:g,label:l,dest:h,inputs:c,state:m,remembered:b}=n[v];if(g==="b")h.forEach(p=>e(l,p,d));else if(g==="%"){if(d===Z)continue;m=!m,n[v].state=m,h.forEach(p=>e(l,p,m?Z:$))}else if(g==="&"){b[f]=d;var a=c.every(p=>b[p]===Z);h.forEach(p=>e(l,p,a?$:Z))}}},L=0;L<1e3;L++)J();return s.high*s.low}function F3(t=""){var n="rx",r="",s={};if(t.split(`
`).forEach(l=>{var[h,c]=l.trim().split(/\s*->\s*/),m=h[0],b=h.substring(1),a=c.split(/\s*,\s*/),p=!1,O=[],i={};s[b]={type:m,label:b,dest:a,inputs:O,state:p,remembered:i}}),Object.keys(s).forEach(l=>{s[l].dest.forEach(h=>{h===n&&(r=l),h in s&&(s[h].inputs.push(l),s[h].remembered[l]=$)})}),!r)return-1;var e=s[r].inputs.slice(),J=0,L={};for(var F of e)L[F]=-1;for(var f=0,v=(l,h="",c="",m=$)=>{h in L&&m===Z&&L[h]<0&&(L[h]=f,J++),c in s&&l.push({src:h,tgt:c,pulse:m})},d=()=>{var l=[];f++,v(l,"button","roadcaster",$);for(var h=0;h<l.length;h++){var{src:c,tgt:m,pulse:b}=l[h],{type:a,label:p,dest:O,inputs:i,state:o,remembered:z}=s[m];if(a==="b")O.forEach(u=>v(l,p,u,b));else if(a==="%"){if(b===Z)continue;o=!o,s[m].state=o,O.forEach(u=>v(l,p,u,o?Z:$))}else if(a==="&"){z[c]=b;var k=i.every(u=>z[u]===Z);O.forEach(u=>v(l,p,u,k?$:Z))}}},g=0;g<1e5&&(d(),J!==e.length);g++);return e.reduce((l,h)=>l*L[h],1)}const f3=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:L3,part1:s3,part2:F3},Symbol.toStringTag,{value:"Module"}));var v3=[3830,637087163925555,16];function l3(t=""){for(var n=[0,0],r=t.split(`
`).map((g,l)=>g.trim().split("").map((h,c)=>h==="#"?{val:-1}:(h==="S"&&(n=[c,l]),{val:0}))),s=r[0].length,e=r.length,J=([g,l])=>r[l][g],L=[n],F=s<20?6:64,f=0,v=1;v<=F;v++){var d=[];L.forEach(([g,l])=>{for(var h=0;h<4;h++){var c=g+[0,1,0,-1][h],m=l+[-1,0,1,0][h];if(!(c<0||c>=s)&&!(m<0||m>=e)){var b=J([c,m]);b.val===0&&(b.val=1,v%2===0&&f++,d.push([c,m]))}}}),L=d}return f}function d3(t=""){for(var n=[0,0],r=t.split(`
`).map((o,z)=>o.trim().split("").map((k,u)=>k==="#"?!1:(k==="S"&&(n=[u,z]),!0))),s=r[0].length,e=r.length,J=(o,z)=>(o=(o%s+s)%s,z=(z%e+e)%e,r[z][o]),L=(o,z)=>[o[0]+[0,1,0,-1][z],o[1]+[-1,0,1,0][z]],F=[0],f=[n],v={},d=1e3,g=Math.floor(s/2),l=26501365,h=[],c=[],m=[],b=1;b<=d;b++){var a=[],p=0;if(f.forEach(o=>{for(var z=0;z<4;z++){var k=L(o,z);if(J(...k)){var u=k.join(",");u in v||(p++,v[u]=1,a.push(k))}}}),p+=F[b-2]||0,F.push(p),f=a,b%s===g&&(h.push(p),h.length>1&&c.push(h.at(-1)-h.at(-2)),c.length>1&&m.push(c.at(-1)-c.at(-2)),m.length>1&&m.at(-1)===m.at(-2))){var O=(l-b)/s;if(O%1!==0)return-1;var i=h.at(-1);return i+=c.at(-1)*O,i+=m.at(-1)*(O+1)*O/2,i}}return-1}const g3=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:v3,part1:l3,part2:d3},Symbol.toStringTag,{value:"Module"}));var h3=[512,98167,5,7];function b3(t=""){var n=[];t.split(`
`).forEach((e,J)=>{var[L,F]=e.trim().split("~");if(L){var f=L.split(",").map(l=>parseInt(l)),v=F.split(",").map(l=>parseInt(l)),d=f.map((l,h)=>Math.min(l,v[h])),g=f.map((l,h)=>Math.max(l,v[h]));n.push({min:d,max:g,belowMe:[],aboveMe:[],restingOn:[],restedOnBy:[]})}}),n.forEach((e,J)=>{n.forEach((L,F)=>{J!==F&&(e.min[0]>L.max[0]||e.max[0]<L.min[0]||e.min[1]>L.max[1]||e.max[1]<L.min[1]||e.min[2]<L.min[2]&&(L.belowMe.push(e),e.aboveMe.push(L)))})}),n.sort((e,J)=>e.min[2]-J.min[2]),n.forEach(e=>{var J=e.belowMe.reduce((F,f)=>Math.max(F,f.max[2]),0),L=e.min[2]-(J+1);e.min[2]-=L,e.max[2]-=L});var r=(e,J)=>e.max[2]+1===J.min[2];n.forEach(e=>{e.restingOn=e.belowMe.filter(J=>r(J,e)),e.restedOnBy=e.aboveMe.filter(J=>r(e,J))});var s=e=>{for(var J of e.restedOnBy)if(J.restingOn.length===1)return!1;return!0};return n.reduce((e,J)=>e+(s(J)?1:0),0)}function c3(t=""){var n=[];t.split(`
`).forEach((e,J)=>{var[L,F]=e.trim().split("~");if(L){var f=L.split(",").map(h=>parseInt(h)),v=F.split(",").map(h=>parseInt(h)),d=f.map((h,c)=>Math.min(h,v[c])),g=f.map((h,c)=>Math.max(h,v[c])),l=String.fromCharCode(65+J);n.push({char:l,min:d,max:g,belowMe:[],aboveMe:[],restingOn:[],restedOnBy:[],chainsTo:[],flag:!1})}}),n.forEach((e,J)=>{n.forEach((L,F)=>{J!==F&&(e.min[0]>L.max[0]||e.max[0]<L.min[0]||e.min[1]>L.max[1]||e.max[1]<L.min[1]||e.min[2]<L.min[2]&&(L.belowMe.push(e),e.aboveMe.push(L)))})}),n.sort((e,J)=>e.min[2]-J.min[2]),n.forEach(e=>{var J=e.belowMe.reduce((F,f)=>Math.max(F,f.max[2]),0),L=e.min[2]-(J+1);e.min[2]-=L,e.max[2]-=L});var r=(e,J)=>e.max[2]+1===J.min[2];n.forEach(e=>{e.restingOn=e.belowMe.filter(J=>r(J,e)),e.restedOnBy=e.aboveMe.filter(J=>r(e,J))}),n.forEach(e=>{e.chainsTo=e.restedOnBy.filter(J=>J.restingOn.length===1)});var s=e=>{n.forEach(L=>L.flag=!1),e.flag=!0;var J=0;return n.forEach(L=>{if(L.restingOn.length!==0){var F=L.restingOn.every(f=>f.flag);F&&(J++,L.flag=!0)}}),J};return n.reduce((e,J)=>e+s(J),0)}const p3=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:h3,part1:b3,part2:c3},Symbol.toStringTag,{value:"Module"}));var m3=[2086,6526,94,154];function a3(t=""){var n=t.split(`
`).map(z=>z.split("").map(k=>({char:k,max:-1}))),r=n[0].length,s=n.length,e=(z,k)=>z<0||k<0||z>=r||k>=s,J=(z,k)=>n[k][z],L=(z,k,u)=>(z+=[0,1,0,-1][u],k+=[-1,0,1,0][u],[z,k]),F="^>v<",f=[n[0].findIndex(z=>z.char==="."),0],v=[n[s-1].findIndex(z=>z.char==="."),s-1],d=[],g=(z,k,u,V)=>d.push({x:z,y:k,dir:u,ct:V});for(g(...f,2,0);d.length>0;){if(d.length>1e5)throw"inf loop";var{x:l,y:h,dir:c,ct:m}=d.pop(),b=J(l,h);if(!(b.max>m)){if(b.max=m,b.char!=="."){var a=F.indexOf(b.char);if(a!==c)continue;g(...L(l,h,a),a,m+1);continue}for(var p=(c+2)%4,O=0;O<4;O++)if(O!==p){var i=L(l,h,O);if(!e(...i)){var o=J(...i);o.char!=="#"&&g(...i,O,m+1)}}}}return J(...v).max}function O3(t=""){var n=t.split(`
`).map(p=>p.split("").map(O=>({wall:O==="#",searched:Array(4).fill(!1)}))),r=n[0].length,s=n.length,e=(p,O)=>p<0||O<0||p>=r||O>=s,J=(p,O)=>n[O][p],L=(p,O,i)=>(p+=[0,1,0,-1][i],O+=[-1,0,1,0][i],[p,O]),F=[n[0].findIndex(p=>!p.wall),0],f=[n[s-1].findIndex(p=>!p.wall),s-1],v=[],d=(p,O,i,o,z)=>v.push({dist:p,x0:O,y0:i,x1:o,y1:z}),g=(p,O,i)=>{if(!J(p,O).searched[i]){J(p,O).searched[i]=!0;for(var o=1,[z,k]=L(p,O,i),u=(i+2)%4,V=0;V<1e4;V++){var X=[0,1,2,3].filter(C=>{if(C===u)return!1;var E=L(z,k,C);return e(...E)?!1:!J(...E).wall});if(X.length===1){[z,k]=L(z,k,X[0]),u=(X[0]+2)%4,o++;continue}if(X.length===0&&(z!==f[0]||k!==f[1]))return;d(o,p,O,z,k),X.forEach(C=>g(z,k,C));return}}};g(...F,2);var l={},h=(p,O)=>[p,O].join(",");v.forEach(({dist:p,x0:O,y0:i,x1:o,y1:z})=>{var k=h(O,i),u=h(o,z);l[k]||(l[k]={out:[],dists:{},painted:!1}),l[u]||(l[u]={out:[],dists:{},painted:!1}),l[k].dists[u]=p,l[u].dists[k]=p});for(var c in l)l[c].out=Object.keys(l[c].dists);var m=h(...F),b=h(...f);if(!l[m])throw"?";var a=(p="")=>{var O=l[p];if(b in O.dists)return O.dists[b];O.painted=!0;for(var i=-1/0,o=0;o<O.out.length;o++){var z=O.out[o];l[z].painted||(i=Math.max(i,O.dists[z]+a(z)))}return O.painted=!1,i};return a(m)}const z3=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:m3,part1:a3,part2:O3},Symbol.toStringTag,{value:"Module"}));var x3=[15558,765636044333842,2,47];function i3(t=""){var n=t.split(`
`).map((e,J)=>{var[L,F]=e.split("@"),f=L.split(",").map(l=>parseInt(l)),v=F.split(",").map(l=>parseInt(l)),d=v[1]/v[0];if(v[0]===0)throw"fix";var g=f[1]-d*f[0];return{pos:f,vel:v,m:d,b:g,ix:J}}),r=[2e14,4e14];n.length<20&&(r=[7,27]);var s=0;return n.forEach(e=>{n.forEach(J=>{if(!(e.ix<=J.ix)){if(e.m===J.m){e.b===J.b&&s++;return}var L=(J.b-e.b)/(e.m-J.m),F=L*e.m+e.b;if(!(Math.min(L,F)<r[0])&&!(Math.max(L,F)>r[1])){var f=(L-e.pos[0])/e.vel[0];if(!(f<0)){var v=(L-J.pos[0])/J.vel[0];v<0||s++}}}})}),s}function o3(t=""){for(var n=t.split(`
`).map((d,g)=>{var[l,h]=d.split("@"),c=l.split(",").map(b=>parseInt(b)),m=h.split(",").map(b=>parseInt(b));return{pos:c,vel:m,ix:g}}),r=[],s=0;s<3;s++){var e=Array(2e3).fill(0).map((d,g)=>g-1e3);n.forEach((d,g)=>{n.forEach((l,h)=>{if(!(h<=g)&&d.vel[s]===l.vel[s]){var c=Math.abs(d.pos[s]-l.pos[s]);e=e.filter(m=>{var b=m-d.vel[s];return c%b===0})}})}),r[s]=e}var J=d=>{var g=[0,0,0],l=n.some((O,i)=>{var o=O.vel.map((u,V)=>u-d[V]);if(o[0]!==0){var z=o[1]/o[0],k=O.pos[1]-z*O.pos[0];return n.some((u,V)=>{if(!(V<=i)){var X=u.vel.map((j,Q)=>j-d[Q]);if(X[0]!==0){var C=X[1]/X[0],E=u.pos[1]-C*u.pos[0],en=(E-k)/(z-C),M=(en-O.pos[0])/o[0];return g=O.pos.map((j,Q)=>j+M*o[Q]),!0}}})}});if(!l)throw"fix";for(var h of g)if(h%1!==0)return;for(var c of n){var m;if(c.vel[0]!==0)for(var b=0;b<3;b++){var a=c.vel[b]-d[b];if(a!==0){var p=g[b]-c.pos[b];if(b===0)m=p/a;else if(m!==p/a)return}}}return g.reduce((O,i)=>O+i,0)};for(var L of r[0])for(var F of r[1])for(var f of r[2]){var v=J([L,F,f]);if(!isNaN(v))return v}return-1}const k3=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:x3,part1:i3,part2:o3},Symbol.toStringTag,{value:"Module"}));var j3=[571753,1,54,1];function q3(t=""){var n={},r=f=>({outKeys:{},out:[],painted:!1}),s=(f,v)=>{n[f]=n[f]||r(),n[v]=n[v]||r(),n[f].outKeys[v]=n[v].outKeys[f]=!0};t.split(`
`).forEach((f,v)=>{var[d,g]=f.trim().split(/\s*:\s*/);g.split(/\s+/).forEach(l=>s(d,l))}),Object.keys(n).forEach(f=>{n[f].out=Object.keys(n[f].outKeys).map(v=>n[v])});for(var e=f=>f.out.reduce((v,d)=>v+(d.painted?1:0),0),J=()=>{var f=Object.keys(n).map(h=>n[h]);f.forEach(h=>h.red=!1);for(var v=0;v<1e4;v++){var d=-1,g=-1;if(f.forEach((h,c)=>{var m=e(h);m>g&&(g=m,d=c)}),g<0)return-1;f[d].painted=!0,f.splice(d,1);var l=f.reduce((h,c)=>h+e(c),0);if(l===3)return f.length*(Object.keys(n).length-f.length);if(f.length===0)return-1}},L=0;L<1e3;L++){var F=J();if(F>0)return F}return-1}function u3(t=""){return 1}const T3=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:j3,part1:q3,part2:u3},Symbol.toStringTag,{value:"Module"})),K3=`1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`,Q3=`two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`,R3=`8eight1
98126
fourfourthreehnbhkmscqxdfksg64bvpppznkh
8fivenvvtrlj
six3zbhvrfhsevennine
427nine6chnqrssxfour
threevvxhvx38rktdqm3
eightzgqzr3eight
xgjjmnlvznf2nineltmsevennine6
ninethree15seven
37cjnsfbfkqpkxpdvgk8
sgeightwo3
9sbxg
1spnthree59ninejjgjdlx
six9six2gxmn
twothreefdbl6five3zcqvcqxkcvdfkl4
46six47seven27one
four15
7sixvmsrrzqnngonethree
3fvsghvkqkbfivenine
zhthfghk6ppc48bdx6two
1fouronesixsvhbglmvxx
7lcsixmzmseven
two37sixccrpqngpvthree
86fivelqmlmbnhq
bvcz4
6fivendr7seven31nine4
jmkhtgklhpxxblc2slhlnfkoneonefour
8smpnsc29threesix
r795vgnhqhs92one
eightfive6
4threeqzslpcvkpfdjh
8cthp65
twoonenine87
dzttdmpfxtnine6onefourone3vnnz
8tnnfrsdffpthree67xh
seven5seven27hf
3sevenone
seven9foursskfhnchhf481
vrfbrcsgp81vsztr
six9dnqqgxtvrngpz7879two
lkvzzdxmr71lglsixfour
two6jkpz9
1sevenpmjfv
nlvrdmdhxsix7three7frmdlckfjninesix
gfb89qrhtzsfvbnpbp6two
f8mbbtzjvrqkrszlgrlzrlrgmbmmrdqv8seven
sphkkpptpvjzbflkzz2vbndc3foureighttbn
eightnine5zpbzhltpmsxrggdcmbrzkvczqbfsevendtjsr
2snpbrhpnine3sevensevenhftpqgk5
seventjxr91sevenseveneightwojf
1hfkvhjxrtjfivefive
3fxgmlxtwo
stwoeighttwo3
eight45t
sixthreecdhbfive3sevensrskjm
fiveklmj94sixlhpfztlk95
fivefive6
fiventjm7tndhd57
teightwo87nine83
6jskjmxrttwo93four7
dftzgsdc19threesevennine3twonevl
zmpcgkonethree1cspnkkpjr9
hmsfrjtxpgn9dqkr9dqvrtq4
3eightmfggjleight
qfglzvvrrtpfl4
7eightonefpqq3
tgtbsmpftwo4hvnvsixfrdqbvqbhspcczfhvqcslvfszvrtzbks
twofivesix34nine
dhlhkjcjsbgnxd6sgrdnzchtxtplltbqlk
oneonegcndlfourdngmbgdeightsix2
twotj9l8onetwoned
jpz2fourjgrjzf44
9fivesixmlqr8rxqpvpfzfive2nine
6xkfkrfnine196
four7gppqtzvbftzcbzt8nqq1nineqdlrff
2threekxgcqjzt4qdbthmjx
three61eightrnkckq
9knfvqgmdsmdqlkfzl
mxsqv6twojgmhpmlfq
7fouronelngndbsmljbfzmsix
fjm8fdpnlldlgvkqdcdcdjpxzdt
7five2
tsp9seven
eight2hzpkpqrjgcrnxksix
jfourcgjbpzbgdn61dzqbgthree
7threefive
1ncmzhqghthree3sixllvknhf
one5six9
krzkzmbccr1
74mqnzmqnf6
four9pfhjktmvxtwo
6bl21bpx2
4threefdpfqck
jjksjbsjlgdonefour5
2hbthreegfh1
threegzbn1four4hbqkmtmoneightrhg
fiveeightnine83
3five49jvrhvmnjmmzlzmhpbpsfpn4
3vvhshsixone3
55three7svtlzzggkqjhjx
fxdmnjsvpjbg69gcknlzgrqhqdsxvk3p
eightfcnmbzl2jhlklgmlmsevenkjbgzhstwo
6sevengdmtlfjmns63
ktgqthreedfmrpdvnkfvs3jsgcvtdkh
4seven1
34onexkninex6pnldxrfs
threenine3five9eightrvg9
xqbnmtrlsjninenine57rpcsjpqfdcbd6
216two
xhrdmfcvjzt4sixfkjsvkfhtldfqckj
2six8zeight1
cmpklgjgf19twoqstfhphbxxtfdgj2
lvgqnkqhltwo9r
twosevenfive2rgfsgmzqjbnine
7ddpjxmfschtqdgnjqc18one
oneninefiveeight6
qs4five5
rpxbcff9vpmlvvrlonefourdnczqzjbvnine3
7592r3qjtwothree
sixtwoninegzrfp9hq6six9oneightp
f8seven1dcrjqchxchfour8
bnhmfmsbzbhfive1rfqqkzkptjnnxpone2jqhrfnvkfk
qlhpvzdkcfsq84
dfour5one
hcvxnfm32kpzxkhvmvkjsevenllpjpgdhl
dlhhnk2ctvxqmbmsc9five
one7sevenninesix
two4rkb5sixtx17
28three7
msixeightnqmtfmtftsix9
zff8nineflfpz1six1
vk9
86ninelzskddf9784
mrntnhjrvkjgmntone715ktgb7
sevensixthreegkldpptbmteightsix2nfnljvkfkgc
nineonenine3ssnjhkhdplvq3six
jrdgsz8
5nine6bglkndgfnineq
nineone8seven5zhdd2eight
17qjzvtwo
4rncnvtp5ssznhncdnnzndr9
6srf
5two6xxkzdrbfsix
five314sevenseven
eightsix7lhfqone
gdz3one
6sdplqg
rsnnm3twoqlxjjvzeightvxszxhmnck
7onelvrtdktmcmrm55
1eightzvcgfqgfh
ssgrzpb6jntxrdhvmrkeight
5oneninetwo
gjktwopxxql4gxfourseven9
four55sevenvglcrqsdt
nsqrjfhs2eight
seventhree5g9
threehvmrmvglvvsix7pqxzfjvv
cfgfmgg5vmqnnqrxdxone35
two2fxsmdjmb
rrlxrkjkxmfrbvxsevenrlllvclhvvfourlp4seven
djdoneightthree82eight6five6
two4threecdbgnmzvdd53oneeightkmx
one5qdtnrpcmrnnsbeighttwotwoninegtpv
86htqkfrkmone217
onelqd5jvlbm4
eightone3rpnkglzfcveight12one
fourqfxndmpgbqrcpclbnn86hxsxqrrkjcgtgxbdxjdjlzcrhkp
1one18tjcsjzpmzmpmstzmcn9
threesevenpgt3
four9sixthree1
twoninethreesxxqgqlqmqxkmkl2qdrqpftwo
seven678
two29six958kqxq3
dbpjzgdrhnsixfjvs9eightsjdgtckdtsjmhplkjeightwodd
7fourninenine
fourthreedlhf9rf
mjkvfivekltmfourone2
7twozrrtg498one
4eightcxnx
one62eightdktgeight2five
bnpxcdxpzp4tklvsm
d8sixninegrbx
threefourfivetwo23
nine3onemqtbrhlp8jqslv66ssjrkh
1four9fournine2
xfsl83two4
65twonine
1twofivevctxpfvr18
819gc4six79
27vtvmsix1phzrone2nine
boneight1mskkndkgfive
1xmpkmg3
one8sixthree9zjtmqjjjtc1nine
six36gqjctdsevenlnmmbr7dplrsdptwo
8jjvgmffgxr5
fivehgkc5
2qmbvphfivexggrxljhj9qmjrzmrx8eight
3rndntwoseven
boneight6tworgxffournine
htbvm1grtsgdgbl
1hkndcqv
32sl9six9
894
vrhxnstqqmflm6glgfnpfour
5ninekrfivesix8
5six5
eightpdzjhvbgm5oneonetwothmnkflz
vnfttnhcs892rmpvjvqvfftmzlkcrzthkbhfour2
9twoeight
73553bkzzhq
fvxmvs47
3bhmjpqvzs
pcftqc671
sixtwo8
threesdhhzmxtzpsfgs286nmqpvrtkbktcblqqb
7pmhlfcmdxthree11gxpncfqntjtwoone
8fivel3sevenxqtpxjntbjbtxhxtqdfnfour
6seven72zzseven
seven9kcthreetwo2five7br
kvkhl1fzvpseven
5oneoneeighteight6
lvfx6onefour
ftjzq4
slbgthc5xsxvplbskk
64nkjjvrmsqzdone
twoonelgcnrmrm52
gnfmrdkzoneseven7twotxgsjsix1one
1xlrpbbdbdgftkd
8jmphpvclbf87two
724threesixthreetwozsix
bcxdnrd91cprdfcqfive
zxjcgbhfr3
scfklbckxjggbgz9txqnzf6
1twohctsdfkgsdteight2
7threethree
jdj9
99
sixfzv24nine2bz
onefour1frf79tcfjchqeight
onethreenkgjgtpxfkmncvmsqs2bsqppgg
fourfourtksqrmnmqfour351lrsnv
6559hthdpeightkfive3
sixone7
eightoneeightjcsggnqthree5qqmp
sixeightonegltz7
three4plz3kls
8sixmssvtthreeseventhreenskzq6
tbzxjqxkspseven9dtbqvchseven8mbpznrrh1tdmqs
1b7eight
thk23eightfivekvzphvmsfour
7cnlrjzvk66threefxzrtgrbvmbp
bhvponeonefouronedcstbnl8
eightninesix4fourbrpfp
four29eight
kqh5zkgqphzjvz
4zvh
fivesixnzbsvfjhj2
rkrnbpsqjdthreez78mg
eight4gzxfdjpnjnskzghlzfdmjhz
seven8fourxzdmlcq1mnine7qbblrqtrsq
gd369
hgtqgfive8
pcbgddgvvzpmone4onethreeoneonefive
95nnjhmhrqgkkstwo66
723sixone9threefiveone
threekfvqsscfjr8
3vzltxllq65jvthree
4977d
35pgnlsjjpbgseven33
g25twonineeight
three8eight3six
8five8vjnzglnrbsbxmjqzfvrsoneightlpx
3bksdkncgtmdrlvkgboneffkszhfive8
five1hfh6
fourfoursix2nine9t
6onetkhqqonetwo
26hdfljh8
6onethreefvgnoneoneninefour1
jghct6rzcbjsfivefourtsrbsjkgmtfive
nine93eightxqknsqhrmjthree2
fivenine44sixsixlxdkpm
threeeight16jjhdkbhlninekvdvlpbq
onethpbzthhlqxnlrmtwo8
seveneight1eight
5two8
4four8vdpmqvf3onenmfg9
eight9jtxgdzdrtwovznpmnqvnnlffsix
456four
9hxkq
713kthreexfbdrtbx
1five59
1mxpmfive63
sixfour1ffivezjj
97eightthreecjnxblrnine
kgqcxfzc4sixnineoneone3eight
9fbklklqqsfourbfhmfmgnbtls3three
xxjnbdxzeightjqvvd82kfchrthmgkfive
zfdeightwokbq3seven
6four696ninezfhrbg
zrznfshdvlxcstqtghjnjvxq1dlklzghbh
steightwoxfbfzlnzvlj7919four
nine48oneeightseven89five
ninesxtdnjkmg7rn32qdljqprj3
five6xkcg1qmpkddfbsnlhzltlqqjr8
99sgptmns4five
2ninejdstk
gvclfcg9
n9lmv
jrftwo3
sxrxlnvdhr47dppck
jvtwonesixlzdshrfjtzgqddsix7
7peightoneeightwobsc
three6txdjgqqmsdeightcxmljmmzxksseven
fqpx9three96xrvjvjjnrhknsvfour
9fournjmslzbmx34cnt
f3twovfc
shbtwone3kzdsdrxgr
4five1tfhvd27
rdccbvkr9gjsmxhfdzgvjcbkdmsdeightlvjkdgtdqmbvscvhpmdz
pzsqhqthreetwo1qxfbhreight
threeeightxonenineninepmjfgzsdhd1
nine7sevenone
hbsqqtlqcxkjjccmmpv5
6nineltr5plmbgzfqbxninerxzbzrblmfsmjggvr
5eightwolxp
5cscpfqm
four3nthbmbxfbvtrqqkfmltmtjh
pvxtx89jp9onesevennbxmjlzmfk
threetwoeightzcgkbv1
7rxxfpgvl3eight8dmhkf
nine6two
tpnr21five1eight
ktsx6threeseven
8four31drvszglmv
fgkmbcgsrjgs6eightfivefqqdksrndrtdbsxgmfgtggmrc
sixnineninefzvthdq5tkzrhrgdqblzndmv
7lfdrntqsm
seven8dgxgqvgvmtdkhqsfkhtqcjpvqlfnine
znltfour6twopsdmcthree
oneeightvvvxxptmk4eight2n
5six1jmmqtknpveight
eightsixxxpbvqhpknz27mqxvf
rbdchcmqhseightnine9
944five8gxsjf98
smdhcnbmone9
one64six
seven4fivesevenfournine
fivetjt27qqxncqcone
five49655onet5
mlqgmhfgsix3two2
jxdfkbvdgnjqznineh1rdqsv7
fqdvcktwoeightsixsevenkkczb3
3krndk27
qjpmscfqf2gzgvzgksc
5zs11fourqqzfour
5h
fourtjzxtgrtd2twokrkpfm
fourgxprrlvmhgpggsmzbone7
ldbprdzrqkgqkx23pjvgrc6
ninevfh2seven4four
23gfmpvvsrjr4vlntkxkeight
sevensixonefivefour9two
vmchfrmfntwo3sv1twoonenngblvmjsf9
sqhzppseven79kzdppfnk8foureighttwo
1ljltwo8xhszxqmtponethreesevendkx
4fourfive
5fpzhcd7pmbcxcrkp
cdhqgkhfive61seven
eightqtzrscqhr3
brrftwothreethree1
r145pbthqtvxd63
ninebdnxdvchzf57oneightpp
7one1three68
five8nknine341msfflpnz
sixxmsevennm6
2n5cdvvtghfg2lmfrbjbvtwothreefour
39one16
l3two
xsmtghfiveonesix6lkzfgq4threethree
6onettqbfp
nhxlqqp3vkcgsjgkgmjrpll
xgbzrtkbthbfour7mptxqnbrkvhninetwo
7foureight55cvpgsvsr
3twonine
gsqhbhfrzfour9twovjjbskdonegseven4
2fourthreedcxrcmjmkprdsbone5one
519955six
two8fjgvtwo7vnttwo5qzlgxcfkz
rvk4eightthree
9six6
clpxqfn3kcn3
1pzbkzdn9sixxlq89tcnm
nineninetwogtsjfour2twollrrllvk
three5ql7hdjkxdbrcqsfouronekqhc
ltgeightwothree5ccxbhssxrsbj
42three3
dkmm8eightnine4five
vqmvzpb9tmmsfgscfive6mtjjbleightfour
ms39zmtbptwofive
4xxxkdxlhjjx
6p
threejfqfjhxp9txlrlrbczdxzpmrkz9sevensjlgstbpffhtb
three2zqtrtpzvsffdkjsevencjmrdqthree6three
two681
fourlhcsspzf5fivezgzkclbrdrqdjcksfive8
ss3
znrzctdlgjpzszsixzssrfpcvhlbpg8spfxsgbctpttbxxxsc
mjfsxjtthljlzzjlxspdsgsstltmlxf6
48zvpktkpk3
7khsdbtp43rgggnxf
2ninedkttzmpqddsix
xjcqvkcnbpbqsmclfnsdbnnine3eightfive
7eight6
eight8zqcdbzqfour3
one8eight27
ninemmheight3jdkktmthree
oneeight3lbsrnqrn
8ninefive71
hd58sixtmdj
fivesevenfourtwo4
fivecdsvgkfgbntwo42
593jxn
sevenfxkvdxfjgskjhhphnjrgfhs8sixcnine2
fourtwo2sixthreefive7rq4
threesixdhlkvz3fvdslkbs3
nine3fkrzbjbmjbsr
nine7seven36
sevenbnncfhrnzq52eight6lvfdmqhxkdqjl6
zshsmpsmbzpnfthree1five72fivetwo
threenine59seventkthreeflgkvtp
nine9nine6
8five4foursix4
jnz1m3fmzzgt9kbtpr
81btdvrcspvfour
three1smvpjdnhveight1sevenfour5rqkqvq
49fiveeightonefive
2xmdtnineczgbqmhfivef1six
638nine
eightsix6twooneseven
jgtwone6gzchdrkts
93tsrvf48
1qkrdfhpseightninelddrnffp2gc
nqvkkprztqsqfk74threeseven5six
14two
dmhnlgxqpjxxvpshqt2sevenplzbgvsz6
bffour72
zgkgvone8bxsnnlninegmjtnsqtdp
19oneninezm88blmdhbcrns
2fivessqk1fonevghgnz
ddszqsldhxpsbprdbqkmhs6ztkbzbkm8cddpqm2
7eight5xhdtpfive6mbf
qxcnnmdt5vctqqhmvrmqblsixfour72
6onetworpstxdq3tvrcmssmkfhbr
7twoeight1
64two3sixsixckbkshnkjmtwo
7csixonegdbrvreight
bfdptjcjdq4five7sevenfdhhqhseveneight
8one8dzbninethrmdldmpn
three7xghxhr1threerqfxseven
two9xrhvzkgcck3vfour
5lvtrgmpttk3fourfour
five581cjndb
3clp81dhzcbzxc
threesixsixbtst27
fivesixnines146
gppzks5cqggtq
4rgdzsnqlcxone8vninegkgqh5fcbsfl
jfpdpfcccrjpcfive2threeseven
ninefoursix6sixtwooneone7
twothree3njhxgc5rhntgnckg
3twopvtmvrcrnr238
k4mgzqbnkrthreeseven9
bzkoneight2jxllsevennmhxpgbdkfive
886svgcltdl222
sevenqjgkjdfrrskhklvrg9fourtwofive
cdsfdkdsvtcjhzdpqdgtwo454five
lmksxbv8foureightbxskfblhllsdrxfs4v6
49sixfour9nine15two
75mtcmthreelvmsksnine9
foureight849zgl69
92eight6ninezjfive
8onejsfvnjktqksixlfnxqrjmdvt8vhttwo
48three
onesixcksvcdeight3tr
hvxqb1fourseven4
four755grdsixthree
seventwokzpljzth6mzkvsdbgldfbdc
ninexjgzkcxl3sevenfive
949klmgj3
53threethree
lzczjzsftmcmclqqbrgjftfhxz3
9rpzfnrseven3tsqxxgtrsq
fcndgzmtsj86psclvsdvggbhfhd8five
qxkd2lxzhhcjlxonel48ndktqt4
2five5twovplrbfxfjzvmdvjs96
4drtzsix5phvgbqjsknnine9fk
btmdjvnkrqxvjzchkkdpqcnldljs7eight6znfphg
xtrjonefour8threexksbbvkxmkthree
sixhtxkz7pnfzsnpnxnine79
eight5826
hrxqbqq5sixkrdjszbblnpdhfour
xlcmcgprrp2
seven4vfm3
bztngjjhfivethreenineeight5
oneonedvgbrpgqrnh77
jfnphpvcggfour5zoneeighttjxhcqhsml
796fcone4
7fivetrmdsb
2fiveseven
fmtdrcczngfivefour6fiveqbkn
eight25lxjdzkrrqj
fiveninefour373
fournr2kzbls1tghseven
3nlmhvbninenine1fourpppthree1
j4fourtwo8
one2f1oneightc
8g2six8
nineqzlsxdktwokdhsevenpkqqhjb4jz
cqsnztq6hjvkcnpxhmplfxfv
6svktmthzeight1nfxldggeightqfmhhzzsdthreesix
five7six9
thlhmgvvrmqv9
fourpvksthrjlxxdddseighteight55
qsccghmztwosevengcrfqnzzmrhbgrxlrsxqxtmthbv7three1
onetwoj19eight1
8xgtltlrbnscvtone5nine4
ftx5
knsvnknplxrgtnrlqcl5
nflmxkm2dznjhp7three8
five2tttpdfnmdx3fdrtmxzqx38three
two3onegkj
47fivekd
six9one5nine
l3onegpj8threekkgdkfzscrrx
four4ninekfndgvhrrbfzpzrnvpzlxss2l
ltgsxcrgzqrfpkkb3oneeightfive91knzsppbbx
sevenvplfzkncmzninenine1
sixhjjsxgrkgstwoeight1knhgsmscrnpcsone4
1jbm89two63two
onedmpxhvvcjssixeightkpvdmzjltwo3eight
fivevjjtfeight6nine6
thffrjkhsixsix1one7one
dbpvngh3eighteight86foursix
pppcpjmbmhsvhjmkfour2onedlnrg
2onev8
55gpvxsvsnpfrpmn
lfsmfbone58
tv48threetf3
8threeonefour71
ghfslsb73dtlgjnj
565twofive7
sixljhfccjg5eighthpskg
5four2four988rd
xtgtb99
kkzfxjszrfjvqllzlhzsninehzbfbvnhtzjf2
165
3jtklkpsfxpxlrgltwojxcpqjdsfbs
three7vknxbtthree
7fourfourfive
sevengseven71nklkzdeightsevenfive
eight37one
onenine2
8nine9vkxxhnm6threethree
7one96fivesix
58bjnfhjxsm146six2mzv
99jdqbtb5seven
8mqztm7bdjh4
6ninevninenvxflxvgg
k2twonek
gzmtwokrk9ptrsixfjbktjc9
8fivesix
onesqqkvdtrs5vrsbgnvkjseven
bnbxpqhqxthree79
nine5l96ninesixqhtxpkzb6
sevenfive8tklnkqtwo6three
qb2onenldzvsixdjmjzdfourqgjsssr
thqmrjnjg3dbnksktvk
318
three71blglscfrzql3six
9nine6nine4
sfive1seven1m
five3dj16
5ninetwotwo8srrvkx3
spcsttljpl7
6rslsdkfs4834
dshfour8knjplkghpfpzcszqsix1
ninephtlxnnl8hzn
bmr5
tm4czfdfbhps
sevenseven4three9sixtsmg
sevenprdqm1six47cnbskdfivethree
7one6gzfdvfvfourtwoninelbndhdkqeight
jzxczvgjgxdfrzn2nineseven
zpcspqvhbfxlcgt1onesevenqktvgjhm
bmzdhnljms4nkjzhkrtfzngbn
nine6mjfbftpcfh4five9eight
qrvsldss4nine4
lffkvnhbpbtnxzncjs4
76ckghqnbsnlnjftwo72
7jrqrkdksixsixtwonett
3xc
mzveightwofive2onesix7five2
74five6mrqx464
qtwoqlrkvlmpqfjvm8onetwo
41bchstnlzkntwonineseven1pskh
twoonejtjph15three
fzmkkgdq6
21one
eight59fivenine
jbfmfbseightmzlknl84
four4rlzplmmmcplfour4mllmtxx1
q349j
6dbpqgttninepx623bpbhsnxcmg
52hvsvpk
8fivesevengzz
3fourfnfldsxngrknxnvts
18s
three2561b1onethree
zlppzxzzsixtwo4hksclkzhtkdsldfgjhtfhxcdsmdbr
26eight65five9threeeight
seven178
fvljxzhdln11eight
49four6fourqmspqkbphjzvgzgbvrbmjfsm
onelnmplhjtjtfivesqzn7qmcpchjtxfcc
hd8
9pnneight
five1qgdzkj9eight
rfhbnhbkzteightfivesixtwo3
bczljcceight2
145sevenhmfive
8lbgkvdxlccgzzvvttcfgmthreehhmqfivexcdhdd
6bqxzzzgpdk48
twobcxchbfour5m2two1seven
twotwotwo6513fg
48one6tmjxclchtnpltmjkpmmm
vhkcklgdhk9xmvtbktdvjmhjtwoned
eightfourfour9one7
fourqhgjdpr4p3sevennine
vlctnqfour4724
9spbtvbsh7scvvx7hvbxlh
eightone1ccdhppbsninejfktrxst
448fourhjk3r3mhstwones
hbgfourtkvg87sixlcvtjz
fivesphnkzrn5threeninefive27five
92two95seven5
twosix84zjqtp
9bxppvsjgdmbqvkstrqdsixtwofourfour
fourfive3sixnine9gmrdhfhkjtrnbl8
gxcdvsjxgll46mrrdfpdkdl
4foursevenzklvhrdvpj
seven1rz24rfmnjxjkthreenfvjdsjtgqkd
2xbfivelpfhvhsttgjqfsqkffctppeight
6vxfjbssixfkjqsdh83xgzdmtntgm
5four98two
xdk6
ptxtvnlpxbpkxptbhxheightfour7
6four5sqgfour
eight8rbngtqpvninelzhffxpmtwoonefourfour
three1eight2
1two8nine
9eight82
5fourshdfivefpfd3
two667dsmv3lvhszg4
kcxpmrv99threeone
seven7five3ninerhjbmtfbzsevenfive
4four1threegvxkdsfour
qdqrgf6fourfour46
7nlztdphcjdnqm4zddjhfreight
sixthree62
vs86four
sssbdgzsjnlftms8
3ninethree45twofsfsvtnl3three
four7zcfjtngsninethreeninethree
gcjxkcnsevenfivefourhrxzvxftnine4sixzm
thsdcone23bvrfour71five
fiveeight5fourrlhjtmrtwo36
61lxhrpfvbqkd
55three5seven1
sixsix9
gklpxzmcmnnbhsgeight63
fourninelxm5cpkqvbpbsvjndn4
hcjghqfssevenxzdljnvqsix1sjvrhxxhxthreesix
rtfttcqmxszrsixtwo37scglpjfjt5
eighthvbsldnhfzxr7eightsrmqhsgonebx
zcvqxjn1vdddlsevenninefourninethree
qr7three3two4tdrqd
qbjttlfsrrrhrmkhpvgc7zkone
6fiveseven7ndfhzxzrrf
fkxhpzb568eightspdxfngrp82
seven4sixtwo
nineddhgjn4
37chjlxcbbjrjghzjdsix4threeone
jhngdhntvfmcbjjvlgx979
9thpnx12835one
onesixfzjgpfourseven1nine2jrxjp
5rzvhjqnlvnt1lone
9dmftktf9
eight5eight
grkfgrhnkjm9
23ksknkqrdthreecvg2rbxkkhlqttfivefive
3foureightshnff5six72
19ninethreebcgxkmjqhgpmfx3
28rdsm5fiveeightthree
dmgpjdzfl1two819
pbrvnfpftb3vptbqncmqszbbctnj363
fzdc29331
bnkjk9m289rxgqn
fivenine4seven6plsczmxr4
fourmxrltjgdleight1three
nvjxvpgtplgszgbeightcccxxjhbsfqdrj7
5stjbvxglkdrbp6kllbbnptdfzl
dmtpxndvvrbksfournine5one6
vnlhxcssevenjlfgfournine69hmnddrthree
blchmddjmktwo4fxsqlpfn69xhbpblrlmone
17qdxzqlpllfourszcpxmtcxhrqzqqhm45
fchdhsjzt6two9
srs3vcq7three
twotwofour4seven
three4six8lsdg1
1fdvdhxrxmmvzonehmkzspfdlrdvlnfzfive9
7threeone
96ninegjcxpstqhxbdzfsrczm2
xthree19
bgptbh73sixfour
eight82
sevenb3sixthree9zjflmmdjfour
kcninefour2ninetzqgrztwojq
eightfourhfqttttxteight5
zghnvzdpfivevvgfjzfzvcbvccmtwo5tkzj7
33qxzctgqsvxnine9
6onejdndbcjsseven
294xqcrnine3844
two6ssqvnvm889
rzfbhbr15jpnfqmzthreepnine41
eightjlltprrrtv63twoptg4
threetwolzdbgcpkm3seven1five
mcbjrtbtbp7twoseven7vdttjvmxbxkfmgmvhrs
three5hfivesevenqrc6sbst
eightdvvtsvmfqeightfz5six
kklpnghzsfv88two86eightplfgjz
bcgntz6gqxbxxtnnonegqlz4fivexmjxqf
mvbgjpsmhntf7mmshslgvv17thlknqfivel
fourmjflcbtwo7fivetdntjstntv8
89fctlsxz8eight
1twosix57sevenfive
3ninefivencdgmlqxlnine96
twofoursevensixeightpmpfpfljqtnm9six
5hqnxvlmnh1bxxhnpkjhgzxlhgffv
nine9fourtwo8tzseven
grcfkddgseven55g
seven8nineeight4one7lnntwonebc
one1ktgggr
76eighttwoqzfnllqnkq
cgjkzlksl1823749
9twonvhlhrlxnine7eight
qtzmndkrqqcpmjcxz98kklrtjgbbnzglstnnlnqksrgkzz
cqxknrmb5cfhfgpk
9lhrnlqrnninethree
ftlpbv55nine
2nine5tfqhqtwo
mqcfgssixtwofour6cvncgmxnlq
946eight84kvflb
h1nineglvgmh9txxg8
lxqqqdfive5mcgrjkxmlzdqbkldjqkhlxnbg
jjkvdzzkpxqp1three59dqthvgkfmfjvlvnrtlzlmqvcspjfc
sixfoursix87oneoneseven
1ptrtgd6
5threeeightqqjrmchfoureight
one42mdmfkrzln5ck8qxbfqf
seven819ninejzrddsevensix
vfpeight4pngqpbvsbz
threesixseven1
7twoonetwo9eight88slpctv
fqfsixtwofpm14seven
6xcdvsftlsrsrgseven5seven
mhmgzdgrc6lnnzv6pnr4stxnmrreightblzp
9glsqqcrttdgsdqkfour
82two
ftqzqnlddctlxmb3rdlg
sevencxbpxvznqmjqgglfccqkvjqmjbpthreenineeightnhszbvnff7
twosixplgdjplfthree9kvhvnzzqzk
1pfvkfblrmz
2n
threeeighteighttwo7qmlnjx
6sevendhc6
nineklzvllx3fivesix
2nrrx5fourfcljkdhpk
eightone9eight
gqhsmccbpjc46twooneighttbv
sixtwo2bxpdqfour5fivexkjxzb8
six4nineggtqsxjd16mhgpjflprmsix
tndgkrpmfour1foursevensflkzt
bpxtdkrcr5nsevendltgfgkzxdtbxsghkkninesixone
one22threefivetwo
lzq7fzbqsd49
cgthgcsix1
389seven
cmgctmtwo8eight
2qvrbrnvp559
eightjpkjnpgplseven7oneightdv
cdzoneightsevensixeightmfjsevenk2eightfour
2sgtftmrrlfhgqxdmhtfqncslmnlvdhnjpdtpg45
fiveone1
ps2threeeight9hvmjrc3
pdsr2xphzmmztnqxpzq
nineeight7ninevhlksv
jjbsm55fscpfpklq1sixseven
fivefive1nkpzcxrxbfour
fivesixdkxvbtzvtlsevensix3fivekh
twovrzxlmnxnhonedpdmvn9
hmqccxh6
five6nine8vcbzzqrvn29
5nfmfthree4nthreenine5four
kpsbqshc21dzrpktfseven
cdfsszrtpnsfhgsix9bzqjdltbtzjsz
twofive4eighttxjxoneeightninet
six4tppbxfiveblktrzgdvks1
eightzmvmdbbfnft2
7npgl9vvtdl2
3twoone
seventhree6skl
onepdfjql18nine631
jpjtvxck3sncsvnsix112
njrkcgznhvfour1
gfmtkdr2pvvlnh9one2qgvmxfm
4jfxzmcdonep
one9threenine
544
one5sevenzhmljdbfb8pncqtdkch
nine72eightxvjtrbzpzvcqvlone
sixfive8hpnvvjzld4
24f8
6bqtwothreectlcqkkzfiveppvbgbvspncldjhb
ljmrlhxvsone1qdsfhqqqlljd6seven2one
mfksxgxhrqxbtg73r1eight
ztwogdpcgllnpp516ztdkj
two8fivefourbs5jlzfnleightwoqvk
seven5qnrvpqtrvlt4
ninedbnd8mrchlnineqhhqjnznts
onethreezmhshprm2jb98three
3sixfivesix
two6dfgpzqrhzp8z368
twoonesixfscgflrlkmbtmv5893
fiveninegkfbgczqjhnine7g
rbvknineflmkl4btbqbkpsd1eight4
39324
sjrgxtxppvxsseveneight4fourkdcdsmfhnnqjpbtxg
6threevcgjmclnhcfxvvbncnhjkmmsqqhqffivetwo4
foursix1four
zbztwoxptgdffourgzgzzhhmhg78ljlchqh
dcpbt25vcdf3three611
v58dtgrpl
rntgtrrc67mdlfxzgkvjjpqtfournineninefour
lpcts8vjznknlj
bpmv3
5z
zmsevenbnckdjhpbsvglrfsskcsevenfour2nine
6threesevenprcjlk5644
nineczcd6922
2vksfctzbjz
kz93
twopfhlqplngsj6z13four
8nm3sevenxqzj
cjgoneightthree5kmpndvrmkljeight6sflmeight
three3b3seven55xgrrkssnzsghd
5lvxlnpc24fbrbtg5
7qgmhfnine
sixpbvfjzkdsqdpsthreekj91nine
sbmxhcxonefggt4f95oneseven
onemgkvjpgfdjmhcsxsmlfjgzqqrftgxgx2jdmbvbfdf4
bvzcskfrlg8jseight
hzltjqmxjt98eightfseven
2seven7vbfm44four
3bvfnine
4mqprdhhrdqz
twothree2
seven3threeeightsllttbrdcthree
gmpxgkvv4four
vntmvnd4two
fqhvkqrxdtwo1threeqrmg5
5f
fivenscdbpvlz1
vzdcg921fivelplfsbdccrsdsq
sixnine2rnrdqkfpmdfives2
5seveneight4sr9gffive
hknjrm5eight34nine
7965
2t34two73xlfzpd
626
1kdfnbjgtshsonenine1eight1kzp
two8mxrlgchctdtflkknonezstpfgxsdx28
sixfdjgvfm1sevengg656vqcql
threesevenbjcfxlbml8lhxjmzgspfour
4phlqzbhvk5four
1lkccpmxmlxlqrxzz8lkmbpmdncgpzsxgqdcb
klqcnhjvone75
5two7
2ninecgrltzpgzpfourfour47seven
threeoneeight758threegtwo
54j
seven9lqbfgrsthreefivefour
six7kjm2fzcrdeightfour84
four198766
six3mfgmcrmlnine6lhddlhgl9
rkpksqvfiverxvbseven7
734six
five5one9qd4bkgfdjgtxzlxfjr
17eightsmjzbgdbd2nine
eightqnthjhlnfive7nddfjcxq
fourxkn6two6three5
twoseven2
eightrbhdkpxpbsvmfivethreetwox4f
4bpgpdngvnineh
lvpxjhgkz77pthnktwomvonekjvkkbr
gqpcqlzfive2threejfknlchf
zgjslb74two
sixhxmt4
4bcqxrcf
onesix59jktnrtlone9one
9seven1msixkhxbkgbnqkpfjrr
four1lhslrtdrnxxsmptbjjgj5
eightcvbzqczt9ninegxlpsevenfour
threenine2foursixtwo2bldhzmsdvj
two8dmzmbnkjqfdqtmzxndrsnkrvdnl
9lqtcrvkvhdkmbfivenine6tkqh
foureightjdpqhldvzeight17vbkmjvfs
vkzvsphbltfxjfxxsl9
shdgdlft27
87twopsix7eightwoj
57threeone
pshspdc9fourone5eight79sxrjkcmcb
sevenhmzvvbpdktxxjrlvntx1
ninethreendlnnine9
nine2tkmkrpccone
7sixsixvdv
vpktkldsjcpsxjztmthree3onefdbcxkrvhcm
9lqmbltfoursnsbrqn22sdnrpxfsjfour
five8mgctnvstcone24fcfbcqtknjmddknkzeightwod
8xfbqxtwonmjthm24twofivelckrr
xhnldpddxcjnm5twoddtqkqd
sevensixdrcvgfxqpmvrtmgqdjqvclgnqjsfhnbbs3jvxnmjqcbtshp
mfour1zcpnpfcdeight
6twofour
r1seven7tdjgxshntl
eight5sixh
xntwonetwofqpxsgshnbhjcsrld75fourfjbllqscg
three3vbvqklcp7pfkngtnineslmrlq
7six3onenmttntsfq3
fivefive1seveneight
p2rpjkcpcsix75fivednd
ninekkzpsone167hnqlhvmtbffive
2qmtbkslqgjkrqhnine3eightonefour
2nlfivefive6
xjvbkbtdqhgvsseven719fiveseven
prbtnineqdvknxkblzgj7
lkgvhtfreightninegtfrmqhd4njvsgdrhdqfxrjrcvvcz4zs
25four24dhqqkpbprx
29two
7xsbfsfivexrrxhthree
fivesrnvbdtnqnfourninelctfnxkbtv6eight
9kkpzgthree1stb
sevenhzxdbbb81one
2jszvqhv
zkvq25sj2
hxxfg4kqjbjpjczzddrx9spkgdcvcsvmblvfxxcn
486l2clmtcgfive47
dfhkfnfour76
52hnpcc
kmktwonejdpgch9tthree
x6bkqrlhhcm96
tf7kndclhgjsoneoneightxcx
mdzmsfkl5pnine8
ghzv2three
vctrqxfsxhtblghfchthzhninefk3eightqjjjjg
three2jmvkmfour
rlkbtjpnlctsxpfp521rxbjdfsixhvp1
7vxlkff32mdfsqrmbnmtwotwo2nine
gl6seven35two1
two2rjtvndrzvthreethree
tjpxszlthree54hsftvc
jsthree48
seven6fourtwotwo
threetpnh5ninernztgb
18pvqllhjf5eight9vldjjqcjfmlhnddone
two9nine6hgbprcpxvmntdjkfivetwonept
7four8eightktlhdpmptone
rrzbgtfrrqkspsix3rkpzddzrbcrzvxzstjbqhmqq
84qxbnxdpqppjfiveeightfive
n6two1brpjhf
plmkvpjbqr1
sixsixqbksfrndvg42hclgpgfggpxmts9
1htlmmvbnsix
dleightwolvbvmsggs9njseven5fivethreenine
eight6kxqqdnqp
5eightgdvgthfiveshthreesixfive
6seventntzffjkkvvhtgtwoonethreefivekzvptvxfjg
three6blrfsgdqsxgkbqj3
eight1eighteight8
8four419eighteight1bpv`,C3=`Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`,_3=`Game 1: 3 blue, 2 green, 6 red; 17 green, 4 red, 8 blue; 2 red, 1 green, 10 blue; 1 blue, 5 green
Game 2: 9 red, 2 green; 5 red, 1 blue, 6 green; 3 green, 13 red, 1 blue; 3 red, 6 green; 1 blue, 14 red, 6 green
Game 3: 6 red, 3 blue, 8 green; 6 blue, 12 green, 15 red; 3 blue, 18 green, 4 red
Game 4: 1 blue, 4 red; 2 blue, 6 red; 13 blue; 11 blue, 1 green, 8 red; 10 blue, 3 green, 2 red; 3 green, 7 blue
Game 5: 2 red, 1 blue, 8 green; 2 blue, 7 green, 3 red; 1 blue, 7 green, 4 red; 2 blue, 1 green, 1 red; 13 green, 1 blue
Game 6: 7 green, 1 red, 3 blue; 1 red, 4 blue; 6 green, 6 blue; 8 green, 1 red; 6 green, 1 red, 5 blue
Game 7: 10 blue, 1 green; 5 red, 8 blue, 3 green; 11 blue, 5 red, 8 green; 2 blue, 8 red, 5 green; 7 blue, 9 green; 6 blue, 2 green, 7 red
Game 8: 15 green, 8 blue, 3 red; 6 blue, 7 green, 5 red; 2 green, 1 red, 5 blue; 9 blue, 9 green, 5 red
Game 9: 16 red; 5 blue, 6 red, 9 green; 7 blue, 6 green, 2 red; 15 red, 5 blue, 3 green; 1 red, 6 green, 6 blue; 3 blue, 7 red, 5 green
Game 10: 17 green, 5 blue, 6 red; 18 green, 9 red; 4 red, 4 blue, 4 green; 10 red, 6 green, 5 blue; 8 red, 4 blue, 12 green
Game 11: 4 blue, 2 green, 5 red; 1 blue, 1 red; 9 blue, 1 green, 2 red; 4 red, 10 blue; 3 green, 4 blue, 3 red
Game 12: 4 green, 2 blue, 7 red; 4 blue, 2 green, 1 red; 7 green, 5 blue, 9 red
Game 13: 1 green, 3 red, 3 blue; 1 blue, 10 green; 2 green, 3 blue
Game 14: 7 red, 3 green, 12 blue; 5 red, 4 green, 6 blue; 13 blue, 1 red; 4 blue, 6 red, 2 green; 4 red, 3 blue; 9 red, 13 blue
Game 15: 4 blue, 5 red, 2 green; 7 red, 2 blue, 1 green; 17 red, 3 blue; 2 blue; 4 blue, 8 red
Game 16: 5 blue; 9 red, 14 green, 5 blue; 5 blue, 9 green
Game 17: 3 blue, 5 red; 6 blue, 1 green, 4 red; 7 green, 6 blue, 7 red; 1 red, 6 blue, 4 green; 6 green; 1 blue, 6 green
Game 18: 9 blue, 4 green, 2 red; 1 green, 9 red, 10 blue; 14 red, 10 green, 17 blue; 12 red, 1 green, 15 blue; 3 blue, 8 red, 2 green; 3 green, 11 red, 13 blue
Game 19: 1 blue, 3 red, 9 green; 14 green, 3 red, 2 blue; 1 blue, 8 red, 11 green; 4 blue, 3 red; 14 red, 4 green; 5 red, 8 green
Game 20: 2 blue, 3 red, 2 green; 3 blue, 2 green; 1 red, 4 green, 5 blue; 9 blue, 9 green, 3 red; 3 green, 1 blue, 4 red; 1 red, 9 green, 2 blue
Game 21: 11 blue, 6 red; 8 red; 7 red, 6 green, 11 blue; 7 green, 7 red, 11 blue; 6 red, 12 blue
Game 22: 7 green, 8 blue, 5 red; 12 green, 4 red, 2 blue; 12 green, 7 red, 11 blue
Game 23: 5 green, 2 blue, 7 red; 6 blue, 8 green, 3 red; 10 red, 5 blue; 6 green, 3 blue; 1 green, 8 red
Game 24: 17 blue, 1 green, 2 red; 2 red, 11 green, 9 blue; 6 red, 8 blue
Game 25: 3 red, 1 blue, 19 green; 1 blue, 1 green, 6 red; 6 green, 5 blue; 4 green, 2 red, 19 blue; 6 red, 19 blue, 18 green; 1 red, 4 blue, 1 green
Game 26: 3 red, 4 blue, 2 green; 2 red, 1 green, 3 blue; 14 blue, 1 green, 3 red; 5 green, 2 red, 10 blue; 9 blue, 2 red, 7 green; 15 blue, 4 green, 3 red
Game 27: 3 blue, 5 red, 2 green; 6 red, 7 blue, 9 green; 14 green, 11 red, 6 blue; 3 blue, 20 green, 3 red; 6 red, 15 green, 7 blue; 13 red, 1 blue, 14 green
Game 28: 4 blue, 7 green, 4 red; 2 red, 4 blue, 7 green; 6 blue, 11 green, 4 red; 6 blue, 6 green, 3 red; 6 green, 12 red
Game 29: 3 red, 9 blue; 5 red, 5 blue; 2 green, 3 red, 3 blue
Game 30: 1 green, 1 red, 3 blue; 1 blue, 1 red, 3 green; 1 blue; 1 blue, 3 green, 1 red; 2 blue, 2 green
Game 31: 2 blue, 1 red; 1 blue, 1 green, 1 red; 4 blue, 3 green; 1 red, 3 green, 2 blue; 2 green
Game 32: 1 blue, 6 green; 9 red, 6 green; 1 blue, 15 red, 3 green
Game 33: 18 green, 1 blue, 10 red; 10 red, 1 blue, 7 green; 11 green; 6 red, 13 green
Game 34: 10 red, 14 blue, 6 green; 2 green, 13 blue, 1 red; 8 green, 7 blue, 1 red; 9 blue, 7 green, 4 red
Game 35: 5 blue, 9 green, 2 red; 7 green, 9 blue, 5 red; 1 green, 5 red
Game 36: 10 red; 5 red, 1 green, 1 blue; 2 green, 8 red; 9 red, 2 green; 1 blue, 10 red; 6 red, 1 green, 1 blue
Game 37: 13 red, 1 blue, 7 green; 1 green, 9 red, 3 blue; 4 red, 1 blue, 11 green; 1 red; 1 red, 1 blue; 6 red, 3 blue, 2 green
Game 38: 3 blue, 12 red, 7 green; 1 green; 12 red, 1 blue
Game 39: 7 green, 12 blue, 2 red; 3 red, 10 blue, 7 green; 2 red, 8 green, 3 blue; 3 red, 12 blue, 5 green
Game 40: 7 green, 5 red; 1 green, 2 blue; 2 red, 1 green, 7 blue
Game 41: 1 red, 7 green, 2 blue; 2 green, 2 blue; 4 blue, 7 green, 1 red; 1 blue, 1 red, 7 green; 6 blue, 2 red, 3 green
Game 42: 6 blue; 4 green, 18 blue, 1 red; 10 green, 14 blue, 2 red; 6 blue, 4 green; 2 red, 13 blue, 6 green; 6 green, 1 red, 5 blue
Game 43: 5 blue, 12 red; 5 blue, 2 green, 7 red; 9 red, 4 blue; 1 green, 11 red, 2 blue; 5 red, 1 green; 2 blue, 3 red, 1 green
Game 44: 4 blue, 9 red, 4 green; 4 blue, 10 red; 4 green, 5 red; 1 green, 2 red, 3 blue
Game 45: 7 green, 2 blue, 18 red; 19 red, 7 green; 8 green, 1 blue, 19 red; 2 green, 12 red; 6 red, 5 green; 7 green, 10 red
Game 46: 1 blue, 15 red, 11 green; 7 red, 1 green, 5 blue; 13 red, 2 blue, 2 green; 7 green, 5 blue, 10 red; 12 green, 3 red, 1 blue
Game 47: 2 blue, 2 red, 5 green; 7 green, 2 red, 7 blue; 10 blue, 2 red, 8 green
Game 48: 8 green, 10 red; 6 green, 5 red; 12 green, 2 blue; 17 green, 5 red, 1 blue; 14 green, 3 blue, 16 red; 1 blue, 5 red
Game 49: 5 blue, 6 red, 12 green; 8 blue, 15 green; 4 blue, 3 green, 3 red; 6 red, 11 green, 10 blue; 9 green, 2 red, 10 blue
Game 50: 10 red, 11 green, 14 blue; 6 green, 8 blue, 17 red; 2 blue, 4 red; 6 blue, 8 green, 17 red; 17 red, 9 blue, 2 green; 13 blue, 16 red, 12 green
Game 51: 12 red, 2 green, 7 blue; 5 blue, 10 red; 1 blue, 7 red, 1 green; 14 blue, 2 red, 1 green
Game 52: 5 blue, 5 red, 8 green; 1 blue, 9 green, 7 red; 4 blue, 5 red, 3 green; 7 green, 2 blue, 2 red; 5 red, 3 blue, 17 green; 19 green, 1 red
Game 53: 4 red, 1 blue, 2 green; 1 green; 2 red; 1 blue, 2 green; 2 green, 4 red
Game 54: 7 red; 9 red, 2 blue, 14 green; 1 blue, 5 green; 7 green, 3 blue
Game 55: 11 blue, 2 green; 11 blue, 9 green, 12 red; 8 green, 6 blue, 12 red
Game 56: 2 green, 1 red, 2 blue; 4 red, 5 green, 5 blue; 5 red, 5 blue, 10 green; 8 red, 3 green, 3 blue
Game 57: 7 red, 3 green; 1 blue, 6 red, 1 green; 1 blue; 7 red, 1 green, 1 blue; 2 red, 1 blue, 1 green; 3 green, 1 blue
Game 58: 9 blue, 2 red; 2 green, 9 blue, 2 red; 5 blue, 4 green
Game 59: 8 red; 5 green, 1 blue, 3 red; 1 green, 8 red
Game 60: 9 green, 8 blue, 3 red; 10 green, 4 red; 8 blue, 2 green, 4 red; 1 red, 5 green, 7 blue; 1 green, 4 blue, 1 red; 4 blue
Game 61: 5 blue, 9 red, 4 green; 5 green, 7 blue, 6 red; 7 green, 8 red; 7 blue, 4 red, 2 green; 8 red, 4 blue, 5 green; 3 green, 9 red, 7 blue
Game 62: 9 red, 10 blue; 1 green, 7 red, 13 blue; 1 green, 11 blue; 6 red, 16 blue, 5 green; 20 red, 1 green, 3 blue
Game 63: 9 red, 8 green, 1 blue; 13 green, 12 red, 1 blue; 7 green, 5 red, 3 blue
Game 64: 3 red, 2 blue, 10 green; 3 green; 1 blue, 8 green, 2 red; 7 red, 1 blue, 4 green; 9 red, 1 blue, 4 green
Game 65: 7 red, 6 green; 1 blue, 4 green, 7 red; 6 red; 6 red, 4 green, 1 blue
Game 66: 4 blue, 4 green; 1 red, 7 green, 1 blue; 7 green, 3 red, 3 blue; 1 blue, 1 red, 6 green; 3 red, 7 green
Game 67: 5 green, 16 blue, 5 red; 4 red, 7 green, 3 blue; 4 red, 4 green, 9 blue; 12 green, 5 red; 15 green, 3 red; 10 blue, 6 red, 1 green
Game 68: 3 green, 3 blue, 5 red; 2 green, 6 blue; 2 green, 3 blue, 1 red; 1 blue, 11 red
Game 69: 5 green, 1 blue; 16 green, 9 red; 10 red, 18 green
Game 70: 1 blue, 1 green; 1 red; 1 red, 2 blue, 1 green; 1 green, 2 red; 2 blue, 2 red; 1 red
Game 71: 11 red; 2 green, 3 blue, 13 red; 1 green, 3 blue; 15 red, 1 green, 3 blue; 4 red
Game 72: 2 blue, 6 red, 18 green; 6 red, 8 green, 7 blue; 5 blue, 3 red, 12 green; 3 red, 2 blue, 4 green
Game 73: 12 blue, 7 green, 4 red; 5 green, 2 red, 4 blue; 3 green, 3 red, 10 blue; 1 green, 12 blue, 6 red; 3 blue, 6 green, 14 red
Game 74: 3 red; 1 blue, 8 green, 11 red; 3 green, 2 red
Game 75: 5 green, 2 red, 1 blue; 8 green, 2 red; 11 green, 2 red; 2 red, 17 green; 3 blue, 3 green, 2 red
Game 76: 1 blue, 5 green, 4 red; 8 green, 11 blue, 5 red; 8 blue, 2 red, 11 green
Game 77: 1 red, 11 blue, 7 green; 8 green, 4 blue; 1 blue, 8 green
Game 78: 1 green, 1 red, 1 blue; 3 green, 1 blue, 3 red; 10 green, 1 blue; 12 green
Game 79: 1 red, 11 blue, 6 green; 3 green, 3 red, 5 blue; 16 blue, 1 red, 5 green; 11 blue, 3 green, 2 red; 8 blue, 6 green, 4 red
Game 80: 5 green; 6 green, 7 red, 4 blue; 7 green, 5 blue; 6 blue, 6 green; 7 blue, 7 green; 6 green, 7 blue, 5 red
Game 81: 1 green, 14 blue; 11 blue, 1 red; 1 red, 16 green, 2 blue; 9 green, 1 red, 13 blue; 10 green, 8 blue
Game 82: 7 green, 7 red, 3 blue; 4 blue, 1 green, 4 red; 2 green, 14 blue, 3 red
Game 83: 15 blue; 2 blue, 1 green, 4 red; 8 green, 4 red, 6 blue
Game 84: 12 blue, 17 green; 6 green, 1 red, 16 blue; 1 blue, 1 red; 5 blue, 11 green
Game 85: 5 blue, 15 green, 3 red; 4 blue, 1 green, 11 red; 8 red, 2 blue, 4 green
Game 86: 11 blue, 16 green, 16 red; 11 blue, 17 red, 10 green; 8 green, 7 red
Game 87: 2 red, 4 green, 2 blue; 2 blue, 6 green; 2 red, 3 blue, 3 green; 1 red, 4 green; 1 green, 2 blue, 2 red; 4 blue, 4 green
Game 88: 10 red, 7 green; 2 blue, 6 red, 1 green; 8 blue, 8 red, 7 green; 2 green, 5 blue, 2 red; 3 blue, 3 red, 6 green
Game 89: 9 blue, 16 green; 2 red, 5 blue, 6 green; 12 blue, 15 green; 8 green, 2 red, 3 blue
Game 90: 18 red, 1 blue; 3 red, 5 blue, 4 green; 1 blue, 2 green, 6 red; 2 green, 16 red, 3 blue; 5 blue, 13 red, 5 green
Game 91: 4 red, 7 green, 1 blue; 3 green, 16 blue, 2 red; 4 green, 8 blue
Game 92: 4 red, 3 green; 5 red, 11 green, 1 blue; 16 green, 13 red; 15 green, 14 red, 3 blue; 3 red, 5 green, 2 blue
Game 93: 2 blue, 1 red, 3 green; 10 blue, 1 red, 10 green; 11 blue, 16 green, 4 red; 2 green, 20 blue, 7 red; 11 green, 8 red, 15 blue; 9 green, 10 blue, 1 red
Game 94: 2 blue, 12 red, 10 green; 16 red, 9 blue, 6 green; 5 green, 9 blue, 11 red; 4 red, 2 blue
Game 95: 2 green, 9 red, 1 blue; 2 blue, 1 red; 2 green, 5 blue, 3 red
Game 96: 1 green, 5 red, 13 blue; 1 green, 2 red, 13 blue; 2 green, 2 red, 17 blue; 3 red, 1 green; 6 red, 2 green; 1 green, 7 blue, 4 red
Game 97: 1 green, 1 red, 1 blue; 2 blue, 11 green; 1 blue, 13 green; 9 blue, 6 green, 1 red; 10 green, 8 blue
Game 98: 12 green, 9 red; 12 green, 10 blue, 3 red; 3 red, 13 green, 7 blue
Game 99: 8 green, 10 blue, 1 red; 10 green, 2 red, 6 blue; 3 green, 1 blue, 1 red; 10 blue, 1 red
Game 100: 8 blue, 6 green, 8 red; 7 red, 2 blue; 2 red, 10 green, 10 blue; 9 green, 7 red; 3 red, 7 green, 1 blue`,D3=`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`,G3=`...............776..............552........968..................589...26...........484..............958......186....546.........484.........
.........*.........778....................*....124...................................*...............*........%..26.........................
......194..380....@....900..........639....467........478*..............582...........798.............326...........894.........#...........
904...........*2.......#......259.....*..........801......464................597.569.............794+................$..218....502..........
...*.....................-...$.....%..431.........*...810.....840+.668..........*.......144=.............................../...........%627.
...890...497.........829.643....504..........465..502..............*........488...................787.184...601....215........-450..........
.......................*............684.....*.............466...970....646..%...........399...........*.............=....88...........=415..
....................139........415...+......854.....683....*.........+.=.......107.676.....*451......83..416....856.....%....765............
..............163..............*...................*......796.....992.............*...............................#.798.....*......819......
.../....678..*...........429..351..........937......629.................*59.677..........652$.292....................*..431..184..*......688
.79......*...694.......-...........492.247......26.......399/.=....................113.........*...................789....*.......469.......
.......94............667.............*..*...933...*684........861...687...567*927.*.....869..509.......................423..................
.596............................561.271.349....-.........139.........@............278......*............@...942*....36......................
.....475...........*268.........*...................695.................850..#.........233.876......@..768......425......85*734.......*349..
.......*..119.96........287.....177.............940*......................*..445.........@.........577..........................39..30......
.....26......*.......................1=.685..........3...120..81.......533...................................718................*...........
.....................306.........335.................*......+...*..................563..240..................*.......349*708...244...319....
..........30..197...........639......................7.../.....471.......-.......@..*..%........895*680.....635.......................*.....
.....*116...*..*..............*...........445.............643.........75.29.....42.586..........................41.....@.....323.....860....
.511.......105.71.......765...670.....489*.........426.........758.....................139............94.793......*....63.....*.............
...*.....................$..................470......*..........*.....69.......590.730*...........553...........814..........604............
.680..............................443..............598...-.....318.....=........*........845..215..*.............................-..........
............237.......180...........#.691...276...........909...............$..527...881.*.....*...585....224....762.....389..193...........
.....@.....=.........@....789.................*.......857........&.450...716.............149..885............*............*............504..
993...906................*.....685..688........385...*........925..*................................700*...811..=......295.....$311.....-...
...@.................956..809.......*..............................577....965.......%846.....$...@.............839..........................
.........704.393%....*............1..562..............716.................$..................387.645........................571.342./.......
......@..*.........226...........*.........526*914...*......172....-..........32............................211.......990......*....695.....
.....272..481.................288.....................370.....*.....740...........281..............430..13..$...............................
397............#............................65................677....................*.586..758....*......*.................49.#973....409..
.............818.........103...........524.*.........150...........781...236.../891.....*.........456.416.591.691-...849....+...........&...
..................457@......*...........&..813...979*.....453*181....*.....-..........286.....565.....................&.......624...........
......#....................221..464..................................604.....978.........................................%412.*.............
619%..176.........=...280......*......*......................493...............*.......................570+....................961..233@....
..............52..50....*.....26......518.207....%.465.........*.............871...817.............384........792.....@754..................
............3*.......703............%..........554..............20.........................879.......-....646*...............415...814......
........944......946..............766.477.492......835......806...........214.........*......*..............................*......%....633.
....266*......*.....-........................#.783*........*..................900.....852....271..+567.452..249..........850................
...........938.661....770...87.841..................@......739../.....230.....*...916....................*..*...636..49.........18..*20..4..
....110................*......*......#341.-.......*.75..........660..........117.....$.803@.780........172.......*....*.160/.....+..........
....+..................92.693.............952..988..................670.....................@...972...........760..194...............24.....
........479*...880..=........&..475&..677..........%283.....642....*............359...154................755.............690...........&....
...../.........*.....590..=..........&.......&....................765......./...*....................419........214-.......*...324..........
......934...470...........10.......*....-....412............750...........496..651...+701...........*....................698......*217......
............................./228...484.854...........627....%......795.......................*.............450...66........................
............978$...274.......................822.........*.....-760............700.........235.346................*.............+.....885...
...................%...582..........338.@.....*...274..252.....................*...720....................700.18.41...........503.......+...
........4..960....................../....722..897.&..........987..........510..104....+..416.....549.......*...*...................407......
.......*......*211............=725...................$574.......*.........................+......*.......788..350...432..............*......
.244...921.........601....36*..................222..............918...344..733.....109.........610....66..............*...............937...
...*.........464...*.../.....991................*....................+....*....285*......538..........*.......914......526...465.722........
............*.....362.460........49............66.121...=...............373.............=.........530..337....=.................*........606
154...713...611............$725....................*..29...425..74..............920.................@.................389...........715.....
......*........../.....143.......................652.........*..*..711...69.26........406.....................37*175........122.....#.......
.....588........39....*......224.........*................868..800...&../...*....407.......46..387.728......................*...............
............-........39.........*.541.595.516...............................484.*.................*...........206.........636..807..........
.............858.............716....*..........810*290..372........@949.........921...................428........*..+..........*............
........486........301*307.........135.................*................264.178......838.....224..-......*......499..816.......227..........
.......*........................................802...608............24*.......*.........940......98....960............................685..
.......425.76.........+94..556...........699.......*.......................%....857.266.*.....................8................624*....=....
............*.................*735......&....$..345....361%.803..856....732.........*....520....*..............%.......269...=.....286......
...........73.901.../..............384.....520......#.........-./...........447......930......279.......634.............#..207.754......473.
..............@...538.936*484.....*....665...........630...............236...@.....%.....................*...985..406............-..........
..............................328..531...%.616...........................*........64..497..105........844.....*......*......207.............
.....*730......................*.......................478..701........+..567........*...........110.......175.......6.737.......+....192...
..363......119....6....942......892....171..358.981..........*........731.........455....#..........*993.......383......*.........505..@....
..............*....%.%....*............*......*..../..%.....................995........850...264..........82%.....=......735.../............
..207...413/.349.@...628.685.........930......231....921.......................................$..142...........-............713....260.....
.................384.........527..........373.............@946....&...............948...949......*......349...838......................*....
.......................210....*.....................*241.........333.......................*..723........*..........632....916-...164..63...
....789....../..859......@....770............286.881.................867.........218......346.........691..368......*.......................
......$...411.....@.781............857................*912.135.&27...........885....*.942.........%............436..264.449.577..92#........
...............9....................*..............391.....*................*......54..=.........108.......................*................
..............$..106........767..290...751................977............990................499...................466.........545...........
...............................=..........*..................................345............./....=.../...266.847....*605....*....219.......
..................984.....735..........761......727.........814.481.....737...*......936...........76.599.*....=...........247...=..........
.....................*697...*.595.................=...........*........*.......480.........................822.....287..................941.
.....182*875...477#..............*...108...................390.......266...........678.593.......-..............$....&.649...../..../...*...
....................279..............*...136........@..........................513.=...*.........332...510.....337............534..236..101.
.......................*538........453......=.......390....235...................*......741............*.................792@...............
..492......639.650.........................................@.....................21........./.......170............................+..@.....
...*..942..=................794.........@..........456............185.395....437...........721..........206..+231...............638...424...
479......*....................*.........251....243*....387........=..................520.............$...../................................
..........971.................995.........................................116.......-.....*950...*....731.....543.......+..............748..
......522................852=..............380..848......932........482......*644......514........40.........#..........869........710..-...
.........*......................#955......./...*....../.....*46.......*.160#.................652..................218..........478*.........
.........870...254.........309.......106......214....840..#.........29.......%........111.....$.........20*865..........&.............694...
..................*316........*323......*................734.881.......33...84.97$..4*..........*135...............772.993............*.....
.......................208...............793.....157............*597....*....................818.........-...260.....*........933....384....
..........106......34......358*263.................+...457*...$.......866.583....................439=..677......@................=..........
......-...*........#.......................................87.68...............#.......186%..................&.....=626.....................
...191...136..453*.............#../537...............%.612........89..417......50.........................429..................859..........
..................432....*89.20...................387..../....../.......*.........121...108...................................&.............
...........768........................134...793................339....206.........*......$.......394.......@.........974..........132*863...
......./...*................252.355.....#......................................335...169...332...*.......896....894..*......................
....629....191..........369*.................109.............326..312*....&...........*.....*....478...........*......432...&......104......
670............................&....967*........*.....................516..92..855...685.712..............936...............88....$.........
.....583......974....26*24......782.....806...160...............669...............@..........606*........%......89..........................
786.............*................................................&..................=............742...........+...................%........
......#....@.939......375..............332-..........575...546*........*....196.628.581....@...............288.........645...467.246..125...
....46...872.....414.....*..=......+........677................342..883.301..*...@.........699.261...796......*....809....-..*.......*......
................$.....828....940..400.........$.40............................39.........*..............=.......-....*........780....925....
.....*375.................39.............418....*................................../..279.367../676..........982.....216....=...............
..703......$....../............703*.......*..904.....465.........*182..92.........173...............610...65................685.....55$.....
.........904...650.................274...6.....................&.........*635...............787.306*.......*.............*..................
..136........................................933......783.724.320...344..................../...........+....51...108..597.41.....809........
...+........715.663............$.....821.....*...........*............*.....@657..354..411..........811..........*..........................
......633.....*............*...925.........991...852........=...=......184..........*.........589.................788...191.................
.........*....574........368.....................@.......373..657.701........411..575.954&......*.......$.....748.........*....758..........
........787........770.............................879............*......88....*..............119.....817.....*.........914....*......751...
.14.173...............*........................189*................509..%......29.............................87................683..*......
...*........../.....563..270*876...123................................................../64.....216........................977......316.....
.......612..516.50...................*................762..23/.........26.........608.............$..466*214.......455...#..#..352......928.
........*.........*......296..@.......970..513.........*.........584..................233.....945................./.....846...+.............
......918.......640..585.....600..550.....*.......=....723.......*.............-.......-..418.....15.180...969.......................703....
...@.......-63...........=........*.......839...769............76........671...268........+..........*.........965....#.....#.568...*.......
.194.....................453......530...................*675......487.=....+.........309....224..507.209.........@.138....300..*..$.........
.......@..@....846.............%.........714...468...150......88......510..............*...*.......*...........................9.816........
.....234.140....*..............903..789.....*.*..............*..............631........702.80....33.........513........276..................
.............381.......................*.803...474......267...296.436.......*........................679....*............*........939...784.
.....-..........................33&.158....................*......*.......569........487...871/............510......274.542.........*.......
......883.....*163...782..-.............379.764@.....912=..796...91.....................&.......979....907.....*......*........167....+.+873
...........110........*..577........&....*............................*778...................$............@.241.428..949...680*.....513.....
....................924........471.470.268..486......../....#......567...........470..469.794....%...............................+..........
..725*532......$........@.......*..........*........926......213............405.....*...*......355...615...#....73........151.....896.......
............980......969....812..28.936.....882..............................&...107.....377...........*.611.......+.......&..737...........
....$594...................*............156.....210....585...........234.821.........................403........837..........*....652.......
...........................247.@881..7.....*....*.....................*.....*.......*........140.351..........................510....*......
...........790*776...................*...270...778......707.110.....487..486...460.70........*.....#...585.702..430..141...........34.......
...52.......................&216..788......................*...................*............199...........*....=......................989...
....$..445...498.254.508*.............*860..711.48......./.............596....305.....618..........337.............198....287...............
.........#....*....@.....352....*..645......*.............328......50.*..................=...-........*584..........*..........*275..986*527
.............560..............815.........931......400............*...592......824.........807...591*................311.....82.............
.........%.......678.926........................19...*......545..649...........*...............*.....393....=896............................
......834...........*............................/....386.....*......=290...772.............545.969...................679.820......704......
..........122...........202....693.................*..............................555*826..............458......691......*.........*........
....#.......&..%692........+......#..333............41...............=204..................868............/.164..................316........
...346..................+.......$...*......396..315....119..@755...............942..918........................*........631.651.............
.................=....836......402.755............=.......*.......*....181.62...*.....%........................596......*............#591...
...............764.....................................488.....880.209........416..................183...156..........917...................`,B3=`Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`,M3=`Card   1: 79 93 21 74 81 76 17 89  3  5 |  5 67 87 81 76 35 79 21 15 80  8 74 99 28  3 23 19 42 89 16 22 77 92 70 34
Card   2: 83 16 24 23 59 70 14 57 74 53 | 79 82 70 23 61 14 74 57 36 37 59 72 83 16  3  2 28 63 50 60 38 86 97 24 53
Card   3: 12 77 13 14 48 55 69  4 18 81 | 69  7 94 88 18 73 55 48 49 81 14 21 12 15  5 27 22 84 51 52 13 77  4 57 17
Card   4: 32 35 57 27 15  5 16 40 36 46 | 84 47 76 35 83  5 22 15 72 48 57 33 46 53 43 16 10 65 32 51 36 44 40 27 97
Card   5:  8 72 57 36 45 96  7 13 17 14 | 46 40  8  7 57 60 69 89 17 13 16 51 45 72 55 64 76 42 14 29 21  9 96 36 94
Card   6: 22 46 55  8 70 91 11 89 31  5 | 31 22 40 10 11 61 42 19 87 92 96 34 76 21 89 18 46  8 55 30 36 70 91 63  5
Card   7:  5 66 19 57 97 24 45 44 29 86 | 27  1 70 97 60 90 93 69 29 44 86 49 42 57 58 45 88 24  5 19 95 66 46 78 31
Card   8: 67  4 51 50 91 39 63 52 77 47 | 61 23 54 77 63 51 98 20 47 57 90  7 91 65 79 82 39 72 75 24 52 27 50 67  4
Card   9: 99 26  2 15 51 56 63 69 39 41 | 91 10 81 53 23 41 75 33  3 39  9 24  2  5 93 51 25 37 99 69 15  7 35 67 63
Card  10: 31 90 84 42 34 74 96 66 71 75 |  4 31 43 90 96 70 60 75  5 42 11  6 21 76  2 41 34 99 84 14 77 33 24 71 12
Card  11: 66 55 30 68 45  5 82 71 27 85 | 60 26 40  3 94 93  2 76  7 75 46 47 82 37  8 34 62 92 51 53 32 88 12 44 83
Card  12: 49 39 86 99 88  3 51 41 46 64 | 31 95 25 32 19 98  3 78 88 94 50 80  4 51 55 35 17 24 89 71 67 99  2 69 37
Card  13: 53 56 84  7 35  8 55 75 24 13 | 42 34 30 94 81 95 12 68 69 38 50 17 11 23 89 19 15 79 47 26 88 99 16 44 27
Card  14: 42 88 47 86 61 36 20 59 83 99 | 95 93 88  7 13 34 39 97  8 99 22 86 30 64 15  2 41 12 65 84 61 21 57 35 78
Card  15: 59 90 32  6 57 42  1 46 34 23 | 28 59 62 16 64  3 13 14 25 46 29 75 92 23 84 82 98 55 73 38 79 19 53 22 80
Card  16: 57  2 10 43 54 75 87 76  6 95 | 55 89  7 70 51 85 99 49 48 36 54 58  4 76 52 93 19 82 74 66 34 64 63 39 33
Card  17: 63  3 96 69 20 41 18 25 55 90 | 75 96 11 64 38 53 34 55 26 18 50 78 44 13 98 91 10 47 92 99 67 20 54 83 17
Card  18:  2 67 70 62 30 41 99 92 47  6 | 47 37 26 61 50 78  5 69 63 55 59 62 89 84 22  3 10 85 40 91 66 82 51 46 52
Card  19: 75 88 99 27 41 95 26 40 82 17 | 79 68 98 89 33 86 73 32 84 40 62 44 31 14 61 48 42 29 10 21 64 92 49 59 60
Card  20: 87  7 76 82 93 59 69 64 89 90 |  1 82 66 75 70 81 51 61 87 86 39 91 64 32 93 44  5 78 34 92 26 50 18 58 85
Card  21:  4  9  3  5 16 29 32 41 82 61 | 90 63 39  8 99 73 43 11 17 98 88 80 62 25 76 95 31 75  6 38 52 55 18 53 89
Card  22: 47  6 22  1 92 56 33 32 55 41 | 52 98 94 99 90 55 17 62 91  4 70 86  1 80 44 57 31 85 64 76 45 27 24 95 28
Card  23: 59 95 56 20 97  5 52  9 65  1 | 80 99 46 19 24 57 44 78 25 93  8 73 45 94 48 42 89 41 63 54 81 10 17  2 90
Card  24: 10 56 60 73 67 92 76 77 74 21 | 48 18 82  7 85 65 89 98 58 57 19 49 53 87 25 88 51 15 72 79 17 44 91 66 39
Card  25: 43 34 14 37 96 24 64 77 88 93 | 45 22 96 99 10 14 51 11 26 67  1 76 81  5 79 12 93 60 73 56 52 25 30  7 24
Card  26:  8 64 27 73 95 78 99 23 68 77 |  5 23 70 12 96 18 38 37 11 67 76 91 64 22 77  7  6 99  8  1 60 17 26 73 95
Card  27: 16 43 63 89 26 40 85 56 24 77 | 87 85 70  1  8 62 24 27 40 46 42 21 50 94 56 91 64 66 11 71 74  3 60 97 12
Card  28: 52 94  4  5 25 20 16 88 99 71 | 67 68 99 25  4 72 16 87  5 64 62 78 71  8 88 65 20 95 47 73 55  9 94 41 52
Card  29: 81 52 45 80 96  2 77 24 67 82 | 30 13 53 60  1 21 50 74 33 91 80 59 92 58 66 63 89 68 70 47 43  4 95 18  9
Card  30: 43 36 55 32 65 19  3 86 95 48 |  2 99 95 56 82 25  7 44 71 43 12 79 70  8 65 83 46 63 55 60 52  4 61 91 81
Card  31: 61 14 29 96 87 34 64 33 62 18 | 14  7 74 27 86 50 28 89 84 82 51 34 72  8 33 29 68 45 31 71 93 64 96 62 75
Card  32:  4 92 88 97 52 16 87 13 39 91 | 52 57 29 32  4 88 54 37 15 42 97 28 39 20 92 85 46 99 38 48 34 41 79 13 36
Card  33:  1  8 74 33  3 10 94 81 53 38 | 30 98  6  3 58 34 53 99 31 21 77 33 71 45 82 95 94 81 62 97 38 89 35 78  8
Card  34: 59 16  9 51 22 20 47 90 38 74 | 79 58 68 71 96 91 76 46 63 34 16 19 57 83 14 38 60 75 20  3  7 73 12 24 40
Card  35: 76 85 88 78 79 11 72  8 74 63 | 97 35 18 34 17 24 10 68  7 43 14 77 74 59 94 29 61  9 46 81 71 52 98 78 40
Card  36: 17 56 10 34 38 59 80 94 45 18 | 73 21 15 30 91 48 31 76 19 77 26 43 80 87 55  6 41 54 59 52 72 38 40  5 37
Card  37: 33  4 82 53 95  8 87 45 42 29 | 35 21 36 89 76 38 44 96 78 25 15 87 45  3 55 51 27 82 37 79 75 73 12 56 40
Card  38: 96 86 71 24 30 14 38 99 44 56 |  3 32 70 24 42 37 36 78 79 55 93 92 94 41 96 76 25 27 98 20 75 60 62 22 67
Card  39: 30 88 10 54 62 44 91 75 72 29 | 77 73  6 60 70 49 17 23  3 76  7 59 40 45 43  8 52 36 92 95 78 48 26 18 34
Card  40: 46 56 10 17 37 55 97  7 80 38 | 18 88 32 49 65 22 61  8 85 34 87 16 67 94 51 30 64 57 15 74 50 25 91 27 73
Card  41: 97 89 15 84 48 98 91 33  6  5 | 38  5 97 91 89 96 36 41 24 48 26  4 64 16 40 98 84 75 15  6 33 27 51 53 57
Card  42: 71 10 32 84 41 20 59 91 79 63 |  9 12 70 67 17 10 98 80 40 47 42 22 36  4 25  2 57 78 39 15 49 23 31 14 55
Card  43: 97 12 53 59 36 13 69 87 49 95 | 57 97 90 29 93 49 87 60 13 39 53 12 92 11 26 59 17 47 78  1 69 95 70 36 14
Card  44: 16 32 83 30 89 53  5 44 27  2 |  5 53 78 60 18 83 40 30 32 64 97 24 27 11 29 39  2 16 33 89 19 75 44 72 20
Card  45: 62 83 99 24 93  1 47 43  7 76 | 88 39 91 66 20 59 58 85 30 22 87 90 29 18 89 26 65 79 92 27 16  9  2 45  7
Card  46: 33 74 24 58 36 10 52 77 86 15 | 50 36  8 51 42 90  1 29 39 55 43  4 94 49 66 59 91 30 44 83 98 54 48 74 10
Card  47: 42 95 17 88 16 36 77  1  8 76 | 42 77 36  8 34 76 92 17 75  1 16 48 73 88 95 26 32 93 58 55 39 70 67 45  4
Card  48: 55 89 87 90 38 44 39 94 53 61 | 32 26 41 25 57 22 40 27  5 73 61 65  4 94 38 44 39 13 87 67 69 55 93 74 48
Card  49: 88 11 92 90 89 49 75 14 83 68 | 89 18 97 79  4 90 32 92 68 54 63 19 62 35  2 34 75 23 58 45 17 66 80 81 14
Card  50: 21 24 41 30  6 47 14 46 25 91 | 76 20 47 55 79 64 32 53 54 68  1 81 22 70 42 33 40 80 73 28 99 71 25 90 16
Card  51: 68 27 73 53 74 11 85 72 43 52 | 76 30 82 98 43 78  2 45 31 97  1 33 11 85 91 57 93  9 20 42 29 26 38 21 71
Card  52: 82 37 29  1 44 34 17  2 56 46 |  3 29 86 42 38 56 17 84 33 64 34  2 78 44 82 46 10 22 99 54 79 62 19 28 37
Card  53: 91 92  2 14 72 31 75 93 40 70 | 78 31 81 41 90 93 64 65 75 34 29  2 18 92 20  8 10 71 40 26 63 69 70 91 88
Card  54: 13 70 80 98 49 43 54 40 79 81 | 75 49 51 52 88 83 98 89 30 20 26 56 81 74 70 40 46 35 12  7 99 43 24 31 79
Card  55: 57  3 65 47 95 38 87 90 15 27 | 14 15 99 76 75 68  3 44  8 36 30 51 83 93 38 50 29 55 27 40 71 31 10 12 33
Card  56: 45 22 78 37 35 89 46 90 58 47 | 67 40 73 64 17 21 91  6 84 18 63 78 60  1 16 71 25  2 68 43  8 35 22 28 33
Card  57: 21 43 41 18 56 70 42  1  2 23 | 53 69 99 79 95 15 94 48 58 73 87 12 13 68 11 16 96 64 78 59 71 75 54  7 98
Card  58: 42 70 71 74 14 91 68 76 61 90 | 32 59 77 10  2 48  5 57 67 99 13 70 25 84  8 61 24 92  6 47 94 72 28 31 73
Card  59: 86 43 14 77 96 67 35 97  9 98 | 51 18 32 99 88 13 71 81 77 34 20 89 12  2 50 21 53 97  6 80 85 45 47 40 48
Card  60:  1 57  2 96 35 98 16 40 86 12 | 41 22 36 21 75 67 92 54 65 85 61 78 48 27 58 63 52  3 79 37  4 93 31 90 47
Card  61: 78 32 26 64 91  7 86 31  8 73 | 52 41 42 16 81 17  9 72 57 11 15 62 98 51 34 19 85 97 48 18 24 77 88 45 27
Card  62: 59 47 95 38 13  6 23 32 58 52 |  4 39  3 55 66 84 86 42 77 75 41 96 36 65 45 99 89  8 74 88 31 29 19 82 97
Card  63: 85  1 82  7 27 73 43  2 19 67 | 46 82  1 42  5 36 73 19 88 35 57 39 78 27 83 37 26  7 67 58 31 12  2 94 10
Card  64: 23 74 35 40 57 44 71  5 83 42 | 40 57 97 90 12 74 47 91 19 49 83 71 42 92 80  5 60 54 44 23 14 86 82 16 35
Card  65: 11 60 73  4 58 45 54 74  3 19 | 21 73  3 96 80 91 26 19 39 54 41 68 71  4 60 45 15 36 58 77 59 95 65 22 11
Card  66: 45 78 24 28 60 23 81 30 57 46 |  7 46 53 23 99 30 79 76 43 78 11 40 60 54 47 36 28 45 17 57 69 65 24 92 81
Card  67: 14  8 55 99 35 98 95 69 38 87 | 59 12 14 30 82 63 69 85 61 55 65 32 58 97 60 80 87 98  1 95  8 38 89 99 35
Card  68: 78 89 74  2 32 39 14 41 66 49 | 57 71 82 76 51 16 97 41 58 20 36 22 15  2 39 43 14 29 66 89 32 42 49 56 65
Card  69: 82 29 57 97 75 98 19 16 70 93 | 47 93 24 91 70 60 52 28 97 50 42 45 17 82 81 33 57 84 95  6 85 62 89 16 98
Card  70: 99 92 75 80  6 13 59 68  5 23 |  7 78 94  4 15 96 26 57  1 58 20 43 29 73 46 87 67  9 25 24 32  3 93  2 81
Card  71: 61 33 23 10 46 90 41 88 49 19 | 75 67 20 35 24 46  9 69 92 27 57 49 43 19 88 89 53 38 90 84 94 33 59 31  6
Card  72: 57 43 96 12  8 78 37 68 28 17 | 76 46 60 97 31 77 21  5 73 32 82  2 61 50  6 28 39  3 85 29 71 94 38 93 79
Card  73: 66 51 48 31 92 22 80 23  2 12 | 59 97 92 10 45 28 51 73 95 69 62 38 14 86 72 33  8 94 11  2 12 68 31  5 13
Card  74: 88 32  3 74 60 16 69 80  9 34 | 82  3 72 90 27 36 88 38 16 14 80 46  5 18 32 69 41 34 45 61 62 60 52 74  9
Card  75: 73 48 35 68 66 81 70  1 94 20 | 91 74  1 78 16 94 73 92 53 96 89 13  8 43 95 47 80 42 11 72 26 24  5  6 66
Card  76: 87 14 23 58 92 89 69 76 49 88 | 66 43 87 84  8 83  5 78 23 44 58 48 61 49 98 40 82 10 69 88 35 73 20 27 50
Card  77: 29 94 13 42 21 64 74 81 67 58 | 86 96 48 40 29 27 80 97 51 22 67 72 91 16 64 84 26 78 58 49 34 53 30 77 46
Card  78: 90 49 51 57 52 89 33 26  1 29 | 77 23 34 56 96 72 44 14 97 76 51 64 33 91 90 80 74 69 52 55 27 83 93 60 82
Card  79: 13 81 79 91 28  2 77 60 29 19 | 32 42 81 26  7 64 28 35 57 11 73 47 21  1 76 97 84 53 55 48 58 80 38 59 83
Card  80: 88 20 72 86 53 82  4 31  1 66 |  3  6 17 47 15  7 88 11 90  4 70 58 31 91 72 82 94 97  1 10 50 25 55 65 84
Card  81: 64 53 88 41 73 67 13 84 87 85 | 26  9 15 83 18 74 43 10 42 65 79 61 66  4 45 70 12  5 47 24 34 81 94 44  6
Card  82: 89 85 86 35 81 98 92 77 57 96 | 31 35 48 97 53 85 57 79 19 10 14 49 98 66 34 33 87 18 27 36 26 24 76 56 84
Card  83: 81 34 43 58 20 37 35 98  2  1 | 74 66 68  2 77 40  8 34 72 88 87 28 71 35 76 60 51 73 75 12 44 33 19 52 47
Card  84: 79  3 72  7 98 71 49 96 28 54 | 41 75 46 92 14 69 87 70 33 29 31 73 86 10 54 34 71 47 80 45 38 68 93 27 88
Card  85: 75 99 49 51 69 77 72 18 26 28 | 97 96  6 58 77 60 45 27  5 93 85 23 71 15 87 94 46 37 29  3 33 65 79 56 59
Card  86: 98 43 83 76 91 64 34 89  4 77 | 60 12 42 70 26 30  2 63 85 74 84 38 49 39  1 96 72 50 24 71 52 65 32 29 44
Card  87: 34 18 59 16 85 46 47 41 98 51 | 99 69 68 28 53 22 73 90  6 58 56 20 84  3 39  9  8 94 13 82 93 81  5 91 67
Card  88:  6 65 71 21 90  3 82  5 56 81 | 44 97 47 76  3 26 29 90 21 57 46 33 81 19  5 38 30 65 78 79 71  9 43 80 48
Card  89: 40 98 59 87 43 28 94 93 71 57 | 76 73 60 11 18 87 67 25 65 64 49 42 46 78 63 14 54 98 74 66  4 59 80 16 36
Card  90: 49 36  9 94 82  3  6 10 54 90 | 55 99 45 77 65 76 56 13 22 19 53 69 81 23 18 71 68  5  4 15 62 98 12  7 59
Card  91: 46 50 30 75 28 58 95 60 14 53 | 10 75 72 61 11 23 88 28 63  4 86 95 81 68 50 34 45 43 32 52 53 58 59 60 31
Card  92:  5 85 10 63  6 46 66 34  1 65 | 43 35 22 61 30 44 27  4 75 80 89 55 47 90 77 59 76 21 70 36 51 56 40 69 57
Card  93:  5  3 47 22  2 28 71 93 97 24 | 94 41 29 79 15 21 68 83 13 70 30 77 74 99 86  7 43 88 40 69 45 55 54 31 47
Card  94:  6 98 60 25 58  2 20 97 36 39 | 10 29 22 39 48 14 96 88 86 50  5 99 84  2 12 89 83 60 75 36 20 46 15 13 35
Card  95: 11 78 92 55 59 54 98 52  5  9 | 82 33 98  1 19 83 59 15 42 99 34 20 23 17 51 50 71 84 67 54 44 16  5 31 35
Card  96: 37 14 40  1 98  8 80 42 69 16 | 58  4 61 16 49 46  1 42 36 98 19 80  2 68 29 43 13 93 88  8 45 96 79 35 77
Card  97: 39  5 67  7 63 46  4 79 29 54 | 35 20 78 12 64 57 89  7 11 84 94 41 43 42 73 23 28 97  1 91 90 19 65 15 32
Card  98: 69 14  6  7  1 37 85 38 55 95 | 32 58 25 38 11 81 33 42 21 96 84 53 97  7 50 16  1 28 98 78 18 79 95  8 54
Card  99: 39 66 49 53 87 16 20  7 92 59 | 87 41 22 14 92 95 98 63 73 18  6 58 27 25 12 28 26 40 48  1 77 20 64  8 11
Card 100: 15  1 30 34 27 66 98 71 94 49 | 41 48 99 84 59 30 16  3 60 40 78 86 73 42 70 76  9 69 25 54 81 21 67 18  5
Card 101: 61 57 53 37 93 76 96 49 12 58 | 17 26 40 43 29  1 80 54 42 64 95 73 41 25 77 72 45 50 75 32 68 87 36 81 70
Card 102: 94 57 80 25 90  7 52 51 78 21 | 50 66 23 42  2 81 20  3  4 49 98 30 45 33 64 47 86 75 62 27 79 17 69 87 46
Card 103: 83 71 38 14 26 22 66 93 99  3 | 28 92 72 53 84 19 49 88 36 45 34 32 60 33 56 44 78 21 35 76 10  5 24 15 94
Card 104: 98 53 74 12 75 30 14 63 29 47 | 28  2  3 16 96  5  6 19 68  8 90 91 95 14 25 36 67 38 64 50 35 78 47 24 87
Card 105: 95 81 93 69  8 43 79 83 30 49 | 87 49 69 81 43 29 27 93 44 83  8 18 40 30 97 28 41 56 95 51 26 96 20 85 79
Card 106: 39 36 97 77  7 60  4 24 83 92 | 50 38 14 52 92 74 24  7 23 13 39 77  3 97 40 93 83 73 15 60 44  9 34 36  4
Card 107: 53 67 85 36 27 70 89 50 54 99 | 72 36 21 27 31 44 71 99 10 85 50 40 54 34  3 91 89 98 70 82 67 41 18 43 53
Card 108: 29 70 45 18 90 58 77 48 82 62 | 28 17 26  9 12 64 34 11 86 87 24 73 63 13 97 14 36 56 84 76 23 79  1 21  6
Card 109: 29 20 25 51 48 41 97 49 58 77 | 14 77 99 41  5 93 56 44 71 52 31 34 87 65 53 78 40 49 36  7 51 25 66 97 29
Card 110: 84  9 27 40 57 43 99 54 53 50 | 16 56 14 99 53 37 69 27 40 36 43 92 57 84  9 48 50 54 60 67 18 83  5 51  8
Card 111: 51 69 84 37 64 21 24 93 57 33 | 78 72 14 33 93 57 97 48 26 20 92 69 53 89 24 21 84 80 45 63 64 51 37 96 90
Card 112: 49 22 16 39 66 60 35 83 75 50 | 76 96 97 22 45 56 36 54 50 39 93 60 35 63 77 87 81  5 48 16 49 66 83 75 23
Card 113: 25 79 14 45 58  1 40 16 28 12 | 27 34 11 45 53 25 52 47 79 28 93 39 56 95 58 32 51 40 73 12 14  1  3 24 49
Card 114: 85 84  5 43  7 34 21 10  6 20 | 99 32 59 31 58 76 74 37 89 93 45 39  9 41 60 64 85 42 19 25 18 52 26 23 21
Card 115: 17 19 72 49 98 78 81 99 95 39 | 76 45 27 68 18 67 88 99 96 95 31 23 98 17 81 77 72 20 12 54 49 74 39 19 78
Card 116: 98 88 94 75 11 10 40 32 53 24 | 75 65 14 61 42 28  3 15  5 66 52 88  7 98 44 33 90 49 19 64 18  4 87 29 96
Card 117: 44 47 63 70 32 78 41 39 46 98 | 54 48 97 88 80 84 50 60 78 82 63 71 44  7 56 94 22  9 32 68 27 36 28 83 65
Card 118: 74 33 42 66 45  4 44 37 68 19 | 16 72 54 21 38 43 18 11 64 50 10 83 45 35  5 17 80 84 58 77 75 36 28 65 24
Card 119: 55 51 89 74 66 40  7 10 85 26 | 99 70 53 24 20 84  3 17 74 15 13 85 80 88 23 38  8 59  2 96 19 35 66 81 41
Card 120: 19  3 65 70  9 57 63  4 17 41 | 21 76 62 36 87 71 16  7 12 32 31 90 61 68 64 44 34 27 45 10 98 48 51 60 39
Card 121:  6 77 99 31 98 33 36  4 52  1 | 86 66  8 73 70 89 45 24 50 72 25 21 82 41 94 64 65 10 91 55  4 52 92 68 63
Card 122:  4 13 62 98 76 83  5 53 10 81 | 69 83 65 60 37 26 48 24  8 25  1 92 44 53 16 80 87 89 41 96 40 88 35  3 17
Card 123: 18 26 93 87 27 72 34 94 44  8 | 50 99 10  1 90 32 25  6 87 97  2  9 88 21 34 43 12 96 42 24 20 45 83 86 74
Card 124: 81 19 80 41 11  4 64 23 94 24 | 65 22 90  2 74 58 34  5 46 71 76  1 54 92 16 73 52 49 35  7 45 62 75 59 99
Card 125: 80 63 19 16 87 97 15 96  3 57 | 41 82 66 25 60 58 72 32 54 23 86 71 65  6 94 13 59 99 62 85 43 18  7 75 74
Card 126: 50 84 95  6 93 73 39 96 14 51 | 17 21 35  4 48 23 25 64 58 28 90 13  8 85 70 12 81 82  3 31 71  9 62 92 97
Card 127: 47 68 65 98 82 66 34 49 24 23 | 84 64 68 42 23 65 54 33 22 48 35 82 34  9 89 12 24 47 49 58 66 87 98 73 85
Card 128: 43  3 80 40 68 17 13 52 38 79 | 40 64 42 59 58 50 80 88 38 31 94 75 83 29  3 67 46 18  5 11 22 54 36 55 99
Card 129: 95 76  7 43 87 50 20 12 97 73 | 25 73 12 87 35 21 10 56  7 49 95 76  3  5 50 45 43 61 51 99 23 20 93 97 84
Card 130: 37 64 50 45 27 61 11  6 82 31 | 71 78 50 44 36 98 51 84 31 15 60 94  2 64 43 63 74 82 47 46  3 54 89 27 70
Card 131: 18 65 42 31 80  2 17  5 27 61 | 48 11 86 92 96 40 17 30 22 71 34 13  2 61 33 31 50 26 64 56 18 45  9 67 36
Card 132: 54 61 43 79 63 16 19 30 98  5 | 75  5 20 23 41  7 98 51 67 81 58 85 60 77 43 39 79 34 54 28 38 16 61 12 18
Card 133: 64 53 25 17 56 43 11 22 86 51 | 41 64 47 25 43 20 52 75 46 17 60 56 50  6 23 61 86 22 24 53 95 11 34 51 21
Card 134: 46 33 93 42 54 43 56 86 81 28 | 56 77 50 28 61 32  1 85 38 14 18 90 74 71 84  6 46 86 30 15 40 54 93 39 58
Card 135: 53 61 62 48 52 91 31 80 77 29 | 40 88 38 34 12 18 19 49 75 97  2 71 69 94 55 36 89 33  9 76  3 46 90  1 67
Card 136:  8 94 61 34 35 88  5 73 62 91 | 30 23 88 68 15 73 49  6  4 99 51 45 13 86 54 39 18 20 48 56 78 82 79 92 21
Card 137: 33  3 71  8 79 46 57 65 53 77 | 46  6 33 56 84 77 53 95  8 57 65 44 66 35 75 72 28 34 88  3 14 42 94 79 71
Card 138: 98 35 38 97 74 33 24 73 25 56 |  4 68 98 42 18 51  7 92 77 67 85 50 71 26 37 82 75  9 55 99 97 22 31 57 66
Card 139: 40 56 54 71 41 88 22  9 99 21 | 93 99 18  1 42 44 54 70 58 36 83 57 40 63 78 87 80 49 71 92 31 21 17 33 94
Card 140: 80 14 93 64  6 89 66 30 11  4 | 82 48 52 20 98 70 37 66 27 11 94 97 88 95 64 93 56  6 84 74 77 99  9 23  3
Card 141: 46 88 36 26 23 40 63 55 41  5 | 89 25 56  2 39 72 38 46  5 90 84 81 64 33 86  7 27 88 45 52 23 77 70 41 42
Card 142: 37 43 60 46 95 21 73 29 53 40 | 76 43 26  7 73 60 55 75 53 52 67 17 46  4 48  5 30 99  9 21 71 23 16 92 14
Card 143: 97 73 49 55 41 69 45 30 39 37 | 31 84 24 56 99 76 93 74 53 94  8 12  5 19 92 58 33 75 85  1 96 54  7 14 98
Card 144: 50 38 27 93 31 78 91 68 56 25 | 46 32 52 38 93 78 91 71 55 22 20 77 75 27 88 72 26 23  7 62 81 89 42 53  8
Card 145: 37 56 94 46 96 50 78  3 38 64 | 64  5 21 63 68 59 57 41 87 37 49 65 78 88 10 23 56  7  9 42  2 11 75 70 14
Card 146: 57 16 60 70 79 40 93 65 81 46 | 35 81  9 54 13 77 73 28 84 32 10 24  4  3 25 86  7 78 71 27  6 68 43 44 15
Card 147: 93 96 19 16 30 97 76  7 72 39 |  5 67 73 71 65 27 11 56 90 24 61 95 19 59 99 29 10 49 53 44 72 64 35 21 91
Card 148:  9 66 77 22 42  7 41 21 16 11 | 28  2 46 92 19 61 43 94 10 81 86 48 54 70 29 72 27 25 82 83 38 17 90 60 35
Card 149: 91  8 16 79 15 45 96 87 13 66 | 42 51 61 98 38 57 80 24 82  3 17 79 34 48 37  6 46 81 74 85 50 25 68 26 69
Card 150: 75 77 89 43 15 92 34 73 98 51 | 66 58 46 28 24 11  7  1 84 71 93 70 83 44 17 35 14 10 33 60 19 81 49 22 87
Card 151: 99 39 20 81 55 45 87 53 68 74 |  8 87 23 15 45 74 67 61 26 81 75 17 20 99 55  3 39 68 53 52 29 43 62 11  6
Card 152: 57  3 62 92 88 56 44  6 38 34 | 66 57  4 98 86 95 92 34 14 72 88  3 47 39 56  6 36 55 24 62 67 91 44 38 22
Card 153: 98 31 95 27 99 58 73 65  2 67 | 38 86 54 75 56 90 68  1 63 39 55 77 23  9 19 43 78 79 64 66 13 61 14 74 80
Card 154: 51 62 35 83 72 68 54 18 80 43 | 90 44 68 96 12 10 67 38 34 79 88 13 40 83 29 51 74 72 80 59 35 21 62 28 36
Card 155: 33 54 10 41 20 48 27 89 58  2 | 19 58 54 33 87  5 51 96 20 27 12 80 48 89 53  2 10 69 81 50 26 41 30 29 15
Card 156: 84 53 80 43  7 31 81 86  2 68 | 76 35 12 19  4 94 45  1 38  7 50 31 47 92 80 20 73 16 81 34 99 43 85 64 98
Card 157:  8 92 37 14 34 70 49 13 62 59 | 24  8 94 37 14 13 55 44 98  7 78 60 70 23 56 75 21 43 88 10  6 71 81 92 29
Card 158: 42 80 17 98 94 52 97 45 12 53 | 32 98 37 40 95 12  1 38 24 69 39 68 64 35 41 25 93 58  3 42  5 45 11 15 52
Card 159: 91 43 78 95 29 99  4 15 35 66 | 78 28  4 17 65 30 36 92 35 85 40 33 52 91 29 55 99 23 54 69 19 43 95 15 66
Card 160: 37 74 91 58 54 38 75 12 23 20 | 87 63 73 77 93  5 34 10 30 66 89 26  7 70 32 21 67 80 47  2 88 54 50 69 20
Card 161: 18 22 90 63 47 93 77  3 69 43 | 47 88 64 84 41 25 85 12 63  3 82 33 62 92 45 93 94 98 69 86 81 42 65 44  9
Card 162: 72 56 64  9 87 12  6 35 95 18 | 44 12 32  9 91 53 28 10 40 52 11 76 22 81  5 49 55 86 45 14  4 25 46 63 57
Card 163: 10 54 97 72 18 14 28  7 59 57 | 32 97 49 55 42 52 78 61 88 38 39  5 36 95 25 59 13 14 65 19 43  1  8 18 51
Card 164: 76  9 53 31 64 69 85 18 12 93 | 38 78 26 53 69 52 93 70 64 95 31  8 41 87 22 12 24  9 21  7 60 35 10 16 76
Card 165: 28 70 83 80 25  9 41 66 98 62 | 23 82 94 21 85 32 22 44 56 96 16 71 10 34 64 87  5 92 75 31 91 48 84 39 17
Card 166: 24 95  7 69 86 25 92 46 58  5 | 36 34 81 61 73 59 31  7 86 95 60 66 41  5 69 47 14 56 82 22 17 57 33  6 91
Card 167: 32 87 68 97 19 13 35 58  3 56 | 32 77  6 36 73 46  8 55 25 67  5 47 97 30 17 80 92 59 39 91 29 34 86 70 33
Card 168: 60 42 11  2 69 36 93 94 73 49 | 43 27 21 54 13 51 37 95 10 69 28  4 80 66 17 35 85 91 44 15 45 68  5 63 75
Card 169: 10  8 68 48 56 86 54 16 43 28 | 21 60 40 31  8 44 71 76 15 84 68 39 61  9 33 51 79 11 26 94 66 97 35 54 37
Card 170: 55 89 61 59 79 83 15  6 81 92 | 79 68 37 92 49 23 28 77  3 81 62 64 19 72 47 43  8 82 17 99 31 32 88 90  4
Card 171: 33 80 93 38 44 21 77 48 60 12 | 47 12 62 96 15 86 42 76 75 19 70 25 31 98 24 58 13 56 66 88 26 40  1 91 57
Card 172: 24 28 37 98 12 95 17 91 11 86 |  6 78  2 73 51 94 66 47 57 91 63 83 49 56 36  1 20 64 44 41 45 19 74 14 53
Card 173: 29  6 78 72 98 44 75 79 50  3 | 80 20 99 39 48 59 14 88 15 38 65 51  8 25 94 68 18 90 93  1 71 85 35 34 19
Card 174: 98 56 12  5 84 13 93 83 73 58 | 47 53 75 62 13 63 93  7 76 91 28  5 73 98 58 21 85 12 11 14 56 22 25 35 83
Card 175: 47  1 24 46 98 41 95 69 73 49 | 95  1 98 11 56 46 48 24 41 69  8 14 61 64 45 73 47 84 89 67 31 77 25 49 28
Card 176:  5 15 51 75 84  9 89 82 68 97 | 38  3 84 30 72 67 22 97  5  6 75 14 87 44 65 89 37 15  9 51 39 82 27 68 34
Card 177: 60 16 73 50 47 54 28 11 71 49 | 66 50 73 34 89 54 57 59 56 11 60 79 16 19 10 86 71 28 47 49 63 43 38 46 25
Card 178:  5 81 28 25 33 71 88 92 41 46 | 25 46 33 91 96  6 12 52 48 39 78  5 88 73 41 71 76 28 42 92 94 81 98 26 93
Card 179: 73 75 39 27  6 58 32 56 76 86 | 73 11 88 78 22 74 75 27 86 72  6 57 68 39 71 56 58 29 20 89  1 42 61 76 32
Card 180: 46 13 94 98 89 97 11 27 38  7 | 72  2 98 13 89 48  1 32 94 53 97 92 40 20 60 15 58 16 10 77 11 35 46 27 38
Card 181: 43 11 50 81 67 39 94 54  9 20 | 81  2 52 36  1 95 49 24 84 64 10  8 28 22 17 63 46 88  6 54 50 68 93 91 57
Card 182: 92 21 50 19 63 48 70 53 43 91 | 52 51 81 66 79 18 74 68 87 33 20 17 78 27 47 57 65  8 12 46 25 48 50 61 99
Card 183: 83 57 14 93 56 58 12 28 23 52 | 52 74 25 15 99 17 85 90 28 42 81 14 75 56 31 11 46 37 57 50 83 12 58 93 23
Card 184: 52 28 15  6 64 65  4 57 47 11 | 78 83 12 11 48  8 73 77 85 68 54 90 60 95 98 37 46 10 22 61 40 62 64 92 74
Card 185: 46 47 29 12 74 64 48 91 17 57 | 43 74 11 44 69 47 62 46 23 80 65 35 64 48 76  6 57 60 54 13 16 79  9 71 30
Card 186: 18  4 76 47  9 55 71 28 54 26 | 47 42 18 71 62 30 49 54  4 57  9 39  7 51 76 19 55 93 20 92 74 26 28 45 65
Card 187: 63 13  6 78 71 25 21 93 23 69 |  8 69 76 71 60 23 93 49 78 13 70 51 35 61 52 94  6 63 31 66  3 77 25 21 88
Card 188: 53  9 33 79 12 76 45 96 14 73 | 96 38 13 50 85 76 27 30 79 91 70 33 73  4 14  9 60  5 45 53  2 47 12 98 42
Card 189: 79 96 84  3 20 34 81 60 90 61 | 63 34 18 66  9 27 67 45 31 60  8 35 76 61 90 20 68 38 96 84 74 72 55 86 50
Card 190: 15  2 62 58 27 51 48 83 24 73 | 92 14 99 10 54  3 34 69 56 84 25 80 64 96 30 18 38 61 50 70  6 16 95 63  4
Card 191: 13 27 45 73 70 71 14 41  1 44 | 62 72 42 50 81 84 94 71 19 39 95 99 83  9 48 53 11 31  2 90 41 59 49 91 29
Card 192: 34  8 47 14 17 76 67 77 84 37 | 45  4 79 44 39 32 80 43 81 60 31 97 68 82  2  1 67 92 33 88 58 71 65  8 49
Card 193: 35 66 23 67 26 51 43 97 93 38 | 75 48 27 37 25  1  8 80 39 20 40 61 42 99 83 10 74 65 56 21 28 57 89 24 68
Card 194: 70 85 93 67 36 43 44 13 97 19 | 92 64  4 99 29 56 32 96 66 37 84 82 48 23 80 91 40 49 51  1 12 54 58 15  9
Card 195: 50 66 31 16 57 32 69 52 93 92 | 49 18 66 95  7 90 34  5 43 46 67 16 33 89 26 24 77 11 94 38 70 45 51 42 55
Card 196: 66 51 20 55 72 46 56 61  4 18 | 17 93 83 77 50 42 25 12  8 73 18 21 87 48 45 36 30 59 78 47 38 10 24 98  1
Card 197: 16 39 31 67 74 41 36 85 10  8 | 66 50 24 93 20  5 25 80 99 73  3 83 71  4 81  2 10 32 89 28 13 37 82 52 88
Card 198: 10 84 73 59  1  2 61 92 56 88 | 72 66 16 83 46 67 57 86  9 52 13 44 49 11 97 45 91 29 89 33 81 71 76 18 93
Card 199:  4 16 88 10 75 98 93 56 81 89 | 52 63  1 42 78 91 58  2 66 82 76 17 28  6 16 85 93 77 34 75 72 88 89 96 68
Card 200: 15 76 53 28 70  2 63 83 23 45 | 40 71 64 88 31 96 10 57  6 36 53 67 13 24 84 20 42 16 29 27 39  1 63 91 51
Card 201: 16 46 59 31 80 26 78 19 24 95 | 58 33 31 97 80 54 59 60 46 63 26 42 84 78 40 95 88 24 16 43 19 45 62  3 83
Card 202: 58 41 26 24 62 79 90 39 78 83 | 39 75 45 79 58 80  8 26 11 35 90 25 41 54 53  6 83 78 46 62 68 24 47 99 37
Card 203: 14 90 66 42 57 26 24  1 84  2 | 71 45 57 66 24 75 14 90 84 26 64 44 42 15 55 78  2  1 69 30 13 19 25 11 91
Card 204: 47 90 95 61 25 50 32  3 31 57 | 39 98 15 30 40 82 81 79  4 46  3 26 32 97 31  8 76 69 53 20 33 47 99 55 48
Card 205: 29 18 52 42 30 84 90 94 46 44 | 68 94 12 24 74 98 44 34 42 30 85 66 52 40 32 14 22 87 84 46 26 35 31 29 90
Card 206: 53 59 99 33 81 60 85 58 43 77 | 90 77 95 92 57 79 59 60 31  5 37  8 44 35 33 73 69 63 23 16 17 13 25 50 58
Card 207:  9 91 26 59 87 90 22 12 51 99 | 40  9 85 99  1 11 93 61 56 82 90 91 59  6 12 31 86 76 51 87 92 35 19 34 54
Card 208: 54 92 81 40 30 51 72 70 84 52 | 30 76 74 92  7 81 51 21 35 99 77 80 94 78 16 86 70 31 46 90 44 14  6 52 40
Card 209: 49 44  6 38 33 83 75 95 39 72 | 46 30 75 17  1 28 15  9 44  6 16 89 78 22 95  2 72 59 38 36 25 43 42 41 67
Card 210: 10 40 91  1 46 69 92 45 31 41 | 35  1 55 31 30 14 96 91 92 69 45 20 40 77 15 82 17 79 46 44 56 23 53 38 73
Card 211: 67 27 31 84 61 64 58 68 21 74 | 21 52 88  6 73 36 58 89  1 46 18 17 86 85 28 23 27 25 29 78 79 50 90 30 70
Card 212: 61 14 31  4  8 43 52 37 56 45 | 70 90 64 58 99 82 21  3 38 74 67 59 17 86 36 51 49 69 68 45 71 10 72  1 20
Card 213: 51 69 54 42 23 68 27 98 47  4 | 20 99 66 15 61 43 62  3 60 75 90 47 16 40 80 51 13 87 83 94 49 42 69 74 24
Card 214: 38  6 78 12 88 14 51 82 29 75 | 70 16 48 74 19 29  5 71 40 93  1 18 83 27 76 59 44 63 58 64 69 23 73 65 54
Card 215: 67 60 86 35 17 62 55 27 54 70 |  9 26 45 56 43 72  1 32 25 88  5 87 73 81  2 34 57 13 61  3 84  4 33 92 59
Card 216: 18 71  4 89 17 31 63 28 25 20 | 67 97  6 76  3 95 30 75 99 26 27 32 21 73 86 31 59 98 85  1 54 93 94 69 66
Card 217: 54 65 75 13 46  8 37 25 95 82 | 57 14 83 33 69 47 68 64  4 21 17 92  2 48 30 70 62 50 36  7 72 66 41 85 97
Card 218: 68 97 66 41 88 16 65 31 23 63 | 29 67 55 64 91  4 12 83  1 40 74 94 58 81 98 82 78 70 26 34 96 14 36 50 56`,w3=`seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`,A3=`seeds: 28965817 302170009 1752849261 48290258 804904201 243492043 2150339939 385349830 1267802202 350474859 2566296746 17565716 3543571814 291402104 447111316 279196488 3227221259 47952959 1828835733 9607836

seed-to-soil map:
3680121696 1920754815 614845600
1920754815 3846369604 448597692
193356576 570761634 505124585
2369352507 2535600415 31531965
2400884472 2567132380 1279237224
0 459278395 111483239
698481161 97868205 361410190
1059891351 0 15994868
111483239 15994868 81873337

soil-to-fertilizer map:
1633669237 1273301814 72865265
2398515176 2671190790 99210785
2397916384 3018946373 598792
4034325916 3061716397 20017393
3298612516 3793795301 14249501
4030007411 3051046904 2833129
1906984482 224872691 14620134
864506893 1590633724 149044542
1029530319 442871336 36727018
1921604616 770934113 68546178
3560536321 3114405501 28822192
1019762634 1263534129 9767685
3852235341 3579014714 60339892
2385228698 1577946038 12687686
2234322470 239492825 150906228
0 170310676 54562015
3208946111 3808044802 89666405
1209615399 839480291 424053838
4032840540 4041982568 1485376
2497725961 2174737461 293042810
2002543511 1346167079 231778959
3312862017 3475611771 103402943
318739997 1739678266 354749094
1013551435 3012735174 6211199
4014277153 4160859076 15730258
3589358513 3143227693 230682158
1990150794 2467780271 12392717
3051046904 3081733790 32671711
3820040671 3761600631 32194670
148429321 0 170310676
673489091 2480172988 191017802
1066257337 627576051 143358062
2790768771 2770401575 242333599
3091554979 4043467944 117391132
3416264960 3897711207 144271361
3912575233 3373909851 101701920
4072291714 3639354606 104297620
3083718615 3053880033 7836364
54562015 3019545165 13557205
1759006785 479598354 147977697
68119220 2094427360 80310101
1706534502 390399053 52472283
4054343309 3743652226 17948405

fertilizer-to-water map:
0 1095885172 129797665
2661548513 1044284418 17872363
3282164642 3678907615 214830258
1440687421 2218635146 325889720
3496994900 4208791298 25912548
3253828209 4136945159 5561683
1797056017 864689597 109403664
3259389892 4186016548 22774750
2578517508 1225682837 83031005
3193832718 3618912124 59995491
3695649169 3214450646 211194594
820325042 974093261 70191157
1284591017 1074888739 20996433
2929761569 3893737873 85668135
1305587450 2605461705 73959171
2168339930 1062156781 12731958
2465234843 2135490203 52666067
3522907448 4108091872 882860
3523790308 4255675252 39292044
2517900910 1308713842 60616598
3563082352 3176039879 38410767
3015429704 3979406008 128685864
1913427402 2131043562 4446641
2235159285 1419841841 190190495
3673886186 4108974732 21762983
891504291 1610032336 393086726
3927815169 3425645240 193266884
4121082053 3002154636 173885243
2084864581 2004107154 83475349
1917874043 557612753 69524983
890516199 2003119062 988092
766355924 2551492587 53969118
1379546621 0 61140800
3187625274 4130737715 6207444
528804063 627137736 237551861
1987399026 230411125 97465555
1906459681 2544524866 6967721
2184647884 1369330440 50511401
2425349780 2091158499 39885063
2181071888 2087582503 3575996
3144115568 4142506842 43509706
1766577141 2188156270 30478876
359533738 61140800 169270325
129797665 327876680 229736073
3906843763 4234703846 20971406
3601493119 2929761569 72393067

water-to-light map:
2375927917 1595026882 126334140
1307603095 818620477 43777869
2050676589 1855896418 112224406
3618302244 2909504698 119958941
3078570200 3088215627 6211083
3084781283 3094426710 141266337
524666822 53020621 149058240
673725062 862398346 147671362
2364320682 2577001713 11607235
1941578413 1584221500 10805382
2162900995 2536766467 40235246
162015400 237365123 4480592
821396424 241845715 141336168
166495992 1138498800 212882164
4277433486 4220367555 17533810
3226047620 2229635217 307131250
2909428734 1968120824 34606070
1885573816 3954749082 56004597
2711875933 2868267590 41237108
0 726306378 92314099
2944034804 1721361022 134535396
1584221500 3392008740 301352316
962732592 34415039 18605582
2235705153 2101019688 128615529
4252936467 4237901365 24497019
92314099 202078861 35286262
981338174 400041457 326264921
379378156 1010069708 128429092
3591930858 3693361056 26371386
3785017329 3719732442 235016640
2502262057 4010753679 209613876
3533178870 3029463639 58751988
3738261185 2821511446 46756144
4020033969 2806534555 14976891
1952383795 2002726894 98292794
127600361 0 34415039
2753113041 3235693047 156315693
507807248 383181883 16859574
2203136241 4262398384 32568912
4035010860 2588608948 217925607

light-to-temperature map:
2137189745 1335050925 100355790
639139367 2440321747 987829
1663612748 1778059435 153830272
1122754252 1950103191 82536600
1929621334 1199531530 135519395
1286703174 2032639791 207137687
245313533 981575774 217955756
2597564380 2824691125 293777778
895004176 331442633 25226735
1493840861 236388681 616173
1494457034 764560381 107637728
1817443020 1435406715 112178314
1205290852 356669368 33552643
474799702 0 164339665
2341054397 2260378974 100255179
1043066658 2360634153 79687594
125852143 390222011 119461390
3924383937 3130691909 13614218
2467721984 3747288823 76649669
2065140729 164339665 72049016
920230911 1673437172 104622263
640127196 509683401 254876980
1024853174 1931889707 18213484
2331983314 2251307891 9071083
2237545535 237004854 94437779
3912160931 3118468903 12223006
1238843495 933716095 47859679
3326002417 3517222025 230066798
3556069215 3144306127 241363224
3797432439 4180238804 114728492
1602094762 872198109 61517986
2544371653 4127046077 53192727
2891342158 3823938492 303107585
463269289 2239777478 11530413
3194449743 3385669351 131552674
3937998155 2467721984 356969141
0 1547585029 125852143

temperature-to-humidity map:
2687600833 2313887435 187105587
3281196981 2291603041 22284394
1771250828 1899269239 314167725
784031720 478456148 306959384
2605226464 1771250828 58348072
2085418553 3793564740 111907603
1090991104 785415532 575136195
3437652344 1829598900 69670339
2874706420 2500993022 389039942
3303481375 3905472343 134170969
305575572 0 478456148
3263746362 2890032964 17450619
2527060387 2213436964 78166077
2428623843 3695128196 98436544
2663574536 4270940999 24026297
3507322683 2907483583 787644613
2197326156 4039643312 231297687
0 1360551727 305575572

humidity-to-location map:
1919184105 1156349110 51114849
4031284281 3411510751 25609498
0 171183359 79004094
1253227229 2072782209 122019778
4056893779 3437120249 136289693
3402931364 4156827458 101778985
84557792 1207463959 134801591
635909965 1371746366 266495395
4029464617 4127764171 1819664
4193183472 2857352625 101783824
1375247007 2200355685 41445634
1996492203 0 171183359
3601595563 3699895117 427869054
2218993186 1133540977 22808133
3217192942 2959136449 140385316
2987922009 4258606443 9236491
2628749093 2543337773 86365212
2167675562 369831582 51317624
3504710349 2446452559 96885214
902405360 421149206 108869392
3357578258 2811999519 45353106
1196458443 1638241761 56768786
1178674352 693035436 17784091
1970298954 530018598 26193249
2868723842 3099521765 91954544
1522874936 895259169 18612073
2841599480 4267842934 27124362
1880563756 1695010547 38620349
1011274752 913871242 137918784
219359383 556211847 136823589
1785350971 250187453 95212785
2960678386 4129583835 27243623
540622614 1977494858 95287351
356182972 710819527 184439642
1498443592 345400238 24431344
1416692641 1051790026 81750951
1541487009 1733630896 243863962
79004094 2194801987 5553698
1149193536 1342265550 29480816
2997158500 3191476309 220034442
2715114305 3573409942 126485175
2446452559 2629702985 182296534`,S3=`Time:      7  15   30
Distance:  9  40  200`,H3=`Time:        54     94     65     92
Distance:   302   1476   1029   1404`,V3=`32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`,X3=`88223 818
66JQ9 398
6T9AT 311
53TT3 43
J6266 762
5TTAA 647
44JTT 779
T4T66 496
6AAA3 383
69K4Q 232
55KA5 436
666JJ 479
75J85 835
27379 323
592Q3 565
33777 438
75224 136
2QQK2 116
JJQK9 219
9Q77J 46
68686 177
7A7AA 336
J4K3A 582
46QA9 11
5AJ85 712
AJAJ4 264
AK2AA 756
K49KK 597
9J882 678
28QQ8 405
93333 401
KJTQJ 281
K78Q4 941
T8J56 377
Q6TQT 440
T44T4 792
6KK66 7
2JT22 144
K6656 665
6JQ4K 87
5J4JA 419
3A2J4 325
47T47 291
3J7Q3 190
4A527 234
223K2 917
233J3 912
844QQ 268
TKTJK 125
22298 62
T6J59 258
99K69 896
8J878 834
J5655 757
4J26T 255
4K3K5 448
229J9 889
22372 702
6Q73T 832
Q9892 919
QJQ7Q 898
JTTT5 173
959J9 543
AAAA5 858
3Q5Q6 159
23372 39
453AK 572
A6A82 410
Q88Q8 241
J675A 348
KQQ2Q 643
KJK52 981
A9989 631
33633 64
44TJA 274
A49A4 59
AKAKA 864
4333K 184
8T843 238
54594 429
J222J 78
5Q655 374
5Q8KA 147
J8Q2J 278
29293 387
T8TT4 15
T7K36 481
43776 782
24292 369
7K3Q2 551
42T2T 495
5Q5QQ 761
QKKKK 312
22J9A 948
T552T 657
75Q77 45
35296 931
46266 157
9J4KK 973
A4A77 269
36T6T 235
44483 386
29452 924
66Q66 723
4TT86 717
544AK 956
QQQ9Q 75
JJ989 708
AKKA9 842
2777K 519
Q569A 831
65838 996
9AAA9 128
Q722Q 95
KJ2KK 807
8TTKK 989
393J9 306
44J44 263
85335 70
54499 500
KKJ44 462
Q44K4 636
Q3392 870
8J896 540
8QQ63 485
37955 209
6K5K8 35
58JKT 307
66QQ7 993
Q4K98 937
K2J42 583
45333 965
TAJ75 74
T548J 114
J5599 111
9J557 79
49JK3 669
T9T9T 613
J5TK6 69
TQTJT 223
98746 560
3QQ33 271
7A3QK 692
AQ347 32
653J9 638
J8J48 635
94449 873
44449 957
T4TTT 224
949T4 695
Q8Q4Q 376
75QJ5 130
K8K68 988
84J45 441
82577 443
T4383 812
973T2 1000
TKK4J 781
K6J77 911
8Q383 491
333AJ 230
53555 492
68666 183
666Q5 178
26KKK 379
77TTQ 978
92992 907
T2562 65
K7J3K 324
67365 400
2222J 331
AA2AA 933
8AAAJ 790
47474 105
48T43 203
A5AJT 736
9J6TQ 162
TTTT6 700
97987 851
K5788 439
Q9399 591
34976 406
3434T 486
6A66J 22
9J9TA 822
QQ66J 632
77755 590
5564A 345
J5A75 186
29785 828
88844 882
38KK6 955
66TTT 349
78TKK 969
46344 881
7TT77 561
6JTTQ 997
QA8QA 921
8Q2T4 625
67T4A 403
436K5 214
6K7T8 26
8A98K 197
T3K84 141
5J454 344
74Q69 642
KJ555 20
5A4A8 129
Q4A5J 510
K2KK5 126
T6686 853
7Q774 867
99696 459
7Q3TA 770
9J966 117
T4T5T 494
828K2 236
54726 38
88T82 704
73977 502
535A5 294
K9K5K 418
8TT9J 115
Q2376 480
5A9T7 257
KK9KK 673
33KK3 427
4A575 974
JT94J 515
999A9 83
Q342A 938
8JKAJ 574
5664J 775
642A4 101
33K28 916
K28JK 176
QQQQK 967
4A4Q4 616
T578T 552
46474 174
QQ83J 837
22287 23
JJJJJ 725
KK55K 120
AAQA5 555
72737 37
Q82JQ 518
77667 464
QJAQA 367
K323K 52
777T4 751
74777 452
839QJ 124
8Q989 326
5K5JA 711
777J7 396
46AJT 767
88669 637
JTTKQ 34
JKK9K 251
66226 163
J3343 605
998J5 534
AT72K 950
7J757 608
84TT4 460
99955 315
TK5KA 60
T82JQ 991
46866 661
T8TTT 19
25K65 577
QK3J6 284
7A977 390
KKKK2 774
J97A7 143
QK545 655
AK4T3 454
374K9 300
AJATT 614
96KA7 819
5525A 253
A995A 61
66Q6Q 36
4J253 282
3JK9Q 385
44JJ4 196
KKKKJ 166
K8KK8 299
J9979 179
93999 738
47T3K 726
A6J45 182
JT322 421
35J36 545
838TK 434
6AK6A 838
4JT44 929
J5955 473
K4A47 611
QK472 40
AJTTJ 106
4J9TT 82
4QQ4Q 316
38KA8 836
96K8A 586
J286T 318
2JJ77 778
4344K 528
866AA 215
68676 56
934J3 563
44J45 355
4J443 804
5QQ58 185
844AK 53
3T333 909
TJ2K5 860
AAQ3A 395
66646 272
54T8K 676
A4Q25 67
94J49 696
42KK2 267
KQK8T 985
4QJ29 559
83686 244
53292 940
QK6KK 503
78777 660
J4424 194
8Q46Q 699
72776 368
KA553 926
44454 627
52599 86
242A2 337
49955 467
QJAQK 847
J22AJ 259
2QQ2Q 228
K33KK 833
95559 900
262AJ 250
9AQ34 604
8Q99Q 788
JAQT9 908
Q9432 47
T3346 619
8K97T 30
J62J6 240
28888 302
K96K9 320
9TQAT 960
J9877 612
88878 556
6QQ5T 732
6JA89 681
3JJ5T 435
QQ2K7 77
ATTTT 283
QKJQ8 629
53353 276
A2A33 805
383AJ 797
J684K 169
44J4A 164
KKK5K 392
7988J 24
Q5446 885
7777A 713
24386 839
J77A7 537
KTA7Q 16
6TTJJ 677
9Q93Q 523
22322 280
2QK58 984
65795 6
T9TTT 763
66A67 58
KJ994 743
Q7KQQ 222
4A424 270
KQKQK 694
843Q4 287
5QQAQ 330
Q4449 593
QQQ4J 131
2222K 132
28287 402
J46A4 707
24242 982
6686J 733
8T9Q8 175
45J3Q 442
6Q48J 444
3TTQ3 737
4TT4T 127
5555A 399
AKT29 872
TTT7J 340
J44QQ 89
57A3Q 453
QJAJQ 682
7JQ74 450
J55Q2 342
59267 773
8J884 652
33383 456
K68JJ 600
6JJA4 156
T8T8J 771
62222 942
92999 947
55886 946
75A77 601
3QK54 945
A2686 531
39Q38 687
TKKTT 360
8886K 339
7774A 202
T2222 798
3786T 171
547A6 623
22T2T 170
T2688 201
KJ7A4 902
9322T 922
74Q6A 666
J72T7 511
44A44 72
Q776Q 411
4K4K8 588
K43JJ 760
AAAA6 714
52J55 8
3K94A 976
AKJTQ 729
65J66 94
9KKK3 445
6ATJT 876
T2529 432
68A79 397
82J4Q 566
53557 472
83383 356
AAAQA 380
KTKK5 357
5T24J 746
6777J 289
TK9K9 843
44744 213
3KTKT 728
J739A 659
T33JJ 928
84QJQ 952
KKK67 378
97979 954
K52T4 332
75QA6 863
ATTK2 603
33Q33 207
4AJ24 9
5TTK5 949
TTJ9T 663
77277 645
434QQ 364
JJJ8J 527
T479Q 706
7A77K 413
TK486 640
KKJ59 17
799Q9 97
33646 447
2323J 477
K2758 986
T5TT5 547
9956Q 609
TK753 149
87Q79 193
JQQQQ 512
44988 871
AA4AA 789
J2564 347
23J68 890
KAAAT 684
K9KTK 334
TTTT3 857
99899 783
426J3 865
8J288 689
7QT8J 122
73679 649
653AQ 899
9992T 544
66TJ6 416
382A9 252
52J54 273
J665T 630
82222 221
TT3T3 262
44748 927
T75KQ 85
44554 587
4866J 754
47T6T 92
899TT 4
999JJ 576
87898 868
45T32 217
J54T4 977
JAAJA 721
43KJ3 883
4888K 110
5A544 546
J6783 220
85956 63
54334 137
J9384 688
94429 249
QQJA3 803
AA66A 180
99K9T 28
535J5 607
8AA88 341
862K2 382
8J888 314
25282 796
8J8J8 488
88Q35 188
J99Q9 840
5K832 475
3333A 653
A4A4J 539
999T9 370
77J73 310
JJKKJ 964
J9856 584
54J9K 727
22777 231
6Q274 469
TTTTJ 408
6J2Q2 33
AJ867 484
55J55 892
K7593 971
5AT5T 474
A2KKA 113
24222 906
93J33 875
Q43AJ 972
88JT7 569
5Q8K8 888
J7T53 747
99986 29
5JAA5 968
97A75 468
A5A58 449
77455 44
88T8A 820
42732 455
6A66A 575
888KK 358
TT966 780
2KKTT 150
Q5J5Q 718
53J37 827
A8J42 461
K2863 548
9TT99 216
33343 802
TTAAT 995
K4T9J 786
TKA39 785
QQQQ3 766
97Q7Q 903
QJQ57 821
92699 598
49273 529
2245J 731
J7826 701
2K724 983
88KJK 769
55592 815
QK72J 920
3QQ29 446
ATTJT 650
K93AA 303
T63TT 507
93993 810
858J8 852
2T5K9 165
3TJ33 1
93JTK 683
999K9 672
J6663 628
443T4 42
QQKT7 407
AA3AA 242
K9223 624
QAQTA 570
39TJ3 490
22332 54
82274 848
2549T 210
K7J55 466
JK3AT 285
Q42AQ 50
2KQTK 730
T5A8T 71
523JT 470
8T4AQ 433
TT3A6 664
555Q5 793
62227 932
TT8J2 777
5Q5TT 91
83A33 388
666J6 963
2J68Q 415
5TQ37 12
J8428 246
JT7T9 953
8K269 133
755Q7 530
8777A 962
K55K5 394
84828 195
37246 679
6796K 724
QAA2A 844
AT47Q 951
57T5K 121
35T85 227
94TJ6 809
4J6J6 685
J5545 138
K653T 646
T267Q 414
JJ559 535
3K59K 25
5AA23 412
AJAAK 465
Q7Q77 595
9A99J 722
7QQQQ 3
KTKKQ 536
TTJJT 393
T2K26 905
4AQ4Q 894
88885 740
QAQ8Q 96
AQQQA 516
78877 748
447AA 200
42JQQ 617
33J33 776
88787 155
2K688 734
J5K53 886
Q88QQ 850
266Q6 167
8QQ84 644
TTTJK 610
K4936 958
24K3A 698
55T55 697
Q5353 146
339QQ 752
9Q584 84
2J822 497
Q7T25 365
57JTQ 140
A847T 458
82Q7T 80
97779 293
66K88 675
66446 633
T6KTT 934
966J6 849
22T53 854
88AKK 514
K5J58 305
88222 298
88K6J 526
528Q8 936
A2A3A 208
K49A9 191
4JJ47 319
5J858 108
JA345 425
8T2Q6 715
AA999 990
Q96J9 879
84J44 742
A3A3J 806
AATA8 557
AJ77A 504
36753 27
65686 66
J76A9 279
3T63T 913
9ATJJ 568
K64K4 580
8888K 668
6K9J6 134
23533 431
65656 705
T3T43 979
79899 48
QQQKK 795
7TA7T 709
KQ627 409
66669 265
K8732 404
K6663 992
QJQJQ 765
88383 855
JT4TJ 944
26QQ6 874
KK6KK 501
6K7K2 451
3TAK7 772
TTJ55 328
6QJ66 424
56577 428
6T6T6 816
J9J2T 375
J66TT 923
TK2JQ 602
QT7T8 233
QQ9Q9 381
447KK 959
AJ6AA 107
679T5 895
2J559 533
9JKAQ 489
84Q92 521
KQT83 884
66946 648
329KT 198
5588T 925
TTTT5 99
637JT 218
9K4AJ 918
7JT5T 914
24966 513
76J3Q 13
74994 260
QQQQ5 585
777TJ 112
24JJ2 286
Q4Q77 88
9A559 626
A63JK 987
7T776 719
24A34 618
J2722 878
T2TTT 327
664QK 904
A5663 160
J9Q65 187
J333K 457
35355 476
55757 558
T3A48 856
QQ445 261
2JKK2 296
Q74Q3 758
5KJ5K 353
22J24 651
99366 256
Q7Q59 172
AA9JJ 2
9999J 288
77779 313
394TA 247
J55Q5 532
TTTTK 384
68868 749
56TJT 389
J555J 5
T577J 304
A7T96 290
7T99A 391
K7KK7 621
KQT72 483
JAAA2 846
9QK26 710
23233 750
T33T2 352
42444 351
4224J 841
574J5 31
A744J 525
484KJ 371
44242 68
97J26 482
KK882 153
32689 139
429AK 755
Q5382 102
84Q88 487
5J645 622
99J34 361
759QA 581
88585 10
4JT94 338
75A44 14
5557J 363
KK244 522
66636 277
799T9 509
37J93 142
J6522 359
573KJ 98
63TA3 90
QQQ8Q 825
549QQ 538
99T39 498
AA37A 830
JJ9JQ 211
Q2T88 799
JA58K 346
6TQ3T 297
85385 720
A5AA6 123
75588 794
Q7979 768
57KQQ 366
882J2 554
T9K65 735
8T787 550
T5JJT 615
22832 564
96JT9 859
QT22J 716
8T6T6 335
J2474 541
AT8AQ 578
Q7QQ4 573
56J7K 869
46477 109
68858 579
74J78 961
A8A8Q 641
4AA44 662
TTT56 791
94292 229
AAJ87 703
4A6K6 901
487T2 656
JK626 800
99996 998
84448 520
3QKT5 845
QA4TA 517
QQTTK 226
K995K 596
77393 76
99JAA 437
79K59 205
9K22K 824
8389A 741
755TT 18
77757 970
A2777 634
J795Q 148
24425 690
7Q7Q3 81
5TT89 471
4Q223 243
AAAK6 248
Q6443 620
58668 478
5K26T 493
66J46 999
46348 745
62KTK 930
JK377 893
Q6K98 119
5T83K 542
77332 658
44K44 422
K6K6J 606
75357 199
99946 980
89989 372
22J25 103
47J47 814
K7K77 667
93883 670
2QTT2 135
Q693K 753
A5JT9 237
38KKJ 571
66AAT 254
36636 354
9AT3J 417
88899 212
QQ3Q3 599
J265J 100
55KAK 866
57Q2A 654
6T266 292
954J2 245
5TT65 671
3T693 21
ATAT7 994
K8777 51
5JQ92 808
95A75 343
42K6Q 813
4J4TK 880
77768 266
9J929 549
653J5 592
AAQKQ 275
59956 877
5A2J6 317
J9QT3 784
QAQQQ 887
KKK4K 301
J777J 499
QQQ6Q 910
88898 154
4Q553 151
88J98 189
95J66 161
87785 589
628J4 935
58Q67 362
55522 430
44555 817
QT792 939
85754 158
TKKKK 861
AAKK3 966
56JT5 686
77776 181
K5553 49
85855 508
64444 862
5TAQ8 739
97KK7 118
7J566 321
99944 505
TQTTQ 463
K4528 680
298K2 329
66656 691
55222 152
9QTTT 891
64KJ9 801
Q7737 639
73533 57
55524 204
95999 322
TA7QT 423
AAAKA 829
66QJ7 55
77353 897
47A38 333
88A77 192
88T8Q 567
74A68 308
55556 811
9AJ6K 975
QQQ4Q 239
37Q33 506
737AJ 915
222J9 420
7755K 562
4T7J4 93
KJA84 168
66463 693
KATTT 674
KT555 295
8J459 206
28882 426
Q27K9 73
53442 943
96678 553
K34T2 309
A555A 104
A7AK2 764
J8Q7Q 225
TATT3 373
63T48 594
93933 759
6Q78K 145
KA29A 823
AAJAA 744
85A26 524
7777K 350
T6363 826
J333J 41
55AA6 787`,P3=`RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`,N3=`LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`,y3=`LR

11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)
22A = (22B, XXX)
22B = (22C, 22C)
22C = (22Z, 22Z)
22Z = (22B, 22B)
XXX = (XXX, XXX)`,U3=`LRRLLRRLLRRRLRLRRLRLRLRRLRLRLRLLLRRRLRLRRLLRLRRRLRRRLRLRLRRRLLRRLLRLRLRRRLRLLRRRLRLLRLRRRLRLRRRLRRRLLRRRLLRRRLRRLRRRLLRRRLRRLRRLRRLLRLRRLRRLRRRLRLRLRLRLRLRRRLLRLRRLRLRRLLRRLLRLRRLRRRLRLRLRLRRRLRRLRRLRRLRRLRRLRLRRRLRRRLRRRLRLRLLRRLRRRLRRLRLRRRLRRLRRRLRRLLRRLLLRRRR

GSC = (CLG, RPF)
NTQ = (RMN, HLB)
LTX = (XFB, CGP)
RHK = (KRS, TPX)
KPK = (PRP, MKG)
NKV = (BHD, DQJ)
JNK = (RXN, BQX)
JXJ = (JFK, CCS)
LDC = (JBF, PHQ)
QRS = (VPM, FDD)
XRL = (SQT, VGH)
VQN = (BRP, VCF)
NBP = (GKC, HKC)
FCH = (KLN, RQV)
BQT = (KKX, RNZ)
SVN = (JGN, FSL)
FPL = (SDB, VQV)
RMQ = (CCV, JST)
DRB = (MSM, VHX)
DDF = (GHC, PSX)
GLR = (LFR, THG)
DGL = (JGQ, DHD)
RFQ = (BXJ, SRQ)
XTG = (XBB, TQJ)
PCL = (DDK, GNC)
FVG = (JKL, CRC)
GXQ = (CBS, RJS)
SDR = (LFR, THG)
KBM = (PCV, DBP)
XPJ = (GCS, GJD)
XRG = (LNK, KQL)
FPQ = (TPG, MQQ)
MSM = (LQG, KRF)
LFR = (THX, GFC)
KQK = (FQH, FCH)
HPH = (HHJ, VKM)
DHC = (QGV, FNH)
PQQ = (KKX, KKX)
TNQ = (LXD, KNG)
QNB = (TLX, VLF)
VKX = (BJL, GQB)
DTM = (KRQ, CLV)
BHS = (LFH, TVV)
MCJ = (BFJ, FCS)
CGQ = (MRH, SBD)
FBM = (RXQ, CFR)
NLQ = (QSD, LFZ)
VSK = (DGR, DFT)
HJG = (TFV, XJL)
XFB = (NKP, FBF)
JGL = (RGS, KTD)
MHS = (BNM, KSK)
RMG = (QNB, MHL)
XSX = (XBG, GVD)
FMV = (LVV, CQR)
CRK = (TRN, KKG)
VQV = (BPB, RFL)
THN = (QVH, DVT)
GNT = (RGS, KTD)
DCH = (GJD, GCS)
KTD = (LSF, MJC)
BDC = (FDH, MSK)
PRQ = (JGL, GNT)
PSR = (DHF, FPL)
XBB = (FRR, GSC)
SFB = (HGX, DFS)
VTJ = (HFH, KXN)
KJV = (TKP, THL)
BFF = (PLM, DGC)
VBV = (XDK, LLS)
KMV = (XDS, VQT)
JPD = (BHL, QJF)
DGR = (MTT, JCG)
PGK = (VCX, NLQ)
BFJ = (FHX, QFR)
VSF = (VKX, CTP)
PFJ = (BRP, VCF)
XVN = (VCX, VCX)
JQG = (SKM, THM)
CXS = (CRC, JKL)
RFL = (NNT, DMH)
RBH = (KHM, PLR)
PNT = (JCQ, XSR)
XHK = (GJK, BLQ)
CFR = (FHC, CTD)
JPP = (JFD, FPB)
RRT = (VVM, NFB)
RPF = (TKG, KVK)
JTF = (FBT, DLL)
PSX = (PDS, JPD)
TCH = (TDN, FRB)
RHT = (VNR, NHB)
TQJ = (GSC, FRR)
MCK = (NJD, XDX)
NPH = (XQF, NSL)
LQQ = (LCM, PHH)
VSV = (SFT, MVL)
KRS = (TGR, TGR)
DRR = (JXT, TSF)
QRQ = (NTG, MTL)
PJB = (RMN, HLB)
VFC = (KPH, PKM)
FHC = (CJM, FTQ)
DRC = (RBC, THN)
TRB = (JHX, LSC)
GCS = (TRB, MDB)
RCG = (MFT, FXM)
HCB = (LHB, JGH)
BFN = (RMG, KJH)
TPG = (NGM, XHQ)
JCS = (VGS, NSN)
SGT = (LHX, MPF)
NXM = (VPH, KGV)
XNC = (LTX, PHJ)
DNT = (KLS, RNC)
JGN = (TNN, BXD)
QJX = (XPJ, DCH)
LQP = (FRK, NFS)
HCL = (GBS, PGB)
FDD = (XQJ, XTS)
XTS = (TJL, LGJ)
HLR = (TBR, FPG)
DLL = (VJV, MJN)
LFH = (VBM, MHT)
LMD = (VGG, RHK)
JKL = (CMQ, QCN)
DDP = (GTH, HKM)
VNL = (VVL, CFP)
SGB = (MKL, DVQ)
KBJ = (BDF, SXQ)
DVT = (NMB, LCB)
XQJ = (TJL, LGJ)
HLB = (XHH, XNC)
VPT = (BRF, JPP)
PDS = (QJF, BHL)
CGG = (PLS, SNM)
SDB = (RFL, BPB)
DVQ = (XSX, KXQ)
XQS = (BPF, XLV)
CDG = (XKV, HMT)
JCG = (CFK, RPR)
RBC = (DVT, QVH)
BJB = (MVC, KXL)
LFZ = (HTT, QTF)
FTQ = (RLM, LMQ)
TCT = (FPH, FCC)
QXL = (BPF, XLV)
MXX = (BHX, QNX)
LSR = (FFJ, DMT)
RTD = (KBS, GDV)
TXH = (QBQ, NSF)
CSB = (CBP, QDQ)
GBS = (BRN, GXP)
GMX = (LHX, MPF)
JQV = (GMX, SGT)
GML = (GLR, SDR)
GCG = (RHT, KTF)
RPR = (XTG, JGT)
NDG = (QFD, HTD)
KBK = (VFP, BSC)
FVB = (RFQ, LLH)
CGP = (NKP, FBF)
RXQ = (FHC, CTD)
KQD = (CJN, DRR)
QTF = (FVH, TRV)
QDQ = (FBM, SLV)
NMT = (JST, CCV)
BHC = (RJM, SVN)
GMR = (LNT, XFP)
MSK = (VQN, PFJ)
CBV = (CGB, PGV)
MHT = (GMC, RSH)
BRN = (KQK, FXV)
XXM = (JGL, GNT)
VLF = (VNN, RRV)
FDH = (VQN, PFJ)
NFD = (MGN, GLL)
THM = (PLL, VTJ)
MPF = (JVN, DFC)
BNG = (RNC, KLS)
LGJ = (QHV, XBR)
QTJ = (TVT, NBP)
KRQ = (MDF, RLN)
PCK = (CCS, JFK)
DQV = (FLD, CSB)
HDD = (FGX, XRG)
TFL = (DQV, CJQ)
BNM = (KMV, CVX)
MLC = (CFP, VVL)
SBD = (MKD, DKP)
PSK = (DBV, BSF)
FRB = (BBD, TPB)
RKL = (HVK, DRN)
HMZ = (DRR, CJN)
LJK = (LBN, DDG)
LSC = (MXX, VFX)
TDN = (TPB, BBD)
RNX = (FBT, DLL)
QGJ = (KTS, RBF)
RFB = (BCF, MHS)
VGN = (TJP, VSF)
HFH = (FPQ, PGF)
HXX = (QFD, HTD)
RJS = (PCK, JXJ)
TRQ = (GCG, GQF)
KXN = (FPQ, PGF)
FMS = (XJL, TFV)
NMB = (QRQ, DGD)
BPF = (VMX, GXQ)
HCX = (XSR, JCQ)
RJR = (BNG, DNT)
BQX = (GQC, VLX)
DHD = (RLC, GVS)
DQJ = (HJG, FMS)
QFD = (TNQ, HSF)
HMT = (HSG, MHM)
BHD = (FMS, HJG)
NDF = (PLK, RTX)
GMC = (PNT, HCX)
GQX = (CPB, VNP)
BXD = (VNL, MLC)
DTD = (XLK, BVR)
KQT = (MRH, SBD)
QJH = (QMD, KBJ)
NFJ = (MVL, SFT)
JMH = (FVB, BMP)
BVF = (SFB, KSS)
RBF = (JCD, NDT)
QBX = (KJV, LBX)
NTG = (DPX, CBV)
DRL = (XXM, PRQ)
QNX = (SHD, LXG)
PNN = (KQD, HMZ)
CCS = (TQQ, DDP)
QSD = (QTF, HTT)
BVN = (JNK, TRT)
HSF = (KNG, LXD)
BHL = (DSB, SGB)
VFX = (BHX, QNX)
JFH = (TCH, DCB)
DBV = (SDL, CDG)
TRT = (RXN, BQX)
VLC = (MHS, BCF)
BBM = (HCB, FMB)
THG = (THX, GFC)
XKV = (HSG, MHM)
DSB = (MKL, DVQ)
XSC = (HVK, DRN)
SKM = (VTJ, PLL)
QFR = (KXP, QNS)
BMP = (RFQ, LLH)
MLM = (KRQ, CLV)
XNH = (JJJ, DHC)
KPM = (RBC, THN)
FGX = (LNK, KQL)
TSF = (BDD, KFL)
LXG = (XCG, TRP)
TBR = (HFK, LMB)
JFK = (TQQ, DDP)
TQH = (KJG, MQD)
RKT = (FGX, XRG)
DJF = (DJJ, LNQ)
FPM = (LRR, HJP)
PCJ = (XDX, NJD)
HFK = (NQN, LQQ)
SHB = (RMG, KJH)
KPJ = (XVN, PGK)
XSH = (LNH, VPT)
SQX = (BVR, XLK)
KTB = (QRS, KPF)
RKK = (GLM, JQG)
HTT = (TRV, FVH)
SDL = (XKV, HMT)
HCK = (FCK, QBJ)
SJF = (JQV, JLB)
QMT = (FPG, TBR)
HGX = (QLS, XLB)
VKM = (QFF, NLD)
FNH = (KQV, RFD)
HPM = (TRQ, QJS)
PMS = (LHM, CJL)
JTK = (XPG, XPG)
VMN = (SJB, JCS)
LNT = (SHM, NKV)
KFL = (RCB, BVF)
ZZZ = (NBP, TVT)
QPX = (BFF, KNR)
HSG = (LBC, RCN)
SLV = (CFR, RXQ)
KJH = (MHL, QNB)
FCK = (DSS, DSS)
RLL = (GBS, PGB)
VKJ = (RFB, VLC)
VSJ = (CGQ, KQT)
XDX = (HPH, VFJ)
LCB = (DGD, QRQ)
PLL = (HFH, KXN)
DMH = (BSR, FQV)
PPQ = (XFP, LNT)
PGB = (BRN, GXP)
JMN = (DFT, DGR)
RVT = (KTL, SFV)
JCH = (SJB, JCS)
KKG = (QPX, MLL)
KNB = (CPB, VNP)
HKM = (VFC, BXC)
QBT = (CJL, LHM)
GJM = (PQQ, BQT)
RLN = (LDG, JJH)
RJM = (JGN, FSL)
LHL = (HSC, LBV)
CVX = (VQT, XDS)
LVV = (MGX, DGL)
NSN = (JBX, GKM)
MTL = (DPX, CBV)
LBN = (NDG, HXX)
KLG = (DBP, PCV)
DGD = (MTL, NTG)
LDG = (JTK, JTK)
HCR = (GMR, PPQ)
DMB = (SQT, VGH)
LGK = (DBV, BSF)
FLG = (FCK, FCK)
KXL = (TXH, LQB)
MQD = (JNF, LSR)
RNC = (SMQ, FPM)
QFF = (NTD, VCM)
QLS = (DTK, CSG)
JGH = (LJQ, NSJ)
FSL = (BXD, TNN)
KLC = (TBT, CVN)
BDF = (KBK, NDR)
QMD = (SXQ, BDF)
VQT = (VBL, XHK)
CSC = (NLG, FQP)
SJB = (VGS, NSN)
NFS = (DDR, LTK)
DRA = (CJN, DRR)
LBX = (THL, TKP)
DJJ = (PLF, PLF)
MJN = (TBX, DRB)
TJP = (VKX, CTP)
DDR = (RLL, HCL)
LQB = (QBQ, NSF)
BKV = (PSR, NKS)
NKP = (XCH, XNH)
VCX = (QSD, QSD)
FQV = (HKH, VRD)
VPH = (DDF, PLQ)
HVS = (VPH, KGV)
BHX = (LXG, SHD)
RQV = (PHB, FDQ)
NSL = (MCJ, DBM)
GVD = (JBT, HKN)
TRN = (QPX, MLL)
XCG = (CXS, FVG)
KBF = (XVR, TFT)
CTD = (CJM, FTQ)
PRH = (FVB, BMP)
TLR = (NSL, XQF)
BLS = (VVM, NFB)
VVL = (MRB, NTX)
QGV = (RFD, KQV)
SRK = (GLM, JQG)
VHX = (LQG, KRF)
NHB = (PNG, NQL)
LLK = (XDK, LLS)
GQD = (TSX, KBF)
LHV = (QRS, KPF)
VNR = (PNG, NQL)
LBP = (PCJ, MCK)
TNN = (MLC, VNL)
KNR = (PLM, DGC)
BMD = (SJF, GTJ)
FPG = (HFK, LMB)
XFP = (SHM, NKV)
RSN = (LFH, TVV)
FGN = (DVR, GLV)
JHX = (VFX, MXX)
DDG = (NDG, HXX)
NQS = (NFJ, VSV)
MKD = (DTM, MLM)
CQQ = (KTL, SFV)
DGK = (FMB, HCB)
NSJ = (NKK, DRL)
JTS = (GTF, KBP)
VDG = (MCK, PCJ)
MGN = (PVK, KLC)
LBC = (SRK, RKK)
CJQ = (FLD, CSB)
MKG = (MHB, QPK)
XVR = (PCL, QDH)
QBQ = (LRB, VSJ)
FXM = (LGK, PSK)
LMQ = (TLR, NPH)
PKM = (VBC, XXR)
VJV = (TBX, DRB)
CCV = (JFH, QNK)
DMT = (RHS, JNG)
XHQ = (PGD, TCT)
DFC = (VMN, JCH)
JJJ = (FNH, QGV)
JNG = (KBM, KLG)
THX = (RSN, BHS)
TKG = (CQQ, RVT)
HPN = (PDH, KPJ)
BGS = (PSP, CMD)
BLH = (QJX, SGJ)
PRP = (QPK, MHB)
PMV = (HDD, RKT)
TRV = (TFL, MDD)
CJL = (FMV, FJQ)
JCQ = (KXF, HGT)
GRS = (RBR, QNR)
SGJ = (DCH, XPJ)
RTX = (RJR, JJF)
AAA = (TVT, NBP)
XDK = (SPG, BMD)
FBF = (XCH, XNH)
LHM = (FMV, FJQ)
SQT = (FVT, MDT)
XPG = (JTF, RNX)
MGX = (JGQ, DHD)
PHH = (QBT, PMS)
VJL = (MKG, PRP)
DCB = (FRB, TDN)
PRM = (BHC, QJV)
FRR = (RPF, CLG)
PGF = (MQQ, TPG)
NQL = (MGL, SCP)
CSG = (RRT, BLS)
NMK = (PSR, NKS)
MRH = (MKD, DKP)
SFV = (HCH, FGN)
BDD = (BVF, RCB)
MDD = (CJQ, DQV)
TGR = (PQQ, PQQ)
MDT = (VBV, LLK)
XXR = (MLF, TCX)
DVR = (CQD, NQS)
SXQ = (NDR, KBK)
KBP = (QTJ, ZZZ)
VRD = (TJN, FGM)
VNP = (GQD, MBH)
KHM = (TMM, QGJ)
JCD = (KPK, VJL)
BXJ = (FVP, PMV)
DFT = (MTT, JCG)
JRL = (VPT, LNH)
HCH = (DVR, GLV)
FPB = (JXF, DNF)
NDR = (VFP, BSC)
MQQ = (NGM, XHQ)
XBM = (GLR, SDR)
KQL = (RVJ, VGN)
FPH = (CRK, FSD)
GDV = (TQH, VRC)
LCM = (PMS, QBT)
NTX = (HPM, PNJ)
FDQ = (NXM, HVS)
KTF = (VNR, NHB)
GTJ = (JQV, JLB)
XHH = (LTX, PHJ)
QVX = (KBS, GDV)
VGG = (KRS, TPX)
PFM = (GTF, GTF)
KSK = (KMV, CVX)
RVL = (QMD, KBJ)
KXF = (NFD, HBL)
VCM = (QVX, RTD)
MBH = (KBF, TSX)
LNK = (VGN, RVJ)
TVV = (MHT, VBM)
FXF = (MSK, FDH)
VKB = (NMK, BKV)
VGH = (MDT, FVT)
NLG = (LJK, MFN)
DSS = (KQD, KQD)
VRG = (PFM, PFM)
TQQ = (GTH, HKM)
RSH = (HCX, PNT)
TKP = (KJP, GGM)
VRC = (MQD, KJG)
HJP = (KGF, SRS)
PSP = (QRF, HFJ)
NKK = (XXM, PRQ)
JJF = (DNT, BNG)
PLF = (RBR, RBR)
NJD = (HPH, VFJ)
RRV = (KNB, GQX)
GLV = (CQD, NQS)
XBR = (DMB, XRL)
SPG = (SJF, GTJ)
DKX = (FXF, BDC)
FQH = (RQV, KLN)
QBJ = (DSS, PNN)
VVM = (MNG, CSC)
KXQ = (XBG, GVD)
CFK = (JGT, XTG)
CMA = (LQP, XBV)
FCS = (QFR, FHX)
FFJ = (JNG, RHS)
LMB = (NQN, LQQ)
TMM = (RBF, KTS)
JXH = (VRG, BRX)
FBT = (VJV, MJN)
QCN = (HPN, MKH)
XDS = (XHK, VBL)
QNK = (TCH, DCB)
MKL = (KXQ, XSX)
MLF = (SJL, JTQ)
MGL = (TMX, DKX)
MTT = (CFK, RPR)
KRF = (QMT, HLR)
BSR = (VRD, HKH)
TJL = (QHV, XBR)
PCV = (NMT, RMQ)
FVP = (RKT, HDD)
SHM = (DQJ, BHD)
PNG = (SCP, MGL)
PGD = (FCC, FPH)
QJS = (GCG, GQF)
CFP = (MRB, NTX)
QGS = (RTX, PLK)
SJL = (XSC, RKL)
JST = (JFH, QNK)
TBX = (VHX, MSM)
DDZ = (PHQ, JBF)
KXP = (XBM, GML)
HKC = (NDF, QGS)
DHF = (VQV, SDB)
JXT = (BDD, KFL)
LQG = (QMT, HLR)
LXD = (RBH, CKT)
LXM = (XPG, XKZ)
XLV = (GXQ, VMX)
GLL = (PVK, KLC)
TSX = (XVR, TFT)
QRF = (DJF, KJM)
KJG = (JNF, LSR)
GQB = (XSH, JRL)
GKR = (LMD, KVB)
GVS = (QJH, RVL)
VPM = (XQJ, XTS)
QNR = (LDC, DDZ)
PVK = (TBT, CVN)
JCX = (SNM, PLS)
HHJ = (QFF, NLD)
TLX = (VNN, RRV)
GTF = (QTJ, QTJ)
LNQ = (PLF, GRS)
VBL = (GJK, BLQ)
DGC = (DGK, BBM)
NDT = (VJL, KPK)
KBS = (VRC, TQH)
RVJ = (TJP, VSF)
RBR = (LDC, LDC)
PDH = (XVN, XVN)
JBF = (VSK, JMN)
BBD = (MQR, JXH)
FVT = (VBV, LLK)
VBC = (MLF, TCX)
XKZ = (RNX, JTF)
MNA = (JTF, RNX)
VFJ = (HHJ, VKM)
GLM = (SKM, THM)
JNF = (FFJ, DMT)
MNG = (FQP, NLG)
MVL = (PRM, KLH)
RHS = (KBM, KLG)
CRC = (CMQ, QCN)
BPB = (DMH, NNT)
NLD = (VCM, NTD)
XCH = (JJJ, DHC)
CKT = (PLR, KHM)
NNT = (BSR, FQV)
GQC = (XQS, QXL)
GKM = (QTH, KHG)
GJD = (TRB, MDB)
CGB = (VXJ, VCG)
SMQ = (HJP, LRR)
RNP = (BLH, KHP)
MMP = (NCM, XPK)
VLX = (XQS, QXL)
XJL = (BVN, KGN)
LRB = (CGQ, KQT)
NGM = (TCT, PGD)
TBT = (KTB, LHV)
JLB = (SGT, GMX)
HFJ = (DJF, KJM)
RCN = (RKK, SRK)
KJM = (DJJ, LNQ)
CVN = (KTB, LHV)
PHB = (NXM, HVS)
KJP = (HCR, QPM)
SHD = (XCG, TRP)
KKX = (LQP, XBV)
FHX = (KXP, QNS)
CLV = (MDF, RLN)
FXV = (FQH, FCH)
HTD = (TNQ, HSF)
CJM = (LMQ, RLM)
BSF = (CDG, SDL)
JVN = (VMN, JCH)
KDK = (XSG, LHL)
FGM = (PJB, NTQ)
MRB = (PNJ, HPM)
JTQ = (XSC, RKL)
CJN = (TSF, JXT)
RLC = (QJH, RVL)
XLK = (CBK, JBG)
KLN = (FDQ, PHB)
JJH = (JTK, LXM)
TVT = (GKC, HKC)
QHV = (DMB, XRL)
TCX = (SJL, JTQ)
JBX = (KHG, QTH)
CQD = (NFJ, VSV)
KPF = (VPM, FDD)
KHG = (HCF, RNP)
BSC = (QBX, JVB)
KVK = (CQQ, RVT)
CPB = (GQD, MBH)
LTK = (RLL, HCL)
HVK = (XMR, BJB)
TFT = (QDH, PCL)
MHB = (TDF, RCG)
SRQ = (PMV, FVP)
NJA = (QTF, HTT)
RMN = (XHH, XNC)
VCG = (VDG, LBP)
LSF = (JMH, PRH)
THL = (GGM, KJP)
PLK = (RJR, JJF)
DKP = (DTM, MLM)
NQN = (LCM, PHH)
KNG = (RBH, CKT)
GKC = (NDF, QGS)
BRF = (FPB, JFD)
HKH = (FGM, TJN)
KTL = (HCH, FGN)
HKN = (MMP, BFV)
JVB = (KJV, LBX)
QVH = (LCB, NMB)
HHF = (XQC, GSF)
VGS = (JBX, GKM)
BXC = (KPH, PKM)
DBM = (FCS, BFJ)
QPK = (TDF, RCG)
VXJ = (LBP, VDG)
GGM = (HCR, QPM)
LHB = (LJQ, NSJ)
LJQ = (NKK, DRL)
JXF = (FLG, HCK)
PHJ = (XFB, CGP)
MKH = (PDH, KPJ)
MFT = (PSK, LGK)
CBS = (PCK, JXJ)
FRK = (LTK, DDR)
CMQ = (HPN, MKH)
QJV = (RJM, SVN)
KHP = (SGJ, QJX)
CQR = (MGX, DGL)
FJQ = (CQR, LVV)
HCF = (KHP, BLH)
LFC = (LMD, KVB)
DPX = (CGB, PGV)
DFS = (XLB, QLS)
DDK = (GKR, LFC)
KLS = (FPM, SMQ)
JGQ = (RLC, GVS)
LBV = (HHF, STJ)
JGT = (TQJ, XBB)
QRN = (LHL, XSG)
RFD = (QRN, KDK)
HSC = (STJ, HHF)
LNH = (BRF, JPP)
FSD = (TRN, KKG)
NSF = (VSJ, LRB)
QJF = (DSB, SGB)
MQR = (VRG, BRX)
XMR = (MVC, KXL)
VNN = (KNB, GQX)
NCM = (XLP, VKJ)
KTS = (JCD, NDT)
MDF = (LDG, LDG)
PLS = (BGS, VVD)
TPX = (TGR, GJM)
GJK = (SQX, DTD)
CTP = (BJL, GQB)
GXP = (FXV, KQK)
DRN = (BJB, XMR)
QDH = (GNC, DDK)
FMB = (JGH, LHB)
STJ = (GSF, XQC)
DNF = (FLG, HCK)
XSR = (KXF, HGT)
RNZ = (XBV, LQP)
RGS = (MJC, LSF)
GFC = (BHS, RSN)
GTH = (BXC, VFC)
PLM = (DGK, BBM)
KSS = (HGX, DFS)
SCP = (TMX, DKX)
RXN = (GQC, VLX)
PLR = (TMM, QGJ)
QTH = (HCF, RNP)
BRP = (CGG, JCX)
BVR = (JBG, CBK)
DTK = (BLS, RRT)
TPB = (MQR, JXH)
MJC = (PRH, JMH)
GSF = (KPM, DRC)
RVA = (JBF, PHQ)
BLQ = (DTD, SQX)
CBK = (BFN, SHB)
VBM = (GMC, RSH)
NFB = (CSC, MNG)
NKS = (FPL, DHF)
CLG = (KVK, TKG)
KLH = (QJV, BHC)
XQF = (DBM, MCJ)
BCF = (KSK, BNM)
XLP = (RFB, VLC)
MVC = (TXH, LQB)
LLS = (BMD, SPG)
TJN = (PJB, NTQ)
FQP = (LJK, MFN)
PHQ = (VSK, JMN)
XLB = (DTK, CSG)
MHM = (RCN, LBC)
LLH = (SRQ, BXJ)
FVH = (MDD, TFL)
RLM = (TLR, NPH)
MLL = (BFF, KNR)
CBP = (FBM, SLV)
MHL = (TLX, VLF)
MDB = (LSC, JHX)
KQV = (QRN, KDK)
SNM = (BGS, VVD)
KGV = (PLQ, DDF)
FCC = (FSD, CRK)
JFD = (JXF, DNF)
NTD = (RTD, QVX)
TDF = (FXM, MFT)
TMX = (BDC, FXF)
MFN = (LBN, DDG)
KGN = (TRT, JNK)
XPK = (VKJ, XLP)
JBT = (MMP, BFV)
PLQ = (PSX, GHC)
TRP = (CXS, FVG)
QPM = (GMR, PPQ)
VMX = (CBS, RJS)
BFV = (XPK, NCM)
LRR = (KGF, SRS)
KGF = (MRL, VKB)
PGV = (VCG, VXJ)
LHX = (JVN, DFC)
KPH = (VBC, XXR)
GQF = (RHT, KTF)
XQC = (KPM, DRC)
TFV = (BVN, KGN)
VVD = (CMD, PSP)
HGT = (NFD, HBL)
HBL = (MGN, GLL)
XBG = (JBT, HKN)
XSG = (LBV, HSC)
SRS = (MRL, VKB)
XBV = (NFS, FRK)
PNJ = (TRQ, QJS)
BRX = (PFM, JTS)
GHC = (JPD, PDS)
RCB = (KSS, SFB)
QNS = (GML, XBM)
GNC = (LFC, GKR)
MRL = (BKV, NMK)
KVB = (VGG, RHK)
VCF = (JCX, CGG)
VFP = (QBX, JVB)
FLD = (QDQ, CBP)
JBG = (SHB, BFN)
BJL = (JRL, XSH)
DBP = (RMQ, NMT)
SFT = (PRM, KLH)
CMD = (HFJ, QRF)`,E3=`0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`,$3=`12 12 11 5 -5 -5 40 194 558 1278 2553 4643 7877 12661 19486 28936 41696 58560 80439 108369 143519
6 12 33 79 163 320 638 1301 2644 5220 9879 17859 30889 51304 82172 127433 192050 282172 405309 570519 788607
3 5 5 3 9 60 262 872 2445 6091 13915 29744 60271 116756 217404 390473 678031 1140057 1858241 2938353 4509389
15 21 23 31 67 161 350 681 1224 2114 3674 6758 13659 30354 71646 172084 407585 935627 2065861 4378033 8910071
13 32 75 155 286 477 724 1011 1347 1894 3301 7501 19549 51737 132449 324337 759840 1707391 3689542 7685418 15464987
9 23 59 129 245 419 663 989 1409 1935 2579 3353 4269 5339 6575 7989 9593 11399 13419 15665 18149
29 57 93 134 193 323 653 1442 3171 6715 13675 27029 52429 100813 193667 373531 724690 1413358 2764818 5410241 10564342
26 44 74 139 286 598 1217 2393 4581 8615 15995 29330 52987 94003 163324 277442 460508 747006 1185080 1840613 2802164
26 53 105 196 345 578 945 1572 2782 5357 11103 24058 52986 116265 250950 528745 1082962 2152411 4150601 7771330 14143463
11 17 32 59 96 149 260 550 1277 2909 6212 12353 23018 40545 68072 109700 170671 257561 378488 543335 763988
4 14 38 95 219 477 996 2010 3944 7562 14241 26533 49411 93078 179146 353714 714029 1461171 3001653 6139588 12434184
15 22 23 11 -12 -12 108 544 1629 3870 7981 14909 25850 42252 65802 98394 142075 198966 271155 360559 468752
5 2 16 76 220 504 1038 2072 4176 8596 17934 37408 77123 156092 309358 600875 1147609 2166120 4064281 7621931 14341202
-1 1 8 24 59 128 245 412 603 743 682 164 -1209 -4018 -9073 -17464 -30617 -50355 -78964 -119264 -174685
15 28 45 59 59 30 -39 -128 -117 372 2311 7951 22198 55382 128880 286664 619266 1313842 2758770 5760511 11986520
26 45 68 95 126 161 200 243 290 341 396 455 518 585 656 731 810 893 980 1071 1166
21 28 35 42 49 56 63 70 77 84 91 98 105 112 119 126 133 140 147 154 161
-10 -3 18 55 110 183 282 470 990 2532 6735 17050 40138 88089 182041 358469 680869 1262429 2310889 4218237 7742573
9 25 62 140 283 520 893 1476 2410 3967 6676 11577 20712 38013 70824 132495 247148 459774 860531 1646359 3275530
2 7 33 101 237 478 891 1605 2851 4997 8554 14127 22322 33756 49668 74416 122776 238151 533733 1279139 3072535
-2 0 2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38
5 14 23 32 41 50 59 68 77 86 95 104 113 122 131 140 149 158 167 176 185
16 17 26 66 184 474 1111 2406 4904 9559 18032 33170 59736 105472 182589 309790 514944 838541 1338070 2093474 3213848
22 42 80 153 295 584 1179 2360 4562 8392 14616 24101 37695 56026 79199 106368 135158 160910 175720 167241 117215
6 21 52 109 211 410 842 1824 4018 8687 18079 35998 68666 126066 224107 388190 659121 1103000 1828405 3018878 5001220
13 19 29 60 142 321 671 1317 2472 4493 7959 13770 23275 38492 62639 101532 167031 284763 509985 957860 1857820
4 16 44 100 215 458 963 1970 3893 7448 13914 25677 47362 88170 166637 320117 623138 1221760 2395656 4666442 8980537
2 2 8 33 108 302 764 1796 3969 8301 16530 31548 58139 104333 184043 322376 566444 1007252 1823320 3365719 6319630
20 35 50 65 80 95 110 125 140 155 170 185 200 215 230 245 260 275 290 305 320
11 6 9 40 133 345 767 1544 2928 5410 10005 18810 36050 70029 136805 267146 519585 1004422 1926633 3660228 6873123
6 19 38 76 156 311 587 1050 1807 3079 5427 10362 21840 49715 117435 278786 653581 1502158 3377441 7427999 15987265
14 14 16 17 17 38 166 642 2053 5705 14305 33159 72242 149761 298273 575110 1079888 1983336 3573686 6329541 11031623
12 26 57 122 266 578 1222 2499 4965 9644 18400 34594 64321 118960 220828 416129 804537 1605237 3299590 6928305 14688071
0 -5 -12 -6 50 226 638 1467 3007 5803 10999 21106 41550 83628 169980 344509 690014 1358827 2624642 4967626 9209846
20 45 79 127 202 336 599 1133 2233 4548 9533 20373 43778 93462 197102 410802 849837 1753978 3623782 7496926 15490289
21 33 41 35 8 -22 24 336 1279 3471 7875 15905 29546 51488 85274 135462 207801 309421 449037 637167 886364
4 -1 3 28 96 246 549 1142 2299 4579 9136 18348 37021 74554 148642 291444 559886 1053375 1945513 3542820 6395190
17 31 59 128 287 617 1241 2334 4133 6947 11167 17276 25859 37613 53357 74042 100761 134759 177443 230392 295367
-2 0 10 35 92 221 504 1106 2380 5121 11131 24392 53376 115420 244780 507138 1025234 2023270 3902180 7364189 13613652
7 28 59 110 201 362 642 1135 2039 3782 7291 14576 30002 63005 133680 283769 597275 1237420 2510163 4969210 9583571
17 45 102 216 429 794 1377 2284 3749 6346 11433 22006 44243 90159 181980 359084 688657 1281579 2315496 4067556 6959897
19 30 47 77 136 268 584 1323 2947 6316 13053 26303 52207 102537 199047 380154 710527 1293974 2289607 3930549 6543326
23 42 77 151 312 652 1344 2723 5462 10940 21981 44288 89155 178518 354335 696191 1355093 2620278 5055188 9780558 19071368
22 43 85 169 330 623 1125 1940 3233 5344 9072 16297 31274 63266 131795 276824 577804 1187897 2392963 4709153 9038134
6 25 52 81 110 156 289 699 1812 4473 10216 21643 42936 80528 143961 246961 408762 655713 1023204 1557949 2320666
15 35 85 188 376 704 1279 2318 4262 8001 15322 29792 58445 114870 224610 434194 825649 1538991 2805987 4999428 8703270
12 26 63 145 318 666 1325 2497 4464 7602 12395 19449 29506 43458 62361 87449 120148 162090 215127 281345 363078
12 24 51 112 233 444 787 1349 2331 4164 7692 14478 27402 52029 99979 197196 403379 855143 1856587 4059742 8808766
5 -3 -17 -26 -9 68 265 696 1577 3299 6531 12358 22459 39330 66557 109144 173901 269897 408983 606390 881407
-7 -14 -27 -34 -3 121 426 1072 2394 5113 10699 21916 43546 83232 152294 266252 444631 709420 1081305 1572490 2174555
15 43 93 185 353 658 1220 2275 4266 7980 14746 26712 47228 81404 137068 226834 373339 623167 1083249 2012077 4037277
0 10 35 75 130 200 285 385 500 630 775 935 1110 1300 1505 1725 1960 2210 2475 2755 3050
10 7 13 38 104 258 580 1190 2267 4102 7216 12583 22007 38711 68205 119509 206816 351689 585895 954988 1522762
14 33 72 154 329 681 1337 2481 4373 7371 11953 18736 28490 42147 60808 85755 118480 160749 214726 283190 369887
10 22 37 58 102 222 555 1408 3394 7630 16009 31558 58894 104790 178863 294396 469306 727270 1099021 1623826 2351158
9 19 35 74 171 395 876 1842 3670 6967 12723 22632 39777 70040 124845 226183 415307 767015 1412039 2570690 4601515
21 44 71 100 145 246 471 903 1598 2501 3333 3537 2528 775 2709 23172 100187 318346 849211 2017954 4409203
12 24 44 89 199 459 1027 2166 4295 8108 14865 27040 49624 92533 174770 331245 623478 1155808 2099218 3725475 6454989
2 -7 -16 -13 19 102 260 509 851 1308 2063 3808 8430 20191 47573 105960 221312 434947 809482 1435889 2441493
9 15 25 31 30 29 45 106 274 746 2170 6491 19008 53026 139755 348272 823883 1858721 4016707 8347127 16738350
8 18 37 63 96 148 259 525 1160 2632 5936 13115 28260 59496 123024 251327 509416 1025822 2049351 4048927 7882776
20 39 77 146 258 425 659 972 1376 1883 2505 3254 4142 5181 6383 7760 9324 11087 13061 15258 17690
6 14 22 30 38 46 54 62 70 78 86 94 102 110 118 126 134 142 150 158 166
3 4 17 55 134 278 530 986 1876 3717 7556 15300 30079 56470 100149 165993 252585 339102 357123 134181 -713180
9 28 61 108 169 244 333 436 553 684 829 988 1161 1348 1549 1764 1993 2236 2493 2764 3049
3 18 54 136 316 696 1460 2922 5603 10356 18564 32442 55480 93070 153366 248432 395739 620078 955962 1450596 2167500
-1 -6 -16 -31 -51 -76 -106 -141 -181 -226 -276 -331 -391 -456 -526 -601 -681 -766 -856 -951 -1051
24 38 72 156 345 744 1544 3065 5802 10470 18044 29790 47283 72408 107340 154499 216476 295926 395424 517280 663309
17 15 6 -4 -4 18 71 157 267 377 444 402 158 -412 -1467 -3205 -5867 -9741 -15166 -22536 -32304
-1 -7 -6 24 123 355 814 1630 2975 5069 8186 12660 18891 27351 38590 53242 72031 95777 125402 161936 206523
-1 -2 9 54 179 484 1175 2641 5555 11000 20650 37140 65020 113239 201182 372347 723723 1466606 3049271 6399370 13393725
10 27 50 80 122 206 429 1035 2562 6112 13856 29985 62474 126253 248691 478710 901370 1660417 2992078 5274334 9097018
-1 11 30 52 73 89 96 90 67 23 -46 -144 -275 -443 -652 -906 -1209 -1565 -1978 -2452 -2991
9 14 14 9 -1 -16 -36 -61 -91 -126 -166 -211 -261 -316 -376 -441 -511 -586 -666 -751 -841
20 41 85 176 348 645 1121 1840 2876 4313 6245 8776 12020 16101 21153 27320 34756 43625 54101 66368 80620
13 32 69 135 242 401 624 948 1523 2853 6354 15511 38128 90599 206059 450263 953223 1973288 4027961 8160817 16481924
10 31 61 97 128 138 112 40 -86 -287 -629 -1277 -2576 -5164 -10122 -19166 -34886 -61037 -102887 -167627 -264848
14 17 31 78 193 442 963 2041 4230 8539 16713 31679 58311 104817 185272 324077 563270 973281 1666119 2805592 4599309
10 29 60 114 216 405 734 1270 2094 3301 5000 7314 10380 14349 19386 25670 33394 42765 54004 67346 83040
10 20 42 84 148 237 375 654 1344 3147 7758 19034 45307 103804 228952 487908 1009562 2038446 4033814 7848568 15045322
-1 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19
14 28 47 75 117 189 352 786 1925 4693 10936 24277 51898 108293 223074 456955 934168 1907958 3892569 7927555 16100571
11 26 61 121 206 311 426 536 621 656 611 451 136 -379 -1144 -2214 -3649 -5514 -7879 -10819 -14414
-5 -12 -19 -8 64 280 780 1778 3577 6580 11295 18332 28390 42232 60646 84390 114119 150292 193057 242112 296540
10 22 55 123 235 396 610 896 1343 2257 4502 10223 24304 57260 130991 290283 625656 1317884 2722249 5522607 11003169
15 34 74 157 328 675 1362 2685 5158 9634 17470 30761 52712 88343 146085 241799 409125 725354 1372886 2777245 5900636
8 13 26 48 75 110 201 519 1486 3952 9411 20259 40163 74771 133302 232076 401852 702023 1246368 2247290 4088395
19 29 54 103 184 305 479 736 1145 1849 3116 5409 9478 16477 28109 46802 75919 120005 185074 278939 411588
7 14 46 113 220 360 512 663 885 1527 3638 9822 25844 63497 145661 315582 655247 1324668 2649638 5319095 10821008
14 38 75 134 234 404 683 1120 1774 2714 4019 5778 8090 11064 14819 19484 25198 32110 40379 50174 61674
6 17 30 45 62 81 102 125 150 177 206 237 270 305 342 381 422 465 510 557 606
17 30 43 56 69 82 95 108 121 134 147 160 173 186 199 212 225 238 251 264 277
20 45 86 162 321 650 1279 2392 4284 7556 13634 25944 52286 109253 229996 477362 965640 1896183 3615554 6710326 12161299
22 43 74 127 231 436 817 1478 2556 4225 6700 10241 15157 21810 30619 42064 56690 75111 98014 126163 160403
-5 -11 -6 33 134 321 597 920 1183 1225 922 435 726 4493 17721 52098 128603 282637 571138 1082197 1947774
-1 13 46 114 256 554 1158 2324 4482 8360 15199 27103 47577 82315 140309 235359 388073 628455 999188 1559728 2391334
3 6 27 78 172 331 603 1091 1998 3696 6836 12532 22677 40485 71402 124593 215293 368410 623889 1044490 1726802
-2 8 39 115 276 592 1198 2367 4640 9025 17262 32133 57783 100020 166590 267488 415478 627162 925165 1342291 1928850
0 2 13 50 146 365 834 1815 3848 7994 16195 31751 59902 108511 188892 316940 514928 814674 1263289 1933440 2941050
19 30 47 87 184 411 913 1963 4074 8241 16458 32768 65278 129837 256481 500365 959825 1805572 3326981 6004209 10618712
13 22 51 111 213 368 587 881 1261 1738 2323 3027 3861 4836 5963 7253 8717 10366 12211 14263 16533
14 36 82 179 369 716 1320 2347 4102 7202 12948 24049 45917 88830 171350 325485 604198 1091992 1919438 3282663 5468977
12 23 54 129 280 556 1040 1871 3280 5671 9810 17227 30988 57056 106532 199149 368484 669455 1188782 2059213 3478448
14 30 65 140 301 628 1246 2345 4234 7488 13297 24192 45422 87455 170546 333427 650686 1268826 2482285 4893464 9745339
9 5 2 0 -1 -1 0 2 5 9 14 20 27 35 44 54 65 77 90 104 119
9 9 22 66 170 378 760 1437 2627 4719 8382 14716 25452 43208 71808 116671 185277 287717 437334 651462 952270
1 10 22 43 86 165 280 402 492 634 1454 5170 17912 54406 146767 360018 818055 1745102 3529210 6815985 12642382
2 1 15 57 140 277 481 765 1142 1625 2227 2961 3840 4877 6085 7477 9066 10865 12887 15145 17652
7 23 42 62 80 106 191 465 1176 2725 5728 11236 21446 41581 84146 177518 381833 816415 1704562 3443358 6708296
-5 -10 -15 -2 67 250 630 1350 2723 5496 11405 24252 51884 109706 226850 457196 899887 1739416 3326840 6346565 12156399
23 48 87 144 239 428 831 1679 3403 6805 13383 25947 49787 94871 179903 339608 637391 1186606 2185143 3969978 7100823
15 29 50 73 93 105 104 85 43 -27 -130 -271 -455 -687 -972 -1315 -1721 -2195 -2742 -3367 -4075
2 3 17 68 194 445 878 1557 2582 4212 7229 13841 29704 68185 159030 365549 817922 1776213 3746497 7688998 15380750
3 11 38 90 174 306 530 949 1763 3309 6119 11083 19977 36985 72588 152664 338527 769219 1747968 3914288 8578188
-6 -6 -9 -24 -64 -146 -291 -524 -874 -1374 -2061 -2976 -4164 -5674 -7559 -9876 -12686 -16054 -20049 -24744 -30216
21 31 41 51 61 71 81 91 101 111 121 131 141 151 161 171 181 191 201 211 221
-1 16 46 89 145 214 296 391 499 620 754 901 1061 1234 1420 1619 1831 2056 2294 2545 2809
18 44 85 152 270 495 943 1831 3530 6630 12017 20962 35222 57153 89835 137209 204226 297008 423021 591260 812446
-5 5 21 44 87 181 381 772 1475 2653 4517 7332 11423 17181 25069 35628 49483 67349 90037 118460 153639
4 18 36 60 104 201 423 941 2174 5103 11855 26687 57522 118241 232128 437464 797808 1422972 2513774 4457062 8021476
8 14 20 26 32 38 44 50 56 62 68 74 80 86 92 98 104 110 116 122 128
11 19 50 132 303 612 1136 2036 3701 7075 14335 30195 64259 135042 276529 548455 1051871 1952019 3511080 6133990 10431247
7 16 37 80 156 284 501 875 1521 2620 4441 7366 11918 18792 28889 43353 63611 91416 128893 178588 243520
0 -3 -9 -20 -27 17 236 880 2381 5424 11075 21076 38530 69368 125226 228674 422142 782391 1442991 2628004 4700939
-1 -3 -11 -20 -2 107 417 1090 2343 4465 7910 13625 23959 44846 90603 193922 426035 936665 2032143 4326166 9026232
25 43 70 108 159 225 308 410 533 679 850 1048 1275 1533 1824 2150 2513 2915 3358 3844 4375
29 56 102 171 260 355 442 553 888 2105 5976 16803 44319 109320 254050 560467 1181039 2388750 4655642 8772595 16027278
14 29 61 114 190 288 416 632 1131 2402 5508 12622 28134 61022 129927 273787 573436 1193922 2464328 5022892 10072708
24 48 89 149 229 341 531 920 1786 3741 8114 17753 38629 82880 174267 357373 712124 1375086 2568051 4631977 8059373
28 53 89 149 256 445 773 1353 2440 4614 9134 18600 38212 78278 159444 323857 658916 1346683 2763335 5672003 11582776
22 36 55 93 188 424 974 2176 4654 9496 18501 34507 61812 106700 178084 288278 453910 696988 1046131 1537977 2218780
9 16 35 66 109 164 231 310 401 504 619 746 885 1036 1199 1374 1561 1760 1971 2194 2429
7 34 79 141 215 300 418 662 1312 3089 7663 18598 43007 94291 196407 390061 740889 1348804 2355843 3946459 6328459
16 43 79 128 206 343 590 1040 1884 3550 7030 14611 31426 68595 149379 321041 677640 1403961 2860225 5744362 11398390
14 29 44 63 101 189 385 796 1618 3205 6184 11641 21413 38533 67889 117174 198222 328845 535308 855603 1343709
22 33 38 38 43 89 268 777 2008 4730 10464 22238 46055 93648 187480 369537 716338 1363847 2547738 4666878 8381123
3 1 -6 -17 -20 16 153 502 1264 2839 6097 12996 27912 60419 131050 283274 608588 1299433 2760990 5846246 12344605
7 4 0 -3 9 73 260 686 1523 3010 5464 9291 14997 23199 34636 50180 70847 97808 132400 176137 230721
15 24 33 42 51 60 69 78 87 96 105 114 123 132 141 150 159 168 177 186 195
10 23 42 67 98 135 178 227 282 343 410 483 562 647 738 835 938 1047 1162 1283 1410
-7 0 30 101 246 534 1118 2324 4794 9689 18941 35521 63683 109189 179666 285540 442457 676712 1035878 1607431 2548622
22 40 60 81 102 122 140 155 166 172 172 165 150 126 92 47 -10 -80 -164 -263 -378
7 10 25 63 148 346 822 1948 4503 10033 21475 44195 87661 168129 313132 569616 1020054 1816286 3251854 5914783 11001561
12 37 73 126 216 388 741 1481 2995 5944 11395 21063 37819 66741 117141 206188 364958 647967 1147469 2014012 3484922
7 18 56 148 348 749 1503 2863 5264 9471 16847 29839 52865 93979 168180 304433 561213 1061164 2066810 4140202 8466114
22 33 40 43 42 37 28 15 -2 -23 -48 -77 -110 -147 -188 -233 -282 -335 -392 -453 -518
-3 6 27 55 83 104 121 170 369 1026 2871 7521 18343 41948 90629 186148 365381 688446 1250067 2195067 3739035
7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47
-3 0 5 11 30 112 376 1047 2505 5370 10685 20337 38026 71475 137425 272771 558853 1172912 2493441 5308255 11210950
22 34 55 105 214 430 852 1707 3503 7308 15223 31132 61827 118634 219734 393526 683684 1157110 1916903 3123907 5032564
18 41 79 139 243 454 922 1962 4181 8676 17330 33238 61300 109023 187579 313171 508764 806243 1249065 1895477 2822377
4 5 2 4 33 132 396 1039 2509 5669 12077 24427 47279 88371 161196 290359 522838 951137 1759080 3308474 6296073
0 5 10 13 12 5 -10 -35 -72 -123 -190 -275 -380 -507 -658 -835 -1040 -1275 -1542 -1843 -2180
6 10 24 65 167 388 832 1698 3368 6546 12460 23139 41777 73196 124420 205372 329706 515786 787824 1177189 1723899
2 4 13 37 81 147 234 338 452 566 667 739 763 717 576 312 -106 -712 -1543 -2639 -4043
22 42 80 143 236 364 532 752 1092 1855 4074 10682 29028 75996 188102 441042 986962 2124308 4426060 8969637 17738708
1 21 68 165 348 663 1158 1870 2807 3925 5100 6095 6522 5799 3102 -2688 -13043 -29851 -55484 -92871 -145576
-4 8 30 57 88 138 255 552 1273 2921 6498 13965 29157 59627 120297 240426 476338 933670 1804694 3428641 6386022
14 31 67 132 237 398 644 1030 1659 2722 4572 7857 13748 24311 43087 75961 132420 227321 383313 634082 1028615
6 26 68 145 270 456 716 1063 1510 2070 2756 3581 4558 5700 7020 8531 10246 12178 14340 16745 19406
2 7 34 95 210 412 754 1319 2231 3677 5992 9956 17655 34667 75128 172707 403128 928287 2079158 4505833 9439872
0 9 36 99 226 460 861 1497 2419 3637 5174 7410 12211 25899 66166 176887 457954 1122624 2604098 5749210 12165804
6 6 19 57 139 301 608 1173 2205 4143 7993 16078 33541 71108 149839 308981 618988 1204385 2287965 4284050 8004079
25 39 57 77 99 137 242 542 1306 3037 6586 13243 24686 42535 67041 94112 109407 77579 -76121 -495799 -1441795
-4 -3 -1 2 6 11 17 24 32 41 51 62 74 87 101 116 132 149 167 186 206
9 32 68 125 216 359 577 898 1355 1986 2834 3947 5378 7185 9431 12184 15517 19508 24240 29801 36284
-1 0 15 72 226 570 1250 2490 4644 8329 14783 26775 50723 101217 209976 442483 927245 1904934 3807711 7382962 13880640
16 29 59 109 177 268 417 737 1517 3403 7699 16823 34943 68799 128690 229574 392202 644197 1021015 1566813 2335433
17 37 70 121 195 297 432 605 821 1085 1402 1777 2215 2721 3300 3957 4697 5525 6446 7465 8587
4 19 44 84 148 249 404 634 964 1423 2044 2864 3924 5269 6948 9014 11524 14539 18124 22348 27284
15 25 41 84 188 414 876 1776 3442 6369 11288 19346 32603 55313 97001 179437 351665 720917 1513467 3189564 6652286
13 28 69 145 266 449 729 1176 1913 3133 5136 8461 14284 25402 48336 97374 201749 417618 847087 1667225 3172838
12 26 40 54 68 82 96 110 124 138 152 166 180 194 208 222 236 250 264 278 292
-2 -2 11 44 104 211 418 838 1695 3457 7185 15354 33581 73942 160886 341170 699756 1384240 2641135 4868216 8688166
13 21 44 98 214 454 945 1935 3865 7433 13608 23556 38505 59761 89474 133450 208449 358169 684696 1405842 2953780
2 1 -2 5 50 176 435 874 1521 2408 3715 6180 11993 26488 61106 138414 300596 624055 1244996 2404699 4529468
5 6 4 -2 3 78 363 1128 2842 6273 12631 23765 42422 72571 119788 191689 298387 452936 671710 974648 1385277
-3 13 57 143 285 497 793 1187 1693 2325 3097 4023 5117 6393 7865 9547 11453 13597 15993 18655 21597
21 30 39 51 71 116 236 543 1248 2720 5617 11216 22231 44753 92670 197402 428736 938386 2049431 4437414 9492734
10 17 26 46 90 192 443 1057 2489 5642 12219 25299 50243 96067 177454 317616 552260 934959 1544280 2493076 3940408
17 29 41 53 65 77 89 101 113 125 137 149 161 173 185 197 209 221 233 245 257
4 7 17 34 58 89 127 172 224 283 349 422 502 589 683 784 892 1007 1129 1258 1394
16 32 53 77 97 112 151 310 802 2020 4613 9575 18347 32932 56023 91144 142804 216664 319717 460481 649205
23 31 39 47 55 63 71 79 87 95 103 111 119 127 135 143 151 159 167 175 183
6 13 41 96 177 284 431 667 1117 2065 4123 8590 18260 39300 85591 188476 417909 927056 2044694 4465063 9636756
3 23 61 127 241 443 819 1550 2989 5769 10943 20155 35839 61441 101657 162678 252431 380803 559833 803855 1129573
20 39 77 152 285 492 786 1214 1975 3703 8068 18969 44794 102538 225043 473303 956718 1865447 3520671 6450710 11503627
11 33 69 125 207 321 473 669 915 1217 1581 2013 2519 3105 3777 4541 5403 6369 7445 8637 9951
13 26 51 107 227 475 984 2024 4111 8170 15767 29427 53057 92495 156208 256164 408905 636850 969859 1447091 2119191
10 18 45 115 265 550 1050 1871 3140 5026 7887 12759 22579 44782 96244 211971 459470 961394 1929841 3716619 6884877
9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49
-8 -12 -16 -20 -24 -28 -32 -36 -40 -44 -48 -52 -56 -60 -64 -68 -72 -76 -80 -84 -88
8 4 -3 0 52 227 648 1513 3146 6104 11404 20985 38592 71365 132539 245814 452140 819884 1459607 2544982 4341732
11 21 31 40 57 112 265 626 1411 3070 6534 13641 27820 55153 106059 198248 362834 658985 1211477 2306915 4631860
-3 13 43 87 145 217 303 403 517 645 787 943 1113 1297 1495 1707 1933 2173 2427 2695 2977
7 6 22 76 202 464 997 2093 4366 9061 18642 37934 76343 152077 299879 584606 1124137 2126792 3951214 7201596 12880296
-5 -12 -16 -9 23 117 374 1049 2736 6717 15564 34095 70784 139706 263056 474211 821201 1370314 2209376 3450015 5227933
17 21 25 29 33 37 41 45 49 53 57 61 65 69 73 77 81 85 89 93 97
6 13 32 80 180 368 717 1406 2880 6172 13500 29335 62308 128664 258590 507776 978143 1853856 3461417 6365291 11511885
5 23 49 86 154 303 625 1278 2553 5048 10072 20498 42428 88236 181828 367312 722717 1380949 2560835 4611894 8077398`,I3=`7-F7-
.FJ|7
SJLL7
|F--J
LJ.LJ`,Z3=`FF7FSF7F7F7F7F7F---7
L|LJ||||||||||||F--J
FL-7LJLJ||||||LJL-77
F--JF--7||LJLJ7F7FJ-
L---JF-JLJ.||-FJLJJ7
|F|F-JF---7F7-L7L|7|
|FFJF7L7F-JF7|JL---7
7-L-JL7||F7|L7F-7F7|
L.L7LFJ|||||FJL7||LJ
L7JLJL-JLJLJL--JLJ.L`,W3=`F-|-J7F7F7F-7F7F--7-L|-L7777.FFL-|.|.FF-FF7FFFFF7--F-J7.|-FF77|-F|777-F7.F7FF|-J7|-7.FFJ77FL.7-|-|7.|.77|-F-|-F|-FL.F77.FF-77|7.7--7--7FJ--7
|7LJ7.F-JLJ7L7--7F77.|LLJ|LF7|.LLJ-|7L|FJLF77L-FJ7FJ.LFF|7L-LLF-LJF777||7L-F7LLLLJ7|L7||F-J|-|.J.F7FF7F7|J|F|-FJLF.FLL|7J|FF-7-FJ7J|J.F7L|LJ
L|J.7.L-J7FJ--..F-J|-7-|.J|LL-J.F|J|-77L|.LL7J||FJ7|.F--J7-J|7.LJJJJFFJL7JF||7.||-LJ-F7-|FFJ-|77.|L7||||7F-LJF|L7J7FF|JL7L7JJL-|---|7-JJ-FJ7
LJ.L-|--JF7J|LF7|L-7.|FFJJ-.|JL7JF7F7F7777F-JFFJJLLJFL-J-|.FLJ-7|FF7FL7FJF7||F7FF-J7F||F7-7L7L|7.L7||LJ|.LJ|FFJFF7F7FLLJLJ||LL-J7.L|7LJJFJF-
.L7J7L7JJF|-||||7LJ|LFL7J-LL|7-|-.F|LJ|F7F7JF|7J7.FFJ|-JF-7F7.F77FJ|F7||FJ||LJL-7.FFFJ|||F|7|-JFF7|||F7|7--J||.JJFFF7J7.JJL-.L7L---LF7|J|-|J
.||||-7FF---J--LJ-F|F|JL|.|.|.F||.-L-7LJLJL7-JJJ--F7FF7-|LFJL-JL7L7||||||FJL-7F-JFJJL7LJL7F--7JFJLJLJ|LJJ-FF|--J.J-L-7F7J.L7|.J.F||FJ--.|.L-
.-7-J.L7J7.F|JLLJFL--L7FLFL---FJ-7L||L7F---JJ-J.||||FJ|F-7|F---7L-J||||LJL--7|L--7LFFL7F-J|F-J.L--7F-JF77.F.|FF-LJL|LL7|.FL|LJ--7-7J|..----J
|JJJLF.L.--|-FJ7..LLF-7FL7|LJF7J-F-7F7|L--7J.F.FFFJ||FJL7|LJF--JF-7LJ||F----J|F--JF7F-J|JFJ|||-F7FJ|7L||7-J-F-|7|J|LF-JLF-7|-7J.F-J-|F|J.L|.
|J||7L-J.|FLF-FJJ-7LJF|J.J|-.7|F-L7LJLJF--JF-7-||L7|||F7||F7L7F-JJL-7LJL-7FF7||F--J|L-7|FJFJFF-J||FJ7L|L7.L7L7.F|.L-F-|7L-JJ.F7--7L-|-|-7.|F
|--7LJ.|FF7F--JJJ.F.FLJL|-|JFF-|J7L---7L-7||FJJLLFJLJLJLJLJ|-LJF7.F-JF---JFJLJLJF7FJF7||L7|F7L-7||L7F7L7|7FJ77-F7-|J|FF-JJ|7FF--J|.L7FL7J.|J
FJFJ|.|L--L-LFJJ.L7-JF|LL.L.7JLJ.FFF7FJF-JFJL7JFLL-7F7F7F-7L7F-JL-JF7L7F7-L7F---JLJFJ|||FJLJL7FJLJFJ|L-JL7J7.|-F|F7|LFJ||J|FF7.F7J77JFF|F-J|
|.JJ|FFJ.FL7L7J|FL-.FJJ|F--7-.J..LFJ|L7L7FJF-J.7JF-J|LJ|L7L-JL---7FJL7LJ|F7|L-7F7F7L7||LJF---JL7F-J|L7F7FJJFF|-JL7L|J|F-JF--L|F7|LF|7J||7.F7
L|-F-FJ7-7.L7L7F7-LJ7..-JJ-F7JFF|.|FJL|FJL7||F77.L--JF-JFJ7F7.F--J|F7L-7LJLJF-J|LJ|FJ||F-J.F7F7|L-7F-J|LJF77.||--L-L.LJJL|FL|L777.LJJ-JJ7-||
.LFJLJJ7FL7J|FJ-L77|JF-L7F7.F7FF7FJL7FJL7FJL7|L-7F7F7L7FJF7|L7L---J||F-JF---JF-JF7||FJ|L--7|||||F-JL-7L--JL7-L7.LF.L|.|.FLL7J-LL-7LJLFJLF.L|
FJJ7F---7J||JLLLJ|FJ7.LJ77FFF-7||L7FJL-7||F7||F-J||||FJL-J||FJF----J|L-7|F7F7L--J||||FJF--J|LJLJL7F7FJF----JJ||7.F77F.F-L.|7J7LJ.|.|LL|LLJ||
77.FLJ|.F.FL7JJ|FLL7F|FL|JL-L7LJL-J|F7FJLJ||LJL7FJ||LJF---J||.L7F7F7L7FJ||LJL--7F||||L7L7F7L-7F-7|||L7L----7F7-F7||FJ.7.J-7|L7.|F7F-..|LLLLL
|7--JLL---|J.L---7|F-JF-7F7..L----7|||L-7FJL---JL7|L-7|F7JL||F7LJLJL7|L7||F----JFJLJ|FJFJ|L-7||F||||FJF----J||F7FJL7JF77|F-J-.--J.|-J7JF-FJJ
.JLL|LL-JF|F77...|J-|7L-JFL7.F---7|LJ|F7|L-7F7F7FJL7FJ||L7FJLJ|F7F7FJL-JLJL7F7F7L--7|L7|FJF7LJL7LJ||L7|.F7F7|||LJF-J.|L7JJ.J-F-|F|J77L-JF|.|
F|-JL7.FF77|F7-LL.LL|F-JLF--FL7F7LJF-J|||F-J||||L7FJL7||FJ|F--J||||L--7F7F7LJ|||F--JL-J||FJL-7FJF-J|7|L-J||LJ|L-7L---JFJ.|-L7--LJLFF||..|LJJ
FJ7FJ|F--77|.L7J.-7LJLF.LF77LFJ|L-7L7FJ||L-7||||J||F-J||L7|L7F7|||L7F-J|LJ|F-J||L-----7LJL-7FJ|FJF7L7|F--J|F-JF-JF7F7FJ7-F7J|.F|JL-L7FL-J-||
LJFJLL7L||L77L7..F|7-F--7||F7L-JF7|FJL7LJF-J||||FJ|L-7||FJL7||||LJFJL--JF7||F7|L7JF7F-JF---JL-JL-JL7|||F7FJL7|L7FJLJLJF-7||LF-777..F|F|7|J|J
.FJ7-FJ.7-|F-JLF-FF7.L-7|||||-F-JLJL--JF7|F7||||L7L7FJLJL7FJLJ|L-7|F7F-7|LJ||LJFJFJLJF7||F7F7F7FF7FJLJ||LJF-JF7||F7F-7|FJ|L7L7|LJ7F7FLLJJ-|.
F.||-J|.|LFL7.FF-J||F7F|LJLJL7L--7F7F-7|LJ|||LJL7|FJL7F--JL7F7|F-JLJ|L7|L-7LJF7L7L---J|L-JLJ||L7||L-7FJ|F-JF7|||LJLJFJ||FJFJFJL7.F--7FFJ|LL7
L7|-7FL-77.FL-F-7FJLJL-JF7F-7L7F7LJLJFJ|F-J||F--J|L7FJL7-F7||LJL--7FJFJL--JF-JL-J|F---JF7F--J|FJ|L7FJL-JL-7|||LJF--7L7||L7L7|F7|JL|F|7|77||F
FLJFLLLFFJ7|7L||FJF-----JLJ.|FJ||F7F7L7LJF7LJ|F--JFJL7FJFJ||L7-F7FJL7L-7F-7L7F---7L----J|L7F7|L7L7|L7F7F--J|||F-JF7L-J||7L7|||LJJF|-JF|-JFJ-
F|7|7J.||77LJ--LL-J-F7F--7F-J|FJLJ|||7L7FJ|F-JL--7|F7||||FJL7L7||L-7L--JL7L7||F--JF7F---JFJ||L7|FJL-J|LJF7J|LJ|F-JL--7||F7|LJL--7J.|LJ.FF-JJ
FJFJ|7-.F77J-7FLF7LFJ|L-7|L-7|L--7LJ|F7||L|L-7F-7|||LJL7||F7L7||L77L---7FJJ|LJL-7F||L---7L-J|FJ|L---7L77|L7L-7LJF----J|||||F----JJ-J.|-L--F7
||-7|7-LLJ7.-JFFJL7L7|F7||F-JL7F7L-7||LJL7L--J|FJ||L-7FJ||||7|||FJF7F7FLJF7|F---JFJ|F7F7|F--J|FJF--7L7L-JFJF7|F-JJF--7|LJ|||F7F77|JFF.|J-LL7
7J7F|LFLJJJ.FF-JF7L7||||||L-7FJ|L7FJ||F--JF7F7||FJL7FJL-JLJL7|LJL7|LJ|F7FJLJL---7|FJ|LJ|||.F7|L7|F-JFJF--JFJLJ|FF7|F7|L-7LJLJLJ|F77|.7--7-|J
|.-LJF|FJ||L-|F-JL7|||||||F7|L-JFJL7|||F-7|||LJ||F-JL-7F----JL-7FJL-7||LJF-7F7F7||L7L-7LJL7|||FJ|L-7L7L7F7|F--JFJ|||LJF7|F7F--7LJL7JF-7-|J||
-7JF7-JJ.F77LLJF--JLJ||||||LJF-7L--J||||FJ||L-7|||F7|FJ|F7F7LF-JL7JFJ||F-JJ||LJLJ|FJF7L7F-J|LJL7|F7|FJFJ||||JF-JFJ|L-7||LJ||F7L---JL-||-77.-
||.L.-7||F-JJ|.L----7|||||L-7|JL---7||||L7|L-7|||LJL7L7||||L7L-7FJFJFJLJF7FJL---7||FJ|FJL-7L-7FJLJ||L7|FJLJL7|F-JL|F-J|L7F|LJL-7F--7-||.|J77
F77.L-|-LL.|-FF-----JLJLJ|F7LJF7F7J||||L7||F-J||L--7L-JLJ||FJF-JL-JFJF7FJLJF----J||L7|L7F-JF7|L-7L||FJLJF---J||LF-JL-7L7|FJF7F-J|F-J7L7FJ.LF
L-F.L7|JL|7FF7L--7F7F-7F7LJL--JLJ|FJLJL7|LJL7FJL-7LL-7F--J|L7L----7L7||L--7L-7F7FJL7||FJL-7|||F-JFJ|L-7FJF7F7|L-JF---JFJLJFJ|L--JL7-7.-|.F|J
FLL7L-|7F--FJL--7LJLJ7LJL7F7F---7|L---7|L-7FJ|F--JF77||-F7|FJF7-F7L7|||F7||F-J||L7FJ||L7F-J||||F7L7|F7||FJLJLJF--JF7F7|F7FJ.L7F-7FJF|7|F.F7J
F7FL7L|--7FL---7L7F-7F---J|LJF--JL7F-7|L7FJ|FJ|F7FJL7|L7|||L7|L7|L7|LJ|||FJ|F7||FJL7||FJ|F7|||||L7|LJ||||F---7L7F-J|||||LJF7|||FLJF7F77J.LJ7
L-|-L7JL7FJ7LJFL7LJFJL----JF7L7F-7LJ-|L7||FJ|FJ|||F-JL7||LJ|||-||FJ|F-J|||-LJ||||F-J|||-||||||||.|L7FJ||||F7|L7LJF-J|LJL7FJL7|L7F7|LJ||.F-LF
JL|.L7FL7JF||LF7L-7|F7JF---JL-J|FJF-7|FJLJL-J|FJLJL7F7||L-7FJL7LJL7||F7||L-7FJ|LJL7FJLJFJ|||LJLJFJFJL7|LJLJL7FL--JF7|F-7LJF7||FJ|||F-JJFFJL|
|L7F7J--F7LLF-JL--JLJ|FJF------JL7|FJLJF7LF--JL--7|||LJ|F7||F-JF--J|||LJ|F7|L7|F--JL--7L-J|L-7F-JFJJFLJF----JF7F--JLJL7L7FJLJ|L-JLJ|JF|7|-FJ
L-.|..JFJJ|LL-------7|L-JF7F--7F-J|L---J|FJF-7F7FJFJL-7|||||L7FJF-7||L7FJ|LJ7LJL7F7F--JF--JF7||F7L-7F--JF----JLJF7F---J.LJF-7L--7F7L-7JFL-JJ
FL-JF7FJJ.|7F7F----7|||F7||L7FJL--JF-7F7||FJ.||LJFJF7FJ|||||FJL7||LJL7|L7L---7F-J||L--7L--7|||LJL7FJ|F-7|F-----7||L-7F7F77|FJF77|||F7L--7F-.
FLJ77|J7JF--J|L---7LJL-JLJL7||F-7F-JLLJLJLJ-FJL-7|FJ|L7|||||L7FJL--7FJ|FJF7F-J|F7||F-7L7F-J||L-7FJ|7LJ|LJL7F7F7LJ|F7LJLJL-JL-JL7||LJ|F--J7.L
JJ.L7JFFFL--7L----JF7F7F7F7LJ|L7|L---------7L7F-JLJJL7||||||FJ|F7F-JL7||FJ|L7FJ|||||FJFJ|F7||F7|L7|F----7FJ|LJ|F7LJ|F-7F-------JLJJFLJ|J|L-.
||F-|.JLF---JF----7|LJLJLJ|F7L-JL----7F7F-7|FJL-----7|||||||L7||LJF7FJ||L7L-JL7||||||FJFLJ||||||FJ|L---7|L-JF7LJL-7LJL|L--7LF7.F7.L|F|JL|7JF
LL|7|7..L-7F7|F---JL7F----J||F7F-7F-7|||L7LJL7F7F---JLJLJ||L7|||F-JLJFJ|FJF---J|||||||F---J|LJLJL-J|F--JL---J|F-7FJF-7L7F7L-JL7||7JLJJ.FJL7J
|.-L7-77LLLJLJL7F---JL7F-7FJLJLJ-LJFJLJL-J.F-J||L----7LF7LJJLJLJL--7FJ7||L|F7F7|LJ||||L-7F7|F---7F-7L-------7LJ-LJ-|FJJ|||F7F7LJ||.FJ.-JJ|.F
|-J-FJFJ77LF---J|F--7.LJ.LJF7F7F7F-JF7F---7L--J|F---7L-JL-7-F7F----J|F-JL7LJLJLJF-J|LJ|FJ||||F-7|L7L7F7F----JF7F---JL-7LJLJLJL--J7F-F-7LL7-J
|-L-JF7F77JL-7F7|L-7|F7|F7FJLJLJ|L--JLJF--JF--7|L-77|F7F-7|FJLJF-7F7|L7F7L-----7L--J-F7L-JLJLJFJL7L7|||L---7|||L7F7F--J7F7F7JF7F---7-JJ.FJLJ
L-7|LJ-7L-F--J|||F-J|||FJLJF---7|F--7F7|F-7L7FJL-7L7|||L7||L7F7L7|||L7LJL7F-7F7L-7F--JL-7F7F7FJF7L-JLJ|F--7|FJ|FJ||L-7F7|LJL7|LJF7FJJF|.F7FJ
FLF7-L.-..L---JLJL-7|||L-7FJFF-JLJF7LJLJ|FJFJL--7L7||||FJLJ-LJL7|||L-JF7FJ||LJ|F-JL7F--7||LJLJFJL----7|L-7LJ|FJL7|L--J|LJF-7LJF-JLJJ-777.FF7
LJJL7.-JF7F-7F7FF7FJLJL-7LJF7L-7F-JL--7FJL-JF---J7|||||L-7F7F--J|||-F-J|L7L--7|L7-LLJF7||L---7|F7F---JL-7L--JL--JL7FF7|F-J-|F7L---7.||JF-JJL
.LL-JLJ.|FL7|||FJLJF-7F7L--JL--J|F---7LJF7F7L----7||LJL--J|LJF--JLJFJF7L-JF7FJL7L7F--JLJL----JLJ|L-----7L-7F7F7F-7L-JLJL--7LJL---7|J-F-JJ7.L
77.||L-|7J||LJ|L7F7L7LJL7F-7F7F7|L-77L--JLJL7F---J|L7F7F7JL-7L7F---JFJ|F-7|||F-JFJ|F--7F-----7F7|F-----JF7||LJLJ.|F7F7F---JF7F7||LJJ-|.LF-7.
.7-LL7F|||FJF7L-J|L7|F--J|FJ|LJLJF-JF-----7|LJF--7L-J|||L-7||FJ|F7F7|FJ|.||||L-7L7||F-J|F----J|LJL-----7||LJF7F-7LJLJLJ|F--JLJL--7J|FJLFJ-J7
F.FLJ||LL7L-JL---J|LJL---JL7|F---JF7L7F---JF77|F-JF7F|||F-JFJL7|||||||FJFJ||L7FJFJLJL7FJL7F7F7|F------7LJL-7|||FJLF7F7F7|F-------J-F77-JJF-|
--7-F-77L|L|FLF----------7-LJL7F--JL-JL----JL7|L--J|FJLJ|F7L--J||LJ||||JL7|L7|L7L-7F-JL7LLJ||||L7F-7F7L-7F7LJLJL--JLJLJLJL7F7F-7F7F||F7FJ.-J
F7J7F-7-FL.|L.L7F7F7F--7FJF7F7LJF-7F7F7F---7FJ|F---JL7F-J|||F-7LJF-J|LJFL||.||FJF7||F7FJF--J|||FJL7LJ|F7LJL--7F7F-7F------J|||FJ||FJLJ|7JF-J
F|-7|-L.|JF7|F-J|||LJF-JL-JLJ|F7L7LJ|||L--7LJFJL7F7FFJL--JL-JFJF-JF7L7-|LLJ-||L7|LJLJ|L7|F-7|LJL7FJF-J|L-7-F7LJLJJ|L-------JLJL7|||F--J|F|7|
L77JF7.7777LFL-7|LJ-FJF--7F-7LJL7L-7LJ|F-7L--JF7LJL-JF7F7F---J|L--JL7|JL.|LJ||J|L--7FJFJLJ7||F-7||-L--JF7L-JL-7F-7|F7F7F7F-----J||||F7.L-LJJ
LL|7-|-|LF-7-.FJL7F-JFJF7LJLL--7|F-JF7LJ7L--7FJL7F---JLJLJJF7F7F77|L||-|FL--LJFJF7FJL-J7LF7LJL7LJ|F----JL-----J|FJLJLJLJ|L------JLJLJ|-F|||J
FJJ|-LL|-L7|FFL--J|F7|FJL-----7||L--JL7LF-7L|L-7|L---------JLJ|||F7.LJJ.F|-||JL7|||F7FF--JL7F7L-7|L--7F-----7F-JL-7F7F-7|F7F-7F-7F7F-J7--7|7
L-777...FFS|7F7JF7LJLJL------7LJL-----JFJFJFJF-J|F7F7F-7F7F7F7LJLJ|.JJFL-JFJ77||||LJL7L---7LJ|F7LJJF7LJF----J|F---J|LJFJLJLJJLJLLJ|L7J.J.--J
.LF7J..FFL7L7||FJL7-F----77F7L---------JFJFJFJFFJ|LJLJ-||LJ||L7F-7|-J.77FFFJJFFJ|L-7FJFF-7L-7LJL---JL-7|F7F--JL----JF7L7-F7JF----7L-J77JF7.F
J.|L7-|7|||FJ||L-7|FJF--7|FJL-----7F7F7FJ7L-JF7L7L7F7F7|L-7||FJL7LJ-|J|FFJ|L7LL-JJJLJ|FL7L-7|F-7F----7|LJLJF7F------JL-JFJL-JF---JJF7F7J||-|
|F7.J.|LLFJL-J|F7|LJFJF-JLJF-7F7F7LJ||LJFF7F-JL7L7LJLJ||F-JLJL-7L-7J|LJ-L-J7|.LLJ..|L-F-JF7LJ|FJ|F7.FJL----J|L-7F-7F----JF---JJF-7FJLJL777.J
FLL7F|7-FL--7FJ||L-7|FJF7F-J-LJLJL-7||F--JLJF-7L7L7F--JLJF7.||FJF-J-7.L7L--J.|J.F-FL.L|F-JL7FJL-J|L-JF-7F--7|F7LJFJ|F----JF77F7|FJL7F--J7L7J
7J|.F-|.FF--JL-JL--J||FJLJF7F7F7F7FJLJ|F7F-7L7|FJFJL----7|L7.FL7L7.|L..JJ777L7.LF7-L7-LJF7-LJF7FFJF--J7LJF-J||L7FJFJL----7|L-J||L7FJL----7|.
|F7.L7L-FJF7F-7F7F--JLJF--JLJLJLJ|L---J||L7L-JLJ-L7F----J|FJ7.FJFJF|-77|F7L-7|-|||LF|FLFJL---JL7L-JF7F7F7L7FLJLLJ.|F-----J|F--J|FJL7F7F--JJ7
|LJF.|L-L-JLJ7LJLJF7F-7L7F------7||F---JL-JF--7|F7LJF7F7L|L7-.L-JLFL7|J-LJ7.F7-FJ|7F7F-JF---7F7L---JLJ||L-JF7F7F7FJL---7F7||F--JL-7||LJJ|7LJ
|LL7.J||.FF-----77||L7|FJ|F-----JL-JF----77L-7L7||-FJLJL7|FJFF7|-L7-|JL-7LF7J.L|FJFJ|L-7|F--J|L7F7F--7|L---JLJLJLJF----J|||LJF-7F7LJL7LF|7.|
-77LF-F77LL----7L-JL-J|L7|L7F--7F7F-JF---JF-7L7||L7|F---J||-F7-|.7L-.77L|-J|F-J|L-JFJF7LJL---J7LJLJF7|L---------7FJF--7||||F-JJLJL-7FJ--FJ-L
|JL-7FL-|LF----JF----7|-||FJ|F-J|||F7|F77FJFJFJ||FJ||F7F-JL-J|JL-|7-|-L.|LFLJ.F|F-7L-J|-F7F7F7F7F7FJLJF7F7F7F--7LJFJF7L7|LJL----7F7||JJ-L--J
-7|LL7J.LFL-7F7FJF---JL7LJL-JL--JLJ|LJ|L7L7L7L7||L-JLJLJF7F-7|L7JLJ.LLJ-LJ.-7F-LJLL7F7L7|LJLJLJLJLJF--JLJLJ||F-JF-JFJL7LJF7F7F--J||LJJ....L-
L77.||FJ-J.LLJLJ.L----7L----7F7.F7FJF-JFJ7|FJFJLJF------JLJL||FJJFFJ.||J|FL-F-7-L--LJL7LJF-------7FJF7F7FF-J||F7|F-J.FJF7|LJLJLF7|L7J7F-.F7|
LL--JF-7|JFLF------7F7L----7LJL-J|L-JF7L--JL-JF-7L-7F7F7F--7LJJ--L-7F7-7F|JF|.FF7--JF-JF7|F----7FJ|FJLJL7L--JLJLJL--7L-J|L--7F7|LJFJJL7|.|L7
L|.|L|L|J-J7L-7F7F7LJL----7L----7L---JL---7F7FJFJF7LJLJLJF7L7JJ-LJ7L7.L|7||F-L7.L7JFL-7|LJL7F-7LJFJL7F-7L-7F7F7F7F--JF-7L7F7LJ||F7L-7.F7.LJ.
.|F77L-J77|LF-J|LJL7F7F-7FJF7F-7L----7F--7|||L7L7|L7F-7F-JL-J.|-JJFJLFJF7J-|FJ77L|FF7FJ|F7J|L7L7FJF-J|FJF7LJ|||||L--7|FJFLJ|F7|||L-7|-7|7.|.
LFLLLJJFF-LJL7FJF77LJLJF||FJLJFJF---7LJF-JLJL-J-LJJ|L7LJF---7F7|.-JJF|-||7-LL|LL-F-JLJFJ||FJFJFLJFL7FJL-JL7|LJ||L7F7LJL77F-J|LJ|L-7LJ.LL|-|7
.|L||-F|J|J-LLJF||F-----J|L--7L7L--7L-7L7JF7LF7F7F7L-JLFJF-7||L7-|J7FF7|L777.|7||L-7F-JFJ|L-J-F--7|LJ7F---JF-7||JLJ|F-7L7L-7L--JF-JF|F7.F..F
|LFLJF-777JLLF-7||L---7F7L---JFJF-7L-7L7L7||FJ||LJL7F--JFJ-LJL7L-7|FF||L7|F--7J-FF-JL7|L7|F7F7L-7L7F-7L----JFJLJF7LLJ-L-JF7L7F7FJ-LL-7..|-FF
|-J.F|FJF7|.LL7|||F7F7LJL--7F7L7L7|F7L7L-J|||FJ|F-7LJF-7L-7F7FJF-J7-FJ|FJ||F-JJ.FL-7FJF7|LJLJL-7L7|L7L7F---7L---JL-------JL7|||L-77L-..-J-FL
-.L7FJL-JL7-|FJLJLJLJ|FF7F7LJL7L-JLJL-J.F7|LJL7|L7L--JL|F7LJLJFJF7F7L7||FJ||7FL7.LLLJFJLJF--7F7L-JL7L7LJF7-L7F---7F7F---7F-JLJ|F7|7F|F7JJ.J|
L7-FL7F7F7L7FJF-7F--7|FJLJL7F7L---------JLJF-7LJFJF7-F7LJL----J||||L7||||FJ|F7J|||FF7L---JF7LJL-7F7L-JF-JL7FJL-7FLJ|L--7|L7F77LJLJF-7-J-F-.L
FF-LFJ|LJL7LJFJFJ|F-JLJF--7LJL---------7F7FJL|F7L-JL-JL-----7F7FJ|L7||||LJFJ|L-7J-FJL---7FJL7F-7|||F--JF7FJL7F7|F7|L-7FJL-J|L7F7|FJFJJL77J.J
||LFL-J.F-JF7L7L7|L7F7FJF-JF7F7F-----7J|||L7FJ||F-7F7F7F----J||L7|L||||L7FJ7|F7|F7L----7|L7FJL7LJ|LJF--JLJF7LJ|LJL--7|L7|F-JFJ|L7|FJJ--|F-|.
.LFJ-|LFJF7|L7|-LJFJ|||FJF7|||||F---7L7LJ|FJL7|||J||LJLJLF7F7||FJL-J|||FJL7FJ|LJ||7LF7J|L-JL-7L--JF7L----7|L-7L-7F7FJL7L7|F-JFJFJ||F77F|L7L7
7.-JLL|L-J|L7||F--JFJLJL-JLJLJLJL--7|FJF7LJFFJ||L7|L-7F--JLJLJ||F-7FJ||L-7|L7L7FJL7FJL7L---7FJFF7.|L-7F-7LJF-JF7LJ||F7L7LJL--JFJ.|LJL---77-J
LJJF7-|FL.|FJ||L---JJF7FF7F-7F-7F--JLJFJL--7|FJ|FJ|F7|L7F7F7F7|LJFJL7||F7|L-JFJ|F7|L-7L-7F7||F-JL7L-7LJFJF7L7F|L-7|LJL7|F7F---J-FJF-7F7FJJ.|
.LLJJ.L7F-LJ7LJF7F---JL7||L7|L7|L-----JF7F-JLJ-LJ7LJLJFJ|||LJLJF7L-7||LJ|L7F-JF||LJF-JF7LJLJ|L7F7L-7L-7L-JL7L-JF-JL-7FJLJ|L---7FJFJLLJ||J.F7
F.FJ.J---J||7F-J|L----7||L-JL-JL--7F7F-J|L------7F7F7-L-J|L-7F-JL--JLJF7|FJL-7FJL7-L--JL---7L7LJL-7|F7L--7FJF--JJF-7LJF-7L----JL7L-7L|LJLLLF
|-7.LJ.|.LL|FL-7|F7F--JLJF7F7F-7F7LJLJF7L----7F7||LJ|F7F-JF-JL------7FJLJL-7FJL7FJF7F7F7JF7L7L7F--JLJL---JL-JF7F7L7L7J|FJ.F7F---JF7L77LJ|.F|
||F-77-777FJJF-JLJLJF7F-7|||LJFJ||F7F7||F7F77||LJ|F-J||L-7L-7F--7-F7|L7F7F7||7|||F|LJLJ|FJ|||FJL----------7F7|LJL-JFJFJL7FJ||F-7FJL-J7J7L7LJ
LFL7||.|-F7JJL------J||FJ|LJLFJFJLJLJLJLJLJL7LJF7||7FJ|F7|F-J|F7L-J|L7LJ||||L7FJL7|F7F-JL7|FJ|7F7F--------J|||F----J|L7FJL7||L7|L--7.J.|FJ.|
F-7J-J-FJFJFF7F7F77F7LJL-JF-7L-JF----------7L7FJLJL7L7||LJL7FLJL--7L7|F-J|||FJ|F-JLJ|L-77||L7|FJ|L--------7|LJL---7F7FJL77|||FJL---J7JFLJF7-
LLJJJ|..FF--JLJLJL-JL-----JFJF7-L---------7|FJL---7L-J|L--7L-7LF7LL7||L-7|||L7||F7F-JF-JFJL-J||FJLF7F7F---J|F-----J|LJF-JFJLJL-7F7JF7F7.L7J|
F|F|F--7-L--7F-7F---7F7F--7L-JL7F----7F7F-J||F-7F7|F-7L-7.L-7|FJL--J||F-J||L7LJLJ|L-7L-7L7F-7|||F7||||L7F77|L-7F7F7|F-JF-JF-7F7LJ|FJ|||77|.|
-7|FL|7L|L7FJL7||F--J|LJF7L---7|L---7||LJF7LJL7LJ||L7L--JF7FJ|L-7F-7LJL--JL7L-7F-JF7L7FJ-LJFJ||LJ||||L7LJL-JF7LJLJLJL--JF-J.||L--J|FJ||LF|-|
LFLJJF--FJFL7FJLJL---JF-JL----J|F7F-JLJF7|L--7|F-J|FJF7F7||L7|F7LJJL--7F-7FJF-J|F-J|FJ|7FF7L7LJF-J||L7L---7FJ|F--7F--7F7L--7LJF---JL-JL7-|F|
|L|77J7.|LF7LJF7F----7L--7F7F-7|||L7F-7|||F--J|L7FJL7|||LJ|.||||F7F--7|L7LJ7L-7LJF-JL7L7FJL7L7FJ-FJ|FJF--7LJFJL-7|L-7||L7F7L--JF7F7F7F-JJJL7
|FJL-.|7-FJL7L||L---7L7F7||LJFJLJL-J|FJ||||F-7L7|L7FJ||L7FJFJLJLJ|L7FJ|FJ.F---JF-JF7|L7|L-7|.||F7|FJL-JF7L-7L---JL--JLJFJ|L7F--JLJ||LJ.L7JF-
F|FJJ-L7FL-7L-JL---7L7LJ|LJF7L7F----JL-JLJ||FJFJL7|L7||FJ|LL-7F--JFJL-J|F7L---7|F7||F7||F-JL7|||||L-7F7|L--JF--7F7F7F7-L7L7|L----7||JJ-|--|J
LL--J.|J-|-L7F--7F7L-JF7L7FJL-J|FF7F7F7F--J|L7L-7LJFJ|||FJF7FJL7F7L-7F-J|L7F77||||||||||L7F7||LJ||F-J||L--7.|F-J|||||L-7|FJL-----JLJ..FJ.|.F
F7|LLL|7FL7J||F-J|L-7FJL7LJF7F7|FJLJLJLJJF7|FJF-JF-JF||||F||L7FJ||F7|L-7|FJ||FJLJLJ|||||FLJ||L7FJ|L7FJL---JFJL--JLJLJF7||L-7F77FF7J.7F||.FFJ
L--F-7LL-.|JLJ|F-JF-J|F7L-7|LJ||L-----7F7|||L7L-7|F-7||||FJL-J|FJ||LJF-J|L7||L-7F--J|||L7F7|L7|L-JFJL------JF7F------JLJ|F7LJL--JL777-J-F-F.
||.|L-.LL-|-F-J|F-JF7||L--J|F-J|F-----J||||L7|F7||L7||||||F---JL7|L7FJF7L7|||F7||F77|||FJ||L7|L7F-JF7F7F7F-7||L--------7LJL7F----7L7--|-L.|J
FJ7JL|F-|7|LL-7|L--JLJL7F-7|L--JL--7F7FJLJ|FJ||||L7|||||||L--7F7|L7||FJL7|||||||LJ|FJ|||FJL7||FJ|F7|LJ|||L7LJ|F--7F7F7FJ.F7|L---7|FJJFLJ|FLJ
7L7.FF7-FF7LLL||F--7F--J|FJ|F-7F---J||L--7LJ-LJLJFJ||||||L7F-J|LJF||LJF-J|||LJ|L-7|L7||||F-J|||FJ|||F-J|L7L7||L7LLJLJLJF-J|L--7FJ|L7|FJFFLJ7
||.F--|-7.-J|LLJL-7|L---JL7|L7|L7F-7||F-7L7F-----JFJLJLJ|FJL-7L--7|L-7|F7|||F-JF7||FJ||LJL7FJ|||FJ||L-7L7L7L7L7L---7-F-JF-JF-7|L7L-J-JL||||7
F|-7.LL7LFLFFJJLF-JL7|F7F7||FJL7LJFJ|||7L-JL---7F7L-7F--J||F7|F--JL7FJ||||||L7FJ||||FJL-7|||FJ||L7|L7FJFJ.|FJJL-7F7L7L7FJF-JFJ|FJJF|-F.LF|J7
.J-7FL|7.7-LJF-JL--7L7||||LJ|F7|.FJFJ|L----7.F-J|L7FJ|F-7|FJLJL--7FJL7||||||FJL7||LJ|F7FJFJ||FJL-J|FJL-JF-JL---7||L7L-JL-JF7||LJJF7F7-77||.|
JF777.FJ.J-|77J-||FL7LJLJ|F7LJ||FJFJFJF7F-7L7L7FJFJ|JLJFJ||F7F7F-J|F-J||LJ||L7FJ|L7FJ||L7|FJ|L7F7L|L7F--JF-7F7FJ|L7|F-7F--JLJF-7FJLJL-77LF77
F7|.F7LF-J..7-F--7F7L---7LJL7FJ|L7|-L7|LJ7L7|FJ|FJFJF7FJFJ|||||L-7|L7LLJ|FJ|FJ|FJFJL7||FJLJJL7||L-JFJ|F-7|.|||L7L7|LJFJL---7JL7||F--7FJ-7J||
L|L77L-F7L7.J|L-7LJL----JF-7|L7L-JL-7|L-7F7LJL7|L7|FJLJFJFJ||||F7|L7L---7|FJL7|L7|F7|||L---7-||L7F7|.LJFJL7LJ|FJ7|L-7L7F7F7L--JLJ|J-LJ.L|7||
L|.LF7..-F|7JL7.L-------7|FJL-JF7F7FJL-7LJL--7|L7LJL--7|FJFJ|||||L7|F---J|||FJL7|||LJ||F--7|FJ|FJ|||F--JF7L7FJL-7|F7|FJ||||F-7F-7L-7FJ77.L7J
-F-LLJ-FJLL7-7F.F------7LJL7F7FJ|||L--7|F-7F-JL-JF----J|L7|FJ|LJ|FJ|L--7FJL7|F7|||L7FJ|L-7||L7|L7|LJL7F7|L-JL7F-JLJLJL7||||L7||FJF-J-J-FJ-JL
|.L.|7.L7-7|F|7-L-----7L---J|||FJ||F7FJ|L7|L--7JFJF-7F7L7||L7L7||L7|F7FJL7FJ||LJLJFJL7|F7||L7||FJ|F--J||L---7|L---7F7FJ||||FJ||L7L7.JJL|7L7.
JJ.|F|7.F--7FJF7F7F7F7L----7||||FJ||LJFL7||F--JFJFJFJ|L7|||FJFJFJFJ|||L7FJ|L||7F--JF-J||LJ|FJ||L7|L-7FJ|F---JL7F-7LJ||FJ||LJ-LJL|FJ7.-7LLF|J
|F7J7||-J-LLJF|LJLJLJL-----J|||||F|L--7FJ||L--7L-JL|FJFJ|||L-JFJFJFJ|L-JL7L7||FJF7FJF7||F-J|FJL7LJF-J|FJL7F--7|L7|F-JLJ-|||JJ.F-JL7J77J.|LL7
-FLJLL|||7.LF-L-7F---------7||||L7|F--JL-JL-7FJF---JL7L-J||F--JFJ-L7L---7L7|||L7|||J|LJ|L-7||F7|F7|F7|L-7LJF7||FJ|L----7|L7J.FJF--JF77|-L7||
L|J.7-L7J--.L-LLLJ7F7F-----J|||L-J|L------7FJ|FJF7F--JF--J||F7FJF7F|F7F7L7||LJL||LJFJF7L7J||LJ|||LJ|||F-JF-JLJ|L7|F7F7FJ|FJ-7L-J|LJJLF-.|LFJ
LJ.L|-LJL7|.|||JJF-JLJF7F--7||L-7FJF7F7F--JL-JL7||L-7JL-7FJ|||L-J|FJ|||L7|LJF--JL7FJFJ|FJFJ|F7LJL-7|LJL-7L-7F-JFJLJLJ|L7||-L|7|.L.|.|L--L-7.
.F-7L-JJ.||.F|..FJF7F7|||F-J||F7||FJ|||L---7-F7LJ|F7L-7FJL7|||F--JL7|||FJ|F7|F-7FJL7L7||FJFJ||F7F-JL-7LFJF-JL-7L--7LFJFJ||77|F|7F7-7F7L7L--.
-7LJ||||7LJ7LL7FL7|LJ|||||F7||||||L7|||F-7FJFJL--J||F-JL7FJLJ||F--7LJ||L7LJ|||FJ|F-JFJ||L7|FJLJLJF-7FJFJFJJF-7L7F7L7|FJLLJ--L-|-7J7F|7|J7|FJ
FJ.LFF7F|7JFJ.F--LJF-J|||||||LJ|||FJ||||-|L7|F-7F7|||JF-JL-7FJLJF-JF7LJLL-7|LJ|FJ|F-J.||FJ|L7F7F-JFJ|FL7|F7|FJ-|||FJ||-|J-|||FJ-LF-7.FJFL77.
F-7-LJ-F----..F-7JFL-7||||||L7FLJ||FJ||L7L-J||FJ|||||FJF--7||F-7L--JL-7F--JL-7|L7||L|-|||FJ-LJ||F-JFJF-JLJLJL-7||LJ7|L-7J7.FJL-F-JFLL|7FLL-7
F||.J.F|||7|.-77F-L.|||LJ||L7L7F7LJL7|L7L-7FJ|L-J|||||FJF-J|||FJF-7F7FJL--7F7|L-JLJ|.FLJ||F---J||F7L7L7F7F7F7FJ|L7-LL7FJ-F|L-L-J--J7LLJ77L-F
FL-77-F|7-L|7F77.L|-FLJ-FJL7L7LJL--7LJ.L7FJ|FJF--J||||L7L-7|||L7||||LJJ-L-LJLJJJ|LJ7J-JJLJL---7||||FJL||||||LJF|FJ..LLJ7-|.F7-L||7.J7J.LL|-J
|JF--7FJ.|LL7F||7.|J|LL-L7FJFJF-7F7|.FJL||7|L7L---JLJL7L-7||||FJL7|L--7FFL7L7|J.F7J.LFJ|7.LF--J||||L-7LJ|||L7J-||77F|JL7.FL777.--7J-JJFF|.|7
|F7JL|J.FJ-.F7LJF7JLLJ|F-JL7L7L7LJ|L-7J7||FJFJF-------JF-J|||||F7||F-7L77-LJLJL7|--7-F7|J-7L-7FJ|||F-JLL|||FJJFLJ--JL7JJF-7LJ-7JFLJL|-LJJ--J
-|JFFJ7-LLJ-J-.LL-..LF7L7F7|7L7L7JL--JLF|||FJFJF7F7F7F7L-7|||||||||L7L-J-7|..-7.|-FFJL7..FJ-L||FJ||L-77JLJ||LJ7-JJ||7|7|J.LJLJFJ..|F77-FJL||
F|F.|-F.FJJ.|.F7.|-F.F7J||LJJ.L7L-7LJJFLLJLJFJFJ|||||||F7|LJLJLJLJL-JJJF|7J|J-|-|.LJ.FL-J77FFJ||FJ|F7||7L-LJ7L7-J.JJ-L|-.F.7LF-7F-FL||.LJ.|7
L-|-77L7F-7-J-J|.|J.-|L-LJL|7LFJF-J.L-|-JJ-LL-JL||||||||||FJ|7|-J-LJ.|FJJF-L7LF7J7LJF-7FL|7F|FJ||JLJLJ-L.||FFF7L7-J7JL7F|.FJ-L-J7JF7LL77|-F7
J.F..F-F|LJ77|FJF7..LL7|.JFLF7L7L77F7.|FJ|-LL|JJLJ||||||||JLL-.F||LL-JJF-7|LL.LJFF7F7.|.-F--JL7LJ-JF|||L-7J|J|J-JLF|-|L-L-.JL|J7JL--7J|FL-F7
.FF7LL7.|-|-7FJ.|JF|.J|J-|F-LJ.L7L7L-.7JF77.||-F|FLJLJ||LJ.F|--J77-LJ-FJ---.|-L7-77FJ-77|L----J-JJ.|7.F|-|.L7L7FJ.F.F7-LLJ7.F--J-F|F|.|7|LJF
.FL|J.|F77J.F---F7-|-7L7|FF.7.-.L-J-L.|LF|L7LJ-F|FJ|.L||LLJF777L77F7J7FJ-LLF77.J-LJJ.L|-F|||JFJFL7.777.L7F.F|J---7LLF7|FJ.FJ7L7JFL7-L-LLJJLL
-77JLFF7|J7.7||F|J-J.FLL7.77.7.|JLJ|.F|-FF---JJJLJ.F7FLJ-.|FJ---77-L7-J.7||LJ7F-F-.F-.|L-7-JJF.7-FF||-|FJJ-LJ|JF77JJ|F7.|77F--J-L-J|.F|7LJF7
FLF--7L-J7|-LL|-|J.J7--JF|77F|.FJLFJ.L|-FJ7.|F7-|7.7.LJJFF.JJJFL.|||FJ|-L--7JF--|FFF|---7J|LF-JJF--7--JL.L7.L|.|L|JLF7JF7-FJ|.F.F|.J.-7J|F-7
F7|-FJ|L|-J7.F--F7|FJF|7L|||F77J-FFFL7.F|J|F-FJ|.F.--------|.|F.---7L-LF|-L7L7JL|L7.|.|7F-J.JJ.--|7|||.JF-F7|L|.|.|.FL-7L|L|7..|7-|.|LJ||7FL
LJJJ||L-J7LJ7F|-LLJ|7L--7L-J-.|F--FJ.|7LL.|L--7-7L7|L||-7JJL-JJLLJFF7J.LL77..J.F|.|7LF---J.FL.JLF|LJJ-F-F..F--|.77F7-JJL77.||.|F7.LFL77|J7FJ
LJJ..LL-JJ-L---7J-F77LL.LFJJLL-J-7JJ.L-LL7-L7.LLJL|JJF7-J-JLLJLLJ-7LJJ..LLJ-LJJ.LFL-FJJL|.FLLF-FL|LL.J.FL|-JJ.JJL--JLL--JJ.|J-L|J--J.L7..JJJ`,Y3=`...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`,n7=`.......................................#..........................................................#......................................#..
.....................#................................#.....................................................................................
....#.....#...................#...............#....................#.....................#.....................#....................#.......
............................................................................................................................................
.................#......................................................#......#..............#....................#........................
......................................#.....................................................................................................
.......................................................#...................................................#..............#.................
.............................................................#..........................#...................................................
............#..............................#.................................#.................................................#............
#.................................#.............#................#....................................................................#.....
....................................................................................#................#......................................
....#..........#............#...........................................#..................#..................#...................#.........
......................................#...................#.................................................................#.............#.
........#....................................#.......#......................................................................................
........................................................................................#..........#........................................
..#................................................................#........................................................................
..............................#...............................................#.....................................#............#..........
...................#........................................................................................................................
...........#......................#........#................................................................................................
...............................................................#.................#.........................#................................
......................................................#.....................................#...............................................
........#............................................................................#................................#.........#...........
................#...........#...............................................................................................................
.....................#........................#........................#.....................................#............................#.
....#........................................................#................#.............................................#...............
............................................................................................................................................
.....................................................................................................#.............#...................#....
..........................#...........#.........................................................................................#...........
#......................................................#.........................................#............#........#....................
.........#.....................................#....................................#.......................................................
.................................#..................................#......................................................#........#.......
.........................................................................................................#..................................
......#.............#....................................................#..................................................................
..........................#........................................................................................#........................
.#.......................................#...................#...............#........................#..................#..................
..................................#..............#...........................................................#.................#............
.........#.........................................................#........................#...............................................
....................................................................................#.......................................................
.....#........#............................#...............................#.........................................#......................
......................................................................#..................................#..................................
............................#..................#........#..............................................................................#....
.......................#.............#......................................................................................................
#..........#...................................................#.......................#........................#......#....................
....................................................#.............................................#.........................................
.................................................................................................................................#..........
..................................#....................................................................#....................................
........#.......................................#............#.....#........#...............................................................
............................................................................................................................................
............................................................................................................................................
..........................#.............................................................#.........................#.........................
..#............................#..........#..................................................................................#..............
..................#...................................................#.............#.......................#.............................#.
............#.................................#........#.....#..............................................................................
............................................................................................................................................
.......................................................................................#..............#.................#...........#.......
....................#.....#....................................................#............#.................#.............................
....#............................................................................................#..............................#..........#
............................................................................................................................................
...............................#......................#...............................................................#.....................
.................................................#...............#..................#.........#.............................#...............
........#......#.....................#................................................................................................#.....
.............................................#.................................#............................................................
.#......................#..............................................................#................#...................................
............#.....#.....................................................................................................#...................
..................................#.....................................................................................................#...
............................................................................................................................................
......#...............................................................#........................#..............................#.............
.....................#...........................#....................................#..............................#......................
............................................................................#...............................................................
............#................#........#.......................#.....................................#.......................................
............................................................................................#.................#...........#.................
...................#................................................................................................................#.......
...................................#...................#..........#............#............................................................
#.........................................#.....#..................................................................#........................
............................................................................................................#....................#..........
..........#..........................................................#.................................#...................................#
............................................................................................................................................
......#.................#.......................................................#...............#.........................#.................
.............................#................#...................#.............................................#...........................
.............#.......................................#......................#.......#................................#......................
........................................#................................................#...........................................#......
...................................#........................................................................................................
.................#...........................................#..............................................................#...............
.........#................#.......................................................................................#.........................
.....................#......................................................................................................................
.#..............................................................#............#..........#.....#.........#...................................
......#.................................#.............................#.....................................................................
................................................................................................................................#...........
......................................................#............................................#....................#..............#....
.........................#...................#..............................................................................................
...............................................................#............#..........#.................#..................................
..................................#.........................................................................................................
...............#..........................................................................................................#......#..........
............................................................................................................................................
......#........................................#..................................#................#..................................#.....
.#..........................#.........#.............................................................................#.......................
.......................................................#......................#.......#.....................................................
.............................................................#.................................................................#............
...............#......................................................................................#.......#...........................#.
.....#....................................................................#...................#.............................................
..........................#................#.....#................#.........................................................................
..................................................................................#.................................#......#...........#....
.................#..........................................................................................................................
..................................#.........................................................................................................
...........#.........................................#.................#...............#....................................................
................................................................#..............................#..........#....................#............
...............#.............#............................#..................#..............................................................
..#............................................#...........................................................................#................
......................#.....................................................................................................................
.......................................#.................................#..........................................................#.......
...................................................................#........................................................................
....#.............#................................................................#..................................#......#..............
.............................................................#..............................................................................
.........#................#.....................#.....................#.....#.....................#.......#.................................
...................................................................................................................................#........
...........................................#...............................................#................................................
.....................................................#..........#....................#...........................#............#.........#...
.#.............#......#.....................................................................................................................
.............................#............................................#..............................#..................................
.......................................#............................................................................#.......................
..................#......................................#............#.............................#.......................................
.........#................#.....................................................#..............#.............#....................#.......#.
..#..............................................................#.........................................................#................
...................................#..........#.............................#.........................................................#.....
......#..............................................................................................................#......................
..............#.............................................................................................................................
......................................................#........#.................#.......................................#..................
......................#.......#.................#......................................#.......#...............#............................
..#..............#.......................#..................................................................................................
.......................................................................#...................#.............#..................................
.........#..........................................................................#.................................#.....................
......................................#..................#.......................................#....................................#.....
.........................#............................................................................#.......#.............#...............
....................#.........................................#.............................................................................
...............#............................................................................................................................
......................................................................#...........#........#...................................#............
.................................#..........#...............................................................................................
......#..........................................#............................#....................................#........................
...............................................................#...........................................#.............................#..
..#.........#..........#.................#..........................................................#.......................................`,e7=`???.### 1,1,3
.??..??...?##. 1,1,3
?#?#?#?#?#?#?#? 1,3,1,6
????.#...#... 4,1,1
????.######..#####. 1,6,5
?###???????? 3,2,1`,r7=`?#??##?..???.?? 6,1,1
?#?#?#????????. 8,1
??#?#????#.... 3,2
.????????? 4,1
???#????????#. 7,1
..????#?.???.?#?. 4,3
??#???..#?? 2,1,1
??.?#.?#?#?#? 1,2,4,2
???#?###????#??#.?? 1,13,1
.#????#.?#?##?# 1,3,7
?#??#??#????#???## 5,1,1,1,1,2
?#?#???.###?#.? 1,1,2,3,1
?.#.?#??#???? 1,1,3,4
????#?#???#.# 5,2,1,1
??#???#???##???? 4,7
???#?#??#.#..???? 7,1,1,3
.?.????#????# 2,4,1
?.?#??..????#.? 1,3,3,1,1
.??##??.????#? 4,5
?????????? 1,3
?..???.?#?. 2,2
?#?#.#????.?#??# 4,1,1,2,1
??????????.? 2,2
??#??#?.?#?? 1,2,2
#???#???#?.#?? 1,6,1
.??#??#???????????? 12,1
.???#?.??..#. 3,1,1
????.??#?? 3,1,2
?????#.#?. 1,1,1
.#?????????# 1,1,1,2
???.?????..??????#? 1,1,3,4,3
??.#??#??? 2,3
??#??#?.?.#. 4,1
????.??###?????##.?# 3,5,5,2
???#?????#???#.#? 2,8,2
???#?##????. 1,6
?##???????.? 2,3,1
???.#????? 2,1,2
???.????????.? 2,1
???.??.???? 1,1,3
??##??##?. 1,2,3
?..??#????#.? 1,2,3
????.???#?#?? 2,6
??.??????. 1,1,1
?.???????#????.? 4,6
.??#?????#?? 2,2,1
?#?.#?.#???.???##?# 1,1,1,1,7
...###???#?. 4,2
#?.???###????.?????? 1,1,7,1,1,1
.#??????.???.#???? 2,1,1,2,1,1
??#??#?#???????# 9,3
???#??#??#.? 2,2,1,1
.???.????????.#..?? 1,1,4,2,1,2
#??#???##?????????? 12,2
????????.??? 3,1
????.?##???##.???#. 1,8,1,1
.?????.???#????? 1,7
?????##???? 2,5
??????.????#???????# 1,13
#???.?#????#...? 3,4,2,1
?#?.##?.?..???? 2,3,1,1
?.#..???..? 1,2
..#???#??????#?.???# 13,4
.????#?#????????.? 3,6
???##??#??#?? 2,9
?.???##???..#??? 3,1
#?##???????#?#?#. 14,1
?###?#???#?#.#?? 7,1,1,1,1
.????????##???#?.? 10,1,1
##??##???? 2,2,1
?.??#??????#?#??.??# 1,6,4,1,1
.??..?.##???#.? 2,1,6
???????#.?????????? 7,5
?.?????#??.# 1,1,5,1
???#?#..??????##? 2,1,8
?.?.????##??..?? 1,1,5,1
??.?#.??.??..#?#..# 2,1,1,1,3,1
??#?#?.#???????.?? 6,4,2
.?#??#?.?. 3,1,1
?.?????#???????? 1,3,4
?#??????#?#??#??? 2,1,6,1,1
?#?????##???? 2,1,1,5
.?#????.?#??#?#??? 1,3,7,1
.#?#???????#???#? 1,4,1,7
??#?..???.?###? 2,2,4
??#??#???#? 5,3
.?????#????#???? 11,1
??????#????????# 8,1,2,1
.#??#?.#??#???.??.# 5,4,1,2,1
?.?????#??##?#?#???. 8,3,1
.?#??????? 2,1,2
.#?.?.????. 2,4
?.?.???#???? 1,1,4
?#??#..?#??... 4,2,1
??#?..???????.? 2,7
#?#????.##??? 1,1,1,4
.??##???##.? 9,1
?#??#?????? 1,7
?????.?#?.?. 1,1,3
.??#?.????##.?.??.? 1,4
???.???.??#????? 1,1,1,7
?.???.###?? 1,3
??.#????#?. 1,6
#??#?..#????? 1,2,1,1
?#??????#????.????.? 7,5,4
?.??#..??.???? 3,1,1
?????????????.#? 1,2,6,2
??##?????????##????? 7,1,2,1,2
.?#???#?#??#?? 1,4,1
##???#?.#?#??????? 4,2,1,2,1,1
?.#??##?#??.???#?? 1,8,2,1
..?#.????? 1,1,2
#?????.??.??#?#??? 5,2,6
??#?#????????????##? 5,5,1,5
#???.?#?#?# 2,4,1
?#?.???#.?#??.? 1,1,1,4,1
.#?.??#.?##? 2,1,1,3
..???.???#????#??. 2,2,2
?#?.????#??##????? 2,1,11
??.?????.??##?. 1,4,2
?...#??#?#?##?.????? 1,1,8,1,1
.?.?????.?###.??? 1,4,3,2
??##??.#.? 4,1
#?.##????#?..#.??? 1,8,1,1
???????#???##????#?? 1,1,3,2,5
??.?????#???.?.????. 1,8,1,1,1
?????.????????.### 1,1,2,1,1,3
?#.???????#??????.# 2,6,1,1,1,1
????###??#?..#????#? 2,7,6
??#????????##?.? 5,1,4,1
#?????????#?###? 1,1,1,1,5
..??????#.?? 1,1,1,1
?.??????.#?? 2,2,1
??#??..?#????. 3,5
.###..#?#?? 3,4
???#??.?.??.????## 2,2,4
??.??#?.?.??#??# 2,2,1,3,2
?#???????? 3,2
??#####???????##??? 9,4
??????#?.? 3,3,1
#....??????.? 1,4
??#????.???##. 1,1,5
###?.?..#??????#? 3,1,5,3
.#.??.#?#?.#??#?...? 1,1,1,1,5,1
?.??????#.?#? 1,1,2,1
???.#?????#????#?.? 9,2
??????#?##???#.????? 12,1
.???????#? 2,1
?.?..#?#????????? 1,1,4,4,1
???.?.#.?? 1,1,1
..#?.????#??#?? 2,2,5
?#.#??#???.???# 1,1,4,1,1
???.?###?.??? 3,3
#?.?..?#?##. 1,1,5
?..#??#?.##. 4,2
??????#..????##??#?. 4,10
??????##??#?#?#?.?#. 3,10,1
.?.#?????????? 3,3,1
?.?#?#??##?? 1,1,2
.???#?...#? 1,2
?..????.?#.??????? 1,2,1,1,1,3
.??????????## 3,6
???????.??#?.. 1,4
????.??.?.?? 1,1,2,1
?#?##??##?#?.?#?? 11,2
?.????#??.?? 1,2,1,1
??#??????? 2,1
.??????.???#? 2,4
??#?#?.?.#?. 4,2
?#?#???.??? 1,3,1
????##???#?????#???. 16,1
???..?.??? 1,1
???.?????#????? 2,2,1,3
.????.?#?#?##?#? 2,8
.?????####? 1,5
??##??.?###.?# 2,4,1
??.??.??.? 1,1
??#??????? 2,1,2
??????##??#?. 1,6
?#..?##.#??.#?????? 1,3,2,5
???.#???##...? 2,2
?#..#..#?. 2,1,1
??.#???##??#?????.? 1,3,5,1,1
?#?#??.????. 4,1,2
?#.#.?##???# 1,1,6
.???????###????? 2,4,1,1
??#??##..????##.? 1,1,3,5
?##?#?..?????.?. 5,1,2,1
?????????.?????.? 4,1
?#???#.???? 6,1
#?.#?#????###?.???? 1,1,1,4,1,1
#.????##???#.?????? 1,9,4
#?#???????#?##?.? 3,1,1,5,1
?.?#.??????#?? 2,5
???.????##?? 2,7
??#????.??.????? 6,2,1,1
???..???.?????#. 1,2,3,1
??#?#..#?#?#????## 3,1,9
??.#??????????.. 1,1,8
??#??##??#. 6,2
.???.?##??? 2,4
????.??.????##??.??? 3,1,6,1,1
#?.##?#?#.?.?## 1,6,1,2
?##??#??.#?.# 2,1,1,1
???????#?.?.?? 8,2
#?????#??. 1,6
?#??#?.???? 5,1
##?????.????. 4,1,1
???????##???.?#?.# 6,2,2,1,1
?#?????#????? 3,5
????????## 1,1,3
????.?????#? 4,2,3
??.????????.??###.. 1,3,3,4
?????????#?.# 1,3,4,1
.##??????#???? 5,6
????#??#??.??#?.?#.# 8,1,1,1
?#??????#??????? 2,4,1,2
#??.?#????.??? 1,1,5,1
?????..??? 3,1
?#?.?##.????.?..#??? 2,3,4,1,1,1
???.?????????? 1,10
?##....?#?.. 2,3
##?????#?.????#?.?. 3,3,5,1
##??.??.#..???. 4,1,1,1,1
#???.#?????. 1,1,5
?????#?#?#?# 2,5
?#?#?.????? 3,1
????#?#.?. 3,1
?????.??#?????? 1,1,1,5
???#?##???#?#.? 11,1
?#?#?#..??#??.?#??.. 6,1,3,3
?.???????. 1,1,1
#??#????#????.???#? 2,4,5,2,1
??##????.#????? 6,1,2,2
????.?####? 4,5
??.?..#?#????#???? 1,1,4,5
?#?????????##?#??? 2,2,9,1
.??#?##?????# 5,1
.##????????????#. 2,5,2,1
.?????#?####.##?.# 11,3,1
???????.?..??.?. 3,1,1,1,1
?##.???.??.. 3,2,1
???????.??#???? 3,3
???.???????? 2,4
?.?#?#?????.??#. 1,6,1,1,1
?????????#???? 1,3,6
???#??.#?? 1,1,1
.???..?.?.????? 2,1,1,1
???.??#..?#??#?#?#? 1,3,10
??#?#??##??#???..# 1,1,5,3,1,1
???????#..?#?#?#?.#? 6,1,2,1,2,2
???##.?#.? 3,1
???..???.#?.?????? 2,1,1,2,1,2
#???..?????.? 4,1,1,1
??.??#?#?????? 5,1,1
??#?.?????? 3,2,1
????.###??#??##.? 1,10,1
#?####?##????.#.# 1,8,1,1,1
##?????.#.#. 2,1,1,1
?????#???##???????? 3,1,10,1
?#????.???#?#?? 2,1,6,1
??.???????# 1,3,3
?.???#..?#???.??#?.? 3,2,3
?????.???#?#.# 3,4,1
#.??#??.#?????..#??? 1,4,1,3,1,1
..??.?####????.???. 6,1
?..??##?.?.???#??#?? 1,1,3,1,1,5
??.??#?????.???..? 2,3,2,1,2,1
?.??#???????????#?#? 5,11
.????#??#???.??#???? 10,4
#?#?.#?#???..?. 3,1,1,1,1
??#?.?.?????? 4,1,1,2
??#?.??.#? 1,1,2
#?#?????###?????? 1,2,10
?.??.##???#?????? 1,8
#??..#.?.#. 2,1,1
.#?????????.? 1,5,1
?#?#??.???????????? 5,3,3
???.##.?.???.. 2,1
???.?#??#?????#????# 1,2,7,1,1
.##.?.??#???#?#??.? 2,2,7,1
????????#?##. 2,5
#??.???#.?? 1,4
?.#?.?.????? 1,1,1,1
?#?.#???#?#??#?# 2,12
.??????.??????#.# 5,1,1,1,1
?.???.?..?? 1,1
??##?..?????#???? 3,6
.????.##..?#??. 3,2,4
?##?.?###??? 3,5
.?.?#?##???????????. 8,2
?????#???????## 1,1,3,1,4
?.?????#?#?##?? 2,8
.??????#???.?????#? 1,8,6
?#??#??#.??##???? 2,5,5
?????##????? 7,1
???#?.?##.##? 1,1,2,3
?.#.##??##????# 1,1,2,5,1
.#??????##??.#??#?? 1,3,3,1,5
?#??????#??.? 5,4
??#?..?????. 3,1,1
????#??.?.??? 6,2
??#?.?.??.?.???.?? 3,2,1,1,1,2
?#?..?????##???????? 3,1,7,1
.???..???? 2,1,1
...?#??..?????? 3,3,1
??????????? 2,1,1
??????#.???.???.?. 2,2,3,1,1
???#??#..???#????.#? 5,1,5,2
.###???#?. 3,2
??.?..?????????? 1,1,1,1,5
?????#.???? 6,1,1
?.?#?...?#?????????# 2,11
#?#???#???#?##??? 5,5,4
?#.??#??##?##? 1,1,2,2
??#?#??.??.??.?.# 1,4,1,1,1
????##??#?? 4,1
????.?#?#?. 1,2,1
.???????#? 3,2
???.?.###? 2,3
.#.#?#???.?? 1,1,1,2
.??..#??.#. 1,1
??#?.?#?????#.?#.??? 2,7,2,2
?#?????????.. 4,1,1
?..#??????? 1,2,3
?#??..?#?????# 4,3,1
??.???#??? 2,2,1
#?#???.#??###???.# 1,1,1,1,6,1
###??#.????#???#. 6,1,5
.????.???#???# 4,6
?.??#.##?#???#?# 3,4,3
?????.?.#? 1,2
?.?#????????.. 5,1
#..??.??##??.?? 1,1,5,1
#?????#?#????.?.# 4,5,1,1,1
???.?..????. 2,2
?.##???###??.? 1,2,6,1
???.?#???#????.# 1,2,2,1,1
???.??#?#.????.??? 2,1,1,1,1,2
..?#?#??.????#?.? 4,5
??##????##????##??#? 10,1,2,2
#?#.?#??##.??##?? 1,1,5,4,1
?#?.##?.??#??#?.? 1,2,2,2,1
?.??.????. 1,1,1
??#??.?#??????#??# 1,3,6,1
.?##.???.?? 2,2,1
#?#?????#?.??#????#? 10,2,4
????.#?#??.???? 4,4,2,1
???????#??##?? 2,4,3
?#?.???.?.. 1,2,1
??????.????? 3,1,2
#?.???##?#?#??#?# 1,1,10,1
?#????????#??#?.? 2,1,4,2,1
??.?#..???#??.? 2,2
?#????????????..# 6,2,2,1
???#??.??#?#???? 1,2,9
?##??#????#?????# 3,1,1,8
?#?##??.?..?. 7,1
????????#?? 1,1,1
.?.??.??.? 1,1,1
????????????????? 2,9
#???.??#?#?????.???. 2,8,1,2
????????.#. 1,5,1
.???????.????? 3,2
#???####?#???#??#. 2,7,6
..?###?#???? 4,3
??????????.?#? 2,3,1,1
????????.#????????? 1,1,3,1,4,1
????..#.??#.??#. 4,1,1,1,1
??.?#???#?..?. 1,7,1
????...#?.??#?#.? 1,1,2,3
???#??????#?.?#.#?# 7,1,2,3
..??.???.??###?### 2,9
#??#?...?#??? 5,1,2
.????.??#?.? 1,3
?????#??.#????#???# 2,3,8,1
.?????????????#??#?. 1,1,1,10
??????????###. 2,2,1,4
???.?.??..?#????#?#? 2,2,9
?#??.?#?.###?.???? 4,2,3,1,2
?.??##??#? 5,1
???#??##?#??.###?#?? 11,3,3
?#...??????#. 2,1,1,1
#??..#?#??????###? 1,1,1,3,6
????.???#?????????? 1,1,3,1,2,2
??????#???? 5,1,1
???#.??????#??#????. 1,1,3,8
..????????????????? 8,2,1
???#.?#?.#.. 3,1,1
??######?#????# 10,1,1
?.#?..??????#?#??? 1,1,1,8
?#???.??##.? 4,3
????#?????.# 2,2,1,1
.?#??????# 5,1,1
.?????...?#????? 1,1,1,5,1
??###??#?????#??? 11,3
.????.???#?? 1,2,3
?.???#?????#?.??? 1,1,8,1,1
?..?..???#??.#?? 1,1,6,1
#??##??#?.#?#???? 1,6,1,1,1
??#????.??# 3,1,2
??.???###??#????# 1,6,1,1,1
.????#??##?? 2,1,3
#.?.?.?#??#??????? 1,1,1,6,3
##??????#..?? 7,1,1
?#?#?#.?.?#..? 2,1,1,2
???.??.#?#?..?. 2,4
??##??????#?? 6,3
?#???.???. 4,2
???#???????##??#?? 1,6,8
?.?#??#?.#??? 2,1,1,1
.#??.?#???# 3,2,1
.###????#???.?.??# 11,1,1
.?#???#????#?? 2,9
??##?#??.#?? 5,1
?????#?#???????? 1,1,1,2,2
??#???#.??????#?# 6,1,1,1,1
??#??##?#???? 4,4,2
??.??#??##?#.#.??#? 1,1,1,5,1,3
????##?#.?##?#?.?#? 3,4,5,1
#..??.?##? 1,2,3
?#?.?????#..?#?????? 1,1,4,2,5
?.???..?#.????##.?.? 1,1,4
?.???????###???? 1,5,3,2
.#???.#.?. 1,1
.?#.??#??###?# 2,1,8
??.?????#?. 2,1,1
?#???????##?#?..??.# 1,5,5,2,1
??????#?..?.????## 7,6
?#?.#??#.????#??.# 2,1,1,3,3,1
??.??##??.???..??.?# 1,4,1,1,1,2
#?#?#..??.#????? 5,1,6
.?##????..?.?.. 3,1
?.???????????? 1,1,5,3
???????...?.?????? 1,1
.?#??..??????#????? 3,9
????##??.. 4,1
.?#?.?????#??##??#? 3,1,3,6
??.#??????#.?????#? 2,5,1,3
?????.??????#??.?? 1,3,9,1
?..?????##?#??#?? 1,2,8,1
?????#?##?????.? 1,1,5,1,1
?????#??#.????.???. 1,3,1,4,1,1
??#???#????#?#?.???? 1,2,2,6,1,1
#???#?..?????#??? 2,3,6,1
??.????#?#???.??.# 7,1
??##?????# 6,1
????#?#?#??.??.?? 7,1,1
????#?#??????????? 11,2,2
?##?.????. 3,2
.?.???###. 1,3
.????#?#.?#???.?? 5,1,2,2,1
???.?#???????##??? 1,1,1,1,8
.????????????..?.?? 5,5,1,1
??#.??????.#?#. 1,1,5,1,1
#???.##?#????#???. 1,1,2,7,1
?#??.?#??. 1,3
??..??##..? 1,1,2
?#??.????????? 1,1,2,4
???#????.???. 5,1
??????#?##??#??#??.? 2,10,1,1
#???##???#..#???#?? 3,2,1,1,1,4
?.#?.??.?? 1,2,1
??.?#????????#? 2,2,5
??????.???#?????? 1,1,3,1,2
??.?#???.?#? 1,1,1,2
.?.???#??????? 1,4,1,4
?#.?.?###????#?? 2,9
?????..????????????? 1,6,2
#??????#??..??#??# 1,2,4,5
?.??????#??# 1,6
.???.???????#????? 2,7,2
#???.#?#???##?#??.?? 2,1,1,6,1,2
#?.?????#.?#.#??#. 2,6,1,1,1
##????#??.????? 3,1,1,1,1
.??##?##?#??.???? 3,2,1,2
????#??#???#???..#. 6,3,2,1
??.???#?#?#??. 1,1,5
..??#.????? 3,1,2
???.#.????.?## 1,1,3,2
????.?#..?.? 2,2
.??.???##? 2,1,3
????#?#?#???.???# 12,3
?????#?.?? 2,1,2
??####??.???????##? 7,1,3,2
??#?????.?#.? 1,1,2
????#?????##.??? 1,10,2
????.????. 1,2
???####???????## 9,4
?#???#.?.?#?##?? 1,2,2,2,1
???.???#...#?? 2,2,1,1
..#???.?#???.??.?## 3,5,3
..??#?#?.?.??#??#.? 6,6
.#???.##?????##??? 1,2,12
?#?.?#??.#. 2,1,1
.#???...#? 1,1
??#.???##??## 3,2,2
?????#???????? 1,2,1,1
#?#.???.????.? 3,1,1,1
?????#????#?.?. 3,1
.?????..???#? 3,1,4
???#.??.?.??? 2,1,1
###?###??#?#?. 7,2,2
??..#??#.#?#?##? 2,1,1,7
?????##??..##?#?# 7,6
.#????#??#?? 1,1,2,1
????.???#???? 1,1,1,1
???#.??????????.??? 1,1,4,2,1,2
?????.#?#?.?.?#???#? 4,1,2,3,1
.#???#???#??? 1,10
?..????#???????.. 5,4
#?.??#???????.??? 2,4,4,1
.???????.??#???? 1,1,1,5,1
??#?????###????????? 10,1
.#?????????????????? 5,10
#???#?????#??#?.?..? 2,11,1
???.?????.??.. 2,1,2,1
??????#????? 6,2
???.??#????#????## 1,5,8
?#?#????..?#??.? 4,1,2,1
????#???#???? 9,1
..??.?##???#.#??#### 7,7
???#???#???????##.? 2,7,3
.?????????#? 1,1,1,2
??.??#????#. 1,8
???#???##..####?? 2,3,5
##?.?.#?.???.?#??. 2,1,1,3
.???#??????. 4,1,2
#??.????.??#?.??# 1,1,1,4,3
?#?##??.??##?#??? 7,7
?.?#???#????.#?# 1,3,2,1,3
#?.?#.??????.?? 2,1,4,1
????#???????#?? 4,6
.?????????????#.?? 6,4
??#??????#??.??#???. 10,5
.??..??#??? 2,1,1
???.????????#? 1,1,3
???.???.???? 1,1,1,3
????#????. 6,2
??#.?#?????# 1,1,3,3
?#.?.?#?#???#?#???.. 1,12
?????.???## 1,5
????..#??. 2,1
#??#?????#?#??#.. 1,3,8
????#????.????#?.? 1,5,3,1
#????.??#.?. 3,1,3
..##??...##?.?#?.? 2,2,1
?##????#.??#. 8,2
#..??##????? 1,4,1,1
?.?..??????###??..?? 1,1,5,3,1,1
???.??##.??. 2,3
??.???#????#??#? 1,1,1,3,1
???#???#?????#?. 4,7
?.?????#???????#? 8,1
#?#???????#? 1,4,2,1
??#?##.????#??? 4,4
?????.???#????#???? 1,1,5,1,2
?.?##???#.?#?. 1,3,3,3
??.?#.??????? 1,1,5
?#???#??????.#?# 6,2,1,1
???.?????#??.???? 1,1,4,1,1
?.?#?.??#??#??#.?? 2,7
??#??????. 2,1,1
???????.?.?.? 1,2,1,1
??#????#?..?????#??. 1,3,2,1,2,3
?.#?..???. 2,2
?#.?##.??#?#??..? 2,2,6
??.?..???##. 2,4
??..??#?..?#?. 3,1
?.#?##?##?#.?# 1,9,1
???????????. 2,1,1
??????#????#????### 1,1,1,1,8
.???#??.?. 4,1
.#??###???#??.??? 1,9,1
##???????#????. 4,1,4,1
#???#?.?.??. 2,1,1,1
???#.?????? 1,4
???###..##? 4,2
#????..##.? 4,2
??###.??#?. 4,3
.???..?.?????????? 3,9
#.???#?#??#.???.. 1,3,1,2,1
????.#???#??## 3,9
????#??.????. 2,4
.##???.?.?# 5,1
?.?..##???##?.#.# 1,1,8,1,1
?#??.???#.???#?????# 3,1,1,9
..?????????##??? 7,3
???.??????..?#? 1,1,2,1,2
????#????#??????. 1,1,1,5,1
.#?#???.??? 6,1
?##?#???#?#?.??.? 11,2,1
????.#???#?????????? 1,1,1,7,3,1
???#????????. 3,4
???##?.??.???.?? 2,1
????#?#?#? 1,3,1
.#??###?.#???.#?#??# 6,1,1,4,1
??#?.?#???.??#???.#? 4,5,4,1
?.?..?#??????.?#?#?. 4,4
??#?##????###? 5,4
?????#?#?##?#?#? 1,1,1,1,6
??#??##??.?.???#???? 7,5
.#????.?????.#.??? 1,1,1,1,1,3
?.??#?????????? 1,1,1,4,1
?#??.?.???##??##?# 1,1,1,8
???.#?.?????? 1,4
?.?..???????.#?. 1,1,4,1,1
??#?.?#?##? 2,5
???.????#??? 1,1,1
??#.???#???#?#?? 1,1,11
?.??#????.?####. 4,5
.????#???#???#???# 1,13
???#?#??????? 7,1,1
???????#??? 1,3,1
?#.?#??#?.#?? 1,6,1,1
??#?#?????..??.# 10,1,1
????????.#?#????.?? 1,4,1,1,1,2
??.#?????#???.?# 1,1,1,4,1
?#..?#?..?.???#?.?# 1,3,1,5,1
?.??.???#?? 1,4
.????#??????#??? 1,11
#????.????. 4,1
???????.????????? 2,4
????????????.. 2,1
?????.?.?.#??#?#???? 5,1,1,6,1
??#?#?#??##.# 6,3,1
?????#???. 1,5
??.???.??. 2,2,1
#???#????? 1,2,1
???#???#??###??..??? 1,1,8,2
?.???????#??#????# 2,11
????##.?.#..?? 5,1,1,2
.#..??#???#?#? 1,1,7
?#??????##?##???.? 2,1,8,1,1
.?###??#..???.? 3,2,1
???#????.???????? 7,2,4
??????.???#???#?.?.? 3,6
?#?.??#.?. 2,1
?.????.??.???? 1,2,1,3
?##????????#? 4,1,1,1
?.???????#?#?#??? 2,7
?#?##????.??.?#?#?.? 5,1,2,4
??????.??.??##??#??# 1,1,1,1,8,1
?###?.??.#.??#? 5,1,1,1,1
???.#????#???? 1,6,1
..?#???#?.?.?????#? 3,2,1,1,1,1
???##?#?#.?#?? 1,4,1,2
????#???.?.???##?? 1,6,1,6
?????.????????#.???? 2,1,1,2,2,2
?#?..?.?#??.?????? 2,1,3,5
???????#?#?.#?.?? 10,1,1
?.????.?.????? 3,4
??##??##..... 1,6
???#.??..#???### 1,1,2,2,3
#??#??#??#??#?. 2,1,1,6
?????#.???.??#?#??? 2,2,1,6
.??#?#????#???#??? 6,6
.??#???.?.#??????.?? 6,7
????.#?#?#?###? 1,1,1,3,4
?#??.???????. 2,1,3
???????.??.???? 3,2,1,1
??.?.????#??#??????# 1,1,12,1
?#????.?#? 2,2,2
.#??#.????#??.#? 2,1,1,3,1
???#?#??.??#?. 1,1,1,3
.?#?.??#???? 2,2
???????#?????????#?# 1,1,3,9
??????.??#?? 1,1,1,1
.?.???#???##?#??? 1,8,1,1
?#?#??.???? 4,1,3
..???????. 1,1,1
?.????#.????????##? 3,3,2
??#?????#???? 3,1,4,1
?????.???#????? 2,1,1,2,3
?#??.?.??#???? 3,1,5,1
?.????????#???#?? 1,8,2,1
?#??.#?#?###??#??? 3,1,6,1,1
#?#??????#??.?? 3,1,1,2,1
.??????#???.??#. 1,1,4,2
.?#?..???. 2,1
##.#.#?#???#??# 2,1,4,4
???#?????#?#?????#?? 2,5,6
???#.?#???????. 4,1,1,1,1
???##.????.?.?????#. 4,1,1,6
?.?.??..?.???#?????? 1,1,1,1,6,1
?#?????##???. 2,8
##???#?##?.??????? 9,2,3
?.????.??##?? 1,2,5
???.????.??? 1,1,2,2
??.?.?.??#?#???# 1,1,1,6,1
.?#?##?????????? 8,1,1
?.#??.?????????.???? 1,7,1
????##???..?.? 2,2,1,1
.?##???#???? 9,1
???#????.?#?.?? 6,3,1
?????..??###???#??? 3,11
???#???#??.?#.??? 1,1,4,2,2
????.?###?#?? 1,6
#??.?..?##?? 2,1,5
??#?#?#?##??###?#? 4,11
###??.??#??#?#??.??? 3,1,1,6,1,1
??????????#?#???.# 2,1,1,4,2,1
???????????????? 1,1,1,5
.?#?##??..?????. 7,3
.?.???.?#? 3,2
##????.###????#????# 2,1,4,3,4
??#?#??.#???.? 7,3
?????#?#?#???????# 1,6,1,1,1,2
?.??#.?..?#?. 2,2
?#??.??#?????? 2,8
?????.?.??##???#??#? 1,1,1,12
??.??????? 1,5,1
###??????.????. 6,1,3
??#?.???????? 1,1,3,2
?????#?????# 2,4,1
#.?#????????.??. 1,3,1,3,1
?#???#???#?. 3,5
???.????#?###?#?#? 1,1,1,1,1,7
#...?#??#?..# 1,4,1
##???????.???#?##.# 4,1,1,4,1
???..??... 3,2
???.????????.? 3,4,1
???.??????#??.? 1,1,8,1
#????.????????##. 3,1,2,7
.????????#? 1,3,2
????#?#??????#???? 10,4,1
#????##?#?????##.? 1,11
?.#?..?#????###.??? 2,9,2
.???#?#?#??????#? 1,5,6
??#????.#???# 5,1,1,1
.?????????.???. 2,3,1,1
?.#?#??#?#?..# 9,1
?#?.?#?#??????#.#? 1,5,1,1,1
.?#?###??.????#??? 7,1,3
???.??##?.. 1,3
#??????.?#???.#?? 1,4,2,3
???###????..? 1,3,1
.#??.?#??...? 2,3,1
.?.#?.?#?? 1,3
?.?????#???.#?#?.? 8,4
.?#?###??##? 6,3
#????#???#???#??#? 3,1,10
.#??#?????#?.#.??##? 1,2,1,1,1,4
??#???????....#?? 9,1
#...#???###?##??. 1,1,8,1
????.?##???#.??? 1,1,4,1,1
#??.???????#???#. 2,1,3,1,3
.#?#??????.?. 8,1
???#?????????##.?.#. 14,1,1
.?#??#???. 5,1
????.?#???.#?#.? 2,3,1,1
?#?#???#.?.?#????? 8,6
?#?#.???..?#?? 3,3,4
.???????##?. 1,7
?##?????????.#? 2,2,2,1,1
??#???.???????# 1,3,3,2,1
??..?.?#?? 1,1,2
#??????.?#.? 1,1,1,1
??.??????..??? 6,1
???#.??#?#?.# 1,1,3,1
#??.??????##?###?#? 1,14
????????.???. 1,5,1,1
.??#?#?????#?? 5,1
#????.#?#.??#???? 1,3,1,1,5
?????#?.#..???. 2,4,1,1
???##?????????.. 8,2
?..?.????? 1,1,1
???..#..?.??#. 1,1,1,3
..???#????.?#??#?? 5,5
?#??#.??????.?? 5,1,3,1
#???#.#??#.??#?#. 3,1,4,3
???????#?????#.? 3,1,2,4,1
??...?#?????????# 1,4,6
???.#?###??#???????# 1,1,12,2
??.#?.?..??.?. 1,2,1
.#?#?.??#???#??.?## 4,1,2,1,3
#??????.????#?#? 2,1,2,3
???#??.???????#??? 2,4,2
?#?.?..#???.?#????? 1,1,1,6
.????#?#??##?#.? 1,11
??#???##????#? 6,1
????#????????????.#? 5,1,3,2,1,1
?.????????.#?.?.??# 1,6,1,1,1,1
????#??#?#????.? 1,8,2,1
##?#.??#??? 4,2
.#.?????#????. 1,2,5
?###??##???. 3,5
???????#..????#??.? 2,1,6
???#?#????#. 6,1
?.??#.????..?? 1,1,3,1
???.??.???# 2,1,2
##.??#?#???. 2,6
#??.?#.??#?#?#.???? 1,1,2,6,1,1
??.?.??..?.? 1,1,1,1
.???.##???? 2,6
??.??#???#?#??????#? 2,11,2
##??#?.??. 2,2
#.??#??#??????.?. 1,1,10,1
???#??#???.##?.? 3,2,1,2,1
.?#.??#...?#?? 1,2,3
??????????????#?? 2,11
.?#?#.???? 2,1,1
#?##?#??#?#?. 1,7,2
??????.???? 1,1,1
#??.???#??.??#? 1,1,1,1,3
#???????#???.? 4,4
?#?.??..#??#??? 3,2,1,1
??.??..#?.#????.?? 1,1,2,5,1
?#??#???.???.??? 7,1,1,1,1
?.?????.???? 1,5,1,1
????#?????.??????? 1,5,1,1,1
???????##?.??.? 3,5,1
?#.??????.???? 1,2,1,3
???#?#??.???? 1,4,1
?#????.?#.???# 1,1,1,4
?.?#??????.?## 5,3
????#?.?#? 2,1,2
?????.?.#??? 4,1,1
???#??#??? 7,1
#?????.?#?##?# 1,2,6
?.??.??.????#??? 1,1,2,5,1
..?###.?????#?#??. 3,9
#?????.????.?#?? 3,1,1,2,3
.????????.?#??#? 2,1,4
?#??.??????.??.# 3,5,1,1
???????.??.??? 4,1,1
?????#??.?#?#?? 3,5
?##?????.??#???? 2,4,1,1
??.????.?????. 1,2
????????#? 1,3,1
.?????????..#??#??.# 2,1,1,6,1
??..????##?.???.#.?? 1,7,1,1,1
????#?.#??##????? 6,1,6
?#.#??#?#??????# 1,1,8,1
?.?.?????. 1,1,5
?#????#?.???.?. 1,1,1,3,1
.??.??.##??#?? 1,1,7
?.#??????#.???# 8,2
?.?##?????##?.??. 6,2
?#???#.#?# 5,3
?.??????#??# 6,2
?#??#????#?.?..?# 5,1,1,1,2
????###?##.???.#?#?. 10,4
#???#???##?? 2,8
#??#?##?#?#..?## 7,1,1,3
????#?????.?.#? 9,1
#.?????.??.????? 1,2,1,1,3
?.?#?????#??? 1,1,1,2
??#???.??#? 4,1
???????#??#??.?# 1,1,7,1,1
.??.???.#??#?#?#?? 2,8
???##.??#??????.? 4,2,1,1
#?.????#??????????? 1,8,1,1,1
???????????????? 5,7,1
.?.?#???.??# 1,2,2,2
.??##??????? 5,1,2
??.???#???##??#??#?? 2,1,1,9
?????.??.??###?#.? 1,1,1,1,7,1
?.?###.???#??.?.#?? 1,3,2,1,1,3
?.??.?##?????? 1,2,6,1
?#?#??#?##??????##?? 10,1,1,2,1
#?.??.???#?# 1,1,1,1
.???.?????????#?? 2,1,9
?????#?????#?.#?#?# 1,1,1,3,5
???#.#?????. 1,1,1,1
??..??#?.##???#???? 2,1,1,6,1,1
????????#?? 1,1,5
?????????# 4,3
??###?#.#???????. 6,5
?.#??#?.?#. 2,2,1
?#???#??#??#?? 1,2,2,1
.?..##??#??.? 1,6
??#??#?#.??.???? 8,1,1,1
??####????????? 5,1,1,1,1
#??????????? 3,3
??#???##?#?.#?????. 9,1,2
???##???.# 7,1
???.?#??.? 1,2,1
?.????.???? 4,1
#?#?#???#? 5,3
#???????.# 7,1
??##.???#????? 3,1,4,2
??.???.??. 2,1
???##?...?????# 5,1,1,1
.???#???#? 1,1,2
??.?#??#?#.???.??? 1,7,1,1
##????????#??#?.#?.? 11,1,1,1
??.?#??.#..??? 2,3,1,2
#??#??#??. 1,1,3
?#?#???#????? 6,3,1
??#???#???????? 3,6,2
?##?????#?#??##???.? 3,1,9
???.???.?. 1,1,1
###??????? 4,4
.???#?????????.?. 11,1
???#.?.###??#?#???? 2,1,1,3,5,1
?.#??#???#???#?.#?? 1,1,11,2
??.?.??##?##.??? 1,7,1
???.???##???????#??? 3,9,3
?????????????#?.? 5,2,4
?.?????#??????#? 1,1,4,4
???.????#?#?#.#? 1,1,2,5,1
.?.??..?#???#?? 1,2,4,1,1
??#?..?#??????? 1,7
.#??#?#??.?#?###???? 7,7
#??#.?????##. 2,1,1,2
???#???????????#? 4,1,1,4
????###?###??? 1,10
???####?#???#??#? 13,2
?.?..???#?. 1,4
?.#?#.?.#??.?##???#? 3,2,6
?#???.??###.? 1,5
????????.#?.??. 2,1,2,1,1
?#?#???#.#?#?? 2,1,2,5
#..#??????#..#?? 1,8,1
???..?#??.? 3,4,1
????###?#?.?..# 3,6,1,1
.?#.?#?#?##.???. 2,1,4,1
#???#???#?#?##???#?. 15,1
??????.?#????.??. 1,3,1,2,2
?#??????#??#??..? 8,3
??#?.???#?##????.?? 1,2,1,7,1,1
?.???.??##??. 1,1,3
?????????? 2,6
??.?#?#?#???? 6,1,1
.???##??#?.?. 8,1
???#????####?.??#?.# 12,1,1,1
?#??##?#?#?????##? 9,2,3
#?????.??? 1,1,2
?##?.???#..?????? 3,2,2,2
.##?#??.???? 4,1,1
?#.????.?## 2,1,2
????#????. 1,2,1
??#???.?#.??# 5,2,3
#???#.????? 1,2,4
??##?????.?.?#?.? 4,1,1,1,1
??.??????? 2,3,1
.??.?#??????????? 1,12
???#####.#???#??# 1,5,6,1
???#?????.?#??#?.?? 1,1,2,2,2,1
???#??##??.#????#?? 2,3,3,2
??#???.##. 2,2
##?#?#???????##?#??? 8,5,2
?.????#.?#??? 5,2
??#??##??#.??#?#? 6,2,1,4
?????????##?. 2,4,3
????#?.???.?? 2,2,1,1
?.##?#????#?#???#?? 1,15
#??#??#???? 1,6,1
???.?###????.. 2,5,1
?.??????#?.?.? 2,2,1,1
???#.??.?#???????#. 3,1,2,1,1,2
?.???.#??. 3,2
##..??.???????. 2,1,2,1
.??????##?.?.#??? 3,2,1,3
?????.????#? 3,1,1
???????#??.?##?##??? 7,3,3
??#..?##?#? 3,2,2
?.???.???#?#?? 2,7
##?#?#?#???????.? 6,2,1,1,1
#.??#?#?#??? 1,7,1
.?.???#####? 1,8
???????.?..?. 2,1
?##?.#???????.? 2,3,1,1
???..?.?#???#??. 2,1,1,5
.#?????#?#???? 1,3
????#?..????...?? 1,3,2,1
.?#?#???????? 5,6
.###?.???#??.?????? 3,3,5
?????..???????????. 1,3,3
???????.?#??????? 1,1,2,8
#??.#???#???. 1,1,6,1
?#?????#?????? 8,3
#???#?#?..? 1,5,1
?#?.??????????#?? 3,2,2,2,1
?#?.#???#??##??.??? 1,1,1,1,5,1
?.???###.??#????? 1,1,3,1,6
???##??.?? 5,1
????#???#?????? 1,11
#?????#???#????. 1,2,1,3,2
??????##.?. 1,5,1
#????.?.?##??????? 1,1,1,4,1,2
???#???#???#..?# 1,1,6,1
#?.?####?. 2,5
???..#.??.? 3,1
?????#.??? 2,1
??.?.????. 1,1
?#?#???.?###??#??. 1,1,2,9
.?#..??#????#?# 2,3,5
?.#?#??#?#. 1,6,1
.#?.???????????#..? 2,5,1,1,1,1
??..???.?#????????? 1,3,2,1,1,1
??.?#??#..???. 2,3,1,2
#????.?????#.???? 4,6,2
?##.?.?#?. 3,1,2
?????#?.???????. 4,1,3
.?##?..#?#.??????? 2,1,1,2,2,1
?.##?#?.??. 4,1
??????#?#? 1,1,3
?.??#??????#?????.? 1,8,3,1,1`,t7=`#.##..##.
..#.##.#.
##......#
##......#
..#.##.#.
..##..##.
#.#.##.#.

#...##..#
#....#..#
..##..###
#####.##.
#####.##.
..##..###
#....#..#`,J7=`##.####.######.##
.#.#..#.#....#.#.
...#..#...##...#.
###....########..
#..#..#..####..#.
.#.#..#.#.##.#.#.
...####...##...##
..##..##......##.
##.#..#.######.#.
..#....#....#.#..
..#....#......#..
#...##...####...#
#.######.####.###
..##..##......##.
#........####....

.##......
###.####.
##.##...#
..###..##
...##..##
#..#.##.#
..#......
.##..##..
.##..##..

.......####..##..
.####.##.#.#....#
.####...#.#.####.
######.##.#######
........#..#....#
.####....########
......###.###..##
#....##.###......
.####...#.###..##
#....####.##....#
........##..#####
##..##.####.####.
######..#....##..
#....#..####....#
.####.##.#.######

..####...####
..####...####
#...###...###
...##########
#.#..#..##.##
#.#.##.#..#..
.#.#..##..#..
##..###....##
#.###...##.#.

#....##..
#.###..##
##...##..
#..######
##.#....#
#.#......
#####..##
##.######
.#.######
##...##..
..#......
.#.##..##
.##......
#.#......
#####..##
...######
.####..##

..##.##...###
##.#.####.#..
...#######.##
###..##.####.
#####.....###
######...###.
..##..##...##
..#..###..##.
####.##...#.#
...#.#..#..##
..##.#.#.####
###..###....#
###....#.####
..##.##.##...
..##.##..#...

....#...####..#
.###.....####.#
###.#.##..#.#..
#.#.######...#.
#.#####.#..#.#.
...#......#.##.
####....#......
#.#..#..#####.#
##..#.##...#.##
...#.#.###.###.
..####.##...#.#
..####.##...#.#
...#.#..##.###.
...#.#..##.###.
..####.##...#.#
..####.##...#.#
...#.#.###.###.

#...#...#...##.#.
....#...#...##.#.
..##.###.##..###.
#.#.#.#.#.###..#.
......##.#.#.##.#
.#..#..#...#..#..
##.##.....####..#
####.##...#.###..
####.##...#.###..
##.##.....####..#
.#..#..#...#..#..
......##.#.#.##.#
#.#.#.#.#.###..#.

..##....#.#.##.#.
..#......#..#.#..
##.###.#..##..##.
.#.###....##.##..
#....##.#...##.##
#.#..##.#.####.##
#.#..##.#.####..#
#....##.#...##.##
.#.###....##.##..
##.###.#..##..##.
..#......#..#.#..
..##....#.#.##.#.
..##....#.#.##.#.

.#..#.#...##.
#....#.#.....
.......##..##
......###....
.#..#.#...##.
.#..#.#......
..##..#.####.
......#..#.##
........#..#.
#....###.####
#....##..####

#................
#...####...#..#..
.#.######.#.##.#.
.#.######.#....#.
..#.####.#..##..#
#..######..####..
.....##.....##...

#...#.#####
##.#..#.##.
##.........
#..#...#.##
..#.##.#...
##..#.###..
##..#.###..

...#.#...#..#.#
#....##.....#.#
..#..#..#####.#
.##....#...#...
##..........###
......#...####.
####.#.#.##.###
..#.#..##..####
..#.#..##.#####
..#.#..##.#####
..#.#..##..####

###.#......
.#.#.##..##
.###..##...
##...######
##.#####.##
#####.#.#..
..###.##.##
.#######.##
.#.##..#...
#....#.#...
.#..####.##
##.###..#..
##.#.##...#
#.##.##....
..##.#.#...
.#..#.##.##
.#..#.##.##

.......##....
..#.#..##..#.
..#....##....
..#..##..##..
...##......##
..#..##..##..
##.###....###
......#..#...
#######..###.

####..##.
.#..#...#
###..####
###..#.##
.#..#...#
####..##.
#####.#..
.#.#...#.
.####.#.#
#.#.#...#
..##.###.
##..##..#
...#.###.
...#.###.
##..##..#

#.###..####
.#..##...##
##.##.#.#..
.#..#...###
.##..#..###
####.##.###
####.#..###

#######..##
######....#
.####......
#....#.##.#
######....#
#....##..##
#######..##
.####......
.........#.
.####......
.####.#..#.
#.##.######
######.##.#
##..##.##.#
..##..####.
#....#.##.#
.####......

#.#..#..##.
#####.###..
##.##.##...
##.##.##...
#####.###..
#.#..#..##.
###...#.#.#
.#.#....###
.#.#....###
###...#...#
#.#..#..##.

#####.#..#.
#.###.####.
#..###.##.#
.##.###..##
....#..##..
#..##.#..#.
......####.

##.#.######
.#.#.#.##.#
..###.##.#.
##..#######
#.##.######
.####......
..#....##..
#.###......
.#..#.####.
..#..#....#
.#.###....#
.#.###....#
..#..#....#

##.#.####.#.###
.##...##...##..
.############..
...########...#
#....#..#....##
....#....#.....
..#.#.##.#.#...

.#.#...#..#...#.#
.#.#...#..#...#.#
###.###.##.###.##
#....##....##....
#.#..##.##.##..#.
#.#.###....#####.
###.##########.##
#..#.#.#..#.#.#..
#.#...#.##.#...#.
..##.#.####.#.##.
#####.######.####

.#..####..#..#.
.##.#...#.#...#
##.####.###.###
.#.#####..####.
..##..##..#.###
..##..##..#.###
.#.#####..####.
##.####.###.###
.##.#...#.#...#
.#..####..#..#.
.#.###..#######
##.##.####.#...
##.##.####.#...
.#.###..#######
.#..####..#..#.
.##.....#.#...#
##.####.###.###

.##.##..##.
....######.
#####....##
....#.##.#.
.##.##.###.
#..#......#
#..##....##
.##.######.
.##.##..##.
....##..##.
#..###..###
.##.#....#.
....#....#.
....#.##.#.
######..###

#.#.###
...#...
...#..#
#.#.#.#
##..#.#
###.#.#
#.#.#.#
...#..#
...#...
#.#.###
######.
..#####
#.##.##
#.##.##
..#####

....#.#..
....#.#..
.##.#####
###......
#.#..####
#........
#...#..##
.###...##
.#.....##
#...#..##
#.###.#..
#..#.#...
..##.###.
##.###.##
.###.####
...##.###
#..####..

#.#.#..
#.#.#..
##..#..
####...
....###
..#..##
.#####.
.#####.
..#...#

#.#...###.####...
######.##..#..##.
.#.#.####.#..#..#
..#..####.##...##
..###.#....##...#
..###.#....##...#
..#..####.##...##
.#.#.####.#..#..#
######.##..#..##.
#.#...###.####...
..####...##.##.#.
##..#...#.#..#...
#.###....##...#..
.#.##.#..#.#.#...
##.#.#..##.##.##.
##.###.....##.#..
##.####....##.#..

###..######..##
........###..##
##.##.###.####.
##....##..#..#.
#..##..#.......
#..#...#..####.
.#.##.#.#..##..
..####..#.#..#.
.######........
#.####.##.#..#.
##########....#
.######.#......
.######.#..##..

#.#.###
..#..##
..#..##
#.#..##
..#####
....###
.######
.##..##
.###.##
##.#...
##..#..

###....#...
#.##..#.#..
..##..#.#..
###....#...
##..###.#..
...#..####.
...###.####
...###.####
...#..####.
##..###.#..
###....#...
..##..#.#..
#.##..#.#..
###....#...
.####.###..

#.##.##.##.#..#
...#....#...##.
#..........##..
.#..####..#....
...#.##.#...#..
##.##..##.###.#
..#.####.#..##.
..##.##.##..#..
..#..##..#...##
##.##..##.###..
##.##..##.###.#

##...#.#.#...
##.####.#.#..
#####..###.##
..#....##.#..
.#####..##.##
......##.##..
###.###.#.#..
###..######..
####.#####...

.##.###.##.......
.#..#.....#..###.
.#.#######.##.##.
......##.##..#..#
.##.#####..#.#..#
..##.#.....#.####
#...#..##...#.##.
#.##.#####.###..#
#.##.#####.###..#
#...#..##...#.##.
..##.#.....#.####

..#.####.#.......
...#.#..#...#....
..#.#..#.#..##..#
.##.#..#.##.#....
#.#.####.#.#.....
....####.........
..#.#..#.#..#....
.#.######.#..####
##.##..##.###....
############.....
..#..##..#...####
.###.##.###.#.##.
#.#.#..#.#.#.####
.#..####..#......
.####..####..#..#

.#.##.#......
..####..#..##
.##..##.#..#.
.#.##.#..##..
..#..#.......
..#..#...##..
..####..#..#.
###..###....#
.#.##.#.####.
...##....##..
#.####.#....#

..#########
.#..#.##.#.
..###....##
##.###..###
#.###...###
.#####..###
##.#......#
#.###.##.##
..#..#..#..
#.#.#.##.#.
....######.
..##......#
.##..####..
.#.#..##..#
.#.###..###
#.....##...
#.....##...

.##....
.###...
..#....
##..##.
##..##.
..#....
.###...
.##....
.##..##
.....##
...####

.##..##...####...
.###...#.#.#..#..
##.......###...#.
#...#..##....##.#
#.##########.##..
...######..#.##.#
#......#..#.##...
#......#..#.##...
...######..#.##.#
#.########.#.##..
#...#..##....##.#
##.......###...#.
.###...#.#.#..#..
.##..##...####...
.##..##...####...

#........####..
#.#....#.####.#
#.#.##.#.#..#.#
#..#..#..#..#..
##......######.
.###..###....##
#...##...####..
.##....##.##.##
#.#.####.#..#.#

###....
##.####
..#####
.#.....
.#.....
..#####
##..##.

.#.##.#.##.#.##.#
.#.##.#.##.#.##.#
..#.#.#....#.#.#.
##...########...#
###.#...##.#.#.##
.#..#...##...#..#
.#.#..........#.#
.####.######.####
...#.#.#..#.#.#..

.....###....#
......##.##.#
...#..##.##.#
.....###....#
##...#.######
.##.##...##..
#..###..#..#.
....#........
.#..###.#..#.

..#.##..###.###.#
..#.##..###.###.#
###..###....#.##.
....#.####.#.###.
##.##.#..#..#.#..
###.###.#..#.####
..#.#..#.##..#.##
###....#..#.#.#.#
.#.###.#.##.#.#.#

#....#.....#.
#.#.##..#..#.
###.##.###...
.#.##...#.###
..#..###.....
.###..#...##.
..##..#...##.
..#..###.....
.#.##...#.###
###.##.###...
#.#.##..#..#.
#....#.....#.
#....#.....#.

#.####..#
#####.##.
...##....
...##....
#####.##.
..####..#
..###....
#...#.##.
#.##.#..#

#..####
##..#..
..#..#.
#..####
#..###.
..#..#.
##..#..
#..####
.#..##.
.#..##.
#..####

.#.#...##...#
.#.##......##
##...##..##..
.####.#.##.##
###.##....##.
.###..####..#
#..#........#
..#.#.#..#.#.
..#.#.#..#.#.

###.#####
###.#.###
#.#.###..
#..##.###
.###.##..
##..#....
.......##
...######
.......##
##.##....
.#..#####
.##.#.###
#..#.....
#.#.#....
#.#..#.##

.####.#
#....##
.#..#.#
.#..#.#
#....##
.####..
#.##.#.
#....##
#.##.#.
######.
##..##.

.###...##
.....#.##
..#..##..
...####..
..#.##...
#.#######
#.####.##

###..#..#..##
#..#.#..#.#..
.....####....
####.#..#.###
...#.####.#..
#..#.#..#.#..
#.....##.....
#.##########.
######..#####
.###.#..#.###
.#####..#####
.....####....
######..#####

..#####..
..##.....
#.#...#..
.#.######
.#.#####.
..##.#.#.
..##.#.#.
.#.#####.
.#.######

#..####
#..#..#
#..#..#
.##....
....#.#
.##.#..
######.
....#.#
....#..

##..##.##.#..#..#
###.#.#.....#....
###.#.#.....#....
##..##.##.#..#..#
....####.....####
##.#..#.######..#
.#.#######...#..#
.##.#.#.#.#.....#
..##......#...###
.#.######.#######
.#.######.#######
..##......#...###
.##.#.#.#.#.....#
.#.#.#####...#..#
##.#..#.######..#
....####.....####
##..##.##.#..#..#

.....#.##.##.#.
.....#..#.##.#.
#####...#.#..##
.##.#..##.#...#
#..##..##..#..#
.....###.###.##
#####.#....#.#.
#####..####..##
.##..#...#..#.#
#####..#.#.####
......##.###.#.
####.##.....###
####.###.##...#

.############...#
.############...#
###........###.#.
####.#..#.####..#
.###..##..###.##.
.##.######.##..##
##..######..####.
.####.##.####...#
.#.#..##..#.#.##.
##..#######.##..#
#..###..###..#...

.#...#..######.
#..#####.####.#
....#.###.##.##
#.###.##.#..#.#
#.....###.##.##
#...#.###.##.##
#.###.##.#..#.#

#.#..#.###..#
...##.....##.
.######......
..#..#.......
#.#..#.#.####
.######.#####
###..###.#..#
.######......
#.#..####....
.#....#.#####
#..##..#.....
...##...##..#
.##..##..#..#

###...####...
....########.
####.#.##.#.#
######.##.###
##.#.######.#
###..........
##.##########
..##...##...#
##.#.######.#
###..#.##....
..#.#.####.#.
####..####..#
##...#....#..
###..#.##.#..
###..#....#..
..#.#..##..#.
..#....##....

..#.#..#.#..##..#
#.#......#.##..#.
..########..##...
..########..##...
.##.####.##.####.
.#..#..#..#.#.#..
...######....###.
...######....###.
.#..#..#..#.#.#..
.##.####.##..###.
..########..##...

#..#..##......##.
#..#..##......##.
####..##......##.
.##.##.########.#
..#....#.#..#.#..
.#.#..#.##..##.##
#.#.#.##......##.

####.##.##.##
.#####..#..##
.#....#.#.#..
..#..#.#.#.##
.#...####....
#.#.###..#.##
..####.....##
..####.....##
#.#.###..#.##
.#...####....
..#..#.#.#.##
.#....#.###..
.#####..#..##
####.##.##.##
##.#...#.....

#..#.#...##
.##.######.
####.##.#.#
.##.##..#.#
.##.##..#.#
####.##.#..
.##.######.
#..#.#...##
####....#.#

.....##.#
.......#.
....#.##.
.....#...
.....##.#
####..###
........#
####.....
.##.#.#..
....#####
#####.###
####...#.
....##.#.
....##.##
####.#...

.#..#.....##.
##..##.#..##.
#.##.###.#..#
##..##.######
#.##.#....##.
#.##.#.##....
######.######
.####..#.....
..##....#####
#######.....#
.......######
######.##....
......#.##..#
#....########
##..###......

#.#.##..#.#
.##.#....##
####.##..#.
.#..####.#.
.#..####.#.
####.##..#.
.##.#....##
#.#.###.#.#
.....####..
#.....#####
##..#.####.
#####.####.
########.#.
########.#.
#####.####.

.#.....#.
.#....##.
##....#.#
####.#.#.
##....#.#
####.#.##
..#.##...
#.#.##.##
..####..#
##.#.#.#.
.#...#.#.
#.##....#
#.##.###.
##...##..
##...##..
#.##.###.
#.##....#

..##.....#...#...
......##.######..
.........####.#..
........####.###.
.####...#..#..#.#
.......#..#.##...
##..#####...#.#.#

..##....#
..##....#
#.#......
..##.##.#
#...#..#.
..####.##
.###....#

.######.#..#.##.#
##.##.##..#.#..#.
#..##..##.#.#..#.
.#.##.#.#########
.#....#.#.#.####.
.##..##.##..#.##.
.........####..##
#########.##....#
#......#.#..####.

#.##.#....#.##.##
##..##....##..###
..##........##..#
.####......####..
.#..#.####.#..#.#
.##.#.####.#.##..
################.
......####.......
#....######....##
#######..#######.
.......##.......#
..##...##...##...
......####.......
#....#.##.#....#.
.####..##..####.#

.#.#.##..#.######
.##....#.#.......
#.#...##.#.###..#
#.#.##.##.###....
.#.#..#.##.#.....
#..##.####.......
..###..##...#....
...#..#...#.#.##.
......###...##..#
.#..#.#...#.##..#
##.####.##..##..#
##.#..#.#.#.#.##.
.#.#.....#..#....
.###..#.#...##..#
...#.##.######..#
...#.##..#####..#
.###..#.#...##..#

###...#..##.##.
.#..###.##.#..#
##.....#..##..#
....#.#........
#..####.#..####
.####..#..##..#
#####.#.#######
#...#..########
.##......#.#..#
.######.#...###
...##.#.#.#####
..#.....##.....
.....###...####
......#.##.....
......#.##.....

#........###.....
....##.......#.##
....##.......#.##
#........###..#..
.###..###..###...
.#.####.#.#.#..#.
##.####.##..#...#

####.#......#.#
....#.......##.
####..#....#..#
##..#..####..#.
..#.#........#.
##.##.#.##.#.##
.......####....
##.#.########.#
##.##..####..##
...#.###..###.#
.....########..

...#.#..##.###.
...#..#...#..#.
...#..###..###.
###......#.#..#
####....####.##
..#....####..#.
...##....##..#.
..#..##..#.#...
##..###..####.#
..#..#.#..#.#.#
##.....##..##..
##....##.#..##.
##.....##.##.##
..#.##.#.##..#.
###..##.##.###.
###.###.##.###.
..#.##.#.##..#.

#..#.##..
#..#.#.##
#####.###
.##..####
..#.#####
#..#.##..
....#....
#..##..##
#..#.####
.....####
####.####
.##..#.##
#####.###
.##..#...
.##.##.##

..##.###.#.##..
..#..##.#.##..#
##.......#..#..
##..##...####.#
##..##...####.#
##.......#..#..
..#..##.#.##..#
..##.###.#.##..
..#..##....#.#.
#....##.#......
##.#..###.....#
##.#..###.....#
#..#.##.#......

##.##.##..####..#
#......#........#
###..#####....###
.#....#.#.####.#.
###..###.#....#.#
.##..##...####...
..#..#..#..##..#.
.##..##...#..#...
#......##..##..##
##....###.####.##
#......#..#..#..#
###..####..##..##
#......####..####
##.##.###......##
###..####.####.##
.######..######..
.#######..#..#..#

####..#..#..#
.##.#..#...#.
#..#.#....#.#
....########.
#..#.#.##.#.#
....##.##.##.
.....#....#..

..##.#.#.
......###
..#.##.##
###..####
.#.######
#.....###
....#.#..
....#.#..
#.....###
.#.######
###..####

..#.##.####
#.#.##.#.#.
#.##..#....
.##.##...#.
.###.#.##.#
#.#.###...#
.#.#..#####
......#.###
......#..##
......#..##
......#.###

.#.##....
####.####
##.###..#
.....####
..##.####
#..#..##.
#######.#
#...##..#
..#.#....
#.##.....
###.#.##.
#....#..#
#...##..#
###......
#..######
#..######
###......

.#....#.####.##
.#....#.####.##
#...#......##.#
##.....#.#.#.##
.###.......##.#
...##.###.##.##
#####....#..#..
#....#..#.###..
#....#..#.####.

###...##..#.##.
...##.#..##..#.
##.#.#..#..#..#
##.#.#..#..#..#
...##.#..##..#.
###...##..#.##.
.#..##..#..#..#

.##..##
#..###.
.##...#
.....##
.....##
.##...#
#..#.#.

###......
.#.##.##.
.#.##.##.
###......
..####..#
#.##.###.
.##.#.##.
.#.#..#..
.#.#..#..
.##.#.##.
#.##..##.

###.#.##.
##..####.
##......#
##....#.#
###.#..#.
.#.#.#.#.
###.##.##
..#..#.#.
..#..#.#.

..#.#...#.#..##
..#.#...#.#..##
.#...#####.#..#
...###....#..#.
.#..####..#.#.#
.#..#..##.####.
#######.##.##..
..#####.####..#
#.####.##...##.
.##...####....#
##.###.#..#####
#..###........#
.#.#######..#.#
...#......#..##
..........#..##

.#.##.##.#####.
.#..##..##..##.
.#...#.#####.#.
#......#..##...
.#....##...#.##
#....######..#.
..#..#.#..##...
..#..#.#..##...
#....######..#.
.#....##...####
#......#..##...
.#...#.#####.#.
.#..##..##..##.
.#.##.##.#####.
.#.##.##.#####.
.#..##..##..##.
.#...#.#####.#.

.....###.####.###
.#...###.####.###
.#...####....####
#.##.....####....
#.#...###....###.
#....##.##..##.##
#..#..##.####.##.
.#.##.....##.....
#####.##......##.
##.#.............
#.###.#.######.#.

...##.##.##.#.#
###.#.#...#####
.#..##...##..#.
.#..##...##..#.
###.#.#....####
...##.##.##.#.#
.###.##......#.
.###.##......#.
...##.##.##.#.#
###.#.#....####
.#..##...##..#.
.#..##...##..#.
###.#.#...#####
...##.##.##.#.#
#.##.#..##..#..

##...#..#...#
..##.#..#.##.
...###..###..
..#..#..#..#.
..###.##.###.
..###...####.
#####....####

.#...#.####
.#..#..####
.###.#..##.
.###.#..##.
.#..#.#####
.#...#.####
.##.#......
#.#...#.##.
...#.###..#
.#..#.##..#
..##.###..#
#.#..#.....
####.###..#

..#....########
..#....########
.#.##.#...##...
.###.#.###.####
#...#...#.##.#.
##..####.####.#
##..##.##.##.##
#...#.####..###
##.#.###.#..#.#

#####.#..###.
...#...####..
...#...####..
#####.#..###.
...##..##...#
#..#.#.##.#..
###.####.###.
##.#...##..#.
###.###...#.#

..#..#.###.#.##
.....#...#.#.##
.....#...#.#.##
..#..#.###.#.##
##.#..##....##.
..#.###.#.#....
#####....#.##..
..#...#....#..#
##..##.######.#
...#..#..#####.
##..#..#.##....
...##.#####...#
.#.###....##..#

#..#..#..##..#.
...#..##.##.#..
###.#.########.
##.#...##..##..
#.####...##...#
.####.#.####.#.
##.##..######..
.####..#....#..
.##.##.##..##.#
..#.##...##...#
#.#.#.##.##.##.
#####.#.#..#.#.
...##...####...
#.#..##.#..#.##
.####.#.####.#.
.####.#.####.#.
#.#..##.#..#.##`,L7=`O....#....
O.OO#....#
.....##...
OO.#O....O
.O.....O#.
O.#..O.#.#
..O..#O..O
.......O..
#....###..
#OO..#....`,s7=`...O.....#O#....O###...#..OOO.O#....#.O.O.....O...OO##.#..O.O...........O........#...#.#O........##.
#OO..O.##..#..........#.....O...##..O#.#O#O..##.....#.......O....##.#..#OO.O#O#....O..OO.O.....OO#.#
.###..O.#...O.#......O.#.......#.........#OO##.....#...#...O....#..O.O.O.#.O..O...##....O.O#.O....O.
O.O......OO.O#..#....O...#..##...O.#..##O.#...O.O....OO#......O...#...OO#O......O.....#O.O.#.#O.#O..
.#....#.O#...O..O#..O.##..##.O..O...#...#....O#.#..OOO##..O#.#...#.#O.O#...#...O.O...#...O#O.###....
.#.....O..#...#..#.##.OO.#O.#........................#...#OO.O.OO.##....O..#OOO#........O.....OO.#OO
O....#.O.#O#O..#...#O.O.OO#O.OO......O.O.OOO...O..O.#....#.OO.......OO..#.....O.#..#.OO#.....#.#....
.#..##.O....##O#.O...O...#.O..#.O.O.......#..........O#.O#.O..O..O#.#O...#O.#......O.......#.####..O
....#......#...##.OOO##O.#.O##.....O.....O.........#...#.#.#.#..#.OO#O.#.###...O...O#O.O.#O..O#O....
..O....##O#.....#O..#O..O...O..O....O..O..O..O...OO#...#O....#.#...#O.#..O.O#O..O........O#O......##
..O....#.##OO.O..O##..#..OO#.....#O.#.#..#.OO......#.#..O.....O..#.O.O..O.O..........O...#.O#O...O.#
O.#.#.O.#OO...OO.......OOO..OO......#..O.OO.#............OO...#O....O.OO#.O....O........###..#...O.#
..#.O#...........O.#..O..OO.O#..#OOO.O#...OO..OO....O...#.O#.O.....#.OO.O.O...O.....#.##O.O.....#...
#......OO.O#..O.......O...#.O.O#......#.###.#.#.O.......O.#.#..O..O...O#....OO..OOO.O....##...#.#.##
.#..O...O.O..OO.....O#...#..O....O..#.....OOO...O##.........O..OOOO#........#OOO#.....O#.O.......#O#
#..OO#.O#O...O......#.....#O.#........#.....O.OO..#O#..................#OO.#..O..#...O.....O..##.#..
.#.#O..#..OO.O.....OOO......O.O#..O...#....##...###O..OOO.....O....O.....#..#.#....OO..##.......O...
...O.OO....#.##O#..O..O.#...O.............O#...O#.##.O....OO.......OO..#OO...O#O#......O....#..OOOO.
.O..OO..#..O...#.O#.....##..#.........O.##.....O...O.....#.#.#O.....#OO......#..OO...O......#O.OO.#.
.O#OO.......O##...#............OO##....OO.O#.#O.O...#..#...#.OO.O..O.O.O#O..O...#........#.#O...O...
.#.#.O#OOO.##OO...O..O.O##.O.O#....#O....####.O.O..#..O..O.O.#....O..#....O..#......O.O.#OO..#.O.#..
...OOO...O.....O....O......OO#...#....OO.#.O#O....O#.O.O...#.O....O.#...#.....O#..#.O#.#.O.....#OO#.
OO..O....O.O#.O...#....O.#........#.#....#....O...OOO.#.....OO..#.........O..##.........OO.........O
#...##.....OO#...#..O...#.O#.#.#O....OO.O..O#.##.O.....O.O#.#OO..#...#OOO..#....OO..#O..#O#...#.#OO.
OO.#.#....#..O.....#..OO......O......OO.OO.#..OO.#..#..#.........O#......##.##O...O#..OO.OO...#O....
....O..#.O#.O#..##O.O...#......O.......#....#..#..##...OO.O..O#.O.....OO##.#..O.....O#.O#....O...#O.
.#.O..#.OOOO#...#O......O.#..##...#.O#...O.##OO.O.O.O...#..O#.#O...O..#O.O..OO.O.OOOO#O..O...O#..#..
....O#..#..###..O#O....OO...#.O.O..#....#O...#O.....#OO...O...OO......##.OO.....O.O..#.....O.O.....#
...###.O....O..#..#.#OO.#.O..O.#OO.#...#....O.....#O.....#.#...OO.......O.#...O##O.......O.##.O...O.
.......#....#O#O.#...OO..#OOO.....OOO.....##....###...O...O...#OO.O.##..#OO...#..#.....O.....O.O#O.#
#O.O..O.#.O....#OO.OO....OO.....OO.OOO..##O.#.....O#OO....#O...O#..O#..#.OO.O......O...O......O#..O#
O.......#..O............#O.#O.OO.##....OO.#OO..##O...#OO....#...#..#....O#..O......O..O.#......#.O#.
O.....#O#O......#..#...OO#.....#.#.....OO#..OO#.O..#.O....#..O..#.....O...O...#......O.....OO....#.O
...#...#......O....#..O..O#O..#.##O.#O...O....O..#.O###.#.#..........O...#.....O........#..#..#...O.
.#....#.....O.#.OOO........O......#...#.O..#..O.O...O#.......O.O.#..#..O.....O......O#OOO...O#......
.O...O#....O.....O.O...#O.#....#.##......O.O#OO#.....O..O..OOO..#...#....##.....#O.O.#.O#..........#
#....#..#..O..O#.O#O.........O..O.#.O.OO..#O....O.OO.#.OO......#.#..O...O.#.#O.#.#..O.O#..O.#...#O.#
OO...#...O...O.#O.O.#....OO##.#.#...O#....O.#..O...O...#......#.O.O...O.O.OO.#..O..O.#O..O#.#..#...#
.....O..#...O#.O.#.O.#O##O.##.OO#..O.O#O#...O#........#........OO.OOO.O.O.........#..O...........O..
..O...O.O..O..O......O#..##.O..#.#.#......O...#...#O........###..##......O........#.#...OO..........
.....OO#....O.#.O.O..OO#...O.....O..OO.#O..........##..##..#.O..#O.O#OO#O#.O.O#.OO....#O..O....O....
#.O.#.#.O........#..OOOO..O.O#.#.#.....O#.O#..##.....#..O..O#O#OO...#..O#O..OO.O........#......#.#..
.##.....O.#.......O......O##O#.........OO#..###..#............O....O.#.OO......#.....OO#..#..O...O#.
O.O..#.O.O.....O...O....O..OO....OO#...#.OO........O.O...O.....#.#....#O..#.#......#.#....#....#.O#O
..O#..#.#.#....O..#..O.O.O...#..##...O..O##.......O...O...O..O.O#O......O..O.O.OO.##OO.OO........O..
..##.....#.O......#.O....O.O..O#..O....OO#O...O.#.O.OO#.OOO#.#.OO..#O.O#..##.O.#...#O.#.....#.O#.O..
#O..#..O..#.O..O...O....#OOOO..O.O#.##O.O#O...#OO...O.#OOO.#.#......#...#.O#.O..##.#..#..O.#.......#
..O.#.#OO...O...O#...O...O#...O.........#...#.O..#...##..O..O.....#...OOO.##..........O..#O#O.#.O...
...#..O....#...#.O.......O...##...O..O....O.......O.....O..#..OO.....OO..#....OO#O.O#..#OO..O....#O.
.....#O.O#.#...#.O.....##..###..O......O.O#.O#.....O......#....O.O.......O#...##.O....O#O...#..##..#
....#.#..#..#..##O.##.#.O.....O..#OO..O#.O.#OO.#O#..OO..OO#.#.....O..#.OO###.##.......O...#......#..
..O..#O.....O......#...O.#...O..O.#....#.#.O...O.#.OOO...O.O.##.....O..##....#O...##.O.O#.##O#...OO.
..#O.#...O#.#............#.O..O.#.O.#O#.#...##.O#..O##..#..#OO.O............O.#.OOOO......O.O.....##
..O...OO..#......OO.#OOOO.O.#.#..#..O..OO.O.O.....#.##O......O...O.#....O....#.OOO.O..#..#.##.O.#O..
O.#.#.O...#..##O.OO......O.O..O.O.#O...........O...OO#O#...OO..#..O..#O...##.O......OOO.......#O..#.
......OOO....#..##O#....O.O.#.O...O#OO..#.O.......O.O..OOO.#...O.#OOO.O.OOOO#...#.....OO..O.O.OOO#..
..OO.....#.O#......#.O..##..O..OO.O#..O#....O...O.....#..#......O.....O#.O.O#OO.OO.O.OO..#.OO.O.#O#.
.##........O.OO..#...#..#.#O.....#O..#O..O.O..#.O.OO...O.#O#...#.OO.O...#.O#....OO#...##..#O........
O.#..O.#O.#..#..O#.......O.#.OO..OOO#..##.##.....#..#.OOO..OO#...#O.O#.O..#........##...O....O.O.OOO
.O..#..#O...OO......#...OO#.#........OO..O.#O.........O..#O.#O...##.#O..#...O...O........##..O##..O.
.O.#.....#O....O....OO....#....O..#..O......#..OOO.O.#O....OOO.#....OO.###.#....O.O..#..#..#..#.....
.#..O..#.##....#..#O.O..O.OO#..#....OO...O.O...........O#....O....O......#...O#O.....O.O.....OO.O...
##......O#...................O..O.O....#.........#....O###.#...#.OO.O..#.OO.O....OO.#.O...O...#...##
##...................O...........O.O##....##O...OOOO.O..#.O....O.#...#..OO......O.O.#O.#....#.#.O..#
...#O..O....#......#.#.#.....#.O#..###.#.#...O#OO.O..O.O...#OO#.......#.O...O.#...#...O..O..#O...#..
O..O....#..O...#.O.O#......O.......#.OO...O...OO....O#O.OOO...O#....O...O..OO.O#.......O.O..O#......
#...OOO.O..........#..O.#...#..O.#O.O#O.#....#.O.##....#..OO##OO.O.....OO.....OO.#.O...O.......#..O.
.O...O.O...O..O#.....##..O#.O#....OO..###O#..O#..#.#.#..O.O#..#.....##.O.#O#.O.#O.....#.O...OO...#O.
#O#.O...O#...#...O....#.O.##O#...O#.#.#O#.....O.O.O...OO#OO#...O............###....O..#OO#....O..#.O
..#..O.O#..#......#..#........O..O....#...O.O........#.#....#..#.....OOO#.#....OOOO.#O.#..##O...#..O
......O..O..O.#..#...O...#..#..O...OOO.O.OO.O...#.OOO.#...O.#...O...OO#.##..#.##.O...O.OO...OO....##
..#....O..#.#..##O.....O..O...#OOO#..O....#.......##.O..OO#.OO#O..O....O.##O..O....O##O#OO#O...#..O.
....#.#OO.#.#O...#OOO....OOOO.#..O....O...O.........#O#...###...#..OO..O.....O.O.#O..#....###O..##..
#..O.#.O.O....OO.#..#.OOO....O.#....###O.#.##.O....#O......O..O..OOO.#..O......OOO..O.....OO.O.#.#.O
#.O.#....O..#O.##.O......OO....O.....O#O......#.O...#.##..O#..O.OO#..##..O...#.#O.O..O.O#OO.#..##O..
....OO.O....#....O#...O..#.O..O.#.O.#.#....#.O....O#OO..O.O.O....#...#...O#O...O...O....#....O.O.O..
.....#.OOOO.....#...#OO...O.#....###...O.O...#..#..OO..O.O#..O#OO.O.#.O#O.OO....#.#O#OO...O.OOO...#.
.O..#.#.###OOO....#..O....OO.#..O..OO..OO#O#O#..#...O...#...##O..#.......#O...##O..#...##......O.O.#
.O.###..O....O..OO#O....O#....O...O...O..#....O...#.......O.......#.O.O.#......#.OO#..O.OO..O.O.#..O
....#O...#.O.#.O.........#...#....O...#.O.#...O..#.#..O............O...O.#O..O..##.O.O...OO.#O.O...#
#.#.....OO#...O#OO.#..#..........#........O.O#.O.....O...#..#.OO#O.............O.O.##...##OO..#....#
O.OO...O#.OOO#O..O.......O##O#O###.##..#..O...#.#.....O...#..O.O..O..O#.O##.OOOO#...#.....##........
#............#O....#....O#.....O.OO.O...#....O.#O.#...##.....O..OO#...##.O...#.O....#....O....OO#O..
#..OO...O.....O.#..O#OO........O.......O....O#O###.#....O#O..##.###O..#O.O....O.O....O.#O..#...O##.#
..OO..#.......#...OO.#OOO#..#OO....#...OO..#O...O....O...#...O#......O.O...O##...OOO.#........O.O..O
O#.OO..O.O..#...O#O..#OO..#.#.....O.##.O.O.O.#..O.O...#O...#.......#..OOO##OO.#..O....OO....#OO.#.O.
.......#...#.#O.OOO#..#......OO.#O...##..O#.O...#O.....O..#....OO.O...OO..OO.OO..O...#.O#..OOOO#.O##
.#.#.O..O...O..#.....#..O........#.O.#..O...#.O..O..#.O.#..#..O.....O.O#...O....O....###..O.#....#..
..O..OOOO#...#...#...O....#O##.O.#..#...#O...O....O.....#..O..O...##O..O.##O.....O...##....#..#.....
...#.#.....#.......O...O#....#..O........O......#...#.#..##.O..O....#.O.....O.O#.##..O..#..#...#..#O
..OO......O..#...#.......#.O....O.##.#O.#O..O.O.OOO..O.##.#O..#..O#.O..#O..O.#O.....#..#..O.O.......
##O#O.....O......OOO..........O#OO...OO...#..#......#.O.....O#....O..OOO......#...O..O..#O......#...
..O....O...O...##O.O#O.#.#...#.O#O...#.#......##..O#O.#.OO......##O..O#.#..O......##...#O...#..OOOO#
....#O..##.....#........O...O..###..#...O...#O.O..O.O...#..#O......O#....OO#....O.#...#..OO..#..O.O.
OOO.#O.#.#.#..O.#.#O.....#.O##............#........O..OO#O##..O...O..#..O......O....OOO..O..OO......
..O.#......O.O..#O..O.#.O.O##...OOOO..O...#OO#.....O...OO......O.O...#.O.....OO.O.O..#.O..O.O.O...##
..OO.....#..#.....OO.#.O..#.........O..#..O.......O.##..OOO.......##.....O..#.#.O....#.O#....#..##..
..#..OO.OO......O.O....#...O.#..#...O..O##...O.OOO....O.O#..O.#..#......#.....O.O.O#.....##.....#O..
OO...#.##....OO.O...O..O...O..#.O.#.#.#.O.##.#...#.........O#.OO...O...#O...#....OO....#......#O.O..
.O...#.....O.OO.O##......O...#..#..O.#.....O.#O.O.##O.O.OO.OOOO...#O.#.O....O.#..O........#..O..OOO.`,F7="rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7",f7="kf=9,gmn=6,sfvcm=2,cm-,dqb-,vxt=6,mnvm-,jd=7,glz=6,pfr-,kzt=2,nk=6,lsnmn=7,lx-,nz=5,rpm-,nz=6,fsn-,dl=1,jb=5,bd=3,zhr=1,qkzfg=6,vt=1,qsm=5,jtvcd=2,fsp-,sfvcm=7,vklt-,hd=9,vv-,cm-,jzz=2,pt-,pd=6,hvttcx-,dplfr-,qk-,pf=3,gsqglz-,mhb-,zsk-,nn-,jd-,cmmntt-,xsj=5,kmb-,gmn=8,bs-,srp=5,csh=6,fqm=2,dq-,dpb=5,gz=6,cqsnhr=4,mgm-,rqrq=7,xzd=2,krvb=8,fgj-,jzz-,vmxg=1,rxnvmc=8,zn-,cph=9,dqb=4,vcd-,sf-,mb-,dkgk-,bcs=6,nvrb-,jpd-,zf-,mxdx=8,bjpd-,ftf-,jzz=5,gmb=2,qbh-,sqj-,fqd-,ktdfd-,hnd=9,ch=1,lmv-,hddj-,zxfg=9,gfg-,cgb-,gmb-,nzgt-,qsm-,dplfr=1,sf-,mgd-,fgj-,gz=7,qsm-,vv=5,hbk-,nj=3,lhg-,bnb-,rrx-,nhzr=7,jn=4,xkn-,knpt-,dsz=9,jpd=4,vsz-,lq-,bpxhkz=8,cgb-,vb-,kkbf-,cvk-,tjbrb-,nnrl=4,zc=6,tq=3,rrjfx=8,lx=3,br-,sth-,kn=4,kklj=3,xljlkv=1,jnggl-,mmmc=3,jphfq=5,hxr=1,xhxb-,bd-,nnrl=3,rxnvmc-,hr-,pzcx-,jpm=8,zprvk-,vvl-,bmpq-,jrd=9,sxnb=7,nrf=9,zlf-,gmn=5,gsqglz=4,vvv-,ptpf=4,hqb=9,qknsk-,br=8,jrd-,trf-,bjpd=3,bh=1,tvbv=3,rhpplz=3,lmh-,rtr=6,lm-,pm=2,xn=8,bdl-,zf=9,fg-,tnm=9,fg-,gvz=2,jnggl-,rbf-,jd=2,bsd=2,gjqb=1,nzgt=2,gzv-,vcjv=1,kvj=9,vvz=8,gpkk-,htkzr-,vkxnmt-,fqd-,fpn=8,rhg-,ffnsd=9,ds-,tc-,gsqglz-,tjbrb=6,bcs=8,zsjh=4,mhrm-,kvj-,zmmzd=5,lksd=9,zp-,lm=3,nffg=6,cnr=5,znf-,csh=3,jc=6,gzglg=6,rrjfx=8,lx=3,gz=7,ldq-,jsp-,dnf-,qlgm-,xk-,hvmdmh-,ptpf=8,xvv-,gvz-,bsd-,gcn=3,fsqh=7,jphfq=1,vmh-,bmpq-,zlksl=9,nj-,mgf-,zbnzll-,bdxhj-,bc=2,vbz-,fsl-,zp-,lht=9,dcb=8,sqsb-,dd=3,tx=7,mmk=5,lq=3,jphfq=7,fqm-,br-,mgm-,cds=8,zskvv=5,fqm=3,zsk-,zprvk=2,zprvk-,ttcjrf-,ksj=3,qlszt=4,qlvt-,ls=1,rbf=6,zlf-,ljv-,rv-,pvm-,nsdg=9,psh=1,tk=7,qknsk=9,zvg=4,btfm=2,rxct-,rmn=5,dsz-,qdk-,rhpplz-,zbss-,dxknq-,rp-,rh-,fhg=5,mlq-,xqnlt=8,pzcx-,lmj-,ssz-,hdk=6,gj-,vtv=2,tx=6,vcd-,lczz=4,lb=6,lj-,rt-,nz-,dnb-,rvpp-,zxb=9,pv=3,ftf-,ppmdf-,rmhbz=8,ggr=3,kvj-,ksn-,tv=3,btfm=9,np-,rr-,bdxhj=5,zz=4,mnzlc=4,xsj=3,dffh-,ksj-,bsr=4,cds-,cnr-,rnd-,vt-,ll=5,fpc-,xm-,jsp=2,mvsq-,fnps=8,cq=9,tqcf-,cdg-,nd-,jxl=9,pf=2,tkhd-,dxl=6,hn-,ckzcrf-,xl=1,qb=6,vjqxp=1,ssz=7,mnvm=6,zxfg-,cxpsv=1,sbcq=1,pm=6,kvj=8,ffnsd=5,lbp=8,dbcf-,cqsnhr=1,ltqj-,cph-,mrb-,fsp-,vbz=4,tkhd=3,sfvcm=5,ksrrz-,lr-,tq=6,lmj-,bfj-,qs-,zmzr=7,qdlprm=6,rj-,zsz=6,vr=4,nr=9,kctn=9,lmcr-,mj=2,fmc=9,tkjhs-,bmpq=4,gr=7,znx-,lfns=5,mvh=4,rnk=6,dpb=4,bc-,cxpsv=2,tqtg=7,zt-,nsp=7,jtvcd=1,znf-,nrf=7,jm=4,dnf-,vt-,pv-,lmh=2,jzz=5,bs=3,rvpp-,vzzvn=8,nzgt=2,cdtm-,mnzlc-,hddj-,lm=3,knv=1,gqstb-,zskvv=6,hbk=7,dqb=6,tqcf-,gxb=2,vjqxp-,gf=7,kkbf=6,knv=5,fz=3,jrd-,sdt-,mmk=9,xq=8,ltqj-,rtdlr-,fhg-,fsqh-,csh-,rtdlr-,vb=1,vgkx-,xrb=9,ggzx-,hv=1,zprvk-,xm-,zmzr-,js=4,rhg=1,qbh=8,mhc=5,tjc-,vv-,lj=5,gqstb-,ck=6,znx-,zt-,hdk=1,ggzx=2,kklj=7,grr=5,pg=5,gzglg-,fh-,kvj-,rtr=2,gfg-,mvsq=8,zmzr-,mgm-,lj-,gvz-,cz=3,vtt-,bsd=1,blvg=2,mtcr-,bgzhqx=6,lht=5,xn=5,fqd=6,cq-,zmmzd-,cz=9,glr=5,pp=2,bqlk=6,gsqglz-,rtr-,jn-,vcjv-,mmk=6,gzv=8,kmb=6,qntl-,jm-,zgx-,rmn-,dcb=2,hvttcx=5,cgb-,zvg-,sxnb-,qsm=2,mnvm=1,lv-,nsdg-,jrbk-,cgb-,spln=8,rnh-,bjpd-,mvh-,zhr-,mlq=8,mpn=3,mhc-,lv=3,mx-,bgzhqx-,gzv=5,bk=4,rxnvmc=7,qlgm-,fqd=4,cds=7,vvl=2,mvh-,zr=8,cnr=7,zhr-,ckzcrf=5,bs-,rf-,bsd-,gj-,jnggl=4,jzp=7,gvz=8,bgzhqx-,mqg=5,zsz=6,mvh-,vcjv-,tc-,zsjh=2,xn-,bc-,xsj=2,fmzk-,mjpx=2,rnh=8,zz-,rp=9,fsqh=9,rpm=5,tpf=3,bblmtm-,xxsbv-,ctc-,gmb=5,jhc=9,vkxnmt=5,jrd=7,gmb=5,dsz-,qs-,gzv-,rrjfx-,vr-,txzv=2,ps-,vp=9,fp=5,kz=7,qbh=7,mlq-,pf-,kq=3,dj-,xzd-,vp=3,thh=1,xp-,bnb=9,bk=4,csh=7,rrx-,kz=6,kklj-,tvbv-,lj=3,rf=6,vg=8,fb=1,mlq=9,rvd=2,mlq=9,mmmc=5,vnv-,cgl-,gmb-,jtrsqg-,vmxjr-,lb-,knv-,qf=5,lmcr-,vj-,qkzfg=5,lmj=9,mgm-,prf=7,tqcf=6,rhg-,hkc=7,ldq=1,rnh-,ldq=6,pp=7,bml=8,mnzlc-,nsdg-,nvrb-,hgfhk=5,gjqb=6,xm-,hvttcx=7,pzcx=9,qz=8,pdg=4,ttcjrf=5,bh=3,tqcf=7,tlx=8,vb-,xrb=9,hqb=9,qb=7,brnp=7,bcs-,jhc=7,sdq=5,tvbv=7,hvttcx=2,vcjv-,hcx-,gzglg-,lqx=7,rxct=2,srx=5,kkbf=6,zsk-,tjc=4,bv=1,nxhd-,tjbrb-,jbh-,qlk-,vbz=2,pfr=7,nzqmkk=8,pfr-,mlg=9,ld=5,mzgj=5,mpn-,tpf=9,mb-,fsn-,nzqmkk-,gfg-,kgxp=2,hvmdmh=8,mb=5,ksrrz-,jpm=3,jx-,kq-,jbh-,vcd=3,nlsz=6,mjpx=1,crq-,lq=7,nzgt=5,jv-,lv-,rxnvmc=3,pp-,dplfr-,rnd=5,sfb=2,xqnlt=7,xgsz=6,vr-,jttps=5,vd-,kdrq=7,khqs=3,brnp=3,ck=2,znf=4,pbsr=8,qdlprm=1,ljv-,bsr-,tk=8,rpbgt=7,xgzm-,gcn=8,nsdg=7,sf=8,bcs=9,zskvv=3,nnrl-,nrf-,nvrb=7,ptpf-,nkzv-,ktdfd=7,rr-,dh-,jm=3,vcjv-,mmk-,kklj=7,kh=2,xn-,fj=3,tkhd=6,dplfr-,ccq=9,sdq-,zhr-,nsp-,kdrq-,gz-,lqx=7,tc-,sf-,gbh=8,tv=5,bmdc-,sfb=1,nsp=9,srx-,lksd=7,rv-,nsdg=8,hg=1,jtvcd=5,xs-,lv=1,qlz-,sbcq=9,npc-,tlx-,vpk-,gpkk-,xn-,tv-,bv-,ppmdf=9,zhr-,srp=4,hvmdmh-,zsk-,zv-,trf=2,gd-,fp-,qlk-,qs=1,jzp-,lx-,rvpp-,zsk-,cvk-,npc-,xp-,rxct=2,ggzx-,cgl=8,xgzm=7,rtr=2,txzv=2,kh=8,qlszt=1,jd=6,vr=2,zlf-,gvz=8,gj=5,zt=7,fsp=7,kv-,nz-,jn=3,trf=5,dj-,lq-,jbh-,vzzvn-,gvz-,bm-,jrbk=7,qdk=5,qc=1,bv=2,ccq-,jzp=1,ds-,rmhbz-,qlgm-,zv-,ffnsd-,hv=6,tjbrb-,lht-,dqb=2,vbz=7,blvg=9,tqq-,zs=4,pdg=8,nnrl=4,dxknq=5,qkzfg=3,xgsz-,bf-,dmmv=6,cx=1,pbsr=1,zvg=5,kf=5,xs=6,jx=1,jp=2,kh-,kzt=5,ktdfd-,qf-,hv-,lsnmn-,zz=4,dj=4,ftf-,tq-,mjpx-,kg=1,xltsh=5,dnb=7,vp=5,mhb=6,ch-,thp-,bs-,xltsh=8,jrd-,vvz=2,xk=3,dh=2,jtvcd=2,dj=3,tnm-,fqxhfv=2,rvpp-,bs-,cx=5,zbnzll-,zbss=6,vj-,hgfhk-,nj-,zsk=8,cxpsv=6,kklj-,xkn-,mhc=8,hg-,gjqb=2,kpg=2,dxknq=8,tpz-,dq-,qbh-,nkzv=2,xn-,gqstb=5,qhb=3,knv-,lczz=3,zgx-,gxb=2,zsk-,vzzvn=9,dbcf-,ss=5,fh-,bnb=1,tnm=1,sqsb-,xk=9,gr=7,jrbk-,rbf=5,mhb-,nzqmkk=3,qbh=1,rhg-,hjd-,vgbp=8,mj-,ndvtb-,cq-,kctn-,hn-,vxt=9,sth=1,ttcjrf=9,jm-,vmh-,tkjhs=9,dbs=2,zl-,rj-,hzm=4,tf-,lzg=6,xrb=9,dmmv=1,jc-,fmc=6,vpk=4,qxqq-,dl-,rhpplz=1,qc-,zn-,mgx=2,mhrm=3,qsm=4,xqnlt-,dxl=1,kv-,qkzfg=4,fhg-,gvz-,dbs-,pnd=8,rt=4,kh-,vklt-,vcd-,zsk-,hgfhk-,gjqb=7,xgzm=7,rhg-,cq=8,jzp=2,pc-,np=1,fmzk=4,xhxb-,thh=8,snj-,hvmdmh=2,srp-,hv=3,zv-,ccq=2,fj-,zq=9,tv=8,mqg-,sfb=6,bs-,dxl=3,nlndb=4,psh-,dffh-,btfm=8,sf=7,zbss=6,nj=8,csh-,qp=7,lfns=6,ptpf=9,zbss=8,fjpt-,mfj=9,vvz-,rrx=1,rpm-,qxqq-,xq-,dxl-,fz=2,hgfhk=9,drl-,hd=2,mfg-,xhpg-,qk-,cm-,bblmtm-,xq-,fjpt=8,fqm=6,rhpplz-,vzzvn-,csh=7,ldq-,hxr-,pc-,qr-,fjtbvs=2,nxhd-,zg-,nxhd-,cg=8,hqb-,bmpq-,mgf-,rxct-,nlsz-,zskvv-,rbf-,gjqb-,sth=9,qlz-,bv-,rhpplz=4,qlszt=1,np-,mlg-,shllq-,nj-,zxb=8,zlf-,mj=8,qhb-,kz=3,vf=8,gckt=7,zlksl=6,tx-,mx-,pm-,drl-,bm-,rvpp-,bd=6,mfg-,tgl=5,nz-,bm=8,np-,nj-,dxl=6,zdn=4,rtdlr-,vpk=4,jb-,hqb=5,vzzvn-,bsd-,ftf-,fmdf=4,nhzr=3,ggzx-,jp-,cxp-,fjtbvs-,rhg-,pq=7,fsl-,nz-,mvsq-,rrjfx-,nfgghx=1,bqlk-,qdjh=3,pstjdj=5,xk-,ksj-,jttps-,xgsz-,ck=5,lmcr-,dxknq=7,vp-,xhpg=6,hg-,dh=1,kvj-,ftnj-,cmmntt=9,dj-,zf=9,kklj-,xqnlt=2,lzg-,bpxhkz=9,gz=3,lm=5,zxb-,ljv-,tdfj=1,dbs=1,ljv-,dsz-,csbj-,zg=2,zl-,bc-,xhpg-,hqj=5,pm=1,rgf-,ggzx=2,mnzlc-,nmbrj=2,vmh=7,hzm=5,vd=7,br=1,xvv=7,jzz=8,xk=2,ps-,ch=3,shllq-,nffg=4,qlk=7,rp=7,cz=4,cg=1,gpn=5,pg=1,kmb=8,rp-,bs-,rxct=9,bm-,knpt-,dqb=1,zv=3,jc-,rnh=2,rrjfx=9,kq-,cdtm-,tqcf=7,jbh-,znx-,bn-,fgj=2,rpbgt=1,ltqj=1,dffh-,npc-,fsl=9,bc-,ldq=4,lq=4,lbp=2,sqsb-,fmc-,ftf-,mxdx=9,vnv-,xhpg=3,rf-,js-,rhg-,khqs-,pt=2,mvh-,zs-,fg-,xhxb-,hgfhk-,zhfq-,gmb=3,bn=1,kpg=5,lm=7,jrbk=3,rqrq-,hkc-,prf-,ggzx=6,qxqq=6,dqb=8,rrx-,vhc=1,tpz-,vt-,glz=8,ndvtb-,qlgm-,zf=8,hzm-,trf-,sf-,tx-,cx=4,ggzx-,bm-,dxknq-,sfb=4,mhc-,zmmzd-,vd=8,js=4,tkhd=8,xqnlt=3,nffg=1,vtt=5,ggr-,pg-,jpm=3,nvrb-,pm-,sdq-,bnb=5,rmn-,np=2,ldq=8,sfvcm-,mvh-,fj-,tkjhs=9,bm=2,rhg-,qr-,jd-,gf=7,xl-,gd=8,sgg=5,cm-,qkzfg=9,ckzcrf-,mhc=2,rxct=9,ll=3,dnf=9,tqtg=7,cxpsv=5,fsqh-,hkc-,zhr=3,xgsz-,vj=5,xl=5,tc-,hm-,htkzr=1,gvz=9,tqcf=6,jp-,fh=6,sdt-,pv-,gmm=6,zl=5,fgj=4,pbsr-,gv=7,rj=9,qb=9,tb=2,tvbv-,xgsz=2,gsqglz=6,bpxhkz-,cvk-,fhg=4,mx=4,lbp-,dqb=6,tk=2,hbbh-,gxb=9,jphfq-,tv-,bc-,cmmntt-,cx=1,rtr-,klcm=6,nd=1,qz-,xgsz=6,dxknq-,tnm-,xq-,pbq-,jd=8,qdjh=2,vnv-,ch-,xn-,gqstb-,zhf=9,hkc=6,fsn=9,bsd-,gcn-,gxb=9,kn-,gr-,rvd=3,rms-,rv-,dmmv=5,pg=1,hd-,tz-,ffnsd-,vhc=6,fmc-,nnrl-,qp=3,hdk=8,gvz=3,fjpt-,gqstb-,lmv-,qhb=5,xq=9,qb-,dj-,dbs=7,fdsfpx=9,dxknq-,ktdfd=7,mmmc=2,nj-,nc=6,ll-,gzglg-,hdk-,jd-,xgzm=4,vgkx=1,thp=2,gpkk=2,fjtbvs-,pp=8,kmb-,mpzb-,znf-,krvb=1,ss=1,qc=4,gpkk-,zq-,cgl=8,zsjh=3,mlg-,sbcq=5,srx=1,rp-,mgx-,fsn-,dj=3,kkbf-,jtvcd=4,fmc=9,ndvtb=3,lx=8,vklt=9,nnrl=8,cx=1,zbnzll-,lhg-,kn=4,tns-,bpxhkz-,fpc=6,jx=7,lq-,pf=5,nsp=3,xvv-,nzgqc-,trf=3,pbq-,zg-,nrf-,ppmdf-,jttps=3,xxsbv=4,ls-,zxfg=9,ll-,rf-,dpb-,fh-,znx=3,kf-,lv=3,qxqq-,qxn-,srqx-,mgf-,fmzk-,glr-,bdl-,lmh-,vmh-,zt-,cg=8,knv-,kdrq-,rnh-,rxnvmc=9,jpm=4,zmzr=7,gbh-,nvrg-,qc=6,knpt-,qf-,lmv=7,pvm=8,hddj=6,qlz=2,lmv=3,tvbv=7,dq=4,hddj=4,zskvv-,bdl=3,zg-,gf=8,gzv=1,bh=4,dpb-,fsn=1,ccq=1,fh=6,rxnvmc-,nkzv=5,znf=7,tns=6,hvmdmh=5,tv-,bm=3,qlszt=5,mpzb=1,spln-,ps-,pp-,ll-,bqlk=9,tqm-,fb-,tf-,mpzb-,pm-,kjl-,hn-,qlvt-,fjpt-,vgbp-,xgsz-,fg=2,rpm-,kctn-,nr-,ck-,jd=3,gmn=7,fsqh=3,kq=8,ggzx-,ljv-,zxfg=3,gsqglz=6,fjtbvs=5,cx=4,ctc=9,bn-,tvbv-,nfgghx-,mdpl-,lmh-,bblmtm=7,fsqh=9,kdrq=5,jp-,vr-,thh=1,cm-,rmn=2,cgl-,vhc=4,hzm-,nz-,xn-,fb=6,bgzhqx-,bd-,pq=2,jpd-,fgj=2,zs-,hbk-,ksj=6,vtv-,bmdc=2,mfg=4,rtdlr=4,vcjv=5,ntl-,ksrrz-,pnd-,qxqq-,mvh=8,jphfq-,jpd-,qdlprm=5,glz=9,nn=9,cq=7,rmn=2,rj-,sfb-,mtcr=6,vgkx=7,sqsb=4,kgxp-,vvz=1,jhc=9,mpn=3,hsdzn=4,hs=6,xfft-,qvzgl-,jttps-,fpc=2,bk=5,nnrl=2,rklr-,rvpp=2,hqj=7,knpt-,lmv-,gckt=7,qf-,cph-,jzz-,nlndb-,knpt=2,fsn=4,dd-,pv=6,dfgpj=8,lsnmn-,kdrq=6,zprvk=2,pp-,txzv=9,hr-,bgzhqx=4,jp=7,bdxhj-,cxp-,qc-,sbcq-,hq-,qlz-,rhg-,qxqq-,xp=9,gpkk-,jv=7,hq-,dkgk=8,rrjfx=9,mqg-,khqs-,mj=5,lmcr=1,mzgj=3,dpb=7,zlf-,zbnzll=9,xp-,thp=5,vnv=6,hq-,rv=5,kctn=6,fg=4,tgl-,hnd=2,prf=1,thh=7,kkbf=9,kklj=2,rbf-,rhpplz=3,mdpl-,hqj=3,nsp-,zvg=9,rd=5,rnd-,mfg=8,xl=8,xcn-,qdk-,lmcr=7,ccq=7,nzgt-,vjqxp-,zt-,fhg-,pvm=6,tgl=4,sth=4,nvrg=1,vcjv-,vmh-,lj=1,bmpq=4,qdlprm=3,czv=4,cj-,vvz-,mgd-,cds=5,hnd=2,klcm-,nhzr=9,jtrsqg=7,hvttcx-,krvb=8,nzgqc=1,dkgk-,cdtm=2,nn=4,cnr-,xvv-,rgf-,vgbp=2,mxdx-,ppmdf-,zn=5,hnd=9,xltsh-,ggr-,pf=9,snj=2,zhf=4,hvmdmh=5,mpzb-,jm=1,zgx-,knv-,lvv=1,fmc=5,tgl-,xvv-,nnrl-,ldq=2,tz-,hdk=8,zp=8,gpkk=4,hm=4,tlx=9,gzv=7,js-,tf=2,lczz=2,jpd-,rmhbz=9,lj-,nc=5,pt=8,qntl-,ckzcrf-,tlx-,zn-,rqrq-,cdg-,tvbv=4,hd-,lfns=4,dxknq=7,np-,fpn=1,tqtg-,zlf-,dnb=9,nrf-,vvz=6,knpt-,dnb=9,shllq=5,zf=7,csh=3,jzp=3,bk=7,rrx-,lczz-,mvsq=7,vb-,mvsq=7,fmzk=5,gz=3,dbcf=9,vklt-,txzv=6,rvpp-,shllq=9,thp-,nkzv-,ksj=8,hqj-,vgbp=6,rbf=2,ckzcrf=4,lht=8,tpz-,fjpt-,zbss-,sxnb=5,rj=2,pfr-,qr=7,fsp=4,gvz-,csbj-,mfj=2,mlq-,knv=5,bml-,qntl-,zq=1,sqj-,tpz-,mmmc-,sxnb=9,rpm=5,rf=5,zbnzll-,jzp-,bsd=5,gbh=8,zxfg-,znf=1,hn=5,ksrrz-,xljlkv-,pstjdj-,np=1,rhg-,lq=9,hqj-,rrjfx-,tk=6,tvbv-,dkgk=2,bn=7,krvb=2,cds-,vzzvn-,ckzcrf-,mpzb=9,kctn=4,fmzk-,hjd-,jtvcd-,fqd-,xn-,xqnlt-,dfgpj-,jzz=9,nkzv=8,ss-,kg=4,hvttcx=8,hg-,fnps=6,fqd=3,lsnmn-,vb=6,sxnb=5,gsqglz=3,kkbf-,js-,pzmd=6,qk-,lfns=7,gz-,sth-,hbk=7,tqtg=8,ldq=9,zvg-,tkjhs-,kmb-,fp=2,tpz=8,ldq-,cxpsv-,fgj-,rvd=5,zxfg=5,dcb=9,dfgpj=7,vmxjr-,vmh-,zr-,vmxg-,nxkmn=7,ppmdf-,mpn=9,ccq=8,rgf=1,qb-,jzz=1,pzcx=3,bs=2,vnv=6,ld-,lm=2,zs-,jzz=6,hnd-,krqsb=7,kh-,nlsz=4,ksj-,fh-,mmmc-,vtv-,qb-,mhb=5,jttps=2,kv=6,kq=4,dq=4,mzgj=7,dh=3,nfgghx-,ptpf=8,gpkk=7,hd-,fp=6,hvmdmh-,ls-,kkk-,jp=1,rp=5,zhfq=1,mhrm=1,lksd=6,knpt=8,rnd=5,nsdg-,xfft-,kjl-,bdxhj-,ccq-,jv-,xn-,tdfj-,lx-,fjbhsc=1,rxnvmc-,ndvtb-,krvb-,mgx=9,lht=1,nnrl-,jb=1,nnrl-,bd-,hsdzn=5,prf-,lznhkq=5,ndvtb=1,kv=4,hvttcx-,hsdzn=6,zbss=5,hgfhk=3,rxnvmc-,dxknq=3,xcn=8,qp=2,jrbk=3,vnv=3,xs=3,tkjhs-,nffg-,jv=4,mpn=7,nd=2,zbnzll-,nlsz-,rxct-,ffnsd-,hr=3,zxfg=4,mdpl-,mmmc-,mhc=9,ksn-,qbh-,nr=3,lmcr-,ctc=9,hkc-,dnb=7,ftf-,thp-,xhxb-,hxr=7,rnh=5,ll=7,hqb-,hdk-,jtvcd-,jc=3,jhc-,zsk-,cg-,dxknq-,tdfj-,cvk=6,mmk-,pf=8,ggr-,rhg=6,ksrrz=7,vjqxp=4,kvj=1,brnp=7,ccq-,ndvtb-,zdn=2,vmxg=2,xfft=9,mpn=7,lqx-,fz-,qlk-,bmpq-,zgx=3,jn=8,kg-,jtrsqg-,ss-,xxsbv=7,qc-,jsp=5,rtdlr-,qlk-,qxn-,znf-,ld=9,rt-,rrx-,qbh-,pg-,bd-,rxnvmc-,pvm=1,vd-,hddj-,cxpsv-,qdjh=4,hqj-,kpzv=4,kn=9,fpn=7,kkbf-,zbss-,vcd=3,mfj=3,dj=7,dlpmn-,lhg-,bm=1,gr=3,kkbf-,zhfq-,hq=6,mtcr=3,fqd=4,qp-,vvz=3,pd=3,dxknq-,mmmc-,zn=4,vf-,sf-,kh=4,mx-,jd-,nc=3,ckzcrf-,lr=2,dsz-,mxdx-,csbj-,czv=3,btfm-,mrb-,cph=8,pdg=1,zr-,fsqh-,mhrm-,nzgt=1,bc=4,sgg=3,pdg=6,ccq=4,rklr=1,zbss-,lsnmn=5,gf=8,ccq=7,qc=6,zlf-,lksd-,br=3,gj-,mx=5,cq=3,tqcf-,xrb-,nkzv=6,bc=2,mb=8,qkzfg-,tx-,mdpl=8,znx-,zt=8,xqnlt-,zlksl-,trf-,xkn=5,xsj=6,mhc=4,fpn=6,hvmdmh-,bs-,xk=2,kmb-,prf=6,tjc=9,vzzvn-,vv=9,mgm-,jv-,jc=4,hm-,xkn-,mhb-,zbnzll-,vsz=7,jphfq-,fsl=4,mhrm=7,nj-,kpg-,vnv=1,xxsbv=4,bgzhqx=3,bnb-,gv-,drl-,gfg=5,zc-,gvz=6,pbsr=2,lmh-,ggkxb=5,bmpq=2,bpxhkz-,tqm=2,zhf=4,zc-,xgsz-,ckzcrf=3,sqsb=2,hr=7,pbsr-,dcb=6,xxsbv=1,mj-,tjbrb-,nr=1,pv-,kg=4,mzgj-,sgg-,jsp-,zxb=7,nsp-,trf=7,zt=3,hg-,tk=3,mgf-,vb-,qr-,zxfg-,bs=4,tjc-,dlpmn=9,qsm=1,gxb-,lqx=4,jrbk-,hzm-,jtrsqg=9,dnb=3,tvbv=3,hq=5,vmxjr-,kctn=8,krvb=2,qr-,rmhbz-,ps-,nxkmn-,gmm-,bjpd=8,rr=6,gpn=4,vtv=1,cgb-,dpb-,gsqglz-,hkc-,gbh-,cph-,vf-,tpf-,jx-,hjd=3,qkzfg=8,cg=8,nrf-,hs=4,nzgqc-,nd=8,lmh-,hs=4,tz-,rgf-,mnvm-,nd-,mfj-,qlz=5,dsz-,hkc-,vcd=2,bmpq-,cqsnhr-,zq=7,hm-,dd=9,bmpq=7,gpn-,ptpf-,zskvv-,fpc=4,dfgpj-,tk-,jv=7,tlx-,mvsq-,cm=2,pfr=2,srx=8,nd-,rrjfx=6,dkgk=2,thh=7,gf=9,kmb-,pvm=9,rklr=6,zhf=8,qlvt=6,snj-,gckt=9,ch-,jttps=4,kq=5,sdt=2,dffh=8,mmmc=7,lx=2,thh=2,ch-,bdl=7,vzzvn=2,psh=4,kkbf-,mgd-,cxp-,gsqglz=7,hkc=5,pnd=2,dj-,gxb=9,gz-,jb-,tlx-,tns=9,lksd=4,npc=3,bsd=7,mb-,zr=1,hddj=9,bv=4,mfj=8,glz-,pc-,tqq=9,mjpx=2,ftnj-,xqnlt-,qlgm-,bm-,vhc=1,rpm=5,czv=3,tdfj-,zc-,hjd=2,mdpl=4,zq-,dxknq=2,cds-,kh-,ccq-,rh=8,nj-,zf=4,cg-,bn-,znx-,rmn=7,lczz-,bc=3,fp=6,zv-,bdxhj-,xk=9,npc-,ljv=5,dq-,bm=4,nzgqc=1,jzz=1,dsz-,qlszt-,zprvk=9,hcx=5,pnd=5,xfft=8,cx-,gqstb-,jpd=8,tgl-,ld=8,tpf=8,ldq=6,nsp=4,sfb=2,kctn=1,gzglg-,xrb=6,jsp=9,nzqmkk=1,gcn-,rnh-,knpt=9,fh-,nvrb=6,nkzv-,tpf-,xzd=4,cx-,fhg=2,hcx-,ds-,kpzv-,npc-,fh=5,ntl=7,glr-,fsqh=7,rrjfx-,zsk=6,bdxhj=4,rnk-,bk=9,cds-,xsj=9,tns-,cq-,vzzvn=2,zhf=2,ggr-,nc-,pzcx=7,cgl-,mtcr=7,mhrm-,ldq-,fh-,pdg=3,rv-,vtt=4,tgl-,qdjh-,bn-,ls-,fb=2,cc=7,zmzr-,zv-,dkgk-,lmj=7,zmmzd=6,ftf=4,npc=8,pf=1,vmxjr-,cds-,lsnmn-,jxl=5,mmmc-,xxg=5,tg-,rp-,rvd=7,nlsz=8,lbp-,vbz=3,pstjdj-,rvpp-,kq=2,gfg=5,qsm-,hgfhk-,cxpsv-,zl-,krqsb-,nvrg=4,gzv=6,thh=5,kz=5,lmv-,lznhkq=9,dmmv-,jxl=5,jbh=1,jphfq-,qdk=3,jbh=2,jtvcd-,qsm=1,nrf=2,zz-,fsl=7,fjbhsc-,zxr-,hjd=4,zbss-,krvb-,thp-,ctc-,klcm=7,kjl-,tkjhs-,nkzv=3,pbsr-,zhf-,dcb-,fnps=8,fg-,nxkmn-,cds-,cvk-,xk-,qlszt=1,qb-,sbcq=2,sth-,lznhkq-,rh-,fp-,nlsz-,vmxjr=8,rnk-,gz=6,fpn=2,cg-,btfm-,bml=6,zskvv=8,gbh=3,fgj=9,zs-,qdjh-,qlszt-,nn=6,gd=6,vf-,hqb-,zz=8,zprvk-,kpzv-,gfg-,tv=4,trf=4,ssz=2,xm-,gvz=6,tkhd-,nffg=2,rnk=3,rnh-,xgzm=2,lvv-,znf-,vcd-,jsp-,qbh=4,kkk=2,cz=7,srp=8,vv=9,bdxhj-,krqsb=2,dq-,pf=2,sts-,rh-,zsz=3,mgm=5,qxqq=9,zlksl=6,hbk-,np-,zn-,kvj-,rxnvmc=9,zmzr=7,gsqglz-,xljlkv=3,nfgghx-,qxqq=5,xrb-,fg=2,xvv=5,jxl=3,ktdfd=8,hbk-,ps=3,gmm-,sfb-,hsdzn-,cxp=1,vg-,ls-,bnb-,tf=8,bjpd=5,xgzm=2,pq=4,cx-,mtcr-,bml=2,fz=1,jc=7,tpf-,qz=7,hr-,lmj=4,rp-,khqs=1,vsz=9,zmzr=5,ksj=4,cqsnhr=3,fhg-,kkk-,rf-,zn-,vhc-,cc=4,rs=6,rtdlr-,tns-,cc=3,kpg=5,vb-,bmdc-,js=7,rnh=9,ptpf-,bc=6,kvj=7,dxl-,ggkxb-,zxr=6,hxr=8,nrf=2,kdrq-,xqnlt-,xxsbv-,zlf=8,zr=9,bcs-,br=6,lb-,qf-,kpg-,ftf=4,znf-,cds-,ss=9,khqs=4,cj-,ftnj=3,xxg=3,vg=3,qbh=4,thp=7,ll-,sts-,rv=6,mnzlc-,tz=3,jm-,snj-,hzm=1,rxnvmc=2,pq-,nlsz-,zf=1,pf=1,khqs-,bf=3,kh-,cz=2,kvj=9,srp-,kpg-,tqq-,bnb-,np-,ggzx-,rbf=3,mfg=2,lhg=7,sxnb=8,fgj=8,tqm-,sth-,qlvt-,mb-,bml-,rtdlr-,bsr=6,knpt-,tqcf=1,prf=1,cdtm-,tjbrb-,dcb=1,mfg-,tkjhs=4,zxb=2,xl=4,gj-,pd-,lzg-,pt=3,tlx-,fjtbvs=3,nzqmkk=6,mvsq-,rd-,cph=1,tjbrb=8,lhg=8,pstjdj-,dd=2,ggkxb-,gsqglz=5,lzg-,jv-,pt-,hs=3,xcn=1,kdrq=1,xsj=5,ds=7,hbbh=6,zf-,tqm-,hjd=8,qlz-,cvk=3,fz=9,bd-,gd=7,ll-,zp-,kctn-,fsqh-,zt=8,mxdx=8,lzg=6,rxnvmc-,zbss-,qr-,jb-,ds=4,vt-,ps=6,kzt-,vcd=3,xt-,vg=5,psh-,mvsq=1,ggr-,ch=8,cgb=6,vcjv=3,pvm-,vklt=4,gxb=2,tz=3,blvg-,kvj-,lmcr-,sbcq-,xzd=6,rrx=8,shllq=7,lhg=5,ggr=9,ksn-,spln=1,zv-,qz-,tkhd-,mnvm-,jxl=6,dfgpj-,cm=2,zsz-,mj=8,dh-,vj=1,vp=4,hn-,pbsr=1,sqsb-,ktdfd=5,kpzv=7,vcd-,nhzr-,jx=8,lv-,bm=6,hm-,knpt=2,tg-,pzcx=6,hs-,cnr=9,bml=9,xhxb-,vp-,mvh-,kq=3,mqg-,vvv=2,fh=3,hgfhk-,fmzk-,nmbrj=5,dfgpj-,xm-,qkzfg-,zv-,bk=2,vmh=1,nvrb-,bdxhj-,nlsz=3,mpzb=9,ggzx-,hxr-,qvzgl-,xzd-,ksj-,kg=8,mnzlc=9,nvrg-,ndvtb-,xqnlt-,lmh-,js=5,xltsh-,bblmtm-,vzzvn=7,fh-,zdn=1,lht-,nk=8,qs=4,sqj-,srp=2,lv=5,lsnmn=6,rgf-,vt-,ftnj=5,fb-,nxhd-,znf-,snj=7,khqs=8,sgg=3,gvz=4,fg=8,hqj-,gzglg-,sfvcm=4,ndvtb=8,rgf-,sqj=8,tqcf=1,cdg-,vjqxp-,lvv=6,rj-,nmbrj-,rt=1,dxl-,mlg=4,vvv-,gd=2,vkxnmt-,pt=1,gpn-,tlx=4,gf=4,nxhd=4,qknsk=8,mdpl=8,bfj-,ftnj=9,khqs=8,gmb=4,pdg=5,zhf=3,tb-,nkzv-,zp-,fg=6,bml-,hddj-,hkc=7,kjl=1,sts-,jn-,hnd=4,kz=8,fqxhfv-,kv=9,rklr-,gjqb-,zz-,glz-,gr=4,fnps-,zc-,fjtbvs-,rvpp-,bc-,hqj-,rhpplz=3,zg=2,ksj-,mhrm=3,xl=3,jb-,br=6,gmn-,gjqb=9,vtt-,kh=5,zskvv-,csh-,ccq-,mx=8,mmk=4,vtt-,lksd-,rhpplz-,knpt=9,tns-,htkzr-,pbq=5,qdjh-,xfft-,mmk-,fgj-,sqj-,lb=5,sgg=3,cdtm=1,hbk-,thp=8,pnd-,vvv=4,qlk-,glr-,jv-,ggr-,nc=7,vbz-,tkhd-,dbcf-,nhzr=1,cm-,bmdc-,zv=7,vv=6,ktdfd=6,dq=1,xq=3,fmzk-,ksn-,cph=3,jtvcd=5,xt-,xq=3,bqlk-,rj-,hsdzn-,thh=9,bml=2,hgfhk=9,zbnzll=6,zgx-,kklj=4,nzqmkk-,hvmdmh-,jd-,hkc=4,cx-,zq-,pc=4,ls-,jrbk=7,qvzgl=6,znx-,rf=1,dkgk-,ktdfd-,cc-,fqxhfv-,lksd-,mhb-,dl=9,vtt-,jp=2,crq-,gpkk=9,lq=4,jttps=3,cz-,czv-,gqstb-,gf=3,vvv-,pd=8,hdk-,tqtg=8,jbh-,vmxjr=2,pq=1,sqj-,jc=7,qc=4,mgf=6,qhb=1,vkxnmt=3,kkbf=7,kgxp=1,tkhd=5,krqsb=8,bblmtm=2,vt=8,nsp-,mj-,pfr=3,kn-,nzgt=2,lhg-,rtr-,mqg-,lqx=6,dnf-,kv=7,cq-,mlg=8,rh=7,lfns=5,dbcf=8,xvv-,csbj-,bqlk=7,kjl=7,zv=4,xq=7,rmhbz-,fjpt-,xn-,ktdfd-,mvh-,vcjv-,dplfr-,tqcf=7,tnq=2,cxpsv=2,kklj-,ggkxb-,vzzvn=7,hvmdmh-,mfj=7,gd=1,ggr-,rp=3,mnvm=1,rgf=7,ksn-,lb-,nn-,rs=9,gmb-,cxpsv-,qr=3,qlszt=5,jp-,np=7,nvrg=4,zbss=8,vkxnmt=1,cx-,gcn=4,mvsq-,fmc=5,qkzfg-,ggzx=3,nkzv-,zf=5,csh-,krqsb=4,hdk=7,gj=4,kpzv=8,sxnb=4,dxknq=2,qlvt=4,qdjh=2,rxct=9,zp-,kn-,dpb=8,csbj-,lksd-,qknsk-,rxnvmc=2,pnd-,kvj-,pd-,bqlk-,ktdfd=6,rrjfx=7,dkgk-,fh=1,zsk-,hddj=3,qlszt-,fgj=8,cqsnhr-,bmpq=6,tg-,mpzb-,qz-,kh-,tkhd=1,jzp=2,gfg-,rnh=2,ftf-,qp-,fpn-,gjqb-,hvmdmh=6,hm-,qc-,drl=5,xp-,rmhbz=3,cg=7,tns=7,fsl=1,fnps=9,tb-,jrd-,jx-,qf=8,kpg=9,fgj=2,vv=4,qxqq=2,xfft=4,fmdf-,nxkmn=6,qp=4,ggr=5,mpzb=8,bpxhkz=5,lksd-,lhg=4,csm-,jtrsqg-,npc=6,btfm-,ffnsd-,bh-,dbcf=3,rgf=3,vvv-,ldq-,vnv-,mzgj-,xkn=8,jxl=3,zmzr=6,lhg-,hdk=2,lb=2,nvrb-,cc-,ljv=5,gvz=5,hs-,gpn-,xqnlt=6,np-,mx=8,czv=6,pg=8,pbsr-,bs=4,gr-,gf-,qknsk=6,bqlk=1,nlndb-,dkgk=1,fsl-,rvd=5,fqm-,ckzcrf-,nvrb=3,xcn=9,xzd=6,hxr-,br=1,mlq=3,qf-,zgx=8,dnf-,vcd-,fnps-,qhb-,nc=6,lmh=8,dplfr-,vsz-,pv=3,ck-,rtdlr=8,vp-,tjc-,knpt=6,nn-,jbh-,xt=7,xgzm=1,bjpd-,lm-,fsp-,pnd-,sts-,vmh-,jttps=2,dl=4,bdl-,vhc-,btfm-,mlq-,xrb=9,vtv-,cmmntt-,mmmc=9,cm=3,qknsk=2,jv-,zs=6,gz=2,hm-,mnzlc=2,fp-,kf-,dj=8,zq-,pzcx=5,rh=6,vgbp=9,zl-,pbsr=2,rqrq=8,zsk=6,rvd-,bs=6,bdxhj=3,mpn-,rnh-,jpd=3,jzp=4,hr-,nk=3,bgzhqx-,tqq=9,bv=4,nlndb-,zlf=4,hsdzn-,mdpl-,czv=9,tkhd=6,qlszt=3,hd-,qxqq=7,nvrg=2,fsqh-,vmxg=5,xkn=6,vmxg=3,pd-,vxt=8,rf-,mhb-,cgb-,jv-,krqsb=1,jc=4,qsm-,mgm=3,zmmzd-,hg-,qdk-,pstjdj=8,fqd-,nd-,hjd=8,cgl-,rrjfx-,mfj-,xxsbv=8,rbf=7,bml-,mhc-,dcb-,gj-,hd-,gpkk=9,nzgqc=7,sth-,zq=9,cm-,mpn-,nz-,fjtbvs=4,zhr-,bd-,xhxb=2,mrb-,vnv=8,nn-,ffnsd=8,ksj=8,xn-,sxnb=6,dd-,jc-,jbh-,tx-,krqsb=8,cgb-,bmdc=8,qz=9,nvrb=4,nn=1,lv=4,prf-,sbcq=1,nffg-,hq-,xn-,zdn-,xvv=2,zsjh-,hqb=4,cc=6,xhxb-,ssz=3,lq-,lvv=7,dfgpj=6,qhb-,vjqxp=2,vmh-,np-,nlndb-,dnb-,dnb=9,kz=1,jzp=9,vtt-,lhg=5,fh=3,mmmc=3,jc-,cx-,vvl-,rvd-,cdtm=5,pzmd=1,xs-,rvd=2,ndvtb-,tnm=7,ptpf=7,hbk=7,sqj-,fsn=4,xljlkv=5,bdxhj=4,vvl=2,ggkxb=7,hsdzn-,kg=8,crq-,vmxg-,cxpsv-,hjd-,zn-,gmn-,nvrg-,cnr=4,jhc-,xxg-,crq=7,sdq-,xgsz=9,sbcq-,kg-,kkbf-,vg=2,fsp-,hvttcx-,zlksl=2,zl=5,fpn=4,bblmtm=1,qhb-,qkzfg-,ccq-,kdrq=9,gpkk=9,pp-,zc=8,vf-,spln-,nmbrj=5,dkgk-,mzgj-,fpc-,knv-,cz=4,mhb-,bml-,dfgpj-,zs=8,kklj-,lsnmn=9,mzgj-,cgl-,xzd-,dxknq=2,mpzb=5,mpzb-,nvrb=4,hdk=1,dj-,mmmc-,qhb-,fsp=5,cm-,qk-,fqd-,blvg=4,ch=5,dd-,rnk-,dmmv-,krqsb-,vhc-,qz-,vbz=4,mgm-,vf-,dqb-,zmzr=2,ggkxb-,dzc-,tpf=2,dmmv=4,crq=9,hq-,rklr-,cnr-,dbcf=3,nz-,kpzv=5,hs=6,ftnj-,cm=3,xhpg=6,jsp=8,dd-,bs=2,dpb-,mmk-,hnd=4,jrd=9,pc-,rnh=5,tlx-,nzqmkk-,vv-,tkhd=9,jzp-,nlsz-,jzp-,qs=8,qxn=1,mpzb-,vmxjr-,lr=1,tjc=8,lb-,znf-,sgg=2,fh=4,hn-,glz-,hd-,vb=1,mx-,jxl-,csbj=5,ndvtb-,xhxb-,cj-,xhxb=6,gcn-,dplfr=8,dxl-,bcs=9,spln-,ls=9,ll=4,vd-,rnd-,br-,zhfq=3,gf-,qc=5,mnzlc-,vmh=8,gpkk-,fmzk=8,vvl-,zz-,rpm-,tdfj-,bjpd-,bcs=1,bm-,nn=6,fjtbvs-,zbss-,tlx=8,rbf=4,pnd-,mgf-,vpk=9,cdtm=2,mmmc-,vp=8,tgl=4,nc-,lbp-,bmdc=4,pbsr-,sdq=2,tnq-,lzg=7,ndvtb-,zr-,kkk=1,jrbk-,gbh-,pf-,lksd=4,sts-,nxhd=8,dsz-,lbp=4,vtt-,vj-,qlgm=4,gj=3,lfns=3,tq-,cmmntt-,qlgm=1,glr=2,mtcr-,zf-,ftnj=5,nz-,zsk=3,xltsh-,xgsz-,jv-,hqb=7,lbp-,tkhd-,xvv-,qs-,mgx-,gsqglz=8,ck=7,zdn=7,fb=6,rhg-,knv=4,ccq-,tdfj=5,fnps-,kpg-,vsz=2,blvg-,lbp=2,mxdx-,zdn-,rgf=3,fsp-,hddj-,qf-,lksd-,gqstb=5,qlszt=4,bdxhj-,nr=3,dq=1,rrx-,hr=1,xltsh=6,jrbk=6,cdg=3,rrx=3,zsk-,tg-,jtvcd=8,zmmzd=6,zs=9,sgg-,gxb=5,hnd=7,dcb=8,kvj-,rgf-,jpm=7,vsz=6,zgx=1,mgx-,bml=2,qlvt=2,pfr=8,qs=8,ggr-,hd=3,vj-,mpzb-,qdjh-,ndvtb-,lq-,jhc=4,vv-,tc=7,tv=1,vxt=6,hs-,thp-,jpm=4,mrb=8,nkzv=3,zs-,hg=4,zq=5,qr-,vv=2,drl=9,xgzm-,srp-,mpzb=1,knpt-,sbcq-,xxg-,mgm-,lj-,qxqq-,ls-,rp=6,rqrq=1,srp=1,pm=7,tc-,qvzgl=2,kn-,vpk-,qf-,npc=3,cj-,qkzfg-,qr=7,hbbh-,kg=9,nj=9,srqx=1,hgfhk=9,hv=1,gmn=1,tc=2,sdt=9,rd-,zsz=7,knpt=3,gckt=7,dplfr=8,ptpf-,fqd-,zc-,hnd=8,rmhbz=2,htkzr=2,glz=6,nsp-,tg-,fhg=9,mlq-,gvz-,rr=3,fpn-,pt-,fp-,zz=9,cg-,nsdg-,mlq-,zdn-,jhc=7,kh=3,zhfq=5,mnzlc=4,fsn-,rhpplz-,vv-,pbsr-,qknsk=5,drl-,dxknq=2,snj-,glz-,zmmzd=4,xhxb-,fb-,zxb-,knpt=9,cmmntt=2,gzglg-,bk-,qntl-,hzm=6,qc-,mx-,mpzb=5,hs=4,qknsk=2,jx=2,vnv=7,kz-,jsp-,kf-,pfr-,rtr=1,nzgqc=2,tjbrb=3,fjtbvs=4,rnk=5,tb-,zz=7,lmv=4,xfft=3,jbh-,ttcjrf=5,fnps-,rj=7,dffh-,kq-,zhr=4,zbnzll-,mgx=8,rt=8,vcjv=3,gzv-,fh-,bdxhj-,xgsz=1,jrd-,vr-,tnq=3,lfns=5,hgfhk-,rnh=5,dkgk-,tjc-,ldq-,gd=6,nnrl-,crq=8,ckzcrf=6,vpk-,zc-,tx=1,mx-,zz=2,gmn=8,mqg-,rhg-,snj=1,zz=3,tjbrb-,xzd-,sdq=2,ctc=8,cj-,ch=1,rrx=7,js=9,tqtg=4,vv=1,sbcq-,fg=7,fsn-,qc=7,hd-,ttcjrf-,trf=6,nzgt-,ds=2,pd-,tnq=3,xgsz-,ljv-,trf-,kh=1,ck=3,qkzfg-,sfvcm=9,xq=6,tnq=1,rnd=5,thh-,htkzr-,sxnb=7,glr-,qdjh-,thp=9,mgf=4,hvttcx=5,xhpg=2,dlpmn-,dqb-,lmh=4,rvpp=4,kpg=5,mnvm=6,thp=9,jx=3,xl=2,gj=9,tx-,pd=4,vcjv-,vpk=8,pf-,mfg-,dbcf=2,kmb=9,lm=6,xljlkv=4,gpkk=4,lq=6,gzv-,zlf=6,jrbk=6,crq=7,zsz-,rd=1,gckt=8,qb=4,vr=9,ggzx=5,rxct-,fg-,vklt=8,lsnmn=1,zgx=1,fmzk=9,zg=4,lvv-,dh-,gpkk-,knpt-,cq=8,cgb-,fpn-,bd=7,rt-,nzgqc=7,bs=5,zsk=6,mrb-,csh-,kz-,btfm-,sfb-,fpn=1,vmh-,brnp-,kn=4,fqm=3,fnps=5,zsk-,ksj=4,hqj=6,qdlprm-,rpm-,br-,pv=6,nzgqc-,jc-,kv=9,ftf-,nxhd-,kpg-,cph-,nmbrj-,kdrq=9,htkzr=7,hvmdmh-,ntl-,jnggl-,fhg=7,lm-,sth-,jm=9,kkbf=5,sfvcm-,xk=1,thp=5,vtv=2,zmzr-,nlndb=3,bsr-,tnq-,xltsh=5,bmdc=6,htkzr-,nfgghx-,lr-,prf-,tns-,psh=4,dmmv=4,jpd=5,tlx=5,tk-,bk=8,rrx-,qz=5,hcx-,dplfr-,tqtg=8,rtdlr-,bn=5,gpn-,grr=3,txzv-,vtt=4,gpkk=9,gz=2,hgfhk-,mnzlc-,vgkx-,rtdlr=9,hbbh=8,gmn-,vvz=7,lb-,lksd-,jsp-,mpn-,kn=5,vb-,fjpt=4,fmzk=5,mrb=4,pnd-,vvl=2,qr=8,psh-,nvrg-,dpb=8,bsr-,vkxnmt-,krqsb-,brnp=2,gz=7,lksd=1,dcb-,srqx=2,vj=2,xgsz=9,vmxg-,rnd-,tnm=3,bmpq=4,glr-,pxc=1,zf-,fpn-,fpc-,zq-,kdrq-,bc=5,rhg-,kgxp=2,mfj-,qc-,xltsh=4,dxl-,nlndb-,fjtbvs-,prf=9,xcn-,vnv-,blvg-,ptpf-,qhb-,zprvk-,hgfhk-,xm=8,hdk=6,dj=7,rmn=8,kkbf-,hm-,pnd-,xl=2,mx-,qk=2,zbss-,cnr-,mgx=8,spln-,khqs=1,tlx=5,tnq=2,zc=7,tjbrb-,zmzr=3,jzz=8,lhg-,ttcjrf=9,dsz-,cm=1,csbj=2,xljlkv=6,dplfr=4,ss-,cmmntt-,bv=3,czv-,ctc-,rvpp=8,lqx=1,xcn-,kzt-,mb=7,lht=8,bdl=1,rh-,zhfq=5,jb-,pt=4,pp=4,rj-,cmmntt=8,vbz=7,pt=1,zl=6,vg-,tjc-,tq=7,xzd=9,hvttcx=9,ssz=4,tf-,pzmd-,rpm=6,qdk-,lq-,xvv=9,zprvk-,znf=3,ffnsd-,ccq=9,rtdlr=3,vpk-,kjl=4,ds=6,nlsz=3,kkbf=2,kvj=5,kpzv=3,pf=2,csm-,gzglg-,nffg-,fdsfpx-,dxl-,klcm-,ffnsd-,dbs=2,lht-,nsp-,rr=5,kdrq-,zz=7,ggr=2,kctn=9,fnps=7,lmh=3,tvbv=7",v7=`.|...\\....
|.-.\\.....
.....|-...
........|.
..........
.........\\
..../.\\\\..
.-.-/..|..
.|....-|.\\
..//.|....`,l7=`\\..................-............-.........|-......................\\\\.../..........|......|........../.........
...-.......-.-........|........../.............................-..............-....|.-.........-..............
.|......................|........-.....\\.././.........|......|-....|..|........|......./...|............|..\\\\.
../....|..................-................-\\....../...../...................\\............../...../...../.....
.....................\\................||.|.|...............................-..../......\\..../|..........-..\\..
|.....\\....-.....................................-|..../..\\/...........................\\.................\\....
..........-....../...../.................-..../...\\.......-././......../../...-..............|..............\\.
..|.|......-..........|.......\\.............../.\\...-...................-...............|...-.........\\.......
....-.............../................../.........\\/....\\./..-...\\..../.......\\................-...............
\\.....|../../...........|.........../..............\\......\\..................|.............\\.....|....\\.......
..../.......\\...-../-....../..\\......./..../.........../..-/.....|\\.............-.............................
.......................\\.-..........\\...../../......-/..|.......\\.............../..-..........................
........|..............|.-\\.......|...|....|.............-....\\....\\.........\\............../....../..........
..........................-...............-.\\............\\./................-............|....................
......\\..-..............\\....|..../...-......|......|................|...................-.../..\\............/
............-......|.-..........././.........|.........|..\\....|.\\.........../...........-..|.../.........|../
.......|........../............................./...|.-|........-............/......../......................|
............-...../.........-.....-.............-..-...........-.../-..........\\...............\\.......-......
...................\\........-..|........-../.../.........-....-........-........\\.....\\.........|....\\........
..|........./...../............\\....|..../...-..................|.............../...\\..../.........../...\\..-.
................-..............-..............|.....\\.|..............|......|.....|...........................
./.......\\.........|....\\../......\\.\\..../.\\....\\...../............../...\\......\\..-||..|...................-.
/...........\\.../............../../......-................-\\....................\\.............................
..\\-....\\.....\\|/.....\\./.......-..\\...\\....../...../..................-......-....|................/.........
............/..............-.....................|........|..\\../.............................\\......./.......
....................../...-..\\................\\............-....-\\..-...................\\...|........|........
.....................\\....|.........................|......./..../....|.../.../............-.........../...-..
...........................-.../............................\\........-...\\.....|.\\../.........../-........-...
..|....../...........-...........-..\\............/....-../....................../..../../....|................
.....|.................-.-.....-|./.\\.|.............-...........-................\\...-........./........\\....-
................../....|...................-..../....-......................./.........................../....
./......../../-..............................-.......-.................-.......\\...|..........................
................/....-/.............|.....................-...../..../.......................|.|..............
.....................|............|............../.\\................................................-.-.......
-...................................-................\\./......../../.-.../.....|.....-........................
................../...-.........................../...-./..|.-......-.../..........\\.....|............\\||...--
............../.............-/........./...........\\......../.....-...|.\\..|............./............/.......
.../.....|.\\|.......././/..............|..............................................|............/..........
.............................-....\\......\\................................./......../.-...\\...-...............
.................................................-.-...............-.....\\....|....../.....\\../...............
..\\.....................\\.........\\|...\\...|...................|...|.............................|............
......................./...|..........-.-............|..........|.........|................././-.......-......
.\\.....|..|........................\\\\....../....|../...\\..\\../...............|..../....-...........-/.........
.|........................./..|..........|............/...-...............-...-...|..................|.....-..
...\\-..-......../..............\\...../................................-...../.-..............|....--....\\.|...
.......|\\......\\...................-................|../..|........./...--..............................\\.....
|.............................\\../.|..-.....\\......|.|................/-........................-.-......|..-|
................................../....|.....|.......................|......\\.....|....../....................
............-/.................\\.....|................./..|.........-......|......|.....................\\-....
|\\....../...............|...............................\\...-\\......-............|............-...............
....................|.................|....\\..........\\...............|/..|.../................|.....\\.......-
..........-.........-.....|/........\\-.......\\-........|........../........|.|..|........./././........-..../.
................../.......|......................-....\\./.........................-...........................
.../..-..|..-.........../......-......\\..............|..............\\|......................................\\.
....../........../.........................\\............................./......./...................|......-.
........................../.........\\...................\\.\\...................-/..\\................\\.||...\\|..
............/.-..........-./..........................|..../...\\.....|....\\.../..................\\.....|./....
....\\.................-......|....../............/-....................|..../...\\./../.....-..\\..|............
..../.-...........................-/.............../.-......./......./..\\..|....|........-.............../.|..
.........\\..|...|...||....|.........................|.....\\..\\-....|......./....|...|......./.................
....................|.......|.....................................|...../.........\\|.............../....-./.|.
..........|...../..................................\\-|.....\\-.......-....|...\\................................
....-.|....\\...|....\\...\\.......\\....|\\........|......|........./........../..........|..............\\........
.....-...........................-...../................|.............|.......-..-..../........\\........./.\\..
.....|............\\...../.../..............................-.......................................|....-.-...
.................-.-....|.......................-.......-..................-......-......./...-......|........
................................\\......\\...................../\\.......\\./............./.-.....................
....-.................../...........-../............|...\\...\\.|......-.........../......../.../...|...........
................\\......................................\\.\\.-...\\..\\..........\\-...............................
....../............./..\\.........|........................../|...........\\.....-...........|.|........\\.......
.........-..........-............./....\\.............................|................|...|...................
................................../........\\...-................\\........../..\\...-.................../.......
-.......-.....-...././.....-................................................../...............................
....../......-....../......\\........|........\\........\\|.\\...........\\.................../.......|....../.....
..-....../........|............\\...............\\..-../.\\......-.|...../...-.../............|.......\\.-........
............../..........|........-/.......|...-................../........../.........\\./...-.....|.../......
..............|............-.-......\\..-.........................\\./.....-..../-....\\.........................
..........\\..|...-.......\\.-.../../.....|..\\...................-...../..../..................\\....|/..........
.........\\....-............-............-..........|............/..........\\............./.-......-...........
...|\\.../.......-..........-.............../........-...|...................../.....................-\\........
....................|..........|.../...../......./...-.....\\.....................-..................../../....
................-............/............|./-...\\....|............../....-....................\\..../..|....|.
...|..........|.........|.........\\............-.../......../..................-......\\............\\\\../..../.
...........|.-...-../.........-..................-............-.....|..|....\\.........................\\.......
.......|..\\............/........|..........-.|.................|.....-.....|...................-..............
...........|....|/....-...........................|.....................\\.-.\\............-./......./..........
.../....................../................../...\\....|.......-.........../............/......................
..................-....-................|..\\.........|...//|..\\..............\\......\\.......|....../.......-..
.........\\.....\\......-..|........|-....../....-....-..-...../\\...././..|.......\\........-...........|.......-
..................................\\.|........\\.................../......\\./............................\\......
......................\\..../...\\.\\.......\\.\\................-...-..\\....\\........\\........../../.......|\\.....
........|..-....../......../..........|................/.........................-./.......|...\\..............
..................................-..................................\\............../..\\............-......../
.|/....\\....|...|.............../...\\......|...-............|..\\................................|..|...|......
...........\\............|....-...........\\......|.........\\....\\\\.......\\...-.\\.....\\../.......\\.............-
..--................................\\.......................-.......||\\...../...............|......-..........
...\\...|.........................|....-.......-|................-......................\\....................\\.
\\...-.....................................-|...|......|/........./............../..............|.......|......
/......................|.......|....-.....\\...........................\\..............-.|...........|..........
....................../...|......|.-..........-.........../.\\|.....................\\.|........./.-............
...............................\\......|.../..........\\........\\...\\..................-..-..........-...|......
......\\.......\\.-...../...../...............\\......./.|..............................|.......|................
.............-................./..-..|.......\\..\\..................-.............\\...-.......-........--......
...............|...........\\...............-........./...........--....|....../....\\../.......................
............\\.-.........................\\..............-.......-.............................................-
..\\.................................|.....|..../..\\...................\\......../.....\\./../.|..../...-..../...
........\\...||.........-.../.|..........-.|-........\\.....................|..\\....|...........................
.............-......................|/..-............\\.....\\.......|../.././-....-./..........|.........\\.....
.................\\................./..................\\......./..-...-..|....\\........-.......................
....................-.........\\.../../-......../....\\......|-..-.../.......-..........\\.......................`,d7=`2413432311323
3215453535623
3255245654254
3446585845452
4546657867536
1438598798454
4457876987766
3637877979653
4654967986887
4564679986453
1224686865563
2546548887735
4322674655533`,g7=`221111112123113232223221211223431421234233422312143231535322415224214525132414123325214251231222122422133431331343133332311121121111311212121
211122211133211332121231312344123432112311144414235315524424354544513135154222442511331423512341112233243413331223414221112333312313311121222
111212111232312122122123411211113414114234314333354231345141532533115144311545125122533135244454413423434214432314333422122112211321213211221
221122231321333121323232442421144114441343141354135215251552232314544323421141432422435232132143452331432111434413312222323323231113332322112
212122131213123131322142314241332133211314312151331433432332431514521525112255111215513512245345521414332333244343214111231211212222232132121
111123113213211133332414213142233142114244132523312543113125235534453513332535213451144531421355514341443143344424114321214311321221332231122
112232122333123313114141331431132343312335514212512215243544431435312315425532253451451424215231324153324242323341231323211431231222232132212
121221332233222231224131442232331124411415411541512445455233142254145354542423112414245455423225113152214424322124242344141423221131222133112
211123323211333211122314412111342425313421345245115433154452323343413321555222415233151414255251123112353514242234244442133421312212111322222
232133222211233221241431322213431215215314441523115315155443414664425562236642232244533532341552323154232254333122312313433132133213322132312
332122221133112432112231324243222522332235351415545113452424343642435522252532463642525245122225514355233335325522121244421224342323122333122
231311332332333311142322323434233412522544532552431113445423235665326565653443644224346253235333445334123523245544212243312322414431222113122
122113122311421231214414223424521424431215345444452232652434632252546664645223366463664553556333515312321524455422314423441131212221221121323
231323311232443422131123331141154145245552322414463423443346436652335432353526466633423445326431251241142425334132444331141434141133313111113
231311222134334243444322213433553532534451411364562625422353666662653235435633433565255342253426455134333221524133151344131311212244222122333
132232112333224443233223312255345414421123446442243633255356525652562423526325222352324654435532532654151225513443514254413134323124321131132
133213332244341333133313444152512133151134664256455526646556226645443652443546256252553342226336242264151412435525415235424141232322311112313
111223321312234111341444545422525542424562426452465363266654265325642426426352536422552462335564225366212223324455311535434233112421444133313
323123314344433441342531354154112553444434246346544445256444252325244354652455262524433434453336443355345545141425544544451134433213344232121
232323344342212142342535212232424335564556533435262656432256432632674366467533224665223363444445442422554345422151544324222334132334241332111
133223232423323122314421354132153323254633422354453624556642463576647564575576343736322665463634555555225562532253215114313324232121332221123
331322234312332132433215545232512544454244642632334546423456776463666745433757744477763344654443452223655354553331221153325121221421414211332
122132242244123121334125321145424442352326565635423643764456355733534673435777746775553553364635436534345663326145555313115543214411244344131
312123333123124214515442233554454542222665262323236376635734563356477573644544675665563356443624333623523336222421233545254544423322243111222
311243114143323115332443421523223242245562522433655444353365443474337667576333336646545433666422464425646455445652335253232523231413322143113
133434112144114322332345224112265663553552465365755633676643745674644466773357577454633466534767353424364562642263521511222454451232431421424
142311311341424423425235325432562442553254655544743656556735456573764375533444333666374774655744745442245452322446543531413444414212342241443
134143333132352313214413231335362455625526633774433343335747733336566357473646567536775776563474755364332323264455244212452324512132442122414
423211433444515553145523455263344624424646753734337534636453463544467353437475546547537434553466757356653446546523522325334433152253422114144
411412434411121221223155546643465236344343444543563644466477774455666645777455746776755565476675463573544246625325636414552153132333432133321
414244324443524134245345463335543235522337656757743453666445755586586558555887565664547564676656535555776432366432655241141233141324331214242
334111441133223534125246255425436443226644375557576354545647876867744557865447764875433334334747354774743236664256233264411542215324213412233
133142311251453243235345634326326343467357363744654765765757678555774467564575668747885356647463436374736324566526243456351525133213342433414
112312311555553421155326422255352435364445357373733435655874445684648657866648647656784486734357564563733474336662426235315535325111432244213
244143214344524313125466464646325536745353665655344684768788458848875777445665687444755744756453353477333343553262656436423511342524215323333
333314412555144321544534226455643245534546563776756476757645657788765555574746757664787576865447374633677654353555325256556443511355152242122
321433455351154545564233552662355754555437564353547875644585466874446886466586654865565574855546776336567735344254222666646434311553441541334
333334413525333452145225266255227546755475333636764564648666746865456654576488454564888664678554366574375343753635252522546323415443433232344
144331343514123354465665522663264635447667474784886464446756556465466788676875567688847856686657447537454544656464224562432445235433221322332
413221315152411413456453353266446755454477455455845764565878868865484664768588464447485687544868664464735564344572463532326262133411252252214
434235535222444454223342363325363577345366377487855678686567757856656769568577654585567784567856668857366437576764253256322235431222125532333
444322241221114243442636622447465374654467877866478847876664676659558887889886755646546474647874754575456466736354266522623653652345533122444
341411442531322555334253534334767677753757676466478446788645785757666855569997799956777644467884687447476455645755543433542465554221251523113
232313541154334642335436446354433666474774867665664666584896595566586557778559586655766564657765878457675433537646574526446566554531313253431
312354232231515426526564464764375356764454687578884457676665986889859869559679968798856886756557745745755633633734763536256362344231244151441
241224131434342656222526627647774473645767657785755475877657876985775985657596589799776695864657684556446545774556543545346266263444411334114
241425521451526266266526363676774635577844868476448547889685557867586598555588955985995978468474475847845677747367566243254444242133353434121
411445444141354464243464476644565546584874464677855675998855879858667958789756969687859778996654667878645735577745647522242422324255123223231
122334143235166252352325336773467435445888565856769776978898697696695975578868569997865868785466564475758666563545746743224466256241432414534
333453331534554533436454464665345374477484876446597887798687857599987766989575755657555988856754574877476747646634636365523644365231541333145
351243555144622636342425667547633664676555545778897559768759887965777887956896958657967669756767757884786444443537755744563364344644353121231
453535141543334326442335357736767744846555585549655757787788768867688876678887886866975676969956587676474777443554534364264362353563244324131
243141131441454666652234665456466648874476884569765665967696667989879677897789985689999669677988465888646687854363374334235526254461321541534
224442441455345463462267767346445748784554687786596678665675776988899766876779789765678595688769746858666875636657676446455324343525245243154
422331243324543522445343376745477644668775585687865775858569696979969866887787667777885587987665968887857486467566755543346465563546453522251
324544511135434245522553353446556747878686845787988759785668767968966688979968789796897896579769997685566757666767767433425466556462255515512
123534122413362355542733337464368674677788667586787675578998778796667897866887799768975579796679897744786768566346644757372253233665444354312
211555134263235454354664566336365876654558769687758697668696669877866966779888798878966887699667986874487555567556557543734524653343333325544
354312451165533323425547433574768865748745779997658978799696966768699676697868978966899958669589755966448467688335367654365666266663412434412
523215222343532535644535645764774574767865689797688697967886878769996797969968988777979999855977785957455577778855537754735424365422244421541
312543142165252532233657654763685644885577778996775957666769788676886669776797686898876876596796998858477644847465547774756423366345511551524
412314233163346653324366543367368447668784977866789766776876678867869897989787889788997998777857679778857556558866475537774463654224623414342
113131235344463344627665353344666847565845688657576658979698967879988989887989699687968798798978969789578486647453735365334663463523555551532
223211131233542556344447434536466668467446996959559966799767796787797889979888967666687676655785787777444774767643745753545425262645464141325
435514122332566223526657333346644545688457597667795979866686769989779788999797899768888879965889996976656476767864446645456224232426564513323
453145222264234464565637476536488455686686859588658997996876986899977778797797898988998677698788669657785458876553356763377225462555232342114
341153235525264666334663447737887676878648779856695779867869968887779997777989987776668798975785598777658864458567573434673563432356425432521
544322112662522623664645567637658585647797556887575969667976677878989899799988798786898888788868566786957466667747455635456322534362322343542
143235433345625465644543477645646555676669685989566697986997799779988899979777788789696688787566688669765778477544363735446746546246443421423
214121314423525422346763545665864746646699659669557678698787899779887797897977787787886866989995899975754646774687545545446662646662233352331
342411323423564425534355477345784848675477789756986687698968979897877897887889797966998969677897888768778658455484656746555623354626425212542
515411425264662333257767547456787845886568897866679687686976878797778979978977787777978688879989765998576648545787654676776764633632643353352
111321555243253666276657477435656765856688658757677967667879798888899879897778877798766778668657768889647788887543775375465753445636342542251
343513142565442562357776474337675854584865785688576696786679888887777899887998889778687888789799857559564444744754664743436526224356653125351
122242125436564354476646576333776756485576788656759799797699777887978878798888979896699987789659686767745458557847447447567633326222225155215
455444253653265624243756373366854467565699676887698976699777967788887887889889797779877787769986879998668845745646645566547536344642235255545
315425355524562466573373356636658777745759876799987999896887969779999897778889997977887679689577558855777866444653457773747344446235655215213
115334354463445432435633734444688676546647598855858879887779689999997878899988988879999879999777767788665448478475734465667444625425652511125
423411425234345634336576473345866675774576979869777886698976977897988887977797766977786888869588889867745764887467573766733263234444532314454
523413443263255443224473454473575744675456758899697768777696889679779888989777889996776677885567878586665464667446677446764344625543321543221
113353121532262463346334355653374758746555997785679598967897788688988877988888786779686878579969886975866666586844547545675452536566535332324
321152241456434226534577664553648557885775697588988668787876686669967879779689998899678786978589687557654757664836575675773232646463435333134
123141441456266452537765766574457654685844678986885875998696989688668898678896689699867897995656579677575564685877636543377342623256425441213
344233152524565546362645357374584568668744656995676766869867989679766686879896876888897797886776857987865584747665354765372565663253511131111
355153434133422632334654364334747458567566899969777758869997777689797876986997777787989985958885566864864845655567756733732566325625225413231
114431353433356242653544373556565467666855556587979695999999689667779896886888997787978767787986778577566445488746747633556553432555424332231
443543233545335352542436735666744686746585788778866655655677688866968869799897786978685989689787689848667458766764735673454226425322412231155
414355431112224332333536567756464445848844877875766875865897996877996869768866677888877996979995567668565865783377745354646645534346253324133
235451144332323523245644735665365844574777848566868797985689697677667968866787879896785986555795688648456567646335455544436524336535152152454
213214541332444656264344777667653574675778476495676877688778586979999987688988887996769576885897886455875567755577335555626323262352541511151
214355111153342562633346464753443458467464555568875756857877755968688676797898667685566856677777477465545885873553353573322626226345431542534
133424543523226436322465347674534665668856744848977999676687787759787776766866886677587768686985446566676585734473334346356524435644324334213
233443124133452345365245657434633446478686854558897577686999798695965978595977756565987765889685575677688745747663637756234232664443224433132
114432125515122654243223363455347344588585556865566995966979598889779887667558865558578876587887865444546887367574447573544536625255551415123
434113123125243252425646663763563543566558757575589866796899878699876675856886688756595756876645848448588436747433334343354534565424113333531
415312423223134536652245255773674746354458885764844965556857797567878858669856979896855655695458867477655447537744767362442266544221212122552
432512134334552653555622625755577434777566767668486647885577585887856665685769698986899798855886584754444373433343573254626456326513345341343
431322251453143463243535627373334676534885555587787554879555888765755898796875655597577677855765774857676754436743376254244624224241134511122
322425542152425626564554236756675764577786446454486686665587756855886689567858565856878676776788556846733653543437654263566562445551511334241
222223414252541366223232362647453543576548647485456688465857855988788666969886858886768555585874474784675675566734762422536334245533323224411
324135241332225346366256336534777643553637774887787778666574986996558665786975969978558676864565768444664734344357655435246465431522134143321
221323125312133154545435263334564433764747474848857475888775787589885579677589858466776877557474765543755543564367423324352546545121132245434
213314154253123446564546356556467653376666744784865888647454856456888767555755578668748875855656486575537353636645665336243452342352114255414
333232431543244252356436446656467664374744743685777866677748867474847578548578655777544778684665564664734446566644435356345644415515215142143
344433553315244454453563264264354635567373545656455675855777788575777684784447475646545664868786565736755346673526535554323634322414514352112
113142221324341425364462435555657767377466773576874644586487667677855647887778748476758577885888545363434446576222246365246422255515533414312
334143221411221412556554466362455334477466743455558748678667485845867877867556667646645474755535636655457455346243542562444555142215215133133
331133333511344143453426662645223444354457377343347746856547845774856555545884657654774468848665664746356454463442342232555555252322425422412
212142143434511513315234562342634323655755745535646646644656874568567575668648558647756875637564343653357754556364644633342525225545432342244
413234344425515111442134642532565452576573464334654673886665444576757766558688765487844745663765763467677372663235265336344545215343231341343
414233433441132244243434533566343434234434566767437744358866655577764554887858864688567346565453446637656663656236565326615313522245121333311
341324242355122322351314564564323664343747636567773667357475856548787648476867557854354655537456333747467446363535464234255241534332331224232
412433321333545115253524555262526323324574736534733737337567467475487578777646756657444546744457673563474344444434332444423253424153411342342
241424222341541433424353364423642226426364566775356555774454377676457363477374373465736756635446356575644323425256265445553534243521441241421
334313222442411122141435216232435544224245754764566747755357353566367536334375636774736456346447733573566443353366446124441231122554224433334
334243243213212134441314442352554533355435634343465446373345433743555567474657664373375434757476357423664634424235654513214124232421234224124
231214242234133322134344454262434464532444624575453673735666647554467675666757344344434676474556555452264224662625642151241421541121214411243
133422321412321521315415414152632465242663446423546456476453447536464353575437476333577676334375434444534643424625515143143125542242122443223
133313424413242132435143145415624425432323342465636373477633334655443375367675734644754744444543655253644424536623311412512255414122232231332
211434114433312255415534254152336656453436642362432756543657654776563733355333775375767673446532434442535552454415513542345325123344322124311
133142123433422412535554325232543335224353432264466563753456566753774666476365366547377555456326365525436265335521131124331451232211413242422
133214314433124434412522135251352233366535226644666262327435765447754777365657457556356355323555453466525643511233512441244413434314231323211
211131222343342224242524255124414422543653344232555334263535564453336637333375357332635324436463655644653464321142553551135324123233211333231
123233234322243443445531354522242541265224366554462456526553424643335377647376533435555454436353464352634531155433531123441143342414414313222
212113141323343313113124515542132431124454356332452466443364225643625462365425543453223226552266322354562115144321531543511131314334141223112
213111133114434224222123524231135315522345254635366223346536655223235642534423253642526446463435556343332441224222442155324132241424113121322
223222321231241122313412543431335251132245645353232542526652653434224222554626366263322655356264633452155451544521214314122334243222421113121
131232332414122232342441453354552333215545165353623522554352256652334326466453635363245464336465552651524123244224254341331222443242112332222
221131111141332114113122223223245133232545533634662444236455452656226446632254453235365564664624461353243551312122131213222112114314232311312
222332312133244424124314434324521342222353512451455246535234536536534363523264534423664452646235525122552333134242253313211122223324122122111
133131131113412132434133112452142521331241432443442226622632522465465365425423456324662622533125242352152452351342234432331424311212221322321
312313111312231122441141224234215431542441154131222223554646555362246635324644232464355626533215423242522444345313324324324232433411331212331
312332312332211141111432433434233421253514444553354253424256255626434565544362656622233332321331524325355155452244211211432413114222112211233
231123222213331342111342344334333452325414125114135254421553133645344245456665245445445411133352351341555111313142122113422232311312122211223
121123132323111314324343143134432145441543533444112222153335113243211134331544531545514234523115432244322244522132334211124411122131131311233
121222233311211131211241414434334412214242211512332245551314511441334422313445555324141134211225113155154522443414123143421422223122133332131
221122232211322333121343424443211412124113553454354415252111413545523252335341312114233241345455552432344224331121212123341131121321123133322
122111232133212333114241342211414432432451525532212541215254352135314151345452314123533254542323111254213312342213222422324223233113312333211
112221312121332223111124124211412322424112443244532125423544253254455521144521222323412142453225133322144423313322213112233113122332123222111
222222213133232221311123322442113434233223134131232412515351432512434332551315534323552531252322544341242341431223321421331112333333332122112
112222121122221212222331122123242441213424442111531144421232221124154331442433155341112524322525212214112321333234222132131323112333212111122`,h7=`R 6 (#70c710)
D 5 (#0dc571)
L 2 (#5713f0)
D 2 (#d2c081)
R 2 (#59c680)
D 2 (#411b91)
L 5 (#8ceee2)
U 2 (#caa173)
L 1 (#1b58a2)
U 2 (#caa171)
R 2 (#7807d2)
U 3 (#a77fa3)
L 2 (#015232)
U 2 (#7a21e3)`,b7=`L 4 (#6c82d0)
U 2 (#801271)
L 5 (#2fcea0)
U 11 (#801273)
L 3 (#5b0810)
D 8 (#0c0ea1)
L 2 (#25bec0)
D 4 (#639053)
L 5 (#28db50)
D 4 (#396331)
L 6 (#936690)
U 4 (#396333)
L 5 (#4f5be0)
U 7 (#639051)
L 5 (#799080)
U 5 (#0c0ea3)
L 5 (#69d6e0)
U 2 (#107d21)
L 4 (#82f122)
U 7 (#551401)
L 7 (#82f120)
U 3 (#43a1e1)
L 8 (#212420)
U 2 (#5fcce1)
L 3 (#5d8690)
U 5 (#8b76e1)
L 9 (#3a3420)
U 5 (#1b5501)
L 9 (#191912)
U 3 (#482111)
L 2 (#5e1be0)
U 4 (#8b7801)
L 6 (#53b250)
U 6 (#3b0821)
L 4 (#178532)
U 7 (#53fda1)
L 3 (#2875e2)
U 8 (#1645b1)
L 2 (#71d322)
U 7 (#60bdd1)
L 2 (#191910)
U 2 (#553ad1)
L 7 (#94af32)
U 3 (#116281)
L 3 (#94af30)
U 10 (#4b7c21)
R 5 (#3f8440)
U 4 (#356ea3)
R 6 (#13df80)
U 7 (#46dbe3)
L 4 (#13df82)
U 11 (#507db3)
R 4 (#657e80)
U 9 (#26fa81)
R 7 (#4b28a0)
U 3 (#8e7e81)
R 3 (#2e8b60)
U 6 (#174f31)
R 6 (#0e9910)
D 3 (#9b6b71)
R 11 (#123ec0)
D 5 (#5006d3)
R 6 (#2c2310)
D 6 (#3cfd83)
R 4 (#7e56f0)
D 3 (#58e933)
L 4 (#413ad0)
D 4 (#786ae3)
L 6 (#2b21e0)
D 3 (#156533)
R 6 (#33e5e2)
D 5 (#1e49e3)
R 4 (#3eb5d2)
D 3 (#25e9d3)
L 4 (#29a690)
D 5 (#78ad33)
R 3 (#3d3340)
D 3 (#2895d3)
R 6 (#0bc1e0)
U 3 (#0db143)
R 8 (#450ca0)
U 2 (#07a253)
R 3 (#4d2b70)
U 7 (#30ac83)
L 6 (#5376e2)
U 3 (#7d64a3)
L 5 (#5376e0)
U 4 (#00df63)
R 9 (#409ae0)
U 6 (#33e5b1)
R 2 (#5fcc30)
U 3 (#4d1741)
R 7 (#2f7040)
D 8 (#4d1743)
R 4 (#54e460)
U 6 (#5897b1)
R 5 (#195bc0)
U 2 (#8c7d63)
R 4 (#487c00)
U 3 (#277ec3)
R 6 (#3c0aa2)
U 4 (#638d53)
R 4 (#3c0aa0)
U 3 (#256eb3)
L 4 (#1b2d80)
U 8 (#42bca3)
L 4 (#2fba30)
D 8 (#4c1de3)
L 6 (#4e6452)
U 6 (#1cd493)
L 4 (#4e6450)
U 4 (#530793)
L 7 (#68d220)
U 2 (#0a4943)
L 5 (#252560)
U 3 (#03b331)
L 3 (#8ead00)
U 7 (#5cfb81)
R 7 (#058540)
U 3 (#2b5441)
R 10 (#1f1790)
U 3 (#128a41)
R 8 (#0135f2)
U 5 (#3f62d1)
R 8 (#1843a2)
U 3 (#25f2d1)
R 4 (#5e5c90)
U 6 (#3a5121)
R 5 (#5e5a72)
U 3 (#5d3511)
R 6 (#5e5a70)
U 5 (#5d9301)
R 6 (#5e5c92)
D 10 (#020841)
R 6 (#1843a0)
D 6 (#1680e1)
R 6 (#0135f0)
U 7 (#2174c1)
R 4 (#5f43d2)
U 2 (#94a1f1)
L 4 (#540602)
U 7 (#9b09f1)
R 4 (#194b70)
D 3 (#6ef6b3)
R 3 (#678da0)
D 8 (#337253)
R 5 (#6ef800)
D 8 (#060983)
L 5 (#210ef0)
D 4 (#2e3a73)
L 3 (#1b9dd0)
D 6 (#32cf93)
L 10 (#3ad300)
D 4 (#7e0ca1)
R 3 (#3467d0)
D 3 (#692a01)
L 10 (#4fb770)
D 5 (#2194b3)
R 10 (#7c8620)
D 4 (#64ec03)
R 2 (#6320a0)
D 2 (#500d23)
R 6 (#6a9e42)
D 3 (#7451a1)
R 3 (#0817f2)
U 7 (#7451a3)
L 6 (#6cf092)
U 3 (#10a8d3)
R 6 (#2a6cf0)
U 7 (#48fc23)
R 4 (#339252)
D 6 (#1da1b3)
R 8 (#6135a2)
D 5 (#1da1b1)
R 7 (#14aba2)
D 7 (#6948f3)
R 4 (#3feba2)
D 4 (#0d58f3)
R 3 (#1b9dd2)
D 5 (#1f8e93)
R 7 (#39d370)
U 6 (#2a2a03)
R 6 (#2cda70)
U 8 (#3fb023)
L 6 (#43cc00)
U 5 (#47fcb3)
R 9 (#553d50)
D 3 (#33f2d1)
R 8 (#9822d0)
U 8 (#33f2d3)
R 7 (#34c190)
D 8 (#505803)
R 4 (#618d80)
D 8 (#3d6eb3)
L 8 (#153d00)
D 7 (#2434a3)
L 3 (#28df80)
U 7 (#1fe683)
L 8 (#4801e0)
D 8 (#759953)
R 3 (#1d6900)
D 6 (#1ed353)
R 7 (#2de280)
D 5 (#371e03)
R 10 (#85fe70)
D 5 (#02a001)
L 6 (#36eaf0)
D 2 (#705bc1)
L 10 (#1cbfc0)
D 6 (#350221)
R 9 (#495820)
D 4 (#3cd261)
R 7 (#48fe70)
D 4 (#362461)
R 9 (#925692)
D 4 (#2c0e51)
R 2 (#552b70)
D 8 (#2d26a1)
R 8 (#3c05a0)
D 4 (#6efb41)
R 8 (#3c05a2)
D 7 (#24e861)
L 5 (#5f0f20)
D 2 (#1516c1)
L 4 (#6f3420)
D 5 (#040d01)
L 5 (#44e6e0)
D 2 (#3d7211)
L 5 (#0a7612)
D 5 (#3e93e1)
R 2 (#29c122)
D 3 (#2cd391)
R 3 (#51d132)
U 5 (#2cd393)
R 10 (#2e12a2)
D 5 (#6ba761)
R 4 (#0fa1c0)
D 5 (#50ac51)
R 3 (#9123c0)
U 3 (#61bfd1)
R 9 (#337bf0)
U 4 (#9b9743)
R 6 (#516cc0)
U 3 (#0d6c43)
R 5 (#2c1560)
U 3 (#4e6031)
R 6 (#5f5732)
U 9 (#1406d1)
L 6 (#5f5730)
U 7 (#469c81)
R 5 (#0309a0)
U 4 (#61bfd3)
R 3 (#1f5270)
U 7 (#5ce901)
R 3 (#0130c0)
U 3 (#1d4c21)
R 7 (#47d430)
U 6 (#642ca1)
R 3 (#352de0)
U 2 (#538061)
R 5 (#3df912)
D 6 (#422391)
R 7 (#67a1f2)
D 9 (#3147b1)
R 2 (#30bde2)
D 4 (#36f231)
L 5 (#310a40)
D 5 (#359bc1)
L 4 (#6b1ed0)
U 5 (#557a21)
L 3 (#8645c0)
D 2 (#50dca1)
L 3 (#1a1372)
D 7 (#2c8523)
R 4 (#4d1232)
D 3 (#3e0691)
L 4 (#4fbd02)
D 5 (#3e0693)
L 5 (#06bf22)
U 5 (#2c8521)
L 4 (#64cd12)
D 6 (#2b9071)
L 2 (#4672e2)
D 3 (#41fab3)
R 6 (#6ff982)
D 10 (#41fab1)
R 6 (#0eee42)
U 10 (#19a091)
R 3 (#2d9a72)
D 3 (#2e8801)
R 5 (#6242e2)
U 7 (#2e8803)
R 2 (#0f8592)
U 8 (#0f8d81)
R 4 (#914592)
D 6 (#3f2b91)
R 6 (#4ebca2)
U 5 (#6ac2e1)
R 2 (#0cab42)
U 4 (#54fb91)
R 5 (#0cab40)
U 4 (#4b28c1)
L 5 (#414770)
U 6 (#3e81d1)
R 3 (#1f0792)
U 2 (#1be271)
R 4 (#1f0790)
U 5 (#536a61)
R 10 (#2bf8b2)
U 4 (#1e7651)
L 10 (#4f7292)
U 4 (#49b9a1)
R 6 (#3b8772)
U 3 (#177db3)
L 3 (#382f92)
U 6 (#379263)
L 6 (#63f042)
U 5 (#268a23)
L 2 (#939320)
U 5 (#5fe043)
R 5 (#0afc00)
U 4 (#056de3)
L 5 (#9e8f22)
U 5 (#2a9f03)
L 6 (#1e5a92)
D 6 (#05a653)
L 7 (#78da72)
D 4 (#2a2ff1)
L 2 (#04cbd2)
D 6 (#265f01)
L 9 (#0d6500)
U 6 (#3a7761)
L 6 (#6c6cc2)
U 10 (#438ae1)
L 5 (#6c6cc0)
U 9 (#20c111)
R 7 (#0d6502)
U 7 (#1bdb61)
R 7 (#2bac02)
U 2 (#1fa311)
R 6 (#3d5e80)
U 2 (#8312b1)
R 3 (#4db520)
U 6 (#0dafb1)
R 4 (#5126b0)
D 3 (#3f5181)
R 6 (#647410)
D 9 (#3f5183)
R 4 (#13ea30)
U 9 (#0dafb3)
R 6 (#789ab0)
U 3 (#03bf41)
R 3 (#4d8c10)
U 9 (#08ff31)
L 6 (#2fb312)
U 6 (#8f02c1)
L 7 (#2fb310)
D 6 (#0d6881)
L 10 (#414772)
U 5 (#55ae31)
L 3 (#43acc2)
D 8 (#680c41)
L 3 (#6c2212)
D 7 (#680c43)
L 4 (#191dd2)
U 4 (#350333)
L 5 (#120bc2)
U 3 (#200061)
R 5 (#2481f2)
U 5 (#5d6201)
L 4 (#67a742)
U 3 (#7d6263)
L 3 (#0a86e2)
U 2 (#350331)
L 8 (#7fc862)
U 7 (#123121)
R 4 (#026d32)
U 9 (#9b27e1)
R 7 (#04de82)
D 4 (#18dbe3)
R 5 (#6da282)
D 3 (#7d5e43)
R 8 (#00e292)
D 7 (#171ee3)
R 3 (#112822)
U 5 (#4a9403)
R 4 (#4d41c2)
U 9 (#9369a3)
R 7 (#571612)
U 7 (#9369a1)
L 8 (#0e6e82)
U 4 (#1b3921)
L 3 (#3b9ec2)
U 5 (#1b3923)
R 5 (#4c8902)
U 8 (#2f0eb3)
R 3 (#55e712)
D 4 (#566ff3)
R 4 (#27fc52)
D 10 (#3102e3)
R 4 (#391d52)
D 5 (#6414f3)
R 4 (#2fb330)
D 3 (#44a733)
L 4 (#2fb332)
D 9 (#208aa3)
R 4 (#2a4ca0)
D 3 (#3d5943)
L 4 (#3148d0)
D 4 (#477c63)
R 7 (#72d2a0)
U 5 (#0e36c3)
R 5 (#1bc310)
U 3 (#3d7b11)
L 5 (#4804c0)
U 6 (#3d7b13)
R 4 (#4b1df0)
D 3 (#0e36c1)
R 7 (#097f70)
D 3 (#1646e3)
R 3 (#0ed3b0)
D 4 (#5f4ae3)
L 6 (#0ed3b2)
D 4 (#4f7ad3)
L 5 (#6b2180)
D 4 (#4e7b63)
R 5 (#6b1582)
D 5 (#2e16b3)
R 6 (#6b1580)
D 5 (#70ce73)
R 2 (#5dc652)
D 3 (#04a731)
R 11 (#588482)
U 6 (#2d2d81)
R 3 (#55b632)
U 6 (#369811)
L 6 (#730eb0)
D 8 (#1ef481)
L 4 (#730eb2)
U 8 (#53f841)
L 5 (#37a662)
U 4 (#407fb1)
R 8 (#3d9952)
U 3 (#78fa41)
R 4 (#36d132)
U 4 (#0b8861)
R 3 (#4514f2)
U 5 (#225bb1)
R 4 (#0df1e2)
D 3 (#3708b1)
R 5 (#1a9ab2)
D 7 (#6748c3)
R 4 (#615ef2)
D 5 (#6748c1)
R 3 (#41af52)
D 8 (#648171)
R 8 (#142ed0)
D 8 (#58af31)
R 6 (#814d60)
D 11 (#314a31)
L 2 (#361ea0)
D 7 (#45e2a1)
L 6 (#562fc2)
D 5 (#01ab91)
L 6 (#090eb2)
D 2 (#0f7491)
L 4 (#28c7b2)
D 9 (#8f5f01)
L 6 (#3c6be2)
D 6 (#2e00c3)
L 3 (#4723a2)
U 8 (#70d2d3)
L 5 (#316352)
D 8 (#400d81)
L 5 (#5586b2)
U 3 (#0c00e1)
L 6 (#4c6a12)
U 7 (#693f73)
L 3 (#31a5a2)
U 2 (#11b8c3)
L 6 (#3e6642)
U 3 (#11b8c1)
L 4 (#480ee2)
D 8 (#1865f3)
R 3 (#265752)
D 3 (#569621)
R 2 (#307622)
D 9 (#39b101)
R 8 (#6cfcf2)
D 6 (#39b103)
R 2 (#04e442)
D 3 (#569623)
R 4 (#170482)
U 10 (#6b0b43)
R 4 (#3f73c2)
D 10 (#128763)
R 7 (#5acf92)
U 3 (#8e3573)
R 4 (#5acf90)
D 6 (#0d0c83)
R 3 (#112e32)
U 6 (#783e43)
R 5 (#5d8ae2)
U 4 (#3e1563)
R 5 (#1a9462)
D 7 (#1ea523)
R 7 (#83a342)
D 7 (#5d7dd1)
L 9 (#47c452)
D 7 (#777af1)
L 9 (#69b962)
U 7 (#1e13f3)
L 4 (#6d3142)
D 8 (#490133)
L 9 (#0c8442)
D 4 (#59b423)
L 4 (#14c4f2)
D 4 (#1a36c3)
L 6 (#2b45e0)
D 4 (#6e7e53)
L 6 (#2b45e2)
D 6 (#164043)
L 7 (#3b2710)
D 5 (#08fc03)
L 8 (#23ae40)
D 4 (#165253)
L 2 (#4865e0)
D 4 (#6d0323)
L 9 (#373450)
D 6 (#2f49c1)
L 4 (#7c6940)
D 5 (#5d07b1)
L 6 (#19d050)
D 8 (#6bd2c3)
R 6 (#417ff0)
D 3 (#6b1e73)
L 5 (#388372)
D 2 (#585e83)
L 3 (#6ee262)
D 2 (#815e51)
L 5 (#3b3162)
D 8 (#815e53)
L 4 (#440782)
D 5 (#585e81)
L 2 (#8704b2)
D 7 (#28aa83)
L 5 (#0885a2)
D 3 (#68d7b3)
L 7 (#4085c2)
D 7 (#069d63)
L 6 (#036b72)
D 4 (#46b823)
L 2 (#4ac232)
D 6 (#3fa933)
L 8 (#2eee82)
U 5 (#131e43)
L 6 (#226692)
U 9 (#11ccc3)
L 4 (#3f3f62)
U 2 (#5ae363)
L 4 (#118210)
U 6 (#7cf5c3)
L 5 (#599080)
D 6 (#22ac01)
L 3 (#2c5410)
U 5 (#0a2a61)
L 8 (#344c60)
U 4 (#7ce411)
L 6 (#3fdc50)
U 7 (#498433)
L 4 (#053fd0)
U 4 (#603643)
L 8 (#0e78b0)
D 8 (#32b543)
L 2 (#94adb2)
D 3 (#2a0f63)
L 3 (#767e12)
U 4 (#08aee3)
L 2 (#676092)
U 9 (#3ba3b3)
L 3 (#14d1f2)
D 10 (#617823)
L 2 (#589a62)
D 3 (#2f4ae3)
L 3 (#013242)
U 4 (#286e03)
L 5 (#9eaf10)
D 12 (#3e14f3)
L 4 (#4b2d20)
U 12 (#407091)
L 3 (#813f40)
D 3 (#407093)
L 4 (#2331d0)
D 5 (#174123)
L 7 (#0c6fb0)
D 3 (#71da33)
R 5 (#466df0)
D 5 (#590263)
R 6 (#977572)
D 4 (#2db733)
L 3 (#04f302)
D 4 (#078a61)
L 4 (#9b0d72)
D 5 (#1125f1)
L 12 (#1df722)
D 5 (#897b61)
L 3 (#0cf612)
D 11 (#60f001)
L 3 (#25e3c2)
D 2 (#445801)
L 3 (#70cb12)
U 6 (#445803)
L 10 (#7a6952)
U 2 (#60f003)
L 4 (#44c9f2)
U 10 (#28c3e3)
L 5 (#6fc562)
U 10 (#4ecf73)
L 3 (#6fc560)
U 11 (#2a9863)
L 5 (#51b2e2)
U 4 (#786b73)`,c7="",p7="",m7=`broadcaster -> a, b, c
%a -> b
%b -> c
%c -> inv
&inv -> a`,a7=`broadcaster -> a
%a -> inv, con
&inv -> b
%b -> con
&con -> output`,O7=`%cd -> jx, gh
%bk -> jp, cn
%px -> xc, hg
%tv -> gh, xl
&xc -> bm, zq, jf, hg, bd, hn
%bd -> px
&bh -> mf
%dx -> cn, rb
%vv -> pp, gh
broadcaster -> cx, zq, tv, rh
%rb -> cn, qr
&jf -> mf
%jd -> mm
%cx -> xd, cn
%zs -> cz
%hn -> bm
%xr -> bd, xc
&mf -> rx
%zq -> kg, xc
&cn -> sh, jd, cx, tc, xd
%cs -> xj
%fb -> tc, cn
%mm -> cn, bk
%sq -> th, hz
%sz -> vx
%xl -> gh, sz
%vm -> gh, vv
%jp -> cn
%qr -> cn, jd
%bq -> xc, zv
&sh -> mf
%gz -> gs, hz
%qc -> qg, xc
%hg -> bq
%dt -> sq, hz
%xj -> fz
%qs -> gh
%fz -> hz, zs
%qg -> xc
%pp -> qs, gh
%zv -> xc, qc
%rh -> hz, mr
&gh -> tv, lk, sz, bh, vx
%th -> hz
&mz -> mf
%bm -> xr
%lk -> pg
%jx -> lk, gh
&hz -> xj, cs, zs, rh, mz
%tc -> dx
%mr -> hz, gz
%xd -> jk
%pg -> vm, gh
%kg -> hn, xc
%gs -> cs, hz
%vx -> cd
%cz -> hz, dt
%jk -> cn, fb`,z7=`...........
.....###.#.
.###.##..#.
..#.#...#..
....#.#....
.##..S####.
.##..#...#.
.......##..
.##.#.####.
.##..##.##.
...........`,x7=`...................................................................................................................................
.##.....#........#........#...........#......#....##.....##....................#...#.......#.....................#......#.#........
...........................#.......#...#.#...#....#...........................#................##.......#....................#.#...
..............#..............##...#.....#.#...#..#.......#...................................#..#......#.......#....#...........##.
..........##...#..#......#...#.#..........................................#....................#.....................#.....#.......
..#............##.....................##.........#..............................#.............##.........##..................#.....
..............#.#..............................#...............................#....#...#..#.......................#...##..........
.....................#...#....#.......#.............#.#...........##...................#.#...........##......#.#......#.....#.#....
.....#.......#..........#...##.#.....#.......#.#.....#.......................#....#..#....................#.#.#....#.......#.......
..#............#.#..........#.....#.....#.......#..............................................#.................#.................
......#........##..........#........#............##......................................................#.........#...............
......#...#.....#....##.................#.......................#..#..............................#.......#..............#.....#...
.......#..#.......#..........#.............................#.##.........................................#...#.........#............
....................#.............#.#..............................#......#...........##...##..............#..#.....#..............
........#.........#...................#................##..#...#...#.......#.....................#...#........#.#.......#..........
.......................#..#.....##...........................#.#.....................#............#.#.............#.#...#..........
..#....#....#...............#........#.........................#......#...........................#.##..#.###..#....##.......#.....
...........#..##..............#...##............................#..#.....................#............#............................
...##.......#........#.#.....#.........#.#.........#..............##....................#.##.....#............#.................#..
...#......#....#............#............#...............#.#......#.............#.............#........#.#.##.........#....#....#..
.#...###.#....#..................#...#.................#......#........#...#.....#.......#...................#..........##.........
...#..........#........#.......#.................#......#...............#...................#..................#...#....#..........
...........#....#..................#...#.......#..........#....#......#......#...#...........#..........................#..#.......
....###...............#......#........#...............#...##...#...............##..............#....#..........#..#....#...........
.............##......#.#............#........#....................#.#.........#..............#................#.#..............#...
.###....#...............#.........#.#...............................#...#......###....................#.##.........#...............
......#..............#.........#.............#..#..#.......####.....................................#..#...........................
....#...#........#..........................#........#....#.#..#.............#...#...................#.............................
......#...#.................................#.....#...........#..................................................#....#.#..........
..........#.....#.................................##..#........#..................##.......................#.......................
..#..#.##.#.#..............#..#.................#..................#........#.........#..............#....................#.##.....
.........#.......#.....#.#...............#...#....#..#.............#...#...............................#...#.##...#.....#......#...
..#..#..........#.......................#............#...#............#............#..#...............#............................
.#..................##.#..............#..................#.....#..............#....#...#..##............................#...#...#..
.#.....#..#.........................#....#........#........#........#..##........#..........#.#.........##..#..........#........#..
...................#...##................#..........#.......#...............##....................................#...#............
................#...#.................#.....#..............#...............#......#...#....##...................#.....#.....#......
....................##............................#..##..##..##...........#.......#.#.#..#....#...................#................
..#........#.#..#....#..............#............................................##.................................#..............
..........#.......#...............................#.......#..#....#...#.......###.......#..........#.........#........#........#...
........................................#.............#.##........................#...............#..............#.................
...#...........................#.................#.......#..#.....#...#.........................#...#..........#.............#.....
..................................#...#..............#......#..##..#..#........#..#.#..........##....##..................#....#....
..#..........#....................#......#....#.........##....#..........#......##...#.....#........##...................#.........
..........#..............#.............................#...............................#.......................................#...
.............#..........#.......#...#.#..#..#..#...#.......#..#..........#..#......................................................
...#.....#.................##..##....#.#..#...................#......#......#...........#..#....#...................#.......###....
........#....................#....#...........#.............#...............#...........#...#.........................##..#.#......
.....................#...........#..#..#....#..............#..........#..#.........#..##..........#............................#...
...#......#.........................#.......#.......#...#.........#........................#.#.........#......#............#.......
....................#.#..#..................................................#......#............#.##........##..............#......
.......#...........#...#.#..#....#.#.......................##.................................#................................#...
.......#............#...#......#..#.#................#................................#...##....#..#...........#.............#.....
.........................#....................#.#..##..#..............#...#....#...##..............................................
.........................##..............#........#.#...........#........#.............#...........................#..........#....
.#....#..........................#......#..#...#...........#.......#..........................................#....................
....................#........#....#..#...........#.....................##.##.....#...#..................#..........#...............
.....................#....................#.#..................##.....#............#.......##..#...........#.......................
.....................#..#........#...#.#..................#....#.....................................#..........##....#............
...........................#.#....#...............#...............#........#........#...#..........#..........#....................
.................###......#.......#....................#.............#............#....................#.....#.......##............
.........##......#.....................#.....#..........#.....................#......#..........#.....................#............
..................#..#........##..###.....................#..........#......#...#......#.#......#......#.............#....#........
.........#....#.#.............#....#........#.....#..........#...........................#.......#....#...#........................
...........#.................................................#....................#.......#...........#...#.......#................
.................................................................S.................................................................
..................#...............#..........#..........####.............##......#.#...#.......###........#..................#.....
.......................#...#..##...................##..........................#...##..........##........#...##....................
............#................#.............................#................#......#..........##...................................
.............#....#.....##...............#....#..##...#.....#............................##..............#.........................
.............###.....#..........#.....................................#....#.#.........#................................#..........
..............#..........................................#........##...#.#.#...............#..........#............##............#.
............#....#............#.........#...........#.............#............................#..##..#............................
...#...................#.........#...#............#..#........................#.#.#..#..#.............#.....#......................
.................#........................#.........#..........#..#............#.#.....#...........#....#....#.................#...
.....#.................#....#........#.#......#............##.........#.#.........##...........#..#............#..#..............#.
.....................................................#..................................#..............#..#.......#..............#.
.......................................#...........#.........................................#...........#.....#..............#....
...#.#..#..........#...#.##.#..........................................#...............#.#.......#.......................#...#..#..
....##.##.#.........#...#......#.#.#..........................................#.........#......##...#......#................#......
.......................#...#......#....#...#...#.......#......................#...........................#.#......................
.......#..#.................#...#...#...........#........#.........#......#.#.#...##.............#....................#..#.........
........................................................#.............................#..........#...#.................#...........
............###......................#.................................#..................................##...............#.......
..........................................#.#........................#......#.#..#..................#..#......................#.#..
.........##........................#...#....#.....#.#......#...................#.............#.........#............#.#.#..#.......
......#......................##...........#....#.##.....#......#..#...#..#.........#..#...#....#.......................##....#.....
..............................#......#........#...#............#.........#.##..........................#.........#..........#.#....
...##...#....................#.....#................................##.....#.......................#...........#..#....#...........
.......#....#...#...................#.#...........#......#..........#......#...........#.............#....................#......#.
.................................#......#.#...............#.......#..........#.#..#.#.............#..........###....#..#...........
..............#..#....#..............................................#......#.........#...........................#................
.#..........#....#....#..........#..#.........................#...#.....#.....................##...#...............#.....#.........
.......#.......#.#.......................#...............#.........#.......................##.....................#......#...#.....
.....................................#....#.........#.....#...................##............#...............................#.#....
........#...#...#.....................................##...............#.......#...#.......#...............#..#.........#.....#....
....#............#........#............................#......#.....#.#..#..............................#...#..#...#...............
.....#..................#..............#............#.............#.#.#.#......#......#................#.....#.....................
.......#...........#.........................#...............##....#..##.......#........#.................#..............#...#.....
..#..#.......#.#......#......#...........#.#..................#...#..##..#...........#........................###..........#.......
........#......................#........#........##.#......................##..#...#............................#...........#......
...............#.....#........#.#...................#.......#..............#............#........................#.....#..#..#.....
........##...#....#....#.......................................#.........#..##......................##..#......#...................
..#..........#.....#....#.#..#.....................................#...#.#..#..#.#.#..#............#.............##................
..................#......#...................##........#.......##...#.............#............................##.........#........
......................#........#.#.#...........#.......#.#.....................................#.............#....##.......#....#..
.............#.....#...........#..#.............##...#..#.............................................#...........#.#...#.....#....
..........................#..#..................#.......#..#.........#......#..#..................#....#..........#.#...#..........
.....#.........##.....#.......#.......#.........#..#.##...#...................#..........................#......#.#................
....#.#.................#...........#.......................................#.....#.........#.............#..................#.....
....#.....#.................#.#....#...#...............#.....#.............#.............#..................#.......#.....#....#...
.....#..........................#..#.........................#........#....#..#.................##...............................#.
.......#..................................................#...............................#......#.............#....#..............
..#...#......##......................#....................#.........#........................#.......#....#.......#...#....#.......
........#..........#....................#....#.............##...........##...........#..........................................#..
.###................#..........#......................#.......#.......#.............#..............................#......#....#...
...#......#...#.#........#.....#.........##.........................#.#....................#......................#.#...........##.
..........#.........................#....#.....##............#.....................#...............................................
..#...........##...............................#.#.................#..............#.............#..#................#..#...........
......#............#..#...........#.............#.........#....#..#.............#....#............#...........#.....#..............
...##..#..........#...#..................#.....#...............#.....#.................................###..............#..........
..............#.#.................#...........#................#....#...........#.........#.........#...#..............#...........
................#.#...#.......#.........#.#..#...............................#.#....................#......#.......#.....#.........
....................#...#....#...#............#....#............................#.#.#......##.#...##......#.#.#.....#..........#...
.........#..............#..#......#............#.................................#..........#......#.........#...........#..#..##..
...#.#....#.....##..................#.##..##....#.......#.......#.............................................................#....
.....#..#.......#...................#.........................................#...#.................#......................#....#..
............................................................................#......................................................
......................#.....#......#...#..........#........#..............................#.#..#..........#........##..............
..................##...#......#.#.#...#..##.........#......#.................##.....#...#.......#...#....#..#....#......##.........
...................................................................................................................................`,i7=`1,0,1~1,2,1
0,0,2~2,0,2
0,2,3~2,2,3
0,0,4~0,2,4
2,0,5~2,2,5
0,1,6~2,1,6
1,1,8~1,1,9`,o7=`2,6,9~5,6,9
9,3,147~9,3,150
1,0,190~4,0,190
4,8,37~6,8,37
0,4,7~0,5,7
6,2,184~6,4,184
7,0,157~8,0,157
4,5,216~6,5,216
5,0,359~5,1,359
8,2,64~8,5,64
1,6,42~2,6,42
3,4,48~5,4,48
7,9,219~7,9,219
0,2,224~0,5,224
3,3,240~7,3,240
4,6,232~4,8,232
2,8,3~2,9,3
6,2,91~6,3,91
7,2,210~7,4,210
3,4,195~5,4,195
1,3,239~3,3,239
8,3,152~8,5,152
6,3,135~8,3,135
1,1,263~1,2,263
0,0,277~0,1,277
3,0,262~3,1,262
8,1,82~8,4,82
0,6,244~2,6,244
2,0,103~2,4,103
6,1,82~6,3,82
8,2,257~8,5,257
4,6,136~6,6,136
7,1,333~7,2,333
5,8,137~5,9,137
3,0,144~3,3,144
3,6,12~3,7,12
2,3,362~5,3,362
8,0,353~8,3,353
9,2,191~9,4,191
9,4,102~9,7,102
3,5,170~3,7,170
4,8,316~5,8,316
8,7,41~8,9,41
1,9,331~3,9,331
5,2,110~5,2,111
4,2,229~6,2,229
3,5,73~3,5,74
1,9,128~1,9,130
6,3,234~7,3,234
0,1,238~0,3,238
8,2,5~8,3,5
4,5,308~4,7,308
9,3,203~9,5,203
1,4,228~1,7,228
3,9,359~5,9,359
5,2,200~5,3,200
6,2,297~8,2,297
4,2,267~6,2,267
3,7,28~5,7,28
9,5,73~9,8,73
0,7,237~1,7,237
3,7,362~6,7,362
1,2,265~3,2,265
3,2,334~3,4,334
7,3,237~7,4,237
4,3,61~7,3,61
6,2,148~8,2,148
0,7,9~2,7,9
0,1,185~0,2,185
6,3,173~6,5,173
5,8,115~5,9,115
5,5,70~9,5,70
1,8,359~1,8,360
1,9,132~2,9,132
1,1,325~3,1,325
7,3,251~9,3,251
1,5,83~4,5,83
1,0,213~3,0,213
4,2,215~6,2,215
2,1,213~3,1,213
8,5,46~8,7,46
7,6,226~7,8,226
3,3,38~5,3,38
8,2,130~8,4,130
2,4,64~4,4,64
8,0,125~8,4,125
0,4,8~0,6,8
9,3,207~9,3,209
3,0,49~5,0,49
4,4,145~4,4,145
0,4,238~0,4,240
6,6,207~6,6,210
9,5,130~9,5,132
0,8,165~0,8,169
2,4,131~6,4,131
7,5,127~7,6,127
1,1,2~1,3,2
2,1,24~5,1,24
5,5,297~6,5,297
1,2,253~3,2,253
1,4,174~3,4,174
4,5,235~6,5,235
0,5,144~0,8,144
5,3,318~5,5,318
1,0,26~1,2,26
1,4,32~1,6,32
2,6,320~5,6,320
7,3,298~7,5,298
2,5,79~2,8,79
6,5,151~6,8,151
3,0,93~6,0,93
2,1,180~4,1,180
1,6,255~4,6,255
6,7,365~6,9,365
1,9,357~3,9,357
2,1,357~4,1,357
9,0,344~9,2,344
6,5,218~8,5,218
0,5,235~0,8,235
7,5,285~7,9,285
8,0,204~9,0,204
4,7,269~7,7,269
5,5,353~5,7,353
2,6,199~2,8,199
4,2,22~5,2,22
7,8,228~8,8,228
0,7,146~0,9,146
1,5,215~4,5,215
0,1,63~1,1,63
2,5,81~3,5,81
2,7,354~2,7,356
1,0,270~3,0,270
4,0,20~4,0,22
4,3,349~4,6,349
4,4,18~4,5,18
8,1,246~9,1,246
3,0,266~6,0,266
9,1,29~9,3,29
5,4,303~7,4,303
5,3,231~7,3,231
9,0,36~9,1,36
8,8,231~8,9,231
4,6,332~4,9,332
3,6,234~3,8,234
1,1,351~1,3,351
2,0,143~2,3,143
6,1,241~8,1,241
7,7,49~7,9,49
6,5,316~8,5,316
8,3,276~8,6,276
5,7,25~8,7,25
5,8,210~7,8,210
1,8,19~1,9,19
2,8,106~4,8,106
9,3,103~9,6,103
7,6,64~7,8,64
3,0,210~6,0,210
7,3,293~7,6,293
4,1,49~4,1,51
5,2,324~7,2,324
9,0,202~9,3,202
8,2,343~9,2,343
1,3,260~1,5,260
2,6,303~2,6,306
5,8,367~5,8,368
0,2,235~0,4,235
7,7,120~7,9,120
4,6,296~4,8,296
2,2,130~2,6,130
3,4,309~3,6,309
4,2,129~4,3,129
7,6,227~7,8,227
4,3,343~4,5,343
5,7,191~5,9,191
1,6,254~1,7,254
3,4,364~6,4,364
9,5,351~9,8,351
1,0,104~4,0,104
0,0,153~2,0,153
1,1,209~1,3,209
5,8,112~5,9,112
2,4,239~2,4,239
0,8,334~0,8,336
0,5,54~1,5,54
5,1,147~5,4,147
5,5,272~5,7,272
7,1,258~7,4,258
7,1,135~7,1,138
0,2,265~0,5,265
1,0,30~1,1,30
3,3,77~3,6,77
1,3,29~1,5,29
4,1,112~5,1,112
8,4,66~8,6,66
2,2,136~2,4,136
4,7,116~6,7,116
5,6,361~5,9,361
6,7,59~7,7,59
0,1,86~2,1,86
9,2,218~9,5,218
3,6,221~3,8,221
1,9,1~3,9,1
2,0,293~4,0,293
3,5,190~3,7,190
2,5,352~2,8,352
1,7,76~1,7,76
0,3,174~3,3,174
5,9,318~6,9,318
0,6,354~1,6,354
2,5,340~4,5,340
6,7,154~8,7,154
5,4,354~8,4,354
1,0,230~1,2,230
5,7,22~7,7,22
6,9,334~8,9,334
2,2,176~5,2,176
0,5,65~0,7,65
2,5,187~2,8,187
9,4,10~9,4,12
1,5,157~1,8,157
8,0,32~8,3,32
4,3,16~4,5,16
4,3,39~7,3,39
6,2,362~8,2,362
4,0,189~4,2,189
3,5,53~3,6,53
3,1,224~3,3,224
7,9,305~7,9,308
6,8,33~8,8,33
3,5,125~3,9,125
2,1,270~5,1,270
8,3,114~8,5,114
3,0,159~3,3,159
6,6,204~8,6,204
1,3,57~1,5,57
4,4,144~4,6,144
0,6,357~0,9,357
6,1,362~9,1,362
5,1,2~7,1,2
2,2,61~5,2,61
4,2,262~4,4,262
3,7,328~3,9,328
2,3,146~5,3,146
8,0,198~8,2,198
4,8,4~5,8,4
4,9,23~6,9,23
1,4,311~1,6,311
4,3,52~6,3,52
0,6,90~3,6,90
2,7,84~5,7,84
1,4,269~1,6,269
6,4,51~9,4,51
3,7,373~5,7,373
7,7,360~8,7,360
1,2,348~1,5,348
6,2,204~6,3,204
4,3,163~6,3,163
6,3,126~6,3,126
9,5,29~9,7,29
3,7,2~5,7,2
9,4,121~9,7,121
8,5,67~8,7,67
2,5,117~6,5,117
4,3,120~4,7,120
3,5,307~5,5,307
1,1,60~1,4,60
2,2,8~4,2,8
0,7,62~3,7,62
3,0,358~5,0,358
0,6,141~4,6,141
5,8,304~7,8,304
5,7,298~6,7,298
6,2,358~8,2,358
1,1,347~1,5,347
2,3,203~5,3,203
4,9,267~6,9,267
6,9,205~8,9,205
2,7,99~6,7,99
4,3,293~5,3,293
0,5,183~2,5,183
5,5,58~7,5,58
5,5,237~8,5,237
8,9,190~9,9,190
2,2,4~2,4,4
6,4,14~6,7,14
6,6,213~8,6,213
6,8,244~8,8,244
2,6,192~2,6,193
6,1,259~9,1,259
5,6,290~5,7,290
2,7,59~2,9,59
1,4,61~1,5,61
2,5,72~4,5,72
0,6,191~1,6,191
2,0,43~2,2,43
8,5,197~8,7,197
3,3,110~3,4,110
4,0,153~7,0,153
9,7,128~9,9,128
4,2,30~5,2,30
6,0,154~6,0,154
4,4,239~5,4,239
2,2,32~2,4,32
4,5,139~4,7,139
7,8,349~9,8,349
0,2,182~1,2,182
6,4,192~6,6,192
4,5,352~4,5,355
5,0,271~5,0,272
5,6,110~5,7,110
7,3,19~7,6,19
7,8,47~9,8,47
1,0,254~4,0,254
4,3,227~7,3,227
7,8,35~9,8,35
7,6,287~9,6,287
8,1,57~8,3,57
4,0,88~5,0,88
1,2,267~1,2,269
5,9,76~7,9,76
2,2,290~3,2,290
1,2,243~4,2,243
4,0,267~6,0,267
1,7,78~1,7,80
2,7,270~5,7,270
5,3,193~6,3,193
9,2,36~9,3,36
8,2,144~8,5,144
5,3,243~6,3,243
7,6,125~9,6,125
7,7,37~7,9,37
1,2,18~4,2,18
9,3,310~9,3,312
7,0,154~7,3,154
8,4,248~8,6,248
1,5,230~1,6,230
7,9,286~7,9,288
4,6,266~4,8,266
7,3,104~7,5,104
9,8,195~9,8,198
7,8,193~9,8,193
5,5,314~8,5,314
6,6,20~7,6,20
0,3,32~0,4,32
3,5,22~4,5,22
8,3,191~8,3,193
8,0,309~8,2,309
6,6,64~6,8,64
1,2,154~1,5,154
5,0,58~5,1,58
4,1,165~6,1,165
2,3,285~2,3,288
0,8,300~4,8,300
6,2,7~6,3,7
8,0,166~8,2,166
1,4,184~3,4,184
8,4,321~8,6,321
1,3,356~1,3,358
8,1,200~8,2,200
5,0,254~6,0,254
4,3,299~6,3,299
3,2,3~4,2,3
0,6,23~0,8,23
3,5,226~3,5,229
7,7,300~7,9,300
5,5,368~7,5,368
4,1,135~6,1,135
7,6,184~7,8,184
2,9,326~2,9,328
0,8,98~2,8,98
6,9,210~9,9,210
9,0,361~9,0,363
1,2,250~2,2,250
8,7,192~8,9,192
9,4,75~9,5,75
7,1,164~9,1,164
6,6,101~6,6,104
3,9,102~5,9,102
8,2,9~8,4,9
7,1,244~9,1,244
2,3,194~2,4,194
8,0,206~8,1,206
8,6,214~8,7,214
2,7,154~2,8,154
6,2,260~7,2,260
4,6,56~4,8,56
3,4,213~6,4,213
3,7,228~3,9,228
4,6,271~4,8,271
6,4,128~9,4,128
1,5,262~1,5,265
1,2,181~1,4,181
2,6,37~4,6,37
6,3,88~6,5,88
5,0,188~5,4,188
2,4,214~2,6,214
9,8,104~9,8,104
8,0,240~8,2,240
8,7,130~8,7,130
0,9,109~2,9,109
3,3,276~3,5,276
8,3,139~8,4,139
3,6,65~3,9,65
2,7,368~4,7,368
1,6,94~1,7,94
7,9,7~8,9,7
5,0,52~6,0,52
3,1,271~3,1,273
0,8,328~2,8,328
5,1,266~5,2,266
8,1,136~8,3,136
5,5,347~6,5,347
5,7,62~7,7,62
0,2,32~0,2,33
0,0,3~0,2,3
6,5,219~8,5,219
3,1,32~3,2,32
2,6,20~2,7,20
6,1,297~8,1,297
2,1,21~4,1,21
4,0,85~6,0,85
6,1,244~6,2,244
5,0,214~7,0,214
5,5,217~8,5,217
9,0,9~9,1,9
6,2,348~8,2,348
4,7,131~6,7,131
3,9,73~5,9,73
7,6,45~7,7,45
3,3,135~5,3,135
0,5,206~0,7,206
0,2,158~3,2,158
2,1,57~5,1,57
2,1,191~2,3,191
4,0,219~6,0,219
8,4,19~9,4,19
5,7,85~5,9,85
3,7,369~3,9,369
5,4,356~7,4,356
4,2,327~5,2,327
1,3,84~3,3,84
6,0,112~6,2,112
3,7,120~3,8,120
2,1,91~3,1,91
5,4,189~5,4,190
4,4,121~4,6,121
1,0,237~1,3,237
0,6,189~3,6,189
0,0,252~2,0,252
7,2,317~7,5,317
0,3,228~1,3,228
1,1,31~3,1,31
4,0,205~4,3,205
1,6,65~1,8,65
2,4,100~2,7,100
3,5,355~3,6,355
5,4,105~8,4,105
4,2,286~7,2,286
6,8,367~8,8,367
5,3,138~5,3,139
6,8,106~6,9,106
7,5,133~7,5,135
1,3,26~4,3,26
3,3,123~6,3,123
4,6,298~5,6,298
7,1,239~9,1,239
2,7,321~5,7,321
1,2,227~4,2,227
8,2,202~8,2,204
6,0,295~6,3,295
4,9,55~4,9,56
6,2,10~6,2,14
5,0,290~5,2,290
0,1,150~0,3,150
6,5,78~9,5,78
0,4,179~3,4,179
5,6,92~7,6,92
8,4,37~9,4,37
4,4,8~6,4,8
0,7,101~0,8,101
4,6,235~4,6,238
5,5,351~5,7,351
8,6,275~8,8,275
2,9,321~2,9,323
4,7,301~6,7,301
0,6,194~0,6,196
5,6,6~5,6,8
2,3,42~5,3,42
6,2,56~8,2,56
5,2,19~5,4,19
5,9,209~7,9,209
4,2,151~6,2,151
5,2,16~5,5,16
2,1,198~5,1,198
3,9,101~5,9,101
2,0,265~2,0,266
4,4,350~4,8,350
1,5,51~2,5,51
5,4,346~5,6,346
0,1,89~4,1,89
4,6,334~4,6,335
6,2,141~8,2,141
5,5,130~7,5,130
0,7,274~3,7,274
4,0,34~7,0,34
2,8,326~3,8,326
4,3,160~4,5,160
4,2,296~4,5,296
0,6,359~0,9,359
7,8,80~7,9,80
0,1,273~0,1,276
9,5,71~9,5,72
5,5,205~7,5,205
2,3,353~2,5,353
2,6,246~2,8,246
0,4,106~2,4,106
0,0,271~0,3,271
2,4,90~4,4,90
4,5,199~7,5,199
4,5,21~4,7,21
6,1,356~8,1,356
0,5,198~0,6,198
7,3,278~9,3,278
2,4,93~2,5,93
2,9,106~5,9,106
2,5,82~2,8,82
6,2,177~6,4,177
1,2,175~1,4,175
4,8,152~6,8,152
0,5,66~0,6,66
2,0,116~5,0,116
1,4,265~2,4,265
7,5,118~7,7,118
4,2,44~4,3,44
6,4,63~6,6,63
0,6,26~0,6,26
2,0,177~2,2,177
7,4,95~7,6,95
3,6,145~6,6,145
9,2,8~9,4,8
3,2,331~6,2,331
9,2,54~9,5,54
6,5,189~6,6,189
0,2,36~0,3,36
1,5,26~1,5,28
7,2,242~8,2,242
2,3,211~2,3,214
7,9,112~9,9,112
3,5,273~3,8,273
6,9,304~7,9,304
1,3,208~2,3,208
3,3,18~3,5,18
8,3,67~8,4,67
7,2,197~9,2,197
0,6,232~2,6,232
6,3,201~6,5,201
4,0,360~4,2,360
4,6,40~7,6,40
1,3,354~1,5,354
5,0,269~9,0,269
4,6,187~4,8,187
4,2,65~6,2,65
6,6,228~7,6,228
6,8,290~8,8,290
5,2,370~6,2,370
1,1,200~1,3,200
7,4,239~7,6,239
8,2,157~9,2,157
5,0,87~5,1,87
1,5,315~3,5,315
1,8,164~5,8,164
7,9,48~9,9,48
8,4,59~8,6,59
6,4,300~8,4,300
0,9,152~2,9,152
0,5,190~0,6,190
3,6,2~5,6,2
5,3,338~8,3,338
4,5,133~4,8,133
6,7,27~6,8,27
7,7,272~9,7,272
0,5,21~0,9,21
1,6,51~3,6,51
1,3,25~1,5,25
6,9,220~9,9,220
6,2,235~6,4,235
8,1,208~8,1,209
2,1,321~2,3,321
7,7,52~7,9,52
5,8,153~5,9,153
0,3,93~0,6,93
1,3,151~2,3,151
5,1,55~5,4,55
1,0,248~1,3,248
7,6,303~7,8,303
2,3,29~4,3,29
3,1,209~3,3,209
8,7,50~8,8,50
3,1,350~3,3,350
6,9,218~7,9,218
1,5,258~1,8,258
1,5,40~3,5,40
1,2,56~1,5,56
4,3,322~6,3,322
2,2,149~2,2,152
8,1,35~9,1,35
7,5,27~7,7,27
8,4,133~8,6,133
3,2,357~3,4,357
2,0,62~2,2,62
5,0,240~5,2,240
4,1,162~6,1,162
4,1,6~4,3,6
9,5,106~9,5,109
7,1,336~7,4,336
6,2,49~6,4,49
7,5,112~7,7,112
9,8,188~9,9,188
1,7,235~2,7,235
9,5,127~9,7,127
1,2,316~1,5,316
6,8,55~7,8,55
9,3,190~9,5,190
3,3,132~6,3,132
1,4,313~4,4,313
9,2,26~9,5,26
4,7,85~4,9,85
9,5,192~9,6,192
6,2,142~8,2,142
8,6,218~8,8,218
5,5,367~5,7,367
6,0,247~6,1,247
9,0,40~9,1,40
5,1,236~8,1,236
2,3,284~4,3,284
4,2,82~4,3,82
2,0,333~2,2,333
1,5,249~1,8,249
3,4,366~5,4,366
6,3,339~6,5,339
2,9,70~5,9,70
6,7,16~8,7,16
2,3,254~5,3,254
7,7,280~7,9,280
4,9,333~7,9,333
0,8,163~3,8,163
9,3,307~9,3,307
8,5,61~8,6,61
5,4,198~8,4,198
5,1,61~8,1,61
2,8,104~3,8,104
0,6,17~0,8,17
9,4,219~9,5,219
0,0,263~4,0,263
7,0,247~7,1,247
9,3,252~9,3,254
3,2,4~4,2,4
4,7,209~4,9,209
2,5,118~2,5,121
2,6,258~3,6,258
7,1,260~7,1,261
8,3,92~8,3,93
6,9,79~9,9,79
1,5,334~2,5,334
6,5,185~8,5,185
2,2,138~2,5,138
1,7,250~1,7,253
4,6,123~6,6,123
1,1,317~3,1,317
1,1,83~4,1,83
2,2,323~2,3,323
2,1,160~4,1,160
4,7,295~6,7,295
9,3,14~9,5,14
5,3,83~5,5,83
7,2,55~7,4,55
7,1,111~7,1,113
3,2,85~3,4,85
2,5,151~2,7,151
2,6,261~4,6,261
9,4,262~9,4,264
9,3,146~9,5,146
4,5,275~6,5,275
7,6,297~7,8,297
4,9,198~6,9,198
0,6,208~0,7,208
8,6,360~8,6,362
3,4,25~5,4,25
5,2,344~7,2,344
3,1,58~4,1,58
7,4,129~9,4,129
8,6,337~8,7,337
6,9,337~6,9,339
1,1,246~2,1,246
3,2,214~5,2,214
1,3,313~4,3,313
4,9,202~6,9,202
8,4,33~8,7,33
5,8,277~9,8,277
2,1,245~2,2,245
2,5,132~4,5,132
8,5,221~8,5,222
3,8,302~3,9,302
4,0,38~5,0,38
8,2,363~8,5,363
8,1,129~9,1,129
3,7,177~5,7,177
7,9,213~7,9,215
2,9,212~4,9,212
7,5,201~7,6,201
3,8,109~3,8,111
0,2,326~2,2,326
9,0,200~9,2,200
1,4,247~1,6,247
4,3,53~4,6,53
3,5,339~3,8,339
0,5,188~3,5,188
2,1,247~2,2,247
6,0,115~7,0,115
6,3,63~8,3,63
3,4,198~3,7,198
3,6,70~3,8,70
7,4,151~7,4,154
8,2,2~8,4,2
8,6,346~8,8,346
4,5,145~6,5,145
3,2,187~6,2,187
7,1,128~8,1,128
1,0,84~3,0,84
4,0,211~6,0,211
3,3,47~6,3,47
3,0,82~3,3,82
6,8,242~6,9,242
1,3,318~2,3,318
5,3,361~5,5,361
9,5,327~9,7,327
1,2,318~1,2,318
2,4,49~2,7,49
6,0,359~8,0,359
5,8,193~5,8,193
8,5,349~8,7,349
9,0,148~9,2,148
6,6,34~6,6,34
5,5,325~5,8,325
2,7,324~5,7,324
5,2,49~5,2,52
7,0,128~9,0,128
4,9,305~4,9,306
0,5,361~0,7,361
8,7,111~8,9,111
6,3,124~9,3,124
0,2,28~0,5,28
8,0,139~8,0,143
1,5,312~1,5,314
2,6,148~4,6,148
4,7,140~4,7,142
1,1,260~1,2,260
0,8,10~2,8,10
8,6,215~8,9,215
4,5,370~5,5,370
9,1,37~9,3,37
2,1,300~2,2,300
5,1,304~5,1,304
8,4,205~9,4,205
7,9,142~7,9,145
0,4,319~2,4,319
1,6,225~1,7,225
2,0,39~2,2,39
6,2,245~6,6,245
3,4,107~6,4,107
2,7,233~5,7,233
3,0,16~3,3,16
3,0,238~5,0,238
8,8,370~9,8,370
8,2,6~8,4,6
5,0,119~7,0,119
0,6,266~2,6,266
6,0,158~7,0,158
0,9,68~3,9,68
8,7,132~8,8,132
5,5,93~5,7,93
0,2,21~3,2,21
4,9,201~7,9,201
2,4,236~5,4,236
8,3,335~8,6,335
1,4,331~1,7,331
5,6,203~5,7,203
5,6,119~5,7,119
6,1,6~9,1,6
8,5,99~8,8,99
3,5,85~4,5,85
2,4,36~2,4,38
2,3,126~4,3,126
8,5,45~8,7,45
2,3,165~4,3,165
0,2,141~3,2,141
2,3,207~5,3,207
2,0,365~4,0,365
1,8,264~3,8,264
6,4,294~6,5,294
1,0,249~1,3,249
5,0,95~8,0,95
2,6,218~4,6,218
1,7,70~1,9,70
7,4,344~7,6,344
3,1,208~5,1,208
6,2,152~6,2,152
0,2,273~0,5,273
1,4,142~1,7,142
7,5,97~7,5,99
9,5,56~9,7,56
1,4,229~3,4,229
4,0,47~4,2,47
6,2,243~8,2,243
5,1,197~8,1,197
7,1,22~7,3,22
1,3,323~1,5,323
8,5,7~8,6,7
8,3,297~8,5,297
2,5,45~2,6,45
6,5,191~9,5,191
6,0,242~8,0,242
2,0,366~4,0,366
6,7,56~7,7,56
3,5,327~3,7,327
1,3,222~1,6,222
7,3,196~7,5,196
0,6,351~3,6,351
4,0,139~4,2,139
2,6,321~3,6,321
5,6,3~5,9,3
2,7,367~2,9,367
7,4,183~7,7,183
4,3,292~6,3,292
7,4,222~7,5,222
1,3,243~1,5,243
9,5,220~9,5,222
6,1,148~6,1,150
7,7,301~7,9,301
2,8,239~5,8,239
1,4,250~3,4,250
4,1,130~4,4,130
4,4,168~4,6,168
8,7,340~8,9,340
0,2,23~0,2,25
2,4,84~2,5,84
1,1,199~3,1,199
7,3,111~7,5,111
1,6,330~3,6,330
9,7,105~9,8,105
6,6,4~6,8,4
6,3,320~7,3,320
3,2,316~3,5,316
5,2,255~8,2,255
7,8,185~9,8,185
8,5,72~8,7,72
5,6,366~5,9,366
3,1,210~5,1,210
3,0,35~4,0,35
0,7,240~0,8,240
6,5,114~6,7,114
6,8,322~9,8,322
2,1,19~4,1,19
9,3,291~9,6,291
1,3,320~4,3,320
9,2,152~9,5,152
2,9,25~4,9,25
3,8,160~6,8,160
7,4,17~9,4,17
1,9,23~1,9,24
9,6,45~9,9,45
4,0,3~7,0,3
8,1,310~8,3,310
5,1,230~5,3,230
6,6,31~7,6,31
4,3,211~7,3,211
8,8,253~9,8,253
3,1,235~3,1,237
5,2,46~7,2,46
2,2,34~2,4,34
2,3,226~2,3,226
5,1,163~7,1,163
4,3,108~4,5,108
4,3,164~4,6,164
3,8,373~5,8,373
3,0,188~3,2,188
5,6,19~5,7,19
0,5,5~0,7,5
8,0,312~9,0,312
5,1,8~8,1,8
8,2,31~8,4,31
3,3,304~3,4,304
7,6,103~7,8,103
2,0,361~2,2,361
6,2,342~7,2,342
4,7,124~6,7,124
4,8,100~4,8,102
2,4,172~3,4,172
4,6,313~4,8,313
2,4,225~2,6,225
1,7,227~3,7,227
3,0,361~3,2,361
5,2,306~5,4,306
7,2,246~7,5,246
5,1,109~5,4,109
2,6,93~4,6,93
9,0,131~9,2,131
4,7,171~6,7,171
6,0,354~9,0,354
2,4,59~2,5,59
6,0,357~9,0,357
2,3,134~2,5,134
2,2,311~3,2,311
8,4,341~8,5,341
5,2,24~5,3,24
1,7,358~1,9,358
6,8,3~8,8,3
1,3,344~3,3,344
2,0,258~2,2,258
4,9,207~5,9,207
3,6,348~6,6,348
9,4,297~9,6,297
6,6,191~9,6,191
0,2,176~0,4,176
5,8,225~7,8,225
1,6,83~4,6,83
0,9,16~3,9,16
1,2,297~5,2,297
7,5,55~7,7,55
5,4,292~5,7,292
3,2,347~6,2,347
8,6,196~8,8,196
9,1,125~9,3,125
1,0,125~3,0,125
8,5,27~8,7,27
2,0,95~4,0,95
2,2,23~3,2,23
0,6,77~2,6,77
4,3,234~4,6,234
1,6,303~1,8,303
2,0,268~4,0,268
9,7,323~9,9,323
2,2,182~2,4,182
3,4,302~6,4,302
6,5,56~8,5,56
6,4,214~9,4,214
2,4,57~4,4,57
9,2,217~9,4,217
7,3,109~7,5,109
5,5,101~8,5,101
2,5,153~2,6,153
5,9,108~8,9,108
6,2,52~8,2,52
7,4,57~8,4,57
6,6,62~8,6,62
8,8,343~8,9,343
1,4,3~1,6,3
0,2,147~3,2,147
5,1,367~5,3,367
2,9,18~2,9,19
1,6,34~2,6,34
3,1,232~5,1,232
1,0,215~3,0,215
6,6,148~7,6,148
5,2,210~5,4,210
3,4,133~3,8,133
5,0,31~5,2,31
2,2,128~2,4,128
0,1,227~0,2,227
6,2,181~6,5,181
3,5,216~3,6,216
7,4,358~7,7,358
4,8,234~6,8,234
6,2,190~6,3,190
8,3,188~8,4,188
7,0,55~7,1,55
1,3,223~1,3,225
1,1,240~1,3,240
1,0,328~1,1,328
9,0,359~9,1,359
2,0,217~4,0,217
3,4,279~3,6,279
6,0,129~8,0,129
3,3,158~6,3,158
9,5,353~9,8,353
7,3,21~9,3,21
7,5,348~7,7,348
3,6,13~3,8,13
2,2,218~2,4,218
7,2,306~9,2,306
6,7,136~6,7,138
6,4,342~6,7,342
8,5,336~8,5,338
7,8,135~9,8,135
3,8,275~3,8,275
3,2,55~3,3,55
7,4,207~7,6,207
4,3,171~7,3,171
4,3,80~6,3,80
5,2,330~8,2,330
5,1,212~7,1,212
5,6,172~8,6,172
3,0,354~3,1,354
0,2,29~0,3,29
7,2,15~7,4,15
4,7,208~7,7,208
3,0,150~3,3,150
1,6,165~1,8,165
5,6,125~6,6,125
4,9,316~6,9,316
7,1,144~8,1,144
4,1,110~7,1,110
3,2,355~5,2,355
1,2,23~1,5,23
3,8,224~6,8,224
4,8,376~5,8,376
8,0,287~8,3,287
2,7,273~2,9,273
0,0,233~0,2,233
7,1,338~9,1,338
4,1,8~4,1,10
4,0,291~5,0,291
4,2,137~4,4,137
2,4,85~2,4,87
3,3,310~3,7,310
2,6,53~2,7,53
3,8,246~3,9,246
5,8,7~6,8,7
4,2,263~5,2,263
0,2,350~1,2,350
6,5,289~6,8,289
4,0,197~7,0,197
0,2,328~2,2,328
5,0,307~5,1,307
5,6,244~5,8,244
6,6,359~9,6,359
3,6,84~3,6,87
4,3,168~5,3,168
9,3,22~9,6,22
8,7,294~8,9,294
8,5,8~8,5,10
4,3,60~4,5,60
0,1,151~0,1,153
4,9,75~6,9,75
1,1,275~3,1,275
2,6,133~2,7,133
8,5,127~8,8,127
6,5,290~9,5,290
1,8,135~3,8,135
2,3,225~4,3,225
2,5,280~2,7,280
0,5,11~0,7,11
3,3,302~5,3,302
5,9,139~8,9,139
6,7,345~7,7,345
0,1,34~2,1,34
2,8,73~4,8,73
4,1,307~4,1,310
1,2,96~4,2,96
5,7,17~7,7,17
6,2,188~6,3,188
3,1,268~3,3,268
6,7,34~6,9,34
6,3,203~6,6,203
4,7,129~5,7,129
1,1,259~3,1,259
7,2,25~8,2,25
7,2,319~7,2,321
5,0,235~5,1,235
1,9,56~3,9,56
4,6,113~6,6,113
5,5,321~5,6,321
2,0,271~4,0,271
2,6,48~2,8,48
7,6,354~9,6,354
4,0,122~5,0,122
2,6,95~2,8,95
5,4,194~6,4,194
1,3,339~3,3,339
2,0,255~4,0,255
7,5,319~8,5,319
5,5,102~7,5,102
5,1,303~5,3,303
2,1,314~2,3,314
6,9,129~9,9,129
1,7,230~1,7,233
0,9,361~2,9,361
2,4,299~4,4,299
2,5,184~4,5,184
0,4,325~0,5,325
5,5,21~8,5,21
1,9,21~4,9,21
9,6,23~9,6,25
0,6,12~2,6,12
3,8,235~3,8,237
5,6,107~7,6,107
0,4,2~0,6,2
1,0,27~1,1,27
3,4,6~6,4,6
4,1,238~6,1,238
2,7,325~2,8,325
4,8,5~4,9,5
6,7,61~6,8,61
3,5,223~3,8,223
1,5,271~1,5,273
9,0,314~9,1,314
9,3,6~9,6,6
4,7,98~4,9,98
0,7,14~1,7,14
3,7,95~6,7,95
3,8,90~5,8,90
0,0,273~0,0,275
5,6,169~5,7,169
3,3,257~6,3,257
8,3,204~9,3,204
5,3,201~5,6,201
1,0,41~2,0,41
1,1,243~2,1,243
8,0,137~8,2,137
8,2,346~8,4,346
2,0,164~2,2,164
6,0,88~6,1,88
4,6,226~4,8,226
3,5,57~3,5,60
1,1,323~3,1,323
7,4,338~7,4,341
2,7,15~2,7,17
5,5,167~5,5,170
1,4,170~4,4,170
3,0,17~5,0,17
4,9,54~7,9,54
4,1,304~4,3,304
2,7,204~2,7,205
8,1,281~8,3,281
8,4,28~8,6,28
8,2,246~8,5,246
5,7,48~7,7,48
2,3,149~2,6,149
9,5,99~9,8,99
5,8,104~7,8,104
9,0,145~9,3,145
1,9,244~4,9,244
5,4,108~8,4,108
2,9,309~4,9,309
9,3,24~9,4,24
7,2,131~8,2,131
9,2,215~9,4,215
9,1,144~9,3,144
1,3,359~1,3,359
4,6,267~4,6,267
4,2,58~4,4,58
4,6,264~4,9,264
2,3,222~2,5,222
5,5,315~5,9,315
1,7,260~3,7,260
7,3,306~9,3,306
8,4,295~8,6,295
6,8,293~6,9,293
2,0,52~4,0,52
6,2,338~8,2,338
0,2,268~0,4,268
0,1,37~2,1,37
4,4,174~5,4,174
0,7,277~2,7,277
7,1,3~7,3,3
5,7,141~6,7,141
3,2,203~6,2,203
4,2,173~4,4,173
8,1,60~8,1,60
3,0,53~4,0,53
5,4,149~7,4,149
8,9,49~8,9,51
2,9,330~5,9,330
7,0,33~9,0,33
0,1,358~2,1,358
1,1,185~1,4,185
5,3,165~5,5,165
1,7,309~1,9,309
4,9,204~7,9,204
4,6,229~5,6,229
1,4,108~1,4,109
0,3,157~1,3,157
0,8,102~1,8,102
5,6,90~7,6,90
8,1,332~8,3,332
5,9,35~6,9,35
2,0,25~6,0,25
7,6,187~7,8,187
8,2,356~8,4,356
1,4,357~1,6,357
7,1,141~9,1,141
5,9,211~5,9,212
3,4,78~5,4,78
7,2,340~9,2,340
7,5,320~7,8,320
4,9,4~8,9,4
4,4,310~4,6,310
6,9,268~6,9,268
2,0,121~2,0,123
1,0,363~2,0,363
3,2,93~3,5,93
4,3,46~4,5,46
9,5,46~9,9,46
5,6,174~6,6,174
0,0,119~2,0,119
1,4,91~1,7,91
5,7,205~5,8,205
7,4,110~8,4,110
5,4,134~6,4,134
2,1,252~2,3,252
4,3,259~6,3,259
1,3,86~2,3,86
1,4,249~3,4,249
3,6,167~5,6,167
0,4,264~3,4,264
3,2,13~3,4,13
6,6,117~8,6,117
2,6,269~2,6,269
5,6,205~6,6,205
2,2,363~2,2,363
5,4,13~7,4,13
2,0,218~2,1,218
8,6,293~8,8,293
7,8,337~7,9,337
3,7,178~3,8,178
2,2,216~2,4,216
5,7,287~7,7,287
4,5,151~4,7,151
8,1,303~8,4,303
2,6,230~2,9,230
2,8,157~5,8,157
5,3,186~6,3,186
3,0,272~3,0,275
4,0,298~7,0,298
0,2,183~0,4,183
3,1,153~3,4,153
0,6,18~0,7,18
9,5,205~9,7,205
3,6,66~5,6,66
6,0,58~8,0,58
9,2,32~9,2,35
9,7,274~9,7,275
6,6,186~8,6,186
0,0,22~0,2,22
8,6,119~9,6,119
9,9,213~9,9,214
6,9,25~6,9,28
7,8,101~9,8,101
7,7,44~9,7,44
7,2,256~9,2,256
2,7,13~2,9,13
8,2,151~8,5,151
1,2,310~1,4,310
5,1,214~6,1,214
1,6,239~1,9,239
5,4,111~6,4,111
4,0,355~6,0,355
2,1,335~2,1,336
6,4,23~9,4,23
9,0,38~9,1,38
9,8,280~9,8,282
0,6,304~0,9,304
3,0,208~6,0,208
3,2,156~3,4,156
4,7,126~5,7,126
6,8,283~7,8,283
6,4,278~9,4,278
8,2,112~8,4,112
8,3,65~8,6,65
4,3,14~4,6,14
2,7,153~4,7,153
7,3,295~7,6,295
9,4,260~9,5,260
6,2,2~6,2,4
1,3,43~2,3,43
7,2,194~7,5,194
2,8,208~5,8,208
4,3,352~7,3,352
9,1,258~9,4,258
4,8,241~6,8,241
4,6,304~4,9,304
3,3,282~3,5,282
2,7,234~2,9,234
3,2,287~6,2,287
5,8,328~7,8,328
2,6,68~4,6,68
4,1,44~6,1,44
0,4,135~2,4,135
5,2,198~7,2,198
0,4,242~0,6,242
4,7,210~4,8,210
8,2,254~8,4,254
3,5,220~5,5,220
6,9,55~7,9,55
1,6,15~1,8,15
4,5,174~4,7,174
0,1,230~0,3,230
2,8,108~5,8,108
0,8,149~0,9,149
5,1,46~5,1,47
9,0,206~9,2,206
8,4,190~8,4,191
2,4,186~2,4,188
6,0,143~6,3,143
9,5,326~9,8,326
0,7,13~0,9,13
6,3,291~6,5,291
1,4,63~4,4,63
4,5,55~4,7,55
3,1,307~3,3,307
2,3,37~5,3,37
8,4,304~8,4,306
4,4,304~4,5,304
6,5,134~6,7,134
6,4,180~8,4,180
0,3,322~0,5,322
9,0,132~9,3,132
0,1,355~3,1,355
5,2,270~5,4,270
8,8,38~8,8,40
1,9,126~4,9,126
7,9,227~7,9,229
2,2,190~4,2,190
5,8,134~8,8,134
3,7,241~3,9,241
0,0,331~0,2,331
2,8,364~2,9,364
4,0,296~7,0,296
2,7,55~2,9,55
6,8,305~7,8,305
0,7,331~0,9,331
7,0,250~7,3,250
7,1,26~7,4,26
2,1,1~2,3,1
2,8,298~4,8,298
7,5,360~9,5,360
2,8,101~2,8,103
7,1,53~7,3,53
4,3,340~6,3,340
5,1,43~5,3,43
2,9,319~4,9,319
0,7,73~1,7,73
2,6,354~4,6,354
2,1,331~2,2,331
2,2,232~4,2,232
3,2,314~6,2,314
0,6,74~2,6,74
3,3,172~5,3,172
1,8,306~2,8,306
0,7,8~0,8,8
2,4,263~2,6,263
6,4,187~9,4,187
2,8,123~4,8,123
7,3,173~7,4,173
0,0,2~2,0,2
1,2,308~3,2,308
6,9,195~8,9,195
4,6,343~6,6,343
3,2,212~6,2,212
9,5,123~9,7,123
6,2,233~6,3,233
5,1,134~9,1,134
6,0,251~9,0,251
4,5,2~8,5,2
0,3,13~0,5,13
8,2,155~8,4,155
2,5,71~2,7,71
6,6,247~6,9,247
5,7,374~7,7,374
2,5,39~2,7,39
3,8,181~3,8,184
8,5,104~8,5,105
6,7,31~6,8,31
0,9,3~0,9,6
1,0,152~4,0,152
3,6,300~5,6,300
5,0,194~5,3,194
0,3,181~0,5,181
1,5,212~4,5,212
1,3,58~1,5,58
0,3,221~3,3,221
3,5,284~3,7,284
3,8,137~3,9,137
3,0,352~3,2,352
2,3,131~2,3,131
3,3,54~3,5,54
6,2,284~9,2,284
7,5,323~7,7,323
5,6,87~5,8,87
8,3,35~8,6,35
6,1,145~6,2,145
4,8,109~6,8,109
2,3,177~4,3,177
6,5,200~6,7,200
4,7,371~4,9,371
2,8,354~2,8,357
8,1,203~8,1,204
3,5,75~3,7,75
0,3,341~2,3,341
4,0,113~6,0,113
4,7,228~4,9,228
2,4,15~3,4,15
1,6,355~1,9,355
0,1,240~0,2,240
0,2,161~1,2,161
2,4,94~2,4,96
5,7,188~7,7,188
4,0,236~4,3,236
6,1,199~6,3,199
7,6,130~7,6,132
4,1,245~4,5,245
0,6,24~0,6,25
6,6,290~6,6,292
0,7,110~0,9,110
4,1,181~6,1,181
8,7,371~8,9,371
3,3,244~6,3,244
6,6,98~9,6,98
3,9,265~5,9,265
5,7,302~5,9,302
6,4,5~9,4,5
5,3,90~8,3,90
3,0,83~5,0,83
2,5,201~2,8,201
1,0,191~3,0,191
6,6,28~6,8,28
2,6,152~3,6,152
1,4,227~1,6,227
6,8,250~8,8,250
4,5,358~6,5,358
4,9,37~5,9,37
3,3,335~3,3,336
3,4,252~3,5,252
2,7,261~2,9,261
7,5,188~8,5,188
3,9,103~5,9,103
0,6,204~2,6,204
4,3,209~4,5,209
0,7,75~0,9,75
3,8,76~3,8,78
1,0,233~1,0,235
5,5,328~5,5,330
4,4,185~4,7,185
4,7,306~4,7,307
2,4,42~2,5,42
1,9,249~1,9,250
0,2,30~0,4,30
5,2,234~5,3,234
2,4,301~2,6,301
5,3,62~5,3,63
5,3,86~7,3,86
6,0,138~6,2,138
2,0,179~2,0,181
9,4,294~9,5,294
9,1,55~9,2,55
2,4,318~2,7,318
1,2,104~3,2,104
6,4,176~6,5,176
8,2,360~9,2,360
5,0,28~5,2,28
0,4,15~0,5,15
8,6,6~8,8,6
2,1,234~3,1,234
1,6,196~3,6,196
3,4,11~5,4,11
0,6,147~0,6,148
6,3,345~6,5,345
7,9,222~7,9,226
3,3,51~6,3,51
6,8,329~8,8,329
0,6,303~0,8,303
0,0,355~3,0,355
4,5,227~4,8,227
3,7,117~4,7,117
3,4,337~3,7,337
6,8,136~8,8,136
5,7,121~6,7,121
5,0,90~8,0,90
1,1,162~3,1,162
5,2,23~5,4,23
2,3,79~4,3,79
3,4,239~3,5,239
5,9,364~6,9,364
0,1,94~0,3,94
4,8,206~6,8,206
5,5,308~5,5,311
4,3,140~5,3,140
3,2,63~4,2,63
5,6,322~5,6,324
8,2,351~8,4,351
4,5,124~6,5,124
0,9,246~1,9,246
7,3,126~9,3,126
0,6,305~0,8,305
8,4,79~8,7,79
4,1,166~4,1,166
7,2,211~7,2,211
3,1,365~6,1,365
1,8,310~1,9,310`,k7=`#.#####################
#.......#########...###
#######.#########.#.###
###.....#.>.>.###.#.###
###v#####.#v#.###.#.###
###.>...#.#.#.....#...#
###v###.#.#.#########.#
###...#.#.#.......#...#
#####.#.#.#######.#.###
#.....#.#.#.......#...#
#.#####.#.#.#########v#
#.#...#...#...###...>.#
#.#.#v#######v###.###v#
#...#.>.#...>.>.#.###.#
#####v#.#.###v#.#.###.#
#.....#...#...#.#.#...#
#.#########.###.#.#.###
#...###...#...#...#.###
###.###.#.###v#####v###
#...#...#.#.>.>.#.>.###
#.###.###.#.###.#.#v###
#.....###...###...#...#
#####################.#`,j7=`#.###########################################################################################################################################
#.#.......#...#...###...###...#.......#.........#...#.........#...#...###.....#.........#...#####...#...###...###...#...#...#...###...###...#
#.#.#####.#.#.#.#.###.#.###.#.#.#####.#.#######.#.#.#.#######.#.#.#.#.###.###.#.#######.#.#.#####.#.#.#.###.#.###.#.#.#.#.#.#.#.###.#.###.#.#
#.#.#.....#.#.#.#.#...#...#.#.#.....#.#...#.....#.#.#.....#...#.#.#.#...#.#...#.#.......#.#...#...#...#.#...#.#...#.#.#.#.#.#.#.#...#...#.#.#
#.#.#.#####.#.#.#.#.#####.#.#.#####.#.###.#.#####.#.#####.#.###.#.#.###.#.#.###.#.#######.###.#.#######.#.###.#.###.#.#.#.#.#.#.#.#####.#.#.#
#.#.#.....#.#.#.#.#.....#...#.#.>.>.#.#...#.#...#.#.>.>.#.#...#.#.#.#...#.#.###.#.#...#...#...#...#.....#...#...#...#.#.#.#.#.#.#.#.....#.#.#
#.#.#####.#.#.#.#.#####.#####.#.#v###.#.###.#.#.#.###v#.#.###.#.#.#.#.###.#.###.#.#.#.#.###.#####.#.#######.#####.###.#.#.#.#.#.#.#.#####.#.#
#...#...#.#.#.#.#.#...#...#...#.#.#...#...#...#...###.#.#.###...#.#.#.###.#...#.#.#.#.#...#...#...#.#...#...#...#.....#.#.#.#.#.#.#.......#.#
#####.#.#.#.#.#.#.#.#.###.#.###.#.#.#####.###########.#.#.#######.#.#.###.###.#.#.#.#.###.###.#.###.#.#.#.###.#.#######.#.#.#.#.#.#########.#
#...#.#...#.#.#.#.#.#.#...#...#.#.#.......###...#.....#.#.#...#...#.#.....#...#.#.#.#...#...#.#...#.#.#.#.....#.......#...#.#.#.#.###...#...#
#.#.#.#####.#.#.#.#.#.#.#####.#.#.###########.#.#.#####.#.#.#.#.###.#######.###.#.#.###.###.#.###.#.#.#.#############.#####.#.#.#.###.#.#.###
#.#...#...#.#.#.#.#.#.#.....#...#.#...#...#...#.#.#...#...#.#.#...#...###...#...#...#...###.#...#.#.#.#.#.....>.>.....#.....#.#...#...#.#...#
#.#####.#.#.#.#.#.#.#.#####.#####.#.#.#.#.#.###.#.#.#.#####.#.###.###.###.###.#######.#####.###.#.#.#.#.#.#####v#######.#####.#####.###.###.#
#.#...#.#.#.#.#.#.#.#...#...#...#...#...#...#...#.#.#...#...#...#...#.#...#...#.......#...#...#...#.#.#.#.#...#.......#.#.....###...###...#.#
#.#.#v#.#.#.#.#.#.#.###.#.###.#.#############.###.#.###.#.#####.###.#.#.###.###.#######.#.###.#####.#.#.#.#.#.#######.#.#.#######.#######.#.#
#...#.>.#...#.#.#.#...#.#.#...#.............#...#...###...#...#...#...#...#...#.....#...#.###.....#.#.#.#.#.#.........#...#...#...###...#...#
#####v#######.#.#.###.#.#.#.###############.###.###########.#.###.#######.###.#####.#.###.#######.#.#.#.#.#.###############.#.#.#####.#.#####
#...#.......#.#.#.#...#.#.#.#.............#.....###.........#...#.#...###.#...#.....#...#.#.....#.#...#...#...#...#...#.....#...#.....#.....#
#.#.#######.#.#.#.#.###.#.#.#.###########.#########.###########.#.#.#.###.#.###.#######.#.#.###.#.###########.#.#.#.#.#.#########.#########.#
#.#.###.....#...#.#...#...#...#...........#...#...#.....#.....#...#.#.#...#...#.....>.>.#.#...#.#.....###...#...#...#.#...........#.........#
#.#.###.#########.###.#########.###########.#.#.#.#####.#.###.#####.#.#.#####.#######v###.###.#.#####.###.#.#########.#############.#########
#.#.....#####...#.....#.......#.#...........#.#.#.....#...###.....#.#.#...#...#######...#.#...#...#...#...#.....#.....#...#.........#.......#
#.###########.#.#######.#####.#.#.###########.#.#####.###########.#.#.###.#.###########.#.#.#####.#.###.#######.#.#####.#.#.#########.#####.#
#...#.........#...#.....#.....#...###...#.....#.#.....#...........#.#.###...#...#.......#...#####...###.......#...#...#.#.#.....###...#...#.#
###.#.###########.#.#####.###########.#.#.#####.#.#####.###########.#.#######.#.#.###########################.#####.#.#.#.#####.###.###.#.#.#
#...#.#...........#.....#.###.........#...#...#.#.#.....#...........#.....#...#.#.................###...#.....#...#.#.#.#.#...#.....#...#...#
#.###.#.###############.#.###.#############.#.#.#.#.#####.###############.#.###.#################.###.#.#.#####.#.#.#.#.#.#.#.#######.#######
#.#...#.......#...###...#...#.....#.........#.#.#.#.......#...#...........#...#.###...#...........#...#.#.......#.#.#.#.#.#.#.#.....#.#...###
#.#.#########.#.#.###.#####.#####.#.#########.#.#.#########.#.#v#############.#.###.#.#.###########.###.#########.#.#.#.#.#.#.#v###.#.#.#.###
#.#.#.........#.#...#...#...#...#...#.........#.#.###.......#.>.>.....#.....#.#.#...#...#...###...#...#.#...#.....#.#...#.#.#.>.###.#...#...#
#.#.#.#########.###.###.#.###.#.#####.#########.#.###.#########v#####.#.###.#.#.#.#######.#.###.#.###.#.#.#.#.#####.#####.#.###v###.#######.#
#...#.....#...#.#...#...#...#.#.#...#.......###.#.....#...#...#...#...#...#.#.#.#...###...#...#.#.#...#...#.#.....#.....#.#.###...#.......#.#
#########.#.#.#.#.###.#####.#.#.#.#.#######.###.#######.#.#.#.###.#.#####.#.#.#.###v###.#####.#.#.#.#######.#####.#####.#.#.#####.#######.#.#
###...#...#.#.#.#.###...#...#.#.#.#.#...#...#...#.......#.#.#.#...#...#...#.#.#...>.>.#.#.....#.#.#.....#...#...#.#...#.#...#.....#...###...#
###.#.#.###.#.#.#.#####.#.###.#.#.#.#.#.#v###.###.#######.#.#.#.#####.#.###.#.#####v#.#.#.#####.#.#####.#.###.#.#v#.#.#.#####.#####.#.#######
#...#...#...#...#...#...#...#.#.#.#...#.>.>.#...#.......#.#.#.#.#.....#.###.#.#.....#.#.#.#...#.#...#...#.#...#.>.>.#.#.#.....#...#.#.#...###
#.#######.#########.#.#####.#.#.#.#######v#.###.#######.#.#.#.#.#.#####.###.#.#.#####.#.#.#.#.#.###.#.###.#.#####v###.#.#.#####.#.#.#.#.#.###
#...#...#.........#.#.#...#.#.#...#...#...#...#.#.......#.#.#.#.#.#...#...#...#.....#.#.#.#.#.#...#.#.#...#.#.....###...#.....#.#...#...#...#
###.#.#v#########.#.#.#.#.#.#.#####.#.#.#####.#.#.#######.#.#.#.#.#.#.###.#########.#.#.#.#.#.###.#.#.#.###.#.###############.#.###########.#
###...#.>.#.......#...#.#...#.#.....#.#.#.....#.#.......#...#.#.#.#.#.#...###.....#.#...#.#.#.#...#.#.#...#.#.#.........#.....#.#...........#
#######v#.#.###########.#####.#.#####.#.#.#####.#######.#####.#.#.#.#.#.#####.###.#.#####.#.#.#.###.#.###.#.#.#.#######.#.#####.#.###########
###.....#...#.........#.#.....#.....#.#.#.#...#.#.......#...#.#.#.#.#.#.#...#...#.#...#...#.#.#...#.#.#...#.#.#.#.......#.......#...........#
###.#########.#######.#.#.#########.#.#.#.#.#.#.#.#######.#.#.#.#.#.#.#.#.#.###.#.###.#.###.#.###.#.#.#.###.#.#.#.#########################.#
#...#...#...#.#.......#...#...###...#.#.#...#...#.........#.#.#.#.#.#.#.#.#.....#...#.#...#.#.#...#...#.....#...#.....#.....###.............#
#.###.#.#.#.#.#.###########.#.###.###.#.###################.#.#.#.#.#.#.#.#########.#.###.#.#.#.#####################.#.###.###.#############
#...#.#.#.#.#.#...........#.#.....#...#...#...###...........#...#...#...#.........#.#.###...#.#.#####...#.............#...#.....#...........#
###.#.#.#.#.#.###########.#.#######.#####.#.#.###.###############################.#.#.#######.#.#####.#.#.###############.#######.#########.#
#...#.#...#...#...#...#...#...#...#.......#.#...#.................#...............#...#.....#.#...#...#.#.............###...#.....#.........#
#.###.#########.#.#.#.#.#####.#.#.#########.###.#################.#.###################.###.#.###.#.###.#############.#####.#.#####.#########
#.#...#.........#...#...#...#...#...#.....#...#.#.................#.........#...#.....#...#.#.....#...#.........#...#...#...#.#...#.........#
#.#.###.#################.#.#######.#.###.###.#.#.#########################.#.#.#.###.###.#.#########.#########.#.#.###.#.###.#.#.#########.#
#.#.#...#...........#.....#...###...#.#...###.#.#.....#####...#...###.......#.#.#.#...#...#.....#.....#.......#...#.#...#...#.#.#.#.........#
#.#.#.###.#########.#.#######.###v###.#.#####.#.#####.#####.#.#.#.###.#######.#.#.#.###.#######.#.#####.#####.#####.#.#####.#.#.#.#.#########
#.#.#...#.#.........#.......#.#.>.>.#.#...#...#.....#.......#.#.#...#.........#...#.....#...#...#.......#.....#...#...###...#.#.#.#.........#
#.#.###.#.#.###############.#.#.#v#.#.###.#.#######.#########.#.###.#####################.#.#.###########.#####.#.#######.###.#.#.#########.#
#.#.#...#.#.....#...###...#.#...#.#.#.#...#...#.....#.........#.#...#...#...........#.....#.#.#...#...###.......#...#...#.....#.#.....#...#.#
#.#.#.###.#####.#.#.###.#.#.#####.#.#.#.#####.#.#####v#########.#.###.#.#.#########.#.#####.#.#.#.#.#.#############.#.#.#######.#####.#.#.#.#
#...#...#.###...#.#.#...#...#.....#...#.#...#.#.....>.>.###...#.#.#...#.#.........#.#.#...#...#.#.#.#.#...###...#...#.#.#...#...#...#...#...#
#######.#.###v###.#.#.#######.#########.#.#.#.#######v#.###.#.#.#.#.###.#########.#.#.#.#.#####.#.#.#.#.#.###.#.#.###.#.#.#.#.###.#.#########
#...###...###.>.#.#.#...#...#.......###...#...#...###.#...#.#.#.#.#...#.#...#.....#.#.#.#.#...#.#.#.#.#.#.#...#...###.#.#.#.#.....#.........#
#.#.#########v#.#.#.###.#.#.#######.###########.#.###.###.#.#.#.#.###.#.#.#.#.#####.#.#.#.#.#.#.#.#.#.#.#.#.#########.#.#.#.###############.#
#.#.#...#.....#...#.#...#.#.........#.....#...#.#...#.#...#.#.#.#.###.#.#.#.#...###...#.#.#.#.#.#.#.#.#.#.#...###...#.#.#.#.#...#...........#
#.#.#.#.#.#########.#.###.###########.###.#.#.#.###.#.#.###.#.#.#.###.#.#.#.###v#######.#.#.#.#.#.#.#.#.#.###v###.#.#.#.#.#.#.#.#.###########
#.#.#.#.#.........#.#...#.......#...#.#...#.#.#...#...#.....#...#...#.#.#.#.#.>.>.#...#.#.#.#.#.#.#.#.#.#...>.>.#.#.#.#.#.#.#.#.#...#...#...#
#.#.#.#.#########.#.###.#######.#.#.#.#.###.#.###.#################.#.#.#.#.#.#v#.#.#.#.#.#.#.#.#.#.#.#.#####v#.#.#.#.#.#.#.#.#.###v#.#.#.#.#
#.#...#...........#.....###...#...#...#.....#...#...#.............#...#.#.#...#.#...#.#.#.#.#.#.#.#.#.#.#.....#.#.#.#.#.#.#.#.#.#.>.#.#.#.#.#
#.#########################.#.#################.###.#.###########.#####.#.#####.#####.#.#.#.#.#.#.#.#.#.#.#####.#.#.#.#.#.#.#.#.#.#v#.#.#.#.#
#.........................#.#.#...#.............#...#.#...........#.....#.....#.....#.#.#.#.#.#.#...#...#.....#...#...#...#.#.#...#...#...#.#
#########################.#.#.#.#.#.#############.###.#.###########.#########.#####.#.#.#.#.#.#.#############.#############.#.#############.#
#...#.................#...#.#...#.#.........#...#.#...#...#####...#.#...#...#.#.....#...#.#.#...###...#...#...###...........#...###.........#
#.#.#.###############.#.###.#####.#########.#.#.#.#.#####.#####.#.#.#.#.#.#.#.#.#########.#.#######.#.#.#.#.#####.#############.###.#########
#.#...#...........###...###.....#.#...#...#...#.#.#.#...#.......#.#.#.#.#.#...#.........#.#.#.....#.#.#.#.#...#...#.......#...#.#...###.....#
#.#####.#########.#############.#.#.#.#.#.#####.#.#.#.#.#########.#.#.#.#.#############.#.#.#.###.#.#.#.#.###.#.###.#####.#.#.#.#.#####.###.#
#.....#.#...#...#.#...#...#...#.#.#.#.#.#.#.....#.#.#.#...#.......#...#...###...........#...#...#.#.#.#.#.#...#.....#...#...#...#.......#...#
#####.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#v#####.#.#.###.#.#################.#################.#.#.#.#.#.#v#########.#.#################.###
#.....#.#.#...#...#.#.#.#...#...#...#...#.>.>.###...#...#.#.....#...#...#...#.........#...#...#.#.#.#.#.#.>.>.#.......#.....###...........###
#.#####.#.#########.#.#.###################v#.#########.#.#####.#.#.#.#.#.#.#########.#.#.#.#.#.#.#.#.#.###v#.#.###########.###.#############
#...#...#.....#.....#.#...........#...#...#.#...###...#.#.#.....#.#...#.#.#.#.........#.#.#.#.#.#.#.#.#.#...#.#.#...#.......#...#...........#
###.#.#######.#.#####.###########.#.#.#.#.#.###.###.#.#.#.#.#####.#####.#.#.#.#########.#.#.#.#.#.#.#.#.#.###.#.#.#.#.#######.###.#########.#
#...#.#.......#.....#.....#.......#.#.#.#...###...#.#...#.#...#...#.....#.#.#.......###.#.#.#...#.#.#.#.#...#...#.#.#.......#.....#...#.....#
#.###.#.###########.#####.#.#######.#.#.#########.#.#####.###.#.###.#####.#.#######.###.#.#.#####.#.#.#.###.#####.#.#######.#######.#.#.#####
#...#.#.......#...#.....#.#...###...#.#.#.........#.....#.#...#...#.#...#.#.###...#.#...#.#...#...#.#.#.###.....#.#.....#...#.......#...#...#
###.#.#######.#.#.#####.#.###.###.###.#.#.#############.#.#v#####.#.#.#.#.#.###.#.#v#.###.###.#.###.#.#.#######.#.#####.#.###.###########.#.#
###...#...###.#.#...#...#...#...#...#...#...#.....#...#.#.>.>.....#...#.#.#.....#.>.>.#...#...#.#...#...#.......#.#...#...###.......#.....#.#
#######.#.###v#.###.#.#####.###.###.#######.#.###.#.#.#.###v###########.#.#########v###.###.###.#.#######.#######.#.#.#############.#.#####.#
#.......#.###.>.###.#.....#.#...###.......#...###...#.#...#...#.......#.#.###.....#...#...#...#.#.....###...#...#...#...#####.....#...#.....#
#.#######.###v#####.#####.#.#.###########.###########.###.###.#.#####.#.#.###.###.###.###.###.#.#####.#####.#.#.#######.#####.###.#####.#####
#.......#...#.....#...#...#.#.#.........#.#...#...#...#...#...#.#.....#...#...###.#...###.#...#...#...#.....#.#...#####...###.#...#.....#...#
#######.###.#####.###.#.###.#.#.#######.#.#.#.#.#.#.###.###.###.#.#########.#####.#.#####.#.#####.#.###.#####.###.#######.###.#.###v#####.#.#
###...#.#...#...#...#.#...#...#.......#...#.#...#.#.....###.....#.....#.....#...#...#...#.#...#...#...#.....#...#...#.....#...#...>.#...#.#.#
###.#.#.#.###.#.###.#.###.###########.#####.#####.###################.#.#####.#.#####.#.#.###.#.#####.#####.###.###.#.#####.#######v#.#.#.#.#
#...#...#.....#...#.#.#...#...........#...#.#.....###.................#.....#.#.....#.#.#.....#.......#...#.....#...#.#...#.###...#...#...#.#
#.###############.#.#.#.###.###########.#.#.#.#######.#####################.#.#####.#.#.###############.#.#######.###.#.#.#.###.#.#########.#
#.......#.......#.#.#.#...#.............#...#.#.....#...................#...#.#.....#.#.#...#...###.....#...###...###.#.#.#.#...#...#.....#.#
#######.#.#####.#.#.#.###.###################.#.###.###################.#.###.#.#####.#.#.#.#.#.###.#######.###.#####.#.#.#.#.#####.#.###.#.#
###...#...#.....#...#.....#.................#.#.#...#...#...............#.....#.......#.#.#.#.#...#.......#...#.....#...#...#.....#.#...#...#
###.#.#####.###############.###############.#.#.#.###.#.#.#############################.#.#.#.###.#######.###.#####.#############.#.###.#####
#...#...###.###...........#.........###...#...#.#.###.#.#.........#...#.......#...#.....#.#...#...#...###...#.#.....#...#.........#...#...###
#.#####.###v###.#########.#########.###.#.#####.#.###.#.#########.#.#.#.#####.#.#.#.#####.#####.###.#.#####.#.#.#####.#.#.###########.###.###
#.....#...#.>...#.........#.......#...#.#.#...#.#.###.#.###...###.#.#.#.....#...#...#.....#.....#...#.#...#.#.#...#...#.#...........#...#...#
#####.###.#v#####.#########.#####.###.#.#.#.#.#.#.###.#.###.#.###v#.#.#####v#########.#####.#####.###.#.#.#.#.###.#.###.###########.###.###.#
#...#...#...#.....#...#...#.....#.....#.#.#.#...#...#.#...#.#...>.>.#.#...>.>.###...#.#.....#...#.#...#.#.#.#.###.#.#...###.......#...#.....#
#.#.###.#####.#####.#.#.#.#####.#######.#.#.#######.#.###.#.#####v###.#.###v#.###.#.#.#.#####.#.#.#.###.#.#.#.###v#.#.#####.#####.###.#######
#.#.....#...#...#...#...#...#...#...###.#.#.......#.#...#...###...###...###.#...#.#...#.#...#.#.#.#...#.#.#.#...>.>.#.#...#.....#.#...#.....#
#.#######.#.###.#.#########.#.###.#.###.#.#######.#.###.#######.###########.###.#.#####.#.#.#.#.#.###.#.#.#.#####v###.#.#.#####v#.#.###.###.#
#.....#...#...#.#.#.......#.#...#.#.#...#.#.......#...#.#...#...#...........###.#...###.#.#.#.#.#.#...#.#.#.#.....#...#.#.....>.#...###.#...#
#####.#.#####.#.#.#.#####.#.###.#.#.#.###.#.#########.#.#.#.#.###.#############.###.###.#.#.#.#.#.#.###.#.#.#.#####.###.#######v#######.#.###
#...#...#.....#...#.....#...###...#.#.###...#.......#...#.#...###.#...#.......#...#...#.#.#.#.#.#.#.....#.#.#.....#...#.......#.....#...#.###
#.#.#####.#############.###########.#.#######.#####.#####.#######.#.#.#.#####.###.###.#.#.#.#.#.#.#######.#.#####.###.#######.#####.#.###.###
#.#.......#.......#.....#...###...#.#...#...#.#.....#...#.......#...#.#.#.....###.....#.#.#...#...#...###...###...###.#...#...#.....#...#...#
#.#########.#####.#.#####.#.###.#.#v###.#.#.#.#.#####.#.#######.#####.#.#.#############.#.#########.#.#########.#####.#.#.#.###.#######.###.#
#.#.....#...#.....#...#...#.....#.>.>...#.#.#.#.###...#.......#.....#...#.....#.......#.#.#.........#...#...#...#...#...#...#...#.....#.#...#
#.#.###.#.###.#######.#.###########v#####.#.#.#.###.#########.#####.#########.#.#####.#.#.#.###########.#.#.#.###.#.#########.###.###.#.#.###
#.#.#...#.###...#####.#.....#.......#...#.#...#...#...#.....#.#...#.###...#...#.#.....#...#.........#...#.#.#.....#.#.....#...#...#...#.#.###
#.#.#.###.#####.#####.#####.#.#######.#.#.#######.###.#.###.#.#.#.#.###.#.#.###.#.#################.#.###.#.#######.#.###.#.###.###.###.#.###
#...#.#...#...#...#...#...#.#.......#.#...#.......###...#...#...#.#.#...#.#.....#...........#.......#.###.#.#...#...#...#...#...###...#.#...#
#####.#.###.#.###.#.###.#.#.#######.#.#####.#############.#######.#.#.###.#################.#.#######.###.#.#.#.#.#####.#####.#######.#.###.#
#.....#.#...#.....#.....#...#.......#...#...#####...#.....#...###...#...#...................#.......#.#...#...#.#.#...#.#...#.#.......#.#...#
#.#####.#.###################.#########.#.#######.#.#.#####.#.#########.###########################.#.#.#######.#.#.#.#.#.#.#.#.#######.#.###
#.......#...................#...........#.......#.#.#.......#.....#...#...#.................#.......#.#.......#.#...#.#.#.#.#.#.....#...#...#
###########################.###################.#.#.#############.#.#.###.#.###############.#.#######.#######.#.#####.#.#.#.#.#####.#.#####.#
###.........................#...#...#.....#.....#.#.#.............#.#.....#.#...............#.......#.#.......#.......#...#.#.#.....#.#.....#
###.#########################.#.#.#.#.###.#.#####.#.#.#############.#######.#.#####################.#.#v###################.#.#.#####.#.#####
#...#.....#.........###...###.#.#.#.#...#.#.###...#.#.........#...#.......#.#.........#...###...#...#.>.>.#####.......#...#...#.......#.....#
#.###.###.#.#######.###.#.###.#.#.#.###.#.#v###.###.#########.#.#.#######.#.#########.#.#.###.#.#.#######.#####.#####.#.#.#################.#
#...#.#...#.#.......#...#...#.#...#.#...#.>.>.#.#...#...#.....#.#...#...#...#...#...#...#.#...#.#.....###...#...#.....#.#.#...#.....#...#...#
###.#.#.###.#.#######.#####.#.#####.#.#######.#.#.###.#.#.#####.###.#.#.#####.#.#.#.#####.#.###.#####.#####.#.###.#####.#.#.#.#.###.#.#.#.###
#...#.#.....#...###...###...#.....#.#.......#.#.#...#.#.#...###.#...#.#.#...#.#.#.#.#.....#...#...#...#.....#.###.#...#.#.#.#.#...#...#...###
#.###.#########.###.#####.#######.#.#######.#.#.###.#.#.###.###.#.###.#.#.#.#.#.#.#.#.#######.###.#.###.#####.###.#.#.#.#.#.#.###.###########
#.....###.......#...#...#.......#.#.#...#...#.#.###...#.#...#...#.#...#.#.#.#.#.#.#.#.....#...#...#...#...#...#...#.#...#.#.#...#...........#
#########.#######.###.#.#######.#.#.#.#.#.###.#.#######.#.###.###.#.###.#.#.#.#.#.#.#####.#.###.#####.###.#.###.###.#####.#.###.###########.#
#...#.....#.....#...#.#.....###.#.#...#...#...#...###...#.###.#...#...#.#.#.#.#.#.#.###...#.###.#...#...#...###...#...#...#.#...#...#...#...#
#.#.#.#####.###.###.#.#####.###.#.#########.#####.###.###v###.#.#####.#.#.#.#.#.#.#.###v###.###.#.#.###.#########.###.#.###.#.###.#.#.#.#v###
#.#...#...#.###...#...#.....#...#.......#...#...#.#...#.>.>.#.#.....#.#.#.#.#.#.#.#.#.>.>.#...#...#...#...#...###...#.#.#...#.#...#.#.#.>.###
#.#####.#.#.#####.#####.#####.#########.#.###.#.#.#.###.###.#.#####.#.#.#.#.#.#.#.#.#.###.###.#######.###.#.#.#####.#.#.#.###.#.###.#.###v###
#...#...#.#.#.....#...#.....#...#.......#.....#.#.#...#...#.#.#.....#.#.#.#.#.#.#.#.#.###...#...#####.....#.#.......#.#.#.###.#.#...#.###...#
###.#.###.#.#.#####.#.#####.###.#.#############.#.###.###.#.#.#.#####.#.#.#.#.#.#.#.#.#####.###.###########.#########.#.#.###.#.#.###.#####.#
#...#.#...#.#.....#.#.#...#...#.#.............#.#...#...#.#.#.#.#...#.#.#.#.#.#.#.#.#.....#...#.....#.......#...#...#.#.#...#.#.#.#...#.....#
#.###.#.###.#####.#.#.#.#.###.#.#############.#.###.###.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#####.###.#####.#.#######.#.#.#.#.#.###.#.#.#.#.###.#####
#.....#.....#####...#...#.....#...............#.....###...#...#...#...#...#...#...#.......###.......#.........#...#...#.....#...#...###.....#
###########################################################################################################################################.#`,q7=`19, 13, 30 @ -2,  1, -2
18, 19, 22 @ -1, -1, -2
20, 25, 34 @ -2, -2, -4
12, 31, 28 @ -1, -2, -1
20, 19, 15 @  1, -5, -3`,u7=`171178400007298, 165283791547432, 246565404194007 @ 190, 186, 60
250314870325177, 283762496814661, 272019235409859 @ 45, 15, 8
192727134181171, 456146317292988, 246796112051543 @ 22, -541, -70
242038752891431, 261287367655768, 330425420730235 @ 78, 27, -72
249342048426189, 348510396766234, 427773639329931 @ 16, -87, -346
353441545792997, 364847375466922, 274271275093711 @ -21, -148, 41
216330477538611, 390430996586104, 203558565797057 @ 88, -177, 135
217302962030132, 371849389666656, 389893932942344 @ -40, -94, -643
338035472989565, 290563655386666, 254888162205547 @ 15, -70, 68
135127435297741, 227334267994754, 56493469425395 @ 253, 118, 398
510490096303092, 286748658546796, 278346699011239 @ -252, -42, 28
245658192691337, 126219744558382, 289693949229921 @ 59, 282, -19
357218912023661, 210523813846414, 384706067363023 @ -7, 18, -74
196873545687587, 438027207999086, 268959231970119 @ -130, -598, -382
262527946671126, 48899071218248, 286155563522113 @ 28, 422, -14
168154171358017, 420211601846074, 298149145394039 @ 124, -456, -703
154460841373625, 50680906240460, 207768347612603 @ 215, 233, 120
237198500307821, 225124739533042, 372652743078019 @ -49, 373, -413
204999882972437, 411538300719986, 184551075701619 @ 128, -215, 165
330789988838027, 246547730418451, 293357309177197 @ -21, 15, 6
223467886869107, 301561070815154, 197296607248067 @ 104, -32, 140
384954918106030, 330771529215945, 508240983285145 @ -164, -79, -374
271097685713361, 295712012768378, 249718729161719 @ 51, -44, 62
178684585963757, 362144185513786, 225314309910739 @ -57, 230, -39
418637268959555, 377487863133928, 293747117350375 @ -98, -163, 18
280092460748739, 462754349746048, 353091167835528 @ 15, -294, -111
216390225172040, 367465542440328, 218345068257461 @ 8, -94, 98
417595578878351, 402066957298642, 400128913186903 @ -94, -192, -106
299195153691003, 292811179530154, 254092309725861 @ -62, 12, 35
179839211875757, 377887013577494, 220248131077276 @ -31, -16, 43
394589858277039, 299603683514093, 252398726668981 @ -125, -49, 58
350409639365638, 244977830805217, 355725007865484 @ -68, 33, -93
193677818367485, 363877188377834, 228578856674603 @ -25, 11, 15
306774715344789, 244484532681234, 474507959356871 @ 13, 16, -234
195634259420576, 335226862228994, 278068905197560 @ 122, -44, -41
194087659508123, 326990809559746, 168482058057403 @ 70, 80, 296
278475577441770, 215123100400185, 511755848090466 @ -14, 151, -445
222746690923202, 80409876651304, 288137052658270 @ 124, 238, 13
181340521167407, 356533948860748, 223376905651213 @ 114, -27, 73
366866994160937, 255403921740721, 313314400988479 @ -51, -9, -12
206303435821492, 345365299173321, 223794996589989 @ -20, 47, 66
387296718335393, 139326903697078, 401196960092255 @ -13, 66, -70
287017680190845, 246796186661923, 264719181979212 @ -47, 111, 11
264241831695917, 326931419123518, 243001990230367 @ -51, -19, 41
232710090210763, 434974624723869, 554896964146369 @ -17, -313, -938
170435042678291, 184601280160256, 348165154390189 @ 188, 215, -143
181632715199687, 355145293694416, 234453059649799 @ 74, 43, -10
477058810408049, 181906508412616, 277357464823330 @ -139, 50, 43
229951888005285, 316805144481786, 278158183109639 @ 21, 20, -58
450488216899277, 255126885144146, 352856048197715 @ -121, -25, -45
225598205443917, 243024191967018, 242995619031659 @ 24, 236, 32
255110587440941, 80838489106798, 383612363189927 @ 101, 171, -79
340215164932672, 440964542080834, 294200813226322 @ -56, -252, -5
309967849200329, 273421115262799, 370435419002329 @ 45, -51, -58
262529576604374, 364808856986216, 170351277757765 @ -58, -110, 226
221603381404287, 179413998943388, 317854638947211 @ 84, 247, -96
180889179692325, 316580512810900, 136376463248283 @ 13, 507, 824
424085370870509, 188251152457546, 281006551182763 @ -77, 40, 40
209562508983989, 301428518622118, 221974573745539 @ 77, 58, 92
338895833346416, 160224363933955, 308628157271113 @ 30, 51, 18
171903931717117, 355552441835566, 256714695985809 @ 145, 6, -105
176962845790328, 473059752967050, 220556402610563 @ 50, -916, 56
443007005776517, 457883536897906, 282749138372395 @ -156, -265, 24
452050976493113, 252737975726971, 230863207496443 @ -75, -45, 96
242308105688579, 296547755331841, 327822409163944 @ -65, 135, -263
382022547520677, 341519047742211, 331599836695789 @ -167, -95, -86
301456143949541, 292282047195586, 256192005940687 @ -5, -30, 49
234459985070789, 47655348757585, 143663381853745 @ 105, 297, 210
234234261207416, 405322625682766, 159106518545521 @ 98, -200, 194
191260521251342, 377145142428076, 383881362481381 @ 144, -150, -234
199215371791316, 415021238004643, 203005883766025 @ 118, -233, 138
276777919084051, 353026260788316, 232186402947397 @ -48, -95, 73
191703596963979, 375127419551047, 268806555888646 @ -17, -63, -269
436058213093331, 287292113684808, 180143624728097 @ -90, -67, 149
174822345871389, 387840727799466, 237984716063787 @ 132, -160, -6
330333551322585, 245768192841163, 357469574061115 @ 37, -33, -32
171014922240599, 168263331913763, 334220154545293 @ 191, 167, -74
438641441331191, 403546081173220, 320548896476656 @ -125, -194, -15
248081810807522, 443445824736136, 262227550578049 @ 20, -290, 10
175013712193887, 393720484845811, 215970602732519 @ -65, -213, 84
198122424277694, 87864281467192, 203048431512895 @ 168, 142, 124
178284087415295, 373664362784984, 217047454733061 @ -10, 31, 81
238660765948958, 316720980877558, 283543165071646 @ 36, -16, -39
162761644889659, 336124673178028, 176876070644717 @ 162, 603, 639
182113485479617, 262911785028666, 138658862601279 @ 90, 496, 509
202842404984285, 284636040754405, 351437669308258 @ 113, 57, -191
444550376319237, 236037143849191, 483216669107779 @ -71, -27, -152
289261508457377, 285916432040656, 284993888368039 @ -19, 6, -12
319111420060321, 395543592300380, 243460184781629 @ -93, -187, 57
165298073303873, 386089020274516, 218084317326433 @ 117, -90, 54
214300480112602, 399712128562184, 226388990755437 @ -56, -218, 54
175391069836670, 418704739624528, 230516507196943 @ -80, -666, -180
309873063168477, 357049146661503, 367653729430136 @ 49, -143, -51
298491513556625, 100592193274472, 38014414128269 @ 71, 109, 287
406390334957789, 226495634470330, 242283367727339 @ -145, 57, 72
307833328600365, 323674186958190, 225594296070431 @ 37, -101, 99
524916260724415, 319237286182938, 414039952164951 @ -234, -92, -130
236731834943487, 235848379733231, 434950964946044 @ 39, 163, -373
181752133878297, 318917093366366, 247341038572269 @ 43, 362, -133
182008526553797, 405352582564166, 87466572960079 @ 107, -241, 685
148088205857987, 39133407377496, 234768945974509 @ 239, 754, 58
312863713960203, 214834845457389, 381113977229023 @ -45, 113, -164
232500754901037, 242352935345986, 195109307824419 @ -11, 270, 170
325273577776517, 247924347482506, 353029236420379 @ 20, -16, -46
223611816102865, 319793832567945, 300083467532100 @ 21, 31, -139
286007424026045, 458493752752994, 377889197560371 @ -55, -319, -229
164539594166653, 340252020538282, 187484110881835 @ 153, 384, 406
304946489424548, 459601749573298, 513905379297130 @ 20, -268, -277
288196558389398, 368158505902138, 346116622330786 @ -52, -132, -155
327033103511703, 155795789560727, 142102039390541 @ -9, 127, 206
410968800615689, 393096691690690, 344230127737183 @ -192, -182, -95
335506469094485, 404639256991411, 500010007032505 @ -135, -205, -446
235110393001529, 138189274827316, 349658287136443 @ 115, 135, -56
428198570885917, 299339382932826, 444760847442859 @ -99, -74, -152
290379058283357, 88517456844490, 374065798845835 @ 54, 179, -77
163165394977794, 345482543054781, 306898575876926 @ 190, 55, -357
437405365488725, 204502204578718, 241571292920245 @ -67, 6, 85
279089400341912, 304994228698111, 304643844096319 @ 34, -53, -20
181304131795926, 337513539889693, 215932214351537 @ 12, 309, 98
288855349860909, 429514373912098, 441376575501699 @ 75, -219, -123
336413765319738, 245167607245178, 305343169924498 @ -42, 28, -17
375794628223373, 151752022506394, 77041336967003 @ -10, 63, 251
293029819388562, 331387825783096, 228833246043184 @ -96, -42, 79
345252713916029, 338607932208306, 371175529825531 @ 17, -125, -50
484764407052185, 497004810868650, 296535187509119 @ -187, -308, 12
196461515969227, 294399354761921, 357722278420989 @ 163, -59, -66
222247979450601, 244702590977905, 293235863566333 @ 13, 279, -134
227773543759811, 121922061331622, 270464070863531 @ 131, 128, 48
184119231985301, 308815721660932, 267897913503391 @ 137, 62, -44
176723602862752, 369545449006936, 229453559163129 @ 46, 30, -30
240049679693828, 268705613895623, 33734989952388 @ 80, 17, 401
334238137498957, 489242319053170, 320518093210199 @ -71, -336, -58
307024893070199, 354838483131152, 273745188637223 @ -154, -89, -34
196971236783537, 343476994289736, 156793906012119 @ -121, 245, 618
195198618527037, 395317981506666, 264675278567659 @ 34, -197, -134
198314743343218, 298285472194283, 172298017328560 @ -60, 467, 403
183692437623575, 328619690398420, 222646390281277 @ 27, 294, 50
331362586289507, 258331517730574, 257531722336235 @ -46, 18, 48
220700609712437, 352243544956666, 183577943394459 @ 14, -54, 210
287784347408819, 291667690183315, 296555778660100 @ -5, -13, -25
288888393633671, 247331268725743, 327500636321878 @ 11, 41, -61
309823475589790, 191577331211453, 327389263083987 @ 28, 61, -24
258495965171221, 291555004961190, 364203255115707 @ -119, 152, -384
195821341249365, 353602402741986, 226919407211411 @ -29, 70, 30
280565905255171, 348703057421146, 298497871092007 @ -128, -60, -122
258018537639353, 202109150622984, 313725136050198 @ 77, 74, -21
315339686666717, 464234663489266, 396750444960409 @ -15, -284, -150
170764748644631, 362692347104506, 234885708580021 @ 100, 100, -85
164959872274023, 366369261921178, 223103591713031 @ 162, 36, 38
95984771278188, 118354808815719, 38637833713598 @ 270, 83, 281
333731608363559, 353470969084456, 304274804473975 @ -109, -110, -52
468356529890034, 260749110679103, 182291106931484 @ -128, -37, 147
357930265131350, 426813287571580, 239062361560003 @ 16, -214, 88
285421514784519, 230213470455996, 282326779028325 @ 18, 65, 9
177384263747373, 370711764938450, 222727695365947 @ 67, -13, 46
310979080083217, 297460340131983, 355604932437714 @ -11, -43, -93
140830285452061, 186805412869407, 88334431928888 @ 241, 173, 329
435750958392734, 245603574609868, 184939177079542 @ -82, -26, 143
420408563596970, 271610083459309, 233926712839799 @ -58, -57, 92
418680733251721, 215861500433572, 263622387828083 @ -149, 63, 44
382242280677659, 182065284177977, 254525463475859 @ -13, 29, 72
318560594604693, 258899093977188, 397779880198825 @ 45, -43, -77
169826348189399, 388372346699532, 300516451932177 @ 140, -157, -459
201648167828337, 322069130241186, 155253410401199 @ 94, 10, 273
232088396704843, 374484294937561, 239140555583772 @ -105, -105, 5
319906977439818, 314507607137905, 224355436694023 @ 16, -87, 100
183968406152307, 353126671725291, 163299940318044 @ -77, 271, 707
183318092589672, 405627921951441, 235096360582349 @ -84, -349, -142
341897037770567, 307677889861864, 457931548060057 @ -36, -67, -215
315798562537085, 387753667918122, 116255143199083 @ 56, -176, 208
205738466963717, 262314021068566, 231532829296219 @ 155, -29, 92
194146339818536, 375189601322242, 221607473553721 @ -108, -28, 46
207906252055043, 317334468372928, 312143384858075 @ -37, 198, -384
306914081356287, 298560244698736, 317225988451069 @ 24, -63, -17
256301258125178, 225862366790977, 238410056519947 @ 80, 41, 80
331320973805117, 182334318865576, 251980751663149 @ 17, 54, 70
246911206527833, 312875001915793, 162844296392740 @ -27, 33, 251
431762900599962, 196350071915396, 479260992363294 @ -156, 82, -243
213659088701637, 382966121089906, 199830102046049 @ -11, -144, 171
324703646357908, 214526667305588, 230860891545356 @ -162, 218, 75
402831992361791, 397346425231993, 377672664304360 @ -189, -189, -155
235022182464121, 286997561032422, 317132769368563 @ -153, 322, -380
180025544566371, 315749639344522, 269860860422949 @ 183, -84, 42
144602209707578, 137184779124934, 255618464505340 @ 246, 456, 9
162547275352097, 356963841323746, 199620622581679 @ 174, 210, 277
171152835558464, 340604035365174, 253112136961614 @ 56, 488, -393
213247503453605, 340772274088242, 310305196982703 @ 131, -106, -27
185718416372413, 391413245590594, 191577624910311 @ -159, -174, 431
182213481990910, 353058747578267, 327174093197788 @ 132, -49, -269
171649662990662, 386264056927381, 308322281842219 @ 84, -123, -848
189972403591917, 454721508275618, 223704180994235 @ 19, -571, 54
403217515347277, 330685375312458, 289583002098171 @ -86, -106, 21
251911038445621, 66387926477252, 137758747642783 @ -59, 763, 334
394072933949337, 139439240089386, 385931844851719 @ -29, 76, -62
344994422742905, 341955713989086, 470792666877185 @ 23, -130, -145
271175050019191, 500906981481064, 400864329912582 @ 43, -342, -165
221645897619425, 361686416034854, 212459384775695 @ -148, -7, 123
287253157566953, 269951949978694, 141540017192425 @ 37, -16, 210
301218629848145, 466864931338735, 13216597025503 @ 37, -271, 356
190670167122337, 398038783512261, 236200004302744 @ 93, -203, 31
335903626290165, 226766383485543, 270669887606265 @ -23, 37, 38
400339015238096, 59002262717282, 181479838598325 @ -40, 164, 146
279843879606283, 388512299576758, 263490911982682 @ -225, -168, -65
275635414223777, 293077854642826, 230127985846879 @ -64, 52, 75
383331160220947, 191748724222726, 302036738324771 @ -26, 30, 20
155515410076851, 153834233221640, 277641174502692 @ 223, 674, -115
278140098669537, 255471147619736, 439789909399944 @ 61, -10, -169
224563831414301, 253405431402550, 252379010860723 @ 65, 126, 28
193398362626367, 256117220527615, 275143150180315 @ 39, 499, -192
448289256874427, 418475666065256, 391592646178154 @ -73, -206, -61
219524577966849, 329899329598966, 308896830008531 @ -53, 90, -300
343052166004172, 268774411433285, 281387458635363 @ -76, 11, 8
217254233295475, 344601116483300, 227401171378910 @ -53, 34, 53
204884862079284, 357648389382070, 201244440657873 @ -158, 96, 218
204882265701483, 287036185901841, 227662049238274 @ 55, 175, 67
431285529538982, 533386227812278, 134973976145143 @ -106, -344, 204
206617522118630, 412476100392666, 233463274299873 @ 26, -260, 38
311584989842865, 214622240362479, 210665386260311 @ 45, 11, 116
281927283689421, 273508445215956, 314612337412315 @ 33, -10, -32
209904504791927, 250004763798586, 220624391943889 @ -90, 660, 75
422513255881049, 211517791960798, 202552253476987 @ -147, 64, 128
306096173819267, 222938983915206, 265047722172553 @ 44, 10, 55
204491269272153, 343417877367733, 239654834039580 @ 61, -21, 29
233740971265241, 342870707735458, 354790260167563 @ -134, 46, -536
243798330015577, 283680775140112, 268457443803256 @ -11, 102, -29
240348917718136, 325887022374795, 264203098761186 @ -72, 49, -61
188864259049973, 350414068702228, 219428991604009 @ 5, 107, 77
309464262449789, 170790561635146, 261266510231179 @ -15, 150, 42
281562811131328, 271398815058267, 333543267757859 @ -78, 103, -168
534479628625989, 561320191286426, 479646898985899 @ -300, -410, -248
152360535815477, 251003255293101, 242309337872744 @ 233, 299, 17
203563063411517, 321331280764386, 292551801909919 @ 65, 50, -143
423871753618232, 123052173494296, 305418535491214 @ -96, 130, 7
202708691743565, 317065818938074, 426898773382411 @ 121, -28, -320
222456658454697, 249143609591392, 213230623934007 @ 99, 69, 114
218948907583925, 282776305815466, 122125337324275 @ -53, 300, 518
173792456439202, 381375277458276, 201127691658819 @ -8, -22, 312
256378905602112, 286569337191876, 286405508318789 @ 34, 10, -18
211513501222682, 349601807973436, 136936315685644 @ 98, -90, 277
159656770958813, 322360081635946, 174005365061563 @ 207, 400, 449
170015293188607, 372765462602560, 259191683834915 @ 139, -54, -184
438301796488997, 346545523798846, 360924446205919 @ -105, -129, -53
252378384998783, 235231748253504, 222751679830679 @ -13, 194, 92
285107337755803, 372400786411515, 226584113992138 @ -69, -137, 85
200306997624977, 500216714293266, 292832060179899 @ -37, -832, -360
293277241093997, 244134414187306, 222685351954651 @ -81, 140, 94
382776439638987, 316771114939036, 209742786728069 @ -32, -99, 117
214888697620757, 65946891742381, 119282762492299 @ 153, 149, 208
283953427333463, 316724967295110, 51293612519404 @ 83, -104, 277
232092686201087, 331066645056336, 218626826033319 @ 38, -37, 102
291216152875812, 215550447545236, 377236676220369 @ 52, 30, -82
296910331207913, 424659365983442, 131201925785215 @ -34, -238, 259
233529972873231, 45086350621612, 83047387589983 @ 16, 723, 454
322494683285353, 193719255559370, 255963896536295 @ -140, 244, 23
401889087754581, 181835018495314, 315829478257419 @ -30, 27, 12
310298522334737, 465096056199536, 428672039135219 @ -67, -314, -280
167070967448702, 393949635370401, 211270910691839 @ 140, -199, 140
348266477614717, 223342910467306, 297405367736299 @ -23, 27, 10
340245071866533, 359464102629333, 377488443910486 @ -87, -127, -155
194064346632584, 364273355221540, 163337418705196 @ 116, -106, 249
174996756645409, 411948148112885, 165427444152934 @ 61, -371, 577
191798464394247, 363118920600306, 222099529908049 @ -30, 32, 55
236360038014389, 143465118166762, 250823414259091 @ 95, 188, 58
400318739318181, 252104608519978, 185992624418083 @ -122, 12, 151
199511778210190, 330703342578598, 246275262856891 @ 28, 96, -32
410188600915153, 156486923116205, 476453488398514 @ -35, 49, -143
403443885022303, 340839703689596, 237131698258593 @ -102, -115, 83
205966597250419, 370766545619691, 164162068341777 @ -45, -65, 386
199592608139162, 251301110513356, 238043777033449 @ -66, 782, -50
543223300791101, 307692064576234, 388834124896939 @ -165, -98, -58
415984655409581, 290029579053786, 309062413009615 @ -43, -80, 19
303893795206514, 161095242482440, 168643190827927 @ 70, 42, 156
162619300043013, 230134901658198, 88693501999761 @ 201, 224, 426
205308296113457, 353149558691926, 182582949698979 @ 56, -51, 218
451084794924787, 196821710815236, 562134339689444 @ -129, 46, -291
226742902772880, 336586694334828, 253806603307990 @ -42, 26, -35
315792139646271, 267010555599958, 242564557653535 @ -24, 6, 70
178712631543352, 382282854562096, 173838641395304 @ 100, -126, 341
243735837601637, 346701777560786, 246741534377019 @ 11, -74, 36
210007641909725, 298444290411562, 264318664630011 @ 131, -36, 35
263172945206213, 268525789310326, 427841530693927 @ 87, -35, -139
220677187402635, 468970636318263, 43143998648027 @ 43, -389, 576
178580899449581, 347009510530906, 277318193707147 @ 100, 75, -246
177758811297412, 322584062403618, 169769943873243 @ 84, 292, 416
215590896798347, 334281345822656, 389832980042849 @ 128, -97, -141
376469200316606, 405928042087548, 366121130567146 @ -130, -202, -125
299345098043601, 313387338203029, 264642165681575 @ -203, 51, -36
218632913002013, 355096591649425, 249271783067287 @ -15, -41, -20
190649668742205, 134392939970218, 168841576007275 @ 102, 702, 268
273284435187787, 402773326831090, 299094035733625 @ 84, -192, 19
239419225455197, 328507115812526, 246498830555459 @ -55, 29, 6
232486478937895, 223967663304673, 169055331104021 @ 51, 183, 210
215124544210211, 351197210587726, 248088120987817 @ -24, -10, -29
163074260457836, 338333177896348, 232020615689744 @ 152, 654, -163
320688147068293, 310268963630560, 430029836481359 @ 37, -93, -118
261363761393453, 205939476692698, 335813167827991 @ -63, 316, -212
204019999799117, 354673051877586, 311692044098539 @ 143, -125, -32
170936382236750, 370764377080192, 251385303873748 @ 68, 78, -341
190760346748012, 288678268649194, 195033583529983 @ 34, 396, 220
252999337365221, 320136259627858, 244456776137521 @ -99, 56, 13`,T7=`jqt: rhn xhk nvd
rsh: frs pzl lsr
xhk: hfx
cmg: qnr nvd lhk bvb
rhn: xhk bvb hfx
bvb: xhk hfx
pzl: lsr hfx nvd
qnr: nvd
ntq: jqt hfx bvb xhk
nvd: lhk
lsr: lhk
rzs: qnr cmg lsr rsh
frs: qnr lhk lsr`,K7=`btz: vxx
cjk: jcc ftb zpq
jkg: hnl kzf jtb
pjn: sjh tmb zvg
qpn: lgx
zmm: bmj
vdl: csd sjh ghg nsv
thh: qmj bxt zgr krh
qzd: kvn
tcg: ljt pbc vnc
dqt: bdx
mhh: knx
lzz: mnj jqm htz
gxr: rdg
gdp: blx
bqg: zgx mtk ccm
shg: mfh dxt vkn djm
sft: gbd
drg: xfr zsv rrh
lcj: dxs jcc
mmc: csd qbn
kkq: kln mbd qnq
hnh: vpf htf sft ctm lth hcq ljt
gft: fhm zbv gkz bgs rmx
qvx: mpd qqv qch
sph: kkx tqh ddz
nlx: jll
mzf: qlk fjd
zfj: tmm
qfk: rpn
gqc: hvj mpj kkq gkg jts kcr
gjz: mnm
fkm: mnj ccx kxl cnz
nhj: kvn dmc rhb
tbd: vnz tmr
sbh: gmg
scm: zzc nrz
gmz: gtj rjq bpg zcm
nlt: vvp
zfc: cmh bsg kcz zcl
pdc: qfk
bsl: dng jbb slk zlg
kbr: vtx vdh hsj
bnp: zbh khg vgd
cnk: hfm zcl tzj crp jpx
qrl: vqf bbx ptq xcp
dtd: rvh mfv rms cnp
nsb: kkr
jrk: znq xzb gpv
qtj: vcb
jms: vgg zcm vtx
vxv: htf
sdx: djg nnh bsp mfv
dgz: xnt vtt
kcq: rdd qzv jhs
vfb: mdj svq ptl vvn
dbz: ttc zlq gsk
qrj: qzj
lkl: lqt xkz
qqd: dcn tmc
fkt: kgs zfd xnt
lhv: ktr vgb
lmp: vkj thx slg
lmg: kph jqm hcx
krt: zxb xzk fnk zxx sft
qzv: pqt lfv
htx: ngq lmj
gcn: xlb bzj xvl jmb
dhn: rtn vsf bkr hzc
knp: sqx jgc
fzb: gzf tmc bln
scs: rmn ppz tpb rpn
vzx: flf mbx tbd kkr gjv
xcc: sfh jjh zfc
nrc: ksr mcd lrb xtf pxz qzj
jkj: vmf bpm dmp jsj
ctp: bxb
jsl: gqh
xfx: kjx
fhs: gtc ppj rvx tkd slt
vgd: tmr xrv fsz
bxt: lgx
txb: xkn
hnq: kfb jqm
ths: hhh fzf pdt dst
phk: vgf jzh zxg lzp
cxh: phh mxr flg
tzh: zzv hbj bdx znr
vzf: qgl vlh dpr
xcm: ldt gth ljh
jvr: mlk rff jcc
bjt: hlz bgk tml mgp
scx: bvg nzv rcs flr zbq bnm
bjz: nmx cgs
bsb: hrn
gcg: prv lrd
qxm: bpz
hhv: ktr
mnc: lrn rff
hmt: bpm nqn rjv mgp
thx: bpg
nbd: lgz bqz psh djp mgh
cll: chf kbq rzn rsf
zzx: ccn qxl mqc
znq: hkq xdk
bdj: cjc
sdt: qtf sph lpv
hdv: xfl pfm bmn
kck: vjj xjf
lgg: jgk hhh znr djd
tlt: xgq tjd vvv bsp kjg
pgb: lmj
gvb: kfb
qpx: bxm knx xrv bdj
rsp: xsg
gnb: tvj rmn nfv xjt nvc
glt: skp hfh qvb
klv: ndh cvp mlk dqv
lmj: xph
qmj: jtb
jgt: tpr
vlq: qtj shb xsd
rgk: qvz fgj pfm
mbh: sbl
pqt: fcv zmm
hfs: rcg ljd rrv mbm
xsg: mkx
ckv: bsn sfh rms tzt
zbh: tqm
crr: kcz ldf
rhs: rvx jgc pxd bjz
hzm: rft fnd lqt
mqc: xgk ctc
zzq: rmb bfh jrk ndr rpn
tpb: bzk glv gxr
vrr: rrb spv
szl: kbq ggd kcn nrv dtt
xlr: bzk gpq
gzl: pzk
mbr: htv jkg
zpm: rlv
mbg: lph zvg ttd
mvs: zlg ghg kcn
ckc: drf hcq
jxd: ssf rmx nkt
ltd: mbh nlz
cfq: gjz bsh hlr
qjq: cmh lsq
jxf: chf tnf qqv
cgv: vpj zhd
hzk: rhr brs rsj lrn
btx: qxr
lcq: mdd xrg
kjx: cbj qmq lzd
qfq: tfg mjk
njv: trl xxl sst
vmg: ffb vzb hhd
zkn: zbq dkm psh vdh
gcp: dhn qmz rsj ptf
fnk: hqv qtz qqv
vvk: nrv tqh gjz
jzk: zsv jsj mnp
vjj: lzb tpl
stn: jxs dst lsv
clk: cxr
fpl: zgx lph zpq pvv
srs: fsc knb cpb zsg
xvs: ctp thj krh
qvz: zsv
lsl: lnm dxt gjv ztv
bcm: mlq
hhd: qsr
jnx: xvp
cvg: nhz qgp kst lqt
qbn: rft tlm jrc
dgh: xvs
rmn: vxv
gkg: pdc kgs vtm vjz
tfj: jvn tjc
fbg: mbm lfq sdz tvd vtm
fmv: tqg fkg
mrr: bmn gzf hpn pql cpc dlf
lzf: jgk slg lzt sgr
psp: rfm ccq
plz: cmd lnm ccb
cms: fxj gbp
vtt: hsp
zjf: vtx
kzs: jmv lqt slx ccb
mgh: gkg jgk
rlf: mjk flf mpm
kvr: njs klr fnj xjg
ccf: cxh jxs sbc
qgl: bkj
xpr: txs
mcd: zbk mrb tpl
qxh: jxr
mms: rqn xzf kbs vqg
qzj: ssm
dvr: rkm qmj zxg
ljq: bvg qvf
ctm: hgn fqt lzd
mbc: rdd ffs bxs
lsf: bpp mhj
mnj: qkc vgb
qbh: cpb
mtz: tjc ssb bxs
cks: hzc
dfv: ptl hnr zlq qkc
jts: qdv mkj
bbj: bnv
fgj: xkn psp dqv
bcg: xfr bfd mnr fll
xbn: gzg npf
kkh: hvm ndh stl hdv
tvt: mnr mvs hnr pvs
crq: bpz
dcm: sgl qhg pmv gqs
kvn: hzl
ggb: cpc rrh
ksg: qlv xrv pjp gzg
zmk: sgl
hkb: cfd pgz hpn xvp
lmx: clb jbb dgg cxm
qxr: zvm hdd
mfb: lcq hbj fjn jpx
lgl: tfx fmz jsv mrb
vqg: tjb xpx
fzf: kgt
vpd: bxm sgl
jkn: vjj tvd xjj sxb
zkk: stn hvj qtf
bzc: btj bsb mrv fnp
qbd: xsf drq
glv: smp
hrk: kln
vnc: bfl gzl
zjs: hvb rhb mln zlv gdp
bvh: ccb glp gzb
gvs: tqz nzp tld
crd: mrx
lnk: pbp mlq vln kgz vcb lrn
tzt: xzb
lss: dqt vxk
llz: lhr sjl jsh ngl
hkf: bsg xdk
qhg: jrc
tvd: pzk sfh
lvp: gfm pcp clk
ccn: mnj dph rvx
gth: jvn
qqg: ctd zhd
bcr: pbp bbj drq fcv
tmm: xpr
pdt: tdh zxb qbh gqj
tzq: gdx knx ntn slt
qvs: xvs qqv lgx kcz
fmh: gjf cfm zvt nvc
kzk: qfk qbh sdz
fcs: qpt vzb bzb rdl jjh prp
thj: hcq
gdq: hsp hvg
lpv: mnm jpc
dxt: tfg lff pds
zkh: sql pjq txr
pvs: mkx
nrv: ftj
prn: gjf kfh tst gks
mgc: nlb lss ppz
clq: ffb pdc tpr rbh lqh
qtq: pct fvt qvf qzp
mlq: ptl
hvm: xrj mmz ldz
lxl: mkf szp xzg mnc
bgk: jsl tqm ztl hsb ggb sjt
dxs: bvh hzl ksv
xfn: bcf qrj
bzj: mln xrj
ptf: jfq xkz nmp
hcf: vzb brc hhx ljt vjz
rnq: xsp fnj
mxc: slg txf hsj lfj dbq
knb: zzv
vkq: jck msq fvt lhr jml
hzc: lnf
qch: tpr
tff: rqj kjg
tnx: flg hhx sgh
vbx: ppz pnb qmj bcz
tqc: ssf lkl
hzb: bsx pnc tnx mcg
xln: sst gzf mkf ccm
hxf: jhs cvc prv lfp tqg pxt
lml: sjh vnd jsl
fsx: bjz
rxs: rtv qjg mkx lsf
kql: xvz gbd lgx
crp: dkm nlx gfp vtt rmj
rhd: hqz thm mkj
pjb: qpt cbj
znr: cbk mqz
bcz: dtt hxx
vdx: qzm
mtc: ljq hkq ptq
xdp: nkr hhl mjk pcp ntc
lcx: txp bcf hnf jxs
xsp: djm mhd tkd jmb mrx ktr
tvj: qfb trd
gpd: rzx fxn dcn tzl
lvq: qxp
ssb: pbh
ptq: mqk fxn rjp
knq: qkc
qkz: qpn glt ggl czz
fdm: vsb cgd ftq txb
fqb: lth hhd jvb qrj
xxl: pbh
dzh: nbv kcr qvf vdr
qkh: nxf mnp fzb dpc
brh: lkb glg qsr tdr
kkr: nmp
gbd: nzv
gpt: njs kpf zsd
qpt: bdx
qtg: qjf kvn xkp qjg kfx
cbv: skn xzb zfd pjb
lnm: ftq nmx
gzg: prd
lkk: vgd kcq
xnq: lff mqc
qjg: nsc
pjz: nlx bfl xgq
rks: dbz gzb qbd
kbz: dkb tbd rrr bht
vjx: gvb xhj prd
ghh: bbx jdz
frv: sxg psh djp
cjg: gfq xfm mlk lll mrt
nzn: mkx lrd
nbg: czp mfh hdh sqx
brs: vkn
gql: hpn gcg fmv vjx
qvf: xvz jgn
sgj: qrj fdr
nbv: jgn zjv
lgz: pdc csc
vkn: ssf
shl: rqj lfm hpl qrg lsq
trd: bfl
vbr: nlx qbh rrv mvb
tfh: pzb mrb
cdk: ngq lzp kfc tfh
pjr: kvg ttc
vnz: nkt lfv vcb
mhm: qbf kvg ssb sjn
sbq: ghg vxq mmq sxq
hth: pjb xpn cgv
zxg: jxr
nnz: ntc hhv
ggd: cjz
gks: bnm
xhm: xsg pbp zbh dcj
dgl: ftj
rpb: vvp
fmb: glr
nzj: bsp bsx kcr
xvh: crd fbd dgk
rkm: ffb jvb
ghg: dng
sgq: lkx vxx
vdr: qtf
xng: mdq txs lzn jzs
lxt: rcg tzh rst
fbf: sdt zjf lzb vjh
gjv: tgb
rrv: fqj qxp vlj nrz bnm
fhf: zbk bcp bbf
tnf: tzt qhx
jxk: mqz kkx gqj
qlg: csk gpv hfm sjk
zzl: xtf nvt dqj svz
bfh: tst vjh vbl
nhl: kjg bpg dgh mvf
ldz: hcg fsx mgp
tss: tqm qfq pjn fcv
flr: htx hcs
gzz: lnf
ttl: mms lnk pvs knx zfj gxq
kvl: rvh ngx czt dtt
qvd: xpx tfj frn
rtq: kpf mhj qqd
xpn: kck lkb
gfc: dgh jzr
nms: gcf fmv lcp
czt: qrg jtb
xzg: mdq
htl: qxj kgj
khj: dph bkt xsf fsz xpz jsl pvv
fmz: xfx gcj jgn
lrq: lfm vcl qqg trd cgr
crb: phh nzq qvb
tml: fkg bzd dmp
slx: gzz
lrs: gbr nnz qxm zsd cpc rzz
bmq: ljq xvz qdv sbc
pqd: vxx htd
qpc: rrr lrd tqg gbp
qls: gtc
kdg: qrn lfr kjg
nfv: glv mrb hrk
hhl: csd ldn
blg: vlk qxm xfm slx
sxp: hsb mnp cks sjn fdt
ngv: bcm ntn hsb pqp
xmc: tzj htv hqz
kps: xkp tqm lmg gqh ldz
xtm: ddz sfh
tdb: nfq jlt bsp zsg
lkd: nbj njs pgz
zxx: xzb zxg
mld: xkz tzl mkx fdn
dtg: jnx vfn hhl
dqn: zds hrq zrq gth pmv nkb
rqb: hhv drg knx nqn
vvj: xgv vkg ztv frn
mqr: ljh cxr
bjr: rcv fsd xjf znh
bpm: kfx
gpr: lhv ggb fsz
vkg: gjv plz cxr lzn
qlc: xjc drf gpq mvb
pxt: cjc lfp ffs
ntx: hbt thx
lsp: jvn bkr qhg
vjz: cbj sxg
qhd: qcd gfq jxd
qgn: fsc ffb msq
bvr: klb bqz hvh zxg
klt: ccl pbh xbn trl
xlb: tmr dft
jpx: tmf chf
jvn: bpz
ntc: pds glp
tjb: hhv
hvj: tzt
bgs: hcg jvf
gmg: nzv
vgr: jjh zts rcs
klk: flt gdp gbv vkn
nrt: vdx cgv
bzb: nbn qxh
cbj: ktt
ppr: tqh
prp: dzv
qrn: btz shz
rpf: jqq zzl kjj bxt
xjt: rms lnt
hld: bkt tmb zfj cmj jlk
xgq: fqt vxk
xgt: mgp rzx dpc zlv
vxq: hnq kgz
cjz: tld
tlq: xkn xkv
sbb: bcx shz nbn cqv kmm znh
glr: gcj
pxd: npf tzl dlf bzr
djs: xvh qjf jvf cgd
spv: knp qgp djm
dmc: gsk
gqk: llc rxf knh srk
fhp: fcv djm
cmb: mqk qrj
gqh: xvp
qgp: nkt lph
dpj: lck vjj
fkr: hgn qxh glr kck
bmz: lst pbp ttd trl
qhx: qzm
gmj: tpb tdr djp srs
cnp: klb mlz dgz
cpf: tpq vjr
zlg: bzr qjf rfc
qbs: rqb ttl zmz lcj
svv: dpj mtm qrn klc
xfr: vjk
lqt: ntc xjg
xhq: njv xjg vmx frn dph
lhg: xth nlp stl mbx
kfh: zjv mnm
zxt: gbr pxt kvn jpp
qcb: btx mrx xfr tjc
qht: mlz lrq qtn
fhm: gvb dsf qhd
thm: ctp gvq kjg
hqv: gbd jpc
csd: bfd
bkj: jld
kgp: nnh dzv dlg vkp
ftb: dcj gzf
jmv: vrr rjv kph
bst: vbl cmb qhx rdl lcq lcf
nsv: fzp lsf cmj ttd knq
cxm: kfx pkq
ghl: ctd pzb tst lfq zgr
mcb: chf dzv nzp lnt
hbx: ctc nbj dkl
dpn: dnf knq bzd bzr
gdx: vzn slk kfb
qrt: pzm knq cjk zlg hmq
hqs: hvb hzl dft tlq
rrb: xkn
dkl: jvf pqq jtp
crj: rvh dtt ljd tqz gdg
zds: tlq ztv
tkh: ppr bsx
lsc: ttd fdt tmm xnq kvr
szh: gxq prv jzs
xkz: bbj
ljr: vjr ngx hrk pjb
kqq: zcl jck
nvc: qrg dgl
hrl: nln qzd vkf
fvt: dgl
fcl: srd zkh fpv zfq
clb: mcj bqg xlb ttg
cnz: jqm zbh
sgf: nkt sqx kfb
ldq: bmd lfq
vdv: zfj rtn tfg mmc
msq: nrv
jlk: bnr
flt: nkt qmz
ppc: tfj jzs jcc jcb lkd
gxl: xzg
xvg: xjs pxz xzp jjh sbg zcd
hsj: pvm
zxj: vdr hbj zgh vjh
gnm: qxm
pcc: ggd crr dbq znq
jmm: rlv
khs: knp qxr pbh
bsx: pbj
lzt: gfp
kbq: hkq
bmk: zxs
lpj: vch zbs bhn vjt
slz: gnm mcx gbv gzb
fhh: nsc fhp bcm
czp: mfh plz
mfv: czt fmb
mnr: ztl hpn bpp
qlv: jgc
bml: dmc bln szh gxl
dtf: czp jgc jks
ggh: sxb xzb zzv
vqx: sql jxf ddz rcv
klr: xjg mtk rhr
zbv: rrb
kgt: llk
ktg: lnf dkl nbs rlf
xgk: fdn
xrv: tmb
vdh: sgh
mtk: trl
gpv: scm
prc: dft mhd dpc tmc
rqn: qvz mcx
bdn: bcz trr fss ngl
csk: rcg
jsv: zgr
gcq: ljh
sqp: czp bnv qrq pjp
nxr: hpx ldz tnv cms
csp: qxj bqd gjj lsq
qlk: nln rrb
zjv: nzv
hmq: pkd jvf xfl
dqj: kgt sjl xlr
lff: prv
cgr: tjd
fpv: kbr rst qlg pgb
kph: crd qbf zsd dqc
xhj: hnr vmf lcj rsj
kgv: qch pgb skn
rdl: zzz mlr
tbm: vvv cbk nlx
jbb: mln qhg
cjr: lrj qtz xgq cfq
nkr: kbv
cfm: mqz
sjl: smp tcg vnc bsh sbv xjc
xkq: mjk pjr vvq kxl
mjd: bgs lst kvn lml
qxl: tkd rff
pnc: hkt jxs
ldn: tjb fdt vcb
lfk: vkl ngx trr gjj rsf
gfp: ctp tmf
hpv: xjf ldq nlt shl
qcz: pfm gfm rqn
nht: hkj nlb
hrn: drf
trr: rzn
srk: zpq zmk fdn
pcd: gcq cxg
zhp: nrv tld lmj
kbv: xsf crq
lkb: xjj rpb
hsb: zct
mmt: lcf lnt nfr ngq
lrb: gbd llk
sqt: bnv pgp lcp lll
qxn: mbd mrn vgk sxg
vdn: gdg txr nrt prp
mvb: xfx mcb
hhh: lsq
zzz: hhx kfh hfh slg
rtv: mhh brs hhv kvr nzn
npz: txb bxm hdd xlb
dst: lks lzb
vmx: nln jcb
vfm: htf gvq
hlr: czt cfm klb
hkj: jck fsc hgn
nlh: tqc nqn fhl fsz
lll: zjb ffm nkr
gkz: cbq tmc hdd zbv
hzr: gxl clk vln qrq
kqc: tmc pcd gsl stl
gvq: xrg bkj nvc
tqh: lrb
hcx: zck gfq krx
mpk: qtf lbh bql glt
tks: ljq scm
ngs: lxt glt pqd zkf
rtz: drq vjs zds rfm tjq
gxq: rrh
njt: rlh lkk xkp gzz qmz
qbf: bpp
mlb: gfc kfh gks pct
ffp: ldt
kbl: bkj nnc srd
krv: fcv nsb tqm
srq: nlb rbg tck qqg pxz
lth: jgk
lld: phr kcn jfq lhv
pdq: trd txp
hqz: qmj hnf
szp: prd rsp
jzh: lzp xrg lth
pql: nsb mmq
bjs: shz djp
zgx: ksv gbr
mrs: thd kcq tfj xts pqq
mkq: mpx lss lfk flg
xpz: bpm gvb
gnf: vgb ccx mvs xsd
vch: dph xpr xsf xcm
qrg: ksr
hkt: fsc hvj
vsf: vpd jks rfm gqh
kvg: zpq
brc: pmc htl fsc
cjp: fbp pbj htf
kgj: rcg thj
txr: lsv nlz jjr
ppj: jrc
pds: pgp pkq xfm
lnp: dgk qlv slz gsl
msv: ctp nnh
cpc: jks
sbg: lks zpm
vjl: mnc tqc rxf ktf
qtn: hvg ksr
czd: nzv htx
qfx: vlh tpl knb fbt
ztl: rsj
mfh: gbp
rxf: rzz
vmf: zmm dng
ktf: btx lhv
dgp: cks szf vnd tvv rlf mvs
jxs: hbt xfn msv
dqs: mtk rsp
bpp: hhv
hsx: gxr nrv nlb znh
fnt: vjj tqh
gll: xcp lvq sbv tks
tzr: znh nnc
kkj: hcg kpf qpm gqs
zxq: hnr khs lkk zct vln bmj
ljd: hrn
rmj: zcl cjp pdq
zzg: gph mmc rnq xdp
tvp: htv pgc tjd kjj
ttg: dtg pvs bln
mxr: tdr kgs
qnb: fnk cbk bmd
lks: ngl
hjh: dlg hns gtq ssm
cxr: cxg
zts: jxr pnb
fhl: qjg mrp xjd pjr rsj
zfg: zvt bsx tzr fss htv
hzf: vzc xcp zvt phh
vhr: fsc kbq mqz vgr
dqc: ndz svq fsx
fqt: dzv
kcb: pnc nnh gkg bjs lzt
zfd: fdr
mdd: xhx
fmj: fzf htx ljd mfv
rtn: lfd dxr
hcg: hdh
nxp: bbj flx hpx vjs
rlh: fhh lvp tlm
gdn: sjk jml
hph: jld
hqp: vxv hkf sbh fnt
xtf: qbh
bgn: pvv fnd vvn lml mkf
bxg: mbr scs sdg jxf
vlk: xzg jtp
fhq: jck sft jjr zhd
lqz: vcx ccf ltd bjs
frn: mrd
qvq: gxv flj cbk pvm vkp
xtx: vdx fqj lgz mdh
rjr: hlz ctc mpm jkr
tql: rst gks frv ntx mrv
bsn: thj vlj
krn: prd xkr hrq ssf rzz
dkb: mcx qgp nqn
gbn: bkr xpz vjl prc nsc
fbd: hzl lzd ffm rbd
fqx: vjt kkr lrs
ljh: hzl
kmp: xsd pns tqc fqx ntn
ndh: ssb zvm
tdr: bfl
mpj: cgr zkf ngq
cvp: mrr lff zqx
bht: slt bmj ppj
bxm: pqq
zct: bpz
hls: qpn mtm skp qnq
rvh: kmm
qqh: dnf glp vmf cmd
tnd: fgx hxx znr
dmp: hzl zjr fhp
vvq: zbh
mhj: pqt
lfj: bsp xfx bvg
cqv: xht nlz ldf
hfh: cln
jqq: tff bql krq sgj kdg
rdg: jll qfk
sql: lsv jvb
nsl: zpq lkl zmm
pzk: fbp hbt
pbj: kbq lks
npt: hbj vtx sdc gqj
zrq: zlv jks qjg mhd
xnr: lkx nlz tmf
kns: kgj smm ljt btj
bbx: mqk gdn
lfp: gtc gsk
mvf: cpb xvz jpc
jmb: fnd
svp: rdd tjc csd
mdj: gxl ldt sjh
btj: tff dtt
vgg: zcd tqz fnk
zll: fgx sgh kfc hvg xpn
xcp: xvs rjq
bln: ctc
blb: mrd fhh
lck: rcg fdr
svq: fdt cnz
rzx: mbg
lbh: dgz jvb pqd llk
nlz: hsp
hvh: nrz rlv mrn
vzt: rtq rks dpc dgp tmb bnp cfd
vlj: sxg vvp
vzb: djd
fbr: ftj mxr rvf ncs
jcc: gjd fxj
zzc: jck jld
jmg: lfv cvc kvg qlv
zfq: bsn vkp zjv
ccb: pqq
zjr: gbv xth
bnb: mlq slk cxr shb
nbj: drq gtc
jcb: jkr
vsb: kbv fnd xvl
bhn: nbs hnq mqr zlg cmd
slk: gnm dcn
sgr: fdr hhh
vss: csc hrk hsj pjz
mpd: lzb knb rqj
xjj: ctp
lsz: rqn crd zsv
grc: kln qdz fss dpx dgz mbh sbl
nlp: mlk dtg
rvf: ckc
xcq: rcs qfb cbj vtt
mqz: hcs
lcp: ztl vjk
hhx: bcf
fpd: rbc nfr fvc zkk bfh
smp: vkp
knh: xbn rxf dmc
gjd: bmj clk fcv
flj: htf mdd
cxg: hvb blx
ssm: lkx
hvl: zvg hzl
pqp: lst mdq rzx
htd: sjk gjz
nth: sbh vbh zxs
mdh: fmb qrj qzm
vjb: qht pjx bql
vnd: jkr fjd
vbv: jml nrv dkm kqq
xzp: bzb bcf bqz dbq
nmx: mmq xzf
fgx: hkt bmk
sdc: dbx zkk qsr vrx
sxb: hxx
gzb: dgk
pns: lph cjc lvp
mrm: pnb xcc sxb ghh
dhf: zlq lrd jlk
ltf: qtj slz ppj dxr
cgm: ktt jkn kzf gdq
htz: jrc gqs vpd
mlz: hns fhf mdh djd
fjn: vfm hvh ftj hgn
nvt: xzp sgj tpb
kpv: trr jpc vxk ssm
fss: vbl
cmj: xzf lzz
cnn: zvh bnv gzb jqm
mkf: kvg
lfr: brh gnb zhp
tgb: flt gph ttc
mcg: tjd mdd nrv
lfd: ffp bdj hxc crq
tjq: nsc bgk fhm
fll: hnq svq khg
rjv: xsg
hnf: hrn
rsk: nrv jgt
pkd: vlk cks mrd qbd
vfn: gcq pgp
ggl: pdq sph dgh
cln: zfd
fxn: ptl ftq ccm
znj: rhs qcz qpm ghg xpr jkr
xdm: rmx hrq
kjj: prp nlz glg
pgp: nbs
pcp: gdp
phr: jkr vjs rjv
dbq: cln
cmh: ndr vvk tdm vkj
zxb: crt flg
kfc: gzl
fjd: pcp ktr xts
mrt: xbn gbr kxl
gsl: hvb rrr
zmz: tgb mbc xfm
hgn: hcq
vjh: vpj
flg: tfx
ptm: jmm vjb czd fqj
jkb: vpf hhh vdh jgt fqj prn mbd
fln: rfc lnf lfv mtz
bnr: jvf xth mcx
hxc: fkg kvg hpn
rst: tpq
rqd: hqv cpf nnc kkx
cmx: qpm dtf gph sgf
dsf: blb rnq qjf
xth: kfx xkv
ztx: tld lfm qmq
fvc: hkq
tpq: rsf glr lzp
qdz: zvt zxs lnt
jfq: cmd xpd
fdc: mzf rrr mcj bzj
pxc: gmg jxk tzj vzc znq
vgk: ktt tqh
ksv: cvc
tnc: sjk dgz gdg ppr
hns: txp
lkx: bxb
jtp: vkf cgs
zck: qls xdm
mkj: clh
nfx: mqr xkv khg xxl
hnl: vjz cpb sbg
rmc: mpd ppz ndr lmp
qcd: kfx
rqg: dxr nnz xvp vjk kst
cgz: gpv vjr zzc snv mgh xrg
znd: nlt vpj crb sbv krh
gtq: zkn qrj qxj tfx
pzb: vkj
kst: nbs djm
xph: dqt
svz: vqf
vjs: nln
nhg: nrt qnb mrn
czq: nnc xxd jgt pzk
jbg: xkv xzf ksv xxl hrl dbg
gfm: rfc drq
gpq: rlv lfm sgq
xgv: rzz qlk xgk
ndz: llc fdn vlq jhs mrd
mmb: vvv xjf djh tdh
ktc: mjv zbk nht pbc
pct: qpt mpn
gtj: lfq xtf bsh
hpx: kkr vjk jzs
rch: htv qnq gvs cgr
vpj: qrj
qfs: mkf gcg qls qcd hvl
pjq: kbl kgs qvb
kxn: rdg rvf dpj hhh
rpj: gzx rvg qfq svp
fzp: sgl hdh xkp
dpr: ztx hfh gzl vlh qzm frv vgf fnt
crs: htx glr jll
ftf: tvv mmq qzd xpx
czz: vzb vxv lkx
kdl: fnk xjc cpb glg
vbl: hkf
tmk: nsb bpm
lbc: xjf vzc rbh
mmz: fdt ffp btx
jpp: qvd vkf zck
vvn: ssf lfv ccq
ldf: jgn qdv
znh: jll
jjh: gjf
fql: lsf rrr sxp vsb
mpx: bsg
dpc: rfc vvq
zlx: xfm rzx hvl mnp tqc
nnc: thm
xjd: tqm xjg gzg
xrm: kst bcm bqg svp
pgc: crb drf qzj
cpk: rvg pgp nhj hpn
qvb: tst
thd: bmn
mcj: fsx cxm jsj rhb
szf: djm
vrx: zcd
vcx: glt zts
dxr: qzd
pqs: vsf jnx fgj jcc
bcp: nzp vjr qmj
rvg: llc
rdd: gcq
tnv: qcz vln qls nkr
ntn: bqg fnj
cts: fvt glg qtf msq
phx: cfm hxx zxg
xfl: jzk sqx
mxb: hlz vzx zlv fnj
tdh: vzc
stl: bdj
rft: tkd pkq
dlf: gvb xkp
lrj: mpx msq vtm
qcf: dqs slk mtk jcb
ndr: xph
tzl: ffp
kmm: llk
shz: rkm sbl
mjv: gqj mbd sgr
flq: znq rqj dgl mbh jsv
rhg: jpx vdr vnc vkl zxs
tdd: qbf npf zjb gzg
sdg: rbh zcm vcx htv
vjt: fkg jhs
mpm: bln cjc
tvv: rvx vzx
rmb: klb msr dkm
pkb: vmx ffm gpr ccq
sjt: mhh ftb zct svp
mpn: fbp bsg
hsv: jqm nqn szf txs
lhr: jsv hph
pgz: zjb jmb
nxf: xvh bzr zmk
vfq: tmf tfh qgn mbm
bkt: zbh ffs
vcl: thx bxb
hvc: zmk mzf fdm vcb
kln: tnf
kzb: mlz tnf dlg krh
spj: nqn xsp dcj jnx
mgg: jsh qjq mlr mqk
vlb: xmc pxc pjb cxh
lst: vjk
vlh: rhd
dqv: pvv kxl
klc: txp lpv nfr
skn: kql bbf rmn tvd qfk
bhd: glg bmk pct mkj vdx
jjj: tks pmc cjz tbm
hkm: kfc hvg xzb
srt: bnv rft xdm xpx
jdz: zhd mrn rpb vgk
tgl: xth zsd slz nkb
mrv: gzl
sdq: tnd ctd rbg kzk frr qfb
xpd: nzn
cgd: qbf dcj
qxp: pzb bzk
krq: zjf pdq ctp
gxn: nht zgh xtm nnh qtn
jsh: vrx
jxj: rsk zpm nth rqd
pjx: vqf tpr rms
lfq: flr
sdv: vpj glg fsd
sxk: flt vmx qtj ffs
pmh: scm cjz crt
pzm: trl tmk
hst: xhx jxf dqt hph
zkt: qhx szb qfb mrv
ngt: cgs npf hzc
xrj: ldt bfd qxl
jjr: qgl xph fvc rbg
rbc: xcp qpn lbc
xvl: ffs ffm
sst: nmp kcq
jxp: kkx ncs bxt mbr xjs
bcx: crs zgh lcf
jhx: rnq qzv pgz nms
zlv: zmk
qtz: xdk bpg
kzf: jtb lvq
sdz: jxf kqq hvg
pmv: zlg rff
hrq: sqx
mrp: dft hdh hbx
xts: hlz vvq
sbc: fsd qzp
nfr: sbh
xkr: dhf svq crq
tck: xzb sgq
cfd: mcx xpd trl
ctd: rms
hpl: fsd cgr mpx
ncs: vqf hsp zzq rbh
jlt: lzm pbj
srd: xjj zzv
flc: jvb flj mgg tkh
gzx: jlk gfq jvr gth
txf: qch ftj mpx
xhv: bsh tzr jzr qxh
cbq: ldt mhh
zvh: mdq qvz gbp
bxs: pcd khg pqq
hcs: fbp djd
zvm: ftq xvp
nkb: rsp
mks: qdv hvj cmb fvc
bbt: dqs hvm lsp gtc
ccx: vfn mnr
vgf: krh hvg
kgz: tlm
djg: rzn hkm phx
kfv: fzf psh czd bmk xlr
fmk: rhb nmp qcb gph
rsj: xkn
mbx: kvg
vvv: ktt
dlg: gdq
flf: tmm nnz jtt ktf
jhp: ngl ghh xdk gdn
xjc: ffb
fpr: tbm hhd lck rlp mmt
xfj: tdh jms qjq xtm
tlm: gzg stl rvg
zbs: rqn slx drq
nxz: kgz njs gkz kvg
xbv: smp fqt hfm rjq svz kbq
kpf: xgk
hzz: vxk rzn dbx xrg
vzn: qfq kbs dxs
djh: xgq ggh kgl ngl
rbd: szp tfg
lqm: jnp fmz hqp nzj
lzm: xhx bfl nlz
crf: vgd gsk mqc qkc
lzn: dng blx
tzx: srd tpl jml xnt
phh: smp
cxn: znq tdm btz ckc
bqd: nnc mbd csk
gjj: vxx zgr
ztv: mln
tdm: rjq mnm
vgb: pkq
phq: ntx sbv lbc sdv
sxq: txb brs mnr vxq
xqx: zpm ldq cpf hrk
lph: rhr
mtm: pbc lzd
bgz: zvg jtt pbh xsg
fnp: bbf ksr
krx: xpd gbv gnm drg
dpx: zpm lvq rpb
snv: tkh vkj xfn
pfh: vfn xjg nlp hzm
frr: bvg ssm fkt
zsg: gcj crr jld
ngx: bnm
lrn: jtt
gxm: sgf zzx mtk rrb
njs: tmk mbx
ddz: pnb
qmq: thx pvm
pbh: jsj
mrx: jtt
fsz: zds
bmn: rfm
pmc: jvb hkf
lqh: lkb pjb mpx
pbc: ngq htd csk
bkc: nkb mnc jjz vqg
nfq: gvq zvt vfm
kcn: mhj
mlr: htl zgh gxr clh
jmq: gzz xnq cxg btx
qjv: fcl pxz tck jtb
dbg: gqk hvb cmd
qxs: pzm tjb rrh fll pbh
nbn: dbx vrx
qnq: hbt
gcf: vsf qzd
rcv: tvd jmm
xzk: qzp sbl tpl
bkr: bfd
kbs: zbv fxj krv
fdr: zcd
dnf: xxl xsd
vkl: rsf qxj
mrc: nkt vlk ldz dft
ccl: zjb ksv lsz
kxq: hph brh fqj zkf
ctq: pvm rbg jlt zjf
csc: nzq tzj
kdv: fnk xgq czq qvx
sjn: zlq cgs
zhd: kmm hph
clh: fmb bdx
ccm: sqx
bzd: thd gqs mhd gnm kpf
nrb: qpm gcf qmz nsl qxl
rjp: ksr zcd gcj
xxd: fnp qzp bqz vvv
xjs: vmg qgl
nts: rsk xnr mlr snv
zcm: nbv dst
gdg: ppr
lsv: skp
zbq: nrz bsb
bnq: jsh pgb nnc nbn
dgg: xfm zjr dcn
sns: gxq rrh tmr ccq
pmp: tfx bbf msr gpv zxb
htq: mdd btz bxt hth
zqx: hdd kbv pql
kgl: vcl vxk jts
xht: bsb dvr ltd
nhz: vrr rhr cms mbg szf gzx
qrq: glp ngt lph qcd
rcs: qdv
vbh: lcf pbj mpd
hgd: zkf tpl hnf mgc kcz
zbk: klb kcr
vgz: xfm zgx psp ggb
nmf: qqd thd sjt xsg
szb: zzz tqz xnt
vpf: rpn znq
fxj: vcb
rlp: rzn bxb sxb
txs: slt bpz
smm: bql fvc jxr bzk
vtm: xhx gdg
tqg: rbd dgk
ljp: bzk hbt xjt glv
nzq: jmm mpn mbm
ttc: mmq blx
shb: knx rzz
nxq: pjb msv pmh jzr
gxv: qhx ggd ckc
dvj: mks gfc frr tvj
crt: nzp psh
drz: hvh gmg zxx gjf kgt qsr
jnp: nhg vzf vjr jzr
ttj: mrb mtc rvf cln rpb kgv
hfm: sgh
pjp: rgk gbr
hdf: sbl frr hns pct
bmd: xjf rms
zlq: vkf
kdb: msr cll hzz vvp
msr: nlt djd
fbt: qlc dbx lzt
rmx: ksv
flx: tmm qcd cbq
jjz: gpt llc nzn
jhv: ltf cvc pfm blb
rxp: skp svz llk kgs`;var Mn=Object.assign({"./advent/day01/solution.js":u1,"./advent/day02/solution.js":R1,"./advent/day03/solution.js":G1,"./advent/day04/solution.js":A1,"./advent/day05/solution.js":X1,"./advent/day06/solution.js":y1,"./advent/day07/solution.js":I1,"./advent/day08/solution.js":n2,"./advent/day09/solution.js":J2,"./advent/day10/solution.js":f2,"./advent/day11/solution.js":g2,"./advent/day12/solution.js":p2,"./advent/day13/solution.js":z2,"./advent/day14/solution.js":A2,"./advent/day15/solution.js":X2,"./advent/day16/solution.js":U2,"./advent/day17/solution.js":Y2,"./advent/day18/solution.js":t3,"./advent/day19/solution.js":J3,"./advent/day20/solution.js":f3,"./advent/day21/solution.js":g3,"./advent/day22/solution.js":p3,"./advent/day23/solution.js":z3,"./advent/day24/solution.js":k3,"./advent/day25/solution.js":T3}),jn=Object.assign({"./advent/day01/input-test.txt":K3,"./advent/day01/input-test2.txt":Q3,"./advent/day01/input.txt":R3,"./advent/day02/input-test.txt":C3,"./advent/day02/input.txt":_3,"./advent/day03/input-test.txt":D3,"./advent/day03/input.txt":G3,"./advent/day04/input-test.txt":B3,"./advent/day04/input.txt":M3,"./advent/day05/input-test.txt":w3,"./advent/day05/input.txt":A3,"./advent/day06/input-test.txt":S3,"./advent/day06/input.txt":H3,"./advent/day07/input-test.txt":V3,"./advent/day07/input.txt":X3,"./advent/day08/input-test.txt":P3,"./advent/day08/input-test2.txt":N3,"./advent/day08/input-test3.txt":y3,"./advent/day08/input.txt":U3,"./advent/day09/input-test.txt":E3,"./advent/day09/input.txt":$3,"./advent/day10/input-test.txt":I3,"./advent/day10/input-test2.txt":Z3,"./advent/day10/input.txt":W3,"./advent/day11/input-test.txt":Y3,"./advent/day11/input.txt":n7,"./advent/day12/input-test.txt":e7,"./advent/day12/input.txt":r7,"./advent/day13/input-test.txt":t7,"./advent/day13/input.txt":J7,"./advent/day14/input-test.txt":L7,"./advent/day14/input.txt":s7,"./advent/day15/input-test.txt":F7,"./advent/day15/input.txt":f7,"./advent/day16/input-test.txt":v7,"./advent/day16/input.txt":l7,"./advent/day17/input-test.txt":d7,"./advent/day17/input.txt":g7,"./advent/day18/input-test.txt":h7,"./advent/day18/input.txt":b7,"./advent/day19/input-test.txt":c7,"./advent/day19/input.txt":p7,"./advent/day20/input-test.txt":m7,"./advent/day20/input-test2.txt":a7,"./advent/day20/input.txt":O7,"./advent/day21/input-test.txt":z7,"./advent/day21/input.txt":x7,"./advent/day22/input-test.txt":i7,"./advent/day22/input.txt":o7,"./advent/day23/input-test.txt":k7,"./advent/day23/input.txt":j7,"./advent/day24/input-test.txt":q7,"./advent/day24/input.txt":u7,"./advent/day25/input-test.txt":T7,"./advent/day25/input.txt":K7});function L1(t,n,r,s){this.day=t||"01",this.input=r||"",this.testInputs=s||[""],this.part1=n.part1||null,this.part2=n.part2||null,this.knownAnswers=(n.knownAnswers||[]).map(e=>String(e))}function Q7(){var t={},n={},r={};Object.keys(Mn).forEach(J=>{var L=/day(\d+)/.exec(J)[1];t[L]=Mn[J]||null}),Object.keys(jn).forEach(J=>{var L=/day(\d+)/.exec(J)[1];J.includes("test")?(r[L]=r[L]||[],r[L].push(jn[J]||"")):n[L]=jn[J]||""});var s={},e=Object.keys(t).sort();return e.forEach(J=>{var L=t[J]||{},F=n[J]||"",f=r[J]||[];s[J]=new L1(J,L,F,f)}),s}const R7=Object.freeze(Object.defineProperty({__proto__:null,DayData:L1,getDataByDay:Q7},Symbol.toStringTag,{value:"Module"}));function wn(t,n,r){const s=t.slice();return s[28]=n[r],s[30]=r,s}function An(t,n,r){const s=t.slice();return s[31]=n[r],s}function Sn(t){let n,r=t[31]+"",s,e,J;function L(){return t[12](t[31])}return{c(){n=R("button"),s=gn(r),K(n,"class","button svelte-gd9guy"),U(n,"current",t[31]===t[2])},m(F,f){zn(F,n,f),q(n,s),e||(J=[y(n,"keydown",null),y(n,"click",L)],e=!0)},p(F,f){t=F,f[0]&2&&r!==(r=t[31]+"")&&qn(s,r),f[0]&6&&U(n,"current",t[31]===t[2])},d(F){F&&bn(n),e=!1,nn(J)}}}function Hn(t){let n,r,s;return{c(){n=R("button"),n.textContent="run all",K(n,"class","button run-all-button svelte-gd9guy")},m(e,J){zn(e,n,J),r||(s=[y(n,"keydown",null),y(n,"click",t[11])],r=!0)},p:vn,d(e){e&&bn(n),r=!1,nn(s)}}}function Vn(t){let n,r,s;function e(){return t[16](t[30])}return{c(){n=R("button"),n.textContent=`Test ${t[30]+1}`,K(n,"class","button input-toggle svelte-gd9guy"),U(n,"current",t[4]===t[30])},m(J,L){zn(J,n,L),r||(s=[y(n,"keydown",null),y(n,"click",e)],r=!0)},p(J,L){t=J,L[0]&16&&U(n,"current",t[4]===t[30])},d(J){J&&bn(n),r=!1,nn(s)}}}function C7(t){let n,r,s,e,J,L,F,f,v,d,g,l,h,c=t[7][0]+"",m,b,a,p,O,i,o,z,k,u=t[7][1]+"",V,X,C,E,en,M,j,Q,_,w,G,I,D,P,cn,rn,ln,W,Rn,Y,xn,Cn,tn=pn(t[1]),S=[];for(let x=0;x<tn.length;x+=1)S[x]=Sn(An(t,tn,x));let N=t[1].length>1&&Hn(t),Jn=pn({length:t[3]}),H=[];for(let x=0;x<Jn.length;x+=1)H[x]=Vn(wn(t,Jn,x));return{c(){n=R("div"),r=R("h2"),r.textContent="Advent 2023",s=A(),e=R("div"),J=R("div"),J.innerHTML='<h4 class="svelte-gd9guy">Days:</h4>',L=A(),F=R("div");for(let x=0;x<S.length;x+=1)S[x].c();f=A(),N&&N.c(),v=A(),d=R("div"),g=R("h4"),g.textContent="Part 1:",l=A(),h=R("div"),m=gn(c),b=A(),a=R("textarea"),O=A(),i=R("div"),o=R("h4"),o.textContent="Part 2:",z=A(),k=R("div"),V=gn(u),X=A(),C=R("textarea"),en=A(),M=R("div"),j=R("h4"),j.textContent="Input:",Q=A(),_=R("br"),w=A(),G=R("button"),G.textContent="Real",I=A();for(let x=0;x<H.length;x+=1)H[x].c();D=A(),P=R("textarea"),cn=A(),rn=R("div"),ln=A(),W=R("div"),Rn=gn(`Catch errors
      `),Y=R("button"),Y.textContent="x",K(J,"class","label svelte-gd9guy"),K(F,"class","day-list"),K(g,"class","svelte-gd9guy"),K(h,"class","time svelte-gd9guy"),K(d,"class","label svelte-gd9guy"),K(a,"name","output1"),K(a,"id","output1"),K(a,"rows",p=mn(t[6][0])),K(a,"class","svelte-gd9guy"),U(a,"known-good",t[8][0]),K(o,"class","svelte-gd9guy"),K(k,"class","time svelte-gd9guy"),K(i,"class","label svelte-gd9guy"),K(C,"name","output2"),K(C,"id","output2"),K(C,"rows",E=mn(t[6][1])),K(C,"class","svelte-gd9guy"),U(C,"known-good",t[8][1]),K(j,"class","svelte-gd9guy"),K(G,"class","button input-toggle svelte-gd9guy"),U(G,"current",t[4]===-1),K(M,"class","label svelte-gd9guy"),d1(M,"align-self","flex-start"),K(P,"name","input"),K(P,"id","input"),K(P,"rows","14"),K(P,"class","svelte-gd9guy"),K(Y,"class","button input-toggle catch-button svelte-gd9guy"),U(Y,"current",t[5]),K(W,"class","catch-area svelte-gd9guy"),K(e,"class","layout svelte-gd9guy"),K(n,"class","outer svelte-gd9guy")},m(x,B){zn(x,n,B),q(n,r),q(n,s),q(n,e),q(e,J),q(e,L),q(e,F);for(let T=0;T<S.length;T+=1)S[T]&&S[T].m(F,null);q(F,f),N&&N.m(F,null),q(e,v),q(e,d),q(d,g),q(d,l),q(d,h),q(h,m),q(e,b),q(e,a),Ln(a,t[6][0]),q(e,O),q(e,i),q(i,o),q(i,z),q(i,k),q(k,V),q(e,X),q(e,C),Ln(C,t[6][1]),q(e,en),q(e,M),q(M,j),q(M,Q),q(M,_),q(M,w),q(M,G),q(M,I);for(let T=0;T<H.length;T+=1)H[T]&&H[T].m(M,null);q(e,D),q(e,P),Ln(P,t[0]),q(e,cn),q(e,rn),q(e,ln),q(e,W),q(W,Rn),q(W,Y),xn||(Cn=[y(a,"input",t[13]),y(C,"input",t[14]),y(G,"keydown",null),y(G,"click",t[15]),y(P,"input",t[17]),y(Y,"keydown",null),y(Y,"click",t[18])],xn=!0)},p(x,B){if(B[0]&518){tn=pn(x[1]);let T;for(T=0;T<tn.length;T+=1){const dn=An(x,tn,T);S[T]?S[T].p(dn,B):(S[T]=Sn(dn),S[T].c(),S[T].m(F,f))}for(;T<S.length;T+=1)S[T].d(1);S.length=tn.length}if(x[1].length>1?N?N.p(x,B):(N=Hn(x),N.c(),N.m(F,null)):N&&(N.d(1),N=null),B[0]&128&&c!==(c=x[7][0]+"")&&qn(m,c),B[0]&64&&p!==(p=mn(x[6][0]))&&K(a,"rows",p),B[0]&64&&Ln(a,x[6][0]),B[0]&256&&U(a,"known-good",x[8][0]),B[0]&128&&u!==(u=x[7][1]+"")&&qn(V,u),B[0]&64&&E!==(E=mn(x[6][1]))&&K(C,"rows",E),B[0]&64&&Ln(C,x[6][1]),B[0]&256&&U(C,"known-good",x[8][1]),B[0]&16&&U(G,"current",x[4]===-1),B[0]&1048){Jn=pn({length:x[3]});let T;for(T=0;T<Jn.length;T+=1){const dn=wn(x,Jn,T);H[T]?H[T].p(dn,B):(H[T]=Vn(dn),H[T].c(),H[T].m(M,null))}for(;T<H.length;T+=1)H[T].d(1);H.length=Jn.length}B[0]&1&&Ln(P,x[0]),B[0]&32&&U(Y,"current",x[5])},i:vn,o:vn,d(x){x&&bn(n),Dn(S,x),N&&N.d(),Dn(H,x),xn=!1,nn(Cn)}}}function mn(t){var n=String(t||"").split(`
`).length;return Math.min(n,Math.max(n,1,10))}function _7(t,n,r){var s=j=>new Promise(Q=>setTimeout(Q,j)),e={},J=[],L="xx",F="",f=1,v=-1,d=!0,g=["",""],l=["",""],h=[!1,!1];function c(j=""){j&&r(2,L=j);var Q=e[L];r(3,f=Q.testInputs.length),v>f-1&&r(4,v=f-1),r(0,F=v<0?Q?.input:Q?.testInputs[v]),p()}function m(j=""){F&&p()}function b(j=-1){r(4,v=j),c()}var a=!1;async function p(){if(!a){a=!0,r(6,g=["",""]),r(7,l=["",""]),await s(10);for(var j=1;j<=2;j++){var[Q,_]=O(L,j,F),w=z(L,j,Q,v);i(j,Q,_,w),await s(1)}a=!1}}function O(j="",Q=1,_=""){var w=(e[j]||{})["part"+Q];if(!w)return["",-999];var G=performance.now();if(d)try{return[w(_),performance.now()-G]}catch(P){var I=String(P),D=/:(\d+:\d+)\)/.exec(P.stack||"");return D&&(I=`(${D[1]}) ${I}`),[I,performance.now()-G]}else return[w(_),performance.now()-G]}function i(j=1,Q="",_=0,w=!1){r(6,g[j-1]=Q,g),r(7,l[j-1]=_<0?"":`(${Math.round(_)}ms)`,l),r(6,g),r(7,l),r(8,h[j-1]=w,h),r(8,h)}async function o(){var W;if(!a){a=!0;var j=["",""],Q=[0,0],_=[!0,!0];r(4,v=-1),r(0,F=""),await s(10);for(var w=0;w<J.length;w++)for(var G=J[w],I=e[G],D=1;D<3;D++){var P=I?.input,[cn,rn]=O(G,D,P||""),ln=rn>=0&&z(G,D,cn);_[W=D-1]&&(_[W]=ln),j[D-1]+=ln?"★":"ー",rn>=0&&(Q[D-1]+=rn),i(D,j[D-1],Q[D-1],_[D-1]),await s(1)}r(8,h=_),a=!1}}function z(j="",Q=1,_="",w=-1){var G=e[j]?.knownAnswers||[],I=2+2*w+(Q===1?0:1),D=String(G[I]||"");return!!(D&&D===String(_))}var k=(j,Q)=>{!j||!j.getDataByDay||(e=j.getDataByDay(),r(1,J=Object.keys(e).filter(_=>!!e[_].part1).sort()),c(Q?J.at(-1):""))};k(R7,!0);const u=j=>c(j);function V(){g[0]=this.value,r(6,g)}function X(){g[1]=this.value,r(6,g)}const C=()=>b(-1),E=j=>b(j);function en(){F=this.value,r(0,F)}const M=()=>{r(5,d=!d)};return t.$$.update=()=>{t.$$.dirty[0]&1&&m(F)},[F,J,L,f,v,d,g,l,h,c,b,o,u,V,X,C,E,en,M]}class D7 extends i1{constructor(n){super(),x1(this,n,_7,C7,f1,{},null,[-1,-1])}}new D7({target:document.querySelector(".app")});
