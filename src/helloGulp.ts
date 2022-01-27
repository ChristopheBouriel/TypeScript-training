/** Exemple simple pour utilisation avec Node (affichage console) */
/*export function hello(divName: string, names: string) {
    setTimeout(() => {
        console.log(`Hello from ${names}`)
    }, 4000);
}*/


/** Exemple avec création d'un bundle (affichage navigateur) */
export function hello(divName: string, names: string) {
    setTimeout(() => {
        const elt = document.getElementById(divName);
        elt.innerText = `Hello from ${names}`;
        /*console.log(`Hello from ${names}`)*/
        console.log('Welcoming message sent');
    }, 4000);
    
}
