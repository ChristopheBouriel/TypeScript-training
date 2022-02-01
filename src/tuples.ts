// Tuples
let h: string[];
let t: [string, number, string] = ['a', 2, 'b'];


// Décomposition et inverse
function rest(...arg) {
    return arg;
};
let i = rest(1,2,3);
console.log(i);
/** La fonction renvoie un array des valeurs passées en arguments
 *  Avec le typage, on aura ce qui suit :
 */
function rest3(...tuple: [string, number, string?]) {}
// est équivalent à :
function rest2(arg1: string, arg2: number, arg3?: string) {};
