/**
 * Escriba una función makeArray(firstArray, secondArray, maxLength) para crear un nuevo array con todos los elementos de los dos originales firstArray y secondArray. El parámetro maxLength contiene la longitud máxima permitida del nuevo array.

Si el número de elementos del nuevo array es mayor que maxLength, la función debe devolver una copia del array con la longitud de elementos de maxLength. En caso contrario, la función debería devolver el nuevo array completo.

Declare la función makeArray(firstArray, secondArray, maxLength)
Al llamar a makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) devuelve ["Mango", "Poly", "Ajax"]
Al llamar a makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) devuelve ["Mango", "Poly", "Houston", "Ajax"]
Al llamar a makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) devuelve ["Mango", "Ajax", "Chelsea"]
Al llamar a makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) devuelve ["Earth", "Jupiter"]
Al llamar a makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) devuelve ["Earth", "Jupiter", "Neptune", "Uranus"]
Al llamar a makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) devuelve []
Al llamar a la función makeArray() con arrays aleatorios y un número aleatorio devuelve el array correcto

 */
function makeArray(firstArray, secondArray, maxLength){
    let newArray = firstArray.concat(secondArray).slice(0, maxLength);
    return newArray;

    
    
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));