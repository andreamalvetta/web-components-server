(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{13:function(t,e,i){!function(e,i){var n=function(t,e){"use strict";if(!e.getElementsByClassName)return;var i,n,s=e.documentElement,r=t.Date,a=t.HTMLPictureElement,o=t.addEventListener,l=t.setTimeout,c=t.requestAnimationFrame||l,u=t.requestIdleCallback,d=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],g={},h=Array.prototype.forEach,m=function(t,e){return g[e]||(g[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),g[e].test(t.getAttribute("class")||"")&&g[e]},p=function(t,e){m(t,e)||t.setAttribute("class",(t.getAttribute("class")||"").trim()+" "+e)},A=function(t,e){var i;(i=m(t,e))&&t.setAttribute("class",(t.getAttribute("class")||"").replace(i," "))},y=function t(e,i,n){var s=n?"addEventListener":"removeEventListener";n&&t(e,i),f.forEach(function(t){e[s](t,i)})},v=function(t,n,s,r,a){var o=e.createEvent("Event");return s||(s={}),s.instance=i,o.initEvent(n,!r,!a),o.detail=s,t.dispatchEvent(o),o},z=function(e,i){var s;!a&&(s=t.picturefill||n.pf)?(i&&i.src&&!e.getAttribute("srcset")&&e.setAttribute("srcset",i.src),s({reevaluate:!0,elements:[e]})):i&&i.src&&(e.src=i.src)},b=function(t,e){return(getComputedStyle(t,null)||{})[e]},E=function(t,e,i){for(i=i||t.offsetWidth;i<n.minSize&&e&&!t._lazysizesWidth;)i=e.offsetWidth,e=e.parentNode;return i},x=(L=[],N=[],S=L,M=function(){var t=S;for(S=L.length?N:L,_=!0,R=!1;t.length;)t.shift()();_=!1},U=function(t,i){_&&!i?t.apply(this,arguments):(S.push(t),R||(R=!0,(e.hidden?l:c)(M)))},U._lsFlush=M,U),C=function(t,e){return e?function(){x(t)}:function(){var e=this,i=arguments;x(function(){t.apply(e,i)})}},w=function(t){var e,i,n=function(){e=null,t()},s=function t(){var e=r.now()-i;e<99?l(t,99-e):(u||n)(n)};return function(){i=r.now(),e||(e=l(s,99))}};var _,R,L,N,S,M,U;!function(){var e,i={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in n=t.lazySizesConfig||t.lazysizesConfig||{},i)e in n||(n[e]=i[e]);t.lazySizesConfig=n,l(function(){n.init&&O()})}();var B=function(){var a,c,f,g,E,_,R,L,N,S,M,U,B,O,W,H,k,F,D,I=/^img$/i,q=/^iframe$/i,J="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),P=0,$=0,j=-1,Q=function(t){$--,(!t||$<0||!t.target)&&($=0)},V=function(t){return null==U&&(U="hidden"==b(e.body,"visibility")),U||"hidden"!=b(t.parentNode,"visibility")&&"hidden"!=b(t,"visibility")},G=function(t,i){var n,r=t,a=V(t);for(L-=i,M+=i,N-=i,S+=i;a&&(r=r.offsetParent)&&r!=e.body&&r!=s;)(a=(b(r,"opacity")||1)>0)&&"visible"!=b(r,"overflow")&&(n=r.getBoundingClientRect(),a=S>n.left&&N<n.right&&M>n.top-1&&L<n.bottom+1);return a},K=function(){var t,r,o,l,u,d,f,h,m,p,A,y,v=i.elements;if((g=n.loadMode)&&$<8&&(t=v.length)){for(r=0,j++,p=!n.expand||n.expand<1?s.clientHeight>500&&s.clientWidth>500?500:370:n.expand,i._defEx=p,A=p*n.expFactor,y=n.hFac,U=null,P<A&&$<1&&j>2&&g>2&&!e.hidden?(P=A,j=0):P=g>1&&j>1&&$<6?p:0;r<t;r++)if(v[r]&&!v[r]._lazyRace)if(J)if((h=v[r].getAttribute("data-expand"))&&(d=1*h)||(d=P),m!==d&&(_=innerWidth+d*y,R=innerHeight+d,f=-1*d,m=d),o=v[r].getBoundingClientRect(),(M=o.bottom)>=f&&(L=o.top)<=R&&(S=o.right)>=f*y&&(N=o.left)<=_&&(M||S||N||L)&&(n.loadHidden||V(v[r]))&&(c&&$<3&&!h&&(g<3||j<4)||G(v[r],d))){if(nt(v[r]),u=!0,$>9)break}else!u&&c&&!l&&$<4&&j<4&&g>2&&(a[0]||n.preloadAfterLoad)&&(a[0]||!h&&(M||S||N||L||"auto"!=v[r].getAttribute(n.sizesAttr)))&&(l=a[0]||v[r]);else nt(v[r]);l&&!u&&nt(l)}},Y=(B=K,W=0,H=n.throttleDelay,k=n.ricTimeout,F=function(){O=!1,W=r.now(),B()},D=u&&k>49?function(){u(F,{timeout:k}),k!==n.ricTimeout&&(k=n.ricTimeout)}:C(function(){l(F)},!0),function(t){var e;(t=!0===t)&&(k=33),O||(O=!0,(e=H-(r.now()-W))<0&&(e=0),t||e<9?D():l(D,e))}),X=function(t){var e=t.target;e._lazyCache?delete e._lazyCache:(Q(t),p(e,n.loadedClass),A(e,n.loadingClass),y(e,tt),v(e,"lazyloaded"))},Z=C(X),tt=function(t){Z({target:t.target})},et=function(t){var e,i=t.getAttribute(n.srcsetAttr);(e=n.customMedia[t.getAttribute("data-media")||t.getAttribute("media")])&&t.setAttribute("media",e),i&&t.setAttribute("srcset",i)},it=C(function(t,e,i,s,r){var a,o,c,u,g,m;(g=v(t,"lazybeforeunveil",e)).defaultPrevented||(s&&(i?p(t,n.autosizesClass):t.setAttribute("sizes",s)),o=t.getAttribute(n.srcsetAttr),a=t.getAttribute(n.srcAttr),r&&(c=t.parentNode,u=c&&d.test(c.nodeName||"")),m=e.firesLoad||"src"in t&&(o||a||u),g={target:t},p(t,n.loadingClass),m&&(clearTimeout(f),f=l(Q,2500),y(t,tt,!0)),u&&h.call(c.getElementsByTagName("source"),et),o?t.setAttribute("srcset",o):a&&!u&&(q.test(t.nodeName)?function(t,e){try{t.contentWindow.location.replace(e)}catch(i){t.src=e}}(t,a):t.src=a),r&&(o||u)&&z(t,{src:a})),t._lazyRace&&delete t._lazyRace,A(t,n.lazyClass),x(function(){(!m||t.complete&&t.naturalWidth>1)&&(X(g),t._lazyCache=!0,l(function(){"_lazyCache"in t&&delete t._lazyCache},9))},!0)}),nt=function(t){var e,i=I.test(t.nodeName),s=i&&(t.getAttribute(n.sizesAttr)||t.getAttribute("sizes")),r="auto"==s;(!r&&c||!i||!t.getAttribute("src")&&!t.srcset||t.complete||m(t,n.errorClass)||!m(t,n.lazyClass))&&(e=v(t,"lazyunveilread").detail,r&&T.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,$++,it(t,e,r,s,i))},st=function t(){if(!c)if(r.now()-E<999)l(t,999);else{var e=w(function(){n.loadMode=3,Y()});c=!0,n.loadMode=3,Y(),o("scroll",function(){3==n.loadMode&&(n.loadMode=2),e()},!0)}};return{_:function(){E=r.now(),i.elements=e.getElementsByClassName(n.lazyClass),a=e.getElementsByClassName(n.lazyClass+" "+n.preloadClass),o("scroll",Y,!0),o("resize",Y,!0),t.MutationObserver?new MutationObserver(Y).observe(s,{childList:!0,subtree:!0,attributes:!0}):(s.addEventListener("DOMNodeInserted",Y,!0),s.addEventListener("DOMAttrModified",Y,!0),setInterval(Y,999)),o("hashchange",Y,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(t){e.addEventListener(t,Y,!0)}),/d$|^c/.test(e.readyState)?st():(o("load",st),e.addEventListener("DOMContentLoaded",Y),l(st,2e4)),i.elements.length?(K(),x._lsFlush()):Y()},checkElems:Y,unveil:nt}}(),T=(H=C(function(t,e,i,n){var s,r,a;if(t._lazysizesWidth=n,n+="px",t.setAttribute("sizes",n),d.test(e.nodeName||""))for(s=e.getElementsByTagName("source"),r=0,a=s.length;r<a;r++)s[r].setAttribute("sizes",n);i.detail.dataAttr||z(t,i.detail)}),k=function(t,e,i){var n,s=t.parentNode;s&&(i=E(t,s,i),(n=v(t,"lazybeforesizes",{width:i,dataAttr:!!e})).defaultPrevented||(i=n.detail.width)&&i!==t._lazysizesWidth&&H(t,s,n,i))},F=w(function(){var t,e=W.length;if(e)for(t=0;t<e;t++)k(W[t])}),{_:function(){W=e.getElementsByClassName(n.autosizesClass),o("resize",F)},checkElems:F,updateElem:k}),O=function t(){t.i||(t.i=!0,T._(),B._())};var W,H,k,F;return i={cfg:n,autoSizer:T,loader:B,init:O,uP:z,aC:p,rC:A,hC:m,fire:v,gW:E,rAF:x}}(e,e.document);e.lazySizes=n,t.exports&&(t.exports=n)}(window)},6:function(t,e,i){"use strict";i.r(e);var n=i(10);i(13);function s(){const t=babelHelpers.taggedTemplateLiteral(['<img data-src="','" src="','" alt="','">']);return s=function(){return t},t}function r(){const t=babelHelpers.taggedTemplateLiteral(['<picture><source media="(min-width: 801px)" data-srcset="',"_1500w_1x."," 1x, ","_1500w_2x.",' 2x"><source media="(min-width: 481px)" data-srcset="',"_800w_1x."," 1x, ","_800w_2x.",' 2x"><source media="(min-width: 321px)" data-srcset="',"_480w_1x."," 1x, ","_480w_2x.",' 2x"><source data-srcset="',"_320w_1x."," 1x, ","_320w_2x.",' 2x"><img src="','" alt="','"></picture>']);return r=function(){return t},t}function a(){const t=babelHelpers.taggedTemplateLiteral([""," ",""]);return a=function(){return t},t}function o(){const t=babelHelpers.taggedTemplateLiteral(["<style>:host img{width:100%;height:auto}</style>"]);return o=function(){return t},t}customElements.define("lazy-image",class extends n.a{constructor(){super(),this.src="",this.alt="",this.responsive=!1,this.lazy=!1,this.placeholderImg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsq6mrBwAE8QH5A52ECwAAAABJRU5ErkJggg=="}firstUpdated(){if(this.responsive){let t=this.src.split("_");this.imgRootUrl=t[0],t=t[2].split("."),this.imgExt=t[1],this.requestUpdate()}const t=this.shadowRoot.querySelector("img");t.addEventListener("lazybeforeunveil",this.unveil(t))}unveil(t){lazySizes.loader.unveil(t)}getStyles(){return Object(n.b)(o())}render(){return Object(n.b)(a(),this.getStyles(),this.responsive?Object(n.b)(r(),this.imgRootUrl,this.imgExt,this.imgRootUrl,this.imgExt,this.imgRootUrl,this.imgExt,this.imgRootUrl,this.imgExt,this.imgRootUrl,this.imgExt,this.imgRootUrl,this.imgExt,this.imgRootUrl,this.imgExt,this.imgRootUrl,this.imgExt,this.placeholderImg,this.alt):Object(n.b)(s(),this.src,this.placeholderImg,this.alt))}static get properties(){return{src:{type:String},responsive:{type:Boolean},alt:{type:String}}}})}}]);
//# sourceMappingURL=5.369750a3.js.map