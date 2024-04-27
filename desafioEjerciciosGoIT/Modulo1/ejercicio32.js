/**
 * La función getSubstring(cadena, longitud) acepta una cadena y devuelve una subcadena desde el principio hasta la length de los símbolos. Declare dos parámetros, valores que se establecerán en el momento de su llamada:

string - cadena original
length - el número de caracteres desde el principio de la cadena para la subcadena
Asigne una expresión a la variable substring para crear una subcadena de longitud length de los símbolos (desde el principio) de la cadena string.

Declare la función getSubstring(string, length)
Al llamar a la función getSubstring("Hello world", 3) devuelve "Hel"
Al llamar a la función getSubstring("Hello world", 6) devuelve "Hello"
Al llamar a la función getSubstring("Hello world", 8) devuelve "Hello wo"
Al llamar a la función getSubstring("Hello world", 11) devuelve "Hello world"
 */

function getSubstring(cadena, longitud){
    const substring = cadena.slice(0, longitud);
    return substring;
}
console.log(getSubstring("Hello world",3));
console.log(getSubstring("Hello world",6));
console.log(getSubstring("Hello world",8));
console.log(getSubstring("Hello world",11));