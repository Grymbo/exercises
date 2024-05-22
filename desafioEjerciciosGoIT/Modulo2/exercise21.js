/**
 * Escriba una función findLongestWord(string) que tome una secuencia arbitraria formada sólo por palabras separadas por espacios (parámetro string) y devuelva la palabra de mayor longuitud de esa secuencia.

Declare la función findLongestWord(string)
Al llamar a la función findLongestWord("The quick brown fox jumped over the lazy dog") devuelve jumped
Al llamar a la función findLongestWord("Google do a roll") devuelve Google
Al llamar a la función findLongestWord("May the force be with you") devuelve force
Al llamar a la función findLongestWord() con una secuencia aleatoria que devuelve el valor correcto
 */

const findLongestWord = string => {
    let palabras = string.split(" ");
    let palabraMasLarga = "";

    for(palabra of palabras){
        if(palabra.length > palabraMasLarga.length){
            palabraMasLarga = palabra;
        }
    }
    return palabraMasLarga;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));