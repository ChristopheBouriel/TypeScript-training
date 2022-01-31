(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
/** Exemple simple pour utilisation avec Node (affichage console) */
/*export function hello(divName: string, names: string) {
    setTimeout(() => {
        console.log(`Hello from ${names}`)
    }, 4000);
}*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
/** Exemple avec création d'un bundle (affichage navigateur) */
function hello(divName, names) {
    setTimeout(function () {
        var elt = document.getElementById(divName);
        elt.innerText = "Hello from ".concat(names);
        console.log('Welcoming message sent');
    }, 4000);
}
exports.hello = hello;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helloGulp_1 = require("./helloGulp");
(0, helloGulp_1.hello)("welcome", "TypeScript & Gulp");
},{"./helloGulp":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaGVsbG9HdWxwLnRzIiwic3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUEsb0VBQW9FO0FBQ3BFOzs7O0dBSUc7OztBQUdILCtEQUErRDtBQUMvRCxTQUFnQixLQUFLLENBQUMsT0FBZSxFQUFFLEtBQWE7SUFDaEQsVUFBVSxDQUFDO1FBQ1AsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxHQUFHLENBQUMsU0FBUyxHQUFHLHFCQUFjLEtBQUssQ0FBRSxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUMxQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFYixDQUFDO0FBUEQsc0JBT0M7Ozs7QUNoQkQseUNBQWlDO0FBRWpDLElBQUEsaUJBQUssRUFBQyxTQUFTLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKiBFeGVtcGxlIHNpbXBsZSBwb3VyIHV0aWxpc2F0aW9uIGF2ZWMgTm9kZSAoYWZmaWNoYWdlIGNvbnNvbGUpICovXHJcbi8qZXhwb3J0IGZ1bmN0aW9uIGhlbGxvKGRpdk5hbWU6IHN0cmluZywgbmFtZXM6IHN0cmluZykge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEhlbGxvIGZyb20gJHtuYW1lc31gKVxyXG4gICAgfSwgNDAwMCk7XHJcbn0qL1xyXG5cclxuXHJcbi8qKiBFeGVtcGxlIGF2ZWMgY3LDqWF0aW9uIGQndW4gYnVuZGxlIChhZmZpY2hhZ2UgbmF2aWdhdGV1cikgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGhlbGxvKGRpdk5hbWU6IHN0cmluZywgbmFtZXM6IHN0cmluZykge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2TmFtZSk7XHJcbiAgICAgICAgZWx0LmlubmVyVGV4dCA9IGBIZWxsbyBmcm9tICR7bmFtZXN9YDtcclxuICAgICAgICBjb25zb2xlLmxvZygnV2VsY29taW5nIG1lc3NhZ2Ugc2VudCcpO1xyXG4gICAgfSwgNDAwMCk7XHJcbiAgICBcclxufVxyXG4iLCJpbXBvcnQge2hlbGxvfSBmcm9tICcuL2hlbGxvR3VscCdcclxuXHJcbmhlbGxvKFwid2VsY29tZVwiLCBcIlR5cGVTY3JpcHQgJiBHdWxwXCIpOyJdfQ==
