/**
 * Declare la variable message y escriba en ella un mensaje sobre la compra, 
 * la secuencia con el formato: message <nombre del artículo>, 
 * price per item is <precio del artículo> credits". 
 * Donde <nombre del artículo>yprecio del artículo>son los valores de
 *  las variablesproductNameypricePerItem`. 
 * Use la sintaxis de la secuencia de las plantillas.

Declare la variable productName
Declare el valor productName de la secuencia "Droid"
Declare la variable pricePerItem
Declare el valor price del número 3500
Declare la variable message
Declare el valor message de la secuencia "You picked Droid, 
price per item is 3500 credits"
 */

const productName = "Droid";
const pricePerItem = 3500;
const message = `You pcked ${productName}, price per item is ${pricePerItem}`;

console.log(message);