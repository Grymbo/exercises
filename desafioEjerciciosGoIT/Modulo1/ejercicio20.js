/**
 * La función checkStorage(available, ordered) 
 * comprueba si el pedido está disponible y devuelve un mensaje 
 * sobre el resultado. Declara dos parámetros, 
 * valores que se establecerán en el momento de su llamada.

available - la cantidad disponible de artículos en stock
ordered - las unidades en el pedido
Usando la derivación, que genera el código de la función:

Si todavía no hay artículos en el pedido, es decir, el valor del parámetro ordered es igual a 0, en la secuencia message se asigna a la variable "There are no products in the order!".
Si hay más artículos en el pedido que artículos en stock, entonces la variable message se asigna a la cadena "Your order is too large, there are not enough items in stock!".
En caso contrario, la variable message se asigna a la cadena "The order is accepted, our manager will contact you".
Declare la función checkStorage(available, ordered)
Al llamar a checkStorage(100, 50) devuelve "The order is accepted, our manager will contact you"
Al llamar a checkStorage(100, 130) devuelve "Your order is too large, there are not enough items in stock!"
Al llamar a checkStorage(70, 0)devuelve "There are no products in the order!"
Al llamar a checkStorage(200, 20) devuelve "The order is accepted, our manager will contact you"
Al llamar a checkStorage(200, 250) devuelve "Your order is too large, there are not enough items in stock!"
Al llamar a checkStorage(150, 0) devuelve "There are no products in the order!"
 */

function checkStorage(available, ordered) {
    let message;

    if(ordered === 0) {
        message = "There are no products in the order!";
    } else if(ordered > available) {
        message = "Your order is too large, there are not enough items in stock!";
    } else {
        message = "The order is accepted, our manager will contact you";
    }
    return message;
};
console.log(checkStorage(100,50));
console.log(checkStorage(100,130));
console.log(checkStorage(70,0));
console.log(checkStorage(200,20));
console.log(checkStorage(200,250));
console.log(checkStorage(150,0));