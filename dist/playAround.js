var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var a = function (value) { return console.log(value.length); };
var b = {
    prop1: 1,
    prop2: 2,
    prop3: 3
};
var c = {
    prop1: 1,
    //prop2: 2,
    prop3: 3
};
var d = function (value) { return [value]; };
/** Si on veut pouvoir passer n'importe quel type, mais en s'assurant
 *  que celui de l'argument et du contenu de l'array sont identiques
 *  (donc on n'utilise pas any), on va utiliser le type générique
 */
var e = function (value) { return [value]; };
var f = {
    prop1: "ta",
    prop2: "dam" // si on met un number, la prop est soulignée
};
var g = {
    prop1: 2,
    prop2: [21]
};
var ClassOne = /** @class */ (function () {
    function ClassOne(arg1, arg2) {
        var _this = this;
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.toArray = function () { return [_this.arg1, _this.arg2]; };
    }
    return ClassOne;
}());
var h = new ClassOne(1, 2);
h.toArray;
/** Même si on ne précise pas que le type est un number, l'éditeur le devine
 *  car on a passé des numbers en argument, et il nous indique au hover bien
 *  que la méthode toArray() doit nous renvoyer un array de numbers. Mais on
 *  peut aussi lui préciser : let h = new ClassOne <number> (1, 2)
 */
var decorator1 = function (constructeur) { return console.log('Décorateur 1 appelé'); };
/** Il faut préciser que le décorateur recevra automatiquement un argument quand
 *  il sera appelé (à chaque instantiation de la classe qu'il décore), à savoir
 *  le constructeur de la classe
 */
var ClassTwo = /** @class */ (function () {
    function ClassTwo(arg1, arg2) {
        this.arg1 = arg1;
        this.arg2 = arg2;
    }
    ClassTwo = __decorate([
        decorator1
    ], ClassTwo);
    return ClassTwo;
}());
