/**
 * 
 * Complete el código de la función splitMessage(message, delimiter) para que devuelva la variable words el resultado de separar la secuencia message por el delimitador delimiter, un array de secuencias.

Declare la función splitMessage(message, delimiter)
Al llamar a splitMessage("Mango hurries to the train", " ") devuelve ["Mango", "hurries", "to", "the", "train"]
Al llamar a splitMessage("Mango", "") devuelve ["M", "a", "n", "g", "o"]
Al llamar a splitMessage("best_for_week", "_") devuelve ["best", "for", "week"]
 */

function splitMessage(message, delimiter){
    let words = message.split(delimiter);
    return words;
}
console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
console.log(splitMessage("best_for_week", "_"));