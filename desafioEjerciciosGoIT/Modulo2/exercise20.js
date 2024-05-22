/**
 * Escriba una función calculateTotalPrice(order), que tome un único parámetro orden, un array de números, y calcule la suma total de sus elementos. La suma total de los elementos debe almacenarse en una variable total, que se devuelve como resultado de la función.

Declare la función calculateTotalPrice(order)
Al llamar a la función calculateTotalPrice([12, 85, 37, 4]) devuelve 138
Al llamar a la función calculateTotalPrice([164, 48, 291]) devuelve 503
Al llamar a la función calculateTotalPrice([412, 371, 94, 63, 176]) devuelve 1116
Al llamar a la función calculateTotalPrice() con un array aleatorio le devuelve el valor correcto
 */

const calculateTotalPrice = order => {
    let suma = 0;
    for(let i = 0; i < order.length; i++){
        suma += order[i];
    }
    return suma;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));