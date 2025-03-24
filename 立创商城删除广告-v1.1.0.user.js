// ==UserScript==
// @name         立创商城删除广告
// @namespace    http://tampermonkey.net/
// @version      v1.1.0
// @description  简单的广告拦截
// @author       GeanRain
// @match        https://list.szlcsc.com/catalog/313.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=szlcsc.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 浮动ad
    var m = document.getElementById("website-right-float-ad-dialog");
    m.parentNode.removeChild(m);

    // 抬头ad
    var n = document.getElementsByClassName("ecp-banner-ads")[0];
    n.parentNode.removeChild(n);
    // var m = document.getElementById("ecp-banner");
    // m.parentNode.removeChild(m);

})();