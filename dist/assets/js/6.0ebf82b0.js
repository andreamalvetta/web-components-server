(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{10:function(t,e,i){"use strict";e.a=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const i=window.scrollY||window.pageYOffset,n=t.getBoundingClientRect().top+i,r=i,s=i+window.innerHeight*e,a=n,o=n+t.clientHeight*e;return o>=r&&o<=s||a<=s&&a>=r}},17:function(t,e,i){"use strict";i.r(e),i.d(e,"LazyImage",function(){return f});var n=i(7),r=(i(9),i(6)),s=i.n(r),a=i(10);function o(){const t=babelHelpers.taggedTemplateLiteral(['<img data-src="','" src="','" alt="','">']);return o=function(){return t},t}function l(){const t=babelHelpers.taggedTemplateLiteral(['<source media="','" data-srcset="',"_","w_","x.",'">']);return l=function(){return t},t}function c(){const t=babelHelpers.taggedTemplateLiteral(["<picture>",' <img src="','" alt="','"></picture>']);return c=function(){return t},t}function d(){const t=babelHelpers.taggedTemplateLiteral([""," ",""]);return d=function(){return t},t}function u(){const t=babelHelpers.taggedTemplateLiteral(["<style>:host picture{position:relative;display:block;margin-bottom:5px}:host picture:after{content:'';display:block;height:0;width:100%;padding-bottom:","%}:host picture>img{position:absolute;top:0;left:0;width:100%;height:100%;display:block}:host img{width:100%;opacity:0}:host img.lazyloaded{opacity:1;transition:opacity .3s}</style>"]);return u=function(){return t},t}var h=function(t,e,i,n){var r,s=arguments.length,a=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(a=(s<3?r(a):s>3?r(e,i,a):r(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let f=class extends n.a{constructor(){super(),this.src="",this.responsive=!1,this.alt="",this.width="",this.height="",this.placeholderImg="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",this.imgRootUrl=null,this.imgExt=null,this.devicePixelRatio=1,this.mediaQueries=["(min-width: 801px)","(min-width: 481px)","(min-width: 321px)","(max-width: 320px)"],this.sizes=[1500,800,480,320],this.isImageLoaded=!1}connectedCallback(){super.connectedCallback(),document.addEventListener("readystatechange",()=>this.init(),!0)}disconnectedCallback(){document.removeEventListener("readystatechange",()=>console.log("removed"),!0),window.removeEventListener("scroll",()=>console.log("removed"),!0),window.removeEventListener("resize",()=>console.log("removed"),!0),super.disconnectedCallback()}init(){if(this.shadowImg=this.shadowRoot.querySelector("img"),this.responsive){let t=this.src.split("_");this.setImgRoot(t),t=t[2].split("."),this.setImgExt(t),this.setPixelRatio(),this.requestUpdate()}this.shadowImg.addEventListener("lazybeforeunveil",this.showImage(),!0),window.addEventListener("scroll",()=>window.requestAnimationFrame(this.showImage.bind(this)),!0),window.addEventListener("resize",()=>window.requestAnimationFrame(this.showImage.bind(this)),!0)}showImage(){Object(a.a)(this.shadowImg,1.5)&&!this.isImageLoaded&&(this.isImageLoaded=!0,s.a.loader.unveil(this.shadowImg))}setImgRoot(t){return this.imgRootUrl=t[0],this.imgRootUrl}setImgExt(t){return this.imgExt=t[1],this.imgExt}setPixelRatio(){return window.devicePixelRatio>=2&&(this.devicePixelRatio=2),this.devicePixelRatio}getStyles(){return Object(n.c)(u(),isNaN(parseInt(this.height,10)/parseInt(this.width,10))?56.25:(parseInt(this.height,10)/parseInt(this.width,10)*100).toFixed(2))}render(){return Object(n.c)(d(),this.getStyles(),this.responsive?Object(n.c)(c(),this.mediaQueries&&this.sizes.map((t,e)=>Object(n.c)(l(),this.mediaQueries[e],this.imgRootUrl,t,this.devicePixelRatio,this.imgExt)),this.placeholderImg,this.alt):Object(n.c)(o(),this.src,this.placeholderImg,this.alt))}};h([Object(n.d)({type:String})],f.prototype,"src",void 0),h([Object(n.d)({type:Boolean})],f.prototype,"responsive",void 0),h([Object(n.d)({type:String})],f.prototype,"alt",void 0),h([Object(n.d)({type:String})],f.prototype,"width",void 0),h([Object(n.d)({type:String})],f.prototype,"height",void 0),f=h([Object(n.b)("lazy-image")],f)},6:function(t,e,i){!function(e,i){var n=function(t,e){"use strict";if(!e.getElementsByClassName)return;var i,n,r=e.documentElement,s=t.Date,a=t.HTMLPictureElement,o=t.addEventListener,l=t.setTimeout,c=t.requestAnimationFrame||l,d=t.requestIdleCallback,u=/^picture$/i,h=["load","error","lazyincluded","_lazyloaded"],f={},p=Array.prototype.forEach,g=function(t,e){return f[e]||(f[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),f[e].test(t.getAttribute("class")||"")&&f[e]},m=function(t,e){g(t,e)||t.setAttribute("class",(t.getAttribute("class")||"").trim()+" "+e)},y=function(t,e){var i;(i=g(t,e))&&t.setAttribute("class",(t.getAttribute("class")||"").replace(i," "))},v=function t(e,i,n){var r=n?"addEventListener":"removeEventListener";n&&t(e,i),h.forEach(function(t){e[r](t,i)})},b=function(t,n,r,s,a){var o=e.createEvent("Event");return r||(r={}),r.instance=i,o.initEvent(n,!s,!a),o.detail=r,t.dispatchEvent(o),o},z=function(e,i){var r;!a&&(r=t.picturefill||n.pf)?(i&&i.src&&!e.getAttribute("srcset")&&e.setAttribute("srcset",i.src),r({reevaluate:!0,elements:[e]})):i&&i.src&&(e.src=i.src)},A=function(t,e){return(getComputedStyle(t,null)||{})[e]},w=function(t,e,i){for(i=i||t.offsetWidth;i<n.minSize&&e&&!t._lazysizesWidth;)i=e.offsetWidth,e=e.parentNode;return i},E=(I=[],N=[],R=I,T=function(){var t=R;for(R=I.length?N:I,L=!0,_=!1;t.length;)t.shift()();L=!1},O=function(t,i){L&&!i?t.apply(this,arguments):(R.push(t),_||(_=!0,(e.hidden?l:c)(T)))},O._lsFlush=T,O),C=function(t,e){return e?function(){E(t)}:function(){var e=this,i=arguments;E(function(){t.apply(e,i)})}},x=function(t){var e,i,n=function(){e=null,t()},r=function t(){var e=s.now()-i;e<99?l(t,99-e):(d||n)(n)};return function(){i=s.now(),e||(e=l(r,99))}};var L,_,I,N,R,T,O;!function(){var e,i={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in n=t.lazySizesConfig||t.lazysizesConfig||{},i)e in n||(n[e]=i[e]);t.lazySizesConfig=n,l(function(){n.init&&S()})}();var P=function(){var a,c,h,f,w,L,_,I,N,R,T,O,P,S,j,k,B,H,F,W=/^img$/i,D=/^iframe$/i,U="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),q=0,$=0,Q=-1,J=function(t){$--,(!t||$<0||!t.target)&&($=0)},X=function(t){return null==O&&(O="hidden"==A(e.body,"visibility")),O||"hidden"!=A(t.parentNode,"visibility")&&"hidden"!=A(t,"visibility")},Y=function(t,i){var n,s=t,a=X(t);for(I-=i,T+=i,N-=i,R+=i;a&&(s=s.offsetParent)&&s!=e.body&&s!=r;)(a=(A(s,"opacity")||1)>0)&&"visible"!=A(s,"overflow")&&(n=s.getBoundingClientRect(),a=R>n.left&&N<n.right&&T>n.top-1&&I<n.bottom+1);return a},G=function(){var t,s,o,l,d,u,h,p,g,m,y,v,b=i.elements;if((f=n.loadMode)&&$<8&&(t=b.length)){for(s=0,Q++,m=!n.expand||n.expand<1?r.clientHeight>500&&r.clientWidth>500?500:370:n.expand,i._defEx=m,y=m*n.expFactor,v=n.hFac,O=null,q<y&&$<1&&Q>2&&f>2&&!e.hidden?(q=y,Q=0):q=f>1&&Q>1&&$<6?m:0;s<t;s++)if(b[s]&&!b[s]._lazyRace)if(U)if((p=b[s].getAttribute("data-expand"))&&(u=1*p)||(u=q),g!==u&&(L=innerWidth+u*v,_=innerHeight+u,h=-1*u,g=u),o=b[s].getBoundingClientRect(),(T=o.bottom)>=h&&(I=o.top)<=_&&(R=o.right)>=h*v&&(N=o.left)<=L&&(T||R||N||I)&&(n.loadHidden||X(b[s]))&&(c&&$<3&&!p&&(f<3||Q<4)||Y(b[s],u))){if(nt(b[s]),d=!0,$>9)break}else!d&&c&&!l&&$<4&&Q<4&&f>2&&(a[0]||n.preloadAfterLoad)&&(a[0]||!p&&(T||R||N||I||"auto"!=b[s].getAttribute(n.sizesAttr)))&&(l=a[0]||b[s]);else nt(b[s]);l&&!d&&nt(l)}},K=(P=G,j=0,k=n.throttleDelay,B=n.ricTimeout,H=function(){S=!1,j=s.now(),P()},F=d&&B>49?function(){d(H,{timeout:B}),B!==n.ricTimeout&&(B=n.ricTimeout)}:C(function(){l(H)},!0),function(t){var e;(t=!0===t)&&(B=33),S||(S=!0,(e=k-(s.now()-j))<0&&(e=0),t||e<9?F():l(F,e))}),V=function(t){var e=t.target;e._lazyCache?delete e._lazyCache:(J(t),m(e,n.loadedClass),y(e,n.loadingClass),v(e,tt),b(e,"lazyloaded"))},Z=C(V),tt=function(t){Z({target:t.target})},et=function(t){var e,i=t.getAttribute(n.srcsetAttr);(e=n.customMedia[t.getAttribute("data-media")||t.getAttribute("media")])&&t.setAttribute("media",e),i&&t.setAttribute("srcset",i)},it=C(function(t,e,i,r,s){var a,o,c,d,f,g;(f=b(t,"lazybeforeunveil",e)).defaultPrevented||(r&&(i?m(t,n.autosizesClass):t.setAttribute("sizes",r)),o=t.getAttribute(n.srcsetAttr),a=t.getAttribute(n.srcAttr),s&&(c=t.parentNode,d=c&&u.test(c.nodeName||"")),g=e.firesLoad||"src"in t&&(o||a||d),f={target:t},m(t,n.loadingClass),g&&(clearTimeout(h),h=l(J,2500),v(t,tt,!0)),d&&p.call(c.getElementsByTagName("source"),et),o?t.setAttribute("srcset",o):a&&!d&&(D.test(t.nodeName)?function(t,e){try{t.contentWindow.location.replace(e)}catch(i){t.src=e}}(t,a):t.src=a),s&&(o||d)&&z(t,{src:a})),t._lazyRace&&delete t._lazyRace,y(t,n.lazyClass),E(function(){var e=t.complete&&t.naturalWidth>1;g&&!e||(e&&m(t,"ls-is-cached"),V(f),t._lazyCache=!0,l(function(){"_lazyCache"in t&&delete t._lazyCache},9))},!0)}),nt=function(t){var e,i=W.test(t.nodeName),r=i&&(t.getAttribute(n.sizesAttr)||t.getAttribute("sizes")),s="auto"==r;(!s&&c||!i||!t.getAttribute("src")&&!t.srcset||t.complete||g(t,n.errorClass)||!g(t,n.lazyClass))&&(e=b(t,"lazyunveilread").detail,s&&M.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,$++,it(t,e,s,r,i))},rt=function t(){if(!c)if(s.now()-w<999)l(t,999);else{var e=x(function(){n.loadMode=3,K()});c=!0,n.loadMode=3,K(),o("scroll",function(){3==n.loadMode&&(n.loadMode=2),e()},!0)}};return{_:function(){w=s.now(),i.elements=e.getElementsByClassName(n.lazyClass),a=e.getElementsByClassName(n.lazyClass+" "+n.preloadClass),o("scroll",K,!0),o("resize",K,!0),t.MutationObserver?new MutationObserver(K).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r.addEventListener("DOMNodeInserted",K,!0),r.addEventListener("DOMAttrModified",K,!0),setInterval(K,999)),o("hashchange",K,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(t){e.addEventListener(t,K,!0)}),/d$|^c/.test(e.readyState)?rt():(o("load",rt),e.addEventListener("DOMContentLoaded",K),l(rt,2e4)),i.elements.length?(G(),E._lsFlush()):K()},checkElems:K,unveil:nt}}(),M=(k=C(function(t,e,i,n){var r,s,a;if(t._lazysizesWidth=n,n+="px",t.setAttribute("sizes",n),u.test(e.nodeName||""))for(r=e.getElementsByTagName("source"),s=0,a=r.length;s<a;s++)r[s].setAttribute("sizes",n);i.detail.dataAttr||z(t,i.detail)}),B=function(t,e,i){var n,r=t.parentNode;r&&(i=w(t,r,i),(n=b(t,"lazybeforesizes",{width:i,dataAttr:!!e})).defaultPrevented||(i=n.detail.width)&&i!==t._lazysizesWidth&&k(t,r,n,i))},H=x(function(){var t,e=j.length;if(e)for(t=0;t<e;t++)B(j[t])}),{_:function(){j=e.getElementsByClassName(n.autosizesClass),o("resize",H)},checkElems:H,updateElem:B}),S=function t(){t.i||(t.i=!0,M._(),P._())};var j,k,B,H;return i={cfg:n,autoSizer:M,loader:P,init:S,uP:z,aC:m,rC:y,hC:g,fire:b,gW:w,rAF:E}}(e,e.document);e.lazySizes=n,t.exports&&(t.exports=n)}(window)},9:function(t,e,i){!function(e,n){var r=function t(){n(e.lazySizes),e.removeEventListener("lazyunveilread",t,!0)};n=n.bind(null,e,e.document),t.exports?n(i(6)):e.lazySizes?r():e.addEventListener("lazyunveilread",r,!0)}(window,function(t,e,i){"use strict";var n,r,s,a,o,l,c,d,u,h,f,p,g,m,y,v=i&&i.cfg,b=e.createElement("img"),z="sizes"in b&&"srcset"in b,A=/\s+\d+h/g,w=(r=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,s=Array.prototype.forEach,function(){var t=e.createElement("img"),n=function(t){var e,i,n=t.getAttribute(lazySizesConfig.srcsetAttr);n&&(i=n.match(r))&&((e="w"==i[2]?i[1]/i[3]:i[3]/i[1])&&t.setAttribute("data-aspectratio",e),t.setAttribute(lazySizesConfig.srcsetAttr,n.replace(A,"")))},a=function(t){if(t.detail.instance==i){var e=t.target.parentNode;e&&"PICTURE"==e.nodeName&&s.call(e.getElementsByTagName("source"),n),n(t.target)}},o=function(){t.currentSrc&&e.removeEventListener("lazybeforeunveil",a)};e.addEventListener("lazybeforeunveil",a),t.onload=o,t.onerror=o,t.srcset="data:,a 1w 1h",t.complete&&o()});(v.supportsType||(v.supportsType=function(t){return!t}),t.HTMLPictureElement&&z)?!i.hasHDescriptorFix&&e.msElementsFromPoint&&(i.hasHDescriptorFix=!0,w()):t.picturefill||v.pf||(v.pf=function(e){var i,r;if(!t.picturefill)for(i=0,r=e.elements.length;i<r;i++)n(e.elements[i])},d=function(t,e){return t.w-e.w},u=/^\s*\d+\.*\d*px\s*$/,o=/(([^,\s].[^\s]+)\s+(\d+)w)/g,l=/\s/,c=function(t,e,i,n){a.push({c:e,u:i,w:1*n})},f=function(r,s){var a,o=r.getAttribute("srcset")||r.getAttribute(v.srcsetAttr);!o&&s&&(o=r._lazypolyfill?r._lazypolyfill._set:r.getAttribute(v.srcAttr)||r.getAttribute("src")),r._lazypolyfill&&r._lazypolyfill._set==o||(a=h(o||""),s&&r.parentNode&&(a.isPicture="PICTURE"==r.parentNode.nodeName.toUpperCase(),a.isPicture&&t.matchMedia&&(i.aC(r,"lazymatchmedia"),function t(){var i,r,s;t.init||(t.init=!0,addEventListener("resize",(r=e.getElementsByClassName("lazymatchmedia"),s=function(){var t,e;for(t=0,e=r.length;t<e;t++)n(r[t])},function(){clearTimeout(i),i=setTimeout(s,66)})))}())),a._set=o,Object.defineProperty(r,"_lazypolyfill",{value:a,writable:!0}))},p=function(e){return t.matchMedia?(p=function(t){return!t||(matchMedia(t)||{}).matches})(e):!e},g=function(e){var n,r,s,a,o,l,c;if(f(a=e,!0),(o=a._lazypolyfill).isPicture)for(r=0,s=(n=e.parentNode.getElementsByTagName("source")).length;r<s;r++)if(v.supportsType(n[r].getAttribute("type"),e)&&p(n[r].getAttribute("media"))){a=n[r],f(a),o=a._lazypolyfill;break}return o.length>1?(c=a.getAttribute("sizes")||"",c=u.test(c)&&parseInt(c,10)||i.gW(e,e.parentNode),o.d=function(e){var n=t.devicePixelRatio||1,r=i.getX&&i.getX(e);return Math.min(r||n,2.5,n)}(e),!o.src||!o.w||o.w<c?(o.w=c,l=function(t){for(var e,i,n=t.length,r=t[n-1],s=0;s<n;s++)if((r=t[s]).d=r.w/t.w,r.d>=t.d){!r.cached&&(e=t[s-1])&&e.d>t.d-.13*Math.pow(t.d,2.2)&&(i=Math.pow(e.d-.6,1.6),e.cached&&(e.d+=.15*i),e.d+(r.d-t.d)*i>t.d&&(r=e));break}return r}(o.sort(d)),o.src=l):l=o.src):l=o[0],l},(m=function(t){if(!z||!t.parentNode||"PICTURE"==t.parentNode.nodeName.toUpperCase()){var e=g(t);e&&e.u&&t._lazypolyfill.cur!=e.u&&(t._lazypolyfill.cur=e.u,e.cached=!0,t.setAttribute(v.srcAttr,e.u),t.setAttribute("src",e.u))}}).parse=h=function(t){return a=[],(t=t.trim()).replace(A,"").replace(o,c),a.length||!t||l.test(t)||a.push({c:t,u:t,w:99}),a},n=m,v.loadedClass&&v.loadingClass&&(y=[],['img[sizes$="px"][srcset].',"picture > img:not([srcset])."].forEach(function(t){y.push(t+v.loadedClass),y.push(t+v.loadingClass)}),v.pf({elements:e.querySelectorAll(y.join(", "))})))})}}]);
//# sourceMappingURL=6.0ebf82b0.js.map