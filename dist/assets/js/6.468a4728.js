(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{12:function(e,t,i){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=window.scrollY||window.pageYOffset,a=e.getBoundingClientRect().top+i,n=i,s=i+window.innerHeight*t,r=a,o=a+e.clientHeight*t;return o>=n&&o<=s||r<=s&&r>=n}},20:function(e,t,i){(function(e){!function(t,a){var n=function e(){a(t.lazySizes),t.removeEventListener("lazyunveilread",e,!0)};a=a.bind(null,t,t.document),"object"==babelHelpers.typeof(e)&&e.exports?a(i(7)):t.lazySizes?n():t.addEventListener("lazyunveilread",n,!0)}(window,function(e,t,i){"use strict";if(e.addEventListener){var a=/\s+/g,n=/\s*\|\s+|\s+\|\s*/g,s=/^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/,r=/^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/,o=/\(|\)|'/,l={contain:1,cover:1},c=function(e,t){if(t){var i=t.match(r);i&&i[1]?e.setAttribute("type",i[1]):e.setAttribute("media",lazySizesConfig.customMedia[t]||t)}},d=function(e){if(e.target._lazybgset){var t=e.target,a=t._lazybgset,n=t.currentSrc||t.src;if(n){var s=i.fire(a,"bgsetproxy",{src:n,useSrc:o.test(n)?JSON.stringify(n):n});s.defaultPrevented||(a.style.backgroundImage="url("+s.detail.useSrc+")")}t._lazybgsetLoading&&(i.fire(a,"_lazyloaded",{},!1,!0),delete t._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(e){var r,o,l;!e.defaultPrevented&&(r=e.target.getAttribute("data-bgset"))&&(l=e.target,(o=t.createElement("img")).alt="",o._lazybgsetLoading=!0,e.detail.firesLoad=!0,function(e,i,r){var o=t.createElement("picture"),l=i.getAttribute(lazySizesConfig.sizesAttr),d=i.getAttribute("data-ratio"),u=i.getAttribute("data-optimumx");i._lazybgset&&i._lazybgset.parentNode==i&&i.removeChild(i._lazybgset),Object.defineProperty(r,"_lazybgset",{value:i,writable:!0}),Object.defineProperty(i,"_lazybgset",{value:o,writable:!0}),e=e.replace(a," ").split(n),o.style.display="none",r.className=lazySizesConfig.lazyClass,1!=e.length||l||(l="auto"),e.forEach(function(e){var i,a=t.createElement("source");l&&"auto"!=l&&a.setAttribute("sizes",l),(i=e.match(s))?(a.setAttribute(lazySizesConfig.srcsetAttr,i[1]),c(a,i[2]),c(a,i[3])):a.setAttribute(lazySizesConfig.srcsetAttr,e),o.appendChild(a)}),l&&(r.setAttribute(lazySizesConfig.sizesAttr,l),i.removeAttribute(lazySizesConfig.sizesAttr),i.removeAttribute("sizes")),u&&r.setAttribute("data-optimumx",u),d&&r.setAttribute("data-ratio",d),o.appendChild(r),i.appendChild(o)}(r,l,o),setTimeout(function(){i.loader.unveil(o),i.rAF(function(){i.fire(o,"_lazyloaded",{},!0,!0),o.complete&&d({target:o})})}))}),t.addEventListener("load",d,!0),e.addEventListener("lazybeforesizes",function(e){if(e.detail.instance==i&&e.target._lazybgset&&e.detail.dataAttr){var t=function(e){var t;return t=(getComputedStyle(e)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!l[t]&&l[e.style.backgroundSize]&&(t=e.style.backgroundSize),t}(e.target._lazybgset);l[t]&&(e.target._lazysizesParentFit=t,i.rAF(function(){e.target.setAttribute("data-parent-fit",t),e.target._lazysizesParentFit&&delete e.target._lazysizesParentFit}))}},!0),t.documentElement.addEventListener("lazybeforesizes",function(e){var t,a;!e.defaultPrevented&&e.target._lazybgset&&e.detail.instance==i&&(e.detail.width=(t=e.target._lazybgset,a=i.gW(t,t.parentNode),(!t._lazysizesWidth||a>t._lazysizesWidth)&&(t._lazysizesWidth=a),t._lazysizesWidth))})}})}).call(this,i(8)(e))},25:function(e,t,i){"use strict";i.r(t);var a=i(10),n=(i(14),i(20),i(7),i(12));function s(){var e=babelHelpers.taggedTemplateLiteral(['<div class="lazy-background-container"><div class="lazy-background"><img class="bg-img" data-src="','"></div><slot></slot></div>']);return s=function(){return e},e}function r(){var e=babelHelpers.taggedTemplateLiteral(['<div class="lazy-background-container"><div class="lazy-background"><img class="bg-img" data-sizes="auto" data-srcset="','"></div><slot></slot></div>']);return r=function(){return e},e}function o(){var e=babelHelpers.taggedTemplateLiteral([""," ",""]);return o=function(){return e},e}function l(){var e=babelHelpers.taggedTemplateLiteral(["<style>:host{margin-bottom:5px;display:block;position:relative}:host .lazy-background-container{position:relative;display:block;background-color:",";width:100%}:host .lazy-background-container .lazy-background{position:absolute;top:0;left:0;width:100%;height:100%;background-size:",";background-position:",";background-repeat:no-repeat;opacity:0;z-index:1}:host .lazy-background-container .lazy-background.loaded{opacity:1;transition:opacity .3s}:host .bg-img{display:none}</style>"]);return l=function(){return e},e}var c=function(e){function t(){var e;return babelHelpers.classCallCheck(this,t),(e=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(t).call(this))).bg="",e.position="center center",e.color="#ccc",e.size="cover",e.responsive=!1,e.imgRootUrl=null,e.imgExt=null,e.devicePixelRatio=1,e.sizes=[1500,800,480,320],e.isImageLoaded=!1,e}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"firstUpdated",value:function(){var e=this;if(this.shadowImg=this.shadowRoot.querySelector(".bg-img"),this.styleContentWrap(),this.responsive){var t=this.bg.split("_");this.setImgRoot(t),t=t[2].split("."),this.setImgExt(t),this.setPixelRatio(),this.requestUpdate()}this.shadowImg.addEventListener("lazybeforeunveil",this.showImage(),!0),this.shadowImg.addEventListener("load",function(t){var i=e.shadowRoot.querySelector(".lazy-background-container .lazy-background");i.style.backgroundImage="url(".concat(t.target.currentSrc||t.target.src,")"),i.classList.add("loaded")},!0),window.addEventListener("load",function(){return e.showImage()},!0),window.addEventListener("scroll",function(){return window.requestAnimationFrame(e.showImage.bind(e))},!0),window.addEventListener("resize",function(){return window.requestAnimationFrame(e.showImage.bind(e))},!0)}},{key:"styleContentWrap",value:function(){var e=this.querySelector(".content");e&&(e.style.padding="30px",e.style.position="relative",e.style.zIndex=2)}},{key:"showImage",value:function(){Object(n.a)(this.shadowImg,1.5)&&!this.isImageLoaded&&(this.isImageLoaded=!0,lazySizes.loader.unveil(this.shadowImg))}},{key:"setImgRoot",value:function(e){return this.imgRootUrl=e[0],this.imgRootUrl}},{key:"setImgExt",value:function(e){return this.imgExt=e[1],this.imgExt}},{key:"setPixelRatio",value:function(){return window.devicePixelRatio>=2&&(this.devicePixelRatio=2),this.devicePixelRatio}},{key:"getStyles",value:function(){return Object(a.b)(l(),this.color,this.size,this.position)}},{key:"render",value:function(){var e=this;return Object(a.b)(o(),this.getStyles(),this.responsive?Object(a.b)(r(),this.sizes.map(function(t,i){return"".concat(i>0?", ":"").concat(e.imgRootUrl,"_").concat(t,"w_").concat(e.devicePixelRatio,"x.").concat(e.imgExt," ").concat(t*e.devicePixelRatio,"w")})):Object(a.b)(s(),this.bg))}}],[{key:"properties",get:function(){return{bg:{type:String},responsive:{type:Boolean},position:{type:String},size:{type:String},color:{type:String}}}}]),t}(a.a);customElements.define("lazy-background",c)}}]);
//# sourceMappingURL=6.468a4728.js.map