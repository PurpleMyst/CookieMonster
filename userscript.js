// ==UserScript==
// @name Cookie Monster Loader
// @include http://orteil.dashnet.org/cookieclicker/
// @include https://orteil.dashnet.org/cookieclicker/
// @version 1
// @grant none
// ==/UserScript==

const URL =
  "https://github.com/PurpleMyst/CookieMonster/raw/master/CookieMonster.js";

(function () {
  var checkReady = setInterval(function () {
    if (typeof Game.ready !== "undefined" && Game.ready) {
      clearInterval(checkReady);

      fetch("https://cors-anywhere.herokuapp.com/" + URL)
        .then((resp) => resp.text())
        .then((code) => {
          const js = document.createElement("script");
          js.setAttribute("type", "text/javascript");
          js.setAttribute("id", "modscript_CookieMonster");
          js.text = code;
          document.head.appendChild(js);
        });
    }
  }, 1000);
})();
