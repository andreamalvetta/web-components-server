(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{10:function(t,e,i){"use strict";e.a=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const i=window.scrollY||window.pageYOffset,n=t.getBoundingClientRect().top+i,s=i,r=i+window.innerHeight*e,a=n,o=n+t.clientHeight*e;return o>=s&&o<=r||a<=r&&a>=s}},17:function(t,e,i){"use strict";i.r(e);var n=i(7),s=(i(9),i(6)),r=i.n(s),a=i(10);function o(){const t=babelHelpers.taggedTemplateLiteral(['<img data-src="','" src="','" alt="','">']);return o=function(){return t},t}function l(){const t=babelHelpers.taggedTemplateLiteral(['<source media="','" data-srcset="',"_","w_","x.",'">']);return l=function(){return t},t}function c(){const t=babelHelpers.taggedTemplateLiteral(["<picture>",' <img src="','" alt="','"></picture>']);return c=function(){return t},t}function d(){const t=babelHelpers.taggedTemplateLiteral([""," ",""]);return d=function(){return t},t}function u(){const t=babelHelpers.taggedTemplateLiteral(["<style>:host picture{position:relative;display:block;margin-bottom:5px}:host picture:after{content:'';display:block;height:0;width:100%;padding-bottom:","%}:host picture>img{position:absolute;top:0;left:0;width:100%;height:100%;display:block}:host img{width:100%;opacity:0}:host img.lazyloaded{opacity:1;transition:opacity .3s}</style>"]);return u=function(){return t},t}customElements.define("lazy-image",class extends n.a{constructor(){super(),this.src="",this.alt="",this.responsive=!1,this.placeholderImg="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",this.imgRootUrl=null,this.imgExt=null,this.devicePixelRatio=1,this.mediaQueries=["(min-width: 801px)","(min-width: 481px)","(min-width: 321px)","(max-width: 320px)"],this.sizes=[1500,800,480,320],this.isImageLoaded=!1}connectedCallback(){super.connectedCallback(),document.addEventListener("readystatechange",()=>this.init(),!0)}disconnectedCallback(){document.removeEventListener("readystatechange",()=>console.log("removed"),!0),window.removeEventListener("scroll",()=>console.log("removed"),!0),window.removeEventListener("resize",()=>console.log("removed"),!0),super.disconnectedCallback()}init(){if(this.shadowImg=this.shadowRoot.querySelector("img"),this.responsive){let t=this.src.split("_");this.setImgRoot(t),t=t[2].split("."),this.setImgExt(t),this.setPixelRatio(),this.requestUpdate()}this.shadowImg.addEventListener("lazybeforeunveil",this.showImage(),!0),window.addEventListener("scroll",()=>window.requestAnimationFrame(this.showImage.bind(this)),!0),window.addEventListener("resize",()=>window.requestAnimationFrame(this.showImage.bind(this)),!0)}showImage(){Object(a.a)(this.shadowImg,1.5)&&!this.isImageLoaded&&(this.isImageLoaded=!0,r.a.loader.unveil(this.shadowImg))}setImgRoot(t){return this.imgRootUrl=t[0],this.imgRootUrl}setImgExt(t){return this.imgExt=t[1],this.imgExt}setPixelRatio(){return window.devicePixelRatio>=2&&(this.devicePixelRatio=2),this.devicePixelRatio}getStyles(){return Object(n.b)(u(),isNaN(this.height/this.width)?56.25:(this.height/this.width*100).toFixed(2))}render(){return Object(n.b)(d(),this.getStyles(),this.responsive?Object(n.b)(c(),this.mediaQueries&&this.sizes.map((t,e)=>Object(n.b)(l(),this.mediaQueries[e],this.imgRootUrl,t,this.devicePixelRatio,this.imgExt)),this.placeholderImg,this.alt):Object(n.b)(o(),this.src,this.placeholderImg,this.alt))}static get properties(){return{src:{type:String},responsive:{type:Boolean},alt:{type:String},width:{type:String},height:{type:String}}}})},6:function(t,e,i){!function(e,i){var n=function(t,e){"use strict";if(!e.getElementsByClassName)return;var i,n,s=e.documentElement,r=t.Date,a=t.HTMLPictureElement,o=t.addEventListener,l=t.setTimeout,c=t.requestAnimationFrame||l,d=t.requestIdleCallback,u=/^picture$/i,h=["load","error","lazyincluded","_lazyloaded"],f={},g=Array.prototype.forEach,m=function(t,e){return f[e]||(f[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),f[e].test(t.getAttribute("class")||"")&&f[e]},p=function(t,e){m(t,e)||t.setAttribute("class",(t.getAttribute("class")||"").trim()+" "+e)},y=function(t,e){var i;(i=m(t,e))&&t.setAttribute("class",(t.getAttribute("class")||"").replace(i," "))},v=function t(e,i,n){var s=n?"addEventListener":"removeEventListener";n&&t(e,i),h.forEach(function(t){e[s](t,i)})},b=function(t,n,s,r,a){var o=e.createEvent("Event");return s||(s={}),s.instance=i,o.initEvent(n,!r,!a),o.detail=s,t.dispatchEvent(o),o},z=function(e,i){var s;!a&&(s=t.picturefill||n.pf)?(i&&i.src&&!e.getAttribute("srcset")&&e.setAttribute("srcset",i.src),s({reevaluate:!0,elements:[e]})):i&&i.src&&(e.src=i.src)},A=function(t,e){return(getComputedStyle(t,null)||{})[e]},w=function(t,e,i){for(i=i||t.offsetWidth;i<n.minSize&&e&&!t._lazysizesWidth;)i=e.offsetWidth,e=e.parentNode;return i},E=(N=[],R=[],I=N,T=function(){var t=I;for(I=N.length?R:N,_=!0,L=!1;t.length;)t.shift()();_=!1},M=function(t,i){_&&!i?t.apply(this,arguments):(I.push(t),L||(L=!0,(e.hidden?l:c)(T)))},M._lsFlush=T,M),C=function(t,e){return e?function(){E(t)}:function(){var e=this,i=arguments;E(function(){t.apply(e,i)})}},x=function(t){var e,i,n=function(){e=null,t()},s=function t(){var e=r.now()-i;e<99?l(t,99-e):(d||n)(n)};return function(){i=r.now(),e||(e=l(s,99))}};var _,L,N,R,I,T,M;!function(){var e,i={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in n=t.lazySizesConfig||t.lazysizesConfig||{},i)e in n||(n[e]=i[e]);t.lazySizesConfig=n,l(function(){n.init&&k()})}();var P=function(){var a,c,h,f,w,_,L,N,R,I,T,M,P,k,B,H,O,F,W,U=/^img$/i,D=/^iframe$/i,j="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),q=0,$=0,Q=-1,J=function(t){$--,(!t||$<0||!t.target)&&($=0)},X=function(t){return null==M&&(M="hidden"==A(e.body,"visibility")),M||"hidden"!=A(t.parentNode,"visibility")&&"hidden"!=A(t,"visibility")},Y=function(t,i){var n,r=t,a=X(t);for(N-=i,T+=i,R-=i,I+=i;a&&(r=r.offsetParent)&&r!=e.body&&r!=s;)(a=(A(r,"opacity")||1)>0)&&"visible"!=A(r,"overflow")&&(n=r.getBoundingClientRect(),a=I>n.left&&R<n.right&&T>n.top-1&&N<n.bottom+1);return a},G=function(){var t,r,o,l,d,u,h,g,m,p,y,v,b=i.elements;if((f=n.loadMode)&&$<8&&(t=b.length)){for(r=0,Q++,p=!n.expand||n.expand<1?s.clientHeight>500&&s.clientWidth>500?500:370:n.expand,i._defEx=p,y=p*n.expFactor,v=n.hFac,M=null,q<y&&$<1&&Q>2&&f>2&&!e.hidden?(q=y,Q=0):q=f>1&&Q>1&&$<6?p:0;r<t;r++)if(b[r]&&!b[r]._lazyRace)if(j)if((g=b[r].getAttribute("data-expand"))&&(u=1*g)||(u=q),m!==u&&(_=innerWidth+u*v,L=innerHeight+u,h=-1*u,m=u),o=b[r].getBoundingClientRect(),(T=o.bottom)>=h&&(N=o.top)<=L&&(I=o.right)>=h*v&&(R=o.left)<=_&&(T||I||R||N)&&(n.loadHidden||X(b[r]))&&(c&&$<3&&!g&&(f<3||Q<4)||Y(b[r],u))){if(nt(b[r]),d=!0,$>9)break}else!d&&c&&!l&&$<4&&Q<4&&f>2&&(a[0]||n.preloadAfterLoad)&&(a[0]||!g&&(T||I||R||N||"auto"!=b[r].getAttribute(n.sizesAttr)))&&(l=a[0]||b[r]);else nt(b[r]);l&&!d&&nt(l)}},K=(P=G,B=0,H=n.throttleDelay,O=n.ricTimeout,F=function(){k=!1,B=r.now(),P()},W=d&&O>49?function(){d(F,{timeout:O}),O!==n.ricTimeout&&(O=n.ricTimeout)}:C(function(){l(F)},!0),function(t){var e;(t=!0===t)&&(O=33),k||(k=!0,(e=H-(r.now()-B))<0&&(e=0),t||e<9?W():l(W,e))}),V=function(t){var e=t.target;e._lazyCache?delete e._lazyCache:(J(t),p(e,n.loadedClass),y(e,n.loadingClass),v(e,tt),b(e,"lazyloaded"))},Z=C(V),tt=function(t){Z({target:t.target})},et=function(t){var e,i=t.getAttribute(n.srcsetAttr);(e=n.customMedia[t.getAttribute("data-media")||t.getAttribute("media")])&&t.setAttribute("media",e),i&&t.setAttribute("srcset",i)},it=C(function(t,e,i,s,r){var a,o,c,d,f,m;(f=b(t,"lazybeforeunveil",e)).defaultPrevented||(s&&(i?p(t,n.autosizesClass):t.setAttribute("sizes",s)),o=t.getAttribute(n.srcsetAttr),a=t.getAttribute(n.srcAttr),r&&(c=t.parentNode,d=c&&u.test(c.nodeName||"")),m=e.firesLoad||"src"in t&&(o||a||d),f={target:t},p(t,n.loadingClass),m&&(clearTimeout(h),h=l(J,2500),v(t,tt,!0)),d&&g.call(c.getElementsByTagName("source"),et),o?t.setAttribute("srcset",o):a&&!d&&(D.test(t.nodeName)?function(t,e){try{t.contentWindow.location.replace(e)}catch(i){t.src=e}}(t,a):t.src=a),r&&(o||d)&&z(t,{src:a})),t._lazyRace&&delete t._lazyRace,y(t,n.lazyClass),E(function(){var e=t.complete&&t.naturalWidth>1;m&&!e||(e&&p(t,"ls-is-cached"),V(f),t._lazyCache=!0,l(function(){"_lazyCache"in t&&delete t._lazyCache},9))},!0)}),nt=function(t){var e,i=U.test(t.nodeName),s=i&&(t.getAttribute(n.sizesAttr)||t.getAttribute("sizes")),r="auto"==s;(!r&&c||!i||!t.getAttribute("src")&&!t.srcset||t.complete||m(t,n.errorClass)||!m(t,n.lazyClass))&&(e=b(t,"lazyunveilread").detail,r&&S.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,$++,it(t,e,r,s,i))},st=function t(){if(!c)if(r.now()-w<999)l(t,999);else{var e=x(function(){n.loadMode=3,K()});c=!0,n.loadMode=3,K(),o("scroll",function(){3==n.loadMode&&(n.loadMode=2),e()},!0)}};return{_:function(){w=r.now(),i.elements=e.getElementsByClassName(n.lazyClass),a=e.getElementsByClassName(n.lazyClass+" "+n.preloadClass),o("scroll",K,!0),o("resize",K,!0),t.MutationObserver?new MutationObserver(K).observe(s,{childList:!0,subtree:!0,attributes:!0}):(s.addEventListener("DOMNodeInserted",K,!0),s.addEventListener("DOMAttrModified",K,!0),setInterval(K,999)),o("hashchange",K,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(t){e.addEventListener(t,K,!0)}),/d$|^c/.test(e.readyState)?st():(o("load",st),e.addEventListener("DOMContentLoaded",K),l(st,2e4)),i.elements.length?(G(),E._lsFlush()):K()},checkElems:K,unveil:nt}}(),S=(H=C(function(t,e,i,n){var s,r,a;if(t._lazysizesWidth=n,n+="px",t.setAttribute("sizes",n),u.test(e.nodeName||""))for(s=e.getElementsByTagName("source"),r=0,a=s.length;r<a;r++)s[r].setAttribute("sizes",n);i.detail.dataAttr||z(t,i.detail)}),O=function(t,e,i){var n,s=t.parentNode;s&&(i=w(t,s,i),(n=b(t,"lazybeforesizes",{width:i,dataAttr:!!e})).defaultPrevented||(i=n.detail.width)&&i!==t._lazysizesWidth&&H(t,s,n,i))},F=x(function(){var t,e=B.length;if(e)for(t=0;t<e;t++)O(B[t])}),{_:function(){B=e.getElementsByClassName(n.autosizesClass),o("resize",F)},checkElems:F,updateElem:O}),k=function t(){t.i||(t.i=!0,S._(),P._())};var B,H,O,F;return i={cfg:n,autoSizer:S,loader:P,init:k,uP:z,aC:p,rC:y,hC:m,fire:b,gW:w,rAF:E}}(e,e.document);e.lazySizes=n,t.exports&&(t.exports=n)}(window)},9:function(t,e,i){!function(e,n){var s=function t(){n(e.lazySizes),e.removeEventListener("lazyunveilread",t,!0)};n=n.bind(null,e,e.document),t.exports?n(i(6)):e.lazySizes?s():e.addEventListener("lazyunveilread",s,!0)}(window,function(t,e,i){"use strict";var n,s,r,a,o,l,c,d,u,h,f,g,m,p,y,v=i&&i.cfg,b=e.createElement("img"),z="sizes"in b&&"srcset"in b,A=/\s+\d+h/g,w=(s=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,r=Array.prototype.forEach,function(){var t=e.createElement("img"),n=function(t){var e,i,n=t.getAttribute(lazySizesConfig.srcsetAttr);n&&(i=n.match(s))&&((e="w"==i[2]?i[1]/i[3]:i[3]/i[1])&&t.setAttribute("data-aspectratio",e),t.setAttribute(lazySizesConfig.srcsetAttr,n.replace(A,"")))},a=function(t){if(t.detail.instance==i){var e=t.target.parentNode;e&&"PICTURE"==e.nodeName&&r.call(e.getElementsByTagName("source"),n),n(t.target)}},o=function(){t.currentSrc&&e.removeEventListener("lazybeforeunveil",a)};e.addEventListener("lazybeforeunveil",a),t.onload=o,t.onerror=o,t.srcset="data:,a 1w 1h",t.complete&&o()});(v.supportsType||(v.supportsType=function(t){return!t}),t.HTMLPictureElement&&z)?!i.hasHDescriptorFix&&e.msElementsFromPoint&&(i.hasHDescriptorFix=!0,w()):t.picturefill||v.pf||(v.pf=function(e){var i,s;if(!t.picturefill)for(i=0,s=e.elements.length;i<s;i++)n(e.elements[i])},d=function(t,e){return t.w-e.w},u=/^\s*\d+\.*\d*px\s*$/,o=/(([^,\s].[^\s]+)\s+(\d+)w)/g,l=/\s/,c=function(t,e,i,n){a.push({c:e,u:i,w:1*n})},f=function(s,r){var a,o=s.getAttribute("srcset")||s.getAttribute(v.srcsetAttr);!o&&r&&(o=s._lazypolyfill?s._lazypolyfill._set:s.getAttribute(v.srcAttr)||s.getAttribute("src")),s._lazypolyfill&&s._lazypolyfill._set==o||(a=h(o||""),r&&s.parentNode&&(a.isPicture="PICTURE"==s.parentNode.nodeName.toUpperCase(),a.isPicture&&t.matchMedia&&(i.aC(s,"lazymatchmedia"),function t(){var i,s,r;t.init||(t.init=!0,addEventListener("resize",(s=e.getElementsByClassName("lazymatchmedia"),r=function(){var t,e;for(t=0,e=s.length;t<e;t++)n(s[t])},function(){clearTimeout(i),i=setTimeout(r,66)})))}())),a._set=o,Object.defineProperty(s,"_lazypolyfill",{value:a,writable:!0}))},g=function(e){return t.matchMedia?(g=function(t){return!t||(matchMedia(t)||{}).matches})(e):!e},m=function(e){var n,s,r,a,o,l,c;if(f(a=e,!0),(o=a._lazypolyfill).isPicture)for(s=0,r=(n=e.parentNode.getElementsByTagName("source")).length;s<r;s++)if(v.supportsType(n[s].getAttribute("type"),e)&&g(n[s].getAttribute("media"))){a=n[s],f(a),o=a._lazypolyfill;break}return o.length>1?(c=a.getAttribute("sizes")||"",c=u.test(c)&&parseInt(c,10)||i.gW(e,e.parentNode),o.d=function(e){var n=t.devicePixelRatio||1,s=i.getX&&i.getX(e);return Math.min(s||n,2.5,n)}(e),!o.src||!o.w||o.w<c?(o.w=c,l=function(t){for(var e,i,n=t.length,s=t[n-1],r=0;r<n;r++)if((s=t[r]).d=s.w/t.w,s.d>=t.d){!s.cached&&(e=t[r-1])&&e.d>t.d-.13*Math.pow(t.d,2.2)&&(i=Math.pow(e.d-.6,1.6),e.cached&&(e.d+=.15*i),e.d+(s.d-t.d)*i>t.d&&(s=e));break}return s}(o.sort(d)),o.src=l):l=o.src):l=o[0],l},(p=function(t){if(!z||!t.parentNode||"PICTURE"==t.parentNode.nodeName.toUpperCase()){var e=m(t);e&&e.u&&t._lazypolyfill.cur!=e.u&&(t._lazypolyfill.cur=e.u,e.cached=!0,t.setAttribute(v.srcAttr,e.u),t.setAttribute("src",e.u))}}).parse=h=function(t){return a=[],(t=t.trim()).replace(A,"").replace(o,c),a.length||!t||l.test(t)||a.push({c:t,u:t,w:99}),a},n=p,v.loadedClass&&v.loadingClass&&(y=[],['img[sizes$="px"][srcset].',"picture > img:not([srcset])."].forEach(function(t){y.push(t+v.loadedClass),y.push(t+v.loadingClass)}),v.pf({elements:e.querySelectorAll(y.join(", "))})))})}}]);
//# sourceMappingURL=6.343e2279.js.map