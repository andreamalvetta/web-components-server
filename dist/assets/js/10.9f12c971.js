(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{14:function(e,t,i){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=window.scrollY||window.pageYOffset,n=e.getBoundingClientRect().top+i,o=i,a=i+window.innerHeight*t,s=n,r=n+e.clientHeight*t;return r>=o&&r<=a||s<=a&&s>=o}},23:function(e,t,i){"use strict";i.r(t);var n=i(10),o=(i(13),i(18),i(8),i(14));function a(){var e=babelHelpers.taggedTemplateLiteral(['<div class="lazy-background-container"><div class="lazy-background"><img class="bg-img" data-src="','"></div><slot></slot></div>']);return a=function(){return e},e}function s(){var e=babelHelpers.taggedTemplateLiteral(['<div class="lazy-background-container"><div class="lazy-background"><img class="bg-img" data-sizes="auto" data-srcset="','"></div><slot></slot></div>']);return s=function(){return e},e}function r(){var e=babelHelpers.taggedTemplateLiteral([""," ",""]);return r=function(){return e},e}function l(){var e=babelHelpers.taggedTemplateLiteral(["<style>:host{margin-bottom:5px;display:block;position:relative}:host .lazy-background-container{position:relative;display:block;background-color:",";width:100%}:host .lazy-background-container .lazy-background{position:absolute;top:0;left:0;width:100%;height:100%;background-size:",";background-position:",";background-repeat:no-repeat;opacity:0;z-index:1}:host .lazy-background-container .lazy-background.loaded{opacity:1;transition:opacity .3s}:host .bg-img{display:none}</style>"]);return l=function(){return e},e}var c=function(e){function t(){var e;return babelHelpers.classCallCheck(this,t),(e=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(t).call(this))).bg="",e.position="center center",e.color="#ccc",e.size="cover",e.responsive=!1,e.imgRootUrl=null,e.imgExt=null,e.devicePixelRatio=1,e.sizes=[1500,800,480,320],e.isImageLoaded=!1,e}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"firstUpdated",value:function(){var e=this;if(this.shadowImg=this.shadowRoot.querySelector(".bg-img"),this.styleContentWrap(),this.responsive){var t=this.bg.split("_");this.setImgRoot(t),t=t[2].split("."),this.setImgExt(t),this.setPixelRatio(),this.requestUpdate()}this.shadowImg.addEventListener("lazybeforeunveil",this.showImage(),!0),this.shadowImg.addEventListener("load",function(t){var i=e.shadowRoot.querySelector(".lazy-background-container .lazy-background");i.style.backgroundImage="url(".concat(t.target.currentSrc||t.target.src,")"),i.classList.add("loaded")},!0),window.addEventListener("load",function(){return e.showImage()},!0),window.addEventListener("scroll",function(){return window.requestAnimationFrame(e.showImage.bind(e))},!0),window.addEventListener("resize",function(){return window.requestAnimationFrame(e.showImage.bind(e))},!0)}},{key:"styleContentWrap",value:function(){var e=this.querySelector(".content");e&&(e.style.padding="30px",e.style.position="relative",e.style.zIndex=2)}},{key:"showImage",value:function(){Object(o.a)(this.shadowImg,1.5)&&!this.isImageLoaded&&(this.isImageLoaded=!0,lazySizes.loader.unveil(this.shadowImg))}},{key:"setImgRoot",value:function(e){return this.imgRootUrl=e[0],this.imgRootUrl}},{key:"setImgExt",value:function(e){return this.imgExt=e[1],this.imgExt}},{key:"setPixelRatio",value:function(){return window.devicePixelRatio>=2&&(this.devicePixelRatio=2),this.devicePixelRatio}},{key:"getStyles",value:function(){return Object(n.b)(l(),this.color,this.size,this.position)}},{key:"render",value:function(){var e=this;return Object(n.b)(r(),this.getStyles(),this.responsive?Object(n.b)(s(),this.sizes.map(function(t,i){return"".concat(i>0?", ":"").concat(e.imgRootUrl,"_").concat(t,"w_").concat(e.devicePixelRatio,"x.").concat(e.imgExt," ").concat(t*e.devicePixelRatio,"w")})):Object(n.b)(a(),this.bg))}}],[{key:"properties",get:function(){return{bg:{type:String},responsive:{type:Boolean},position:{type:String},size:{type:String},color:{type:String}}}}]),t}(n.a);customElements.define("lazy-background",c)}}]);
//# sourceMappingURL=10.9f12c971.js.map