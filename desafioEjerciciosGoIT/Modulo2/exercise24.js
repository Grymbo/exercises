/**
 * La función checkFruit(fruit) toma una secuencia con el nombre de una fruta (parámetro fruit), y comprueba si existe dicha fruta en el array fruits.

Complete el código de la función por si:

la fruta está en el array, la función regresa true;
La fruta no está en el array, la función regresa false.
Declare la función checkFruit(fruit)
Al llamar a checkFruit("plum") devuelve true
Al llamar a checkFruit("mandarin") devuelve false
Al llamar a checkFruit("pear") devuelve true
Al llamar a checkFruit("Pear") devuelve false
Al llamar a checkFruit("apple") devuelve true
Al llamar a la función checkFruit() con una palabra aleatoria que devuelve el valor correcto boolean
La función usa el método includes
 */

const checkFruit = fruit => {
    const fruits = ["apple", "plum", "pear", "orange"];
    return fruits.includes(fruit);
}
console.log(checkFruit("plum"));
console.log(checkFruit("mandarin"));
console.log(checkFruit("pear"));
console.log(checkFruit("Pear"));
console.log(checkFruit("apple"));