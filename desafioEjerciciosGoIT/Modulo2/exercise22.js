/**
 * Complete el código de la función createArrayOfNumbers(min, max) para que devuelva un array de todos los enteros desde el valor de min hasta max.

Declare la función createArrayOfNumbers(min, max)
Al llamar a la función createArrayOfNumbers(1, 3) devuelve [1, 2, 3]
Al llamar a la función createArrayOfNumbers(14, 17) devuelve [14, 15, 16, 17]
Al llamar a la función createArrayOfNumbers(29, 34) devuelve [29, 30, 31, 32, 33, 34]
Al llamar a la función createArrayOfNumbers() con los valores aleatorios mín y máx devuelven el array correcto
El método push se uso en el ciclo for
 */

const createArrayOfNumbers = (min, max) => {
    let array = [];
    for(let i = min; i <= max; i++){
        array.push(i);
    }
    return array;
}
console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));