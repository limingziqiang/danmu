parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"sxvS":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var t=window.getComputedStyle;function e(t){return+t.replace("px","")}function o(o,r){return void 0===r&&(r=2),+(o/e(t(document.documentElement).fontSize)).toFixed(r)}function r(){return e(t(document.documentElement).fontSize)}function i(e){var o=t(e).transform;if("none"===o)return{x:0,y:0};var r=o.match(/matrix\((.*)\)/)[1].split(",");return{x:+r[4].trim(),y:+r[5].trim()}}function n(o,r,i){void 0===i&&(i=document.body);var n=document.createElement(o);n.className=r,n.innerHTML="啊啊",n.style.cssText="position:absolute; visibility:hidden",i.appendChild(n);var d=t(n),m=e(d.borderLeftWidth)+e(d.borderRightWidth),a=e(d.paddingLeft)+e(d.paddingRight),u=e(d.marginLeft)+e(d.marginRight),p=e(d.borderTopWidth)+e(d.borderBottomWidth),s=e(d.paddingTop)+e(d.paddingBottom),h=e(d.marginTop)+e(d.marginBottom),l=e(d.width),c=e(d.height),g=m+a+u,x=p+s+h;return console.log(g,l),i.removeChild(n),{outerWidth:g,outerHeight:x,letterWidth:l/2,height:c}}exports.pxToNumer=e,exports.pxToRem=o,exports.getRemValue=r,exports.get2DTranslate=i,exports.measureElement=n;
},{}],"iQRt":[function(require,module,exports) {
"use strict";var t;exports.__esModule=!0,function(t){t.radom="random",t.quque="queque"}(t=exports.TraceStrategy||(exports.TraceStrategy={}));var e=function(){function t(t){this.option=t,this.period=0,this.traces=[],this.createTraces(),this.xaxis=0}return t.prototype.increasePeriod=function(){this.period++,this.xaxis+=this.option.width},Object.defineProperty(t.prototype,"traceCount",{get:function(){return this.traces.length},enumerable:!0,configurable:!0}),t.prototype.createTraces=function(){for(var t=[],e=this.option,i=e.height,r=e.traceHeight,s=~~(i/r),n=0;n<s;n++)t.push({tail:0,y:r*n});this.traces=t},t.prototype.reset=function(){this.period=0,this.traces=[],this.createTraces(),this.xaxis=0},t.prototype.resize=function(t){this.option=t;var e=this.traces,i=e.length,r=this.option,s=r.height,n=r.traceHeight,o=~~(s/n);if(o!==i)if(o<i)e.splice(o);else for(var a=this.findTraceIndex(),c=a>=0?e[a].tail:0,h=i-1;h<o;h++)e.push({tail:c,y:n*h})},t.prototype.get=function(){var t=this.findTraceIndex();return{index:t,y:this.traces[t].y}},t.prototype.set=function(t,e,i){this.traces[t].tail=this.xaxis+e+i},t.prototype.findTraceIndex=function(){var t=this.traces.map(function(t){return t.tail}),e=Math.min.apply(Math,t);return this.traces.findIndex(function(t){return t.tail===e})},t}();exports.default=e;
},{}],"InNH":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};exports.__esModule=!0;var i=require("./util"),n=e(require("./traceManager")),a={reuse:!1,duration:1e4,checkPeriod:1e3,useMeasure:!1,slideRatio:4},r="danmu-item",s=2.5,o=function(){function e(t){this.wrapper=t,this.sample=document.createElement("div"),this.sample.className=r,this.rect=this.wrapper.getBoundingClientRect(),this.HEIGHT=this.wrapper.clientHeight,this.WIDTH=this.wrapper.clientWidth}return e.prototype.getTraceHeight=function(){return this.baseMeasure=i.measureElement("div",r,this.wrapper),this.baseMeasure.outerHeight+this.baseMeasure.height},e.prototype.init=function(t){void 0===t&&(t=a);var e=this.HEIGHT,i=this.WIDTH;this.option=Object.assign(a,t),this.createFrames(this.wrapper),this.recycle();var r=this.getTraceHeight();this.traceManager=new n.default({height:e,width:i*this.option.slideRatio/2,traceHeight:r})},e.prototype.resize=function(t){window.getComputedStyle(this.wrapper).height,this.rect=this.wrapper.getBoundingClientRect(),console.log(this.wrapper.clientHeight,this.wrapper.clientWidth),this.HEIGHT=this.wrapper.clientHeight,this.WIDTH=this.wrapper.clientWidth;var e=this.getTraceHeight();this.traceManager.resize({height:this.HEIGHT,width:this.WIDTH*this.option.slideRatio/2,traceHeight:e}),this.frame2.style.animationDuration=2*t.duration+"ms",this.frame1.style.animationDuration=2*t.duration+"ms",this.animatingTime=Date.now(),this.option.duration=t.duration},e.prototype.start=function(){this.frame1.classList.contains("danmu-animation-1")?console.log("already started..."):(this.frame1.classList.add("danmu-animation-1"),this.animatingTime=Date.now(),this.status=1,this.traceManager.reset())},e.prototype.stop=function(){this.status=0,this.clearTicket&&clearInterval(this.clearTicket),this.frame1&&(this.frame1.classList.remove("danmu-animation-1","danmu-animation-2"),this.frame1.innerHTML="",this.frame1.getBoundingClientRect()),this.frame2&&(this.frame2.classList.remove("danmu-animation-1","danmu-animation-2"),this.frame2.innerHTML="",this.frame2.getBoundingClientRect())},e.prototype.pause=function(){this.frame1&&(this.frame1.style.animationPlayState="paused",this.frame2&&(this.frame2.style.animationPlayState="paused",this.pausedTime=Date.now(),this.status=3))},e.prototype.continue=function(){this.frame1&&(this.frame1.style.animationPlayState="running",this.frame2&&(this.frame2.style.animationPlayState="running",this.animatingTime+=Date.now()-this.pausedTime,this.pausedTime=0,this.status=1))},e.prototype.getCurrentX=function(t){return-i.get2DTranslate(t).x},e.prototype.getElementLength=function(t,e){var i=this.option.useMeasure,n=t.forceDetect,a=t.render,r=t.content;if(!i||n||a)return e.getBoundingClientRect().width;if(i){var s=this.baseMeasure;return r.length*s.letterWidth+s.outerWidth}},e.prototype.getTraceInfo=function(t){if(t.trace){var e=Math.min(t.trace,this.traceManager.traceCount-1);return{index:e,y:this.traceManager.traces[e].y}}return this.traceManager.get()},e.prototype.sendDanmu=function(t){var e=this;if(!(1!==this.status||t.length<=0)){var i=document.querySelector(".danmu-animation-1");if(i){var n=this.traceManager,a=i.querySelectorAll(".danmu-item.hide"),s=a.length,o=this.getCurrentX(i);if(s>0){for(var c=Math.min(t.length,s),m=null,l=0;l<c;l++){var h=t[l],u=this.getTraceInfo(h),d=u.index,p=u.y;(m=a[l]).class=r,m.innerHTML=h.content,m.style.cssText="top:"+p+"px;left:"+o+"px;"+(h.style||""),h.className&&m.classList.add(h.className),n.set(d,o,this.getElementLength(h,m))}t.splice(0,c)}if(t.length>0){t.map(function(t){var a=e.getTraceInfo(t),r=a.index,s=a.y,c=e.createDanmuItem(t,o,s);return i.appendChild(c),n.set(r,o,e.getElementLength(t,c)),i});t.splice(0)}}}},e.prototype.createFrames=function(t){var e=this.option,i=e.duration,n=e.slideRatio,a=document.createElement("div");a.className="danmu-frame ",a.style.animationDuration=2*i+"ms",a.id="frames_frame1";var r=a.cloneNode();if(r.style.animationDuration=2*i+"ms",r.id="frames_frame2",n){var o=Math.max(s,n);a.style.width=100*o+"%",r.style.width=100*o+"%"}t.appendChild(a),t.appendChild(r),this.frame1=a,this.frame2=r,this.resgisterAnimationEvents()},e.prototype.createDanmuItem=function(t,e,i){var n=t.render&&this.createDanmuWithRender(t,e,i);if(n)return n;var a=this.getNewTopLeft(e,i),r=a.top,s=a.left;return(n=this.sample.cloneNode()).innerHTML=t.content,n.dataset.tLength=t.content.length+"",n.style.cssText="top:"+r+"px;left:"+s+"px;"+(t.style||""),t.className&&n.classList.add(t.className),n},e.prototype.createDanmuWithRender=function(e,i,n){var a={left:i,top:n,class:e.className,style:e.style};if("function"==typeof e.render){var s=e.render(a);if(s instanceof HTMLElement)return s.classList.contains(r)||s.classList.add(r),s;if("string"==typeof s)return this.wrapperHTMLStringDanmu(i,n,e.render)}else{if("object"===t(e.render)&&e.render instanceof HTMLElement)return e.render;if("string"==typeof e.render)return this.wrapperHTMLStringDanmu(i,n,e.render)}return null},e.prototype.wrapperHTMLStringDanmu=function(t,e,i){var n=this.getNewTopLeft(t,e),a=n.top,r=n.left,s=this.sample.cloneNode();return s.innerHTML=i,s.style.cssText="top:"+a+"px;left:"+r+"px;",s},e.prototype.recycle=function(){var t=this,e=this.option.checkPeriod;this.clearTicket=setInterval(function(){var e=document.querySelector(".danmu-animation-2");if(e){var i=t.rect,n=i.left,a=i.width,r=n+a;console.time("recycle");var s=e.querySelectorAll(".danmu-item:not(.hide)");Array.from(s).slice(0,120).filter(function(t){var e=t.getBoundingClientRect();return!(e.left+e.width>=n&&e.left<=r)}).forEach(function(t){t.style.cssText="",t.classList.add("hide")}),console.timeEnd("recycle")}},e)},e.prototype.getNewTopLeft=function(t,e){return{top:void 0!==e?e:~~(Math.random()*this.HEIGHT),left:t}},e.prototype.clearDanmus=function(t){this.option.reuse?t.querySelectorAll(".danmu-item:not(.hide)").forEach(function(t){t.classList.add("hide"),t.style.transition&&(t.style.transition=null,t.style.transform=null)}):t.innerHTML=""},e.prototype.resgisterAnimationEvents=function(){var t=this,e=this.frame1,i=this.frame2;this.frame1.addEventListener("animationend",function(n){switch(n.animationName){case"animation-stage-1":t.animatingTime=Date.now(),e.classList.remove("danmu-animation-1"),e.classList.add("danmu-animation-2"),i.classList.add("danmu-animation-1"),e.style.zIndex="11",i.style.zIndex="10",t.traceManager.increasePeriod();break;case"animation-stage-2":t.clearDanmus(e),e.classList.remove("danmu-animation-2")}}),i.addEventListener("animationend",function(n){switch(n.animationName){case"animation-stage-1":t.animatingTime=Date.now(),i.classList.remove("danmu-animation-1"),i.classList.add("danmu-animation-2"),e.classList.add("danmu-animation-1"),i.style.zIndex="11",e.style.zIndex="10",t.traceManager.increasePeriod();break;case"animation-stage-2":t.clearDanmus(i),i.classList.remove("danmu-animation-2")}})},e}();exports.default=o;
},{"./util":"sxvS","./traceManager":"iQRt"}],"VYz0":[function(require,module,exports) {
"use strict";exports.__esModule=!0;var n=[],e=[],t=null;function r(){return n.splice(0)}function u(e){n.push.apply(n,e)}function i(){t&&cancelAnimationFrame(t)}function o(){var n=r();e.forEach(function(e){return e(n)}),t=requestAnimationFrame(function(){return o()})}function c(n){e.push(n),t||o()}function s(n){var t=e.find(function(e){return e===n});t>0&&e.splice(t,1),e.length<=0&&i()}exports.dequeue=r,exports.enqueue=u,exports.addListener=c,exports.removeListener=s;
},{}],"E7Wx":[function(require,module,exports) {
"use strict";var t=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};exports.__esModule=!0;var e=t(require("./factory")),n=require("./queue");function r(t){return"string"==typeof t?{content:t}:t}var o=function(){function t(t){this.factory=new e.default(t),this.batch=this.batch.bind(this)}return t.prototype.batch=function(t){this.factory.sendDanmu(t)},t.prototype.sendDanmu=function(t){if(1===this.factory.status){var e=null;e=Array.isArray(t)?t.map(function(t){return r(t)}):[r(t)],n.enqueue(e)}},t.prototype.init=function(t){this.factory.init(t)},t.prototype.start=function(){this.factory.start(),n.addListener(this.batch)},t.prototype.stop=function(){this.factory.stop(),n.removeListener(this.batch)},t.prototype.pause=function(){this.factory.pause()},t.prototype.continue=function(){this.factory.continue()},t.prototype.resize=function(t){this.factory.resize(t)},t}();function i(t){return new o(t)}exports.DanmuManager=o,exports.default=i;
},{"./factory":"InNH","./queue":"VYz0"}],"nYeO":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var t=e(require("./lib/index")),n=document.querySelector("video"),i=!1;n.oncanplay=function(){i||(i=!0)};var o=document.getElementById("container"),l=null;l=t.default(o),window.manager=l,l.init({duration:8e3,slideRatio:3,useMeasure:!0}),l.start();var c=0,r=[{content:"完结撒花完结撒花完结撒花",style:"color:Red"},{content:"25.5啥的也算一级",style:"color:green"},{forceDetect:!0,content:"<img src='//static.hdslb.com/images/member/noface.gif' style='height:20px;vertical-align: middle;'>留下jo印留下jo印留下jo印"},{render:"高价回收天堂之眼，不要问我为什么"},{render:function(e){var t=e.left,n=e.top,i=document.createElement("span");return i.innerHTML="麦姐在学院除了老大老二基本就是最厉害的了 from span",i.style.left=t+"px",i.style.top=n+"px",i.style.zIndex="999",i.style.backgroundColor="#666",i}},"好假炮姐当年1v3有一个5的和两个4的都打得过","这个女的好帅啊，一拳一个机器人的那个","哇喔哇喔哇喔哇喔好燃啊！！！","黑琴黑琴黑琴黑琴黑琴黑琴黑琴黑琴黑琴黑琴黑琴黑琴黑琴黑琴",{content:"子弹是金属，枪也是金属，炮姐直接操控啊",style:"border:solid 1px blue"}];function d(e){return~~(Math.random()*e)}function a(e){for(var t=[],n=r.length,i=0;i<e;i++)t.push(r[d(n)]);return t}var u=document.getElementById("txtInterval"),s=document.getElementById("txtBatchCount");function m(){var e=+s.value;l.sendDanmu(a(e)),c=setInterval(function(){l.sendDanmu(a(e))},+u.value)}var f=!1,g=document.getElementById("txtDanmu");document.getElementById("btnSend").addEventListener("click",function(e){l.sendDanmu(g.value),e.stopPropagation()},!1),document.getElementById("btnPause").addEventListener("click",function(){f&&clearInterval(c),l.pause()}),document.getElementById("btnContiue").addEventListener("click",function(){f&&m(),l.continue()}),document.getElementById("btnStart").addEventListener("click",function(){l.start()}),document.getElementById("btnStop").addEventListener("click",function(){l.stop(),clearInterval(c),f=!1}),document.getElementById("btnBigTest").addEventListener("click",function(){f||(clearInterval(c),l.start(),m(),f=!0)}),function(){var e=document.createElement("script");e.onload=function(){var e=new window.Stats;document.body.appendChild(e.dom),requestAnimationFrame(function t(){e.update(),requestAnimationFrame(t)})},e.src="//mrdoob.github.io/stats.js/build/stats.min.js",document.head.appendChild(e)}();var v=document.getElementById("lbTotal"),y=document.getElementById("lbHide"),p=document.getElementById("lbInView"),b=o.getBoundingClientRect(),h=b.left,E=b.width,I=h+E;function B(){o.classList.add("fullScreen"),n.classList.add("fullScreen"),n.setAttribute("webkit-playsinline",""),n.setAttribute("playsinline",""),l.resize({duration:1e4})}function L(){o.style.width="1349px",o.style.height="758px",o.classList.remove("fullScreen"),n.classList.remove("fullScreen"),l.resize({duration:8e3})}setInterval(function(){window.requestIdleCallback(function(){var e=Array.from(document.querySelectorAll(".danmu-item")),t=e.length,n=e.filter(function(e){return e.classList.contains("hide")}).length,i=e.filter(function(e){var t=e.getBoundingClientRect();return!e.classList.contains("hide")&&t.left+t.width>=h}).length;v.innerText=t+"",y.innerHTML=n+"",p.innerHTML=i+""})},5e3),document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState&&(l.stop(),console.log("stop....")),"visible"===document.visibilityState&&(l.start(),console.log("start...."))}),document.addEventListener("fullscreenchange",function(){console.log("fullscreenchange"),document.fullscreenElement?B():L()}),document.getElementById("btnFull").addEventListener("click",function(e){e.stopPropagation(),document.body.requestFullscreen().then(function(){setTimeout(function(){B()},0)})});
},{"./lib/index":"E7Wx"}]},{},["nYeO"], null)
//# sourceMappingURL=test.884e9b66.js.map