(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{21:function(e,t,o){"use strict";o.r(t),o.d(t,"LazyBackground",function(){return g});var i=o(8),n=(o(12),o(11)),r=o.n(n),a=o(14);function s(){var e=babelHelpers.taggedTemplateLiteral(['<div class="lazy-background-container"><div class="lazy-background"><img class="bg-img" data-src="','"></div><slot></slot></div>']);return s=function(){return e},e}function c(){var e=babelHelpers.taggedTemplateLiteral(['<div class="lazy-background-container"><div class="lazy-background"><img class="bg-img" data-sizes="auto" data-srcset="','"></div><slot></slot></div>']);return c=function(){return e},e}function l(){var e=babelHelpers.taggedTemplateLiteral([""," ",""]);return l=function(){return e},e}function d(){var e=babelHelpers.taggedTemplateLiteral(["<style>:host{margin-bottom:5px;display:block;position:relative}:host .lazy-background-container{position:relative;display:block;background-color:",";width:100%}:host .lazy-background-container .lazy-background{position:absolute;top:0;left:0;width:100%;height:100%;background-size:",";background-position:",";background-repeat:no-repeat;opacity:0;z-index:1}:host .lazy-background-container .lazy-background.loaded{opacity:1;transition:opacity .3s}:host .bg-img{display:none}</style>"]);return d=function(){return e},e}var u=function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"===("undefined"==typeof Reflect?"undefined":babelHelpers.typeof(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},g=function(e){function t(){var e;return babelHelpers.classCallCheck(this,t),(e=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(t).call(this))).bg="",e.responsive=!1,e.position="center center",e.size="cover",e.color="#ccc",e.imgRootUrl=null,e.imgExt=null,e.devicePixelRatio=1,e.sizes=[1500,800,480,320],e.isImageLoaded=!1,e}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"connectedCallback",value:function(){var e=this;babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),document.addEventListener("readystatechange",function(){return e.init()},!0)}},{key:"disconnectedCallback",value:function(){document.removeEventListener("readystatechange",function(){return console.log("removed")},!0),window.removeEventListener("scroll",function(){return console.log("removed")},!0),window.removeEventListener("resize",function(){return console.log("removed")},!0),babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this)}},{key:"init",value:function(){var e=this;if(this.shadowImg=this.shadowRoot.querySelector(".bg-img"),this.styleContentWrap(),this.responsive){var t=this.bg.split("_");this.setImgRoot(t),t=t[2].split("."),this.setImgExt(t),this.setPixelRatio(),this.requestUpdate()}this.shadowImg.addEventListener("lazybeforeunveil",this.showImage(),!0),this.shadowImg.addEventListener("load",function(t){var o=e.shadowRoot.querySelector(".lazy-background-container .lazy-background");o.style.backgroundImage="url(".concat(t.target.currentSrc||t.target.src,")"),o.classList.add("loaded")},!0),window.addEventListener("scroll",function(){return window.requestAnimationFrame(e.showImage.bind(e))},!0),window.addEventListener("resize",function(){return window.requestAnimationFrame(e.showImage.bind(e))},!0)}},{key:"styleContentWrap",value:function(){var e=this.querySelector(".content");e&&(e.style.padding="30px",e.style.position="relative",e.style.zIndex=2)}},{key:"showImage",value:function(){Object(a.a)(this.shadowImg,1.5)&&!this.isImageLoaded&&(this.isImageLoaded=!0,r.a.loader.unveil(this.shadowImg))}},{key:"setImgRoot",value:function(e){return this.imgRootUrl=e[0],this.imgRootUrl}},{key:"setImgExt",value:function(e){return this.imgExt=e[1],this.imgExt}},{key:"setPixelRatio",value:function(){return window.devicePixelRatio>=2&&(this.devicePixelRatio=2),this.devicePixelRatio}},{key:"getStyles",value:function(){return Object(i.c)(d(),this.color,this.size,this.position)}},{key:"render",value:function(){var e=this;return Object(i.c)(l(),this.getStyles(),this.responsive?Object(i.c)(c(),this.sizes.map(function(t,o){return"".concat(o>0?", ":"").concat(e.imgRootUrl,"_").concat(t,"w_").concat(e.devicePixelRatio,"x.").concat(e.imgExt," ").concat(t*e.devicePixelRatio,"w")})):Object(i.c)(s(),this.bg))}}]),t}(i.a);u([Object(i.d)({type:String})],g.prototype,"bg",void 0),u([Object(i.d)({type:Boolean})],g.prototype,"responsive",void 0),u([Object(i.d)({type:String})],g.prototype,"position",void 0),u([Object(i.d)({type:String})],g.prototype,"size",void 0),u([Object(i.d)({type:String})],g.prototype,"color",void 0),g=u([Object(i.b)("lazy-background")],g)}}]);
//# sourceMappingURL=9.2de000b8.js.map