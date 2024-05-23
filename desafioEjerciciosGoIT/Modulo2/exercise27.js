/**
 * Refactorizar la función filterArray(numbers, value), sustituyendo el ciclo for por for...of.

Declare la función filterArray(numbers, value)
Al llamar a la función filterArray([1, 2, 3, 4, 5], 3) devuelve [4, 5]
Al llamar a la función filterArray([1, 2, 3, 4, 5], 4) devuelve [5]
Al llamar a la función filterArray([1, 2, 3, 4, 5], 5) devuelve []
Al llamar a la función filterArray([12, 24, 8, 41, 76], 38) devuelve [41, 76]
Al llamar a la función filterArray([12, 24, 8, 41, 76], 20) devuelve [24, 41, 76]
Al llamar a la función filterArray() con un array aleatorio y un número de arrays devueltos a la derecha
La función filterArray() usa el ciclo de for..of
 */

const filterArray = (numbers, value) => {
    let newArray = [];
    for(let i of numbers){
        if(i > value){
            newArray.push(i);
        }
    }
    return newArray;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));