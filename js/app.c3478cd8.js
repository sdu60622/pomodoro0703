(function(t){function e(e){for(var o,i,a=e[0],c=e[1],u=e[2],l=0,d=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},s=[];function i(t){return a.p+"js/"+({settings:"settings"}[t]||t)+"."+{settings:"0f246126"}[t]+".js"}function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=i(t);var u=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",u.name="ChunkLoadError",u.type=o,u.request=s,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1"),n("0cdd");var o=n("2b0e"),r=n("5f5b");n("ab8b"),n("2dd8");o["default"].use(r["a"]);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-container",[n("div",{attrs:{id:"content"}},[n("vue-page-transition",{attrs:{name:"fade"}},[n("keep-alive",[n("router-view",{staticClass:"h-100 w-100"})],1)],1)],1),n("div",{attrs:{id:"footer"}},[n("Nav")],1)])],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center h-100"},[n("b-row",{staticClass:"h-100",attrs:{"align-h":"center","align-v":"center"}},[n("b-col",{attrs:{cols:"4"},on:{click:function(e){return t.goto("/")}}},[n("h3",[n("font-awesome-icon",{attrs:{icon:["fas","home"]}})],1),n("h3",[t._v("首頁")])]),n("b-col",{attrs:{cols:"4"},on:{click:function(e){return t.goto("/todos")}}},[n("h3",[n("font-awesome-icon",{attrs:{icon:["fas","list"]}})],1),n("h3",[t._v("待辦")])]),n("b-col",{attrs:{cols:"4"},on:{click:function(e){return t.goto("/settings")}}},[n("h3",[n("font-awesome-icon",{attrs:{icon:["fas","ellipsis-h"]}})],1),n("h3",[t._v("設定")])])],1)],1)},c=[],u={methods:{goto:function(t){this.$route.path!==t&&this.$router.push(t)}}},l=u,f=n("2877"),d=Object(f["a"])(l,a,c,!1,null,null,null),h=d.exports,m={components:{Nav:h}},p=m,g=Object(f["a"])(p,s,i,!1,null,null,null),v=g.exports,b=n("9483");Object(b["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var w=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center",attrs:{id:"home"}},[n("h1",[t._v("番茄鐘")]),n("hr",{staticClass:"bg-white"}),n("div",{staticClass:"shape"},[n("h2",[t._v(t._s(t.currentText))]),n("h2",{attrs:{id:"time"}},[t._v(t._s(t.timetext))]),n("h1",["counting"===t.status?n("font-awesome-icon",{attrs:{icon:["fas","pause"]},on:{click:t.pause}}):n("font-awesome-icon",{attrs:{icon:["fas","play"]},on:{click:t.start}}),t._v(" "),""!==t.status?n("font-awesome-icon",{attrs:{icon:["fas","step-forward"]},on:{click:function(e){return t.finish(!0)}}}):t._e()],1)])])},k=[],y=(n("99af"),{name:"Home",data:function(){return{timer:0,status:""}},computed:{timetext:function(){var t=Math.floor(this.timeleft/60),e=Math.floor(this.timeleft%60);return"".concat(t," : ").concat(e)},currentText:function(){return this.current.length>0?this.current:this.todos.length>0?"點擊開始":"沒有事項"},current:function(){return this.$store.getters.current},timeleft:{get:function(){return this.$store.getters.timeleft},set:function(t){this.$store.commit("setTimeleft",t)}},todos:function(){return this.$store.getters.todos},alarmSelected:function(){return this.$store.getters.alarmSelected},isbreak:function(){return this.$store.getters.isbreak}},methods:{start:function(){var t=this;"pause"===this.status?(this.status="counting",this.timer=setInterval((function(){t.timeleft--,t.timeleft<0&&t.finish(!1)}),1e3)):(this.todos.length>0||this.current.length>0)&&(this.$store.commit("start"),this.status="counting",this.timer=setInterval((function(){t.timeleft--,t.timeleft<0&&t.finish(!1)}),1e3))},finish:function(t){if(clearInterval(this.timer),this.status="",this.$store.commit("finish"),!t){var e=new Audio;e.src=this.alarmSelected,e.play()}this.todos.length>0?this.start():this.$swal({icon:"success",title:"結束",buttonsStyling:!1,customClass:{confirmButton:"btn btn-success mx-1",cancelButton:"btn btn-danger mx-1"}})},pause:function(){clearInterval(this.timer),this.status="pause"}}}),j=y,x=(n("cccb"),Object(f["a"])(j,_,k,!1,null,null,null)),S=x.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-conent-center align-items-center"},[n("div",{staticClass:"text-center w-100"},[n("h1",[t._v("頁面不存在")])])])}],C={},E=Object(f["a"])(C,O,$,!1,null,null,null),T=E.exports;o["default"].use(w["a"]);var P=[{path:"/",name:"Home",component:S,meta:{title:"番茄鐘"}},{path:"/settings",name:"Settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))},meta:{title:"番茄鐘 | 設定"}},{path:"/todos",name:"Todos",component:function(){return n.e("settings").then(n.bind(null,"75cf"))},meta:{title:"番茄鐘 | 待辦"}},{path:"*",name:"NotFound",component:T,meta:{title:"404"}}],A=new w["a"]({routes:P});A.beforeEach((function(t,e,n){document.title=t.meta.title,n()}));var I=A,M=(n("a434"),n("b0c0"),n("2f62")),N=n("0e44");o["default"].use(M["a"]);var B=parseInt("1500"),F=parseInt("300"),q=new M["a"].Store({state:{todos:[],current:"",timeleft:B,alarmSelected:"./alarms/supercar_short.mp3",isbreak:!1},mutations:{todoAdd:function(t,e){t.todos.push({name:e,edit:!1,model:e})},todoDelete:function(t,e){t.todos.splice(e,1)},todoToggleEdit:function(t,e){t.todos[e].edit=!t.todos[e].edit},todoSave:function(t,e){t.todos[e].edit=!1,t.todos[e].name=t.todos[e].model},todoCancel:function(t,e){t.todos[e].edit=!1,t.todos[e].model=t.todos[e].name},todoDrag:function(t,e){t.todos=e},alarmSet:function(t,e){t.alarmSelected=e},setTimeleft:function(t,e){t.timeleft=e},setCurrent:function(t,e){t.current=e},start:function(t){!t.isbreak&&0===t.current.length&&t.todos.length>0?(t.current=t.todos[0].name,t.todos.splice(0,1)):t.isbreak&&(t.current="休息一下")},finish:function(t){t.todos.length>0&&(t.isbreak=!t.isbreak),t.current="",t.timeleft=t.isbreak?F:B}},getters:{todos:function(t){return t.todos},alarmSelected:function(t){return t.alarmSelected},current:function(t){return t.current},timeleft:function(t){return t.timeleft},isbreak:function(t){return t.isbreak}},plugins:[Object(N["a"])()]}),D=n("ecee"),H=n("c074"),J=n("ad3d"),L=n("f0eb"),z=n("5886"),G=(n("4413"),n("310e")),K=n.n(G);n("e983"),n("ecb2");o["default"].use(L["default"]),o["default"].use(z["a"]),D["c"].add(H["k"],H["c"],H["a"],H["l"],H["h"],H["b"],H["f"],H["i"],H["g"],H["j"],H["e"],H["d"]),o["default"].component("font-awesome-icon",J["a"]),o["default"].component("draggable",K.a),o["default"].config.productionTip=!1,new o["default"]({router:I,store:q,render:function(t){return t(v)}}).$mount("#app")},"5ced":function(t,e,n){},cccb:function(t,e,n){"use strict";var o=n("5ced"),r=n.n(o);r.a},e983:function(t,e,n){}});
//# sourceMappingURL=app.c3478cd8.js.map