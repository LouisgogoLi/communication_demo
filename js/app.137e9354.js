(function(){var e={5927:function(e,t,n){"use strict";n.r(t),t["default"]={message:e=>{const{normalize:t}=e;return t(["hello i18n !!"])}}},8871:function(e,t,n){"use strict";var a=n(9242),r=n(1229),o=(n(3163),n(823)),i=(n(5905),n(9740)),u=(n(2358),n(7086),n(6570),n(3396)),c=n(4870),l=n(8053),s=(n(8199),n(2855),n(4583),n(7139)),d=JSON.parse('[{"tab_id":"0","router_name":"Home","name":"首頁","click":true,"auth":true,"List":[]},{"tab_id":"1","router_name":"1","name":"元件基本溝通測試","click":true,"auth":true,"List":[{"tab_id":"1_1","router_name":"1_1","name":"Props跟Emit測試","click":true,"auth":true,"List":[{"tab_id":"1_1_1","router_name":"PropsApp","name":"PropsApp","click":true,"auth":true,"List":[]},{"tab_id":"1_1_2","router_name":"PropsAndEmit","name":"PropsAndEmit","click":true,"auth":true,"List":[]}]},{"tab_id":"1_2","router_name":"DirectiveTest","name":"DirectiveTest","click":true,"auth":true,"List":[]},{"tab_id":"1_3","router_name":"ProvideInjectTest","name":"ProvideInjectTest","click":true,"auth":true,"List":[]},{"tab_id":"1_4","router_name":"address_for_crud","name":"地址for迴圈crud","click":true,"auth":true,"List":[]}]},{"tab_id":"2","router_name":"2","name":"Slot測試","click":true,"auth":true,"List":[{"tab_id":"2_1","router_name":"SlotTest","name":"SlotTest","click":true,"auth":true,"List":[]},{"tab_id":"2_2","router_name":"SlotElTable","name":"SlotELTable測試","click":true,"auth":true,"List":[]}]},{"tab_id":"3","router_name":"elementTest","name":"element元件測試","click":false,"auth":true,"List":[{"tab_id":"3_1","router_name":"tableView","name":"elementTable測試","click":true,"auth":true,"List":[]}]},{"tab_id":"4","router_name":"echartTest","name":"Echart測試","click":true,"auth":true,"List":[]},{"tab_id":"5","router_name":"unit_test","name":"unit_test","click":true,"auth":true,"List":[{"tab_id":"5_1","router_name":"axios_mock","name":"axios_mock","click":true,"auth":true,"List":[]}]}]'),f=n(678);const h={name:"HeaderComponet"};var m=Object.assign(h,{setup(e){const t=(0,f.yj)(),n=(0,f.tv)(),a=(0,c.iH)(t.name),r=e=>{n.push({name:e})};return(e,t)=>{const n=l.E_,o=l.F8,i=l.Q8;return(0,u.wg)(),(0,u.iD)("div",null,[(0,u.Wm)(i,{"default-active":a.value,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",onSelect:r},{default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,c.SU)(d),(e=>((0,u.wg)(),(0,u.iD)(u.HY,{key:e.tab_id},[0===e.List.length?((0,u.wg)(),(0,u.j4)(n,{key:0,index:e.router_name,disabled:!e.click},{default:(0,u.w5)((()=>[(0,u.Uk)((0,s.zw)(e.name),1)])),_:2},1032,["index","disabled"])):((0,u.wg)(),(0,u.j4)(o,{key:1,index:e.router_name},{title:(0,u.w5)((()=>[(0,u.Uk)((0,s.zw)(e.name),1)])),default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(e.List,(e=>((0,u.wg)(),(0,u.iD)(u.HY,{key:e.tab_id},[0===e.List.length?((0,u.wg)(),(0,u.j4)(n,{key:0,index:e.router_name,disabled:!e.click},{default:(0,u.w5)((()=>[(0,u.Uk)((0,s.zw)(e.name),1)])),_:2},1032,["index","disabled"])):((0,u.wg)(),(0,u.j4)(o,{key:1,index:e.router_name},{title:(0,u.w5)((()=>[(0,u.Uk)((0,s.zw)(e.name),1)])),default:(0,u.w5)((()=>[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)(e.List,(e=>((0,u.wg)(),(0,u.j4)(n,{key:e.tab_id,index:e.router_name,disabled:!e.click},{default:(0,u.w5)((()=>[(0,u.Uk)((0,s.zw)(e.name),1)])),_:2},1032,["index","disabled"])))),128))])),_:2},1032,["index"]))],64)))),128))])),_:2},1032,["index"]))],64)))),128))])),_:1},8,["default-active"])])}}});const b=m;var p=b,v=n(6229),g=n(1592),k=n(9749);const w={name:"App"};var y=Object.assign(w,{setup(e){const t=(0,f.yj)(),n=(0,c.iH)(v.Z),a=(0,k.oR)(),l=(0,u.Fl)((()=>a.getters.getLanguage)),s=()=>{"en"===l.value?n.value=g.Z:"zh_tw"===l.value&&(n.value=v.Z)};return(0,u.YP)((()=>l.value),(()=>{s()})),(0,u.bv)((()=>{s()})),(e,a)=>{const l=i.nZ,s=(0,u.up)("router-view"),d=i.b2,f=i.G4,h=o.BR,m=r.t;return(0,u.wg)(),(0,u.j4)(h,{locale:n.value},{default:(0,u.w5)((()=>[(0,u.wy)(((0,u.wg)(),(0,u.iD)("div",null,[(0,u.Wm)(f,null,{default:(0,u.w5)((()=>["false"!==(0,c.SU)(t).query.showUI?((0,u.wg)(),(0,u.j4)(l,{key:0},{default:(0,u.w5)((()=>[(0,u.Wm)(p)])),_:1})):(0,u.kq)("",!0),(0,u.Wm)(d,null,{default:(0,u.w5)((()=>[(0,u.Wm)(s)])),_:1})])),_:1})])),[[m]])])),_:1},8,["locale"])}}});const I=y;var E=I,C=n(4427);const j={class:"hello"},R=(0,u.uE)('<p data-v-9a9b84f4> For a guide and recipes on how to configure / customize this project,<br data-v-9a9b84f4> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-9a9b84f4>vue-cli documentation</a>. </p><h3 data-v-9a9b84f4>Installed CLI Plugins</h3><ul data-v-9a9b84f4><li data-v-9a9b84f4><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-9a9b84f4>babel</a></li><li data-v-9a9b84f4><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-9a9b84f4>router</a></li><li data-v-9a9b84f4><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-9a9b84f4>vuex</a></li><li data-v-9a9b84f4><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-9a9b84f4>eslint</a></li></ul><h3 data-v-9a9b84f4>Essential Links</h3><ul data-v-9a9b84f4><li data-v-9a9b84f4><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-9a9b84f4>Core Docs</a></li><li data-v-9a9b84f4><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-9a9b84f4>Forum</a></li><li data-v-9a9b84f4><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-9a9b84f4>Community Chat</a></li><li data-v-9a9b84f4><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-9a9b84f4>Twitter</a></li><li data-v-9a9b84f4><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-9a9b84f4>News</a></li></ul><h3 data-v-9a9b84f4>Ecosystem</h3><ul data-v-9a9b84f4><li data-v-9a9b84f4><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-9a9b84f4>vue-router</a></li><li data-v-9a9b84f4><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-9a9b84f4>vuex</a></li><li data-v-9a9b84f4><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-9a9b84f4>vue-devtools</a></li><li data-v-9a9b84f4><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-9a9b84f4>vue-loader</a></li><li data-v-9a9b84f4><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-9a9b84f4>awesome-vue</a></li></ul>',7),P={name:"HelloWorld"};var T=Object.assign(P,{props:{msg:{type:String,default:"沒有傳值"}},setup(e){const t=e;return(e,n)=>((0,u.wg)(),(0,u.iD)("div",j,[(0,u._)("h1",null,(0,s.zw)(t.msg),1),R]))}}),W=n(89);const A=(0,W.Z)(T,[["__scopeId","data-v-9a9b84f4"]]);var z=A;const N={class:"home"},O=(0,u._)("img",{alt:"Vue logo",src:C},null,-1),Z={name:"HomeView"};var x=Object.assign(Z,{setup(e){return(e,t)=>((0,u.wg)(),(0,u.iD)("div",N,[O,(0,u.Wm)(z,{msg:"Welcome to Your Vue.js App"})]))}});const S=x;var U=S,L=n(2333);let Q,B=0;const G=()=>{Q=L.kN.service({lock:!0,text:"測試全域中...",background:"rgba(0, 0, 0, 0.5)"})},V=()=>{Q.close()},Y=()=>{0===B&&G(),B+=1},D=()=>{B<=0||(B-=1,0===B&&V())},J=[{path:"/",name:"Home",component:U},{path:"/index.html",name:"index",redirect:{name:"Home"}},{path:"/componentTest/propsAndEmitTest/PropsApp",name:"PropsApp",component:()=>n.e(922).then(n.bind(n,2922))},{path:"/componentTest/propsAndEmitTest/PropsAndEmit",name:"PropsAndEmit",component:()=>n.e(335).then(n.bind(n,7335))},{path:"/componentTest/DirectiveTest",name:"DirectiveTest",component:()=>n.e(343).then(n.bind(n,8343))},{path:"/componentTest/ProvideInjectTest",name:"ProvideInjectTest",component:()=>n.e(93).then(n.bind(n,7093))},{path:"/componentTest/AddressForCrud",name:"address_for_crud",component:()=>n.e(302).then(n.bind(n,3302))},{path:"/componentTest/AddressForCrud/AddressList",name:"address_list",component:()=>Promise.all([n.e(527),n.e(222)]).then(n.bind(n,6222)),props:e=>({showUI:e.query.showUI})},{path:"/SlotTest",name:"SlotTest",component:()=>n.e(429).then(n.bind(n,429))},{path:"/SlotTest/slotElTable",name:"SlotElTable",component:()=>Promise.all([n.e(527),n.e(858)]).then(n.bind(n,9858))},{path:"/elementTest/tableView",name:"tableView",component:()=>Promise.all([n.e(527),n.e(523)]).then(n.bind(n,1523))},{path:"/echartTest",name:"echartTest",component:()=>n.e(386).then(n.bind(n,4386))},{path:"/unit_test/axios_mock",name:"axios_mock",component:()=>n.e(577).then(n.bind(n,3577))},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>n.e(362).then(n.bind(n,5362))}],M=(0,f.p7)({history:(0,f.PO)("/communication_demo/"),routes:J});M.beforeEach((()=>{Y(),setTimeout((()=>{D()}),1e3)}));var K=M,H={language:"zh_tw"},X={handSetLanguageState({commit:e},t){e("setLanguageState",t)}},F={setLanguageState(e,t){e.language=t}},_={getLanguage(e){return e.language}},q=(0,k.MT)({state:H,actions:X,mutations:F,getters:_,modules:{}}),$=n(4329);function ee(){const e=n(2528),t={};return e.keys().forEach((n=>{const a=n.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){const r=a[1];t[r]=e(n).default}})),t}var te=(0,$.o)({legacy:!1,globalInjection:!0,locale:"zh_tw",fallbackLocale:"zh_tw",messages:ee()});n(4926);function ne(e){return e.directive("focus",{mounted(e){e.focus()}}),{app:e}}const ae=e=>{const t=e+"",n=t.split("").reverse(),a=[];let r=0;return n.forEach((e=>{r++,r>3&&(r=1,a.push(",")),a.push(e)})),a.reverse(),a.join("")},re=ae;function oe(e){return e.directive("thousandsSeparator",((e,t)=>{const n=re(t.value);e.innerHTML=n})),{app:e}}function ie(e){return ne(e),oe(e),{app:e}}const ue=(0,a.ri)(E);ie(ue),ue.use(te).use(q).use(K),K.isReady().then((()=>{ue.mount("#app")}))},2528:function(e,t,n){var a={"./zh_tw.json":5927};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=2528},4427:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var i=1/0;for(s=0;s<e.length;s++){a=e[s][0],r=e[s][1],o=e[s][2];for(var u=!0,c=0;c<a.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(u=!1,o<i&&(i=o));if(u){e.splice(s--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(a,r){if(1&r&&(a=this(a)),8&r)return a;if("object"===typeof a&&a){if(4&r&&a.__esModule)return a;if(16&r&&"function"===typeof a.then)return a}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var u=2&r&&a;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){i[e]=function(){return a[e]}}));return i["default"]=function(){return a},n.d(o,i),o}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{93:"145aced8",222:"eb92320d",302:"349ceecd",335:"fc35a43a",343:"9c7f9368",362:"19b3e1b0",386:"19a1ba99",429:"b5e79213",523:"4997d5d7",527:"4c6d6981",577:"7dae4bb3",617:"327e4bbc",858:"c8765d80",902:"6344bcfd",922:"fd26f356"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{302:"fa588806",335:"21e08680",343:"07f6784c",362:"ff68c5cc",429:"bd2f50b3",523:"ee89cb86",527:"a22a80e6",858:"337988c7"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="app:";n.l=function(a,r,o,i){if(e[a])e[a].push(r);else{var u,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+o){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+o),u.src=a),e[a]=[r];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(h);var r=e[a];if(delete e[a],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/communication_demo/"}(),function(){var e=function(e,t,n,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,r.parentNode.removeChild(r),a(c)}};return r.onerror=r.onload=o,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){r=i[a],o=r.getAttribute("data-href");if(o===e||o===t)return r}},a=function(a){return new Promise((function(r,o){var i=n.miniCssF(a),u=n.p+i;if(t(i,u))return r();e(a,u,r,o)}))},r={143:0};n.f.miniCss=function(e,t){var n={302:1,335:1,343:1,362:1,429:1,523:1,527:1,858:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=a(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=o);var i=n.p+n.u(t),u=new Error,c=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,r[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,i=a[0],u=a[1],c=a[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var s=c(n)}for(t&&t(a);l<i.length;l++)o=i[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(8871)}));a=n.O(a)})();