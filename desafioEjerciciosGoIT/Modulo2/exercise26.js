/**
 * Refactorizar el código de la función calculateTotalPrice(order), sustituyendo el ciclo de for a for...of.

Declare la función calculateTotalPrice(order)
Al llamar a la función calculateTotalPrice([12, 85, 37, 4]) devuelve 138
Al llamar a la función calculateTotalPrice([164, 48, 291]) devuelve 503
Al llamar a la función calculateTotalPrice([412, 371, 94, 63, 176]) devuelve 1116
Al llamar a la función calculateTotalPrice([]) devuelve 0
Al llamar a la función calculateTotalPrice() con un array aleatorio de números que devuelve la suma correcta.
 */
const calculateTotalPrice = order => {
    let suma = 0;
    for(const number of order){
        suma = suma + number;
    }
    return suma;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));