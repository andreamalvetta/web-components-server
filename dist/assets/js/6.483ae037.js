(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{14:function(e,t,i){"use strict";i.r(t);var r=i(18);function s(){var e=babelHelpers.taggedTemplateLiteral(['<img class="lazy" data-src="','" src="','" alt="','">']);return s=function(){return e},e}function a(){var e=babelHelpers.taggedTemplateLiteral(['<source media="','" data-srcset="',"_","w_","x.",'">']);return a=function(){return e},e}function l(){var e=babelHelpers.taggedTemplateLiteral(["<picture>",' <img class="lazy" src="','" alt="','"></picture>']);return l=function(){return e},e}function n(){var e=babelHelpers.taggedTemplateLiteral([""," ",""]);return n=function(){return e},e}function o(){var e=babelHelpers.taggedTemplateLiteral(["<style>:host img{width:100%;height:auto}</style>"]);return o=function(){return e},e}var u=function(e){function t(){var e;return babelHelpers.classCallCheck(this,t),(e=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(t).call(this))).src="",e.alt="",e.responsive=!1,e.placeholderImg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsq6mrBwAE8QH5A52ECwAAAABJRU5ErkJggg==",e.imgRootUrl=null,e.imgExt=null,e.devicePixelRatio=1,e.mediaQueries=["(min-width: 801px)","(min-width: 481px)","(min-width: 321px)","(max-width: 320px)"],e.sizes=[1500,800,480,320],e}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"firstUpdated",value:function(){var e=this.shadowRoot.querySelector(".lazy");if(this.responsive){var t=this.src.split("_");this.setImgRoot(t),t=t[2].split("."),this.setImgExt(t),this.setPixelRatio(),e.addEventListener("lazybeforesizes",this.requestUpdate())}e.addEventListener("lazybeforeunveil",this.showImage(e))}},{key:"showImage",value:function(e){lazySizes.loader.unveil(e)}},{key:"setImgRoot",value:function(e){return this.imgRootUrl=e[0],this.imgRootUrl}},{key:"setImgExt",value:function(e){return this.imgExt=e[1],this.imgExt}},{key:"setPixelRatio",value:function(){var e=window.devicePixelRatio;return(2===e||e>2)&&(this.devicePixelRatio=2),this.devicePixelRatio}},{key:"getStyles",value:function(){return Object(r.b)(o())}},{key:"render",value:function(){var e=this;return Object(r.b)(n(),this.getStyles(),this.responsive?Object(r.b)(l(),this.mediaQueries&&this.sizes.map(function(t,i){return Object(r.b)(a(),e.mediaQueries[i],e.imgRootUrl,t,e.devicePixelRatio,e.imgExt)}),this.placeholderImg,this.alt):Object(r.b)(s(),this.src,this.placeholderImg,this.alt))}}],[{key:"properties",get:function(){return{src:{type:String},responsive:{type:Boolean},alt:{type:String}}}}]),t}(r.a);customElements.define("lazy-image",u)}}]);
//# sourceMappingURL=6.483ae037.js.map