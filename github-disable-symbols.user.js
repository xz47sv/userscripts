// ==UserScript==
// @name        Disable Symbols
// @namespace   https://ash.fail
// @match       https://github.com/*/*/blob/*
// @run-at      document-start
// @grant       none
// @version     1.0.0
// @author      https://ash.fail
// @license     Unlicense
// @description Disables opening symbols on click in the Github code viewer.
// @downloadURL https://git.ash.fail/userscripts/blob/master/github-disable-symbols.user.js
// @homepageURL https://git.ash.fail/userscripts
// @supportURL  https://ash.fail/contact.html
// ==/UserScript==
// TODO: add base64 icon

localStorage.setItem('codeView.openSymbolsOnClick', 'false')
