(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{18:function(e,t,n){"use strict";n.r(t);var i=n(10);function r(){var e=babelHelpers.taggedTemplateLiteral(["",'<div class="progress-container"><div class="progress-bar"></div></div>']);return r=function(){return e},e}function o(){var e=babelHelpers.taggedTemplateLiteral(["<style>:host .progress-container{height:","px;position:fixed;top:0;left:0;right:0;z-index:1}:host .progress-bar{height:","px;background:#4caf50;width:","%}</style>"]);return o=function(){return e},e}var s=function(e){function t(){var e;return babelHelpers.classCallCheck(this,t),(e=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(t).call(this))).height=3,e.width=0,e}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"firstUpdated",value:function(){var e=this;(void 0!==window.orientation&&-1!==navigator.userAgent.indexOf("Chrome")||void 0!==window.orientation&&-1!==navigator.userAgent.indexOf("Firefox")||void 0!==window.orientation&&-1!==navigator.userAgent.indexOf("Edg"))&&(this.hasMovableBar=!0,this.innerHeight=window.innerHeight+56),void 0!==window.orientation&&-1!==navigator.userAgent.indexOf("SamsungBrowser")&&(this.hasMovableBar=!0,this.innerHeight=window.innerHeight+112),window.addEventListener("load",function(){return e.scrollFunction()}),window.addEventListener("scroll",function(){return window.requestAnimationFrame(e.scrollFunction.bind(e))})}},{key:"scrollFunction",value:function(){this.width=(this.getWindowScroll()/this.getScrollHeight()*100).toFixed(2),this.requestUpdate()}},{key:"getWindowScroll",value:function(){return document.body.scrollTop||document.documentElement.scrollTop}},{key:"getScrollHeight",value:function(){return document.documentElement.scrollHeight-(this.hasMovableBar?this.innerHeight:window.innerHeight)}},{key:"getStyles",value:function(){return Object(i.b)(o(),this.height,this.height,this.width)}},{key:"render",value:function(){return Object(i.b)(r(),this.getStyles())}}]),t}(i.a);customElements.define("scroll-indicator",s)}}]);
//# sourceMappingURL=10.c6f0756f.js.map