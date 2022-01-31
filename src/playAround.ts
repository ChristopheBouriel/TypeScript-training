let a = (value: string | Array<any>) => console.log(value.length)
/** Si on ajoute un type number ( | number), l'IDE indiquera un problème car
 *  la propeiété length n'existe pas sur celui-ci
 */



interface Int1 {
    prop1: any,
    prop2: any,
}

interface Int2 {
    prop3: any
}

let b : Int1 & Int2 = {
    prop1: 1,
    prop2: 2,
    prop3: 3
}

let c : Int1 | Int2 = {
    prop1: 1,
    //prop2: 2,
    prop3: 3
}



let d : (value: number) => number[] = (value) => [value]
/** Si on veut pouvoir passer n'importe quel type, mais en s'assurant
 *  que celui de l'argument et du contenu de l'array sont identiques
 *  (donc on n'utilise pas any), on va utiliser le type générique  
 */
let e : <T>(value: T) => T[] = (value) => [value]

interface Int3 <T> {
    prop1: T,
    prop2: T
}
let f: Int3 <string> = {
    prop1: "ta",
    prop2: "dam" // si on met un number, la prop est soulignée
}

interface Int4 <T> {
    prop1: T,
    prop2: T[]
}
let g: Int4 <number> = {
    prop1: 2,
    prop2: [21]
}



class ClassOne <T> {
    constructor(public arg1: T, public arg2: T) {}

    toArray: () => T[] = () => [this.arg1, this.arg2]
    /** Ne prend rien en argument (ils ont été passés au constucteur)
     *  et retourne un array d'éléments du type (respectif) des arguments */ 
}

let h = new ClassOne(1, 2)
h.toArray
/** Même si on ne précise pas que le type est un number, l'éditeur le devine
 *  car on a passé des numbers en argument, et il nous indique au hover bien
 *  que la méthode toArray() doit nous renvoyer un array de numbers. Mais on
 *  peut aussi lui préciser : let h = new ClassOne <number> (1, 2)
 */




let decorator1 = (constructeur: any) => console.log('Décorateur 1 appelé')
/** Il faut préciser que le décorateur recevra automatiquement un argument quand
 *  il sera appelé (à chaque instantiation de la classe qu'il décore), à savoir
 *  le constructeur de la classe
 */
@decorator1
class ClassTwo <T> {
    constructor(public arg1: T, public arg2: T) {}
}


