/**
 * Escriba una función filterArray(numbers, value) que tome un array de números (parámetro numbers) y que devuelva un nuevo array con sólo aquellos elementos del array numbers que sean mayores que el valor del parámetro value (número).

Declare la función filterArray(numbers, value)
Al llamar a la función filterArray([1, 2, 3, 4, 5], 3) devuelve [4, 5]
Al llamar a la función filterArray([1, 2, 3, 4, 5], 4) devuelve [5]
Al llamar a la función filterArray([1, 2, 3, 4, 5], 5) devuelve []
Al llamar a la función filterArray([12, 24, 8, 41, 76], 38) devuelve [41, 76]
Al llamar a la función filterArray([12, 24, 8, 41, 76], 20) devuelve [24, 41, 76]
Al llamar a la función filterArray() con un array aleatorio y un número de arrays que devuelve el valor correcto
El ciclo for usa el método push
 */

const filterArray = (numbers, value) => {
    let newArray = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > value){
            newArray.push(numbers[i])
        }
    }
    return newArray;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));