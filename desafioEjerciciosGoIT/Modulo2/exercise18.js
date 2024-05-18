/**
 * Escriba una función calculateTotal(number), que toma un entero (parámetro número) y devuelve la suma de todos los enteros desde el uno hasta ese número. Por ejemplo, si number es igual a 3, entonces la suma es 1 + 2 + 3, así que es 6.

Declare la función calculateTotal(number)
Al llamar a la función calculateTotal(1) devuelve 1
Al llamar a la función calculateTotal(3) devuelve 6
Al llamar a la función calculateTotal(7) devuelve 28
Al llamar a la función calculateTotal(18) devuelve 171
Al llamar a la función calculateTotal(24) devuelve 300
Al llamar a la función calculateTotal() con un número aleatorio que devuelve el valor correcto

 */
function calculateTotal(number){
    let count = 0;
    for(let i = 1; i <= number; i++){
        count += i;
    }
    return count;
}
console.log(calculateTotal(1));
console.log(calculateTotal(3));
console.log(calculateTotal(7));
console.log(calculateTotal(18));
console.log(calculateTotal(24));