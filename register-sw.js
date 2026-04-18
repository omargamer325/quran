(function () {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./service-worker.js", { scope: "./" }).catch(function () {
      /* يتطلّب http(s) أو localhost — لا يعمل من file:// */
    });
  });
})();
