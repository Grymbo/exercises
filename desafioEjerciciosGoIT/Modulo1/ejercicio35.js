/**
 * La función checkForName(fullname, name) toma dos parámetros y devuelve el boolean true o false, resultado de comprobar si la subsecuencia nombre aparece en la secuencia fullname.

-fullname, el nombre completo formado por dos palabras (nombre y apellido) separadas por un espacio.

name , el nombre para comprobar si forma parte del nombre completo.
Asigne una expresión a la variable result para comprobar si el nombre (parámetro name), al nombre completo (parámetro fullname). Que la función sea estrictamente sensible a las mayúsculas y minúsculas. La letra es mayúscula, es decir, «Petya» y «petya» son nombres completamente diferentes.

Declare la función checkForName(fullname, name).
Al llamar a la función checkForName("Egor Kolbasov", "Egor") devuelve true
Al llamar a la función checkForName("Egor Kolbasov", "egor") devuelve false
Al llamar a la función checkForName("Egor Kolbasov", "egOr") devuelve false
Al llamar a la función checkForName("Egor Kolbasov", "Zhenya") devuelve false
Al llamar a la función checkForName("Vadim Nekrasov", "Vadim") devuelve true
Al llamar a la función checkForName("Vadim Nekrasov", "vadim") devuelve false
Al llamar a la función checkForName("Vadim Nekrasov", "Dima") devuelve false
 */

function checkForName(fullname, name){
    const result = fullname.includes(name);
    return result;
}
console.log(checkForName("Egor Kolbasov", "Egor"));
console.log(checkForName("Egor Kolbasov", "egor"));
console.log(checkForName("Egor Kolbasov", "egOr"));
console.log(checkForName("Egor Kolbasov", "Zhenya"));
console.log(checkForName("Vadim Nekrasov", "Vadim"));
console.log(checkForName("Vadim Nekrasov", "vadim"));
console.log(checkForName("Vadim Nekrasov", "Dima"));