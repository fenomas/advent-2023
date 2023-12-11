var w7=Object.defineProperty;var y7=(e,n,J)=>n in e?w7(e,n,{enumerable:!0,configurable:!0,writable:!0,value:J}):e[n]=J;var b7=(e,n,J)=>(y7(e,typeof n!="symbol"?n+"":n,J),J);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const F of document.querySelectorAll('link[rel="modulepreload"]'))l(F);new MutationObserver(F=>{for(const L of F)if(L.type==="childList")for(const t of L.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&l(t)}).observe(document,{childList:!0,subtree:!0});function J(F){const L={};return F.integrity&&(L.integrity=F.integrity),F.referrerPolicy&&(L.referrerPolicy=F.referrerPolicy),F.crossOrigin==="use-credentials"?L.credentials="include":F.crossOrigin==="anonymous"?L.credentials="omit":L.credentials="same-origin",L}function l(F){if(F.ep)return;F.ep=!0;const L=J(F);fetch(F.href,L)}})();function L7(){}function D7(e){return e()}function j7(){return Object.create(null)}function y(e){e.forEach(D7)}function A7(e){return typeof e=="function"}function O7(e,n){return e!=e?n==n:e!==n||e&&typeof e=="object"||typeof e=="function"}function $7(e){return Object.keys(e).length===0}function u(e,n){e.appendChild(n)}function h7(e,n,J){e.insertBefore(n,J||null)}function i7(e){e.parentNode&&e.parentNode.removeChild(e)}function C7(e,n){for(let J=0;J<e.length;J+=1)e[J]&&e[J].d(n)}function T(e){return document.createElement(e)}function l7(e){return document.createTextNode(e)}function q(){return l7(" ")}function H(e,n,J,l){return e.addEventListener(n,J,l),()=>e.removeEventListener(n,J,l)}function c(e,n,J){J==null?e.removeAttribute(n):e.getAttribute(n)!==J&&e.setAttribute(n,J)}function E7(e){return Array.from(e.childNodes)}function m7(e,n){n=""+n,e.data!==n&&(e.data=n)}function Y(e,n){e.value=n??""}function Z7(e,n,J,l){J==null?e.style.removeProperty(n):e.style.setProperty(n,J,l?"important":"")}function V(e,n,J){e.classList.toggle(n,!!J)}let K7;function d7(e){K7=e}const e7=[],_7=[];let J7=[];const z7=[],I7=Promise.resolve();let T7=!1;function U7(){T7||(T7=!0,I7.then(H7))}function x7(e){J7.push(e)}const c7=new Set;let n7=0;function H7(){if(n7!==0)return;const e=K7;do{try{for(;n7<e7.length;){const n=e7[n7];n7++,d7(n),W7(n.$$)}}catch(n){throw e7.length=0,n7=0,n}for(d7(null),e7.length=0,n7=0;_7.length;)_7.pop()();for(let n=0;n<J7.length;n+=1){const J=J7[n];c7.has(J)||(c7.add(J),J())}J7.length=0}while(e7.length);for(;z7.length;)z7.pop()();T7=!1,c7.clear(),d7(e)}function W7(e){if(e.fragment!==null){e.update(),y(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(x7)}}function Y7(e){const n=[],J=[];J7.forEach(l=>e.indexOf(l)===-1?n.push(l):J.push(l)),J.forEach(l=>l()),J7=n}const nn=new Set;function en(e,n){e&&e.i&&(nn.delete(e),e.i(n))}function v7(e){return e?.length!==void 0?e:Array.from(e)}function Jn(e,n,J){const{fragment:l,after_update:F}=e.$$;l&&l.m(n,J),x7(()=>{const L=e.$$.on_mount.map(D7).filter(A7);e.$$.on_destroy?e.$$.on_destroy.push(...L):y(L),e.$$.on_mount=[]}),F.forEach(x7)}function Ln(e,n){const J=e.$$;J.fragment!==null&&(Y7(J.after_update),y(J.on_destroy),J.fragment&&J.fragment.d(n),J.on_destroy=J.fragment=null,J.ctx=[])}function Fn(e,n){e.$$.dirty[0]===-1&&(e7.push(e),U7(),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function rn(e,n,J,l,F,L,t=null,r=[-1]){const d=K7;d7(e);const s=e.$$={fragment:null,ctx:[],props:L,update:L7,not_equal:F,bound:j7(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:j7(),dirty:r,skip_bound:!1,root:n.target||d.$$.root};t&&t(s.root);let i=!1;if(s.ctx=J?J(e,n.props||{},(g,o,...f)=>{const a=f.length?f[0]:o;return s.ctx&&F(s.ctx[g],s.ctx[g]=a)&&(!s.skip_bound&&s.bound[g]&&s.bound[g](a),i&&Fn(e,g)),o}):[],s.update(),i=!0,y(s.before_update),s.fragment=l?l(s.ctx):!1,n.target){if(n.hydrate){const g=E7(n.target);s.fragment&&s.fragment.l(g),g.forEach(i7)}else s.fragment&&s.fragment.c();n.intro&&en(e.$$.fragment),Jn(e,n.target,n.anchor),H7()}d7(d)}class tn{constructor(){b7(this,"$$");b7(this,"$$set")}$destroy(){Ln(this,1),this.$destroy=L7}$on(n,J){if(!A7(J))return L7;const l=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return l.push(J),()=>{const F=l.indexOf(J);F!==-1&&l.splice(F,1)}}$set(n){this.$$set&&!$7(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const sn="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(sn);var ln=[54304,54418,142,,,281];function dn(e=""){return e.split(/\n/).reduce((n,J)=>{var l=J.split("").filter(F=>/\d/.test(F));return n+parseInt(l[0]+l.at(-1))||0},0)}function gn(e=""){var n=[..."0123456789".split(""),"zero","one","two","three","four","five","six","seven","eight","nine"];return e.split(/\n/).reduce((J,l)=>{var F=-1,L=1/0,t=-1,r=-1;return n.forEach((d,s)=>{var i=l.indexOf(d);i>-1&&i<L&&(L=i,F=s%10);var g=l.lastIndexOf(d);g>-1&&g>r&&(r=g,t=s%10)}),J+parseInt(F+""+t)},0)}const on=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:ln,part1:dn,part2:gn},Symbol.toStringTag,{value:"Module"}));var fn=[2727,56580,8,2286];function vn(e=""){var n=0,J={red:12,green:13,blue:14};return e.split(`
`).forEach(l=>{var[F,L]=l.split(":"),t=L.split(";").every(r=>r.split(",").every(d=>{var[,s,i]=/(\d+)\s+(\S+)/.exec(d);return J[i]?parseInt(s)<=J[i]:!0}));t&&(n+=parseInt(/\d+/.exec(F)[0]))}),n}function un(e=""){var n=0;return e.split(`
`).forEach(J=>{var l={red:0,green:0,blue:0},[,F]=J.split(":");F.split(";").forEach(L=>{L.split(",").forEach(t=>{var[,r,d]=/(\d+)\s+(\S+)/.exec(t),s=parseInt(r);s>l[d]&&(l[d]=s)})}),n+=l.red*l.green*l.blue}),n}const hn=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:fn,part1:vn,part2:un},Symbol.toStringTag,{value:"Module"}));var an=[539637,82818007,4361,467835];function bn(e=""){var n=[],J=[];e.split(`
`).forEach((F,L)=>{n[L]=[],J[L]=[];for(var t=0;t<F.length;t++){var r=F[t];if(r!==".")if(/\d/.test(r)){var d=parseInt(F.substring(t)),s=String(d).length;n[L].push({y:L,x:t,value:d,len:s}),t+=s-1}else J[L].push({y:L,x:t})}});var l=0;return n.forEach(F=>{F.forEach(L=>{for(var t=L.y-1;t<L.y+2;t++){var r=J[t]||[],d=r.some(s=>{if(!(s.x<L.x-1)&&!(s.x>L.x+L.len))return!0});if(d){l+=L.value;return}}})}),l}function cn(e=""){var n=[],J=[];e.split(`
`).forEach((F,L)=>{n[L]=[],J[L]=[];for(var t=0;t<F.length;t++){var r=F[t];if(r!==".")if(/\d/.test(r)){var d=parseInt(F.substring(t)),s=String(d).length;n[L].push({y:L,x:t,value:d,len:s}),t+=s-1}else r==="*"&&J[L].push({y:L,x:t})}});var l=0;return J.forEach(F=>{F.forEach(L=>{for(var t=0,r=1,d=L.y-1;d<L.y+2;d++){var s=n[d]||[];s.forEach(i=>{L.x<i.x-1||L.x>i.x+i.len||(t++,r*=i.value)})}t===2&&(l+=r)})}),l}const pn=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:an,part1:bn,part2:cn},Symbol.toStringTag,{value:"Module"}));var mn=[26443,6284877,13,30];function Tn(e=""){var n=0;return e.split(`
`).forEach((J,l)=>{var F=J.split(":")[1].split("|"),L=F[0].trim().split(/\s+/).map(d=>parseInt(d)),t=F[1].trim().split(/\s+/).map(d=>parseInt(d)),r=t.reduce((d,s)=>d+(L.includes(s)?1:0),0);r>0&&(n+=Math.pow(2,r-1))}),n}function xn(e=""){var n=e.split(`
`).map((F,L)=>{var t=F.split(":")[1].split("|"),r=t[0].trim().split(/\s+/).map(i=>parseInt(i)),d=t[1].trim().split(/\s+/).map(i=>parseInt(i)),s=d.reduce((i,g)=>i+(r.includes(g)?1:0),0);return s>0&&(J+=Math.pow(2,s-1)),s}),J=0,l=[];return n.forEach((F,L)=>{for(var t=1+(l[L]||0),r=n[L],d=0;d<r;d++){var s=L+1+d;l[s]=(l[s]||0)+t}J+=t}),J}const Kn=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:mn,part1:Tn,part2:xn},Symbol.toStringTag,{value:"Module"}));var Qn=[525792406,79004094,35,46];function kn(e=""){var n=[],J=null;e.split(`
`).forEach((F,L)=>{if(/:/.test(F)){var[,t]=F.split(":");n.push(J=[]),F=t}var r=F.trim().split(/\s+/).filter(d=>d).map(d=>parseInt(d));r.length>0&&J.push(r)});var l=n.shift()[0];return n.forEach(F=>{var L={};F.forEach(([t,r,d])=>{l.forEach((s,i)=>{L[i]||s>=r&&s<r+d&&(l[i]+=t-r,L[i]=!0)})})}),l.reduce((F,L)=>Math.min(F,L),1/0)}function jn(e=""){var n,J=[],l;e.split(`
`).forEach((r,d)=>{if(/:/.test(r)){var[,s]=r.split(":");if(!n){n=s.trim().split(/\s+/).map(f=>parseInt(f));return}J.push(l=[]),r=s}if(r=r.trim(),!!r){var[i,g,o]=r.split(/\s+/).map(f=>parseInt(f));l.push([g,g+o,i-g])}}),J.forEach(r=>{r.sort((d,s)=>d[0]-s[0])});for(var F=1/0,L=(r,d,s=0)=>{if(s>=J.length){r<F&&(F=r);return}var i=J[s];i.some(([g,o,f])=>{if(!(r>=o)){if(d<=g)return!0;r<g&&(L(r,g,s+1),r=g);var a=Math.min(d,o);L(r+f,a+f,s+1),r=a}}),r<d&&L(r,d,s+1)},t=0;t<n.length;t+=2)L(n[t],n[t]+n[t+1]);return F}const Cn=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:Qn,part1:kn,part2:jn},Symbol.toStringTag,{value:"Module"}));var _n=[1195150,42550411,288,71503];function X7(e=""){var n=e.split(`
`).map(L=>{var t=L.split(":")[1];return t.trim().split(/\s+/).map(r=>parseInt(r))}),[J,l]=n,F=1;return J.forEach((L,t)=>{var r=-L,d=l[t],s=Math.sqrt(r*r-4*d),i=(-r-s)/2,g=(-r+s)/2,o=1e-5,f=Math.floor(g-o)-Math.ceil(i+o)+1;F*=f}),F}function zn(e=""){return X7(e.replace(/ /g,""))}const qn=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:_n,part1:X7,part2:zn},Symbol.toStringTag,{value:"Module"}));var Rn=[249726565,251135960,6440,5905];function Gn(e=""){var n="23456789TJQKA".split(""),J={};n.forEach((F,L)=>{J[F]=String.fromCharCode(65+L)});var l=e.split(`
`).map(F=>{var[L,t]=F.trim().split(/\s+/),r=parseInt(t),d=L.split("").map(g=>J[g]),s={};d.forEach(g=>{s[g]=(s[g]||0)+1});var i=Object.keys(s).map(g=>s[g]).sort((g,o)=>o-g);return i.push(0,0),{chars:d,bid:r,ctList:i}});return l.sort((F,L)=>{for(var t=0;t<2;t++)if(F.ctList[t]!==L.ctList[t])return F.ctList[t]-L.ctList[t];for(var r=0;r<5;r++){var d=F.chars[r],s=L.chars[r];if(d!==s)return d>s?1:-1}return 0}),l.reduce((F,{bid:L},t)=>F+L*(t+1),0)}function Bn(e=""){var n="J23456789TQKA".split(""),J={};n.forEach((F,L)=>{J[F]=String.fromCharCode(65+L)});var l=e.split(`
`).map(F=>{var[L,t]=F.trim().split(/\s+/),r=parseInt(t),d=L.split("").map(o=>J[o]),s={},i=0;d.forEach(o=>{if(o==="A"){i++;return}s[o]=(s[o]||0)+1});var g=Object.keys(s).map(o=>s[o]).sort((o,f)=>f-o);return g.push(0,0),g[0]+=i,{chars:d,bid:r,ctList:g,hand:L}});return l.sort((F,L)=>{for(var t=0;t<2;t++)if(F.ctList[t]!==L.ctList[t])return F.ctList[t]-L.ctList[t];for(var r=0;r<5;r++){var d=F.chars[r],s=L.chars[r];if(d!==s)return d>s?1:-1}return 0}),l.reduce((F,{bid:L},t)=>F+L*(t+1),0)}const Sn=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:Rn,part1:Gn,part2:Bn},Symbol.toStringTag,{value:"Module"}));var Mn=[18673,17972669116327,2,,6,,,6];function Dn(e=""){var n={},J=e.split(`
`).map(r=>{if(r=r.trim(),!!r){if(!r.includes("="))return r.split("");var[,d,s,i]=/(\S+) = \((\S+), (\S+)\)/.exec(r);n[d]={L:s,R:i}}}),l=J.shift(),F="AAA";if(!n[F])return-1;for(var L=0,t=0;L<1e7;L++){if(F==="ZZZ")return L;F=n[F][l[t]],t=(t+1)%l.length}return-1}function An(e=""){var n={},J=[],l={},F=e.split(`
`).map(i=>{if(i=i.trim(),!!i){if(!i.includes("="))return i.split("");var[,g,o,f]=/(\S+) = \((\S+), (\S+)\)/.exec(i);/..A/.test(g)&&J.push(g),/..Z/.test(g)&&(l[g]=!0),n[g]={L:o,R:f}}}),L=F.shift(),t=J.map(i=>{for(var g=0,o=0;g<1e7;g++){if(i in l)return g;i=n[i][L[o]],o=(o+1)%L.length}});t.sort((i,g)=>i-g);for(var r=t.pop();t.length>0;)for(var d=r,s=t.pop();r%s!==0;)r+=d;return r}const Hn=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:Mn,part1:Dn,part2:An},Symbol.toStringTag,{value:"Module"}));var Xn=[1772145754,867,114,2];function Vn(e=""){var n=(J=[1,1])=>{if(J.length<2)return NaN;for(var l=!0,F=[],L=1;L<J.length;L++){var t=J[L]-J[L-1];l&&(l=t===0),F.push(t)}var r=l?0:n(F);return r+J.at(-1)};return e.split(`
`).reduce((J,l)=>{var F=l.trim().split(/\s+/).map(L=>parseInt(L));return J+=n(F)},0)}function Pn(e=""){var n=(J=[1,1])=>{if(J.length<2)return NaN;for(var l=!0,F=[],L=1;L<J.length;L++){var t=J[L]-J[L-1];l&&(l=t===0),F.push(t)}var r=l?0:n(F);return J[0]-r};return e.split(`
`).reduce((J,l)=>{var F=l.trim().split(/\s+/).map(L=>parseInt(L));return J+=n(F)},0)}const Nn=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:Xn,part1:Vn,part2:Pn},Symbol.toStringTag,{value:"Module"}));var wn=[6757,523,8,,,10];function V7(e=""){var n=[],J=[0,0];e.split(`
`).forEach((d,s)=>{n[s]=[],d.trim().split("").forEach((i,g)=>{i==="S"&&(J=[s,g]),n[s].push({x:g,y:s,char:i})})},0);var l=n.length,F=n[0].length,L=(d,s)=>d<0||d>=l||s<0||s>=F?null:n[d][s],t=L(...J),r=(d,s,i)=>{var g=L(d,s);if(g)for(var o=[g],f=0,a=(Q,m,R)=>{var _=L(Q,m);_&&i(p,_,R)&&o.push(_)};o.length>0&&f++<1e6;){var p=o.pop();a(p.y-1,p.x,0),a(p.y+1,p.x,2),a(p.y,p.x+1,1),a(p.y,p.x-1,3)}};return{start:t,sx:F,sy:l,getAt:L,flood:r}}function yn(e=""){var{start:n,sx:J,sy:l,getAt:F,flood:L}=V7(e),t={"|":[0,2],"-":[1,3],L:[0,1],J:[0,3],7:[2,3],F:[1,2],S:[0,1,2,3]},r=0;return L(n.y,n.x,(d,s,i)=>{if(d.seen=!0,s.seen)return!1;var g=t[d.char]||[];if(!g.includes(i))return!1;var o=t[s.char]||[],f=(i+2)%4;return o.includes(f)?(r++,!0):!1}),r/2}function On(e=""){var{start:n,sx:J,sy:l,getAt:F,flood:L}=V7(e),t={"|":[0,2],"-":[1,3],L:[0,1],J:[0,3],7:[2,3],F:[1,2],S:[0,1,2,3]},r=[],d=[],s=(o,f,a,p)=>{a%2===0&&(o+=a-1),a%2===1&&(f+=2-a);var Q=F(o,f);Q&&!Q.seen&&p.push(Q)};L(n.y,n.x,(o,f,a)=>{if(o.seen=!0,f.seen)return!1;var p=t[o.char]||[];if(!p.includes(a))return!1;var Q=t[f.char]||[];if(!Q.includes((a+2)%4))return!1;if(o===n)return!0;for(var m=p[(p.indexOf(a)+1)%2],R=d,_=1;_<4;_++){var X=(a+_)%4;if(X===m){R=r;continue}s(o.y,o.x,X,R)}return!0});var i=o=>{var f=0,a=!1;return o.forEach(p=>{p.seen||L(p.y,p.x,(Q,m)=>{if(Q.seen)return!1;Q.seen=!0,f++;var{y:R,x:_}=Q;return(_===0||_===J-1)&&(a=!0),(R===0||R===l-1)&&(a=!0),!m.seen})}),{ct:f,borderSeen:a}},g=i(r);return g.borderSeen&&(g=i(d)),g.ct}const $n=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:wn,part1:yn,part2:On},Symbol.toStringTag,{value:"Module"}));var En=[9623138,726820169514,374,82000210];function P7(e=""){var n=[],J=[],l=[];e.split(`
`).forEach((r,d)=>{if(r=r.trim(),!!r){n.length===0&&(n.length=r.length,n.fill(!0)),J[d]=!0;for(var s=-1;s=r.indexOf("#",s),!(s<0);)n[s]=!1,J[d]=!1,l.push({x:s,y:d}),s++}});var F=0,L=n.map(r=>r?++F:F);F=0;var t=J.map(r=>r?++F:F);return l.forEach(r=>{r.emptyLeft=L[r.x],r.emptyAbove=t[r.y]}),{locs:l}}function Zn(e=""){for(var{locs:n}=P7(e),J=(t,r)=>{var d=n[t],s=n[r],i=Math.abs(d.x-s.x),g=Math.abs(d.y-s.y),o=Math.abs(d.emptyLeft-s.emptyLeft),f=Math.abs(d.emptyAbove-s.emptyAbove);return i+g+o+f},l=0,F=0;F<n.length;F++)for(var L=F+1;L<n.length;L++)l+=J(F,L);return l}function In(e=""){for(var{locs:n}=P7(e),J=999999,l=(r,d)=>{var s=n[r],i=n[d],g=Math.abs(s.x-i.x),o=Math.abs(s.y-i.y),f=Math.abs(s.emptyLeft-i.emptyLeft)*J,a=Math.abs(s.emptyAbove-i.emptyAbove)*J;return g+o+f+a},F=0,L=0;L<n.length;L++)for(var t=L+1;t<n.length;t++)F+=l(L,t);return F}const Un=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:En,part1:Zn,part2:In},Symbol.toStringTag,{value:"Module"})),Wn=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Yn=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),n1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),e1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),J1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),L1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),F1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),r1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),t1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),s1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),l1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),d1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),i1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),g1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),o1=`1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`,f1=`two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`,v1=`8eight1
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
8four419eighteight1bpv`,u1=`Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`,h1=`Game 1: 3 blue, 2 green, 6 red; 17 green, 4 red, 8 blue; 2 red, 1 green, 10 blue; 1 blue, 5 green
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
Game 100: 8 blue, 6 green, 8 red; 7 red, 2 blue; 2 red, 10 green, 10 blue; 9 green, 7 red; 3 red, 7 green, 1 blue`,a1=`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`,b1=`...............776..............552........968..................589...26...........484..............958......186....546.........484.........
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
...............764.....................................488.....880.209........416..................183...156..........917...................`,c1=`Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`,p1=`Card   1: 79 93 21 74 81 76 17 89  3  5 |  5 67 87 81 76 35 79 21 15 80  8 74 99 28  3 23 19 42 89 16 22 77 92 70 34
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
Card 218: 68 97 66 41 88 16 65 31 23 63 | 29 67 55 64 91  4 12 83  1 40 74 94 58 81 98 82 78 70 26 34 96 14 36 50 56`,m1=`seeds: 79 14 55 13

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
56 93 4`,T1=`seeds: 28965817 302170009 1752849261 48290258 804904201 243492043 2150339939 385349830 1267802202 350474859 2566296746 17565716 3543571814 291402104 447111316 279196488 3227221259 47952959 1828835733 9607836

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
2446452559 2629702985 182296534`,x1=`Time:      7  15   30
Distance:  9  40  200`,K1=`Time:        54     94     65     92
Distance:   302   1476   1029   1404`,Q1=`32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`,k1=`88223 818
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
55AA6 787`,j1=`RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`,C1=`LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`,_1=`LR

11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)
22A = (22B, XXX)
22B = (22C, 22C)
22C = (22Z, 22Z)
22Z = (22B, 22B)
XXX = (XXX, XXX)`,z1=`LRRLLRRLLRRRLRLRRLRLRLRRLRLRLRLLLRRRLRLRRLLRLRRRLRRRLRLRLRRRLLRRLLRLRLRRRLRLLRRRLRLLRLRRRLRLRRRLRRRLLRRRLLRRRLRRLRRRLLRRRLRRLRRLRRLLRLRRLRRLRRRLRLRLRLRLRLRRRLLRLRRLRLRRLLRRLLRLRRLRRRLRLRLRLRRRLRRLRRLRRLRRLRRLRLRRRLRRRLRRRLRLRLLRRLRRRLRRLRLRRRLRRLRRRLRRLLRRLLLRRRR

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
CMD = (HFJ, QRF)`,q1=`0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`,R1=`12 12 11 5 -5 -5 40 194 558 1278 2553 4643 7877 12661 19486 28936 41696 58560 80439 108369 143519
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
5 23 49 86 154 303 625 1278 2553 5048 10072 20498 42428 88236 181828 367312 722717 1380949 2560835 4611894 8077398`,G1=`7-F7-
.FJ|7
SJLL7
|F--J
LJ.LJ`,B1=`FF7FSF7F7F7F7F7F---7
L|LJ||||||||||||F--J
FL-7LJLJ||||||LJL-77
F--JF--7||LJLJ7F7FJ-
L---JF-JLJ.||-FJLJJ7
|F|F-JF---7F7-L7L|7|
|FFJF7L7F-JF7|JL---7
7-L-JL7||F7|L7F-7F7|
L.L7LFJ|||||FJL7||LJ
L7JLJL-JLJLJL--JLJ.L`,S1=`F-|-J7F7F7F-7F7F--7-L|-L7777.FFL-|.|.FF-FF7FFFFF7--F-J7.|-FF77|-F|777-F7.F7FF|-J7|-7.FFJ77FL.7-|-|7.|.77|-F-|-F|-FL.F77.FF-77|7.7--7--7FJ--7
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
LJJ..LL-JJ-L---7J-F77LL.LFJJLL-J-7JJ.L-LL7-L7.LLJL|JJF7-J-JLLJLLJ-7LJJ..LLJ-LJJ.LFL-FJJL|.FLLF-FL|LL.J.FL|-JJ.JJL--JLL--JJ.|J-L|J--J.L7..JJJ`,M1=`...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`,D1=`.......................................#..........................................................#......................................#..
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
..#.........#..........#.................#..........................................................#.......................................`,A1="",H1="",X1="",V1="",P1="",N1="",w1="",y1="",O1="",$1="",E1="",Z1="",I1="",U1="",W1="",Y1="",n2="",e2="",J2="",L2="",F2="",r2="",t2="",s2="",l2="",d2="",i2="",g2="";var q7=Object.assign({"./advent/day01/solution.js":on,"./advent/day02/solution.js":hn,"./advent/day03/solution.js":pn,"./advent/day04/solution.js":Kn,"./advent/day05/solution.js":Cn,"./advent/day06/solution.js":qn,"./advent/day07/solution.js":Sn,"./advent/day08/solution.js":Hn,"./advent/day09/solution.js":Nn,"./advent/day10/solution.js":$n,"./advent/day11/solution.js":Un,"./advent/day12/solution.js":Wn,"./advent/day13/solution.js":Yn,"./advent/day14/solution.js":n1,"./advent/day15/solution.js":e1,"./advent/day16/solution.js":J1,"./advent/day17/solution.js":L1,"./advent/day18/solution.js":F1,"./advent/day19/solution.js":r1,"./advent/day20/solution.js":t1,"./advent/day21/solution.js":s1,"./advent/day22/solution.js":l1,"./advent/day23/solution.js":d1,"./advent/day24/solution.js":i1,"./advent/day25/solution.js":g1}),p7=Object.assign({"./advent/day01/input-test.txt":o1,"./advent/day01/input-test2.txt":f1,"./advent/day01/input.txt":v1,"./advent/day02/input-test.txt":u1,"./advent/day02/input.txt":h1,"./advent/day03/input-test.txt":a1,"./advent/day03/input.txt":b1,"./advent/day04/input-test.txt":c1,"./advent/day04/input.txt":p1,"./advent/day05/input-test.txt":m1,"./advent/day05/input.txt":T1,"./advent/day06/input-test.txt":x1,"./advent/day06/input.txt":K1,"./advent/day07/input-test.txt":Q1,"./advent/day07/input.txt":k1,"./advent/day08/input-test.txt":j1,"./advent/day08/input-test2.txt":C1,"./advent/day08/input-test3.txt":_1,"./advent/day08/input.txt":z1,"./advent/day09/input-test.txt":q1,"./advent/day09/input.txt":R1,"./advent/day10/input-test.txt":G1,"./advent/day10/input-test2.txt":B1,"./advent/day10/input.txt":S1,"./advent/day11/input-test.txt":M1,"./advent/day11/input.txt":D1,"./advent/day12/input-test.txt":A1,"./advent/day12/input.txt":H1,"./advent/day13/input-test.txt":X1,"./advent/day13/input.txt":V1,"./advent/day14/input-test.txt":P1,"./advent/day14/input.txt":N1,"./advent/day15/input-test.txt":w1,"./advent/day15/input.txt":y1,"./advent/day16/input-test.txt":O1,"./advent/day16/input.txt":$1,"./advent/day17/input-test.txt":E1,"./advent/day17/input.txt":Z1,"./advent/day18/input-test.txt":I1,"./advent/day18/input.txt":U1,"./advent/day19/input-test.txt":W1,"./advent/day19/input.txt":Y1,"./advent/day20/input-test.txt":n2,"./advent/day20/input.txt":e2,"./advent/day21/input-test.txt":J2,"./advent/day21/input.txt":L2,"./advent/day22/input-test.txt":F2,"./advent/day22/input.txt":r2,"./advent/day23/input-test.txt":t2,"./advent/day23/input.txt":s2,"./advent/day24/input-test.txt":l2,"./advent/day24/input.txt":d2,"./advent/day25/input-test.txt":i2,"./advent/day25/input.txt":g2});function N7(e,n,J,l){this.day=e||"01",this.input=J||"",this.testInputs=l||[""],this.part1=n.part1||null,this.part2=n.part2||null,this.knownAnswers=(n.knownAnswers||[]).map(F=>String(F))}function o2(){var e={},n={},J={};Object.keys(q7).forEach(L=>{var t=/day(\d+)/.exec(L)[1];e[t]=q7[L]||null}),Object.keys(p7).forEach(L=>{var t=/day(\d+)/.exec(L)[1];L.includes("test")?(J[t]=J[t]||[],J[t].push(p7[L]||"")):n[t]=p7[L]||""});var l={},F=Object.keys(e).sort();return F.forEach(L=>{var t=e[L]||{},r=n[L]||"",d=J[L]||[];l[L]=new N7(L,t,r,d)}),l}const f2=Object.freeze(Object.defineProperty({__proto__:null,DayData:N7,getDataByDay:o2},Symbol.toStringTag,{value:"Module"}));function R7(e,n,J){const l=e.slice();return l[28]=n[J],l[30]=J,l}function G7(e,n,J){const l=e.slice();return l[31]=n[J],l}function B7(e){let n,J=e[31]+"",l,F,L;function t(){return e[12](e[31])}return{c(){n=T("button"),l=l7(J),c(n,"class","button svelte-gd9guy"),V(n,"current",e[31]===e[2])},m(r,d){h7(r,n,d),u(n,l),F||(L=[H(n,"keydown",null),H(n,"click",t)],F=!0)},p(r,d){e=r,d[0]&2&&J!==(J=e[31]+"")&&m7(l,J),d[0]&6&&V(n,"current",e[31]===e[2])},d(r){r&&i7(n),F=!1,y(L)}}}function S7(e){let n,J,l;return{c(){n=T("button"),n.textContent="run all",c(n,"class","button run-all-button svelte-gd9guy")},m(F,L){h7(F,n,L),J||(l=[H(n,"keydown",null),H(n,"click",e[11])],J=!0)},p:L7,d(F){F&&i7(n),J=!1,y(l)}}}function M7(e){let n,J,l;function F(){return e[16](e[30])}return{c(){n=T("button"),n.textContent=`Test ${e[30]+1}`,c(n,"class","button input-toggle svelte-gd9guy"),V(n,"current",e[4]===e[30])},m(L,t){h7(L,n,t),J||(l=[H(n,"keydown",null),H(n,"click",F)],J=!0)},p(L,t){e=L,t[0]&16&&V(n,"current",e[4]===e[30])},d(L){L&&i7(n),J=!1,y(l)}}}function v2(e){let n,J,l,F,L,t,r,d,s,i,g,o,f,a=e[7][0]+"",p,Q,m,R,_,X,O,F7,$,E=e[7][1]+"",r7,g7,S,Z,o7,M,h,x,k,z,j,P,K,D,f7,I,t7,N,Q7,w,a7,k7,U=v7(e[1]),G=[];for(let v=0;v<U.length;v+=1)G[v]=B7(G7(e,U,v));let A=e[1].length>1&&S7(e),W=v7({length:e[3]}),B=[];for(let v=0;v<W.length;v+=1)B[v]=M7(R7(e,W,v));return{c(){n=T("div"),J=T("h2"),J.textContent="Advent 2023",l=q(),F=T("div"),L=T("div"),L.innerHTML='<h4 class="svelte-gd9guy">Days:</h4>',t=q(),r=T("div");for(let v=0;v<G.length;v+=1)G[v].c();d=q(),A&&A.c(),s=q(),i=T("div"),g=T("h4"),g.textContent="Part 1:",o=q(),f=T("div"),p=l7(a),Q=q(),m=T("textarea"),_=q(),X=T("div"),O=T("h4"),O.textContent="Part 2:",F7=q(),$=T("div"),r7=l7(E),g7=q(),S=T("textarea"),o7=q(),M=T("div"),h=T("h4"),h.textContent="Input:",x=q(),k=T("br"),z=q(),j=T("button"),j.textContent="Real",P=q();for(let v=0;v<B.length;v+=1)B[v].c();K=q(),D=T("textarea"),f7=q(),I=T("div"),t7=q(),N=T("div"),Q7=l7(`Catch errors
      `),w=T("button"),w.textContent="x",c(L,"class","label svelte-gd9guy"),c(r,"class","day-list"),c(g,"class","svelte-gd9guy"),c(f,"class","time svelte-gd9guy"),c(i,"class","label svelte-gd9guy"),c(m,"name","output1"),c(m,"id","output1"),c(m,"rows",R=u7(e[6][0])),c(m,"class","svelte-gd9guy"),V(m,"known-good",e[8][0]),c(O,"class","svelte-gd9guy"),c($,"class","time svelte-gd9guy"),c(X,"class","label svelte-gd9guy"),c(S,"name","output2"),c(S,"id","output2"),c(S,"rows",Z=u7(e[6][1])),c(S,"class","svelte-gd9guy"),V(S,"known-good",e[8][1]),c(h,"class","svelte-gd9guy"),c(j,"class","button input-toggle svelte-gd9guy"),V(j,"current",e[4]===-1),c(M,"class","label svelte-gd9guy"),Z7(M,"align-self","flex-start"),c(D,"name","input"),c(D,"id","input"),c(D,"rows","14"),c(D,"class","svelte-gd9guy"),c(w,"class","button input-toggle catch-button svelte-gd9guy"),V(w,"current",e[5]),c(N,"class","catch-area svelte-gd9guy"),c(F,"class","layout svelte-gd9guy"),c(n,"class","outer svelte-gd9guy")},m(v,C){h7(v,n,C),u(n,J),u(n,l),u(n,F),u(F,L),u(F,t),u(F,r);for(let b=0;b<G.length;b+=1)G[b]&&G[b].m(r,null);u(r,d),A&&A.m(r,null),u(F,s),u(F,i),u(i,g),u(i,o),u(i,f),u(f,p),u(F,Q),u(F,m),Y(m,e[6][0]),u(F,_),u(F,X),u(X,O),u(X,F7),u(X,$),u($,r7),u(F,g7),u(F,S),Y(S,e[6][1]),u(F,o7),u(F,M),u(M,h),u(M,x),u(M,k),u(M,z),u(M,j),u(M,P);for(let b=0;b<B.length;b+=1)B[b]&&B[b].m(M,null);u(F,K),u(F,D),Y(D,e[0]),u(F,f7),u(F,I),u(F,t7),u(F,N),u(N,Q7),u(N,w),a7||(k7=[H(m,"input",e[13]),H(S,"input",e[14]),H(j,"keydown",null),H(j,"click",e[15]),H(D,"input",e[17]),H(w,"keydown",null),H(w,"click",e[18])],a7=!0)},p(v,C){if(C[0]&518){U=v7(v[1]);let b;for(b=0;b<U.length;b+=1){const s7=G7(v,U,b);G[b]?G[b].p(s7,C):(G[b]=B7(s7),G[b].c(),G[b].m(r,d))}for(;b<G.length;b+=1)G[b].d(1);G.length=U.length}if(v[1].length>1?A?A.p(v,C):(A=S7(v),A.c(),A.m(r,null)):A&&(A.d(1),A=null),C[0]&128&&a!==(a=v[7][0]+"")&&m7(p,a),C[0]&64&&R!==(R=u7(v[6][0]))&&c(m,"rows",R),C[0]&64&&Y(m,v[6][0]),C[0]&256&&V(m,"known-good",v[8][0]),C[0]&128&&E!==(E=v[7][1]+"")&&m7(r7,E),C[0]&64&&Z!==(Z=u7(v[6][1]))&&c(S,"rows",Z),C[0]&64&&Y(S,v[6][1]),C[0]&256&&V(S,"known-good",v[8][1]),C[0]&16&&V(j,"current",v[4]===-1),C[0]&1048){W=v7({length:v[3]});let b;for(b=0;b<W.length;b+=1){const s7=R7(v,W,b);B[b]?B[b].p(s7,C):(B[b]=M7(s7),B[b].c(),B[b].m(M,null))}for(;b<B.length;b+=1)B[b].d(1);B.length=W.length}C[0]&1&&Y(D,v[0]),C[0]&32&&V(w,"current",v[5])},i:L7,o:L7,d(v){v&&i7(n),C7(G,v),A&&A.d(),C7(B,v),a7=!1,y(k7)}}}function u7(e){var n=String(e||"").split(`
`).length;return Math.min(n,Math.max(n,1,10))}function u2(e,n,J){var l=h=>new Promise(x=>setTimeout(x,h)),F={},L=[],t="xx",r="",d=1,s=-1,i=!0,g=["",""],o=["",""],f=[!1,!1];function a(h=""){h&&J(2,t=h);var x=F[t];J(3,d=x.testInputs.length),s>d-1&&J(4,s=d-1),J(0,r=s<0?x?.input:x?.testInputs[s]),R()}function p(h=""){r&&R()}function Q(h=-1){J(4,s=h),a()}var m=!1;async function R(){if(!m){m=!0,J(6,g=["",""]),J(7,o=["",""]),await l(10);for(var h=1;h<=2;h++){var[x,k]=_(t,h,r),z=F7(t,h,x,s);X(h,x,k,z),await l(1)}m=!1}}function _(h="",x=1,k=""){var z=(F[h]||{})["part"+x];if(!z)return["",-999];var j=performance.now();if(i)try{return[z(k),performance.now()-j]}catch(D){var P=String(D),K=/:(\d+:\d+)\)/.exec(D.stack||"");return K&&(P=`(${K[1]}) ${P}`),[P,performance.now()-j]}else return[z(k),performance.now()-j]}function X(h=1,x="",k=0,z=!1){J(6,g[h-1]=x,g),J(7,o[h-1]=k<0?"":`(${Math.round(k)}ms)`,o),J(6,g),J(7,o),J(8,f[h-1]=z,f),J(8,f)}async function O(){var N;if(!m){m=!0;var h=["",""],x=[0,0],k=[!0,!0];J(4,s=-1),J(0,r=""),await l(10);for(var z=0;z<L.length;z++)for(var j=L[z],P=F[j],K=1;K<3;K++){var D=P?.input,[f7,I]=_(j,K,D||""),t7=I>=0&&F7(j,K,f7);k[N=K-1]&&(k[N]=t7),h[K-1]+=t7?"★":"ー",I>=0&&(x[K-1]+=I),X(K,h[K-1],x[K-1],k[K-1]),await l(1)}J(8,f=k),m=!1}}function F7(h="",x=1,k="",z=-1){var j=F[h]?.knownAnswers||[],P=2+2*z+(x===1?0:1),K=String(j[P]||"");return!!(K&&K===String(k))}var $=h=>{!h||!h.getDataByDay||(F=h.getDataByDay(),J(1,L=Object.keys(F).filter(x=>!!F[x].part1).sort()),a(L.at(-1)))};$(f2);const E=h=>a(h);function r7(){g[0]=this.value,J(6,g)}function g7(){g[1]=this.value,J(6,g)}const S=()=>Q(-1),Z=h=>Q(h);function o7(){r=this.value,J(0,r)}const M=()=>{J(5,i=!i)};return e.$$.update=()=>{e.$$.dirty[0]&1&&p(r)},[r,L,t,d,s,i,g,o,f,a,Q,O,E,r7,g7,S,Z,o7,M]}class h2 extends tn{constructor(n){super(),rn(this,n,u2,v2,O7,{},null,[-1,-1])}}new h2({target:document.querySelector(".app")});
