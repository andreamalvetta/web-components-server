(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{14:function(t,e,i){"use strict";i.r(e);var s=i(17);var n=function(t){const e=window.scrollY||window.pageYOffset,i=t.getBoundingClientRect().top+e,s=e,n=e+window.innerHeight,r=i,o=i+t.clientHeight;return o>=s&&o<=n||r<=n&&r>=s};function r(){const t=babelHelpers.taggedTemplateLiteral(['<img data-src="','" src="','" alt="','">']);return r=function(){return t},t}function o(){const t=babelHelpers.taggedTemplateLiteral(['<source media="','" data-srcset="',"_","w_","x.",'">']);return o=function(){return t},t}function a(){const t=babelHelpers.taggedTemplateLiteral(["<picture>",' <img src="','" alt="','"></picture>']);return a=function(){return t},t}function h(){const t=babelHelpers.taggedTemplateLiteral([""," ",""]);return h=function(){return t},t}function l(){const t=babelHelpers.taggedTemplateLiteral(["<style>:host img{width:100%;height:auto}</style>"]);return l=function(){return t},t}customElements.define("lazy-image",class extends s.a{constructor(){super(),this.src="",this.alt="",this.responsive=!1,this.placeholderImg='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2"%3E%3C/svg%3E',this.imgRootUrl=null,this.imgExt=null,this.devicePixelRatio=1,this.mediaQueries=["(min-width: 801px)","(min-width: 481px)","(min-width: 321px)","(max-width: 320px)"],this.sizes=[1500,800,480,320],this.isImageLoaded=!1,this.resizeEnd=null}firstUpdated(){if(this.shadowImg=this.shadowRoot.querySelector("img"),this.responsive){let t=this.src.split("_");this.setImgRoot(t),t=t[2].split("."),this.setImgExt(t),this.setPixelRatio(),this.setImgHeight(),this.requestUpdate()}this.shadowImg.addEventListener("lazybeforeunveil",this.showImage()),window.addEventListener("scroll",t=>{this.isImageLoaded||this.showImage()}),window.addEventListener("resize",()=>{this.shadowImg.style.height="auto",clearTimeout(this.resizeEnd),this.resizeEnd=setTimeout(()=>{const t=new Event("resizeend");window.dispatchEvent(t)},100)}),window.addEventListener("resizeend",()=>{this.setImgHeight(),this.showImage()})}showImage(){n(this.shadowImg)&&(this.isImageLoaded=!0,lazySizes.loader.unveil(this.shadowImg))}setImgHeight(){this.shadowImg.style.height=parseInt(this.shadowImg.width/3*2)+"px"}setImgRoot(t){return this.imgRootUrl=t[0],this.imgRootUrl}setImgExt(t){return this.imgExt=t[1],this.imgExt}setPixelRatio(){const t=window.devicePixelRatio;return(2===t||t>2)&&(this.devicePixelRatio=2),this.devicePixelRatio}getStyles(){return Object(s.b)(l())}render(){return Object(s.b)(h(),this.getStyles(),this.responsive?Object(s.b)(a(),this.mediaQueries&&this.sizes.map((t,e)=>Object(s.b)(o(),this.mediaQueries[e],this.imgRootUrl,t,this.devicePixelRatio,this.imgExt)),this.placeholderImg,this.alt):Object(s.b)(r(),this.src,this.placeholderImg,this.alt))}static get properties(){return{src:{type:String},responsive:{type:Boolean},alt:{type:String}}}})}}]);
//# sourceMappingURL=7.edd19fb7.js.map