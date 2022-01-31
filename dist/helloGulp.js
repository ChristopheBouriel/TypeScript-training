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
