(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{13:function(e,t,i){(function(e){!function(t,n){var r=function e(){n(t.lazySizes),t.removeEventListener("lazyunveilread",e,!0)};n=n.bind(null,t,t.document),"object"==babelHelpers.typeof(e)&&e.exports?n(i(8)):t.lazySizes?r():t.addEventListener("lazyunveilread",r,!0)}(window,function(e,t,i){"use strict";var n,r,a,s,o,l,c,u,d,f,h,p,g,m,y,v=i&&i.cfg,b=t.createElement("img"),z="sizes"in b&&"srcset"in b,A=/\s+\d+h/g,w=(r=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,a=Array.prototype.forEach,function(){var e=t.createElement("img"),n=function(e){var t,i,n=e.getAttribute(lazySizesConfig.srcsetAttr);n&&(i=n.match(r))&&((t="w"==i[2]?i[1]/i[3]:i[3]/i[1])&&e.setAttribute("data-aspectratio",t),e.setAttribute(lazySizesConfig.srcsetAttr,n.replace(A,"")))},s=function(e){if(e.detail.instance==i){var t=e.target.parentNode;t&&"PICTURE"==t.nodeName&&a.call(t.getElementsByTagName("source"),n),n(e.target)}},o=function(){e.currentSrc&&t.removeEventListener("lazybeforeunveil",s)};t.addEventListener("lazybeforeunveil",s),e.onload=o,e.onerror=o,e.srcset="data:,a 1w 1h",e.complete&&o()});(v.supportsType||(v.supportsType=function(e){return!e}),e.HTMLPictureElement&&z)?!i.hasHDescriptorFix&&t.msElementsFromPoint&&(i.hasHDescriptorFix=!0,w()):e.picturefill||v.pf||(v.pf=function(t){var i,r;if(!e.picturefill)for(i=0,r=t.elements.length;i<r;i++)n(t.elements[i])},u=function(e,t){return e.w-t.w},d=/^\s*\d+\.*\d*px\s*$/,o=/(([^,\s].[^\s]+)\s+(\d+)w)/g,l=/\s/,c=function(e,t,i,n){s.push({c:t,u:i,w:1*n})},h=function(r,a){var s,o=r.getAttribute("srcset")||r.getAttribute(v.srcsetAttr);!o&&a&&(o=r._lazypolyfill?r._lazypolyfill._set:r.getAttribute(v.srcAttr)||r.getAttribute("src")),r._lazypolyfill&&r._lazypolyfill._set==o||(s=f(o||""),a&&r.parentNode&&(s.isPicture="PICTURE"==r.parentNode.nodeName.toUpperCase(),s.isPicture&&e.matchMedia&&(i.aC(r,"lazymatchmedia"),function e(){var i,r,a;e.init||(e.init=!0,addEventListener("resize",(r=t.getElementsByClassName("lazymatchmedia"),a=function(){var e,t;for(e=0,t=r.length;e<t;e++)n(r[e])},function(){clearTimeout(i),i=setTimeout(a,66)})))}())),s._set=o,Object.defineProperty(r,"_lazypolyfill",{value:s,writable:!0}))},p=function(t){return e.matchMedia?(p=function(e){return!e||(matchMedia(e)||{}).matches})(t):!t},g=function(t){var n,r,a,s,o,l,c;if(h(s=t,!0),(o=s._lazypolyfill).isPicture)for(r=0,a=(n=t.parentNode.getElementsByTagName("source")).length;r<a;r++)if(v.supportsType(n[r].getAttribute("type"),t)&&p(n[r].getAttribute("media"))){s=n[r],h(s),o=s._lazypolyfill;break}return o.length>1?(c=s.getAttribute("sizes")||"",c=d.test(c)&&parseInt(c,10)||i.gW(t,t.parentNode),o.d=function(t){var n=e.devicePixelRatio||1,r=i.getX&&i.getX(t);return Math.min(r||n,2.5,n)}(t),!o.src||!o.w||o.w<c?(o.w=c,l=function(e){for(var t,i,n=e.length,r=e[n-1],a=0;a<n;a++)if((r=e[a]).d=r.w/e.w,r.d>=e.d){!r.cached&&(t=e[a-1])&&t.d>e.d-.13*Math.pow(e.d,2.2)&&(i=Math.pow(t.d-.6,1.6),t.cached&&(t.d+=.15*i),t.d+(r.d-e.d)*i>e.d&&(r=t));break}return r}(o.sort(u)),o.src=l):l=o.src):l=o[0],l},(m=function(e){if(!z||!e.parentNode||"PICTURE"==e.parentNode.nodeName.toUpperCase()){var t=g(e);t&&t.u&&e._lazypolyfill.cur!=t.u&&(e._lazypolyfill.cur=t.u,t.cached=!0,e.setAttribute(v.srcAttr,t.u),e.setAttribute("src",t.u))}}).parse=f=function(e){return s=[],(e=e.trim()).replace(A,"").replace(o,c),s.length||!e||l.test(e)||s.push({c:e,u:e,w:99}),s},n=m,v.loadedClass&&v.loadingClass&&(y=[],['img[sizes$="px"][srcset].',"picture > img:not([srcset])."].forEach(function(e){y.push(e+v.loadedClass),y.push(e+v.loadingClass)}),v.pf({elements:t.querySelectorAll(y.join(", "))})))})}).call(this,i(7)(e))},14:function(e,t,i){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=window.scrollY||window.pageYOffset,n=e.getBoundingClientRect().top+i,r=i,a=i+window.innerHeight*t,s=n,o=n+e.clientHeight*t;return o>=r&&o<=a||s<=a&&s>=r}},22:function(e,t,i){"use strict";i.r(t);var n=i(10),r=(i(13),i(8),i(14));function a(){var e=babelHelpers.taggedTemplateLiteral(['<img data-src="','" src="','" alt="','">']);return a=function(){return e},e}function s(){var e=babelHelpers.taggedTemplateLiteral(['<source media="','" data-srcset="',"_","w_","x.",'">']);return s=function(){return e},e}function o(){var e=babelHelpers.taggedTemplateLiteral(["<picture>",' <img src="','" alt="','"></picture>']);return o=function(){return e},e}function l(){var e=babelHelpers.taggedTemplateLiteral([""," ",""]);return l=function(){return e},e}function c(){var e=babelHelpers.taggedTemplateLiteral(["<style>:host picture{position:relative;display:block;margin-bottom:5px}:host picture:after{content:'';display:block;height:0;width:100%;padding-bottom:","%}:host picture>img{position:absolute;top:0;left:0;width:100%;height:100%;display:block}:host img{width:100%;opacity:0}:host img.lazyloaded{opacity:1;transition:opacity .3s}</style>"]);return c=function(){return e},e}var u=function(e){function t(){var e;return babelHelpers.classCallCheck(this,t),(e=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(t).call(this))).src="",e.alt="",e.responsive=!1,e.placeholderImg="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",e.imgRootUrl=null,e.imgExt=null,e.devicePixelRatio=1,e.mediaQueries=["(min-width: 801px)","(min-width: 481px)","(min-width: 321px)","(max-width: 320px)"],e.sizes=[1500,800,480,320],e.isImageLoaded=!1,e}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"firstUpdated",value:function(){var e=this;if(this.shadowImg=this.shadowRoot.querySelector("img"),this.responsive){var t=this.src.split("_");this.setImgRoot(t),t=t[2].split("."),this.setImgExt(t),this.setPixelRatio(),this.requestUpdate()}this.shadowImg.addEventListener("lazybeforeunveil",this.showImage()),window.addEventListener("load",function(){return e.showImage()}),window.addEventListener("scroll",function(){return window.requestAnimationFrame(e.showImage.bind(e))}),window.addEventListener("resize",function(){return window.requestAnimationFrame(e.showImage.bind(e))})}},{key:"showImage",value:function(){Object(r.a)(this.shadowImg,1.5)&&!this.isImageLoaded&&(this.isImageLoaded=!0,lazySizes.loader.unveil(this.shadowImg))}},{key:"setImgRoot",value:function(e){return this.imgRootUrl=e[0],this.imgRootUrl}},{key:"setImgExt",value:function(e){return this.imgExt=e[1],this.imgExt}},{key:"setPixelRatio",value:function(){return window.devicePixelRatio>=2&&(this.devicePixelRatio=2),this.devicePixelRatio}},{key:"getStyles",value:function(){return Object(n.b)(c(),isNaN(this.height/this.width)?56.25:(this.height/this.width*100).toFixed(2))}},{key:"render",value:function(){var e=this;return Object(n.b)(l(),this.getStyles(),this.responsive?Object(n.b)(o(),this.mediaQueries&&this.sizes.map(function(t,i){return Object(n.b)(s(),e.mediaQueries[i],e.imgRootUrl,t,e.devicePixelRatio,e.imgExt)}),this.placeholderImg,this.alt):Object(n.b)(a(),this.src,this.placeholderImg,this.alt))}}],[{key:"properties",get:function(){return{src:{type:String},responsive:{type:Boolean},alt:{type:String},width:{type:String},height:{type:String}}}}]),t}(n.a);customElements.define("lazy-image",u)},7:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},8:function(e,t,i){(function(e){!function(t,i){var n=function(e,t){"use strict";if(!t.getElementsByClassName)return;var i,n,r=t.documentElement,a=e.Date,s=e.HTMLPictureElement,o=e.addEventListener,l=e.setTimeout,c=e.requestAnimationFrame||l,u=e.requestIdleCallback,d=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],h={},p=Array.prototype.forEach,g=function(e,t){return h[t]||(h[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),h[t].test(e.getAttribute("class")||"")&&h[t]},m=function(e,t){g(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},y=function(e,t){var i;(i=g(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(i," "))},v=function e(t,i,n){var r=n?"addEventListener":"removeEventListener";n&&e(t,i),f.forEach(function(e){t[r](e,i)})},b=function(e,n,r,a,s){var o=t.createEvent("Event");return r||(r={}),r.instance=i,o.initEvent(n,!a,!s),o.detail=r,e.dispatchEvent(o),o},z=function(t,i){var r;!s&&(r=e.picturefill||n.pf)?(i&&i.src&&!t.getAttribute("srcset")&&t.setAttribute("srcset",i.src),r({reevaluate:!0,elements:[t]})):i&&i.src&&(t.src=i.src)},A=function(e,t){return(getComputedStyle(e,null)||{})[t]},w=function(e,t,i){for(i=i||e.offsetWidth;i<n.minSize&&t&&!e._lazysizesWidth;)i=t.offsetWidth,t=t.parentNode;return i},E=(N=[],R=[],I=N,P=function(){var e=I;for(I=N.length?R:N,_=!0,L=!1;e.length;)e.shift()();_=!1},T=function(e,i){_&&!i?e.apply(this,arguments):(I.push(e),L||(L=!0,(t.hidden?l:c)(P)))},T._lsFlush=P,T),C=function(e,t){return t?function(){E(e)}:function(){var t=this,i=arguments;E(function(){e.apply(t,i)})}},x=function(e){var t,i,n=function(){t=null,e()},r=function e(){var t=a.now()-i;t<99?l(e,99-t):(u||n)(n)};return function(){i=a.now(),t||(t=l(r,99))}};var _,L,N,R,I,P,T;!function(){var t,i={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in n=e.lazySizesConfig||e.lazysizesConfig||{},i)t in n||(n[t]=i[t]);e.lazySizesConfig=n,l(function(){n.init&&M()})}();var k=function(){var s,c,f,h,w,_,L,N,R,I,P,T,k,M,S,O,B,F,j,W=/^img$/i,U=/^iframe$/i,D="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),q=0,$=0,Q=-1,J=function(e){$--,(!e||$<0||!e.target)&&($=0)},X=function(e){return null==T&&(T="hidden"==A(t.body,"visibility")),T||"hidden"!=A(e.parentNode,"visibility")&&"hidden"!=A(e,"visibility")},Y=function(e,i){var n,a=e,s=X(e);for(N-=i,P+=i,R-=i,I+=i;s&&(a=a.offsetParent)&&a!=t.body&&a!=r;)(s=(A(a,"opacity")||1)>0)&&"visible"!=A(a,"overflow")&&(n=a.getBoundingClientRect(),s=I>n.left&&R<n.right&&P>n.top-1&&N<n.bottom+1);return s},G=function(){var e,a,o,l,u,d,f,p,g,m,y,v,b=i.elements;if((h=n.loadMode)&&$<8&&(e=b.length)){for(a=0,Q++,m=!n.expand||n.expand<1?r.clientHeight>500&&r.clientWidth>500?500:370:n.expand,i._defEx=m,y=m*n.expFactor,v=n.hFac,T=null,q<y&&$<1&&Q>2&&h>2&&!t.hidden?(q=y,Q=0):q=h>1&&Q>1&&$<6?m:0;a<e;a++)if(b[a]&&!b[a]._lazyRace)if(D)if((p=b[a].getAttribute("data-expand"))&&(d=1*p)||(d=q),g!==d&&(_=innerWidth+d*v,L=innerHeight+d,f=-1*d,g=d),o=b[a].getBoundingClientRect(),(P=o.bottom)>=f&&(N=o.top)<=L&&(I=o.right)>=f*v&&(R=o.left)<=_&&(P||I||R||N)&&(n.loadHidden||X(b[a]))&&(c&&$<3&&!p&&(h<3||Q<4)||Y(b[a],d))){if(ne(b[a]),u=!0,$>9)break}else!u&&c&&!l&&$<4&&Q<4&&h>2&&(s[0]||n.preloadAfterLoad)&&(s[0]||!p&&(P||I||R||N||"auto"!=b[a].getAttribute(n.sizesAttr)))&&(l=s[0]||b[a]);else ne(b[a]);l&&!u&&ne(l)}},K=(k=G,S=0,O=n.throttleDelay,B=n.ricTimeout,F=function(){M=!1,S=a.now(),k()},j=u&&B>49?function(){u(F,{timeout:B}),B!==n.ricTimeout&&(B=n.ricTimeout)}:C(function(){l(F)},!0),function(e){var t;(e=!0===e)&&(B=33),M||(M=!0,(t=O-(a.now()-S))<0&&(t=0),e||t<9?j():l(j,t))}),V=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(J(e),m(t,n.loadedClass),y(t,n.loadingClass),v(t,ee),b(t,"lazyloaded"))},Z=C(V),ee=function(e){Z({target:e.target})},te=function(e){var t,i=e.getAttribute(n.srcsetAttr);(t=n.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),i&&e.setAttribute("srcset",i)},ie=C(function(e,t,i,r,a){var s,o,c,u,h,g;(h=b(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(i?m(e,n.autosizesClass):e.setAttribute("sizes",r)),o=e.getAttribute(n.srcsetAttr),s=e.getAttribute(n.srcAttr),a&&(c=e.parentNode,u=c&&d.test(c.nodeName||"")),g=t.firesLoad||"src"in e&&(o||s||u),h={target:e},m(e,n.loadingClass),g&&(clearTimeout(f),f=l(J,2500),v(e,ee,!0)),u&&p.call(c.getElementsByTagName("source"),te),o?e.setAttribute("srcset",o):s&&!u&&(U.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(i){e.src=t}}(e,s):e.src=s),a&&(o||u)&&z(e,{src:s})),e._lazyRace&&delete e._lazyRace,y(e,n.lazyClass),E(function(){var t=e.complete&&e.naturalWidth>1;g&&!t||(t&&m(e,"ls-is-cached"),V(h),e._lazyCache=!0,l(function(){"_lazyCache"in e&&delete e._lazyCache},9))},!0)}),ne=function(e){var t,i=W.test(e.nodeName),r=i&&(e.getAttribute(n.sizesAttr)||e.getAttribute("sizes")),a="auto"==r;(!a&&c||!i||!e.getAttribute("src")&&!e.srcset||e.complete||g(e,n.errorClass)||!g(e,n.lazyClass))&&(t=b(e,"lazyunveilread").detail,a&&H.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,$++,ie(e,t,a,r,i))},re=function e(){if(!c)if(a.now()-w<999)l(e,999);else{var t=x(function(){n.loadMode=3,K()});c=!0,n.loadMode=3,K(),o("scroll",function(){3==n.loadMode&&(n.loadMode=2),t()},!0)}};return{_:function(){w=a.now(),i.elements=t.getElementsByClassName(n.lazyClass),s=t.getElementsByClassName(n.lazyClass+" "+n.preloadClass),o("scroll",K,!0),o("resize",K,!0),e.MutationObserver?new MutationObserver(K).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r.addEventListener("DOMNodeInserted",K,!0),r.addEventListener("DOMAttrModified",K,!0),setInterval(K,999)),o("hashchange",K,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,K,!0)}),/d$|^c/.test(t.readyState)?re():(o("load",re),t.addEventListener("DOMContentLoaded",K),l(re,2e4)),i.elements.length?(G(),E._lsFlush()):K()},checkElems:K,unveil:ne}}(),H=(O=C(function(e,t,i,n){var r,a,s;if(e._lazysizesWidth=n,n+="px",e.setAttribute("sizes",n),d.test(t.nodeName||""))for(r=t.getElementsByTagName("source"),a=0,s=r.length;a<s;a++)r[a].setAttribute("sizes",n);i.detail.dataAttr||z(e,i.detail)}),B=function(e,t,i){var n,r=e.parentNode;r&&(i=w(e,r,i),(n=b(e,"lazybeforesizes",{width:i,dataAttr:!!t})).defaultPrevented||(i=n.detail.width)&&i!==e._lazysizesWidth&&O(e,r,n,i))},F=x(function(){var e,t=S.length;if(t)for(e=0;e<t;e++)B(S[e])}),{_:function(){S=t.getElementsByClassName(n.autosizesClass),o("resize",F)},checkElems:F,updateElem:B}),M=function e(){e.i||(e.i=!0,H._(),k._())};var S,O,B,F;return i={cfg:n,autoSizer:H,loader:k,init:M,uP:z,aC:m,rC:y,hC:g,fire:b,gW:w,rAF:E}}(t,t.document);t.lazySizes=n,"object"==babelHelpers.typeof(e)&&e.exports&&(e.exports=n)}(window)}).call(this,i(7)(e))}}]);
//# sourceMappingURL=4.ea31f3a4.js.map