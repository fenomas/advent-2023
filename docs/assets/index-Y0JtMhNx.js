var Ae=Object.defineProperty;var De=(e,n,r)=>n in e?Ae(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var ue=(e,n,r)=>(De(e,typeof n!="symbol"?n+"":n,r),r);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const d of t)if(d.type==="childList")for(const g of d.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function r(t){const d={};return t.integrity&&(d.integrity=t.integrity),t.referrerPolicy&&(d.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?d.credentials="include":t.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(t){if(t.ep)return;t.ep=!0;const d=r(t);fetch(t.href,d)}})();function Y(){}function Pe(e){return e()}function _e(){return Object.create(null)}function K(e){e.forEach(Pe)}function Ee(e){return typeof e=="function"}function Le(e,n){return e!=e?n==n:e!==n||e&&typeof e=="object"||typeof e=="function"}function Be(e){return Object.keys(e).length===0}function h(e,n){e.appendChild(n)}function me(e,n,r){e.insertBefore(n,r||null)}function ve(e){e.parentNode&&e.parentNode.removeChild(e)}function Ne(e,n){for(let r=0;r<e.length;r+=1)e[r]&&e[r].d(n)}function c(e){return document.createElement(e)}function de(e){return document.createTextNode(e)}function w(){return de(" ")}function E(e,n,r,s){return e.addEventListener(n,r,s),()=>e.removeEventListener(n,r,s)}function b(e,n,r){r==null?e.removeAttribute(n):e.getAttribute(n)!==r&&e.setAttribute(n,r)}function Re(e){return Array.from(e.childNodes)}function ae(e,n){n=""+n,e.data!==n&&(e.data=n)}function W(e,n){e.value=n??""}function Ke(e,n,r,s){r==null?e.style.removeProperty(n):e.style.setProperty(n,r,s?"important":"")}function I(e,n,r){e.classList.toggle(n,!!r)}let xe;function le(e){xe=e}const Q=[],we=[];let X=[];const Ce=[],Fe=Promise.resolve();let ce=!1;function He(){ce||(ce=!0,Fe.then(Te))}function pe(e){X.push(e)}const be=new Set;let J=0;function Te(){if(J!==0)return;const e=xe;do{try{for(;J<Q.length;){const n=Q[J];J++,le(n),Ue(n.$$)}}catch(n){throw Q.length=0,J=0,n}for(le(null),Q.length=0,J=0;we.length;)we.pop()();for(let n=0;n<X.length;n+=1){const r=X[n];be.has(r)||(be.add(r),r())}X.length=0}while(Q.length);for(;Ce.length;)Ce.pop()();ce=!1,be.clear(),le(e)}function Ue(e){if(e.fragment!==null){e.update(),K(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(pe)}}function Ve(e){const n=[],r=[];X.forEach(s=>e.indexOf(s)===-1?n.push(s):r.push(s)),r.forEach(s=>s()),X=n}const We=new Set;function Je(e,n){e&&e.i&&(We.delete(e),e.i(n))}function ye(e){return e?.length!==void 0?e:Array.from(e)}function Qe(e,n,r){const{fragment:s,after_update:t}=e.$$;s&&s.m(n,r),pe(()=>{const d=e.$$.on_mount.map(Pe).filter(Ee);e.$$.on_destroy?e.$$.on_destroy.push(...d):K(d),e.$$.on_mount=[]}),t.forEach(pe)}function Xe(e,n){const r=e.$$;r.fragment!==null&&(Ve(r.after_update),K(r.on_destroy),r.fragment&&r.fragment.d(n),r.on_destroy=r.fragment=null,r.ctx=[])}function Ye(e,n){e.$$.dirty[0]===-1&&(Q.push(e),He(),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function Ze(e,n,r,s,t,d,g=null,l=[-1]){const i=xe;le(e);const o=e.$$={fragment:null,ctx:[],props:d,update:Y,not_equal:t,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(i?i.$$.context:[])),callbacks:_e(),dirty:l,skip_bound:!1,root:n.target||i.$$.root};g&&g(o.root);let f=!1;if(o.ctx=r?r(e,n.props||{},(u,q,...m)=>{const T=m.length?m[0]:q;return o.ctx&&t(o.ctx[u],o.ctx[u]=T)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](T),f&&Ye(e,u)),q}):[],o.update(),f=!0,K(o.before_update),o.fragment=s?s(o.ctx):!1,n.target){if(n.hydrate){const u=Re(n.target);o.fragment&&o.fragment.l(u),u.forEach(ve)}else o.fragment&&o.fragment.c();n.intro&&Je(e.$$.fragment),Qe(e,n.target,n.anchor),Te()}le(i)}class en{constructor(){ue(this,"$$");ue(this,"$$set")}$destroy(){Xe(this,1),this.$destroy=Y}$on(n,r){if(!Ee(r))return Y;const s=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return s.push(r),()=>{const t=s.indexOf(r);t!==-1&&s.splice(t,1)}}$set(n){this.$$set&&!Be(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const nn="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(nn);var rn=[142,54304,281,54418];function tn(e=""){return e.split(/\n/).reduce((n,r)=>{var s=r.split("").filter(t=>/\d/.test(t));return n+parseInt(s[0]+s.at(-1))},0)}function dn(e=""){e=ln(e);var n=[..."0123456789".split(""),"zero","one","two","three","four","five","six","seven","eight","nine"];return e.split(/\n/).reduce((r,s)=>{var t=-1,d=1/0,g=-1,l=-1;return n.forEach((i,o)=>{var f=s.indexOf(i);f>-1&&f<d&&(d=f,t=o%10);var u=s.lastIndexOf(i);u>-1&&u>l&&(l=u,g=o%10)}),r+parseInt(t+""+g)},0)}function ln(e){return e.startsWith(`1abc2
`)?`two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`:e}const sn=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:rn,part1:tn,part2:dn},Symbol.toStringTag,{value:"Module"}));var gn=[8,2727,2286,56580];function on(e=""){var n=0,r={red:12,green:13,blue:14};return e.split(`
`).forEach(s=>{var[t,d]=s.split(":"),g=d.split(";").every(l=>l.split(",").every(i=>{var[,o,f]=/(\d+)\s+(\S+)/.exec(i);return r[f]?parseInt(o)<=r[f]:!0}));g&&(n+=parseInt(/\d+/.exec(t)[0]))}),n}function fn(e=""){var n=0;return e.split(`
`).forEach(r=>{var s={red:0,green:0,blue:0},[,t]=r.split(":");t.split(";").forEach(d=>{d.split(",").forEach(g=>{var[,l,i]=/(\d+)\s+(\S+)/.exec(g),o=parseInt(l);o>s[i]&&(s[i]=o)})}),n+=s.red*s.green*s.blue}),n}const vn=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:gn,part1:on,part2:fn},Symbol.toStringTag,{value:"Module"}));var hn=[4361,539637,467835,82818007];function un(e=""){var n=[],r=[];e.split(`
`).forEach((t,d)=>{n[d]=[],r[d]=[];for(var g=0;g<t.length;g++){var l=t[g];if(l!==".")if(/\d/.test(l)){var i=parseInt(t.substring(g)),o=String(i).length;n[d].push({y:d,x:g,value:i,len:o}),g+=o-1}else r[d].push({y:d,x:g})}});var s=0;return n.forEach(t=>{t.forEach(d=>{for(var g=d.y-1;g<d.y+2;g++){var l=r[g]||[],i=l.some(o=>{if(!(o.x<d.x-1)&&!(o.x>d.x+d.len))return!0});if(i){s+=d.value;return}}})}),s}function bn(e=""){var n=[],r=[];e.split(`
`).forEach((t,d)=>{n[d]=[],r[d]=[];for(var g=0;g<t.length;g++){var l=t[g];if(l!==".")if(/\d/.test(l)){var i=parseInt(t.substring(g)),o=String(i).length;n[d].push({y:d,x:g,value:i,len:o}),g+=o-1}else l==="*"&&r[d].push({y:d,x:g})}});var s=0;return r.forEach(t=>{t.forEach(d=>{for(var g=0,l=1,i=d.y-1;i<d.y+2;i++){var o=n[i]||[];o.forEach(f=>{d.x<f.x-1||d.x>f.x+f.len||(g++,l*=f.value)})}g===2&&(s+=l)})}),s}const an=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:hn,part1:un,part2:bn},Symbol.toStringTag,{value:"Module"}));var cn=[13,26443,30,6284877];function pn(e=""){var n=0;return e.split(`
`).forEach((r,s)=>{var t=r.split(":")[1].split("|"),d=t[0].trim().split(/\s+/).map(i=>parseInt(i)),g=t[1].trim().split(/\s+/).map(i=>parseInt(i)),l=g.reduce((i,o)=>i+(d.includes(o)?1:0),0);l>0&&(n+=Math.pow(2,l-1))}),n}function mn(e=""){var n=e.split(`
`).map((t,d)=>{var g=t.split(":")[1].split("|"),l=g[0].trim().split(/\s+/).map(f=>parseInt(f)),i=g[1].trim().split(/\s+/).map(f=>parseInt(f)),o=i.reduce((f,u)=>f+(l.includes(u)?1:0),0);return o>0&&(r+=Math.pow(2,o-1)),o}),r=0,s=[];return n.forEach((t,d)=>{for(var g=1+(s[d]||0),l=n[d],i=0;i<l;i++){var o=d+1+i;s[o]=(s[o]||0)+g}r+=g}),r}const xn=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:cn,part1:pn,part2:mn},Symbol.toStringTag,{value:"Module"}));var jn=[35,525792406,46,79004094];function kn(e=""){var n=[],r=null;e.split(`
`).forEach((t,d)=>{if(/:/.test(t)){var[,g]=t.split(":");n.push(r=[]),t=g}var l=t.trim().split(/\s+/).filter(i=>i).map(i=>parseInt(i));l.length>0&&r.push(l)});var s=n.shift()[0];return n.forEach(t=>{var d={};t.forEach(([g,l,i])=>{s.forEach((o,f)=>{d[f]||o>=l&&o<l+i&&(s[f]+=g-l,d[f]=!0)})})}),s.reduce((t,d)=>Math.min(t,d),1/0)}function zn(e=""){var n,r=[],s;e.split(`
`).forEach((l,i)=>{if(/:/.test(l)){var[,o]=l.split(":");if(!n){n=o.trim().split(/\s+/).map(m=>parseInt(m));return}r.push(s=[]),l=o}if(l=l.trim(),!!l){var[f,u,q]=l.split(/\s+/).map(m=>parseInt(m));s.push([u,u+q,f-u])}}),r.forEach(l=>{l.sort((i,o)=>i[0]-o[0])});for(var t=1/0,d=(l,i,o=0)=>{if(o>=r.length){l<t&&(t=l);return}var f=r[o];f.some(([u,q,m])=>{if(!(l>=q)){if(i<=u)return!0;l<u&&(d(l,u,o+1),l=u);var T=Math.min(i,q);d(l+m,T+m,o+1),l=T}}),l<i&&d(l,i,o+1)},g=0;g<n.length;g+=2)d(n[g],n[g]+n[g+1]);return t}const qn=Object.freeze(Object.defineProperty({__proto__:null,knownAnswers:jn,part1:kn,part2:zn},Symbol.toStringTag,{value:"Module"})),_n=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),wn=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Cn=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),yn=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Gn=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),On=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Sn=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),$n=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Mn=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Pn=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),En=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Tn=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),In=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),An=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Dn=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Ln=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Bn=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Nn=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Rn=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Kn=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Fn=`1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`,Hn=`8eight1
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
8four419eighteight1bpv`,Un=`Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`,Vn=`Game 1: 3 blue, 2 green, 6 red; 17 green, 4 red, 8 blue; 2 red, 1 green, 10 blue; 1 blue, 5 green
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
Game 100: 8 blue, 6 green, 8 red; 7 red, 2 blue; 2 red, 10 green, 10 blue; 9 green, 7 red; 3 red, 7 green, 1 blue`,Wn=`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`,Jn=`...............776..............552........968..................589...26...........484..............958......186....546.........484.........
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
...............764.....................................488.....880.209........416..................183...156..........917...................`,Qn=`Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`,Xn=`Card   1: 79 93 21 74 81 76 17 89  3  5 |  5 67 87 81 76 35 79 21 15 80  8 74 99 28  3 23 19 42 89 16 22 77 92 70 34
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
Card 218: 68 97 66 41 88 16 65 31 23 63 | 29 67 55 64 91  4 12 83  1 40 74 94 58 81 98 82 78 70 26 34 96 14 36 50 56`,Yn=`seeds: 79 14 55 13

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
56 93 4`,Zn=`seeds: 28965817 302170009 1752849261 48290258 804904201 243492043 2150339939 385349830 1267802202 350474859 2566296746 17565716 3543571814 291402104 447111316 279196488 3227221259 47952959 1828835733 9607836

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
2446452559 2629702985 182296534`,e1="",n1="",r1="",t1="",d1="",l1="",s1="",g1="",i1="",o1="",f1="",v1="",h1="",u1="",b1="",a1="",c1="",p1="",m1="",x1="",j1="",k1="",z1="",q1="",_1="",w1="",C1="",y1="",G1="",O1="",S1="",$1="",M1="",P1="",E1="",T1="",I1="",A1="",D1="",L1="";var Ge=Object.assign({"./advent/day01/solution.js":sn,"./advent/day02/solution.js":vn,"./advent/day03/solution.js":an,"./advent/day04/solution.js":xn,"./advent/day05/solution.js":qn,"./advent/day06/solution.js":_n,"./advent/day07/solution.js":wn,"./advent/day08/solution.js":Cn,"./advent/day09/solution.js":yn,"./advent/day10/solution.js":Gn,"./advent/day11/solution.js":On,"./advent/day12/solution.js":Sn,"./advent/day13/solution.js":$n,"./advent/day14/solution.js":Mn,"./advent/day15/solution.js":Pn,"./advent/day16/solution.js":En,"./advent/day17/solution.js":Tn,"./advent/day18/solution.js":In,"./advent/day19/solution.js":An,"./advent/day20/solution.js":Dn,"./advent/day21/solution.js":Ln,"./advent/day22/solution.js":Bn,"./advent/day23/solution.js":Nn,"./advent/day24/solution.js":Rn,"./advent/day25/solution.js":Kn}),Oe=Object.assign({"./advent/day01/input-test.txt":Fn,"./advent/day01/input.txt":Hn,"./advent/day02/input-test.txt":Un,"./advent/day02/input.txt":Vn,"./advent/day03/input-test.txt":Wn,"./advent/day03/input.txt":Jn,"./advent/day04/input-test.txt":Qn,"./advent/day04/input.txt":Xn,"./advent/day05/input-test.txt":Yn,"./advent/day05/input.txt":Zn,"./advent/day06/input-test.txt":e1,"./advent/day06/input.txt":n1,"./advent/day07/input-test.txt":r1,"./advent/day07/input.txt":t1,"./advent/day08/input-test.txt":d1,"./advent/day08/input.txt":l1,"./advent/day09/input-test.txt":s1,"./advent/day09/input.txt":g1,"./advent/day10/input-test.txt":i1,"./advent/day10/input.txt":o1,"./advent/day11/input-test.txt":f1,"./advent/day11/input.txt":v1,"./advent/day12/input-test.txt":h1,"./advent/day12/input.txt":u1,"./advent/day13/input-test.txt":b1,"./advent/day13/input.txt":a1,"./advent/day14/input-test.txt":c1,"./advent/day14/input.txt":p1,"./advent/day15/input-test.txt":m1,"./advent/day15/input.txt":x1,"./advent/day16/input-test.txt":j1,"./advent/day16/input.txt":k1,"./advent/day17/input-test.txt":z1,"./advent/day17/input.txt":q1,"./advent/day18/input-test.txt":_1,"./advent/day18/input.txt":w1,"./advent/day19/input-test.txt":C1,"./advent/day19/input.txt":y1,"./advent/day20/input-test.txt":G1,"./advent/day20/input.txt":O1,"./advent/day21/input-test.txt":S1,"./advent/day21/input.txt":$1,"./advent/day22/input-test.txt":M1,"./advent/day22/input.txt":P1,"./advent/day23/input-test.txt":E1,"./advent/day23/input.txt":T1,"./advent/day24/input-test.txt":I1,"./advent/day24/input.txt":A1,"./advent/day25/input-test.txt":D1,"./advent/day25/input.txt":L1});function Ie(e,n,r,s){this.day=e||"01",this.input=r||"",this.testInput=s||"",this.part1=n.part1||null,this.part2=n.part2||null,this.knownAnswers=(n.knownAnswers||[]).map(t=>String(t))}function B1(){var e={},n={},r={};Object.keys(Ge).forEach(d=>{var g=/day(\d+)/.exec(d)[1];e[g]=Ge[d]||null}),Object.keys(Oe).forEach(d=>{var g=/day(\d+)/.exec(d)[1],l=d.includes("-test")?r:n;l[g]=Oe[d]||""});var s={},t=Object.keys(e).sort();return t.forEach(d=>{var g=e[d]||{},l=n[d]||"",i=r[d]||"";s[d]=new Ie(d,g,l,i)}),s}const N1=Object.freeze(Object.defineProperty({__proto__:null,DayData:Ie,getDataByDay:B1},Symbol.toStringTag,{value:"Module"}));function Se(e,n,r){const s=e.slice();return s[27]=n[r],s}function $e(e){let n,r=e[27]+"",s,t,d;function g(){return e[11](e[27])}return{c(){n=c("button"),s=de(r),b(n,"class","button svelte-gd9guy"),I(n,"current",e[27]===e[2])},m(l,i){me(l,n,i),h(n,s),t||(d=[E(n,"keydown",null),E(n,"click",g)],t=!0)},p(l,i){e=l,i&2&&r!==(r=e[27]+"")&&ae(s,r),i&6&&I(n,"current",e[27]===e[2])},d(l){l&&ve(n),t=!1,K(d)}}}function Me(e){let n,r,s;return{c(){n=c("button"),n.textContent="run all",b(n,"class","button run-all-button svelte-gd9guy")},m(t,d){me(t,n,d),r||(s=[E(n,"keydown",null),E(n,"click",e[10])],r=!0)},p:Y,d(t){t&&ve(n),r=!1,K(s)}}}function R1(e){let n,r,s,t,d,g,l,i,o,f,u,q,m,T=e[6][0]+"",B,A,C,N,Z,D,R,se,F,H=e[6][1]+"",ee,ge,O,U,ie,v,p,j,y,$,x,_,M,oe,P,ne,re,je,te,ke,L,he,ze,V=ye(e[1]),G=[];for(let a=0;a<V.length;a+=1)G[a]=$e(Se(e,V,a));let S=e[1].length>1&&Me(e);return{c(){n=c("div"),r=c("h2"),r.textContent="Advent 2023",s=w(),t=c("div"),d=c("div"),d.innerHTML='<h4 class="svelte-gd9guy">Days:</h4>',g=w(),l=c("div");for(let a=0;a<G.length;a+=1)G[a].c();i=w(),S&&S.c(),o=w(),f=c("div"),u=c("h4"),u.textContent="Part 1:",q=w(),m=c("div"),B=de(T),A=w(),C=c("textarea"),Z=w(),D=c("div"),R=c("h4"),R.textContent="Part 2:",se=w(),F=c("div"),ee=de(H),ge=w(),O=c("textarea"),ie=w(),v=c("div"),p=c("h4"),p.textContent="Input:",j=w(),y=c("br"),$=w(),x=c("button"),x.textContent="Real",_=w(),M=c("button"),M.textContent="Test",oe=w(),P=c("textarea"),ne=w(),re=c("div"),je=w(),te=c("div"),ke=de(`Catch errors
      `),L=c("button"),L.textContent="x",b(d,"class","label svelte-gd9guy"),b(l,"class","day-list"),b(u,"class","svelte-gd9guy"),b(m,"class","time svelte-gd9guy"),b(f,"class","label svelte-gd9guy"),b(C,"name","output1"),b(C,"id","output1"),b(C,"rows",N=fe(e[5][0])),b(C,"class","svelte-gd9guy"),I(C,"known-good",e[7][0]),b(R,"class","svelte-gd9guy"),b(F,"class","time svelte-gd9guy"),b(D,"class","label svelte-gd9guy"),b(O,"name","output2"),b(O,"id","output2"),b(O,"rows",U=fe(e[5][1])),b(O,"class","svelte-gd9guy"),I(O,"known-good",e[7][1]),b(p,"class","svelte-gd9guy"),b(x,"class","button input-toggle svelte-gd9guy"),I(x,"current",!e[3]),b(M,"class","button input-toggle svelte-gd9guy"),I(M,"current",e[3]),b(v,"class","label svelte-gd9guy"),Ke(v,"align-self","flex-start"),b(P,"name","input"),b(P,"id","input"),b(P,"rows","14"),b(P,"class","svelte-gd9guy"),b(L,"class","button input-toggle catch-button svelte-gd9guy"),I(L,"current",e[4]),b(te,"class","catch-area svelte-gd9guy"),b(t,"class","layout svelte-gd9guy"),b(n,"class","outer svelte-gd9guy")},m(a,k){me(a,n,k),h(n,r),h(n,s),h(n,t),h(t,d),h(t,g),h(t,l);for(let z=0;z<G.length;z+=1)G[z]&&G[z].m(l,null);h(l,i),S&&S.m(l,null),h(t,o),h(t,f),h(f,u),h(f,q),h(f,m),h(m,B),h(t,A),h(t,C),W(C,e[5][0]),h(t,Z),h(t,D),h(D,R),h(D,se),h(D,F),h(F,ee),h(t,ge),h(t,O),W(O,e[5][1]),h(t,ie),h(t,v),h(v,p),h(v,j),h(v,y),h(v,$),h(v,x),h(v,_),h(v,M),h(t,oe),h(t,P),W(P,e[0]),h(t,ne),h(t,re),h(t,je),h(t,te),h(te,ke),h(te,L),he||(ze=[E(C,"input",e[12]),E(O,"input",e[13]),E(x,"keydown",null),E(x,"click",e[14]),E(M,"keydown",null),E(M,"click",e[15]),E(P,"input",e[16]),E(L,"keydown",null),E(L,"click",e[17])],he=!0)},p(a,[k]){if(k&262){V=ye(a[1]);let z;for(z=0;z<V.length;z+=1){const qe=Se(a,V,z);G[z]?G[z].p(qe,k):(G[z]=$e(qe),G[z].c(),G[z].m(l,i))}for(;z<G.length;z+=1)G[z].d(1);G.length=V.length}a[1].length>1?S?S.p(a,k):(S=Me(a),S.c(),S.m(l,null)):S&&(S.d(1),S=null),k&64&&T!==(T=a[6][0]+"")&&ae(B,T),k&32&&N!==(N=fe(a[5][0]))&&b(C,"rows",N),k&32&&W(C,a[5][0]),k&128&&I(C,"known-good",a[7][0]),k&64&&H!==(H=a[6][1]+"")&&ae(ee,H),k&32&&U!==(U=fe(a[5][1]))&&b(O,"rows",U),k&32&&W(O,a[5][1]),k&128&&I(O,"known-good",a[7][1]),k&8&&I(x,"current",!a[3]),k&8&&I(M,"current",a[3]),k&1&&W(P,a[0]),k&16&&I(L,"current",a[4])},i:Y,o:Y,d(a){a&&ve(n),Ne(G,a),S&&S.d(),he=!1,K(ze)}}}function fe(e){var n=String(e||"").split(`
`).length;return Math.min(n,Math.max(n,1,10))}function K1(e,n,r){var s=v=>new Promise(p=>setTimeout(p,v)),t={},d=[],g="xx",l="",i=!1,o=!0,f=["",""],u=["",""],q=[!1,!1];function m(v=""){v&&r(2,g=v);var p=t[g];r(0,l=i?p?.testInput:p?.input),C()}function T(v=""){v&&C()}function B(v){r(3,i=!!v),m()}var A=!1;async function C(){if(!A){A=!0,r(5,f=["",""]),r(6,u=["",""]),await s(10);for(var v=1;v<3;v++){var[p,j]=N(g,v,l);Z(v,p,j,g),await s(1)}A=!1}}function N(v="",p=1,j=""){var y=(t[v]||{})["part"+p];if(!y)return["",-999];var $=performance.now();if(o)try{return[y(j),performance.now()-$]}catch(M){var x=String(M),_=/:(\d+:\d+)\)/.exec(M.stack||"");return _&&(x=`(${_[1]}) ${x}`),[x,performance.now()-$]}else return[y(j),performance.now()-$]}function Z(v=1,p="",j=0,y=""){r(5,f[v-1]=p,f),r(6,u[v-1]=j<0?"":`(${Math.round(j)}ms)`,u),r(5,f),r(6,u),y&&(r(7,q[v-1]=R(y,v,p),q),r(7,q))}async function D(){var re;if(!A){A=!0;var v=["",""],p=[0,0],j=[!0,!0];await s(10);for(var y=0;y<d.length;y++)for(var $=d[y],x=t[$],_=1;_<3;_++){var M=i?x.testInput:x.input,[oe,P]=N($,_,M||""),ne=P>=0&&R($,_,oe);j[re=_-1]&&(j[re]=ne),v[_-1]+=ne?"★":"ー",P>=0&&(p[_-1]+=P),Z(_,v[_-1],p[_-1]),await s(1)}r(7,q=j),A=!1}}function R(v="",p=1,j=""){var y=t[v]?.knownAnswers||[],$=p===1?0:2;i||$++;var x=String(y[$]||"");return!!(x&&x===String(j))}var se=v=>{!v||!v.getDataByDay||(t=v.getDataByDay(),r(1,d=Object.keys(t).filter(p=>!!t[p].part1).sort()),m(d.at(-1)))};se(N1);const F=v=>m(v);function H(){f[0]=this.value,r(5,f)}function ee(){f[1]=this.value,r(5,f)}const ge=()=>B(!1),O=()=>B(!0);function U(){l=this.value,r(0,l)}const ie=()=>{r(4,o=!o)};return e.$$.update=()=>{e.$$.dirty&1&&T(l)},[l,d,g,i,o,f,u,q,m,B,D,F,H,ee,ge,O,U,ie]}class F1 extends en{constructor(n){super(),Ze(this,n,K1,R1,Le,{})}}new F1({target:document.querySelector(".app")});
