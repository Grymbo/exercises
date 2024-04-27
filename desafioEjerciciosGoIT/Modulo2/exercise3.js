/**
 * La función checkStorage comprueba si el pedido puede realizarse y devuelve un mensaje sobre el resultado. Declara dos parámetros, valores que se establecerán en el momento de su llamada.

available - la cantidad disponible de artículos en stock
ordered - el número de artículos del pedido
Refactorizar el código de la función checkStorage usando el patrón de «early return».

Declare la función checkStorage(available, ordered)
Al llamar a checkStorage(100, 50) devuelve "The order is accepted, our manager will contact you"
Al llamar a checkStorage(100, 130) devuelve "Your order is too large, not enough goods in stock!"
Al llamar a checkStorage(70, 0) devuelve "Your order is empty!"
Al llamar a checkStorage(200, 20) devuelve "The order is accepted, our manager will contact you"
Al llamar a checkStorage(200, 250) devuelve "Your order is too large, not enough goods in stock!"
Al llamar a checkStorage(150, 0) devuelve "Your order is empty!"
 */

function checkStorage(available, ordered){
    if(ordered === 0){
        return "Your order is empty!";
    } if(available < ordered){
        return "Your order is too large, not enough goods in stock!";
    }
    return  "The order is accepted, our manager will contact you";
}
console.log(checkStorage(100,50));
console.log(checkStorage(100,130));
console.log(checkStorage(70,0));
console.log(checkStorage(200,20));
console.log(checkStorage(200,250));
console.log(checkStorage(150,0));