if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,u)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const r=e=>i(e,t),o={module:{uri:t},exports:l,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(u(...e),l)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"petanque-draw"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/petanque-swiss-vue/dist/css/app.46f1b052.css",revision:null},{url:"/petanque-swiss-vue/dist/firebase-messaging-sw.js",revision:"497be90d4086ca8ada4aea042fffe5c1"},{url:"/petanque-swiss-vue/dist/img/bg.ec634baf.jpg",revision:null},{url:"/petanque-swiss-vue/dist/img/fun.014c999e.jpg",revision:null},{url:"/petanque-swiss-vue/dist/img/girl.5c1e06cd.jpg",revision:null},{url:"/petanque-swiss-vue/dist/img/login-desktop.70f80e89.jpg",revision:null},{url:"/petanque-swiss-vue/dist/img/login-mobile.03a9c97e.jpg",revision:null},{url:"/petanque-swiss-vue/dist/img/logo.6a11ce3e.webp",revision:null},{url:"/petanque-swiss-vue/dist/img/logo.74972a48.png",revision:null},{url:"/petanque-swiss-vue/dist/index.html",revision:"2eaf6b1b69123d8bd6b67d43414921f0"},{url:"/petanque-swiss-vue/dist/js/app.95f86fce.js",revision:null},{url:"/petanque-swiss-vue/dist/js/chunk-vendors.f83f5443.js",revision:null},{url:"/petanque-swiss-vue/dist/manifest.json",revision:"aa7682708a7f641ef8a7eb9eb0aed300"},{url:"/petanque-swiss-vue/dist/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
