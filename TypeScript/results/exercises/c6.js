"use strict";
function reverse(string) {
    let len = string.length;
    let revStr = '';
    for (let i = len; i >= 0; --i) {
        revStr += string.charAt(i);
    }
    return revStr;
}
console.log(reverse("Hello world!"));
