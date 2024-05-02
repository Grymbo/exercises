/**
 * El término slug es un identificador único legible por el ser humano que se usa en el desarrollo web para crear URLs legibles.

Por ejemplo, en lugar de que el usuario vea en la barra de direcciones mysite.com/posts/1q8fh74tx, usted podría hacer slug del título del artículo. En el resultado habrá una dirección más aceptable: mysite.com/posts/arrays-for-begginers.

Atención
Slug es siempre una secuencia en minúsculas con palabras separadas por un guión.

Escriba una función slugify(title) que toma el título del artículo, parámetro title, y devuelve el slug creado a partir de esta secuencia.

El valor del parámetro title será una secuencia de símbolos en donde las palabras sólo estén separadas por por los espacios .
Todos los símbolos lug deben estar en minúsculas
Todas las palabras lug deben estar separadas por un guión
Declare la función slugify(title)
Al llamar a slugify("Arrays for begginers") devuelve "arrays-for-begginers"
Al llamar a slugify("English for developer") devuelve "english-for-developer"
Al llamar a slugify("Ten secrets of JavaScript") devuelve "ten-secrets-of-javascript"
Al llamar a slugify("How to become a JUNIOR developer in TWO WEEKS") devuelve "how-to-become-a-junior-developer-in-two-weeks"

 */

function slugify(title){
    var wordsToLowerCase = title.toLowerCase().split(" ").join("-");
    return wordsToLowerCase;
}
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));