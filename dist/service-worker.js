if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,u)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let r={};const l=e=>i(e,t),o={module:{uri:t},exports:r,require:l};s[t]=Promise.all(n.map((e=>o[e]||l(e)))).then((e=>(u(...e),r)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"petanque-draw"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/petanque-swiss-vue/dist/css/app.127a766f.css",revision:null},{url:"/petanque-swiss-vue/dist/firebase-messaging-sw.js",revision:"ffea01aa71b7050191a545dd1017a8a3"},{url:"/petanque-swiss-vue/dist/img/bg.ec634baf.jpg",revision:null},{url:"/petanque-swiss-vue/dist/img/girl.5c1e06cd.jpg",revision:null},{url:"/petanque-swiss-vue/dist/img/login-desktop.70f80e89.jpg",revision:null},{url:"/petanque-swiss-vue/dist/img/login-mobile.03a9c97e.jpg",revision:null},{url:"/petanque-swiss-vue/dist/img/logo.6a11ce3e.webp",revision:null},{url:"/petanque-swiss-vue/dist/img/logo.74972a48.png",revision:null},{url:"/petanque-swiss-vue/dist/index.html",revision:"650c55da763f515452c8c2e7591a0062"},{url:"/petanque-swiss-vue/dist/js/app.0e2e81a4.js",revision:null},{url:"/petanque-swiss-vue/dist/js/chunk-vendors.fb486b3e.js",revision:null},{url:"/petanque-swiss-vue/dist/manifest.json",revision:"aa7682708a7f641ef8a7eb9eb0aed300"},{url:"/petanque-swiss-vue/dist/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
