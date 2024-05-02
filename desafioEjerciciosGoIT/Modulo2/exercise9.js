/**
 * Escriba una función getExtremeElements(array) que toma un único parámetro array, un array de elementos de longitud arbitraria. La función debe devolver un array de dos elementos, el primer y el último elemento del parámetro array.

Declare la función getExtremeElements(array)
Al llamar a getExtremeElements([1, 2, 3, 4, 5]) devuelve [1, 5]
Al llamar a getExtremeElements(["Earth", "Mars", "Venus"]) devuelve ["Earth", "Venus"]
Al llamar a getExtremeElements(["apple", "peach", "pear", "banana"]) devuelve ["apple", "banana"]
 */

function getExtremeElements(array){
    const array1 = [array[0], array[array.length - 1]];
    return array1;
}
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));