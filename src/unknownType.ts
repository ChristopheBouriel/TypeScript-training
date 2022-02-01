let x: unknown;
let a: any;

a.length
x.length
/** Là où le bénéfice du doute est accordé à any concernant l'existence
 *  de la propriété length sur la variable a, il ne le fait pas pour x
 */

let c: string = a;
let d: string = x;
/** Il faut préciser que l'on a certaines informations sur ce type inconnu
 *  Si on ajoute un contrôle de type sur la variable x, on peut alors effectuer
 *  les opérations voulues :
 */
if ('string' === typeof x) {
    x.length;
    let e: string = x;
}
/** Pour formaliser ce process 
 *  on peut utiliser une catégorie de fonction particulière : les guard functions
 *  Elles retourne un type particulier et c'est ce qui les distingue
 * La syntaxe indique à TS que c'est une fonction guard
*/
if (isString(x)) {
    x.length;
    let e: string = x;
}
function isString(value: unknown): value is string {
    return 'string' === typeof value
}
