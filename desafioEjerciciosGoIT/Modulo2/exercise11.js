/**
 * Un servicio de grabado en joyas necesita una función que calcule automáticamente el precio del grabado, en función del número de palabras y del precio por palabra.

Declare la función calculateEngravingPrice(message, pricePerWord). Esta función toma una secuencia formada por palabras separadas sólo por espacios (parámetro message) y el precio de grabar una palabra (parámetro pricePerWord).

Escriba el cuerpo de la función para devolver el costo total de grabar todas las palabras de la secuencia.

Declare la función calculateEngravingPrice(message, pricePerWord)
Al llamar a calculateEngravingPrice("JavaScript is in my blood", 10) devuelve 50
Al llamar a calculateEngravingPrice("JavaScript is in my blood", 20) devuelve 100
Al llamar a calculateEngravingPrice("Web-development is creative work", 40) devuelve 160
Al llamar a calculateEngravingPrice("Web-development is creative work", 20) devuelve 80

 */

function calculateEngravingPrice(message, pricePerWord){
    const words = message.split(" ");
    const wordsPrice = words.length;
    const price = wordsPrice * pricePerWord;
    return price;
}
console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
console.log(calculateEngravingPrice("Web-development is creative work", 20));