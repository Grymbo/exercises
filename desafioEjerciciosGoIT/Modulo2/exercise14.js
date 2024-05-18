/**
 * Complete el código para que las variables contengan copias parciales del array original fruits.

firstTwoEls - es un array de los dos primeros elementos
nonExtremeEls - es un array con todos los elementos excepto el primero y el último
lastThreeEls - es un array de los tres últimos elementos
Declare la función fruits
El valor de la variable fruits es un array ["apple", "plum", "pear", "orange", "banana"]
Declare la función firstTwoEls
El valor de la variable firstTwoEls es un array ["apple", "plum"]
Declare la función nonExtremeEls
El valor de la variable nonExtremeEls es un array ["plum", "pear", "orange"]
Declare la función lastThreeEls
El valor de la variable lastThreeEls es un array ["pear", "orange", "banana"]
La variable lastThreeEls asigna una copia de la parte del array fruits después de aplicar el método slice con los argumentos correctos

 */

const fruits = ["apple", "plum", "pear", "orange", "banana"];
var firstTwoEls = fruits.slice(0, 2);
var nonExtremeEls = fruits.slice(1,fruits.length - 1);
var lastThreeEls = fruits.slice(-3);

console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);