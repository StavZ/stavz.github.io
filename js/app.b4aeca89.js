(function(e){function t(t){for(var n,s,o=t[0],f=t[1],i=t[2],d=0,b=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&b.push(r[s][0]),r[s]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,i||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(c.splice(t--,1),e=f(f.s=a[0]))}return e}var n={},s={app:0},r={app:0},c=[];function o(e){return f.p+"js/"+({}[e]||e)+"."+{"chunk-9671fa3c":"507afeda"}[e]+".js"}function f(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,f),a.l=!0,a.exports}f.e=function(e){var t=[],a={"chunk-9671fa3c":1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-9671fa3c":"33d93bcb"}[e]+".css",r=f.p+n,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var i=c[o],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===n||d===r))return t()}var b=document.getElementsByTagName("style");for(o=0;o<b.length;o++){i=b[o],d=i.getAttribute("data-href");if(d===n||d===r)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var n=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete s[e],u.parentNode.removeChild(u),a(c)},u.href=r;var l=document.getElementsByTagName("head")[0];l.appendChild(u)})).then((function(){s[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=c);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,f.nc&&d.setAttribute("nonce",f.nc),d.src=o(e);var b=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",b.name="ChunkLoadError",b.type=n,b.request=s,a[1](b)}r[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},f.m=e,f.c=n,f.d=function(e,t,a){f.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,t){if(1&t&&(e=f(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(f.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)f.d(a,n,function(t){return e[t]}.bind(null,n));return a},f.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return f.d(t,"a",t),t},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.p="/",f.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var u=d;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034d":function(e,t,a){"use strict";a("1bcc")},"1bcc":function(e,t,a){},"39a0":function(e,t,a){},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),s={class:"container"},r={id:"nav",class:"noselect"},c=Object(n["f"])("Home"),o=Object(n["f"])(" | "),f=Object(n["f"])("Projects");function i(e,t){var a=Object(n["t"])("router-link"),i=Object(n["t"])("router-view");return Object(n["p"])(),Object(n["c"])("div",s,[Object(n["d"])("div",r,[Object(n["g"])(a,{to:"/"},{default:Object(n["y"])((function(){return[c]})),_:1}),o,Object(n["g"])(a,{to:"/projects"},{default:Object(n["y"])((function(){return[f]})),_:1})]),Object(n["g"])(i)])}a("034d");var d=a("6b0d"),b=a.n(d);const u={},l=b()(u,[["render",i]]);var j=l,m=(a("d3b7"),a("3ca3"),a("ddb0"),a("7db0"),a("fb6a"),a("d81d"),a("a630"),a("159b"),a("b64b"),a("6c02")),p=a("b640"),h=a.n(p),v=a("c1df"),g=a.n(v),y={class:"home dark"},k=Object(n["d"])("img",{alt:"Logo",class:"photo noselect",src:h.a},null,-1),O={class:"pinfo"},w=Object(n["e"])('<div class="links noselect"><a href="https://vk.com/stavzdev" target="_blank" class="vk"><span class="iconify" data-icon="bx:bxl-vk" data-inline="true"></span></a><a href="tg://resolve?domain=stavzdev" target="_blank" class="tg"><span class="iconify" data-icon="bx:bxl-telegram" data-inline="true"></span></a><a href="https://github.com/StavZ" target="_blank" class="github"><span class="iconify" data-icon="bx:bxl-github" data-inline="true"></span></a><a href="https://twitter.com/StavZDev" target="_blank" class="twitter"><span class="iconify" data-icon="bx:bxl-twitter" data-inline="true"></span></a><a href="https://instagram.com/stavzdev.inst" target="_blank" class="inst"><span class="iconify" data-icon="bx:bxl-instagram" data-inline="true"></span></a><a href="https://open.spotify.com/user/acuhb7unxfwyqpagif9bks2ee" target="_blank" class="spotify"><span class="iconify" data-icon="bx:bxl-spotify" data-inline="true"></span></a></div>',1),x={setup:function(e){var t=g()(),a=g()("2004-06-18T02:00:00.000Z"),s=g.a.duration(t.format("x")-a.format("x")).years();return function(e,t){return Object(n["p"])(),Object(n["c"])("div",y,[k,Object(n["d"])("p",O,Object(n["v"])(Object(n["w"])(s))+" "+Object(n["v"])(Object(n["w"])(s)<18?"y.o.":"years old")+Object(n["v"])(Object(n["w"])(s)<18?" kid":"")+" • Node.js Developer ",1),w])}}};a("f9f9");const z=x;var _=z;function E(e,t){return Object(n["p"])(),Object(n["c"])("h1",null,"Page Not Found")}a("b1b3");const P={},S=b()(P,[["render",E]]);var T=S,N=[{path:"/",name:"Home",component:_,meta:{title:"StavZDev | Home"}},{path:"/projects",name:"Projects",component:function(){return a.e("chunk-9671fa3c").then(a.bind(null,"acca"))},meta:{title:"StavZDev | Projects"}},{path:"/:pathMatch(.*)*",component:T,meta:{title:"Page Not Found"}}],A=Object(m["a"])({history:Object(m["b"])(),mode:"hash",routes:N});A.beforeEach((function(e,t,a){var n=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.title})),s=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags})),r=t.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags}));if(n?document.title=n.meta.title:r&&(document.title=r.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(e){return e.parentNode.removeChild(e)})),!s)return a();s.meta.metaTags.map((function(e){var t=document.createElement("meta");return Object.keys(e).forEach((function(a){t.setAttribute(a,e[a])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((function(e){return document.head.appendChild(e)})),a()}));var C=A;a("a766");Object(n["b"])(j).use(C).mount("#app")},a766:function(e,t,a){},b1af:function(e,t,a){},b1b3:function(e,t,a){"use strict";a("b1af")},b640:function(e,t,a){e.exports=a.p+"img/logo.c9f8ad81.jpg"},f9f9:function(e,t,a){"use strict";a("39a0")}});
//# sourceMappingURL=app.b4aeca89.js.map