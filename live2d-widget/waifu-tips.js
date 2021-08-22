"use strict";function asyncGeneratorStep(e,t,n,a,r,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(a,r)}function _asyncToGenerator(c){return function(){var e=this,i=arguments;return new Promise(function(t,n){var a=c.apply(e,i);function r(e){asyncGeneratorStep(a,t,n,r,o,"next",e)}function o(e){asyncGeneratorStep(a,t,n,r,o,"throw",e)}r(void 0)})}}function _createForOfIteratorHelper(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,r=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw r}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function loadWidget(e){var o,t=e.waifuPath,i=e.apiPath,c=e.cdnPath,s=!1;if("string"==typeof c)s=!0,c.endsWith("/")||(c+="/");else{if("string"!=typeof i)return void console.error("Invalid initWidget argument!");i.endsWith("/")||(i+="/")}function u(e){return Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e}localStorage.removeItem("waifu-display"),sessionStorage.removeItem("waifu-text"),document.body.insertAdjacentHTML("beforeend",'<div id="waifu">\n\t\t\t<div id="waifu-tips"></div>\n\t\t\t<canvas id="live2d" width="800" height="800"></canvas>\n\t\t\t<div id="waifu-tool">\n\t\t\t\t<span class="fa fa-lg fa-comment"></span>\n\t\t\t\t<span class="fa fa-lg fa-paper-plane"></span>\n\t\t\t\t<span class="fa fa-lg fa-user-circle"></span>\n\t\t\t\t<span class="fa fa-lg fa-street-view"></span>\n\t\t\t\t<span class="fa fa-lg fa-camera-retro"></span>\n\t\t\t\t<span class="fa fa-lg fa-info-circle"></span>\n\t\t\t\t<span class="fa fa-lg fa-times"></span>\n\t\t\t</div>\n\t\t</div>'),setTimeout(function(){document.getElementById("waifu").style.bottom=0},0);var n,r,a,l,d=!1,f=["好久不见，日子过得好快呢……","大坏蛋！你都多久没理人家了呀，嘤嘤嘤～","嗨～快来逗我玩吧！","拿小拳拳锤你胸口！","记得把小家加入 Adblock 白名单哦！"];function m(){fetch("https://v1.hitokoto.cn").then(function(e){return e.json()}).then(function(e){var t="这句一言来自 <span>「".concat(e.from,"」</span>，是 <span>").concat(e.creator,"</span> 在 hitokoto.cn 投稿的。");p(e.hitokoto,6e3,9),setTimeout(function(){p(t,4e3,9)},6e3)})}function p(e,t,n){var a;!e||sessionStorage.getItem("waifu-text")&&sessionStorage.getItem("waifu-text")>n||(r&&(clearTimeout(r),r=null),e=u(e),sessionStorage.setItem("waifu-text",n),(a=document.getElementById("waifu-tips")).innerHTML=e,a.classList.add("waifu-tips-active"),r=setTimeout(function(){sessionStorage.removeItem("waifu-text"),a.classList.remove("waifu-tips-active")},t))}function g(){return v.apply(this,arguments)}function v(){return(v=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"model_list.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:o=e.sent;case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function h(){return w.apply(this,arguments)}function w(){return(w=_asyncToGenerator(regeneratorRuntime.mark(function e(t,n,a){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.setItem("modelId",t),localStorage.setItem("modelTexturesId",n),p(a,4e3,10),!s){e.next=11;break}if(o){e.next=7;break}return e.next=7,g();case 7:r=u(o.models[t]),loadlive2d("live2d","".concat(c,"model/").concat(r,"/index.json")),e.next=13;break;case 11:loadlive2d("live2d","".concat(i,"get/?id=").concat(t,"-").concat(n)),console.log("Live2D 模型 ".concat(t,"-").concat(n," 加载完成"));case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}function y(){return I.apply(this,arguments)}function I(){return(I=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("modelId"),n=localStorage.getItem("modelTexturesId"),!s){e.next=10;break}if(o){e.next=5;break}return e.next=5,g();case 5:a=u(o.models[t]),loadlive2d("live2d","".concat(c,"model/").concat(a,"/index.json")),p("我的新衣服好看嘛？",4e3,10),e.next=11;break;case 10:fetch("".concat(i,"rand_textures/?id=").concat(t,"-").concat(n)).then(function(e){return e.json()}).then(function(e){1!==e.textures.id||1!==n&&0!==n?h(t,e.textures.id,"我的新衣服好看嘛？"):p("我还没有其他衣服呢！",4e3,10)});case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}function x(){return S.apply(this,arguments)}function S(){return(S=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("modelId"),!s){e.next=9;break}if(o){e.next=5;break}return e.next=5,g();case 5:h(n=++t>=o.models.length?0:t,0,o.messages[n]),e.next=10;break;case 9:fetch("".concat(i,"switch/?id=").concat(t)).then(function(e){return e.json()}).then(function(e){h(e.model.id,0,e.model.message)});case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}window.addEventListener("mousemove",function(){return d=!0}),window.addEventListener("keydown",function(){return d=!0}),setInterval(function(){n=d?(d=!1,clearInterval(n),null):n||setInterval(function(){p(u(f),6e3,9)},2e4)},1e3),function(){document.querySelector("#waifu-tool .fa-comment").addEventListener("click",m),document.querySelector("#waifu-tool .fa-paper-plane").addEventListener("click",function(){var e;window.Asteroids?(window.ASTEROIDSPLAYERS||(window.ASTEROIDSPLAYERS=[]),window.ASTEROIDSPLAYERS.push(new Asteroids)):((e=document.createElement("script")).src="https://cdn.jsdelivr.net/gh/stevenjoezhang/asteroids/asteroids.js",document.head.appendChild(e))}),document.querySelector("#waifu-tool .fa-user-circle").addEventListener("click",x),document.querySelector("#waifu-tool .fa-street-view").addEventListener("click",y),document.querySelector("#waifu-tool .fa-camera-retro").addEventListener("click",function(){p("照好了嘛，是不是很可爱呢？",6e3,9),Live2D.captureName="photo.png",Live2D.captureFrame=!0}),document.querySelector("#waifu-tool .fa-info-circle").addEventListener("click",function(){open("https://github.com/stevenjoezhang/live2d-widget")}),document.querySelector("#waifu-tool .fa-times").addEventListener("click",function(){localStorage.setItem("waifu-display",Date.now()),p("愿你有一天能与重要的人重逢。",2e3,11),document.getElementById("waifu").style.bottom="-500px",setTimeout(function(){document.getElementById("waifu").style.display="none",document.getElementById("waifu-toggle").classList.add("waifu-toggle-active")},3e3)});function e(){}console.log("%c",e),e.toString=function(){p("哈哈，你打开了控制台，是想要看看我的小秘密吗？",6e3,9)},window.addEventListener("copy",function(){p("你都复制了些什么呀，转载要记得加上出处哦！",6e3,9)}),window.addEventListener("visibilitychange",function(){document.hidden||p("哇，你终于回来了～",6e3,9)})}(),p("/"===location.pathname?5<(a=(new Date).getHours())&&a<=7?"早上好！一日之计在于晨，美好的一天就要开始了。":7<a&&a<=11?"上午好！工作顺利嘛，不要久坐，多起来走动走动哦！":11<a&&a<=13?"中午了，工作了一个上午，现在是午餐时间！":13<a&&a<=17?"午后很容易犯困呢，今天的运动目标完成了吗？":17<a&&a<=19?"傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红～":19<a&&a<=21?"晚上好，今天过得怎么样？":21<a&&a<=23?["已经这么晚了呀，早点休息吧，晚安～","深夜时要爱护眼睛呀！"]:"你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？":""!==document.referrer?(a=(l=new URL(document.referrer)).hostname.split(".")[1],location.hostname===l.hostname?"欢迎阅读<span>「".concat(document.title.split(" - ")[0],"」</span>"):"baidu"===a?"Hello！来自 百度搜索 的朋友<br>你是搜索 <span>".concat(l.search.split("&wd=")[1].split("&")[0],"</span> 找到的我吗？"):"so"===a?"Hello！来自 360搜索 的朋友<br>你是搜索 <span>".concat(l.search.split("&q=")[1].split("&")[0],"</span> 找到的我吗？"):"google"===a?"Hello！来自 谷歌搜索 的朋友<br>欢迎阅读<span>「".concat(document.title.split(" - ")[0],"」</span>"):"Hello！来自 <span>".concat(l.hostname,"</span> 的朋友")):"欢迎阅读<span>「".concat(document.title.split(" - ")[0],"」</span>"),7e3,8),a=6,l=localStorage.getItem("modelTexturesId"),null===a&&(a=6,l=53),h(a,l),fetch(t).then(function(e){return e.json()}).then(function(i){window.addEventListener("mouseover",function(e){var t,n=_createForOfIteratorHelper(i.mouseover);try{for(n.s();!(t=n.n()).done;){var a=t.value,r=a.selector,o=a.text;if(e.target.matches(r))return void p(o=(o=u(o)).replace("{text}",e.target.innerText),4e3,8)}}catch(e){n.e(e)}finally{n.f()}}),window.addEventListener("click",function(e){var t,n=_createForOfIteratorHelper(i.click);try{for(n.s();!(t=n.n()).done;){var a=t.value,r=a.selector,o=a.text;if(e.target.matches(r))return void p(o=(o=u(o)).replace("{text}",e.target.innerText),4e3,8)}}catch(e){n.e(e)}finally{n.f()}}),i.seasons.forEach(function(e){var t=e.date,n=e.text,a=new Date,e=t.split("-")[0],t=t.split("-")[1]||e;e.split("/")[0]<=a.getMonth()+1&&a.getMonth()+1<=t.split("/")[0]&&e.split("/")[1]<=a.getDate()&&a.getDate()<=t.split("/")[1]&&(n=(n=u(n)).replace("{year}",a.getFullYear()),f.push(n))})})}function initWidget(e,t){"string"==typeof e&&(e={waifuPath:e,apiPath:t}),document.body.insertAdjacentHTML("beforeend",'<div id="waifu-toggle">\n\t\t\t<span>看板娘</span>\n\t\t</div>');var n=document.getElementById("waifu-toggle");n.addEventListener("click",function(){n.classList.remove("waifu-toggle-active"),n.getAttribute("first-time")?(loadWidget(e),n.removeAttribute("first-time")):(localStorage.removeItem("waifu-display"),document.getElementById("waifu").style.display="",setTimeout(function(){document.getElementById("waifu").style.bottom=0},0))}),localStorage.getItem("waifu-display")&&Date.now()-localStorage.getItem("waifu-display")<=864e5?(n.setAttribute("first-time",!0),setTimeout(function(){n.classList.add("waifu-toggle-active")},0)):loadWidget(e)}