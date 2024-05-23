/**
 * Escriba la función includes(array, value) que haga lo mismo que el método de array array.includes(value), compruebe si el array array tiene un valor value, devolviendo true si lo tiene y false en caso contrario.

Al realizar esta tarea en el cuerpo de la función includes() no puede usar el método array.includes(value).

Declare la función includes(array, value)
Al llamar a includes([1, 2, 3, 4, 5], 3) devuelve true
Al llamar a includes([1, 2, 3, 4, 5], 17) devuelve false
Al llamar a includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") devuelve true
Al llamar a includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") devuelve false
Al llamar a includes(["apple", "plum", "pear", "orange"], "plum") devuelve true
Al llamar a includes(["apple", "plum", "pear", "orange"], "kiwi") devuelve false
Al llamar a includes() para un array aleatorio con un `value' aleatorio que devuelve un correcto boolean
En la función includes se usa for, return, pero sin el método del array includes
 */
const includes = (array, value) => {
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return true;
        }
    }
    return false;
}
console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));