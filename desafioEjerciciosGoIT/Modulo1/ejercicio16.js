/**
 * La función checkStorage(available, ordered) comprueba si el pedido 
 * puede efectuarse y devuelve un mensaje sobre el resultado. 
 * Declara dos parámetros, valores que se establecerán en el momento 
 * de su llamada:

available - la cantidad total de artículos en stock
ordered -las unidades de los artículos en el pedido
Usando la derivación, agregue el código de la función:

Si el pedido contiene un número que excede el número de artículos en el stock, la variable message escribe la cadena "Not enough goods in stock!".
De lo contrario aparecerá la cadena "Order is processed, our manager will 
contact you.".
Declare la función checkStorage(available, ordered).
Al llamar a checkStorage(100, 50) devuelve "Order is processed, 
our manager will contact you."
Al llamar a checkStorage(100, 130) devuelve "Not enough goods in stock!"
Al llamar a checkStorage(200, 20) devuelve "Order is processed, 
our manager will contact you."
Al llamar a checkStorage(200, 150) devuelve "Order is processed, 
our manager will contact you."
Al llamar a checkStorage(150, 180) devuelve "Not enough goods in stock!"
 */

function checkStorage(available, ordered) {
    let message;

    if(available >= ordered) {
        return message = "Order is processed, our manager will contact you.";
    } else {
        return message = "Not enough goods in stock!";
    };
};
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));