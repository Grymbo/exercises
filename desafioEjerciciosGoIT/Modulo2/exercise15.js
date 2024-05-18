/**
 * Complete el código para que la variable allClients obtenga un array de todos los elementos de los arrays oldClients y newClients.

Declare la variable oldClients
El valor de la variable oldClients es un array ["Mango", "Ajax", "Poly", "Kiwi"]
Declare la variable newClients
El valor de la variable newClients es un array ["Peach", "Houston"]
Declare la variable allClients
El valor de la variable allClients es un array ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
La variable allClients asigna un array después de aplicar el método concat con los argumentos correctos

 */
let oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
let newClients = ["Peach", "Houston"];

let allClients = oldClients.concat(newClients);

console.log(allClients);