!function(){"use strict";self.CACHE_BUSTER="1584274749240|0.3173445253332612",self.addEventListener("install",(function(e){return self.skipWaiting()})),self.addEventListener("activate",(function(e){return self.clients.claim()}));var e=(e,t)=>caches.keys().then(s=>{s.forEach(s=>{0===s.indexOf(e)&&s!==t&&caches.delete(s)})});const t="esw-asset-cache-1",s=["assets/auto-import-fastboot-d41d8cd98f00b204e9800998ecf8427e.js","assets/octane-notes-fastboot-4ff68201bd8e8ab6a3d2378ce2a44fcd.js","assets/octane-notes-f34339d335e38194cfa8ef4709963e0a.css","assets/octane-notes-ba6eae144b22cab3f813895acdbc42cb.js","assets/vendor-d41d8cd98f00b204e9800998ecf8427e.css","assets/vendor-1eb455ca8929ec27b27d74a44e9a4dc0.js"].map(e=>new URL(e,self.location).toString());self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>Promise.all(s.map(t=>{let s=new Request(t,{mode:"cors"});return fetch(s).then(s=>{if(s.status>=400){throw new Error(`Request for ${t} failed with status ${s.statusText}`)}return e.put(t,s)}).catch((function(e){console.error(`Not caching ${t} due to ${e}`)}))}))))}),self.addEventListener("activate",n=>{n.waitUntil(Promise.all([e("esw-asset-cache",t),void caches.open(t).then(e=>e.keys().then(t=>{t.forEach(t=>{-1===s.indexOf(t.url)&&e.delete(t)})}))]))}),self.addEventListener("fetch",e=>{let n="GET"===e.request.method,a=-1!==s.indexOf(e.request.url);n&&a&&e.respondWith(caches.match(e.request,{cacheName:t}).then(t=>t||fetch(e.request.url,{mode:"cors"})))});const n=[],a=[];function c(e,t){return!!t.find(t=>t.test(decodeURI(e)))}self.INDEX_FILE_HASH="a3cb74ec222c8bd6e91a1903b746cb2d";const i=new URL("index.html",self.location).toString();self.addEventListener("install",e=>{e.waitUntil(fetch(i,{credentials:"include"}).then(e=>caches.open("esw-index-1").then(t=>t.put(i,e))))}),self.addEventListener("activate",t=>{t.waitUntil(e("esw-index","esw-index-1"))}),self.addEventListener("fetch",e=>{let t=e.request,s=new URL(t.url),o="GET"===t.method,r=-1!==t.headers.get("accept").indexOf("text/html"),l=s.origin===location.origin,d=c(t.url,n),h=!a.length||c(t.url,a);!("/tests"===s.pathname&&!1)&&o&&r&&l&&h&&!d&&e.respondWith(caches.match(i,{cacheName:"esw-index-1"}).then(e=>e||fetch(i,{credentials:"include"}).then(e=>(caches.open("esw-index-1").then(t=>t.put(i,e)),e.clone()))))})}();
//# sourceMappingURL=sw-3b0e88310d628579dfaf3a5e1d199b42.map