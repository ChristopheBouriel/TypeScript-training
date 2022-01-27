"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
function hello(divName, names) {
    setTimeout(function () {
        var elt = document.getElementById(divName);
        elt.innerText = "Hello from ".concat(names);
        /*console.log(`Hello from ${names}`)*/
        console.log('Welcoming message sent');
    }, 4000);
}
exports.hello = hello;
