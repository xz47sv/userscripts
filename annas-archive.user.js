// ==UserScript==
// @name        Anna's Archive - Show External Downloads
// @namespace   https://ash.fail
// @match       https://annas-archive.org/md5/*
// @grant       none
// @version     1.0.0
// @author      https://ash.fail
// @license     Unlicense
// @description Automatically expands the external downloads section on httpss://annas-archive.org
// @downloadURL https://git.ash.fail/userscripts/blob/master/annas-archive.user.js
// @homepageURL https://git.ash.fail/userscripts
// @supportURL  https://ash.fail/contact.html
// ==/UserScript==

for (const el of document.getElementsByClassName("js-show-external")) {
    el.classList.remove("hidden");
}

for (const el of document.getElementsByTagName("a")) {
    if ((el.textContent === "show external downloads")) {
        el.classList.add("hidden");
    }
}
