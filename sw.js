// 갤럭시에서 "바탕화면에 추가" 버튼이 되게 하려고 둔 빈 서비스워커다.
// 아무것도 저장하지 않고, 요청도 가로채지 않는다.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function () {});
