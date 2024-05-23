/**
 * Los elementos comunes de los arrays son esos elementos, que están presentes en todos los arrays.

Por ejemplo, en los dos arrays [1, 3, 5] y [0, 8, 5, 3], los números 3 y 5 son comunes porque están presentes en las dos arrays originales. Y los números 0, 1 y 8 sólo están presentes en uno de los arrays.

Escriba una función getCommonElements(array1, array2) que obtenga dos arrays de longitud arbitraria en los parámetros array1 y array2, y
devuelva un nuevo array formado por los elementos presentes en ambos arrays originales.

Declare la función getCommonElements(array1, array2)
Al llamar a getCommonElements([1, 2, 3], [2, 4]) devuelve [2]
Al llamar a getCommonElements([1, 2, 3], [2, 1, 17, 19]) devuelve [1, 2]
Al llamar a getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) devuelve [12, 27, 3]
Al llamar a getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) devuelve [10, 30, 40]
Al llamar a getCommonElements([1, 2, 3], [10, 20, 30]) devuelve []
Al llamar a la función getCommonElements() con dos arrays aleatorios que devuelve un array válido
El ciclo for usa los métodos includes y push
 */
const getCommonElements = (array1, array2) => {
    let newArray = [];
    for(let i = 0; i < array1.length; i++){
        /*
        for(let j = 0; j < array2.length; j++){
            if(array1[i] === array2[j]){
                newArray.push(array1[i])
            }
        }
        */
       if(array2.includes(array1[i])){
        newArray.push(array1[i]);
       }
    }
    return newArray;
}
console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));