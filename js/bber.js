"use strict";var loading_pic;function urlToLink(a){return a=(a=a.replace(/\bhttps?:[^:<>"]*\/([^:<>"]*)(\.(jpeg)|(png)|(jpg)|(webp))/g,function(a){return'<a href="'+a+'"><img src="'+a+'" /></a>'})).replace(/\bhttps?:\/\/(?!\S+(?:jpe?g|png|bmp|gif|webp|gif))\S+/g,function(a){return" <a href='"+a+"'rel='noopener' target='_blank'>↘链接↙</a> "}),a=qqWechatEmotionParser(a)}document.querySelector("#bber-loading")&&(loading_pic=document.getElementById("bber-loading"),loading_pic.innerHTML='<span id="moments_loading"><i class="fa fa-spinner fa-spin"></i></span>'),document.querySelector("#bber")&&app.auth({persistence:"local"}).anonymousAuthProvider().signIn().then(function(){var n="#bber";$(n).after('<div class="load"><button class="load-btn button-load">Loading 1……</button></div>');var a=app.database().collection("talks"),r=0,i=1;function e(){var e,o;r<=9*(i-1)||(o="",a.limit(9).skip(9*(i-1)).orderBy("date","desc").get(function(a,t){t.data.forEach(function(a){e=a.date,data=e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),dataTime='<p class="datatime">'+data+"</p>",dataCont='<p class="datacont">'+urlToLink(a.content)+"</p>";var t="";-1!=a.from.indexOf("iPhone")?t='<i class="fas fa-mobile-alt"></i>':-1!=a.from.indexOf("iPad")?t='<i class="fas fa-tablet-alt"></i>':-1!=a.from.indexOf("Mac")?t='<i class="fas fa-laptop"></i>':-1!=a.from.indexOf("Linux")?t='<i class="fab fa-linux"></i>':-1!=a.from.indexOf("微信")?(t='<i class="fas fa-mobile-alt"></i>',a.from="iPhone"):t='<i class="fas fa-tools"></i>',dataFrom=a.from?'<p class="datafrom"><small>'+t+a.from+"</small></p>":"",o+='<li class="item"><div>'+dataTime+dataCont+dataFrom+"</div></li>"}),$(n).append('<section class="timeline page-'+i+'"><ul><div class="list">'+o+"</div></ul></section>"),$("button.button-load").text("Load more"),r<=9*i?$(".load").remove():(i++,Lately({target:"#bber .datatime"}),$("#bber a[rel!=link]:has(img)").slimbox())}))}a.count(function(a,t){r=t.total,loading_pic.innerHTML="",$(n).append('<p class="count">Total: <span class="count-data">'+r+"</span> talks</p>"),e()}),$(".button-load").click(function(){$(".button-load").text("Loading 2……"),e()})}).catch(function(a){console.log(a)});var $jscomp=$jscomp||{};$jscomp.scope={},$jscomp.arrayIteratorImpl=function(a){var t=0;return function(){return t<a.length?{done:!1,value:a[t++]}:{done:!0}}},$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}},$jscomp.makeIterator=function(a){var t="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return t?t.call(a):$jscomp.arrayIterator(a)},function(){var a=function(){return this||(0,eval)("this")}();"Lately"in a||(a.Lately=function(a){for(var t=a.lang||{second:"秒",minute:"分钟",hour:"小时",day:"天",month:"个月",year:"年",ago:"前",error:"NaN"},e=(a=$jscomp.makeIterator(document.querySelectorAll(a.target||".time"))).next();!e.done;e=a.next()){var o=(e=e.value).dateTime,n=e.title,r=e.innerHTML;if(!o||isNaN(new Date(o=o.replace(/(.*)[a-z](.*)\+(.*)/gi,"$1 $2").replace(/-/g,"/"))))if(n&&!isNaN(new Date(n=n.replace(/-/g,"/"))))o=n;else{if(!r||isNaN(new Date(r=r.replace(/-/g,"/"))))break;o=r}e.title=o,o=new Date(o);var i=(r=(n=(o=((new Date).getTime()-o.getTime())/1e3)/60)/60)/24,l=i/30,s=l/12;e.innerHTML=(1<=s?Math.floor(s)+t.year:1<=l?Math.floor(l)+t.month:1<=i?Math.floor(i)+t.day:1<=r?Math.floor(r)+t.hour:1<=n?Math.floor(n)+t.minute:1<=o?Math.floor(o)+t.second:t.error)+t.ago}})}();