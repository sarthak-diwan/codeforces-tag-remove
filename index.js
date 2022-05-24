// ==UserScript==
// @name         Hide Tag Codeforces
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       s4r7h4k
// @match        https://codeforces.com/contest/*/problem/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=codeforces.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var a = document.getElementsByClassName('caption titled');
    var x;
    for(var i=0; i<a.length; i++){
        if(a[i].textContent.includes('Problem tags')){
            x = a[i];
        }
    }
    x.parentElement.style.display = 'none';
    // Your code here...
})();
