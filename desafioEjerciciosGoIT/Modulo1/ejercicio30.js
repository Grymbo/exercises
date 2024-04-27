/**
 * La función getNameLength(name) toma un nombre (parámetro name) y devuelve una cadena, que especifica su longitud. Complemente la cadena del patrón en la variable message. con la longitud de la cadena del parámetro name.

Declare la función getNameLength(name)
Al llamar a la función getNameLength("Poly") devuelve "Name Poly is 4 characters long"
Al llamar a la función getNameLength("Harambe") devuelve "Name Harambe is 6 characters long"
Al llamar a la función getNameLength("Billy") devuelve "Name Billy is 5 characters long"
Al llamar a la función getNameLength("Joe") devuelve "Name Joe is 3 characters long"
 */

function getNameLength(name){
    const nameLength = name.length;
    const message = `Name ${name} is ${nameLength} characters long`;
    return message;
}
console.log(getNameLength("Poly"));
console.log(getNameLength("Harambe"));
console.log(getNameLength("Billy"));
console.log(getNameLength("Joe"));