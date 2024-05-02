/**
 * Complete el código de la función makeStringFromArray(array, delimiter) para que devuelva la variable string el resultado de unir los elementos del array array con un delimitador delimiter, en una secuencia.

Declare la función makeStringFromArray(array, delimiter)
Al llamar a makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") devuelve "Mango hurries to the train"
Al llamar a makeStringFromArray(["M", "a", "n", "g", "o"], "")) devuelve "Mango"
Al llamar a makeStringFromArray(["top", "picks", "for", "you"], "_") devuelve "top_picks_for_you"

 */

function makeStringFromArray(array, delimiter){
    var string = array.join(delimiter);
    return string;
}
console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));