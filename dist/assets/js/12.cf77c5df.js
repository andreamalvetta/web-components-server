(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{27:function(e,t,n){"use strict";n.r(t);var r=n(10);function o(){var e=babelHelpers.taggedTemplateLiteral(["",'<div class="progress-container"><div class="progress-bar"></div></div>']);return o=function(){return e},e}function i(){var e=babelHelpers.taggedTemplateLiteral(["<style>:host .progress-container{height:","px;position:fixed;top:0;left:0;right:0;z-index:1}:host .progress-bar{height:","px;background:#4caf50;width:","%}</style>"]);return i=function(){return e},e}var l=function(e,t,n,r){var o,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"==typeof Reflect?"undefined":babelHelpers.typeof(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(i<3?o(l):i>3?o(t,n,l):o(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l},s=function(e){function t(){var e;return babelHelpers.classCallCheck(this,t),(e=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(t).apply(this,arguments))).height=3,e}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"connectedCallback",value:function(){var e=this;babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),document.addEventListener("readystatechange",function(){return e.init()},!0)}},{key:"disconnectedCallback",value:function(){document.removeEventListener("readystatechange",function(){return console.log("removed")},!0),window.removeEventListener("load",function(){return console.log("removed")},!0),window.removeEventListener("scroll",function(){return console.log("removed")},!0),babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this)}},{key:"init",value:function(){var e=this;(void 0!==window.orientation&&-1!==navigator.userAgent.indexOf("Chrome")||void 0!==window.orientation&&-1!==navigator.userAgent.indexOf("Firefox"))&&(this._hasMovableBar=!0,this._innerHeight=window.innerHeight+56),(void 0!==window.orientation&&-1!==navigator.userAgent.indexOf("SamsungBrowser")||void 0!==window.orientation&&-1!==navigator.userAgent.indexOf("Edg"))&&(this._hasMovableBar=!0,this._innerHeight=window.innerHeight+112),window.addEventListener("load",function(){return e.scrollFunction()}),window.addEventListener("scroll",function(){return window.requestAnimationFrame(e.scrollFunction.bind(e))})}},{key:"scrollFunction",value:function(){this._width=(this.getWindowScroll()/this.getScrollHeight()*100).toFixed(2),this.requestUpdate()}},{key:"getWindowScroll",value:function(){return document.body.scrollTop||document.documentElement.scrollTop}},{key:"getScrollHeight",value:function(){return document.documentElement.scrollHeight-(this._hasMovableBar?this._innerHeight:window.innerHeight)}},{key:"getStyles",value:function(){return Object(r.c)(i(),this.height,this.height,this._width||0)}},{key:"render",value:function(){return Object(r.c)(o(),this.getStyles())}}]),t}(r.a);l([Object(r.d)({type:Number})],s.prototype,"height",void 0),s=l([Object(r.b)("scroll-indicator")],s),n.d(t,"ScrollIndicator",function(){return s})}}]);
//# sourceMappingURL=12.cf77c5df.js.map